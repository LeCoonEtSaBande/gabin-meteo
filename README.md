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
- Clic zone → panneau détail : textes des specs, boutons Windguru et Carte (les liens webcam / anémomètre restent dans les specs mais ne sont pas affichés pour l'instant), graphiques `AROMEIFS` et `ICONGFS`. Courbe par défaut : `AROMEIFS` pour les spots AROME HD, `ICONGFS` pour les spots ICON-CH1.
- Graphique :
  - trait pointillé à **10 nds** ;
  - vue 1 jour : un point par heure sur l’axe de 6 h à 21 h, aucun de 22 h à 5 h, pour distinguer la nuit ;
  - zone colorée entre moyen et rafales, **seulement quand le vent moyen dépasse 10 nds** ;
  - valeurs du vent moyen max et des rafales max (nombre seul, sans préfixe) sur les pics 8 h–20 h (vue 1 jour : toujours ; vues 3 et 5 jours : seulement les jours avec créneau) ;
  - sous l’axe des heures, une ligne *créneau* par courbe affichée (vue 1 jour : heure de début et heure de fin ; vues 3 et 5 jours : `10-16h` centré).

  Créneaux et pics viennent de `creneaux.json`. Si ce fichier manque, le graphique s’affiche sans eux.
- Horizons **1 / 3 / 5 jours** sur un bandeau fixe sous le titre (comme le jour en bas). La seconde courbe s’ajoute au bouton, et la courbe par défaut peut être masquée. Tooltip au survol, plein écran.
- Flèches de vent : direction **vers où ça souffle**.
- *Balises temps réel* (11 balises : 3 MétéoSuisse autour du Léman, 8 Météo-France de Mâcon à Montélimar) :
  - les mesures viennent d'**un seul appel** au Worker Cloudflare `gabin-meteo` (`https://gabin-meteo.garinlu-subs.workers.dev/balises`), à l'ouverture de l'onglet. Le Worker relaie MétéoSuisse (pas de 10 min, sans clé) et Météo-France (clé gardée côté Worker : dernière mesure au pas de 6 min, courbe du jour à l'heure) et renvoie tout en nœuds. Aucun appel tant que l'onglet n'est pas ouvert, pas de rafraîchissement automatique : bouton ↻, et relecture au retour sur l'appli si les mesures ont plus de 10 min ;
  - vignette : vent moyen et rafale du dernier pas (nœuds), flèche vers où ça souffle, provenance en toutes lettres (`NE`), heure et âge de la mesure ; grisée au-delà de 30 min. Au calme, la station ne donne pas de provenance : pas de flèche ni de lettres ;
  - position calculée depuis la latitude / longitude, par une conversion calée sur les marqueurs des spots du SVG (pas de retouche du SVG). Point et trait de rappel vers la vraie position ; une balise hors carte est ramenée au bord avec une flèche ;
  - clic : courbe du jour (même graphique que les prévisions, sans nuages ni pluie), avec la prévision du **spot le plus proche** superposée. Trois boutons « Masquer/Afficher Mesure », « Masquer/Afficher AROME », « Masquer/Afficher ICON » : au départ, la mesure et le modèle par défaut du spot (AROME ou ICON selon `short_term_model`) ; l'autre modèle court terme s'ajoute au bouton. Le choix est retenu par balise pendant la session ; au moins une courbe reste affichée, et un modèle sans courbe pour le jour n'a pas de bouton. La mesure, en blanc, passe au-dessus avec un liseré sombre. L'infobulle donne la valeur de la courbe la plus proche.
  - une balise que le Worker n'a pas pu lire affiche `—` et la raison ; les autres restent servies.

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

`assets/balises_specs/balises_specifications.csv` (fiche des balises) est éditée **ici** : c'est le fichier parent. Le Worker le relit directement sur cette branche (`SPECS_URL`), donc ajouter une balise ne demande que cette ligne — `source` vaut `MeteoSuisse` (3 lettres) ou `MeteoFrance` (identifiant à 8 chiffres).

`pas_fin_min`, `pas_fin_debut_h` et `pas_fin_fin_h`, facultatives, demandent un pas de temps plus serré que les 30 minutes communes, sur une plage d'heures de Paris. Seules Reventin et Étoile les portent (`6;11;19`) : ce sont les deux balises de vol, et l'après-midi y mérite la minute près. Le Worker et l'archive des balises lisent ces trois colonnes, personne ne tient de seconde liste. Laisser les trois vides revient à garder le pas commun toute la journée.

`chip_dx_svg` et `chip_dy_svg`, facultatives, écartent la vignette de son point sans déplacer le point : en unités du SVG de la carte, positif vers l'est et vers le sud. Les quatre balises de la vallée posées sur le Rhône sont poussées vers l'est pour laisser voir le fleuve. La verticale reste un souhait : l'empilement des vignettes la reprend, et il n'y a plus de jeu vers le nord quand la file touche le bas de la carte.

Un décalage se vérifie **aussi sur un gabarit de téléphone** : l'empilement considère comme une même colonne deux vignettes qui se chevauchent ne serait-ce que d'un pixel en largeur. Sur un écran étroit, un décalage qui fait juste effleurer la colonne voisine fusionne les deux files en une seule, saturée, et remonte tout le paquet — c'est ce qui était arrivé aux balises suisses quand Mâcon était poussée de 45 unités.

Sur une carte trop courte pour une seule file — un téléphone, où les marges système et le bandeau de la date laissent moins de 600 px —, les vignettes basculent en deux colonnes : une sur deux repart de l'autre côté de son point, en alternant **au sein de son versant** de la carte. Alterner sur le classement général en hauteur mettrait du même côté toutes les balises d'une même vallée, puisque leurs voisines en hauteur sont sur l'autre rive : les quatre balises du Rhône finissaient en file unique contre le bord gauche de l'écran.

Modifier les spots uniquement sur `collecte-api-meteo`. `ICONIFS.csv` n’est pas recopié : le détail n’affiche que AROMEIFS et ICONGFS.

Les libellés courts des puces (`ZONE_LABELS` dans `js/quotidien.js`) restent du code d’affichage, pas une seconde table de specs.

## Fichiers JS

| Fichier | Rôle |
| --- | --- |
| `js/quotidien.js` | carte, puces, navigation des jours |
| `js/detail.js` | panneau zone, specs, chargement des CSV |
| `js/balises.js` | onglet balises : appel au Worker, vignettes, courbe du jour |
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
