# Gabin-meteo — archive des prévisions

Branche `archive-previsions` : chaque nuit à **1 h du matin** (Europe/Paris), la prévision de la **journée qui commence** est figée pour les 17 spots, modèles **bruts AROME HD et ICON-CH1**, telle qu’on la voyait la veille au soir.

Vue d’ensemble du dépôt : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).

## Règle

- À 1 h du matin le jour J, on archive J de **01 h à 24 h** (24 échéances, la dernière = J+1 00:00 ; la pluie d’une échéance est celle tombée dans l’heure qui précède).
- Source : la **dernière collecte réussie lancée avant minuit de J** (champ `fetched_at` de `run_meta.json`), donc la collecte du soir de la veille, retrouvée dans l’historique git de `collecte-api-meteo`. **Aucun appel API.**
- Le seuil est **une date, pas l’heure du run**. GitHub retarde souvent ses crons de plusieurs heures ; un passage de 8 h du matin doit produire le même fichier qu’un passage de 1 h, sans quoi il irait prendre la collecte du matin même, qui n’est plus « ce qu’on prévoyait la veille ».
- Par (spot, modèle) : si ce modèle est en échec dans cette collecte, on prend la collecte réussie précédente.
- Les heures au-delà de l’horizon du modèle au moment de la collecte restent absentes. ICON-CH1 va à 33 h : la collecte du soir part à 17h28 UTC pour trouver le run de 15 UTC publié ; s’il manque malgré tout, celui de 12 UTC peut s’arrêter avant la fin de J. Le compte `23/24 h` du fichier le dit.
- Jours archivés jusqu’au 02/10/2026 inclus : il manque aussi la dernière heure d’ICON-CH1 (23/24 h), car la collecte coupait alors la fin de l’horizon (`forecast_days` trop court, corrigé le 02/10/2026).

## Fichiers

```
index.md                              # liste des jours archivés (liens raw)
data/archive/AAAA/MM/AAAA-MM-JJ.csv   # valeurs brutes, une ligne par (spot, modèle, heure)
data/archive/AAAA/MM/AAAA-MM-JJ.md    # tableau heure par heure par spot (lisible par Claude)
data/archive/AAAA/MM/AAAA-MM-JJ.json  # collecte utilisée (créneau, heure de lancement, commit), heures manquantes
```

Colonnes CSV : les valeurs de `forecasts.csv` (vent et rafales en nœuds, direction, température, pluie, couches de nuages, point de grille) plus `target_day`, `collecte_run_id`, `collecte_fetched_at` et `collecte_commit`, qui identifient la collecte d’où vient chaque ligne.

Lecture depuis Claude : `https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/archive-previsions/index.md`.

## Workflow

*Archive des prévisions de 1 h* (sur `main`) : cron `5 23,0,2,4 * * *` UTC. Le premier tombe à 1h05 Paris en été et 0h05 en hiver — dans les deux cas la journée de Paris visée est la bonne. Les trois autres retombent sur un jour déjà archivé et ne font rien ; ils ne servent qu’à rattraper un passage échoué. Déclenchement manuel : `day` (AAAA-MM-JJ, jour prévu) et `force` pour réécrire.

L’historique de collecte est lu sur 120 commits (`fetch-depth` du workflow, `HISTORY_DEPTH` du script). Avec deux collectes par jour au lieu de trois, cela couvre désormais une soixantaine de jours.

## Lancer en local

```bash
git switch archive-previsions
git fetch origin collecte-api-meteo
git worktree add --detach _collecte origin/collecte-api-meteo   # ou tout checkout avec l'historique de collecte
python src/archive/run.py --collecte _collecte --day 2026-10-02 --force
```

Tests : `cd src/archive && python -m unittest test_run`.
