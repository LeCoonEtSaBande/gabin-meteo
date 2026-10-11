# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 11/10/2026 23:01 (Europe/Paris)
- Fichiers générés le : 2026-10-11T23:05:37+02:00
- Collecte prévue 3 fois par jour (vers 7h30, 13h30 et 19h30, une heure plus tôt en hiver). GitHub la retarde parfois de plusieurs heures : se fier à la date de collecte ci-dessus.
- Carte : https://lecoonetsabande.github.io/gabin-meteo/
- Archive des prévisions de la veille à 23 h (AROME HD et ICON-CH1 bruts) : https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/archive-previsions/index.md

Pour le détail heure par heure d'un spot (vent moyen, rafales, direction, pluie, nuages des courbes AROMEIFS et ICONGFS), lire son fichier dans la liste ci-dessous.

> Unités : vent moyen et rafales en nœuds (nds), direction = d'où vient le vent (degrés et rose des vents), pluie en mm tombés pendant l'heure qui précède, nuages en % (nébulosité perçue), heures en Europe/Paris.
> Créneau navigable : au moins 3 h de vent moyen > 10 nds entre 8 h et 20 h ; s'il y en a plusieurs, le plus proche du pic de vent moyen.
> Courbes : `AROMEIFS` = AROMEHD → ARPEGE → IFS ; `ICONGFS` = ICONCH1 → ICONCH2 → ICON13KM → GFS (à un instant donné, le modèle le plus court terme encore disponible ; colonne `modèle`).

## Spots

