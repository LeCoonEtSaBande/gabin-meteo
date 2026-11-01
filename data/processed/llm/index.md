# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 01/11/2026 22:16 (Europe/Paris)
- Fichiers générés le : 2026-11-01T22:20:03+01:00
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

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 29 | 43 | 34° NE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 26 | 40 | 28° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage du Vengeron | 30 | 44 | 34° NE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Hermance | 27 | 38 | 36° NE | 08h-20h | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 24 | 34 | 347° NNO | 08h-18h | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 18 | 25 | 2° N | 08h-20h | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 33 | 356° N | 08h-18h | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 18 | 31 | 356° N | 08h-18h | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 32 | 23° NNE | 08h-17h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 15° NNE | 11h-20h | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 18 | 36 | 23° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 28 | 346° NNO | 08h-20h | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 14 | 26 | 348° NNO | 09h-20h | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 21 | 330° NNO | 09h-13h | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 3° N | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 16 | 26 | 11° N | 09h-20h | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 16 | 25 | 8° N | 08h-20h | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 28 | 355° N | 11h-20h | soleil | 0.0 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 33 | 40° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 19 | 28 | 28° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 19 | 26 | 45° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 21 | 29 | 40° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 12 | 336° NNO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 3° N | 08h-12h | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 2° N | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 18 | 347° NNO | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 26 | 15° NNE | 08h-20h | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 6° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 17 | 34 | 15° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 21 | 4° N | 08h-13h | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 10 | 19 | 2° N | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 339° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 360° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 11 | 19 | 23° NNE | 11h-17h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 12 | 19 | 23° NNE | 10h-19h | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 349° N | aucun | soleil | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 17 | 23 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 14 | 19 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 13 | 19 | 35° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 304° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 13 | 18 | 360° N | 17h-20h | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 360° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 345° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 15° NNE | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 330° NNO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 12 | 22 | 25° NNE | 08h-14h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 2° N | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 11 | 44° NE | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 339° NNO | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 38° NE | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 6 | 11 | 35° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 10 | 353° N | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 358° N | aucun | soleil-couvert | 0.0 | 8°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 50° NE | 09h-20h | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 18 | 25 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 14 | 18 | 42° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 14 | 21 | 47° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 291° ONO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 7 | 16 | 48° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 180° S | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 348° NNO | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 26° NNE | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 12 | 323° NO | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 7 | 13 | 25° NNE | aucun | couvert | 0.8 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 11 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 6 | 11 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 8 | 10° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 8 | 10° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 7 | 35° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 7 | 35° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 24° NNE | aucun | soleil-couvert | 0.0 | 10°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 61° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 11 | 16 | 30° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 6 | 8 | 22° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 7 | 10 | 56° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 317° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 58° ENE | aucun | soleil-couvert | 0.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 355° N | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 345° NNO | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 10° N | aucun | pluie | 2.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 6 | 357° N | aucun | pluie | 1.1 | 9°C |
| Cruas - Nuclear Spot | 6 | 10 | 23° NNE | aucun | pluie | 2.7 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 42° NE | aucun | pluie | 1.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 4 | 42° NE | aucun | pluie | 1.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 255° OSO | aucun | pluie | 1.8 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 255° OSO | aucun | pluie | 1.8 | 9°C |
| Saint-Romain-des-Iles | 2 | 11 | 157° SSE | aucun | pluie | 1.7 | 10°C |
| Nord du Pont d'Arciat | 2 | 11 | 157° SSE | aucun | pluie | 1.7 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 9 | 234° SO | aucun | pluie | 1.8 | 9°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 278° O | aucun | couvert | 0.4 | 10°C |
| Plage d'Excenevex | 4 | 5 | 87° E | aucun | couvert | 0.4 | 10°C |
| Plage du Vengeron | 3 | 5 | 278° O | aucun | couvert | 0.4 | 10°C |
| Plage d'Hermance | 3 | 5 | 278° O | aucun | couvert | 0.4 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 62° ENE | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 11° N | aucun | soleil-couvert | 0.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 19° NNE | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 348° NNO | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 314° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 10 | 42° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 355° N | aucun | soleil-couvert | 0.1 | 12°C |
| Nord du Pont de Chavanay | 2 | 8 | 355° N | aucun | soleil-couvert | 0.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 3° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 49° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 2 | 5 | 75° ENE | aucun | soleil-couvert | 0.3 | 10°C |
| Nord du Pont d'Arciat | 2 | 5 | 75° ENE | aucun | soleil-couvert | 0.3 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 311° NO | aucun | soleil-couvert | 0.0 | 11°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 360° N | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 4 | 7 | 360° N | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 4 | 7 | 360° N | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 4 | 7 | 360° N | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 105° ESE | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 13° NNE | aucun | soleil-couvert | 0.4 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 193° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 180° S | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 180° S | aucun | couvert | 0.1 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 188° S | aucun | couvert | 0.2 | 13°C |
| Cruas - Nuclear Spot | 3 | 13 | 196° SSO | aucun | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 174° S | aucun | couvert | 0.1 | 12°C |
| Nord du Pont de Chavanay | 8 | 17 | 174° S | aucun | couvert | 0.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 15 | 176° S | aucun | soleil-couvert | 0.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 169° S | aucun | couvert | 0.1 | 12°C |
| Saint-Romain-des-Iles | 3 | 8 | 154° SSE | aucun | couvert | 0.3 | 10°C |
| Nord du Pont d'Arciat | 3 | 8 | 154° SSE | aucun | couvert | 0.3 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 163° SSE | aucun | couvert | 0.1 | 10°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 6° N | aucun | pluie | 18.9 | 9°C |
| Plage d'Excenevex | 5 | 9 | 6° N | aucun | pluie | 18.9 | 9°C |
| Plage du Vengeron | 5 | 9 | 6° N | aucun | pluie | 18.9 | 9°C |
| Plage d'Hermance | 5 | 9 | 6° N | aucun | pluie | 18.9 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 112° ESE | aucun | pluie | 20.5 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 355° N | aucun | pluie | 5.3 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 25 | 156° SSE | aucun | pluie | 9.4 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 20 | 172° S | aucun | pluie | 10.7 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 189° S | aucun | pluie | 1.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 206° SSO | aucun | pluie | 1.3 | 14°C |
| Cruas - Nuclear Spot | 8 | 19 | 188° S | aucun | pluie | 4.5 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 182° S | 08h-19h | pluie | 1.2 | 14°C |
| Nord du Pont de Chavanay | 12 | 28 | 182° S | 08h-19h | pluie | 1.2 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 30 | 182° S | 08h-20h | pluie | 1.8 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 172° S | 08h-20h | couvert | 0.9 | 14°C |
| Saint-Romain-des-Iles | 7 | 14 | 186° S | aucun | pluie | 8.1 | 12°C |
| Nord du Pont d'Arciat | 7 | 14 | 186° S | aucun | pluie | 8.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 21 | 184° S | aucun | pluie | 10.2 | 13°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 223° SO | aucun | couvert | 0.6 | 15°C |
| Plage d'Excenevex | 5 | 8 | 211° SSO | aucun | couvert | 0.6 | 14°C |
| Plage du Vengeron | 8 | 11 | 223° SO | aucun | couvert | 0.6 | 15°C |
| Plage d'Hermance | 8 | 11 | 223° SO | aucun | couvert | 0.6 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 135° SE | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 285° ONO | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 23 | 172° S | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 166° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 199° SSO | aucun | couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 195° SSO | 08h-20h | couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 7 | 18 | 215° SO | aucun | soleil-couvert | 0.7 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 31 | 184° S | 08h-20h | couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 14 | 31 | 184° S | 08h-20h | couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 31 | 181° S | 08h-20h | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 15 | 32 | 180° S | 08h-20h | couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 7 | 13 | 169° S | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 7 | 13 | 169° S | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 189° S | aucun | couvert | 0.0 | 17°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 240° OSO | aucun | pluie | 3.1 | 16°C |
| Plage d'Excenevex | 4 | 7 | 215° SO | aucun | pluie | 1.3 | 16°C |
| Plage du Vengeron | 6 | 10 | 240° OSO | aucun | pluie | 3.1 | 16°C |
| Plage d'Hermance | 6 | 10 | 240° OSO | aucun | pluie | 3.1 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 135° SE | aucun | pluie | 7.4 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 277° O | aucun | pluie | 5.5 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 16 | 161° SSE | aucun | pluie | 9.8 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 15 | 156° SSE | aucun | pluie | 10.4 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 14 | 207° SSO | aucun | pluie | 8.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 205° SSO | aucun | pluie | 6.1 | 16°C |
| Cruas - Nuclear Spot | 2 | 14 | 218° SO | aucun | pluie | 11.9 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 173° S | aucun | pluie | 1.8 | 17°C |
| Nord du Pont de Chavanay | 10 | 24 | 173° S | aucun | pluie | 1.8 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 28 | 170° S | 08h-20h | couvert | 0.6 | 18°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 167° SSE | 08h-17h | pluie | 1.2 | 17°C |
| Saint-Romain-des-Iles | 9 | 18 | 173° S | aucun | couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 9 | 18 | 173° S | aucun | couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 25 | 186° S | aucun | soleil-couvert | 0.6 | 18°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 17 | 198° SSO | aucun | pluie | 18.3 | 12°C |
| Plage d'Excenevex | 13 | 20 | 206° SSO | 17h-20h | pluie | 5.7 | 13°C |
| Plage du Vengeron | 10 | 17 | 198° SSO | aucun | pluie | 18.3 | 12°C |
| Plage d'Hermance | 10 | 17 | 198° SSO | aucun | pluie | 18.3 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 13 | 147° SSE | aucun | pluie | 19.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 15 | 194° SSO | aucun | pluie | 24.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 38° NE | aucun | orage | 26.9 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 14 | 41° NE | aucun | pluie | 22.6 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 17 | 153° SSE | aucun | orage | 21.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 18 | 262° O | aucun | pluie | 15.1 | 14°C |
| Cruas - Nuclear Spot | 2 | 15 | 208° SSO | aucun | pluie | 13.8 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 20 | 184° S | aucun | pluie | 12.2 | 14°C |
| Nord du Pont de Chavanay | 6 | 20 | 184° S | aucun | pluie | 12.2 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 24 | 175° S | aucun | pluie | 11.6 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 23 | 172° S | aucun | pluie | 14.6 | 14°C |
| Saint-Romain-des-Iles | 11 | 18 | 289° ONO | aucun | pluie | 13.1 | 12°C |
| Nord du Pont d'Arciat | 11 | 18 | 289° ONO | aucun | pluie | 13.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 289° ONO | aucun | pluie | 16.4 | 13°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 17° NNE | aucun | pluie | 2.4 | 12°C |
| Plage d'Excenevex | 12 | 17 | 17° NNE | 17h-20h | soleil | 0.0 | 11°C |
| Plage du Vengeron | 10 | 15 | 17° NNE | aucun | pluie | 2.4 | 12°C |
| Plage d'Hermance | 10 | 15 | 17° NNE | aucun | pluie | 2.4 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 5° N | aucun | soleil | 0.6 | 9°C |
| Lac du Bourget - Cap des Séselets | 7 | 18 | 30° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 30 | 354° N | aucun | pluie | 2.4 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 29 | 351° N | aucun | pluie | 1.8 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 37 | 1° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 16 | 32 | 358° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 16 | 34 | 8° N | 09h-20h | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 350° N | 10h-16h | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 12 | 26 | 350° N | 10h-16h | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 349° N | 11h-15h | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 348° NNO | 10h-16h | couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 8 | 17 | 359° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 8 | 17 | 359° N | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 356° N | aucun | soleil-couvert | 0.0 | 12°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 23 | 19° NNE | 08h-15h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 14 | 21 | 23° NNE | 08h-13h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 15 | 23 | 19° NNE | 08h-15h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 15 | 23 | 19° NNE | 08h-15h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 328° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 20° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 193° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 211° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 23 | 10° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 22 | 342° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 8 | 26 | 25° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 11 | 340° NNO | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 1 | 11 | 340° NNO | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 57° ENE | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 90° E | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 3 | 8 | 311° NO | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 3 | 8 | 311° NO | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 144° SE | aucun | couvert | 0.0 | 8°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 31° NNE | 17h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 11 | 16 | 24° NNE | 16h-20h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 12 | 18 | 31° NNE | 17h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 12 | 18 | 31° NNE | 17h-20h | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 335° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 39° NE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 80° E | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 69° ENE | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 5° N | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 331° NNO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 8 | 349° N | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 332° NNO | aucun | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 3 | 7 | 332° NNO | aucun | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 344° NNO | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 35° NE | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 5 | 327° NNO | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 5 | 327° NNO | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 6° N | aucun | couvert | 0.0 | 10°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 19 | 39° NE | aucun | couvert | 0.0 | 5°C |
| Plage d'Excenevex | 10 | 17 | 27° NNE | aucun | couvert | 0.0 | 5°C |
| Plage du Vengeron | 11 | 19 | 39° NE | aucun | couvert | 0.0 | 5°C |
| Plage d'Hermance | 11 | 19 | 39° NE | aucun | couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 329° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 41° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 171° S | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 204° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 8 | 150° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 193° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 3 | 9 | 219° SO | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 108° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 2 | 8 | 108° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 265° O | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 105° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 3 | 9 | 147° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 9 | 147° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 90° E | aucun | soleil-couvert | 0.0 | 9°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 38° NE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Excenevex | 5 | 10 | 54° NE | aucun | couvert | 0.0 |  |
| Plage du Vengeron | 4 | 10 | 38° NE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Hermance | 4 | 10 | 38° NE | aucun | soleil-couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 282° ONO | aucun | soleil-couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 30° NNE | aucun | soleil-couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 180° S | aucun | soleil | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 202° SSO | aucun | soleil | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 181° S | aucun | soleil | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 180° S | aucun | soleil | 0.0 |  |
| Cruas - Nuclear Spot | 5 | 13 | 210° SSO | aucun | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 164° SSE | aucun | soleil | 0.0 |  |
| Nord du Pont de Chavanay | 8 | 17 | 164° SSE | aucun | soleil | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 172° S | aucun | soleil | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 169° S | aucun | soleil | 0.0 |  |
| Saint-Romain-des-Iles | 4 | 10 | 172° S | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont d'Arciat | 4 | 10 | 172° S | aucun | soleil-couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 167° SSE | aucun | soleil | 0.0 |  |
