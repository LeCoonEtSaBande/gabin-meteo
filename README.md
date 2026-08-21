# Gabin-meteo — affichage web

Branche `affichage-web` : site GitHub Pages de la carte quotidienne.

Carte : [lecoonetsabande.github.io/gabin-meteo](https://lecoonetsabande.github.io/gabin-meteo/)

Vue d’ensemble du dépôt (pipeline, branches, modèles) : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).

## Rôle

Cette branche ne contient **que** le front : HTML, CSS, JS, carte SVG, icônes, copies des specs et des JSON/CSV consommés par la page. Pas de collecte ni de traitement Python.

GitHub Pages est configuré sur la **racine** de `affichage-web`.

## Interface

- Coque HTML (onglets, puces, barre de jour, panneau détail). Le SVG `assets/svg_map/Carte RA 804x1200.svg` est **uniquement la carte**.
- *Tendances journalières* : pour chaque zone, icône météo, vent max (nœuds), créneau > 8 nds, température 15 h, modèle court terme.
- Clic zone → panneau détail : textes / liens des specs, graphiques `AROMEIFS` et `ICONGFS`.
- Horizons **1 / 3 / 5 jours**, une courbe affichée par défaut (l’autre au bouton), masquage du modèle principal, tooltip au survol, plein écran.
- Flèches de vent : direction **vers où ça souffle**.
- *Balises temps réel* : placeholder, pas encore branché.

Contrat des calques SVG : [`assets/svg_map/README.md`](assets/svg_map/README.md).

## Données lues par la page

| Fichier | Source | Usage |
| --- | --- | --- |
| `data/processed/quotidien.json` | recopié par le workflow *Traitement et affichage* | puces / tendances |
| `data/processed/last_update.json` | idem | horodatage « MAJ » |
| `data/processed/curves/AROMEIFS.csv` | produit par `traitement-donnees` | graphique détail |
| `data/processed/curves/ICONGFS.csv` | idem | graphique détail |
| `assets/spots_specs/*.csv` | copie de `collecte-api-meteo` | noms, textes, liens, GPS |

Le workflow sur `main` republie aujourd’hui `quotidien.json` et `last_update.json` après chaque collecte. Les CSV de courbes et les specs sont versionnés sur cette branche (ils ne sont pas recopiés à chaque run).

## Fichiers JS

| Fichier | Rôle |
| --- | --- |
| `js/quotidien.js` | carte, puces, navigation des jours |
| `js/detail.js` | panneau zone, specs, chargement des CSV |
| `js/courbes.js` | rendu SVG des graphiques |
| `js/csv.js` | parseur CSV `;` |
| `js/session.js` | position / mode conservés dans la session |

## Servir en local

```bash
git switch affichage-web
python -m http.server 8080
```

Ouvrir `http://127.0.0.1:8080/`.
