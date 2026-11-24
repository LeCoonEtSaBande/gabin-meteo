# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 24/11/2026 17:01 (Europe/Paris)
- Fichiers générés le : 2026-11-24T17:02:36+01:00
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
| Plage de la pointe - Messery | 12 | 15 | 40° NE | 13h-19h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 13 | 18 | 23° NNE | 14h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 11 | 14 | 48° NE | 16h-19h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 11 | 14 | 46° NE | 15h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 315° NO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 20° NNE | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 30 | 206° SSO | 13h-20h | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 16 | 198° SSO | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 193° SSO | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 182° S | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 6 | 11 | 201° SSO | aucun | couvert | 0.3 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 16 | 186° S | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 12 | 21 | 193° SSO | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 36 | 179° S | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 198° SSO | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 4 | 5 | 15° NNE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 5 | 8° N | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 143° SE | aucun | couvert | 0.0 | 9°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 49° NE | aucun | orage | 9.3 | 7°C |
| Plage d'Excenevex | 12 | 18 | 24° NNE | aucun | orage | 9.5 | 8°C |
| Plage du Vengeron | 10 | 14 | 23° NNE | aucun | orage | 9.2 | 8°C |
| Plage d'Hermance | 12 | 16 | 17° NNE | aucun | orage | 9.3 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 14 | 113° ESE | aucun | orage | 18.6 | 8°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 4° N | aucun | orage | 19.7 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 345° NNO | aucun | orage | 29.7 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 347° NNO | aucun | orage | 24.4 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 19° NNE | aucun | orage | 13.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 49° NE | aucun | orage | 12.4 | 12°C |
| Cruas - Nuclear Spot | 9 | 18 | 23° NNE | aucun | orage | 15.2 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 13 | 6° N | aucun | orage | 16.4 | 12°C |
| Nord du Pont de Chavanay | 6 | 13 | 16° NNE | aucun | orage | 10.3 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 342° NNO | aucun | orage | 8.7 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 32° NNE | aucun | orage | 6.9 | 12°C |
| Saint-Romain-des-Iles | 5 | 8 | 16° NNE | aucun | couvert | 0.7 | 10°C |
| Nord du Pont d'Arciat | 7 | 10 | 340° NNO | aucun | couvert | 0.4 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 5° N | aucun | pluie | 3.2 | 10°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 49° NE | 17h-20h | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 14 | 19 | 28° NNE | 16h-20h | couvert | 0.0 | 5°C |
| Plage du Vengeron | 12 | 15 | 38° NE | 17h-20h | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 11 | 16 | 47° NE | aucun | pluie | 4.5 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 13 | 308° NO | aucun | pluie | 3.3 | 7°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 360° N | aucun | pluie | 5.1 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 21 | 360° N | aucun | pluie | 9.5 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 355° N | 14h-19h | pluie | 1.2 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 26 | 6° N | 16h-20h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 12 | 20 | 8° N | 17h-20h | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 15 | 30 | 7° N | 16h-20h | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 20° NNE | aucun | couvert | 0.1 | 10°C |
| Nord du Pont de Chavanay | 10 | 17 | 20° NNE | aucun | couvert | 0.1 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 14 | 13° NNE | aucun | couvert | 0.5 | 10°C |
| Saint-Cyr-sur-le-Rhône | 8 | 14 | 13° NNE | aucun | couvert | 0.7 | 10°C |
| Saint-Romain-des-Iles | 8 | 12 | 25° NNE | aucun | couvert | 0.3 | 6°C |
| Nord du Pont d'Arciat | 8 | 12 | 25° NNE | aucun | couvert | 0.7 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 7° N | aucun | couvert | 0.3 | 7°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 26° NNE | 16h-20h | couvert | 0.0 | 4°C |
| Plage d'Excenevex | 17 | 23 | 23° NNE | 16h-20h | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 15 | 19 | 35° NE | 17h-20h | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 13 | 19 | 32° NNE | 17h-20h | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 288° ONO | aucun | couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 333° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 30° NNE | aucun | couvert | 0.0 | -1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 338° NNO | aucun | soleil-couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 23 | 10° N | 08h-20h | couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 11 | 18 | 11° N | 14h-19h | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 15 | 30 | 7° N | 08h-20h | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 15° NNE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 8 | 15 | 15° NNE | aucun | couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 14° NNE | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 14° NNE | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 5 | 8 | 27° NNE | aucun | couvert | 0.2 | 3°C |
| Nord du Pont d'Arciat | 5 | 8 | 27° NNE | aucun | couvert | 0.2 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 7° N | aucun | couvert | 0.0 | 4°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 41° NE | 08h-13h | soleil-couvert | 0.0 | 3°C |
| Plage d'Excenevex | 18 | 25 | 26° NNE | 08h-14h | couvert | 0.0 | 3°C |
| Plage du Vengeron | 14 | 18 | 44° NE | 08h-13h | couvert | 0.0 | 3°C |
| Plage d'Hermance | 13 | 20 | 44° NE | 08h-13h | soleil-couvert | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 327° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 6 | 9 | 4° N | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 196° SSO | aucun | soleil | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 195° SSO | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 18 | 350° N | aucun | soleil | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 9 | 14 | 336° NNO | aucun | soleil | 0.0 | 4°C |
| Cruas - Nuclear Spot | 10 | 22 | 13° NNE | aucun | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 32° NNE | aucun | soleil | 0.0 | 3°C |
| Nord du Pont de Chavanay | 6 | 10 | 32° NNE | aucun | soleil | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 18° NNE | aucun | soleil | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 28° NNE | aucun | soleil | 0.0 | 3°C |
| Saint-Romain-des-Iles | 2 | 8 | 113° ESE | aucun | soleil | 0.0 | 1°C |
| Nord du Pont d'Arciat | 2 | 8 | 113° ESE | aucun | soleil | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 301° ONO | aucun | soleil | 0.0 | 3°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 350° N | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 3 | 5 | 350° N | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 3 | 5 | 350° N | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 3 | 5 | 350° N | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 2 | 105° ESE | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 58° ENE | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 155° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 210° SSO | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 6 | 5° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 325° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 3 | 8 | 37° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 2 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 69° ENE | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 2 | 4 | 339° NNO | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 6 | 149° SSE | aucun | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 2 | 6 | 149° SSE | aucun | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 328° NNO | aucun | couvert | 0.0 | 4°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 4 | 5 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 5 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 4 | 5 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 111° ESE | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 83° E | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 4 | 99° E | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 186° S | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 6° N | 09h-19h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 357° N | 12h-15h | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 11 | 25 | 18° NNE | 08h-20h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 356° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 7 | 16 | 356° N | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 337° NNO | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 348° NNO | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 7 | 13 | 348° NNO | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 7 | 13 | 348° NNO | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 326° NO | aucun | couvert | 0.0 | 7°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 47° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 6 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 6 | 11 | 47° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 6 | 11 | 47° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 113° ESE | aucun | soleil | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 25° NNE | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 101° E | aucun | soleil | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 187° S | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 350° N | aucun | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 60° ENE | aucun | soleil | 0.0 | 7°C |
| Cruas - Nuclear Spot | 6 | 18 | 26° NNE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 7 | 120° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 1 | 7 | 120° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 127° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 1 | 5 | 356° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 3 | 6 | 152° SSE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 3 | 6 | 152° SSE | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 109° ESE | aucun | soleil-couvert | 0.0 | 6°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 31° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 8 | 44° NE | aucun | soleil | 0.0 | 7°C |
| Plage du Vengeron | 4 | 9 | 31° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 4 | 9 | 31° NNE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 304° NO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 27° NNE | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 56° NE | aucun | soleil | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 146° SE | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 1 | 6 | 150° SSE | aucun | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 137° SE | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 1 | 4 | 355° N | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 159° SSE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 10 | 159° SSE | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 168° SSE | aucun | soleil | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 162° SSE | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 8 | 161° SSE | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 4 | 8 | 161° SSE | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 156° SSE | aucun | soleil | 0.0 | 8°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 98° E | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 2 | 6 | 43° NE | aucun | soleil | 0.0 | 7°C |
| Plage du Vengeron | 2 | 5 | 98° E | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 2 | 5 | 98° E | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 295° ONO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 4 | 175° S | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 174° S | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 8° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 334° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 7 | 21 | 11° N | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 4 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 6 | 63° ENE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 2 | 6 | 63° ENE | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 343° NNO | aucun | soleil-couvert | 0.0 | 4°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 17 | 25° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 9 | 13 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 10 | 17 | 25° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 10 | 17 | 25° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 280° O | aucun | soleil | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 235° SO | aucun | couvert | 0.0 | 2°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 4 | 216° SO | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 222° SO | aucun | soleil-couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 7° N | 08h-20h | soleil-couvert | 0.0 | 3°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 357° N | aucun | soleil-couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 10 | 25 | 26° NNE | 13h-20h | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 32° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 8 | 18 | 32° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 16° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 22° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 5 | 10 | 355° N | aucun | soleil | 0.0 | 3°C |
| Nord du Pont d'Arciat | 5 | 10 | 355° N | aucun | soleil | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 345° NNO | aucun | soleil-couvert | 0.0 | 2°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 38° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 10 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Plage du Vengeron | 9 | 14 | 38° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 9 | 14 | 38° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 320° NO | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 240° OSO | aucun | couvert | 0.0 | 1°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 13° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 6° N | 10h-17h | couvert | 0.0 | 2°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 358° N | aucun | couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 11 | 24 | 28° NNE | 08h-17h | soleil-couvert | 0.0 | 3°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 21° NNE | aucun | couvert | 0.0 | 3°C |
| Nord du Pont de Chavanay | 7 | 16 | 21° NNE | aucun | couvert | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 352° N | aucun | couvert | 0.0 | 1°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 9° N | aucun | couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 5 | 11 | 359° N | aucun | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 5 | 11 | 359° N | aucun | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 341° NNO | aucun | couvert | 0.0 | 2°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 39° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Plage d'Excenevex | 8 | 14 | 33° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Plage du Vengeron | 8 | 14 | 39° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Plage d'Hermance | 8 | 14 | 39° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 313° NO | aucun | soleil | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 28° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 48° NE | aucun | soleil | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 360° N | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 19 | 6° N | aucun | soleil | 0.0 | 3°C |
| La Roche-de-Glun - Base Nautique | 4 | 15 | 340° NNO | aucun | soleil | 0.0 | 2°C |
| Cruas - Nuclear Spot | 6 | 19 | 28° NNE | aucun | soleil | 0.0 | 3°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 57° ENE | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont de Chavanay | 2 | 9 | 57° ENE | aucun | soleil-couvert | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 45° NE | aucun | soleil-couvert | 0.0 | 1°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 43° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 2 | 7 | 131° SE | aucun | couvert | 0.0 | -1°C |
| Nord du Pont d'Arciat | 2 | 7 | 131° SE | aucun | couvert | 0.0 | -1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 2°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 35° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 5 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 4 | 10 | 35° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 4 | 10 | 35° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 304° NO | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 4 | 164° SSE | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 4 | 156° SSE | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 5 | 354° N | aucun | soleil-couvert | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 2 | 4 | 356° N | aucun | soleil-couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 2 | 6 | 18° NNE | aucun | couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 5 | 355° N | aucun | couvert | 0.0 | 2°C |
| Nord du Pont de Chavanay | 1 | 5 | 355° N | aucun | couvert | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 37° NE | aucun | couvert | 0.0 | 1°C |
| Saint-Cyr-sur-le-Rhône | 1 | 5 | 343° NNO | aucun | couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 2 | 5 | 144° SE | aucun | couvert | 0.0 | 0°C |
| Nord du Pont d'Arciat | 2 | 5 | 144° SE | aucun | couvert | 0.0 | 0°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 341° NNO | aucun | couvert | 0.0 | 2°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 33° NNE | aucun | couvert | 0.0 | 5°C |
| Plage d'Excenevex | 4 | 8 | 31° NNE | aucun | couvert | 0.0 | 5°C |
| Plage du Vengeron | 6 | 9 | 33° NNE | aucun | couvert | 0.0 | 5°C |
| Plage d'Hermance | 6 | 9 | 33° NNE | aucun | couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 320° NO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 49° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 45° NE | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 4° N | aucun | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 338° NNO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 5 | 12 | 7° N | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 350° N | aucun | soleil | 0.0 | 5°C |
| Nord du Pont de Chavanay | 3 | 7 | 350° N | aucun | soleil | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 343° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 351° N | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 3 | 6 | 310° NO | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 3 | 6 | 310° NO | aucun | soleil-couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 338° NNO | aucun | soleil-couvert | 0.0 | 5°C |
