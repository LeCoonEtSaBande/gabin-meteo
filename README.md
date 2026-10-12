# Gabin-meteo — archive des balises

Branche `balises` : les mesures des balises, relevées **toutes les 30 minutes**, une journée de Paris par fichier.

Vue d’ensemble du dépôt : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md). Balises en direct : [la carte](https://lecoonetsabande.github.io/gabin-meteo/).

## Règle

- Pas de **30 minutes**, heures en **Europe/Paris**. Une journée fait 48 créneaux, 46 ou 50 les jours de changement d’heure.
- **Deux écritures par jour.** À 23 h le jour en cours est posé, encore partiel (`complet: false`) ; au premier passage suivant il est **clôturé** : tous ses créneaux sont relus depuis le début, ce qui répare au passage ce que le passage du soir avait manqué (`complet: true`).
- Une relecture **complète** le fichier, elle ne le remplace pas : les valeurs relues prennent la place des anciennes, mais un créneau qu'une source momentanément muette ne rend plus reste en place. `--force` seul repart de zéro.
- **Toutes les balises de la fiche** `assets/balises_specs/balises_specifications.csv` d’`affichage-web`, lue à chaque passage. En ajouter une ne demande que sa ligne là-bas : l’archive la suit sans toucher au code.
- Mesures **brutes des stations**, sans assemblage ni interpolation. Un créneau sans mesure est absent du fichier, il n’est pas comblé.
- `complet: true` veut dire que **tous les créneaux du jour sont passés et ont été relus**, pas qu’il n’y a aucun trou : la couverture réelle est dans `couverture` du `.json` et dans la colonne *Créneaux* du `.md`. Pour rattraper un trou, relancer le workflow à la main avec `day` (dans les quatre jours d’historique de Météo-France).

## Sources

| Source | Appel | Ce qu’on lit |
| --- | --- | --- |
| Météo-France | `DPObs/v2/station/infrahoraire-6m?id_station=…&date=<créneau>` | La mesure 6 min posée sur le créneau : `ff` (vent moyen 10 min, m/s), `raf10` (rafale, m/s), `dd` / `ddraf10` (direction), `t` (température, K) |
| MétéoSuisse | `ogd-smn_<id>_t_now.csv` et la fin de `ogd-smn_<id>_t_recent.csv` | La mesure 10 min du même instant : `fu3010z0` (vent moyen, km/h), `fu3010z1` (rafale, km/h), `dkl010z0` (direction), `tre200s0` (température, °C) |

Détails qui comptent :

- **DPObs ne rend qu’une mesure par appel** : il faut un appel par (balise, créneau), soit 48 appels par balise française et par jour. Le quota public est de 100 appels par minute ; le script attend 0,7 s entre deux appels et réessaie un 429 au bout de 15, 30 puis 45 s. Une clôture complète prend une dizaine de minutes.
- L’historique 6 min de Météo-France **ne remonte qu’à environ quatre jours**. Au-delà, `--day` rend une journée sans balises françaises.
- `dd = 0` est le **calme** au sens OMM, le nord vaut 360. Au calme la station ne donne pas de provenance : on reprend celle de la rafale si elle est fournie, comme le fait le site, sinon la case reste vide.
- Côté suisse, une journée de Paris commence la veille en UTC : `t_now` ne couvre que le jour UTC en cours, les premières heures viennent de `t_recent`. Ce fichier pèse plus de 5 Mo et n’est réécrit qu’une fois par jour, donc on n’en lit que les derniers 512 ko par requête `Range`, soit une quinzaine de jours de mesures.

## Fichiers

```
index.md                              # liste des jours archivés (liens raw)
data/archive/AAAA/MM/AAAA-MM-JJ.csv   # une ligne par (balise, créneau)
data/archive/AAAA/MM/AAAA-MM-JJ.md    # pics 8 h–20 h puis tableau créneau par créneau (lisible par Claude)
data/archive/AAAA/MM/AAAA-MM-JJ.json  # couverture, mode d'écriture, sources
```

Colonnes CSV, séparateur `;` :

| Colonne | Contenu |
| --- | --- |
| `day` | Journée de Paris archivée (AAAA-MM-JJ) |
| `station_key`, `source`, `source_id` | Balise, telle que dans la fiche d’`affichage-web` |
| `valid_at` | Créneau en heure de Paris, décalage inclus (`2026-10-11T14:30+02:00`), pour que la nuit du changement d’heure reste lisible |
| `step_min` | Pas de la grille, 30 |
| `wind_speed_10m_kn`, `wind_gusts_10m_kn` | Vent moyen et rafale en **nœuds** |
| `wind_direction_10m_deg`, `wind_direction_card` | Direction **d’où vient le vent**, en degrés et en lettres (N, NNE, NE…) |
| `temperature_2m_c` | Température en °C |
| `latitude`, `longitude`, `elevation_m` | Position de la station |
| `fetched_at` | Heure de lecture du passage qui a écrit la ligne |

Lecture depuis Claude : `https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/balises/index.md`.

## Workflow

*Archive des balises (30 min)* (sur `main`) : cron `10 11,12,21,22 * * *` UTC. Quatre déclenchements pour couvrir été et hiver ; le script ne retient que la fenêtre de **23 h** (écriture du jour en cours) et celle d’**avant 18 h** (clôture de la veille), ce qui fait deux écritures par jour dans les deux saisons. Les autres passages ne font rien, sauf rattraper un échec. Déclenchement manuel : `day` (AAAA-MM-JJ) et `force` pour réécrire un jour déjà clôturé, en repartant de zéro au lieu de le compléter.

La clé Météo-France vient du secret de dépôt `METEOFRANCE_API_KEY` (Settings → Secrets and variables → Actions). Elle n’est jamais dans le dépôt.

## Lancer en local

```bash
git switch balises
mkdir -p _web && git --work-tree=_web checkout affichage-web -- assets/balises_specs   # ou un checkout d'affichage-web
export METEOFRANCE_API_KEY=…
python src/archive/run.py --specs _web/assets/balises_specs/balises_specifications.csv --day 2026-10-11 --force
```

Tests : `cd src/archive && python -m unittest test_run`.
