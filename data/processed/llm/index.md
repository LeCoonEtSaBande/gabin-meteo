# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 24/11/2026 04:23 (Europe/Paris)
- Fichiers générés le : 2026-11-24T04:23:56+01:00
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

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 35° NE | 10h-13h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 12 | 18 | 22° NNE | 08h-12h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 12 | 49° NE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 10 | 13 | 39° NE | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 318° NO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 19° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 28 | 205° SSO | 14h-20h | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 155° SSE | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 200° SSO | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 182° S | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 5 | 10 | 52° NE | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 21 | 184° S | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 12 | 24 | 192° SSO | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 34 | 178° S | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 201° SSO | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 4 | 164° SSE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 5 | 6 | 169° S | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 175° S | aucun | couvert | 0.0 | 7°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 38° NE | aucun | orage | 9.1 | 8°C |
| Plage d'Excenevex | 10 | 12 | 25° NNE | aucun | orage | 11.5 | 8°C |
| Plage du Vengeron | 7 | 9 | 40° NE | aucun | orage | 8.1 | 8°C |
| Plage d'Hermance | 9 | 12 | 82° E | aucun | orage | 9.4 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 11 | 156° SSE | aucun | orage | 18.3 | 8°C |
| Lac du Bourget - Cap des Séselets | 13 | 18 | 200° SSO | aucun | pluie | 9.8 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 175° S | aucun | orage | 48.9 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 164° SSE | aucun | orage | 51.3 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 19 | 355° N | aucun | orage | 39.4 | 9°C |
| La Roche-de-Glun - Base Nautique | 5 | 15 | 337° NNO | aucun | orage | 32.8 | 9°C |
| Cruas - Nuclear Spot | 9 | 18 | 7° N | aucun | orage | 30.8 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 7 | 335° NNO | aucun | orage | 21.3 | 9°C |
| Nord du Pont de Chavanay | 4 | 10 | 122° ESE | aucun | orage | 27.5 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 127° SE | aucun | orage | 21.9 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 336° NNO | aucun | orage | 22.6 | 9°C |
| Saint-Romain-des-Iles | 4 | 7 | 349° N | aucun | pluie | 5.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 9 | 334° NNO | aucun | pluie | 4.9 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 106° ESE | aucun | pluie | 14.0 | 8°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 38° NE | aucun | couvert | 0.9 | 7°C |
| Plage d'Excenevex | 13 | 17 | 26° NNE | 17h-20h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 10 | 12 | 36° NE | aucun | couvert | 0.6 | 7°C |
| Plage d'Hermance | 9 | 13 | 40° NE | aucun | couvert | 0.7 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 295° ONO | aucun | couvert | 0.4 | 9°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 11° N | aucun | couvert | 0.3 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 360° N | 12h-17h | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 357° N | 11h-15h | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 28 | 9° N | 13h-20h | couvert | 0.3 | 8°C |
| La Roche-de-Glun - Base Nautique | 14 | 23 | 5° N | 14h-20h | couvert | 0.2 | 7°C |
| Cruas - Nuclear Spot | 16 | 33 | 6° N | 13h-20h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 16 | 19° NNE | aucun | pluie | 3.2 | 6°C |
| Nord du Pont de Chavanay | 10 | 16 | 19° NNE | aucun | pluie | 3.2 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 12° NNE | aucun | pluie | 3.8 | 5°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 12° NNE | aucun | pluie | 3.8 | 5°C |
| Saint-Romain-des-Iles | 9 | 14 | 29° NNE | aucun | pluie | 1.4 | 4°C |
| Nord du Pont d'Arciat | 9 | 14 | 29° NNE | aucun | pluie | 1.4 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 354° N | aucun | pluie | 2.0 | 5°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 48° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 16 | 21 | 28° NNE | 17h-20h | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 12 | 16 | 48° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 11 | 17 | 53° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 325° NO | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 339° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 30° NNE | aucun | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 340° NNO | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 26 | 1° N | 08h-20h | soleil | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 13 | 21 | 3° N | 09h-18h | soleil | 0.0 | 5°C |
| Cruas - Nuclear Spot | 16 | 31 | 5° N | 08h-20h | soleil | 0.0 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 19 | 23° NNE | 10h-15h | soleil | 0.0 | 4°C |
| Nord du Pont de Chavanay | 10 | 19 | 23° NNE | 10h-15h | soleil | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 15 | 10° N | aucun | soleil | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 8 | 15 | 10° N | aucun | soleil | 0.0 | 3°C |
| Saint-Romain-des-Iles | 9 | 13 | 44° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 9 | 13 | 44° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 13° NNE | aucun | soleil-couvert | 0.0 | 3°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 47° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 16 | 22 | 27° NNE | 08h-12h | couvert | 0.0 | 4°C |
| Plage du Vengeron | 11 | 15 | 49° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 10 | 15 | 52° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 321° NO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 354° N | aucun | soleil | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 9 | 169° S | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 187° S | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 15° NNE | aucun | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 342° NNO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 7 | 21 | 32° NNE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 180° S | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 4 | 9 | 180° S | aucun | soleil-couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 229° SO | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 186° S | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 4 | 9 | 160° SSE | aucun | soleil-couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 4 | 9 | 160° SSE | aucun | soleil-couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 150° SSE | aucun | soleil-couvert | 0.0 | 4°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 263° O | aucun | pluie | 2.2 | 7°C |
| Plage d'Excenevex | 4 | 8 | 263° O | aucun | pluie | 2.2 | 7°C |
| Plage du Vengeron | 4 | 8 | 263° O | aucun | pluie | 2.2 | 7°C |
| Plage d'Hermance | 4 | 8 | 263° O | aucun | pluie | 2.2 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 109° ESE | aucun | couvert | 0.7 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 79° E | aucun | pluie | 1.9 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 339° NNO | aucun | couvert | 0.3 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 4° N | aucun | couvert | 0.3 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 184° S | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 187° S | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 13 | 193° SSO | aucun | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 168° SSE | aucun | couvert | 0.1 | 10°C |
| Nord du Pont de Chavanay | 9 | 21 | 168° SSE | aucun | couvert | 0.1 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 171° S | aucun | couvert | 0.1 | 10°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 168° SSE | aucun | couvert | 0.1 | 10°C |
| Saint-Romain-des-Iles | 5 | 8 | 195° SSO | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 5 | 8 | 195° SSO | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 183° S | aucun | couvert | 0.2 | 10°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 5 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 5 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 5 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 297° ONO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 263° O | aucun | couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 342° NNO | aucun | soleil | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 30° NNE | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 27 | 10° N | 10h-16h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 2° N | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 12 | 28 | 19° NNE | 09h-16h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 354° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 7 | 16 | 354° N | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 345° NNO | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 349° N | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 4 | 9 | 333° NNO | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 4 | 9 | 333° NNO | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 341° NNO | aucun | couvert | 0.0 | 7°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 307° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 2 | 4 | 56° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 2 | 4 | 307° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 2 | 4 | 307° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 5 | 280° O | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 162° SSE | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 148° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 15° NNE | aucun | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 352° N | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 4 | 10 | 20° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 6 | 58° ENE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 1 | 6 | 58° ENE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 86° E | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 1 | 6 | 54° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 7 | 126° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 7 | 126° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 6 | 196° SSO | aucun | soleil-couvert | 0.0 | 6°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 167° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 1 | 3 | 176° S | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 3 | 5 | 167° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 3 | 5 | 167° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 264° O | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 4° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 185° S | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 172° S | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 184° S | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 180° S | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 4 | 10 | 189° S | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 157° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 9 | 157° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 159° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 162° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 5 | 196° SSO | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 5 | 196° SSO | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 183° S | aucun | soleil-couvert | 0.0 | 8°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 25° NNE | aucun | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 6 | 10 | 15° NNE | aucun | soleil | 0.0 | 9°C |
| Plage du Vengeron | 8 | 10 | 25° NNE | aucun | soleil | 0.0 | 9°C |
| Plage d'Hermance | 8 | 10 | 25° NNE | aucun | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 293° ONO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 27° NNE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 13 | 8° N | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 12 | 357° N | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 30 | 11° N | 08h-20h | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 7° N | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 13 | 29 | 15° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 20 | 347° NNO | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 7 | 20 | 347° NNO | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 327° NNO | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 333° NNO | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 7 | 13 | 360° N | aucun | couvert | 0.6 | 9°C |
| Nord du Pont d'Arciat | 7 | 13 | 360° N | aucun | couvert | 0.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 337° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 39° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 8 | 13 | 26° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 9 | 14 | 39° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 9 | 14 | 39° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 330° NNO | aucun | couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 37° NE | aucun | couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 38° NE | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 204° SSO | aucun | couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 29 | 5° N | 08h-20h | couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 2° N | 12h-20h | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 14 | 30 | 15° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 356° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 8 | 20 | 356° N | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 344° NNO | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 349° N | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 8 | 14 | 356° N | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 8 | 14 | 356° N | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 340° NNO | aucun | couvert | 0.0 | 7°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 92° E | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 8 | 40° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 5 | 8 | 92° E | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 5 | 8 | 92° E | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 307° NO | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 186° S | aucun | couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 12° NNE | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 16 | 350° N | aucun | soleil-couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 16° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 12° NNE | 10h-16h | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 14 | 33 | 14° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 359° N | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 8 | 19 | 359° N | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 354° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 349° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 5 | 10 | 327° NNO | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 5 | 10 | 327° NNO | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 336° NNO | aucun | soleil-couvert | 0.0 | 5°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 13° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 4 | 6 | 56° NE | aucun | couvert | 0.0 | 9°C |
| Plage du Vengeron | 3 | 5 | 13° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 3 | 5 | 13° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 333° NNO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 81° E | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 14 | 13° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 31 | 15° NNE | 08h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 12 | 31 | 7° N | 10h-20h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 16 | 35 | 14° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 355° N | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 8 | 20 | 355° N | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 340° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 344° NNO | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 3 | 6 | 320° NO | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 3 | 6 | 320° NO | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 349° N | aucun | couvert | 0.0 | 9°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 31° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 9 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 10 | 15 | 31° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 10 | 15 | 31° NNE | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 259° O | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 204° SSO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 222° SO | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 30 | 9° N | 08h-13h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 25 | 359° N | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 11 | 33 | 17° NNE | 08h-14h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 348° NNO | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 8 | 19 | 348° NNO | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 339° NNO | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 341° NNO | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 5 | 10 | 347° NNO | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 10 | 347° NNO | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 336° NNO | aucun | couvert | 0.0 | 9°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 215° SO | aucun | soleil | 0.0 |  |
| Plage d'Excenevex | 12 | 16 | 227° SO | aucun | soleil | 0.0 |  |
| Plage du Vengeron | 10 | 13 | 215° SO | aucun | soleil | 0.0 |  |
| Plage d'Hermance | 10 | 13 | 215° SO | aucun | soleil | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 252° OSO | aucun | soleil | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 186° S | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 1° N | aucun | soleil | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 356° N | aucun | soleil | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 12° NNE | aucun | couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 10° N | aucun | soleil-couvert | 0.0 |  |
| Cruas - Nuclear Spot | 10 | 22 | 21° NNE | aucun | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 47° NE | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 4 | 10 | 47° NE | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 360° N | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 7° N | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 4 | 7 | 209° SSO | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 4 | 7 | 209° SSO | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 232° SO | aucun | couvert | 0.0 |  |
