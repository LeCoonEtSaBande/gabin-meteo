# Gabin-meteo — affichage web

Branche `affichage-web` : site GitHub Pages de la carte quotidienne.

Carte : [lecoonetsabande.github.io/gabin-meteo](https://lecoonetsabande.github.io/gabin-meteo/)

Vue d’ensemble du dépôt (pipeline, branches, modèles) : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).

## Rôle

Cette branche ne contient **que** le front : HTML, CSS, JS, carte SVG, icônes, et les copies publiées des specs / JSON / CSV. Pas de collecte ni de traitement Python.

GitHub Pages est configuré sur la **racine** de `affichage-web`.

## Interface

- Coque HTML (onglets, puces, barre de jour, panneau détail). Le SVG `assets/svg_map/Carte RA 804x1200.svg` est **uniquement la carte**.
- *Tendances journalières* : pour chaque zone, icône météo, vent max (nœuds), créneau exploitable (≥ 3 h, 7 h–22 h), température 15 h, modèle court terme.
- Clic zone → panneau détail : textes / liens des specs, graphiques `AROMEIFS` et `ICONGFS`.
- Horizons **1 / 3 / 5 jours** sur un bandeau fixe sous le titre (comme le jour en bas), une courbe affichée par défaut (l’autre au bouton), masquage du modèle principal, tooltip au survol, plein écran.
- Flèches de vent : direction **vers où ça souffle**.
- *Balises temps réel* : placeholder, pas encore branché.

Contrat des calques SVG : [`assets/svg_map/README.md`](assets/svg_map/README.md).

## Données : copies publiées, ne pas éditer

GitHub Pages ne peut servir que ce qui est sur cette branche. Le workflow **Traitement et affichage** recopie ici les fichiers parents :

| Fichier | Parent | Usage |
| --- | --- | --- |
| `assets/spots_specs/*.csv` | `collecte-api-meteo` | Infos spots, liens, noms de zone |
| `data/processed/quotidien.json` | `traitement-donnees` | Puces / tendances |
| `data/processed/last_update.json` | `traitement-donnees` | Horodatage « MAJ » |
| `data/processed/curves/AROMEIFS.csv` | `traitement-donnees` | Graphiques (nébulosité = `cloud_cover_display_pct`) |
| `data/processed/curves/ICONGFS.csv` | `traitement-donnees` | Graphiques (nébulosité = `cloud_cover_display_pct`) |

Modifier les spots uniquement sur `collecte-api-meteo`. `ICONIFS.csv` n’est pas recopié : le détail n’affiche que AROMEIFS et ICONGFS.

Les libellés courts des puces (`ZONE_LABELS` dans `js/quotidien.js`) restent du code d’affichage, pas une seconde table de specs.

## Fichiers JS

| Fichier | Rôle |
| --- | --- |
| `js/quotidien.js` | carte, puces, navigation des jours |
| `js/detail.js` | panneau zone, specs, chargement des CSV |
| `js/courbes.js` | rendu SVG des graphiques |
| `js/csv.js` | parseur CSV `;` |
| `js/session.js` | couleurs, flèche, puce si créneau ≥ 3 h entre 7 h et 22 h |

## Servir en local

```bash
git switch affichage-web
python -m http.server 8080
```

Ouvrir `http://127.0.0.1:8080/`.
