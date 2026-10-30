# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 30/10/2026 22:36 (Europe/Paris)
- Fichiers générés le : 2026-10-30T22:40:07+01:00
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

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 44° NE | 09h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 14 | 22 | 20° NNE | 08h-20h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 14 | 18 | 43° NE | 08h-18h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 14 | 19 | 42° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 15 | 320° NO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 13 | 18 | 357° N | 15h-20h | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 9° N | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 17 | 341° NNO | aucun | soleil | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 12° NNE | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 338° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 16 | 22° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 12 | 12° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 12 | 25° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 14° NNE | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 10 | 21° NNE | aucun | couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 5 | 8 | 36° NE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 4 | 7 | 41° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 9 | 352° N | aucun | couvert | 0.0 | 10°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 34° NE | 08h-15h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 16 | 24 | 31° NNE | 08h-13h | couvert | 0.0 | 11°C |
| Plage du Vengeron | 14 | 18 | 42° NE | 08h-14h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 14 | 19 | 39° NE | 08h-13h | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 330° NNO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 342° NNO | 08h-11h | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 3° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 345° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 24 | 7° N | 10h-20h | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 338° NNO | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 13 | 26 | 21° NNE | 14h-20h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 28° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 15 | 27° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 4° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 6 | 10 | 34° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 7 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 347° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 28 | 40 | 25° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 28 | 41 | 24° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage du Vengeron | 26 | 38 | 25° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Hermance | 22 | 34 | 36° NE | 08h-20h | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 22 | 351° N | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 17 | 23 | 350° N | 08h-20h | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 17° NNE | 13h-16h | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 15 | 26 | 2° N | 08h-18h | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 32 | 18° NNE | 08h-20h | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 15 | 26 | 1° N | 16h-20h | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 22 | 41 | 24° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 28 | 358° N | 09h-20h | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 14 | 26 | 3° N | 10h-20h | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 345° NNO | 15h-19h | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 345° NNO | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 14 | 24 | 12° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 15 | 23 | 3° N | 08h-20h | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 24 | 353° N | 12h-20h | soleil | 0.0 | 11°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 30 | 38° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 21 | 29 | 34° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 19 | 26 | 35° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 17 | 26 | 38° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 306° NO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 25° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 25° NNE | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 342° NNO | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 29 | 15° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 15 | 25 | 8° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 17 | 36 | 10° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 23 | 1° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 12 | 23 | 1° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 20 | 354° N | 15h-18h | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 11 | 20 | 354° N | 15h-18h | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 15 | 26 | 10° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 15 | 26 | 10° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 22 | 354° N | 14h-20h | couvert | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 33° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 18 | 25 | 25° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 14 | 20 | 28° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 14 | 22 | 40° NE | 08h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 315° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 7 | 18 | 43° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 10° N | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 345° NNO | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 21 | 3° N | 08h-19h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 18 | 2° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 13 | 26 | 16° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 9 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 8° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 7 | 14 | 8° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 9 | 13 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 9 | 13 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 339° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 39° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 18 | 25 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 15 | 20 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 14 | 21 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 288° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 17 | 34° NE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 7° N | aucun | soleil-couvert | 0.1 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 341° NNO | aucun | soleil-couvert | 0.1 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 3° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 350° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 8 | 19 | 30° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 21° NNE | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 13 | 21° NNE | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 357° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 12° NNE | aucun | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 8 | 339° NNO | aucun | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 8 | 339° NNO | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 329° NNO | aucun | soleil-couvert | 0.0 | 10°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 17° NNE | aucun | couvert | 0.4 | 10°C |
| Plage d'Excenevex | 5 | 8 | 17° NNE | aucun | couvert | 0.4 | 10°C |
| Plage du Vengeron | 5 | 8 | 17° NNE | aucun | couvert | 0.4 | 10°C |
| Plage d'Hermance | 5 | 8 | 17° NNE | aucun | couvert | 0.4 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 352° N | aucun | pluie | 1.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 25° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 315° NO | aucun | pluie | 1.9 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 343° NNO | aucun | pluie | 1.5 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 8° N | aucun | pluie | 0.6 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 346° NNO | aucun | couvert | 0.3 | 11°C |
| Cruas - Nuclear Spot | 7 | 15 | 31° NNE | aucun | pluie | 2.4 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 13° NNE | aucun | soleil-couvert | 0.1 | 10°C |
| Nord du Pont de Chavanay | 5 | 12 | 13° NNE | aucun | soleil-couvert | 0.1 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 9° N | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 5° N | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 7 | 312° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 7 | 312° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 2° N | aucun | couvert | 0.0 | 9°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 4° N | aucun | couvert | 0.3 | 11°C |
| Plage d'Excenevex | 3 | 5 | 4° N | aucun | couvert | 0.3 | 11°C |
| Plage du Vengeron | 3 | 5 | 4° N | aucun | couvert | 0.3 | 11°C |
| Plage d'Hermance | 3 | 5 | 4° N | aucun | couvert | 0.3 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 342° NNO | aucun | couvert | 0.3 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 32° NNE | aucun | pluie | 1.7 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 4 | 131° SE | aucun | couvert | 0.3 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 30° NNE | aucun | couvert | 0.3 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 357° N | aucun | pluie | 1.1 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 13° NNE | aucun | soleil-couvert | 0.1 | 11°C |
| Cruas - Nuclear Spot | 4 | 16 | 21° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 21° NNE | aucun | soleil-couvert | 0.6 | 11°C |
| Nord du Pont de Chavanay | 2 | 8 | 21° NNE | aucun | soleil-couvert | 0.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 341° NNO | aucun | pluie | 1.3 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 41° NE | aucun | soleil-couvert | 0.6 | 10°C |
| Saint-Romain-des-Iles | 2 | 5 | 152° SSE | aucun | pluie | 1.8 | 6°C |
| Nord du Pont d'Arciat | 2 | 5 | 152° SSE | aucun | pluie | 1.8 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 247° OSO | aucun | pluie | 1.8 | 8°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 6 | 10 | 14° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 7 | 10 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Plage d'Hermance | 7 | 10 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 318° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 26° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 339° NNO | aucun | soleil-couvert | 0.1 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 329° NNO | aucun | pluie | 0.6 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 360° N | aucun | pluie | 1.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 2 | 9 | 341° NNO | aucun | pluie | 1.5 | 12°C |
| Cruas - Nuclear Spot | 3 | 7 | 334° NNO | aucun | pluie | 6.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 4 | 347° NNO | aucun | couvert | 0.3 | 12°C |
| Nord du Pont de Chavanay | 2 | 4 | 347° NNO | aucun | couvert | 0.3 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 7° N | aucun | soleil-couvert | 0.1 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 35° NE | aucun | soleil-couvert | 0.2 | 12°C |
| Saint-Romain-des-Iles | 2 | 7 | 95° E | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 2 | 7 | 95° E | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 19° NNE | aucun | soleil-couvert | 0.6 | 11°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 9 | 32° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 3 | 5 | 315° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 3 | 9 | 32° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 3 | 9 | 32° NNE | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 278° O | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 6° N | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 207° SSO | aucun | pluie | 6.1 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 212° SSO | aucun | pluie | 8.5 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 356° N | aucun | pluie | 4.2 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 338° NNO | aucun | pluie | 4.2 | 12°C |
| Cruas - Nuclear Spot | 6 | 15 | 6° N | aucun | pluie | 1.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 7 | 39° NE | aucun | pluie | 1.8 | 11°C |
| Nord du Pont de Chavanay | 1 | 7 | 39° NE | aucun | pluie | 1.8 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 30° NNE | aucun | pluie | 1.2 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 49° NE | aucun | pluie | 1.2 | 11°C |
| Saint-Romain-des-Iles | 3 | 7 | 143° SE | aucun | soleil-couvert | 0.6 | 10°C |
| Nord du Pont d'Arciat | 3 | 7 | 143° SE | aucun | soleil-couvert | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 118° ESE | aucun | pluie | 3.0 | 11°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 4° N | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 3 | 6 | 38° NE | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 3 | 7 | 4° N | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 3 | 7 | 4° N | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 59° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 16° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 185° S | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 185° S | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 194° SSO | aucun | couvert | 0.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 195° SSO | aucun | couvert | 0.6 | 13°C |
| Cruas - Nuclear Spot | 6 | 17 | 197° SSO | aucun | couvert | 0.6 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 27 | 172° S | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 10 | 27 | 172° S | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 171° S | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 27 | 168° SSE | 13h-17h | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 16 | 163° SSE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 8 | 16 | 163° SSE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 174° S | aucun | soleil-couvert | 0.0 | 14°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 340° NNO | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 4 | 8 | 25° NNE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 4 | 7 | 340° NNO | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 4 | 7 | 340° NNO | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 79° E | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 14° NNE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 27 | 165° SSE | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 25 | 161° SSE | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 26 | 201° SSO | 12h-20h | couvert | 0.3 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 202° SSO | 11h-19h | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 11 | 26 | 180° S | 17h-20h | couvert | 0.7 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 34 | 185° S | 08h-20h | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 14 | 34 | 185° S | 08h-20h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 32 | 173° S | 08h-20h | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 15 | 34 | 175° S | 08h-20h | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 14 | 26 | 172° S | 10h-20h | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 14 | 26 | 172° S | 10h-20h | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 185° S | aucun | couvert | 0.0 | 16°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 253° OSO | aucun | soleil-couvert | 0.1 | 15°C |
| Plage d'Excenevex | 3 | 6 | 162° SSE | aucun | soleil-couvert | 0.1 | 15°C |
| Plage du Vengeron | 3 | 6 | 253° OSO | aucun | soleil-couvert | 0.1 | 15°C |
| Plage d'Hermance | 3 | 6 | 253° OSO | aucun | soleil-couvert | 0.1 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 225° SO | aucun | pluie | 3.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 263° O | aucun | pluie | 0.5 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 19 | 164° SSE | aucun | pluie | 5.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 160° SSE | aucun | pluie | 7.6 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 209° SSO | aucun | pluie | 4.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 209° SSO | 08h-13h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 6 | 21 | 227° SO | aucun | pluie | 7.8 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 33 | 185° S | 08h-14h | pluie | 1.6 | 14°C |
| Nord du Pont de Chavanay | 12 | 33 | 185° S | 08h-14h | pluie | 1.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 33 | 182° S | 08h-18h | pluie | 6.4 | 14°C |
| Saint-Cyr-sur-le-Rhône | 14 | 35 | 177° S | 08h-16h | pluie | 3.3 | 14°C |
| Saint-Romain-des-Iles | 13 | 26 | 175° S | 08h-15h | pluie | 1.4 | 15°C |
| Nord du Pont d'Arciat | 13 | 26 | 175° S | 08h-15h | pluie | 1.4 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 180° S | aucun | pluie | 6.8 | 15°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 25° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 7 | 10 | 21° NNE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 9 | 12 | 25° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 9 | 12 | 25° NNE | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 331° NNO | aucun | couvert | 0.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 34° NE | aucun | pluie | 1.2 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 351° N | aucun | couvert | 0.1 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 354° N | aucun | couvert | 0.1 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 359° N | aucun | pluie | 1.8 | 14°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 348° NNO | aucun | pluie | 1.2 | 13°C |
| Cruas - Nuclear Spot | 4 | 10 | 9° N | aucun | pluie | 4.9 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 13° NNE | aucun | pluie | 4.2 | 13°C |
| Nord du Pont de Chavanay | 2 | 6 | 13° NNE | aucun | pluie | 4.2 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 327° NNO | aucun | pluie | 6.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 356° N | aucun | pluie | 4.8 | 13°C |
| Saint-Romain-des-Iles | 4 | 9 | 360° N | aucun | pluie | 1.8 | 12°C |
| Nord du Pont d'Arciat | 4 | 9 | 360° N | aucun | pluie | 1.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 331° NNO | aucun | pluie | 3.0 | 12°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 24° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 7 | 12 | 9° N | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 8 | 14 | 24° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 8 | 14 | 24° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 323° NO | aucun | soleil | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 21° NNE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 19 | 190° S | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 20 | 190° S | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 20 | 179° S | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 7 | 18 | 187° S | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 4 | 11 | 189° S | aucun | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 178° S | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 7 | 18 | 178° S | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 181° S | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 174° S | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 4 | 8 | 155° SSE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 4 | 8 | 155° SSE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 135° SE | aucun | soleil-couvert | 0.0 | 13°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 11 | 35° NE | aucun | pluie | 4.8 |  |
| Plage d'Excenevex | 6 | 11 | 21° NNE | aucun | pluie | 3.6 |  |
| Plage du Vengeron | 5 | 11 | 35° NE | aucun | pluie | 4.8 |  |
| Plage d'Hermance | 5 | 11 | 35° NE | aucun | pluie | 4.8 |  |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 48° NE | aucun | pluie | 6.6 |  |
| Lac du Bourget - Cap des Séselets | 3 | 16 | 22° NNE | aucun | pluie | 7.2 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 22 | 166° SSE | aucun | pluie | 4.2 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 21 | 158° SSE | aucun | pluie | 6.6 |  |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 222° SO | aucun | orage | 31.2 |  |
| La Roche-de-Glun - Base Nautique | 7 | 20 | 203° SSO | aucun | orage | 32.4 |  |
| Cruas - Nuclear Spot | 9 | 24 | 210° SSO | aucun | orage | 27.0 |  |
| Centrale de Saint-Alban-du-Rhône | 8 | 22 | 159° SSE | aucun | pluie | 17.4 |  |
| Nord du Pont de Chavanay | 8 | 22 | 159° SSE | aucun | pluie | 17.4 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 16 | 166° SSE | aucun | pluie | 12.0 |  |
| Saint-Cyr-sur-le-Rhône | 8 | 24 | 154° SSE | aucun | pluie | 14.4 |  |
| Saint-Romain-des-Iles | 4 | 10 | 161° SSE | aucun | pluie | 12.6 |  |
| Nord du Pont d'Arciat | 4 | 10 | 161° SSE | aucun | pluie | 12.6 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 15 | 91° E | aucun | pluie | 13.8 |  |
