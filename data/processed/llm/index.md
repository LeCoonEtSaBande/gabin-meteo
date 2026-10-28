# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 28/10/2026 07:34 (Europe/Paris)
- Fichiers générés le : 2026-10-28T12:27:37+01:00
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

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 29° NNE | 11h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 16 | 23 | 30° NNE | 15h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 14 | 19 | 36° NE | 15h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 14 | 19 | 35° NE | 16h-20h | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 18 | 336° NNO | 15h-18h | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 355° N | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 6° N | 12h-16h | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 348° NNO | 10h-15h | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 30 | 8° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 355° N | 12h-18h | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 18 | 37 | 13° NNE | 08h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 349° N | 08h-18h | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 12 | 22 | 351° N | 09h-17h | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 347° NNO | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 7° N | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 11 | 17 | 17° NNE | 13h-16h | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 11 | 17 | 18° NNE | 12h-17h | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 20 | 355° N | 10h-17h | soleil | 0.0 | 14°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 27 | 37° NE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 17 | 23 | 20° NNE | 15h-20h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 15 | 21 | 45° NE | 08h-12h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 15 | 21 | 46° NE | 08h-12h | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 346° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 4° N | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 13° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 349° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 18° NNE | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 353° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 22 | 20° NNE | 08h-12h | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 11 | 34° NE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 12 | 45° NE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 6 | 319° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 6 | 10 | 45° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 6 | 10 | 49° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 5 | 352° N | aucun | soleil-couvert | 0.0 | 12°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 17° NNE | 11h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 15 | 20 | 25° NNE | 08h-20h | couvert | 0.0 | 11°C |
| Plage du Vengeron | 11 | 15 | 31° NNE | 16h-20h | couvert | 0.0 | 11°C |
| Plage d'Hermance | 11 | 17 | 49° NE | 10h-14h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 309° NO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 8 | 16 | 53° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 20° NNE | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 346° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 19° NNE | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 326° NO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 6 | 12 | 25° NNE | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 29° NNE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 6 | 12 | 29° NNE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 9° N | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 9° N | aucun | soleil | 0.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 11 | 44° NE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 6 | 11 | 44° NE | aucun | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 9° N | aucun | soleil | 0.0 | 14°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 19 | 31° NNE | 10h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 15 | 20 | 29° NNE | 08h-20h | couvert | 0.0 | 11°C |
| Plage du Vengeron | 12 | 15 | 44° NE | 08h-14h | couvert | 0.0 | 11°C |
| Plage d'Hermance | 11 | 17 | 48° NE | 10h-14h | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 308° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 7 | 16 | 55° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 346° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 360° N | 09h-20h | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 18 | 360° N | 14h-18h | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 13 | 25 | 3° N | 15h-20h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 16° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 9 | 16 | 16° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 9 | 13 | 357° N | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 9 | 13 | 357° N | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 355° N | aucun | soleil | 0.0 | 12°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 27 | 39 | 27° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 28 | 40 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 26 | 37 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 21 | 33 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 12 | 310° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 7 | 19 | 19° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 34° NE | 08h-16h | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 19 | 347° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 35 | 9° N | 08h-20h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 15 | 30 | 6° N | 08h-20h | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 15 | 34 | 24° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 355° N | 09h-20h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 12 | 28 | 355° N | 09h-20h | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 349° N | 09h-20h | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 12 | 29 | 353° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 14 | 25 | 358° N | 08h-19h | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 14 | 25 | 358° N | 08h-19h | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 349° N | 09h-20h | soleil-couvert | 0.0 | 11°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 35 | 36° NE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 21 | 35 | 36° NE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 21 | 35 | 36° NE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 21 | 35 | 36° NE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 333° NNO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 7 | 22 | 28° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 14 | 327° NNO | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 15 | 9° N | aucun | couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 32 | 1° N | 10h-18h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 354° N | 13h-16h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 15 | 34 | 7° N | 08h-20h | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 27 | 340° NNO | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 11 | 27 | 340° NNO | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 346° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 337° NNO | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 14 | 25 | 3° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 14 | 25 | 3° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 27 | 360° N | aucun | soleil-couvert | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 25 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 15 | 25 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 15 | 25 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 15 | 25 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 337° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 10 | 27 | 23° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 343° NNO | aucun | couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 18° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 34 | 6° N | 08h-20h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 358° N | 08h-18h | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 17 | 38 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 27 | 359° N | 08h-15h | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 11 | 27 | 359° N | 08h-15h | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 25 | 346° NNO | 08h-17h | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 11 | 27 | 356° N | 08h-16h | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 15 | 26 | 3° N | 08h-20h | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 15 | 26 | 3° N | 08h-20h | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 28 | 354° N | 08h-20h | soleil-couvert | 0.0 | 10°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 14° NNE | 14h-20h | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 13 | 18 | 17° NNE | 14h-20h | soleil | 0.0 | 9°C |
| Plage du Vengeron | 15 | 20 | 14° NNE | 14h-20h | soleil | 0.0 | 8°C |
| Plage d'Hermance | 15 | 20 | 14° NNE | 14h-20h | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 15 | 337° NNO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 43° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 15° NNE | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 15° NNE | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 8° N | 10h-15h | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 360° N | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 11 | 25 | 21° NNE | 08h-20h | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 355° N | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 6 | 16 | 355° N | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 14 | 338° NNO | aucun | soleil | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 341° NNO | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 6 | 13 | 14° NNE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 13 | 14° NNE | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 15 | 320° NO | aucun | soleil-couvert | 0.0 | 9°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 16° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 9 | 16 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 13 | 16° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 9 | 13 | 16° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 331° NNO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 29° NNE | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 21° NNE | aucun | soleil | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 6° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 347° NNO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 7 | 17 | 34° NE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 19° NNE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 4 | 12 | 19° NNE | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 298° ONO | aucun | soleil | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 11° N | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 8 | 296° ONO | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 8 | 296° ONO | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 333° NNO | aucun | soleil | 0.0 | 8°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 30° NNE | 17h-20h | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 11 | 17 | 24° NNE | 16h-20h | soleil | 0.0 | 7°C |
| Plage du Vengeron | 12 | 17 | 30° NNE | 17h-20h | soleil | 0.0 | 6°C |
| Plage d'Hermance | 12 | 17 | 30° NNE | 17h-20h | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 324° NO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 27° NNE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 23° NNE | aucun | soleil | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 20° NNE | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 358° N | aucun | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 343° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 8 | 19 | 24° NNE | aucun | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 12° NNE | aucun | soleil | 0.0 | 7°C |
| Nord du Pont de Chavanay | 5 | 14 | 12° NNE | aucun | soleil | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 303° ONO | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 4° N | aucun | soleil | 0.0 | 7°C |
| Saint-Romain-des-Iles | 5 | 12 | 329° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 5 | 12 | 329° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 308° NO | aucun | soleil-couvert | 0.0 | 6°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 19° NNE | 16h-20h | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 12 | 18 | 14° NNE | 16h-20h | soleil | 0.0 | 6°C |
| Plage du Vengeron | 13 | 19 | 19° NNE | 16h-20h | soleil | 0.0 | 6°C |
| Plage d'Hermance | 13 | 19 | 19° NNE | 16h-20h | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 338° NNO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 30° NNE | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 23° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 348° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 9 | 20 | 15° NNE | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 12° NNE | aucun | soleil | 0.0 | 6°C |
| Nord du Pont de Chavanay | 5 | 14 | 12° NNE | aucun | soleil | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 336° NNO | aucun | soleil | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 357° N | aucun | soleil | 0.0 | 5°C |
| Saint-Romain-des-Iles | 3 | 10 | 283° ONO | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 3 | 10 | 283° ONO | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 315° NO | aucun | soleil-couvert | 0.0 | 5°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 19 | 35° NE | aucun | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 7 | 17 | 22° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 7 | 19 | 35° NE | aucun | soleil | 0.0 | 6°C |
| Plage d'Hermance | 7 | 19 | 35° NE | aucun | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 308° NO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 30° NNE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 176° S | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 209° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 15 | 357° N | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 339° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 6 | 18 | 24° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 335° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 2 | 8 | 335° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 53° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 25° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 7 | 130° SE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 2 | 7 | 130° SE | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 356° N | aucun | soleil-couvert | 0.0 | 5°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 5 | 7 | 12° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 5 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 5 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 287° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 16° NNE | aucun | couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 11° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 23° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 358° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 338° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 9 | 348° NNO | aucun | couvert | 0.7 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 335° NNO | aucun | couvert | 0.6 | 9°C |
| Nord du Pont de Chavanay | 3 | 8 | 335° NNO | aucun | couvert | 0.6 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 36° NE | aucun | couvert | 0.6 | 7°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 27° NNE | aucun | couvert | 0.6 | 8°C |
| Saint-Romain-des-Iles | 2 | 6 | 69° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 6 | 69° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 340° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 12 | 18 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 14 | 19 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 14 | 19 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 337° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 32° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 180° S | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 182° S | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 357° N | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 339° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 9 | 22 | 34° NE | aucun | pluie | 3.8 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 32° NNE | aucun | pluie | 3.1 | 6°C |
| Nord du Pont de Chavanay | 4 | 10 | 32° NNE | aucun | pluie | 3.1 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 17° NNE | aucun | pluie | 4.8 | 6°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 26° NNE | aucun | pluie | 2.6 | 6°C |
| Saint-Romain-des-Iles | 3 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 3 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 350° N | aucun | soleil-couvert | 0.0 | 6°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 33° NNE | aucun | couvert | 0.0 | 0°C |
| Plage d'Excenevex | 8 | 13 | 19° NNE | aucun | couvert | 0.0 | 0°C |
| Plage du Vengeron | 8 | 13 | 33° NNE | aucun | couvert | 0.0 | 0°C |
| Plage d'Hermance | 8 | 13 | 33° NNE | aucun | couvert | 0.0 | 0°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 350° N | aucun | couvert | 0.0 | 0°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 31° NNE | aucun | couvert | 0.0 | 0°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 167° SSE | aucun | soleil-couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 172° S | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 9° N | aucun | soleil-couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 349° N | aucun | soleil-couvert | 0.0 |  |
| Cruas - Nuclear Spot | 5 | 11 | 24° NNE | aucun | pluie | 2.4 | 0°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 358° N | aucun | soleil-couvert | 0.6 | 0°C |
| Nord du Pont de Chavanay | 2 | 7 | 358° N | aucun | soleil-couvert | 0.6 | 0°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 345° NNO | aucun | soleil-couvert | 0.6 | 0°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 344° NNO | aucun | soleil-couvert | 0.6 | 0°C |
| Saint-Romain-des-Iles | 2 | 8 | 135° SE | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 2 | 8 | 135° SE | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 4 | 315° NO | aucun | soleil-couvert | 0.0 |  |
