# Gabin-meteo — archive des prévisions

Branche `archive-previsions` : chaque soir à **23 h** (Europe/Paris), la prévision du **lendemain** est figée pour les 17 spots, modèles **bruts AROME HD et ICON-CH1**.

Vue d’ensemble du dépôt : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).

## Règle

- À 23 h le jour J, on archive J+1 de **01 h à 24 h** (24 échéances, la dernière = J+2 00:00 ; la pluie d’une échéance est celle tombée dans l’heure qui précède).
- Source : la **dernière collecte réussie lancée avant 23 h** (champ `fetched_at` de `run_meta.json`), retrouvée dans l’historique git de `collecte-api-meteo`. **Aucun appel API.** Un cron en retard archive toujours le même jour, avec les mêmes données.
- Par (spot, modèle) : si ce modèle est en échec dans cette collecte, on prend la collecte réussie précédente.
- Les heures au-delà de l’horizon du modèle au moment de la collecte restent absentes. Exemple : ICON-CH1 va à 33 h ; si la collecte de 19h15 n’est pas encore passée à 23 h (cron GitHub en retard), celle de 13h15 ne couvre J+1 que jusqu’à ~20 h.
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

*Archive des prévisions de 23 h* (sur `main`) : cron `5 21,22 * * *` UTC, soit 23h05 Paris en été comme en hiver. L’autre déclenchement (0h05 en été, 22h05 en hiver) retombe sur un jour déjà archivé et ne fait rien. Il ne rattrape que si le passage précédent a échoué. Déclenchement manuel : `day` (AAAA-MM-JJ, jour prévu) et `force` pour réécrire.

L’historique de collecte est lu sur 120 commits (`fetch-depth` du workflow, `HISTORY_DEPTH` du script), soit environ 40 jours.

## Lancer en local

```bash
git switch archive-previsions
git fetch origin collecte-api-meteo
git worktree add --detach _collecte origin/collecte-api-meteo   # ou tout checkout avec l'historique de collecte
python src/archive/run.py --collecte _collecte --day 2026-10-02 --force
```

Tests : `cd src/archive && python -m unittest test_run`.
