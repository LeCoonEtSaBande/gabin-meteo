# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 28/11/2026 01:36 (Europe/Paris)
- Fichiers générés le : 2026-11-28T01:42:09+01:00
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

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 37° NE | 10h-13h | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 16 | 24 | 28° NNE | 08h-13h | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 12 | 16 | 46° NE | 09h-12h | couvert | 0.0 | 5°C |
| Plage d'Hermance | 13 | 17 | 41° NE | 08h-12h | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 336° NNO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 10 | 14 | 27° NNE | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 189° S | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 177° S | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 350° N | aucun | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 10 | 15 | 335° NNO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 12 | 27 | 9° N | aucun | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 20° NNE | aucun | soleil | 0.0 | 6°C |
| Nord du Pont de Chavanay | 6 | 10 | 20° NNE | aucun | soleil | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 16° NNE | aucun | soleil | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 16° NNE | aucun | soleil | 0.0 | 5°C |
| Saint-Romain-des-Iles | 3 | 5 | 176° S | aucun | soleil | 0.0 | 3°C |
| Nord du Pont d'Arciat | 4 | 5 | 56° NE | aucun | soleil | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 90° E | aucun | soleil | 0.0 | 4°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 308° NO | aucun | pluie | 1.7 | 6°C |
| Plage d'Excenevex | 4 | 5 | 308° NO | aucun | pluie | 1.7 | 6°C |
| Plage du Vengeron | 4 | 5 | 308° NO | aucun | pluie | 1.7 | 6°C |
| Plage d'Hermance | 4 | 5 | 308° NO | aucun | pluie | 1.7 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 120° ESE | aucun | couvert | 0.7 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 58° ENE | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 40° NE | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 16 | 201° SSO | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 18 | 192° SSO | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 4 | 4 | 37° NE | aucun | couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 16° NNE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 4 | 16° NNE | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 197° SSO | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 197° SSO | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 7 | 209° SSO | aucun | couvert | 0.6 | 6°C |
| Nord du Pont d'Arciat | 4 | 6 | 191° S | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 3 | 355° N | aucun | couvert | 0.0 | 7°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 35° NE | 11h-16h | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 11 | 17 | 35° NE | 11h-16h | soleil | 0.0 | 8°C |
| Plage du Vengeron | 11 | 17 | 35° NE | 11h-16h | soleil | 0.0 | 8°C |
| Plage d'Hermance | 11 | 17 | 35° NE | 11h-16h | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 332° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 37° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 10° N | 08h-20h | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 10° N | aucun | couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 14 | 28 | 13° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 18° NNE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 9 | 15 | 18° NNE | aucun | couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 13 | 3° N | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 7 | 13 | 3° N | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 8 | 12 | 48° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 8 | 12 | 48° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 341° NNO | aucun | couvert | 0.0 | 4°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 3° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 6 | 3° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 4 | 6 | 3° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 4 | 6 | 3° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 3 | 106° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 160° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 191° S | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 355° N | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 7 | 11 | 334° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 7 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 349° N | aucun | couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 3 | 6 | 349° N | aucun | couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 329° NNO | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 2 | 5 | 329° NNO | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 3 | 6 | 163° SSE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 3 | 6 | 163° SSE | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 3 | 287° ONO | aucun | couvert | 0.0 | 4°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 351° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 5 | 351° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 4 | 5 | 351° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 4 | 5 | 351° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 104° ESE | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 111° ESE | aucun | couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 44° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 170° S | aucun | couvert | 0.0 | 8°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 357° N | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 7 | 357° N | aucun | soleil | 0.0 | 7°C |
| Plage du Vengeron | 4 | 7 | 357° N | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 4 | 7 | 357° N | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 85° E | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 76° ENE | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 4 | 225° SO | aucun | soleil | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 9 | 25 | 349° N | aucun | couvert | 0.0 | 8°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 39° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 5 | 8 | 39° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 5 | 8 | 39° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 5 | 8 | 39° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 343° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 42° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 10° N | aucun | soleil | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 350° N | aucun | soleil-couvert | 0.0 | 4°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 23° NNE | aucun | soleil | 0.0 | 3°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 43° NE | aucun | soleil-couvert | 0.0 | 2°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 173° S | aucun | soleil-couvert | 0.0 | 2°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Saint-Cyr-sur-le-Rhône | 7 | 21 | 168° SSE | aucun | soleil-couvert | 0.0 | 9°C |

### mer. 09/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 150° SSE | aucun | soleil-couvert | 0.0 | 11°C |

### jeu. 10/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 138° SE | aucun | soleil-couvert | 0.0 | 10°C |

### ven. 11/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Saint-Cyr-sur-le-Rhône | 2 | 4 | 351° N | aucun | couvert | 0.0 | 8°C |

### sam. 12/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 20° NNE | aucun | couvert | 0.0 |  |
