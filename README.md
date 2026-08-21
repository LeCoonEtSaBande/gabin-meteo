# Gabin-meteo — affichage web

Branche `affichage-web` : site GitHub Pages (carte SVG, tendances journalières, panneau détail).

## Données : copies publiées, ne pas éditer

GitHub Pages ne peut servir que ce qui est sur cette branche. Le workflow **Traitement et affichage** recopie ici les fichiers parents :

| Fichier | Parent | Usage |
| --- | --- | --- |
| `assets/spots_specs/*.csv` | `collecte-api-meteo` | Infos spots, liens, noms de zone |
| `data/processed/quotidien.json` | `traitement-donnees` | Puces de la carte |
| `data/processed/curves/AROMEIFS.csv` | `traitement-donnees` | Graphiques |
| `data/processed/curves/ICONGFS.csv` | `traitement-donnees` | Graphiques |

Modifier les spots uniquement sur `collecte-api-meteo`. `ICONIFS.csv` n’est pas recopié : le détail n’affiche que AROMEIFS et ICONGFS.

Les libellés courts des puces (`ZONE_LABELS` dans `js/quotidien.js`) restent du code d’affichage, pas une seconde table de specs.
