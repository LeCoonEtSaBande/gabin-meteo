# Gabin-meteo

Surveillance météo de sites : collecte de données brutes via des API, traitement, puis affichage web.

## Branches

| Branche | Rôle |
| --- | --- |
| `collecte-api-meteo` | Recherche et récupération de données brutes via des API météo pour les sites à surveiller |
| `traitement-donnees` | Traitement et transformation des données collectées |
| `affichage-web` | Page web publique pour consulter les résultats |

La branche `main` sert de base commune (workflows GitHub Actions). Le travail métier se fait sur les trois branches ci-dessus. Elles ne fusionnent pas leurs historiques.

## Source unique des données

Chaque jeu de données a **un seul fichier parent**. Les autres branches ne les éditent pas : elles les lisent, ou le workflow les recopie.

| Donnée | Parent (à éditer) | Transit |
| --- | --- | --- |
| Spots et zones (`assets/spots_specs/*.csv`) | `collecte-api-meteo` | Lues par le traitement (checkout / `git show`). Recopiées vers `affichage-web` à chaque run |
| Prévisions brutes (`data/raw/`) | `collecte-api-meteo` | Lues par le traitement, jamais versionnées ailleurs |
| Courbes et JSON quotidien (`data/processed/`) | `traitement-donnees` | Recopiés vers `affichage-web` (JSON, `AROMEIFS.csv`, `ICONGFS.csv`) |

Sur `affichage-web`, `assets/spots_specs/` et `data/processed/` sont des **copies publiées** pour GitHub Pages. Ne pas les modifier à la main.

`traitement-donnees` ne versionne pas les specs ni les bruts.
