# Gabin-meteo — archive des balises

Branche `balises` : les mesures des balises, relevées **toutes les 30 minutes** (et toutes les **6 minutes** pour Reventin et Étoile entre 11 h et 19 h), une journée de Paris par fichier.

Vue d’ensemble du dépôt : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md). Balises en direct : [la carte](https://lecoonetsabande.github.io/gabin-meteo/).

## Règle

- Pas de **30 minutes**, heures en **Europe/Paris**. Une journée fait 48 créneaux, 46 ou 50 les jours de changement d’heure.
- **Un pas fin par balise**, déclaré dans la fiche : `pas_fin_min`, `pas_fin_debut_h`, `pas_fin_fin_h`. Reventin et Étoile sont ainsi relevées toutes les 6 minutes de 11 h à 19 h, soit 112 créneaux au lieu de 48. Les deux grilles se recouvrent aux heures et demies : c’est une union, pas une somme.
- **Une seule écriture par jour**, à 1 h du matin, sur la journée **déjà terminée**. Elle est donc complète du premier coup : il n’y a plus de pose partielle le soir ni de clôture le lendemain.
- **Le jour visé vient du calendrier, pas de l’heure du run.** Les cinq déclenchements du cron visent tous la veille parisienne. Le premier qui aboutit écrit l’archive, les suivants la trouvent faite et sortent. Un retard de GitHub ne décale donc jamais la cible, il ne coûte que des appels de rattrapage.
- Une relecture **complète** le fichier, elle ne le remplace pas : les valeurs relues prennent la place des anciennes, mais un créneau qu’une source momentanément muette ne rend plus reste en place. `--force` seul repart de zéro.
- **Toutes les balises de la fiche** `assets/balises_specs/balises_specifications.csv` d’`affichage-web`, lue à chaque passage. En ajouter une, ou changer son pas fin, ne demande que sa ligne là-bas : l’archive suit sans toucher au code.
- Mesures **brutes des stations**, sans assemblage ni interpolation. Un créneau sans mesure est absent du fichier, il n’est pas comblé.
- `complet: true` veut dire que **tous les créneaux du jour sont passés et ont été relus**, pas qu’il n’y a aucun trou : la couverture réelle est dans `couverture` du `.json` et dans la colonne *Créneaux* du `.md`. Pour rattraper un trou, relancer le workflow à la main avec `day` (dans les quatre jours d’historique de Météo-France).

## Sources

| Source | Appel | Ce qu’on lit |
| --- | --- | --- |
| Météo-France, le paquet | `DPPaquetObs/v1/paquet/infrahoraire-6m?id_station=…` | Les **24 h écoulées au pas de 6 min en un seul appel** : `ff` (vent moyen 10 min, m/s), `raf10` (rafale, m/s), `dd` / `ddraf10` (direction), `t` (température, K) |
| Météo-France, le rattrapage | `DPObs/v2/station/infrahoraire-6m?id_station=…&date=<créneau>` | **Une** mesure, celle du créneau demandé, mêmes champs |
| MétéoSuisse | `ogd-smn_<id>_t_now.csv` et la fin de `ogd-smn_<id>_t_recent.csv` | La mesure 10 min du même instant : `fu3010z0` (vent moyen, km/h), `fu3010z1` (rafale, km/h), `dkl010z0` (direction), `tre200s0` (température, °C) |

Le paquet porte toute la stratégie : une journée entière de balise, pas fin compris, tient dans un appel. Le rattrapage unitaire ne sert qu’aux créneaux que les 24 h glissantes ne couvrent plus.

### Ce que coûte une journée

| Situation | Paquets | Appels unitaires | Total Météo-France |
| --- | --- | --- | --- |
| Run à l’heure, 0h10 en hiver | 8 | 8 (le créneau de minuit) | **16** |
| Run à l’heure, 1h10 en été | 8 | 24 (minuit à 1 h) | **32** |
| Dernier cron, 5h10 en été | 8 | 88 | 96 |
| Retard jusqu’à 11 h, fenêtre fine encore couverte | 8 | 176 | 184 |
| Retard à 13 h, la fenêtre fine commence à coûter | 8 | 240 | 248 |
| `--day` sur un jour plus ancien, paquet inutile | 8 | 512 | 520 |

Le plafond public est de **100 appels par minute**, pas par jour : c’est un débit, pas un budget. Le script attend 0,7 s entre deux appels unitaires, ce qui tient le rythme sous 90 par minute, et réessaie un 429 au bout de 15, 30 puis 45 s. Même le pire cas, 512 appels, passe en six minutes.

La **fenêtre fine reste gratuite** tant que le run part avant 11 h : le paquet de 24 h couvre encore les 11 h – 19 h de la veille. Au-delà, ce sont les 80 créneaux de 6 minutes de Reventin et d’Étoile qui partent en unitaire, d’où le saut à 512 dans la dernière ligne.

Les trois balises suisses coûtent 6 lectures de fichiers statiques, sans quota.

### Détails qui comptent

- La clé Météo-France doit porter l’abonnement **`DonneesPubliquesPaquetObservation`**. Sans lui le paquet répond `403` : le script le dit une fois par balise et fait tout en unitaire, ce qui marche mais coûte 512 appels au lieu de 16. Les abonnements sont inscrits dans le jeton : s’abonner d’abord, régénérer la clé ensuite.
- La rétention du paquet est de **24 h glissantes**, sans archive. L’historique 6 min de DPObs **ne remonte qu’à environ quatre jours** ; au-delà, `--day` rend une journée sans balises françaises.
- `dd = 0` est le **calme** au sens OMM, le nord vaut 360. Au calme la station ne donne pas de provenance : on reprend celle de la rafale si elle est fournie, comme le fait le site, sinon la case reste vide.
- Côté suisse, une journée de Paris commence la veille en UTC : `t_now` ne couvre que le jour UTC en cours, les premières heures viennent de `t_recent`. Ce fichier pèse plus de 5 Mo et n’est réécrit qu’une fois par jour, donc on n’en lit que les derniers 512 ko par requête `Range`, soit une quinzaine de jours de mesures.
- **30 minutes est le seul pas qui tombe juste des deux côtés** : il est multiple des 6 minutes françaises et des 10 minutes suisses. Décimer à 10 minutes aurait donné des intervalles réels de 12, 6, 12 minutes sur les balises françaises.

## Fichiers

```
index.md                              # liste des jours archivés (liens raw)
data/archive/AAAA/MM/AAAA-MM-JJ.csv   # une ligne par (balise, créneau), pas fin compris
data/archive/AAAA/MM/AAAA-MM-JJ.md    # pics 8 h–20 h puis tableau aux demi-heures (lisible par Claude)
data/archive/AAAA/MM/AAAA-MM-JJ.json  # couverture, créneaux attendus par balise, pas fin, sources
```

Le `.md` reste **aux demi-heures partout**, y compris pour Reventin et Étoile : un tableau de 112 lignes se lit mal. Les **pics**, eux, sont calculés sur toutes les mesures, fines comprises, et le `.csv` les contient toutes.

Colonnes CSV, séparateur `;` :

| Colonne | Contenu |
| --- | --- |
| `day` | Journée de Paris archivée (AAAA-MM-JJ) |
| `station_key`, `source`, `source_id` | Balise, telle que dans la fiche d’`affichage-web` |
| `valid_at` | Créneau en heure de Paris, décalage inclus (`2026-10-11T14:30+02:00`), pour que la nuit du changement d’heure reste lisible |
| `step_min` | Pas du créneau : 30, ou 6 dans la plage fine de la balise |
| `wind_speed_10m_kn`, `wind_gusts_10m_kn` | Vent moyen et rafale en **nœuds** |
| `wind_direction_10m_deg`, `wind_direction_card` | Direction **d’où vient le vent**, en degrés et en lettres (N, NNE, NE…) |
| `temperature_2m_c` | Température en °C |
| `latitude`, `longitude`, `elevation_m` | Position de la station |
| `fetched_at` | Heure de lecture du passage qui a écrit la ligne |

Les journées archivées avant le pas fin gardent leur format : leur `.json` ne porte qu’un nombre de créneaux commun à toutes les balises, et l’index les relit telles quelles sans les réécrire.

Lecture depuis Claude : `https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/balises/index.md`.

## Workflow

*Archive des balises* (sur `main`) : cron `10 23,0,1,2,3 * * *` UTC. 23:10 UTC tombe à 1h10 en été et 0h10 en hiver ; dans les deux cas la veille parisienne est close et c’est ce passage qui écrit. Les quatre autres déclenchements trouvent un jour déjà archivé et ne font rien, sauf rattraper un passage échoué. Déclenchement manuel : `day` (AAAA-MM-JJ) et `force` pour réécrire un jour déjà archivé, en repartant de zéro au lieu de le compléter.

La clé Météo-France vient du secret de dépôt `METEOFRANCE_API_KEY` (Settings → Secrets and variables → Actions). Elle n’est jamais dans le dépôt, et c’est la même que celle du Worker Cloudflare : en la régénérant pour ajouter l’abonnement au paquet, il faut la reposer aux deux endroits.

## Lancer en local

```bash
git switch balises
mkdir -p _web && git --work-tree=_web checkout affichage-web -- assets/balises_specs   # ou un checkout d'affichage-web
export METEOFRANCE_API_KEY=…
python src/archive/run.py --specs _web/assets/balises_specs/balises_specifications.csv --day 2026-10-11 --force
```

Tests : `cd src/archive && python -m unittest test_run`.
