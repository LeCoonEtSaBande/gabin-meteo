# Gabin-meteo

Surveillance météo de spots (Rhône-Alpes / Léman) : prévisions Open-Meteo, traitement des courbes, carte web quotidienne.

Carte publique : [lecoonetsabande.github.io/gabin-meteo](https://lecoonetsabande.github.io/gabin-meteo/)

## Branches

Ce dépôt n’est **pas** un historique unique fusionné dans `main`. Chaque branche a son rôle ; elles partagent seulement le commit d’initialisation.

| Branche | Contenu | README détaillé |
| --- | --- | --- |
| `main` | Workflows GitHub Actions (cron et enchaînement) et Worker Cloudflare des balises. Pas de données métier. | ce fichier |
| `collecte-api-meteo` | Script Python, CSV bruts Open-Meteo, **specs parentes** des spots | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/collecte-api-meteo/README.md) |
| `traitement-donnees` | Courbes assemblées, JSON des puces et du graphique, Markdown pour Claude (**parent** de `data/processed`) | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/traitement-donnees/README.md) |
| `affichage-web` | Site GitHub Pages (copies publiées + front) | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/affichage-web/README.md) |
| `archive-previsions` | Prévision AROME HD / ICON-CH1 du jour, figée à 1 h du matin | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/archive-previsions/README.md) |
| `balises` | Mesures des balises de la veille, une journée de Paris par fichier | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/balises/README.md) |

Les changements d’interface vont sur `affichage-web`, ceux de collecte, de traitement et d’archive sur leur branche. `main` ne reçoit que les workflows, le Worker des balises et la doc d’ensemble.

Ne jamais réécrire l’historique de `collecte-api-meteo` (force push, squash) : l’archive de 1 h relit les collectes passées dans cet historique.

## Source unique des données

Chaque jeu a **un seul fichier parent**. Les autres branches ne l’éditent pas : elles le lisent, ou le workflow le recopie.

| Donnée | Parent (à éditer) | Transit |
| --- | --- | --- |
| Spots et zones (`assets/spots_specs/*.csv`) | `collecte-api-meteo` | Lues par le traitement (checkout / `git show`). Recopiées vers `affichage-web` à chaque run |
| Prévisions brutes (`data/raw/`) | `collecte-api-meteo` | Lues par le traitement, jamais versionnées ailleurs |
| Courbes et JSON quotidien (`data/processed/`) | `traitement-donnees` | Recopiés vers `affichage-web` (`quotidien.json`, `creneaux.json`, `last_update.json`, `AROMEIFS.csv`, `ICONGFS.csv`, `llm/`) |
| Archive de 1 h (`data/archive/`) | `archive-previsions` | Lue par Claude via `raw.githubusercontent.com` |
| Balises (`assets/balises_specs/balises_specifications.csv`) | `affichage-web` | Relue telle quelle par le Worker (`SPECS_URL`), par le front et par l’archive des balises |
| Archive des balises (`data/archive/`) | `balises` | Lue par Claude via `raw.githubusercontent.com` |

Sur `affichage-web`, `assets/spots_specs/` et `data/processed/` sont des **copies publiées** pour GitHub Pages. Ne pas les modifier à la main. `traitement-donnees` ne versionne pas les specs ni les bruts.

## Pipeline (2 fois par jour)

Le cron `28 5,17 * * *` est fixe en UTC : il part à **6h28 / 18h28** à Paris en hiver et à **7h28 / 19h28** en été. Tenir 18h28 Paris l’été voudrait partir à 16h28 UTC, avant que le run ICON-CH1 de 15 UTC soit sûrement publié ; l’heure de décalage d’été est le prix d’une collecte du soir toujours fraîche.

GitHub retarde souvent ces déclenchements, parfois de plusieurs heures. Un cron en retard collecte encore le créneau ouvert ; un doublon est ignoré si la collecte a déjà réussi. L’heure réelle de collecte est affichée sur la carte (« MAJ ») et dans les fichiers pour Claude. Entre deux collectes il peut donc s’écouler jusqu’à douze heures.

```
main : Collecte Open-Meteo
        → checkout collecte-api-meteo, fetch Open-Meteo, push data/raw
main : Traitement et affichage  (après un run de collecte réussi)
        → checkout traitement-donnees + bruts/specs (sans les committer)
        → python src/traitement/run.py
        → push data/processed sur traitement-donnees
        → copie specs, JSON, courbes AROMEIFS/ICONGFS et llm/ sur affichage-web
GitHub Pages  (source : racine de affichage-web)
main : Archive des prévisions de 1 h  (cron 1h05 Paris, pour le jour qui commence)
        → checkout archive-previsions + historique de collecte-api-meteo
        → python src/archive/run.py (sans appel API)
        → push data/archive et index.md sur archive-previsions
main : Archive des balises  (cron 1h10 Paris, pour la journée écoulée)
        → checkout balises + fiche des balises d'affichage-web
        → python src/archive/run.py (appels Météo-France et MétéoSuisse)
        → push data/archive et index.md sur balises
```

