# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 02/11/2026 14:40 (Europe/Paris)
- Fichiers générés le : 2026-11-02T14:43:47+01:00
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

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 31 | 39° NE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 18 | 26 | 30° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 18 | 26 | 37° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 19 | 28 | 38° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 329° NNO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 12 | 17 | 353° N | 14h-20h | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 352° N | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 350° N | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 26 | 20° NNE | 08h-18h | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 11° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 18 | 35 | 17° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 22 | 3° N | 08h-17h | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 11 | 21 | 4° N | 13h-16h | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 331° NNO | aucun | soleil | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 10° N | aucun | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 13 | 22 | 18° NNE | 11h-17h | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 14 | 21 | 11° N | 10h-18h | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 354° N | aucun | soleil | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 30° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 16 | 22 | 25° NNE | 13h-20h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 14 | 19 | 29° NNE | 13h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 16 | 22 | 29° NNE | 08h-20h | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 332° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 12 | 15 | 359° N | 17h-20h | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 8° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 343° NNO | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 13° NNE | 10h-15h | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 347° NNO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 12 | 24 | 24° NNE | 08h-16h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 28° NNE | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 12 | 29° NNE | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 357° N | aucun | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 16° NNE | aucun | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 6 | 12 | 358° N | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 10 | 344° NNO | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 331° NNO | aucun | soleil | 0.0 | 8°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 49° NE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 18 | 24 | 27° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 14 | 18 | 42° NE | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 14 | 21 | 46° NE | 08h-17h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 288° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 11 | 16 | 9° N | 08h-11h | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 3 | 166° SSE | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 323° NO | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 16 | 23° NNE | aucun | pluie | 0.5 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 328° NNO | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 9 | 19 | 22° NNE | aucun | orage | 3.6 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 7 | 15° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 5 | 7 | 15° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 22° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 28° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 5 | 10 | 25° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 348° NNO | aucun | soleil-couvert | 0.0 | 10°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 70° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 11 | 14 | 49° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 7 | 10 | 26° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 8 | 11 | 90° E | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 345° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 50° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 222° SO | aucun | soleil-couvert | 0.2 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 345° NNO | aucun | couvert | 0.1 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 23° NNE | aucun | pluie | 2.1 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 5° N | aucun | pluie | 1.6 | 11°C |
| Cruas - Nuclear Spot | 7 | 14 | 24° NNE | aucun | pluie | 5.3 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 34° NE | aucun | soleil-couvert | 0.7 | 11°C |
| Nord du Pont de Chavanay | 5 | 10 | 34° NE | aucun | soleil-couvert | 0.7 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 360° N | aucun | soleil-couvert | 0.2 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 360° N | aucun | soleil-couvert | 0.2 | 9°C |
| Saint-Romain-des-Iles | 4 | 4 | 219° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 4 | 219° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 3 | 54° NE | aucun | soleil-couvert | 0.0 | 10°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 218° SO | aucun | couvert | 0.5 | 11°C |
| Plage d'Excenevex | 6 | 8 | 233° SO | aucun | couvert | 0.1 | 12°C |
| Plage du Vengeron | 6 | 8 | 203° SSO | aucun | pluie | 1.5 | 12°C |
| Plage d'Hermance | 6 | 9 | 224° SO | aucun | couvert | 0.9 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 345° NNO | aucun | pluie | 3.1 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 55° NE | aucun | pluie | 2.2 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 207° SSO | aucun | pluie | 1.7 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 339° NNO | aucun | pluie | 3.4 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 16° NNE | aucun | pluie | 3.3 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 6° N | aucun | pluie | 2.0 | 12°C |
| Cruas - Nuclear Spot | 5 | 14 | 35° NE | aucun | pluie | 4.5 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 30° NNE | aucun | soleil-couvert | 0.7 | 11°C |
| Nord du Pont de Chavanay | 4 | 8 | 30° NNE | aucun | soleil-couvert | 0.7 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 13° NNE | aucun | couvert | 0.8 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 13° NNE | aucun | pluie | 1.1 | 10°C |
| Saint-Romain-des-Iles | 4 | 7 | 35° NE | aucun | pluie | 1.1 | 9°C |
| Nord du Pont d'Arciat | 4 | 7 | 35° NE | aucun | pluie | 1.1 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 3 | 17° NNE | aucun | pluie | 2.0 | 10°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 326° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 6 | 326° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 4 | 6 | 326° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 4 | 6 | 326° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 117° ESE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 203° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 133° SE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 189° S | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 8° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 6 | 17 | 29° NNE | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 28° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 10 | 28° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 48° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 35° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 9 | 110° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 9 | 110° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 340° NNO | aucun | soleil-couvert | 0.0 | 10°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 14° NNE | aucun | pluie | 5.2 | 11°C |
| Plage d'Excenevex | 7 | 11 | 14° NNE | aucun | pluie | 5.2 | 11°C |
| Plage du Vengeron | 7 | 11 | 14° NNE | aucun | pluie | 5.2 | 11°C |
| Plage d'Hermance | 7 | 11 | 14° NNE | aucun | pluie | 5.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 93° E | aucun | pluie | 2.5 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 5° N | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 19 | 141° SE | aucun | pluie | 6.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 164° SSE | aucun | pluie | 7.6 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 9 | 183° S | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 1 | 8 | 214° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 3 | 9 | 20° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 7 | 122° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 1 | 7 | 122° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 142° SE | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 1 | 8 | 125° SE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 8 | 147° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 8 | 147° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 161° SSE | aucun | couvert | 0.0 | 7°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 31° NNE | aucun | pluie | 6.0 | 11°C |
| Plage d'Excenevex | 6 | 9 | 42° NE | aucun | pluie | 6.0 | 11°C |
| Plage du Vengeron | 6 | 8 | 31° NNE | aucun | pluie | 6.0 | 11°C |
| Plage d'Hermance | 6 | 8 | 31° NNE | aucun | pluie | 6.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 126° SE | aucun | pluie | 11.7 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 20° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 149° SSE | aucun | pluie | 6.3 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 169° S | aucun | pluie | 5.7 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 197° SSO | aucun | couvert | 0.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 200° SSO | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 3 | 8 | 242° OSO | aucun | pluie | 1.2 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 173° S | aucun | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 10 | 22 | 173° S | aucun | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 172° S | 13h-20h | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 169° S | 13h-16h | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 4 | 9 | 184° S | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 9 | 184° S | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 161° SSE | aucun | couvert | 0.0 | 16°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 31° NNE | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 6 | 10 | 41° NE | aucun | soleil-couvert | 0.1 | 12°C |
| Plage du Vengeron | 6 | 10 | 31° NNE | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 6 | 10 | 31° NNE | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 334° NNO | aucun | soleil-couvert | 0.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 21° NNE | aucun | soleil-couvert | 0.1 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 165° SSE | aucun | couvert | 0.1 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 150° SSE | aucun | soleil-couvert | 0.1 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 22 | 201° SSO | aucun | pluie | 0.6 | 17°C |
| La Roche-de-Glun - Base Nautique | 9 | 24 | 200° SSO | aucun | pluie | 0.5 | 16°C |
| Cruas - Nuclear Spot | 8 | 23 | 204° SSO | aucun | pluie | 1.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 187° S | 13h-20h | pluie | 0.6 | 17°C |
| Nord du Pont de Chavanay | 12 | 26 | 187° S | 13h-20h | pluie | 0.6 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 182° S | 12h-20h | couvert | 0.2 | 17°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 178° S | 10h-20h | pluie | 0.5 | 17°C |
| Saint-Romain-des-Iles | 10 | 19 | 168° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 10 | 19 | 168° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 147° SSE | aucun | soleil-couvert | 0.1 | 17°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 12 | 16° NNE | aucun | pluie | 11.2 | 13°C |
| Plage d'Excenevex | 6 | 8 | 8° N | aucun | pluie | 4.0 | 13°C |
| Plage du Vengeron | 5 | 12 | 16° NNE | aucun | pluie | 11.2 | 13°C |
| Plage d'Hermance | 5 | 12 | 16° NNE | aucun | pluie | 11.2 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 109° ESE | aucun | pluie | 8.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 13° NNE | aucun | pluie | 13.6 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 174° S | aucun | pluie | 6.4 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 164° SSE | aucun | pluie | 8.6 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 214° SO | aucun | pluie | 4.9 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 210° SSO | aucun | pluie | 4.7 | 15°C |
| Cruas - Nuclear Spot | 5 | 18 | 228° SO | aucun | orage | 19.7 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 184° S | 08h-15h | pluie | 2.2 | 17°C |
| Nord du Pont de Chavanay | 11 | 25 | 184° S | 08h-15h | pluie | 2.2 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 24 | 163° SSE | aucun | orage | 24.6 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 25 | 170° S | aucun | pluie | 3.4 | 16°C |
| Saint-Romain-des-Iles | 6 | 16 | 168° SSE | aucun | pluie | 9.7 | 15°C |
| Nord du Pont d'Arciat | 6 | 16 | 168° SSE | aucun | pluie | 9.7 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 137° SE | aucun | pluie | 21.2 | 15°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 250° OSO | aucun | pluie | 2.3 | 15°C |
| Plage d'Excenevex | 4 | 6 | 196° SSO | aucun | soleil-couvert | 0.8 | 15°C |
| Plage du Vengeron | 4 | 6 | 250° OSO | aucun | pluie | 2.3 | 15°C |
| Plage d'Hermance | 4 | 6 | 250° OSO | aucun | pluie | 2.3 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 213° SSO | aucun | soleil-couvert | 0.4 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 21° NNE | aucun | pluie | 1.6 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 13 | 153° SSE | aucun | pluie | 3.1 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 12 | 5° N | aucun | pluie | 2.4 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 181° S | aucun | soleil | 0.7 | 17°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 185° S | aucun | soleil-couvert | 0.7 | 17°C |
| Cruas - Nuclear Spot | 5 | 13 | 199° SSO | aucun | soleil-couvert | 0.6 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 150° SSE | aucun | soleil | 0.6 | 16°C |
| Nord du Pont de Chavanay | 3 | 10 | 150° SSE | aucun | soleil | 0.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 148° SSE | aucun | soleil | 0.9 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 145° SE | aucun | soleil | 0.7 | 16°C |
| Saint-Romain-des-Iles | 3 | 8 | 215° SO | aucun | pluie | 1.8 | 16°C |
| Nord du Pont d'Arciat | 3 | 8 | 215° SO | aucun | pluie | 1.8 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 143° SE | aucun | soleil | 0.6 | 16°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 192° SSO | aucun | couvert | 0.6 | 13°C |
| Plage d'Excenevex | 3 | 4 | 23° NNE | aucun | soleil-couvert | 0.6 | 13°C |
| Plage du Vengeron | 3 | 7 | 192° SSO | aucun | couvert | 0.6 | 13°C |
| Plage d'Hermance | 3 | 7 | 192° SSO | aucun | couvert | 0.6 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 328° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 41° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 351° N | aucun | couvert | 0.6 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 21 | 349° N | aucun | couvert | 0.6 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 27 | 6° N | 10h-18h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 360° N | 11h-17h | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 12 | 29 | 12° NNE | 10h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 4° N | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 7 | 16 | 4° N | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 354° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 358° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 12 | 326° NO | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 7 | 12 | 326° NO | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 352° N | aucun | pluie | 1.2 | 15°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 69° ENE | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 5 | 9 | 32° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 10 | 69° ENE | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 6 | 10 | 69° ENE | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 37° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 184° S | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 198° SSO | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 7° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 356° N | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 10 | 26 | 25° NNE | 10h-13h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 12° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 14 | 12° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 3° N | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 8° N | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 4 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 11° N | aucun | couvert | 0.0 | 13°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 8 | 39° NE | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 8 | 58° ENE | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 3 | 8 | 39° NE | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 3 | 8 | 39° NE | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 6 | 300° ONO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 23° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 184° S | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 202° SSO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 178° S | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 191° S | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 2 | 9 | 214° SO | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 159° SSE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 12 | 159° SSE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 198° SSO | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 175° S | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 9 | 159° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 3 | 9 | 159° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 130° SE | aucun | soleil | 0.0 | 13°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 342° NNO | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 2 | 5 | 24° NNE | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 2 | 4 | 342° NNO | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 2 | 4 | 342° NNO | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 287° ONO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 23° NNE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 43° NE | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 49° NE | aucun | soleil | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 9° N | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 330° NNO | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 2 | 7 | 332° NNO | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 330° NNO | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 2 | 7 | 330° NNO | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 21° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 21° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 2 | 6 | 96° E | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 6 | 96° E | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 336° NNO | aucun | soleil | 0.0 | 13°C |
