# Gabin-meteo — collecte API

Branche `collecte-api-meteo` : récupération des prévisions brutes Open-Meteo aux points de grille déjà retenus dans `assets/spots_specs/spots_specifications.csv`. Pas de sondage de voisinage.

Vue d’ensemble du dépôt : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).

**17 spots** dans **11 zones**. Un run réussi déclenche ensuite le workflow *Traitement et affichage* sur `main` (courbes + republication de la carte).

## Horaires

Trois créneaux par jour. En **heure d'été** : **7h15 / 13h15 / 19h15**. En **heure d'hiver**, le même cron UTC tombe une heure plus tôt (**6h15 / 12h15 / 18h15**).

Le cron (`28 5,11,17 * * *` UTC) part au plus tôt à :28, soit vers 7h28 / 13h28 / 19h28 en été. GitHub le retarde souvent, parfois de plusieurs heures. L'heure réelle de chaque collecte est `fetched_at` dans `run_meta.json`.

Le script rattache chaque run au dernier créneau déjà ouvert. Un cron en retard collecte encore ce créneau. Un second déclenchement dans le même créneau est ignoré si `last_update.json` est déjà à jour ; `--force` lève ce filtre.

Le cron GitHub ne s’exécute que depuis la branche par défaut (`main`) : le workflow `.github/workflows/collecte.yml` n’existe **que** sur `main`. Le job fait un checkout de `collecte-api-meteo`, écrit les fichiers, puis pousse sur cette branche.

## Source unique des specs

`assets/spots_specs/spots_specifications.csv` et `zones_specifications.csv` sont les **fichiers parents**. Les éditer uniquement ici. Le traitement les lit (checkout / `git show`) ; le site en reçoit une copie publiée, jamais une version parallèle.

## Sobriété API

Les cellules de grille partagées par plusieurs spots ne sont demandées qu’une fois. Chaque modèle est interrogé par lots de **4 cellules** (`BATCH_CHUNK_SIZE` dans `client.py`), soit une trentaine de requêtes par run, avec une seconde de pause entre deux requêtes. Si un lot échoue, ses cellules sont redemandées une par une ; les autres lots ne sont pas touchés.

## Horizons des modèles

`forecast_days` est calculé depuis l’horizon réel de chaque modèle (`horizon_h` dans `src/collecte/config.py`) : Open-Meteo compte les jours depuis aujourd’hui 0 h, pas depuis le run, d’où un jour de marge (plafond API : 16 jours).

| Modèle | Horizon | `forecast_days` |
| --- | --- | --- |
| AROME HD | 51 h | 4 |
| ARPEGE | 102 h | 6 |
| ICON-CH1 | 33 h | 3 |
| ICON-CH2 | 120 h | 6 |
| ICON Global | 180 h | 9 |
| IFS | 360 h | 16 |
| GFS | 384 h | 16 |

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
  previous/            # run d'avant (current précédent, même format)
```

En échec total, `current/`, `previous/` et `last_update.json` ne sont pas touchés. Le détail va dans `data/raw/last_failure/`.

### `last_update.json`

Pour affichage sur la carte :

- `last_update_at` — ISO 8601, Europe/Paris
- `last_update_label` — `JJ/MM/AAAA HH:MM`

### `forecasts.csv`

Une ligne par `(spot, modèle, échéance)`, séparateur `;`.

`run_id`, `fetched_at`, `spot_key`, `model_key`, `grid_latitude`, `grid_longitude`, `grid_elevation_m`, `valid_at`, `wind_speed_10m_kn`, `wind_gusts_10m_kn`, `wind_direction_10m_deg`, `temperature_2m_c`, `precipitation_mm`, `cloud_cover_pct`, `cloud_cover_low_pct`, `cloud_cover_mid_pct`, `cloud_cover_high_pct`, `cloud_cover_max_pct`

Vent moyen et rafales sont demandés à Open-Meteo en **nœuds** (`wind_speed_unit=kn`), pour tous les modèles.

Nébulosité : les quatre couches API (`cloud_cover`, `cloud_cover_low`, `cloud_cover_mid`, `cloud_cover_high`) sont archivées séparément ; une couche absente reste **vide** (pas 0). `cloud_cover_max_pct` est le maximum des quatre valeurs non nulles (0 si les quatre sont absentes). Le traitement calcule ensuite `cloud_cover_display_pct` pour l’affichage (total prioritaire, sinon `max(basse, moyenne, haute × 0,25)` ; AROME « hauts seuls » → bas/moy à 0, sans repli ARPEGE). Les échéances entièrement vides (fin d’horizon du modèle) sont omises.

### `run_status.csv`

Une ligne par `(spot, modèle)` : `ok`, `partial` (des zéros ont remplacé des nulls) ou `failed`, avec le message d’erreur.

## Runs partiels

Un run est publié dès qu’au moins un couple (spot, modèle) a réussi : `current/` peut donc contenir des modèles en échec (voir `run_status.csv`). Le traitement ne lit que `current/`. `last_update.json` suit le dernier run publié.

## Lecteurs de cette branche

- `traitement-donnees` : en local, `git show collecte-api-meteo:data/raw/current/forecasts.csv` ; en CI, le job de traitement fait un second checkout de `collecte-api-meteo` et recopie `data/raw` plus `assets/spots_specs`.
- `archive-previsions` : l’archive de 23 h relit l’**historique git** de cette branche (`current/` et `previous/` de chaque commit) pour retrouver la dernière collecte lancée avant 23 h, et remonter à une collecte plus ancienne pour un modèle en échec. Ne jamais réécrire l’historique de cette branche (pas de force push ni de squash).