| Spot | Zone | Modèle court terme | Fichier détaillé |
|---|---|---|---|
| Plage de la pointe - Messery (`messery`) | Leman - Grand Lac (Yvoire) | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/messery.md |
| Plage d'Excenevex (`excenevex`) | Leman - Grand Lac (Yvoire) | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/excenevex.md |
| Plage du Vengeron (`vengeron`) | Leman - Petit Lac (Genève) | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/vengeron.md |
| Plage d'Hermance (`hermance`) | Leman - Petit Lac (Genève) | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/hermance.md |
| Lac d'Annecy - Plage de Sévrier (`plage_de_sevrier`) | Lac d'Annecy | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/plage_de_sevrier.md |
| Lac du Bourget - Cap des Séselets (`cap_des_seselets`) | Lac du Bourget | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/cap_des_seselets.md |
| Grand Lac de Laffrey - Parking du pré de la rencontre (`parking_pre_rencontre`) | Grand Lac de Laffrey | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/parking_pre_rencontre.md |
| Lac du Monteynard - Treffort - Parking du camping de la Plage (`treffort`) | Lac du Monteynard-Avignonet | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/treffort.md |
| Portes-lès-Valence - Parking des Surfeurs (`portes_les_valence`) | Valence | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/portes_les_valence.md |
| La Roche-de-Glun - Base Nautique (`roche_de_glun`) | Valence | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/roche_de_glun.md |
| Centrale de Saint-Alban-du-Rhône (`st_alban_du_rhone`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_alban_du_rhone.md |
| Nord du Pont de Chavanay (`pont_de_chavanay`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_de_chavanay.md |
| Loire-sur-Rhône / Chasse-sur-Rhône (`loire_sur_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/loire_sur_rhone.md |
| Saint-Cyr-sur-le-Rhône (`st_cyr_sur_le_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_cyr_sur_le_rhone.md |
| Saint-Romain-des-Iles (`st_romain_des_iles`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_romain_des_iles.md |
| Nord du Pont d'Arciat (`pont_darciat`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_darciat.md |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu (`wwmeyzieu`) | Réservoir du Grand Large - Meyzieu | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/wwmeyzieu.md |

## Tendances journalières (données des puces de la carte)

Courbe des puces : AROMEIFS pour les spots AROME HD, ICONIFS (ICON-CH1 → ICON-CH2 → ICON Global → IFS) pour les spots ICON-CH1. Format : vent moyen max / rafale au même moment, créneau, icône, température à 15 h.

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 8 | 192° SSO | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 7 | 10 | 45° NE | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 6 | 8 | 69° ENE | aucun | couvert | 0.0 | 16°C |
| Plage d'Hermance | 8 | 10 | 346° NNO | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 11 | 336° NNO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 10 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 4° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 355° N | 13h-17h | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 24 | 6° N | 11h-19h | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 351° N | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 18° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 8 | 15 | 25° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 14° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 27° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 7 | 12 | 8° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 7 | 12 | 339° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 9° N | aucun | soleil-couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 56° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 13 | 18 | 37° NE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 8 | 10 | 28° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 9 | 13 | 49° NE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 11 | 331° NNO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 11 | 15 | 11° N | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 5° N | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 19 | 345° NNO | 13h-16h | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 24 | 6° N | 08h-18h | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 15° NNE | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 18 | 12° NNE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 8 | 16 | 12° NNE | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 7° N | aucun | soleil | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 19° NNE | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 6 | 11 | 50° NE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 6 | 10 | 49° NE | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 349° N | aucun | soleil | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 51° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 5 | 28° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 5 | 6 | 27° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 4 | 7 | 31° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 304° NO | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 198° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 19 | 29° NNE | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 341° NNO | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 360° N | 14h-19h | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 16° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 34° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 7 | 13 | 37° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 5 | 120° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 2 | 4 | 191° S | aucun | soleil-couvert | 0.2 | 17°C |
| Nord du Pont d'Arciat | 3 | 4 | 77° ENE | aucun | soleil-couvert | 0.1 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 65° ENE | aucun | soleil-couvert | 0.0 | 16°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 60° ENE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 3 | 4 | 81° E | aucun | soleil | 0.0 | 19°C |
| Plage du Vengeron | 6 | 8 | 15° NNE | aucun | soleil | 0.0 | 20°C |
| Plage d'Hermance | 6 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 52° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 5 | 10 | 230° SO | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 342° NNO | aucun | couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 18 | 360° N | 08h-16h | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 9 | 16 | 8° N | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 27° NNE | aucun | soleil | 0.0 | 21°C |
| Nord du Pont de Chavanay | 8 | 15 | 27° NNE | aucun | soleil | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 15° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 15° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 5 | 9 | 45° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 5 | 9 | 45° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 19°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 53° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Excenevex | 3 | 4 | 37° NE | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 4 | 5 | 24° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 4 | 6 | 28° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 57° ENE | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 56° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 161° SSE | aucun | soleil | 0.0 | 21°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 345° NNO | aucun | soleil | 0.0 | 23°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 188° S | aucun | soleil-couvert | 0.0 | 24°C |
| La Roche-de-Glun - Base Nautique | 10 | 18 | 180° S | aucun | soleil-couvert | 0.0 | 24°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 161° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont de Chavanay | 8 | 15 | 161° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 177° S | aucun | soleil-couvert | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 177° S | aucun | soleil-couvert | 0.0 | 24°C |
| Saint-Romain-des-Iles | 6 | 12 | 190° S | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 6 | 12 | 190° S | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 141° SE | aucun | soleil-couvert | 0.0 | 20°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 59° ENE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Excenevex | 4 | 5 | 61° ENE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 6 | 8 | 14° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 4 | 6 | 18° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 297° ONO | aucun | soleil | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 195° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 36° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 340° NNO | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 9° N | aucun | soleil-couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 8° N | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 347° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 5 | 12 | 347° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 13 | 345° NNO | aucun | couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 346° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 8 | 15 | 316° NO | aucun | couvert | 0.0 | 21°C |
| Nord du Pont d'Arciat | 8 | 15 | 316° NO | aucun | couvert | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 343° NNO | aucun | soleil-couvert | 0.0 | 20°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 36 | 35° NE | 08h-20h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 22 | 36 | 35° NE | 08h-20h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 22 | 36 | 35° NE | 08h-20h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 22 | 36 | 35° NE | 08h-20h | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 13 | 335° NNO | aucun | couvert | 0.5 | 10°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 6° N | aucun | couvert | 0.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 14 | 328° NNO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 15 | 346° NNO | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 34 | 6° N | 08h-20h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 16 | 31 | 358° N | 08h-20h | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 351° N | 08h-20h | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 12 | 28 | 351° N | 08h-20h | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 349° N | 08h-20h | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 345° NNO | 08h-20h | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 12 | 21 | 341° NNO | 08h-20h | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 12 | 21 | 341° NNO | 08h-20h | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 26 | 347° NNO | 08h-20h | couvert | 0.0 | 13°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 33° NNE | 08h-15h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 14 | 21 | 33° NNE | 08h-15h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 14 | 21 | 33° NNE | 08h-15h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 14 | 21 | 33° NNE | 08h-15h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 339° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 22 | 28° NNE | aucun | pluie | 2.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 339° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 13° NNE | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 34 | 360° N | 08h-15h | pluie | 12.2 | 9°C |
| La Roche-de-Glun - Base Nautique | 13 | 30 | 351° N | 08h-13h | pluie | 9.1 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 26 | 344° NNO | aucun | pluie | 13.9 | 9°C |
| Nord du Pont de Chavanay | 10 | 26 | 344° NNO | aucun | pluie | 13.9 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 24 | 340° NNO | aucun | pluie | 13.9 | 9°C |
| Saint-Cyr-sur-le-Rhône | 10 | 26 | 340° NNO | aucun | pluie | 13.3 | 9°C |
| Saint-Romain-des-Iles | 11 | 21 | 345° NNO | aucun | pluie | 12.7 | 9°C |
| Nord du Pont d'Arciat | 11 | 21 | 345° NNO | aucun | pluie | 12.7 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 24 | 346° NNO | aucun | pluie | 13.3 | 9°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 9 | 16 | 15° NNE | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 10 | 15 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 10 | 15 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 316° NO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 40° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 180° S | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 191° S | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 325° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 332° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 10 | 332° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 315° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 32° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 6 | 340° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 3 | 6 | 340° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 337° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 30 | 20° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 21 | 29 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 22 | 30 | 20° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 22 | 30 | 20° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 22 | 1° N | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 7 | 19 | 38° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 360° N | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 17 | 356° N | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 4° N | 11h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 355° N | 11h-20h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 21 | 351° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 10 | 21 | 351° N | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 327° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 335° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 12 | 21 | 350° N | 16h-20h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 12 | 21 | 350° N | 16h-20h | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 332° NNO | aucun | couvert | 0.0 | 14°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 29 | 15° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 18 | 27 | 21° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Plage du Vengeron | 20 | 29 | 15° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Plage d'Hermance | 20 | 29 | 15° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 19 | 9° N | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 7 | 18 | 17° NNE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 7° N | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 19 | 11° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 2° N | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 360° N | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 360° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 16 | 360° N | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 347° NNO | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 350° N | aucun | soleil | 0.0 | 13°C |
| Saint-Romain-des-Iles | 10 | 19 | 11° N | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 10 | 19 | 11° N | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 351° N | aucun | soleil | 0.0 | 13°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 11 | 16 | 12° NNE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 13 | 18 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 13 | 18 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 14 | 309° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 26° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 2° N | aucun | pluie | 3.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 3° N | aucun | pluie | 2.4 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 7° N | 17h-20h | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 7° N | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 355° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 8 | 19 | 355° N | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 341° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 347° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 7 | 14 | 347° NNO | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 7 | 14 | 347° NNO | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 336° NNO | aucun | soleil-couvert | 0.0 | 13°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 26° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 5 | 9 | 40° NE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 6 | 10 | 26° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 6 | 10 | 26° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 284° ONO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 1 | 10 | 4° N | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 303° ONO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 195° SSO | aucun | soleil-couvert | 0.6 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 14 | 39° NE | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 1 | 8 | 126° SE | aucun | pluie | 1.3 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 10 | 120° ESE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 2 | 10 | 120° ESE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 44° NE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 103° ESE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 9 | 146° SE | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 4 | 9 | 146° SE | aucun | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 117° ESE | aucun | soleil | 0.0 | 16°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 13° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 3 | 6 | 48° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 4 | 7 | 13° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 4 | 7 | 13° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 290° ONO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 32° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 178° S | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 172° S | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 6 | 350° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 324° NO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 4 | 326° NO | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 2 | 4 | 326° NO | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 31° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 84° E | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 2 | 7 | 122° ESE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 2 | 7 | 122° ESE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 129° SE | aucun | soleil | 0.0 | 17°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 355° N | aucun | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 2 | 6 | 49° NE | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 2 | 5 | 355° N | aucun | soleil | 0.0 | 17°C |
| Plage d'Hermance | 2 | 5 | 355° N | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 293° ONO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 32° NNE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 164° SSE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 159° SSE | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 4 | 340° NNO | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 1 | 7 | 185° S | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 122° ESE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 2 | 7 | 122° ESE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 81° E | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 115° ESE | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 2 | 7 | 140° SE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 2 | 7 | 140° SE | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 45° NE | aucun | soleil-couvert | 0.0 | 17°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 6 | 30° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 3 | 7 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 3 | 7 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 308° NO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 7° N | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 21 | 172° S | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 21 | 169° S | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 215° SO | aucun | couvert | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 207° SSO | aucun | couvert | 0.6 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 187° S | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 9 | 22 | 187° S | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 177° S | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 181° S | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 9 | 18 | 164° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 9 | 18 | 164° SSE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 157° SSE | aucun | soleil | 0.0 | 19°C |
