# Gabin-meteo — affichage web

Branche `affichage-web` : site GitHub Pages de la carte quotidienne.

Carte : [lecoonetsabande.github.io/gabin-meteo](https://lecoonetsabande.github.io/gabin-meteo/)

Vue d’ensemble du dépôt (pipeline, branches, modèles) : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).

## Rôle

Cette branche ne contient **que** le front : HTML, CSS, JS, carte SVG, icônes, et les copies publiées des specs / JSON / CSV. Pas de collecte ni de traitement Python.

GitHub Pages est configuré sur la **racine** de `affichage-web`.

## Interface

- Coque HTML (onglets, puces, barre de jour, panneau détail). Le SVG `assets/svg_map/Carte RA 804x1200.svg` est **uniquement la carte**.
- *Tendances journalières* : une puce par zone, avec les données du spot principal de la zone (`PRIMARY_SPOT` dans `js/quotidien.js`). Elle montre l’icône météo, le vent max 8 h–20 h (nœuds, gris jusqu’à 10 nds), le créneau exploitable (≥ 3 h de vent moyen > 10 nds, 8 h–20 h), la température à 15 h et le modèle court terme.
- Clic zone → panneau détail : textes / liens des specs, graphiques `AROMEIFS` et `ICONGFS`. Courbe par défaut : `AROMEIFS` pour les spots AROME HD, `ICONGFS` pour les spots ICON-CH1.
- Graphique :
  - trait pointillé à **10 nds** ;
  - zone colorée entre moyen et rafales, **seulement quand le vent moyen dépasse 10 nds** ;
  - valeurs du vent moyen max et des rafales max (nombre seul, sans préfixe) sur les pics 8 h–20 h (vue 1 jour : toujours ; vues 3 et 5 jours : seulement les jours avec créneau) ;
  - sous l’axe des heures, une ligne *créneau* par courbe affichée (vue 1 jour : heure de début et heure de fin ; vues 3 et 5 jours : `10-16h` centré).

  Créneaux et pics viennent de `creneaux.json`. Si ce fichier manque, le graphique s’affiche sans eux.
- Horizons **1 / 3 / 5 jours** sur un bandeau fixe sous le titre (comme le jour en bas). La seconde courbe s’ajoute au bouton, et la courbe par défaut peut être masquée. Tooltip au survol, plein écran.
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
| `data/processed/creneaux.json` | `traitement-donnees` | Créneau et pics AROMEIFS / ICONGFS du graphique |
| `llm/index.md`, `llm/spots/*.md` | `traitement-donnees` | Prévisions en Markdown pour Claude (`https://lecoonetsabande.github.io/gabin-meteo/llm/index.md`) |
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
| `js/session.js` | couleurs, flèche, puce si créneau ≥ 3 h entre 8 h et 20 h |

Les scripts sont chargés en `<script>` classiques et partagent la même portée globale : deux noms de premier niveau identiques dans deux fichiers cassent le chargement du site. `js/scripts.test.js` le vérifie.

## Servir en local

```bash
git switch affichage-web
python -m http.server 8080
```

Ouvrir `http://127.0.0.1:8080/`.

Tests (Node 18+, sans dépendance) : `node --test js/*.test.js`.
