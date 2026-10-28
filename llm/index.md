# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 28/10/2026 20:21 (Europe/Paris)
- Fichiers générés le : 2026-10-28T22:45:50+01:00
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
| Plage de la pointe - Messery | 17 | 22 | 48° NE | 11h-20h | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 16 | 23 | 34° NE | 11h-20h | couvert | 0.0 | 14°C |
| Plage du Vengeron | 15 | 20 | 38° NE | 12h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 15 | 20 | 35° NE | 11h-20h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 16 | 21 | 338° NNO | 14h-19h | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 12 | 15 | 355° N | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 360° N | 10h-19h | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 351° N | 10h-13h | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 31 | 12° NNE | 08h-20h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 2° N | 12h-17h | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 19 | 36 | 18° NNE | 08h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 349° N | 08h-18h | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 12 | 21 | 360° N | 09h-17h | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 339° NNO | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 358° N | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 13 | 21 | 21° NNE | 13h-16h | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 13 | 20 | 21° NNE | 12h-17h | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 20 | 350° N | 10h-17h | soleil | 0.0 | 14°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 38° NE | 08h-20h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 17 | 25 | 32° NNE | 08h-14h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 16 | 21 | 46° NE | 08h-12h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 16 | 22 | 45° NE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 309° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 14° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 15° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 345° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 18 | 13° NNE | 09h-13h | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 350° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 22 | 22° NNE | 08h-15h | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 28° NNE | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 8 | 15 | 40° NE | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 343° NNO | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 52° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 6 | 10 | 48° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 6 | 9 | 339° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 7 | 349° N | aucun | soleil-couvert | 0.0 | 13°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 24° NNE | 11h-20h | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 16 | 21 | 23° NNE | 08h-20h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 12 | 15 | 47° NE | 08h-20h | couvert | 0.0 | 11°C |
| Plage d'Hermance | 11 | 17 | 32° NNE | 08h-20h | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 309° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 10° N | 10h-14h | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 20° NNE | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 349° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 15° NNE | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 324° NO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 15 | 23° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 31° NNE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 8 | 24° NNE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 315° NO | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 35° NE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 5 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 5 | 9 | 35° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 2° N | aucun | soleil | 0.0 | 13°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 24 | 41° NE | 09h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 19 | 25 | 34° NE | 08h-20h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 14 | 18 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 14 | 20 | 43° NE | 15h-20h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 302° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 8 | 18 | 52° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 17° NNE | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 343° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 18 | 354° N | 15h-20h | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 15 | 355° N | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 9 | 17 | 9° N | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 14 | 19° NNE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 7 | 14 | 19° NNE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 6° N | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 11 | 6° N | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 12 | 38° NE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 6 | 12 | 38° NE | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 360° N | aucun | soleil | 0.0 | 13°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 26 | 37 | 28° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 27 | 39 | 26° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage du Vengeron | 24 | 33 | 28° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Hermance | 23 | 35 | 31° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 13 | 294° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 20 | 26° NNE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 24° NNE | 08h-15h | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 24 | 350° N | 13h-19h | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 29 | 12° NNE | 08h-20h | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 15 | 26 | 9° N | 08h-19h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 17 | 34 | 10° N | 08h-20h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 22 | 21° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 12 | 22 | 21° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 336° NNO | aucun | soleil | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 333° NNO | aucun | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 16 | 25 | 2° N | 14h-20h | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 16 | 25 | 2° N | 14h-20h | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 350° N | aucun | soleil | 0.0 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 30 | 44° NE | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 22 | 31 | 32° NNE | 08h-19h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 20 | 27 | 37° NE | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 18 | 28 | 38° NE | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 310° NO | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 9 | 22 | 22° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 12° NNE | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 349° N | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 31 | 9° N | 08h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 1° N | 08h-20h | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 16 | 35 | 20° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 350° N | 08h-13h | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 12 | 26 | 350° N | 08h-13h | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 348° NNO | 09h-12h | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 347° NNO | 09h-13h | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 12 | 24 | 8° N | 08h-18h | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 12 | 24 | 8° N | 08h-18h | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 349° N | aucun | soleil | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 23 | 35° NE | 08h-20h | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 14 | 23 | 35° NE | 08h-20h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 14 | 23 | 35° NE | 08h-20h | couvert | 0.0 | 7°C |
| Plage d'Hermance | 14 | 23 | 35° NE | 08h-20h | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 341° NNO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 7 | 17 | 23° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 333° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 12 | 11° N | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 9° N | 08h-18h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 358° N | 08h-14h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 16 | 36 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 356° N | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 10 | 23 | 356° N | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 353° N | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 11 | 23 | 356° N | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 14 | 27 | 27° NNE | 08h-18h | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 14 | 27 | 27° NNE | 08h-18h | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 355° N | aucun | soleil | 0.0 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 36° NE | 08h-17h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 11 | 17 | 36° NE | 08h-17h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 11 | 17 | 36° NE | 08h-17h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 11 | 17 | 36° NE | 08h-17h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 348° NNO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 311° NO | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 29° NNE | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 3° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 347° NNO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 9 | 22 | 26° NNE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 21° NNE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 5 | 13 | 21° NNE | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 18° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 14° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 9 | 324° NO | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 3 | 9 | 324° NO | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 349° N | aucun | soleil | 0.0 | 8°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 8 | 13 | 34° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 8 | 12 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 8 | 12 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 321° NO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 38° NE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 42° NE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 23° NNE | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 16° NNE | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 307° NO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 4 | 10 | 9° N | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 333° NNO | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 2 | 8 | 333° NNO | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 23° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 19° NNE | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 7 | 108° ESE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 7 | 108° ESE | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 358° N | aucun | soleil | 0.0 | 8°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 13 | 38° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 8 | 13 | 32° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 7 | 13 | 38° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 7 | 13 | 38° NE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 308° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 30° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 48° NE | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 40° NE | aucun | soleil | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 7 | 10° N | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 344° NNO | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 2 | 8 | 5° N | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 7 | 95° E | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 1 | 7 | 95° E | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 8 | 152° SSE | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 113° ESE | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 9 | 153° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 4 | 9 | 153° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 158° SSE | aucun | soleil-couvert | 0.0 | 8°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 32° NNE | aucun | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 4 | 10 | 41° NE | aucun | soleil | 0.0 | 9°C |
| Plage du Vengeron | 4 | 8 | 32° NNE | aucun | soleil | 0.0 | 9°C |
| Plage d'Hermance | 4 | 8 | 32° NNE | aucun | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 281° O | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 8° N | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 153° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 209° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 180° S | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 179° S | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 5 | 13 | 194° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 164° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 19 | 164° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 174° S | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 168° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 12 | 171° S | aucun | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 12 | 171° S | aucun | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 167° SSE | aucun | soleil | 0.0 | 13°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 235° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 5 | 214° SO | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 6 | 8 | 235° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 6 | 8 | 235° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 234° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 252° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 200° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 205° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 198° SSO | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 198° SSO | 11h-16h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 5 | 14 | 212° SSO | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 174° S | 11h-17h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 12 | 27 | 174° S | 11h-17h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 168° SSE | 11h-17h | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 169° S | 11h-18h | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 13 | 169° S | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 7 | 13 | 169° S | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 169° S | 12h-15h | couvert | 0.0 | 14°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 256° OSO | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 4 | 6 | 42° NE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 4 | 10 | 256° OSO | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 4 | 10 | 256° OSO | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 116° ESE | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 21° NNE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 194° SSO | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 192° SSO | aucun | couvert | 0.1 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 30 | 183° S | 14h-20h | couvert | 0.1 | 15°C |
| La Roche-de-Glun - Base Nautique | 13 | 29 | 185° S | 10h-20h | pluie | 0.5 | 15°C |
| Cruas - Nuclear Spot | 10 | 24 | 176° S | 13h-16h | couvert | 0.1 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 32 | 177° S | 08h-20h | couvert | 0.3 | 14°C |
| Nord du Pont de Chavanay | 15 | 32 | 177° S | 08h-20h | couvert | 0.3 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 33 | 180° S | 08h-20h | couvert | 0.2 | 15°C |
| Saint-Cyr-sur-le-Rhône | 16 | 35 | 176° S | 08h-20h | couvert | 0.3 | 14°C |
| Saint-Romain-des-Iles | 13 | 24 | 170° S | 10h-20h | couvert | 0.1 | 15°C |
| Nord du Pont d'Arciat | 13 | 24 | 170° S | 10h-20h | couvert | 0.1 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 180° S | 12h-19h | couvert | 0.0 | 15°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 57° ENE | aucun | pluie | 2.9 | 15°C |
| Plage d'Excenevex | 4 | 7 | 40° NE | aucun | pluie | 1.9 | 14°C |
| Plage du Vengeron | 3 | 5 | 57° ENE | aucun | pluie | 2.9 | 15°C |
| Plage d'Hermance | 3 | 5 | 57° ENE | aucun | pluie | 2.9 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 281° O | aucun | pluie | 5.8 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 58° ENE | aucun | pluie | 6.7 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 21 | 170° S | aucun | pluie | 3.4 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 19 | 160° SSE | aucun | pluie | 3.7 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 205° SSO | aucun | pluie | 5.2 | 16°C |
| La Roche-de-Glun - Base Nautique | 9 | 23 | 204° SSO | aucun | pluie | 3.5 | 16°C |
| Cruas - Nuclear Spot | 8 | 22 | 199° SSO | aucun | orage | 15.9 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 188° S | 09h-20h | pluie | 3.6 | 16°C |
| Nord du Pont de Chavanay | 12 | 27 | 188° S | 09h-20h | pluie | 3.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 27 | 172° S | 08h-20h | pluie | 3.7 | 16°C |
| Saint-Cyr-sur-le-Rhône | 14 | 29 | 179° S | 08h-20h | pluie | 4.2 | 16°C |
| Saint-Romain-des-Iles | 12 | 21 | 172° S | 11h-18h | pluie | 2.0 | 16°C |
| Nord du Pont d'Arciat | 12 | 21 | 172° S | 11h-18h | pluie | 2.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 168° SSE | aucun | pluie | 7.3 | 17°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 211° SSO | aucun | pluie | 7.8 | 13°C |
| Plage d'Excenevex | 7 | 10 | 223° SO | aucun | pluie | 3.7 | 14°C |
| Plage du Vengeron | 6 | 9 | 211° SSO | aucun | pluie | 7.8 | 13°C |
| Plage d'Hermance | 6 | 9 | 211° SSO | aucun | pluie | 7.8 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 213° SSO | aucun | pluie | 5.6 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 341° NNO | aucun | orage | 20.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 13 | 193° SSO | aucun | pluie | 6.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 198° SSO | aucun | pluie | 4.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 175° S | aucun | couvert | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 183° S | aucun | soleil-couvert | 0.6 | 16°C |
| Cruas - Nuclear Spot | 4 | 9 | 219° SO | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 17 | 181° S | aucun | pluie | 2.4 | 16°C |
| Nord du Pont de Chavanay | 6 | 17 | 181° S | aucun | pluie | 2.4 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 24 | 195° SSO | aucun | soleil-couvert | 0.6 | 17°C |
| Saint-Cyr-sur-le-Rhône | 5 | 20 | 174° S | aucun | pluie | 2.4 | 15°C |
| Saint-Romain-des-Iles | 3 | 12 | 192° SSO | aucun | pluie | 1.9 | 16°C |
| Nord du Pont d'Arciat | 3 | 12 | 192° SSO | aucun | pluie | 1.9 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 79° E | aucun | pluie | 1.3 | 16°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 173° S | aucun | soleil-couvert | 0.0 |  |
| Plage d'Excenevex | 2 | 4 | 140° SE | aucun | soleil-couvert | 0.0 |  |
| Plage du Vengeron | 2 | 4 | 173° S | aucun | soleil-couvert | 0.0 |  |
| Plage d'Hermance | 2 | 4 | 173° S | aucun | soleil-couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 234° SO | aucun | soleil | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 245° OSO | aucun | soleil | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 158° SSE | aucun | soleil-couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 164° SSE | aucun | soleil-couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 199° SSO | aucun | soleil-couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 188° S | aucun | soleil-couvert | 0.0 |  |
| Cruas - Nuclear Spot | 3 | 9 | 188° S | aucun | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 173° S | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont de Chavanay | 4 | 11 | 173° S | aucun | soleil-couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 162° SSE | aucun | soleil-couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 173° S | aucun | soleil-couvert | 0.0 |  |
| Saint-Romain-des-Iles | 5 | 10 | 168° SSE | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont d'Arciat | 5 | 10 | 168° SSE | aucun | soleil-couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 165° SSE | aucun | couvert | 0.0 |  |