Les deux archives tournent à 1 h du matin et visent une journée déjà déterminée par le calendrier, pas par l’heure du run : un cron en retard produit le même fichier. L’archive des balises paie seulement un peu de rattrapage, le paquet Météo-France ne remontant que 24 h glissantes.

Déclenchement manuel : Actions → *Collecte Open-Meteo* (`force` ignore le filtre de créneau), *Traitement et affichage*, *Archive des prévisions de 1 h* (`day`, `force`) ou *Archive des balises* (`day`, `force`).

## Données

- **17 spots** dans **11 zones** (Léman, Annecy, Bourget, Rhône, Saône, Laffrey, Monteynard, Grand Large…).
- **7 modèles** Open-Meteo : AROMEHD, ARPEGE, ICONCH1, ICONCH2, ICON13KM, IFS, GFS.
- Vent et rafales demandés et stockés en **nœuds**.
- Chaque modèle est demandé sur **tout son horizon** (AROME HD 51 h, ICON-CH1 33 h, IFS 15 jours…).
- Créneaux de vent du panneau quotidien : **≥ 3 h** de vent moyen **> 10 nds** entre 8 h et 20 h, bornes arrondies à l’heure entière. Pas de repli sur les rafales.

| Jeu | Enchaînement court → long terme | Usage |
| --- | --- | --- |
| `AROMEIFS` | AROMEHD → ARPEGE → IFS | puces (spots AROME) + graphique (courbe par défaut des spots AROME) |
| `ICONIFS` | ICONCH1 → ICONCH2 → ICON13KM → IFS | puces (spots ICON) |
| `ICONGFS` | ICONCH1 → ICONCH2 → ICON13KM → GFS | graphique (courbe par défaut des spots ICON) |

Une courbe garde le modèle le plus court terme jusqu’à sa dernière échéance, puis le modèle suivant prend le relais.

## Site

- Coque HTML (onglets, date, puces) autour d’une **carte SVG seule**.
- Vue *Tendances journalières* : une puce par zone avec icône météo, vent max 8 h–20 h, créneau, température à 15 h.
- Panneau détail : specs, liens, graphiques `AROMEIFS` / `ICONGFS` (1 / 3 / 5 jours, tooltip, plein écran). Sur le graphique : trait pointillé à 10 nds, zone colorée là où le vent moyen dépasse 10 nds, valeurs des pics de vent moyen et de rafales (nombre seul), et bornes du créneau de chaque courbe sous l’axe des heures.
- Onglet *Balises temps réel* : vignettes des balises sur la carte, clic = courbe du jour avec la prévision du spot le plus proche.

## Balises temps réel

Mesures du jour des **11 stations** automatiques, affichées dans l’onglet *Balises* : vent moyen et rafale du dernier pas **en nœuds**, flèche vers où souffle le vent, provenance en lettres, pas de minimum.

| Source | Appel | Contenu | Clé |
| --- | --- | --- | --- |
| MétéoSuisse (`ogd-smn`, 3 stations) | Fichier du jour UTC en cours | Journée entière, pas de 10 min | non |
| Météo-France (`DPPaquetObs v1`, 8 stations) | Paquet d’une station | 24 h glissantes, pas de 6 min | oui |

**Une balise = un appel**, soit onze en tout. Le navigateur n’appelle qu’une seule adresse, le **Worker Cloudflare `gabin-meteo`** (`worker/`, déployé sur `https://gabin-meteo.garinlu-subs.workers.dev/balises`) : il garde la clé Météo-France en secret, interroge les deux sources, convertit tout en nœuds et met le résultat en cache 3 min.

Les mesures sont ramenées sur une grille de **30 minutes** — seul pas qui tombe juste à la fois sur les 6 minutes françaises et les 10 minutes suisses, donc sans déplacer aucune mesure. **Reventin et Étoile passent à 6 minutes entre 11 h et 19 h**, les deux balises de vol aux heures qui comptent, selon les colonnes `pas_fin_*` de la fiche. La dernière mesure reçue est toujours gardée, même hors grille, pour que la vignette ne traîne pas de retard.

Une requête dépense ainsi une quinzaine de sous-requêtes sur les 50 que Cloudflare accorde par invocation, et onze appels sur les 100 par minute de Météo-France. Si la clé ne porte pas l’abonnement au paquet, le Worker retombe sur la seule dernière mesure de chaque balise : vignette vivante, courbe vide. Voir le [README du Worker](worker/README.md).

Sobriété : aucun appel tant que l’onglet n’est pas ouvert, pas de rafraîchissement automatique. Relecture au bouton ↻, ou au retour sur l’appli si les mesures ont plus de 10 min.

