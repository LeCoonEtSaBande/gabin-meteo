# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 25/11/2026 02:28 (Europe/Paris)
- Fichiers générés le : 2026-11-25T02:29:43+01:00
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

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 15 | 54° NE | aucun | pluie | 4.8 | 8°C |
| Plage d'Excenevex | 14 | 21 | 35° NE | aucun | pluie | 6.2 | 8°C |
| Plage du Vengeron | 7 | 11 | 45° NE | aucun | pluie | 5.6 | 8°C |
| Plage d'Hermance | 8 | 10 | 61° ENE | aucun | pluie | 5.2 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 15 | 148° SSE | aucun | orage | 14.8 | 9°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 360° N | aucun | orage | 10.1 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 19 | 347° NNO | aucun | orage | 25.5 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 335° NNO | aucun | orage | 20.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 16 | 357° N | aucun | orage | 6.1 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 340° NNO | aucun | pluie | 2.0 | 12°C |
| Cruas - Nuclear Spot | 9 | 18 | 22° NNE | aucun | pluie | 3.9 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 6° N | aucun | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 7 | 12 | 352° N | aucun | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 176° S | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 9 | 28° NNE | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 6 | 182° S | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 8 | 10 | 195° SSO | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 8 | 350° N | aucun | couvert | 0.0 | 10°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 41° NE | aucun | pluie | 2.3 | 7°C |
| Plage d'Excenevex | 17 | 24 | 20° NNE | 16h-20h | couvert | 0.0 | 6°C |
| Plage du Vengeron | 11 | 14 | 44° NE | aucun | pluie | 1.9 | 7°C |
| Plage d'Hermance | 11 | 16 | 46° NE | aucun | pluie | 2.1 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 10 | 302° ONO | aucun | pluie | 1.2 | 7°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 4° N | aucun | pluie | 2.2 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 8° N | 11h-20h | pluie | 1.8 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 352° N | 11h-18h | pluie | 1.7 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 8° N | 09h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 1° N | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 14 | 29 | 14° NNE | 11h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 5° N | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 8 | 14 | 4° N | aucun | couvert | 0.2 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 331° NNO | aucun | couvert | 0.4 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 30° NNE | aucun | pluie | 1.5 | 8°C |
| Saint-Romain-des-Iles | 7 | 11 | 36° NE | aucun | couvert | 0.3 | 6°C |
| Nord du Pont d'Arciat | 7 | 11 | 49° NE | aucun | couvert | 0.3 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 342° NNO | aucun | couvert | 0.6 | 6°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 15 | 30° NNE | aucun | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 14 | 18 | 25° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 10 | 13 | 44° NE | aucun | couvert | 0.0 | 6°C |
| Plage d'Hermance | 9 | 14 | 42° NE | aucun | couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 292° ONO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 333° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 32° NNE | aucun | couvert | 0.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 341° NNO | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 26 | 7° N | 08h-20h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 13 | 21 | 9° N | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 18 | 35 | 3° N | 08h-20h | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 19 | 22° NNE | 13h-16h | couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 10 | 19 | 22° NNE | 13h-16h | couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 15 | 13° NNE | aucun | couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 8 | 15 | 13° NNE | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 9 | 14 | 37° NE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 9 | 14 | 37° NE | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 6° N | aucun | couvert | 0.0 | 5°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 43° NE | 08h-12h | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 17 | 22 | 27° NNE | 08h-13h | couvert | 0.0 | 4°C |
| Plage du Vengeron | 13 | 18 | 43° NE | 08h-12h | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 12 | 19 | 46° NE | 08h-12h | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 298° ONO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 6 | 9 | 357° N | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 177° S | aucun | soleil | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 336° NNO | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 1° N | 08h-17h | soleil | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 353° N | aucun | soleil | 0.0 | 5°C |
| Cruas - Nuclear Spot | 13 | 25 | 12° NNE | 08h-13h | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 14 | 21° NNE | aucun | soleil | 0.0 | 4°C |
| Nord du Pont de Chavanay | 8 | 14 | 21° NNE | aucun | soleil | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 11° N | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 11° N | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 6 | 9 | 54° NE | aucun | soleil-couvert | 0.0 | 1°C |
| Nord du Pont d'Arciat | 6 | 9 | 54° NE | aucun | soleil-couvert | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 11° N | aucun | soleil | 0.0 | 3°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 2 | 229° SO | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 2 | 4 | 176° S | aucun | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 2 | 2 | 27° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 3 | 4 | 90° E | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 1 | 153° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 2 | 45° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 47° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 207° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 12° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 330° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 3 | 9 | 37° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 352° N | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 2 | 6 | 352° N | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 50° NE | aucun | couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 38° NE | aucun | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 5 | 111° ESE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 2 | 5 | 111° ESE | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 322° NO | aucun | couvert | 0.0 | 5°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 16° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 4 | 6 | 16° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 4 | 6 | 16° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 4 | 6 | 16° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 288° ONO | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 290° ONO | aucun | soleil-couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 317° NO | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 39° NE | aucun | soleil | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 15° NNE | aucun | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 336° NNO | aucun | soleil | 0.0 | 7°C |
| Cruas - Nuclear Spot | 5 | 14 | 43° NE | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 44° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 3 | 8 | 44° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 58° ENE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 41° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 5 | 52° NE | aucun | soleil | 0.0 | 5°C |
| Nord du Pont d'Arciat | 2 | 5 | 52° NE | aucun | soleil | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 6°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 14° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Plage d'Excenevex | 6 | 9 | 14° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Plage du Vengeron | 6 | 9 | 14° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Plage d'Hermance | 6 | 9 | 14° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 340° NNO | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 50° NE | aucun | soleil | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 4 | 117° ESE | aucun | soleil | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 180° S | aucun | soleil | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 6 | 194° SSO | aucun | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 1 | 6 | 228° SO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 2 | 8 | 5° N | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 6 | 115° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 1 | 6 | 115° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 5 | 76° ENE | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 1 | 6 | 98° E | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 7 | 125° SE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 2 | 7 | 125° SE | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 6 | 165° SSE | aucun | soleil-couvert | 0.0 | 4°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 20° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 3 | 6 | 32° NNE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 3 | 6 | 20° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 3 | 6 | 20° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 285° ONO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 14° NNE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 156° SSE | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 153° SSE | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 194° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 186° S | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 4 | 10 | 177° S | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 146° SE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 3 | 8 | 146° SE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 0 | 5 | 292° ONO | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 137° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 6 | 119° ESE | aucun | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 2 | 6 | 119° ESE | aucun | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 203° SSO | aucun | soleil-couvert | 0.0 | 5°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 8 | 29° NNE | aucun | soleil | 0.0 | 7°C |
| Plage du Vengeron | 6 | 9 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 6 | 9 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 302° ONO | aucun | soleil | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 246° OSO | aucun | soleil-couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 349° N | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 4 | 186° S | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 9° N | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 349° N | aucun | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 8 | 18 | 33° NNE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 38° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 5 | 12 | 38° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 356° N | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 1 | 5 | 73° ENE | aucun | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 1 | 5 | 73° ENE | aucun | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 342° NNO | aucun | soleil-couvert | 0.0 | 4°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 26° NNE | 17h-20h | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 11 | 16 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 12 | 17 | 26° NNE | 17h-20h | soleil | 0.0 | 9°C |
| Plage d'Hermance | 12 | 17 | 26° NNE | 17h-20h | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 281° O | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 213° SSO | aucun | couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 360° N | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 210° SSO | aucun | soleil-couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 26 | 21° NNE | 11h-20h | couvert | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 10 | 24 | 20° NNE | aucun | couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 13 | 31 | 22° NNE | 08h-20h | couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 19 | 2° N | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 9 | 19 | 2° N | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 354° N | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 354° N | aucun | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 9 | 16 | 348° NNO | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 9 | 16 | 348° NNO | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 349° N | aucun | couvert | 0.0 | 5°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 23 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 14 | 21 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 16 | 23 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 16 | 23 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 341° NNO | aucun | soleil | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 34° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 8° N | aucun | couvert | 0.0 | -1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 322° NO | aucun | couvert | 0.0 | -2°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 29 | 11° N | 08h-20h | soleil-couvert | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 7° N | 08h-17h | soleil-couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 14 | 33 | 21° NNE | 08h-20h | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 354° N | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 10 | 22 | 354° N | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 347° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 347° NNO | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 9 | 19 | 359° N | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 9 | 19 | 359° N | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 340° NNO | aucun | soleil-couvert | 0.0 | 4°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 19 | 37° NE | aucun | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 8 | 16 | 31° NNE | aucun | soleil | 0.0 | 5°C |
| Plage du Vengeron | 9 | 19 | 37° NE | aucun | soleil | 0.0 | 6°C |
| Plage d'Hermance | 9 | 19 | 37° NE | aucun | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 299° ONO | aucun | soleil | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 30° NNE | aucun | soleil | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 23° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 25° NNE | aucun | soleil | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 9° N | aucun | soleil-couvert | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 348° NNO | aucun | soleil | 0.0 | 4°C |
| Cruas - Nuclear Spot | 11 | 25 | 24° NNE | 08h-15h | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 32° NNE | aucun | soleil | 0.0 | 4°C |
| Nord du Pont de Chavanay | 5 | 14 | 32° NNE | aucun | soleil | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 342° NNO | aucun | soleil | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 23° NNE | aucun | soleil | 0.0 | 3°C |
| Saint-Romain-des-Iles | 3 | 9 | 303° ONO | aucun | soleil | 0.0 | 2°C |
| Nord du Pont d'Arciat | 3 | 9 | 303° ONO | aucun | soleil | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 340° NNO | aucun | soleil-couvert | 0.0 | 3°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 35° NE | aucun | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 7 | 11 | 29° NNE | aucun | soleil | 0.0 | 6°C |
| Plage du Vengeron | 9 | 12 | 35° NE | aucun | soleil | 0.0 | 6°C |
| Plage d'Hermance | 9 | 12 | 35° NE | aucun | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 276° O | aucun | soleil | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 246° OSO | aucun | couvert | 0.0 | 1°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 4° N | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 14 | 352° N | aucun | soleil-couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 8° N | 08h-20h | soleil-couvert | 0.0 | 3°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 6° N | 16h-19h | soleil-couvert | 0.0 | 2°C |
| Cruas - Nuclear Spot | 14 | 31 | 15° NNE | 08h-20h | soleil-couvert | 0.0 | 3°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 26° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Nord du Pont de Chavanay | 8 | 19 | 26° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 13° NNE | aucun | couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 20° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 6 | 11 | 338° NNO | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 6 | 11 | 338° NNO | aucun | soleil-couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 344° NNO | aucun | soleil-couvert | 0.0 | 2°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 49° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 7 | 46° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 4 | 9 | 49° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 4 | 9 | 49° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 302° ONO | aucun | soleil | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 208° SSO | aucun | soleil-couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 219° SO | aucun | soleil-couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 11° N | 08h-16h | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 358° N | aucun | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 12 | 28 | 20° NNE | 08h-18h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 23° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 6 | 15 | 23° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 6° N | aucun | couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 12° NNE | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 6 | 285° ONO | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 6 | 285° ONO | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 349° N | aucun | couvert | 0.0 | 5°C |

### mer. 09/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 202° SSO | aucun | soleil-couvert | 0.0 |  |
| Plage d'Excenevex | 4 | 8 | 220° SO | aucun | soleil-couvert | 0.0 |  |
| Plage du Vengeron | 7 | 9 | 202° SSO | aucun | soleil-couvert | 0.0 |  |
| Plage d'Hermance | 7 | 9 | 202° SSO | aucun | soleil-couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 233° SO | aucun | soleil-couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 193° SSO | aucun | soleil-couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 16° NNE | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 173° S | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 7° N | 10h-13h | couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 5° N | aucun | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 10 | 27 | 17° NNE | aucun | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 30° NNE | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 6 | 14 | 30° NNE | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 43° NE | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 27° NNE | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 1 | 5 | 228° SO | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 1 | 5 | 228° SO | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 4 | 323° NO | aucun | couvert | 0.0 |  |
