# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 31/10/2026 11:59 (Europe/Paris)
- Fichiers générés le : 2026-10-31T12:03:50+01:00
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

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 14 | 21 | 18° NNE | 08h-14h | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 13 | 17 | 35° NE | 08h-13h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 14 | 19 | 36° NE | 08h-15h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 329° NNO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 1° N | 08h-11h | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 7° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 347° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 21 | 360° N | 09h-20h | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 348° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 12 | 23 | 21° NNE | 10h-20h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 14 | 24° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 14 | 25° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 5° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 21° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 6 | 12 | 20° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 7 | 12 | 18° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 352° N | aucun | soleil-couvert | 0.0 | 9°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 29 | 42 | 30° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 27 | 40 | 27° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage du Vengeron | 27 | 40 | 27° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Hermance | 28 | 41 | 31° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 26 | 36 | 339° NNO | 10h-18h | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 18 | 25 | 350° N | 08h-20h | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 31 | 356° N | 08h-19h | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 18 | 31 | 356° N | 08h-19h | soleil | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 32 | 22° NNE | 08h-20h | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 351° N | 15h-20h | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 19 | 38 | 12° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 17 | 29 | 360° N | 08h-20h | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 15 | 27 | 1° N | 11h-20h | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 344° NNO | 14h-20h | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 7° N | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 14 | 24 | 10° N | 10h-20h | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 16 | 24 | 7° N | 09h-20h | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 25 | 355° N | 12h-20h | soleil | 0.0 | 11°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 30 | 40° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 22 | 30 | 36° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 20 | 27 | 32° NNE | 08h-20h | couvert | 0.0 | 10°C |
| Plage d'Hermance | 17 | 26 | 39° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 307° NO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 18° NNE | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 343° NNO | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 29 | 14° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 14 | 24 | 13° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 19 | 38 | 7° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 21 | 346° NNO | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 11 | 21 | 346° NNO | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 352° N | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 10 | 19 | 352° N | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 14 | 24 | 16° NNE | 09h-20h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 14 | 24 | 16° NNE | 09h-20h | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 19 | 352° N | 16h-20h | couvert | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 32° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 18 | 25 | 26° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 14 | 20 | 41° NE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 14 | 22 | 42° NE | 08h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 316° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 7 | 17 | 40° NE | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 345° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 348° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 7° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 10 | 18 | 6° N | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 12 | 26 | 15° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 17 | 16° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 9 | 17 | 16° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 5° N | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 5° N | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 9 | 16 | 356° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 9 | 16 | 356° N | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 339° NNO | aucun | couvert | 0.0 | 8°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 54° NE | 09h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 17 | 24 | 31° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 13 | 17 | 43° NE | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 13 | 19 | 48° NE | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 288° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 8 | 18 | 50° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 348° NNO | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 21° NNE | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 12 | 2° N | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 8 | 14 | 21° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 17° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 4 | 8 | 17° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 8 | 47° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 8 | 47° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 343° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 21° NNE | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 5 | 8 | 21° NNE | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 5 | 8 | 21° NNE | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 5 | 8 | 21° NNE | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 313° NO | aucun | couvert | 0.6 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 24° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 317° NO | aucun | pluie | 4.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 28° NNE | aucun | pluie | 3.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 12° NNE | aucun | couvert | 0.3 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 6° N | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 6 | 14 | 18° NNE | aucun | couvert | 0.5 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 3 | 8 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 2 | 4 | 300° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 2 | 4 | 300° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 337° NNO | aucun | soleil-couvert | 0.0 | 11°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 18° NNE | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 5 | 18° NNE | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 5 | 18° NNE | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 3 | 5 | 18° NNE | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 302° ONO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 32° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 323° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 15° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 6 | 35° NE | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 133° SE | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 3 | 7 | 351° N | aucun | pluie | 1.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 351° N | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 7 | 351° N | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 67° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 339° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 2 | 7 | 113° ESE | aucun | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 2 | 7 | 113° ESE | aucun | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 4° N | aucun | soleil-couvert | 0.0 | 12°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 8° N | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 4 | 7 | 8° N | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 4 | 7 | 8° N | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 7 | 8° N | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 102° ESE | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 180° S | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 185° S | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 6 | 166° SSE | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 172° S | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 2 | 7 | 358° N | aucun | couvert | 0.7 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 185° S | aucun | pluie | 0.8 | 11°C |
| Nord du Pont de Chavanay | 2 | 7 | 185° S | aucun | pluie | 0.8 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 59° ENE | aucun | pluie | 1.1 | 10°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 200° SSO | aucun | pluie | 1.1 | 11°C |
| Saint-Romain-des-Iles | 2 | 8 | 133° SE | aucun | soleil-couvert | 0.3 | 10°C |
| Nord du Pont d'Arciat | 2 | 8 | 133° SE | aucun | soleil-couvert | 0.3 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 165° SSE | aucun | pluie | 0.9 | 10°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 208° SSO | aucun | pluie | 1.2 | 12°C |
| Plage d'Excenevex | 7 | 10 | 227° SO | aucun | pluie | 2.4 | 13°C |
| Plage du Vengeron | 8 | 11 | 208° SSO | aucun | pluie | 1.2 | 12°C |
| Plage d'Hermance | 8 | 11 | 208° SSO | aucun | pluie | 1.2 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 189° S | aucun | pluie | 9.6 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 38° NE | aucun | orage | 34.2 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 24 | 178° S | aucun | couvert | 0.2 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 179° S | aucun | couvert | 0.2 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 194° SSO | aucun | pluie | 1.1 | 15°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 193° SSO | 10h-15h | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 4 | 12 | 231° SO | aucun | pluie | 3.3 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 168° SSE | aucun | couvert | 0.1 | 15°C |
| Nord du Pont de Chavanay | 10 | 23 | 168° SSE | aucun | couvert | 0.1 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 161° SSE | aucun | soleil-couvert | 0.1 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 163° SSE | aucun | soleil-couvert | 0.1 | 14°C |
| Saint-Romain-des-Iles | 3 | 8 | 211° SSO | aucun | couvert | 0.6 | 13°C |
| Nord du Pont d'Arciat | 3 | 8 | 211° SSO | aucun | couvert | 0.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 179° S | aucun | soleil-couvert | 0.0 | 15°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 22° NNE | aucun | pluie | 6.6 | 10°C |
| Plage d'Excenevex | 7 | 11 | 21° NNE | aucun | pluie | 4.2 | 10°C |
| Plage du Vengeron | 7 | 12 | 22° NNE | aucun | pluie | 6.6 | 10°C |
| Plage d'Hermance | 7 | 12 | 22° NNE | aucun | pluie | 6.6 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 92° E | aucun | pluie | 6.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 14° NNE | aucun | pluie | 4.8 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 20 | 180° S | aucun | pluie | 21.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 180° S | aucun | orage | 23.4 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 181° S | aucun | pluie | 12.7 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 188° S | aucun | pluie | 9.7 | 16°C |
| Cruas - Nuclear Spot | 11 | 25 | 179° S | 08h-12h | pluie | 4.5 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 24 | 177° S | aucun | pluie | 4.2 | 15°C |
| Nord du Pont de Chavanay | 9 | 24 | 177° S | aucun | pluie | 4.2 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 30 | 173° S | 10h-20h | pluie | 4.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 11 | 27 | 170° S | 11h-20h | pluie | 3.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 18 | 174° S | aucun | pluie | 1.2 | 15°C |
| Nord du Pont d'Arciat | 8 | 18 | 174° S | aucun | pluie | 1.2 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 181° S | aucun | pluie | 1.2 | 15°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 25° NNE | aucun | pluie | 16.0 | 12°C |
| Plage d'Excenevex | 6 | 10 | 40° NE | aucun | pluie | 10.7 | 12°C |
| Plage du Vengeron | 5 | 9 | 25° NNE | aucun | pluie | 16.0 | 12°C |
| Plage d'Hermance | 5 | 9 | 25° NNE | aucun | pluie | 16.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 7 | 347° NNO | aucun | orage | 34.8 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 19° NNE | aucun | pluie | 19.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 164° SSE | aucun | orage | 7.2 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 20 | 153° SSE | aucun | orage | 7.2 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 11° N | aucun | orage | 27.3 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 20 | 212° SSO | aucun | orage | 22.7 | 16°C |
| Cruas - Nuclear Spot | 6 | 16 | 170° S | aucun | orage | 47.6 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 176° S | aucun | pluie | 13.5 | 17°C |
| Nord du Pont de Chavanay | 10 | 24 | 176° S | aucun | pluie | 13.5 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 28 | 178° S | 08h-11h | pluie | 2.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 10 | 25 | 171° S | aucun | pluie | 19.2 | 17°C |
| Saint-Romain-des-Iles | 7 | 14 | 182° S | aucun | pluie | 9.0 | 15°C |
| Nord du Pont d'Arciat | 7 | 14 | 182° S | aucun | pluie | 9.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 120° ESE | aucun | pluie | 29.8 | 15°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 241° OSO | aucun | soleil | 0.1 | 13°C |
| Plage d'Excenevex | 2 | 6 | 144° SE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 2 | 5 | 241° OSO | aucun | soleil | 0.1 | 13°C |
| Plage d'Hermance | 2 | 5 | 241° OSO | aucun | soleil | 0.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 165° SSE | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 196° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 162° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 6 | 166° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 184° S | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 187° S | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 6 | 15 | 179° S | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 162° SSE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 17 | 162° SSE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 170° S | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 181° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 14 | 169° S | aucun | soleil-couvert | 0.1 | 14°C |
| Nord du Pont d'Arciat | 7 | 14 | 169° S | aucun | soleil-couvert | 0.1 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 184° S | aucun | soleil | 0.1 | 15°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 214° SO | aucun | pluie | 4.3 | 12°C |
| Plage d'Excenevex | 11 | 14 | 235° SO | 11h-14h | soleil-couvert | 0.3 | 12°C |
| Plage du Vengeron | 10 | 14 | 214° SO | aucun | pluie | 4.3 | 12°C |
| Plage d'Hermance | 10 | 14 | 214° SO | aucun | pluie | 4.3 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 203° SSO | aucun | pluie | 5.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 197° SSO | aucun | pluie | 5.8 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 188° S | aucun | pluie | 1.8 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 190° S | aucun | pluie | 1.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 14 | 186° S | aucun | pluie | 3.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 193° SSO | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 2 | 8 | 187° S | aucun | pluie | 2.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 126° SE | aucun | pluie | 3.6 | 12°C |
| Nord du Pont de Chavanay | 6 | 15 | 126° SE | aucun | pluie | 3.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 16 | 146° SE | aucun | soleil-couvert | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 145° SE | aucun | soleil | 0.6 | 12°C |
| Saint-Romain-des-Iles | 4 | 12 | 183° S | aucun | pluie | 5.4 | 14°C |
| Nord du Pont d'Arciat | 4 | 12 | 183° S | aucun | pluie | 5.4 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 143° SE | aucun | pluie | 1.8 | 13°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 210° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 8 | 12 | 233° SO | aucun | soleil | 0.0 | 12°C |
| Plage du Vengeron | 8 | 10 | 210° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 8 | 10 | 210° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 255° OSO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 214° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 358° N | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 358° N | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 6° N | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 355° N | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 6 | 16 | 24° NNE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 53° NE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 4 | 10 | 53° NE | aucun | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 49° NE | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 47° NE | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 2 | 6 | 212° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 6 | 212° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 5 | 13° NNE | aucun | soleil | 0.0 | 11°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 10 | 37° NE | aucun | couvert | 0.1 | 10°C |
| Plage d'Excenevex | 5 | 9 | 49° NE | aucun | couvert | 0.1 | 10°C |
| Plage du Vengeron | 5 | 10 | 37° NE | aucun | couvert | 0.1 | 10°C |
| Plage d'Hermance | 5 | 10 | 37° NE | aucun | couvert | 0.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 310° NO | aucun | couvert | 0.1 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 17° NNE | aucun | couvert | 0.1 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 177° S | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 191° S | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 8 | 172° S | aucun | couvert | 0.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 182° S | aucun | couvert | 0.6 | 12°C |
| Cruas - Nuclear Spot | 3 | 9 | 356° N | aucun | pluie | 1.9 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 133° SE | aucun | couvert | 0.7 | 11°C |
| Nord du Pont de Chavanay | 2 | 8 | 133° SE | aucun | couvert | 0.7 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 127° SE | aucun | couvert | 0.7 | 10°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 131° SE | aucun | couvert | 0.7 | 11°C |
| Saint-Romain-des-Iles | 3 | 8 | 148° SSE | aucun | pluie | 0.6 | 10°C |
| Nord du Pont d'Arciat | 3 | 8 | 148° SSE | aucun | pluie | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 100° E | aucun | couvert | 0.7 | 10°C |