La liste des balises est le CSV `assets/balises_specs/balises_specifications.csv` de `affichage-web`, relu par le Worker comme par le front et par l’archive : **ajouter une balise = éditer ce seul fichier**.

## Clé Météo-France

Une seule clé sert à tout le projet : les balises en direct (Worker) et l’archive des balises (GitHub Actions). Les prévisions viennent d’Open-Meteo, sans clé.

**Clé actuelle : générée le 13 octobre 2026, valable deux ans, elle expire vers le 13 octobre 2028.** La date exacte est lisible sans dépenser d’appel : champ `meteofrance_expire` de [`/health`](https://gabin-meteo.garinlu-subs.workers.dev/health).

### Où l’obtenir

Sur le [portail API de Météo-France](https://portail-api.meteofrance.fr/web/fr/), compte du projet. Deux abonnements, gratuits, **dans la même application** (`DefaultApplication`) :

| API | Sert à | Abonnement |
| --- | --- | --- |
| `DonneesPubliquesPaquetObservation` | La journée de chaque balise française en un appel : courbe du Worker, archive des balises | [page de l’API](https://portail-api.meteofrance.fr/web/fr/api/DonneesPubliquesPaquetObservation) |
| `DonneesPubliquesObservation` | Le repli : dernière mesure d’une balise, rattrapage de l’archive | [page de l’API](https://portail-api.meteofrance.fr/web/fr/api/DonneesPubliquesObservation) |

Les abonnements sont inscrits **dans** la clé : une clé générée avant un abonnement ne marche pas pour cette API. Dans l’ordre :

1. Vérifier que les deux abonnements sont actifs : icône du compte en haut à droite → *My API*.
2. Générer la clé : page d’une des deux API → *Configure API* → type **API Key** → durée en secondes (deux ans : `63072000`) → *Generate Token*. Le portail rappelle : la clé couvre toutes les API abonnées de l’application ([FAQ](https://portail-api.meteofrance.fr/web/fr/faq)).
3. Copier la clé **en entier** : trois morceaux séparés par des points, plusieurs centaines de caractères. Un double-clic n’en prend que le premier.

### Où la poser

Le même nom aux deux endroits, **`METEOFRANCE_API_KEY`**, et les deux à mettre à jour ensemble :

| Où | Lien | Utilisé par |
| --- | --- | --- |
| Secret GitHub Actions | [Settings → Secrets and variables → Actions](https://github.com/LeCoonEtSaBande/gabin-meteo/settings/secrets/actions) | Workflow *Archive des balises* |
| Secret du Worker Cloudflare | [Workers & Pages → `gabin-meteo` → Settings → Variables and Secrets](https://dash.cloudflare.com/?to=/:account/workers/services/view/gabin-meteo/production/settings) (ou `npx wrangler secret put METEOFRANCE_API_KEY` dans `worker/`) | Onglet *Balises* |

Contrôle après la mise à jour : [`/health`](https://gabin-meteo.garinlu-subs.workers.dev/health) doit répondre `meteofrance_paquet: "abonné"` et la nouvelle date dans `meteofrance_expire`.

### Quand elle expire

Plus de balises françaises dans l’onglet, et l’archive des balises les marque muettes (`::warning` dans le run, `muettes` dans le `.json`). Rien ne casse côté prévisions. Refaire les étapes ci-dessus, puis corriger la date d’expiration dans ce README.

## Lecture par Claude (appli téléphone ou PC)

Le dépôt est public : Claude lit ces fichiers Markdown avec sa recherche / lecture web, sans connecteur.

- Prévisions actuelles (courbes AROMEIFS et ICONGFS heure par heure, tous les spots) : `https://lecoonetsabande.github.io/gabin-meteo/llm/index.md`
- Archive de 1 h (AROME HD / ICON-CH1 bruts) : `https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/archive-previsions/index.md`
- Archive des balises (mesures au pas de 30 min, 6 min pour Reventin et Étoile de 11 h à 19 h) : `https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/balises/index.md`

Conseil : un Projet Claude dont les instructions donnent ces trois adresses.

## Lancer en local

Collecte et traitement se lancent depuis le checkout de **leur** branche, pas depuis `main` :

```bash
git switch collecte-api-meteo
pip install -r requirements.txt
python src/collecte/run.py --force

git switch traitement-donnees
python src/traitement/run.py
```

Pour la carte : checkout `affichage-web` et servir la racine (`python -m http.server 8080`).

Pour l’archive : voir le [README de `archive-previsions`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/archive-previsions/README.md#lancer-en-local) (il faut un checkout de `collecte-api-meteo` avec son historique).

Pour l’archive des balises : voir le [README de `balises`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/balises/README.md#lancer-en-local) (il faut la fiche des balises d’`affichage-web` et la clé Météo-France).
