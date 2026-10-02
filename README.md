# Gabin-meteo — archive des prévisions

Branche `archive-previsions` : chaque soir à **23 h** (Europe/Paris), la prévision du **lendemain** est figée pour les 17 spots, modèles **bruts AROME HD et ICON-CH1**.

Vue d’ensemble du dépôt : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).

## Règle

- À 23 h le jour J, on archive J+1 de **01 h à 24 h** (24 échéances, la dernière = J+2 00:00 ; la pluie d’une échéance est celle tombée dans l’heure qui précède).
- Source : la **dernière collecte réussie présente dans le dépôt à 23 h** (historique git de `collecte-api-meteo`). **Aucun appel API.** Un cron en retard archive toujours le même jour, avec les mêmes données.
- Par (spot, modèle) : si ce modèle est en échec dans cette collecte, on prend la collecte réussie précédente.
- Les heures hors horizon du modèle au moment de la collecte restent absentes (ICON-CH1 : 33 h ; si la collecte de 19h15 n’est pas encore passée à 23 h, celle de 13h15 ne couvre J+1 que jusqu’à ~20 h).

## Fichiers

```
index.md                              # liste des jours archivés (liens raw)
data/archive/AAAA/MM/AAAA-MM-JJ.csv   # valeurs brutes, une ligne par (spot, modèle, heure)
data/archive/AAAA/MM/AAAA-MM-JJ.md    # tableau heure par heure par spot (lisible par Claude)
data/archive/AAAA/MM/AAAA-MM-JJ.json  # collecte utilisée (créneau, heure de fin, commit), heures manquantes
```

Colonnes CSV : celles de `forecasts.csv` (vent et rafales en nœuds, direction, température, pluie, couches de nuages) plus `target_day`, `collecte_run_id`, `collecte_fetched_at` et `collecte_commit` : la collecte d’où vient chaque ligne.

Lecture depuis Claude : `https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/archive-previsions/index.md`.

## Workflow

*Archive des prévisions de 23 h* (sur `main`) : cron `5 21,22 * * *` UTC, soit 23h05 Paris en été comme en hiver. L’autre déclenchement tombe à 22h05 ou 0h05 et ne fait rien (trop tôt, ou jour déjà archivé). Déclenchement manuel : `day` (AAAA-MM-JJ, jour prévu) et `force` pour réécrire.

## Lancer en local

```bash
git switch archive-previsions
git worktree add _collecte collecte-api-meteo   # ou tout checkout avec l'historique de collecte
python src/archive/run.py --collecte _collecte --day 2026-10-02
```
