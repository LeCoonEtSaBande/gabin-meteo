# Gabin-meteo — collecte API

Branche `collecte-api-meteo` : récupération des prévisions brutes Open-Meteo aux points de grille déjà retenus dans `assets/spots_specs/spots_specifications.csv`. Pas de sondage de voisinage.

Vue d’ensemble du dépôt : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).

**17 spots** dans **11 zones**. Un run réussi déclenche ensuite le workflow *Traitement et affichage* sur `main` (courbes + republication de la carte).

## Horaires

Trois extractions par jour, heure **Europe/Paris** : **7h**, **13h**, **19h**.

Le script ne contacte Open-Meteo que sur ces créneaux (sauf `--force`). GitHub Actions combine deux crons UTC pour couvrir l’heure d’été et l’heure d’hiver ; les déclenchements « faux fuseau » sortent sans requête.

Le cron GitHub ne s’exécute que depuis la branche par défaut (`main`) : le workflow `.github/workflows/collecte.yml` n’existe **que** sur `main`. Le job fait un checkout de `collecte-api-meteo`, écrit les fichiers, puis pousse sur cette branche.

## Source unique des specs

`assets/spots_specs/spots_specifications.csv` et `zones_specifications.csv` sont les **fichiers parents**. Les éditer uniquement ici. Le traitement les lit (checkout / `git show`) ; le site en reçoit une copie publiée, jamais une version parallèle.

## Sobriété API

Une requête HTTP par modèle, pour toutes les cellules distinctes de ce modèle (17 spots, cellules partagées dédupliquées). Sept requêtes par run, pause d’une seconde entre modèles. Si un lot échoue, repli cellule par cellule **pour ce modèle seulement**.

## Lancer en local

```bash
pip install -r requirements.txt
python src/collecte/run.py --force
python src/collecte/run.py --force --model AROMEHD
```

La seule dépendance est `tzdata` (fuseau Europe/Paris sous Windows). Sur Linux, la base IANA du système suffit souvent.

## Fichiers produits

```
data/raw/
  last_update.json     # horodatage pour la carte SVG
  current/             # dernier run réussi (même partiel)
    forecasts.csv
    run_status.csv
    run_meta.json
  previous/            # run d'avant, repli carte si current est en erreur
```

En échec total, `current/`, `previous/` et `last_update.json` ne sont pas touchés. Le détail va dans `data/raw/last_failure/`.

### `last_update.json`

Pour affichage sur la carte :

- `last_update_at` — ISO 8601, Europe/Paris
- `last_update_label` — `JJ/MM/AAAA HH:MM`

### `forecasts.csv`

Une ligne par `(spot, modèle, échéance)`, séparateur `;`.

`run_id`, `fetched_at`, `spot_key`, `model_key`, `grid_latitude`, `grid_longitude`, `grid_elevation_m`, `valid_at`, `wind_speed_10m_kn`, `wind_gusts_10m_kn`, `wind_direction_10m_deg`, `temperature_2m_c`, `precipitation_mm`, `cloud_cover_max_pct`

Vent moyen et rafales sont demandés à Open-Meteo en **nœuds** (`wind_speed_unit=kn`), pour tous les modèles.

`cloud_cover_max_pct` est le maximum des couches de nébulosité renvoyées (dont le total s’il existe). Une valeur API `null` devient `0` ; l’extraction continue. Les échéances entièrement vides (fin d’horizon du modèle) sont omises.

### `run_status.csv`

Une ligne par `(spot, modèle)` : `ok`, `partial` (des zéros ont remplacé des nulls) ou `failed`, avec le message d’erreur.

## Repli pour la carte

Garder `current` et `previous`. Si un run est mauvais, le traitement / l’affichage peut reprendre le run d’avant. `last_update.json` suit le dernier run **réussi**.

## Accès depuis `traitement-donnees`

Les bruts restent sur cette branche. En local : `git show collecte-api-meteo:data/raw/current/forecasts.csv`. En CI, le job de traitement fait un second checkout de `collecte-api-meteo` et recopie `data/raw` plus `assets/spots_specs`.
