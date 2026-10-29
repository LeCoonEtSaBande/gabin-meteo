# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 29/10/2026 22:52 (Europe/Paris)
- Fichiers générés le : 2026-10-29T22:57:09+01:00
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

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 24 | 37° NE | 08h-20h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 16 | 24 | 24° NNE | 08h-20h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 15 | 20 | 40° NE | 08h-18h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 15 | 20 | 39° NE | 08h-19h | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 12 | 312° NO | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 11 | 15 | 356° N | 17h-20h | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 12° NNE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 17 | 353° N | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 1° N | 17h-20h | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 9° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 12 | 24 | 23° NNE | 08h-12h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 14 | 12° NNE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 8 | 12 | 44° NE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 6° N | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 28° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 13 | 39° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 8 | 12 | 38° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 9 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 31° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 14 | 20 | 24° NNE | 08h-20h | couvert | 0.0 | 11°C |
| Plage du Vengeron | 12 | 16 | 37° NE | 08h-19h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 14 | 19 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 321° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 9° N | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 5° N | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 341° NNO | aucun | soleil | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 11° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 353° N | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 8 | 15 | 29° NNE | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 24° NNE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 10 | 33° NNE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 317° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 25° NNE | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 5 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 5 | 9 | 43° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 36° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 18 | 25 | 28° NNE | 08h-20h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 17 | 22 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 15 | 23 | 37° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 303° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 11 | 15 | 7° N | 08h-12h | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 347° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 7° N | 11h-20h | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 16 | 350° N | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 13 | 25 | 18° NNE | 14h-20h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 17° NNE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 15 | 34° NE | aucun | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 6° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 20° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 7 | 11 | 351° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 8 | 10 | 339° NNO | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 350° N | aucun | soleil-couvert | 0.0 | 9°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 28 | 40 | 29° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 27 | 39 | 26° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage du Vengeron | 28 | 40 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 25 | 41 | 34° NE | 08h-20h | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 23 | 351° N | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 9 | 26 | 39° NE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 21 | 29° NNE | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 14 | 26 | 355° N | 09h-17h | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 30 | 16° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 16 | 27 | 357° N | 08h-20h | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 17 | 35 | 8° N | 08h-20h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 26 | 351° N | 08h-20h | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 14 | 26 | 351° N | 08h-20h | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 353° N | 15h-20h | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 12 | 24 | 353° N | 15h-20h | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 17 | 27 | 8° N | 08h-20h | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 17 | 27 | 8° N | 08h-20h | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 28 | 354° N | 14h-20h | soleil | 0.0 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 30 | 37° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 21 | 29 | 34° NE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 19 | 25 | 33° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 17 | 25 | 36° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 308° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 20° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 15° NNE | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 348° NNO | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 28 | 20° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 14 | 23 | 18° NNE | 08h-18h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 17 | 36 | 7° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 21 | 9° N | 14h-17h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 11 | 21 | 9° N | 14h-17h | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 355° N | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 355° N | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 14 | 22 | 11° N | 11h-20h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 14 | 22 | 11° N | 11h-20h | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 16 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 27 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 18 | 24 | 26° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 14 | 18 | 33° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 14 | 21 | 44° NE | 08h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 306° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 35° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 14° NNE | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 349° N | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 8° N | 08h-17h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 5° N | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 13 | 29 | 20° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 6° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 8 | 17 | 6° N | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 3° N | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 359° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 7 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 7 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 37° NE | 08h-11h | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 10 | 16 | 37° NE | 08h-11h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 10 | 16 | 37° NE | 08h-11h | couvert | 0.0 | 7°C |
| Plage d'Hermance | 10 | 16 | 37° NE | 08h-11h | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 347° NNO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 34° NE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 336° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 17° NNE | aucun | couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 8° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 339° NNO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 7 | 15 | 29° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 13° NNE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 4 | 11 | 13° NNE | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 308° NO | aucun | soleil | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 10° N | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 3 | 8 | 328° NNO | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 8 | 328° NNO | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 334° NNO | aucun | soleil | 0.0 | 9°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 24° NNE | aucun | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 8 | 13 | 24° NNE | aucun | couvert | 0.0 | 9°C |
| Plage du Vengeron | 8 | 13 | 24° NNE | aucun | couvert | 0.0 | 9°C |
| Plage d'Hermance | 8 | 13 | 24° NNE | aucun | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 345° NNO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 34° NE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 320° NO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 22° NNE | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 7° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 311° NO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 5 | 11 | 12° NNE | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 334° NNO | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 3 | 8 | 334° NNO | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 334° NNO | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 8 | 133° SE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 8 | 133° SE | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 354° N | aucun | soleil | 0.0 | 9°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 10 | 57° ENE | aucun | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 5 | 10 | 46° NE | aucun | soleil | 0.0 | 9°C |
| Plage du Vengeron | 5 | 10 | 57° ENE | aucun | soleil | 0.0 | 9°C |
| Plage d'Hermance | 5 | 10 | 57° ENE | aucun | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 317° NO | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 32° NNE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 54° NE | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 45° NE | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 12° NNE | aucun | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 8 | 324° NO | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 3 | 8 | 11° N | aucun | soleil-couvert | 0.1 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 346° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 8 | 346° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 27° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 342° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 7 | 123° ESE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 7 | 123° ESE | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 353° N | aucun | soleil-couvert | 0.0 | 9°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 35° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 4 | 10 | 37° NE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 4 | 7 | 35° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 4 | 7 | 35° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 282° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 29° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 347° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 354° N | aucun | pluie | 3.6 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 323° NO | aucun | pluie | 1.8 | 9°C |
| Cruas - Nuclear Spot | 5 | 11 | 355° N | aucun | pluie | 5.4 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 5 | 10° N | aucun | soleil-couvert | 0.6 | 10°C |
| Nord du Pont de Chavanay | 2 | 5 | 10° N | aucun | soleil-couvert | 0.6 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 313° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 348° NNO | aucun | soleil-couvert | 0.6 | 10°C |
| Saint-Romain-des-Iles | 2 | 7 | 327° NNO | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 7 | 327° NNO | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 349° N | aucun | soleil-couvert | 0.0 | 8°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 56° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 5 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 4 | 10 | 56° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 4 | 10 | 56° NE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 281° O | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 23° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 203° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 212° SSO | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 22 | 359° N | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 343° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 9 | 21 | 29° NNE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 33° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 5 | 13 | 33° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 3 | 8 | 66° ENE | aucun | soleil | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 8 | 66° ENE | aucun | soleil | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 5° N | aucun | soleil-couvert | 0.0 | 6°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 32° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 11 | 17 | 25° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 11 | 16 | 32° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 11 | 16 | 32° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 306° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 20° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 24° NNE | aucun | soleil | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 229° SO | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 2° N | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 343° NNO | aucun | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 8 | 20 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 24° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 6 | 15 | 24° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 338° NNO | aucun | couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 12° NNE | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 4 | 10 | 29° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 4 | 10 | 29° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 319° NO | aucun | soleil-couvert | 0.0 | 5°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 16 | 41° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 10 | 16 | 32° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 9 | 16 | 41° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 9 | 16 | 41° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 313° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 32° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 184° S | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 208° SSO | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 14 | 20° NNE | aucun | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 2 | 10 | 356° N | aucun | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 5 | 16 | 32° NNE | aucun | couvert | 0.1 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 346° NNO | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 2 | 7 | 346° NNO | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 293° ONO | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 339° NNO | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 8 | 143° SE | aucun | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 2 | 8 | 143° SE | aucun | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 349° N | aucun | couvert | 0.0 | 5°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 37° NE | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 7 | 13 | 40° NE | aucun | couvert | 0.0 | 7°C |
| Plage du Vengeron | 7 | 12 | 37° NE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 7 | 12 | 37° NE | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 333° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 35° NE | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 209° SSO | aucun | couvert | 0.1 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 190° S | aucun | couvert | 0.2 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 194° SSO | aucun | couvert | 0.7 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 160° SSE | aucun | couvert | 0.7 | 10°C |
| Cruas - Nuclear Spot | 2 | 6 | 245° OSO | aucun | pluie | 2.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 157° SSE | aucun | pluie | 1.2 | 10°C |
| Nord du Pont de Chavanay | 3 | 9 | 157° SSE | aucun | pluie | 1.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 4 | 318° NO | aucun | pluie | 1.7 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 146° SE | aucun | couvert | 0.7 | 9°C |
| Saint-Romain-des-Iles | 3 | 9 | 157° SSE | aucun | couvert | 0.3 | 10°C |
| Nord du Pont d'Arciat | 3 | 9 | 157° SSE | aucun | couvert | 0.3 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 122° ESE | aucun | couvert | 0.4 | 11°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 34° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 6 | 9 | 34° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 7 | 9 | 34° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 7 | 9 | 34° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 329° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 6 | 13 | 31° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 197° SSO | aucun | couvert | 0.7 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 195° SSO | aucun | couvert | 0.7 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 204° SSO | aucun | pluie | 1.9 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 203° SSO | aucun | couvert | 0.7 | 15°C |
| Cruas - Nuclear Spot | 3 | 9 | 252° OSO | aucun | pluie | 2.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 178° S | aucun | couvert | 0.1 | 16°C |
| Nord du Pont de Chavanay | 9 | 21 | 178° S | aucun | couvert | 0.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 147° SSE | aucun | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 167° SSE | aucun | couvert | 0.1 | 16°C |
| Saint-Romain-des-Iles | 6 | 12 | 165° SSE | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 6 | 12 | 165° SSE | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 167° SSE | aucun | couvert | 0.0 | 15°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 42° NE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Excenevex | 4 | 8 | 45° NE | aucun | soleil-couvert | 0.0 |  |
| Plage du Vengeron | 4 | 8 | 42° NE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Hermance | 4 | 8 | 42° NE | aucun | soleil-couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 314° NO | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 34° NE | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 203° SSO | aucun | pluie | 2.4 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 270° O | aucun | pluie | 3.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 11° N | aucun | couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 1 | 5 | 16° NNE | aucun | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 3 | 7 | 25° NNE | aucun | couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 1 | 5 | 101° E | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 1 | 5 | 101° E | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 5 | 192° SSO | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 98° E | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 2 | 5 | 94° E | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 2 | 5 | 94° E | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 98° E | aucun | couvert | 0.0 |  |
