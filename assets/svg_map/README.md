# Carte SVG — contrat des calques

Le fichier `Carte RA 804x1200.svg` est **uniquement une carte**. Le chrome (onglets, date, boutons) est en HTML.

Export Linearity Curve : garder les `vectornator:layerName` ci-dessous. Les clés doivent correspondre à celles de `data/processed/quotidien.json`.

## Racine

- `PANNEAU_QUOTIDIEN` — groupe carte (id du même nom)
- Fond / reliefs / hydro / villes : `Reliefs_bas`, `Reliefs_moyens`, `Reliefs_hauts`, `Reliefs_sommets`, `Cours_deau`, `Lacs`, `Faux_lacs`, `Villes`

Ne pas remettre dans le SVG : cadres beige, boutons, date, version, `PANNEAU_DETAILS`, widgets `Tendance_journaliere`.

## Zones `Z_<zone_key>`

`zone_key` = clé JSON, en minuscules (`Z_Valence` → `valence`).

Chaque zone contient :

- `Spots` — groupe des spots
- `Zone_clic_zoom` — rectangle de hit-area (rempli transparent)

## Spots `S_<spot_key>`

`spot_key` = clé JSON (`S_excenevex` → `excenevex`).

- `Marqueur` — un cercle dont le **centre** est la position du spot. C’est ce point que le JS utilise.

Pour une nouvelle région : mêmes préfixes `Z_` / `S_`, mêmes clés que le JSON, un marqueur par spot, une hit-area par zone.

## Bande sud (y ≥ 1137)

Le dessin Linearity Curve s’arrête à `y ≈ 1137`. La `viewBox` descend plus bas (`-24 128 852 1150`) pour contenir Cruas : la bande sous le dessin a été **générée** à partir du modèle de terrain Open-Meteo et du tracé OSM du Rhône, puis peinte avec la même palette. Elle tient dans cinq calques repérables à leur suffixe :

`Bas_sud`, `Moyens_sud`, `Hauts_sud`, `Sommets_sud` (reliefs) et `Courdeau_rhone_sud` (le fleuve), plus l’étiquette `Villes_txt_Montélimar`.

Un ré-export depuis Curve les écraserait. Les réimporter dans le document Curve, ou les réinjecter après export.
