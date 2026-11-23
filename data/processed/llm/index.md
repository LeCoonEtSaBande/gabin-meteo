# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 23/11/2026 17:14 (Europe/Paris)
- Fichiers générés le : 2026-11-23T17:15:29+01:00
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
| Lac du Bourget - Cap des Séselets (`cap_des_seselets`) | Lac du Bourget | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/cap_des_seselets.md |
| Grand Lac de Laffrey - Parking du pré de la rencontre (`parking_pre_rencontre`) | Grand Lac de Laffrey | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/parking_pre_rencontre.md |
| Lac du Monteynard - Treffort - Parking du camping de la Plage (`treffort`) | Lac du Monteynard-Avignonet | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/treffort.md |
| Portes-lès-Valence - Parking des Surfeurs (`portes_les_valence`) | Valence | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/portes_les_valence.md |
| La Roche-de-Glun - Base Nautique (`roche_de_glun`) | Valence | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/roche_de_glun.md |
| Cruas - Nuclear Spot (`cruas`) | Montélimar | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/cruas.md |
| Centrale de Saint-Alban-du-Rhône (`st_alban_du_rhone`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_alban_du_rhone.md |
| Nord du Pont de Chavanay (`pont_de_chavanay`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_de_chavanay.md |
| Loire-sur-Rhône / Chasse-sur-Rhône (`loire_sur_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/loire_sur_rhone.md |
| Saint-Cyr-sur-le-Rhône (`st_cyr_sur_le_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_cyr_sur_le_rhone.md |
| Saint-Romain-des-Iles (`st_romain_des_iles`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_romain_des_iles.md |
| Nord du Pont d'Arciat (`pont_darciat`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_darciat.md |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu (`wwmeyzieu`) | Réservoir du Grand Large - Meyzieu | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/wwmeyzieu.md |

## Tendances journalières (données des puces de la carte)

Courbe des puces : AROMEIFS pour les spots AROME HD, ICONIFS (ICON-CH1 → ICON-CH2 → ICON Global → IFS) pour les spots ICON-CH1. Format : vent moyen max / rafale au même moment, créneau, icône, température à 15 h.

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 26 | 206° SSO | 08h-17h | couvert | 0.6 | 9°C |
| Plage d'Excenevex | 13 | 18 | 195° SSO | 08h-16h | couvert | 0.2 | 8°C |
| Plage du Vengeron | 16 | 22 | 200° SSO | 08h-17h | couvert | 0.5 | 8°C |
| Plage d'Hermance | 17 | 23 | 205° SSO | 08h-17h | couvert | 0.2 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 13 | 132° SE | aucun | pluie | 1.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 123° ESE | aucun | pluie | 1.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 3° N | aucun | pluie | 1.1 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 14 | 24 | 10° N | 11h-15h | soleil-couvert | 0.3 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 11 | 358° N | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 337° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 7 | 14 | 17° NNE | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 349° N | aucun | soleil-couvert | 0.1 | 12°C |
| Nord du Pont de Chavanay | 6 | 12 | 341° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 296° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 166° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 7 | 13 | 281° O | aucun | couvert | 0.4 | 10°C |
| Nord du Pont d'Arciat | 9 | 21 | 265° O | aucun | couvert | 0.5 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 14 | 292° ONO | aucun | soleil-couvert | 0.0 | 10°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 31° NNE | 08h-13h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 13 | 19 | 26° NNE | 08h-12h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 10 | 12 | 47° NE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 12 | 16 | 41° NE | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 327° NNO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 10 | 12 | 15° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 34 | 189° S | 13h-20h | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 12 | 170° S | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 206° SSO | aucun | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 22 | 184° S | aucun | couvert | 0.1 | 9°C |
| Cruas - Nuclear Spot | 5 | 11 | 38° NE | aucun | couvert | 0.4 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 18 | 184° S | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 10 | 21 | 197° SSO | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 42 | 183° S | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 11 | 27 | 206° SSO | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 5 | 180° S | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 4 | 5 | 137° SE | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 156° SSE | aucun | couvert | 0.0 | 7°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 41° NE | aucun | pluie | 13.0 | 7°C |
| Plage d'Excenevex | 16 | 21 | 29° NNE | aucun | pluie | 11.4 | 7°C |
| Plage du Vengeron | 9 | 13 | 50° NE | aucun | pluie | 13.9 | 7°C |
| Plage d'Hermance | 10 | 16 | 62° ENE | aucun | orage | 13.3 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 346° NNO | aucun | orage | 20.3 | 8°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 1° N | aucun | orage | 16.9 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 32 | 179° S | aucun | pluie | 9.6 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 360° N | aucun | orage | 8.3 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 355° N | aucun | orage | 30.4 | 9°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 329° NNO | aucun | orage | 29.7 | 9°C |
| Cruas - Nuclear Spot | 5 | 16 | 355° N | aucun | orage | 29.3 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 353° N | aucun | orage | 23.3 | 9°C |
| Nord du Pont de Chavanay | 4 | 8 | 161° SSE | aucun | orage | 23.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 282° ONO | aucun | orage | 23.3 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 60° ENE | aucun | orage | 25.6 | 8°C |
| Saint-Romain-des-Iles | 4 | 6 | 187° S | aucun | orage | 18.2 | 9°C |
| Nord du Pont d'Arciat | 4 | 6 | 180° S | aucun | orage | 18.7 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 139° SE | aucun | orage | 20.7 | 8°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 234° SO | aucun | pluie | 1.0 | 7°C |
| Plage d'Excenevex | 4 | 5 | 54° NE | aucun | pluie | 1.2 | 7°C |
| Plage du Vengeron | 5 | 7 | 167° SSE | aucun | pluie | 1.1 | 8°C |
| Plage d'Hermance | 4 | 6 | 202° SSO | aucun | pluie | 1.4 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 336° NNO | aucun | pluie | 2.3 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 319° NO | aucun | pluie | 1.3 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 1° N | 14h-17h | couvert | 0.1 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 354° N | 10h-17h | soleil-couvert | 0.2 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 11° N | aucun | couvert | 0.2 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 14 | 12° NNE | aucun | couvert | 0.3 | 9°C |
| Cruas - Nuclear Spot | 10 | 21 | 9° N | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 17° NNE | aucun | pluie | 1.5 | 8°C |
| Nord du Pont de Chavanay | 7 | 12 | 17° NNE | aucun | pluie | 1.5 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 337° NNO | aucun | pluie | 2.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 6 | 11 | 337° NNO | aucun | pluie | 2.0 | 7°C |
| Saint-Romain-des-Iles | 6 | 9 | 35° NE | aucun | pluie | 3.7 | 8°C |
| Nord du Pont d'Arciat | 6 | 9 | 35° NE | aucun | pluie | 3.7 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 9 | 352° N | aucun | pluie | 3.5 | 7°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 40° NE | 15h-20h | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 18 | 25 | 21° NNE | 15h-20h | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 15 | 20 | 40° NE | 16h-20h | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 13 | 19 | 42° NE | 17h-20h | soleil | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 330° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 7 | 9 | 316° NO | aucun | soleil | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 19 | 26° NNE | aucun | soleil-couvert | 0.0 | -1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 345° NNO | aucun | soleil | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 349° N | 08h-19h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 9 | 16 | 355° N | aucun | soleil | 0.0 | 8°C |
| Cruas - Nuclear Spot | 13 | 27 | 359° N | 08h-20h | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 6 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 23° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 23° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 5 | 8 | 138° SE | aucun | couvert | 0.3 | 5°C |
| Nord du Pont d'Arciat | 5 | 8 | 138° SE | aucun | couvert | 0.3 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 333° NNO | aucun | soleil-couvert | 0.0 | 6°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 38° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 14 | 19 | 27° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 9 | 12 | 44° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 8 | 13 | 50° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 110° ESE | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 357° N | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 164° SSE | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 180° S | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 15° NNE | aucun | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 337° NNO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 8 | 19 | 28° NNE | aucun | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 21° NNE | aucun | soleil | 0.0 | 4°C |
| Nord du Pont de Chavanay | 2 | 6 | 21° NNE | aucun | soleil | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 67° ENE | aucun | soleil | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 21° NNE | aucun | soleil | 0.0 | 4°C |
| Saint-Romain-des-Iles | 3 | 8 | 138° SE | aucun | soleil | 0.0 | 2°C |
| Nord du Pont d'Arciat | 3 | 8 | 138° SE | aucun | soleil | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 144° SE | aucun | soleil | 0.0 | 3°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 261° O | aucun | pluie | 1.2 | 10°C |
| Plage d'Excenevex | 5 | 9 | 261° O | aucun | pluie | 1.2 | 10°C |
| Plage du Vengeron | 5 | 9 | 261° O | aucun | pluie | 1.2 | 10°C |
| Plage d'Hermance | 5 | 9 | 261° O | aucun | pluie | 1.2 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 102° ESE | aucun | pluie | 1.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 97° E | aucun | pluie | 1.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 355° N | aucun | couvert | 0.1 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 353° N | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 181° S | aucun | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 185° S | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 5 | 13 | 199° SSO | aucun | couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 161° SSE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 7 | 15 | 161° SSE | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 176° S | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 165° SSE | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 6 | 150° SSE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 6 | 150° SSE | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 163° SSE | aucun | couvert | 0.0 | 8°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 30° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 8 | 13 | 30° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 8 | 13 | 30° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 8 | 13 | 30° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 332° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 55° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 338° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 14° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 357° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 346° NNO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 10 | 22 | 17° NNE | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 20° NNE | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 14 | 20° NNE | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 8° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 9° N | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 4 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 343° NNO | aucun | soleil | 0.0 | 9°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 38° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 7 | 67° ENE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 3 | 7 | 38° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 3 | 7 | 38° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 6 | 290° ONO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 33° NNE | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 176° S | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 176° S | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 11° N | aucun | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 351° N | aucun | couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 4 | 10 | 8° N | aucun | couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 354° N | aucun | couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 2 | 7 | 354° N | aucun | couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 5 | 42° NE | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 351° N | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 3 | 6 | 188° S | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 3 | 6 | 188° S | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 6 | 240° OSO | aucun | couvert | 0.0 | 4°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 21° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 7 | 35° NE | aucun | soleil | 0.0 | 7°C |
| Plage du Vengeron | 3 | 7 | 21° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 3 | 7 | 21° NNE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 277° O | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 360° N | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 10° N | aucun | soleil | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 9° N | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 11° N | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 327° NNO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 4 | 9 | 23° NNE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 18° NNE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 2 | 8 | 18° NNE | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 56° NE | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 18° NNE | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 2 | 7 | 121° ESE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 2 | 7 | 121° ESE | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 302° ONO | aucun | couvert | 0.0 | 4°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 8 | 29° NNE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 6 | 9 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 6 | 9 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 280° O | aucun | soleil | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 237° OSO | aucun | couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 333° NNO | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 270° O | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 6° N | aucun | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 354° N | aucun | soleil | 0.0 | 5°C |
| Cruas - Nuclear Spot | 9 | 21 | 23° NNE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 36° NE | aucun | soleil | 0.0 | 5°C |
| Nord du Pont de Chavanay | 6 | 15 | 36° NE | aucun | soleil | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 20° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 3 | 7 | 9° N | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 3 | 7 | 9° N | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 329° NNO | aucun | soleil-couvert | 0.0 | 4°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 34° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 2 | 5 | 40° NE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 3 | 5 | 34° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 3 | 5 | 34° NE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 277° O | aucun | soleil | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 346° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 15° NNE | aucun | soleil | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 24° NNE | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 2° N | aucun | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 341° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 9 | 21 | 29° NNE | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 36° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 5 | 12 | 36° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 30° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 2 | 6 | 47° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 2 | 6 | 47° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 353° N | aucun | soleil-couvert | 0.0 | 4°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 62° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 5 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 6 | 10 | 62° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 6 | 10 | 62° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 310° NO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 219° SO | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 10° N | aucun | soleil | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 11 | 335° NNO | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 26 | 11° N | 08h-17h | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 9 | 22 | 4° N | aucun | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 11 | 30 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 31° NNE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 5 | 14 | 31° NNE | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 37° NE | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 25° NNE | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 3 | 7 | 351° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 3 | 7 | 351° N | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 332° NNO | aucun | couvert | 0.0 | 7°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 167° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 2 | 5 | 200° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 3 | 6 | 167° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 3 | 6 | 167° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 294° ONO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 37° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 207° SSO | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 205° SSO | aucun | soleil-couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 6° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 10 | 24 | 17° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 17° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 5 | 12 | 17° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 19° NNE | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 16° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 6 | 249° OSO | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 2 | 6 | 249° OSO | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 5 | 294° ONO | aucun | couvert | 0.0 | 8°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 11 | 213° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 11 | 15 | 229° SO | 17h-20h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 9 | 11 | 213° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 9 | 11 | 213° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 145° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 264° O | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 169° S | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 155° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 186° S | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 178° S | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 3 | 9 | 182° S | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 112° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 9 | 112° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 192° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 110° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 7 | 174° S | aucun | couvert | 0.6 | 9°C |
| Nord du Pont d'Arciat | 3 | 7 | 174° S | aucun | couvert | 0.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 177° S | aucun | soleil-couvert | 0.0 | 9°C |
