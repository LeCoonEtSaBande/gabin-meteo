# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 31/10/2026 21:30 (Europe/Paris)
- Fichiers générés le : 2026-10-31T21:33:56+01:00
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
| Plage de la pointe - Messery | 16 | 21 | 34° NE | 08h-14h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 15 | 21 | 32° NNE | 15h-20h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 13 | 17 | 35° NE | 08h-15h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 14 | 19 | 36° NE | 08h-13h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 331° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 8° N | 08h-11h | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 344° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 360° N | 14h-20h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 348° NNO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 12 | 24 | 23° NNE | 10h-20h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 12 | 6° N | aucun | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 7 | 12 | 8° N | aucun | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 9 | 12° NNE | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 7° N | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 5 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 5 | 8 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 31 | 46 | 31° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 27 | 42 | 28° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage du Vengeron | 30 | 44 | 28° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Hermance | 29 | 41 | 30° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 26 | 37 | 354° N | 08h-18h | soleil | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 19 | 25 | 1° N | 08h-20h | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 33 | 356° N | 08h-18h | couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 19 | 33 | 358° N | 08h-19h | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 31 | 21° NNE | 08h-20h | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 354° N | 12h-20h | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 18 | 36 | 24° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 17 | 29 | 357° N | 09h-20h | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 15 | 27 | 359° N | 10h-20h | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 337° NNO | 10h-19h | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 4° N | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 15 | 26 | 14° NNE | 10h-20h | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 17 | 26 | 10° N | 09h-20h | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 26 | 357° N | 11h-20h | soleil | 0.0 | 11°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 30 | 40° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 21 | 29 | 33° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 19 | 25 | 31° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 17 | 25 | 39° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 306° NO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 13 | 18 | 321° NO | 13h-19h | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 14° NNE | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 346° NNO | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 30 | 18° NNE | 08h-20h | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 12 | 18 | 5° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 18 | 35 | 19° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 23 | 359° N | 08h-20h | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 12 | 21 | 3° N | 10h-17h | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 9° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 14 | 22 | 359° N | 10h-17h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 14 | 22 | 359° N | 09h-20h | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 19 | 354° N | 14h-18h | couvert | 0.0 | 9°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 17 | 24 | 24° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 14 | 20 | 43° NE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 14 | 22 | 42° NE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 312° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 25° NNE | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 353° N | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 346° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 21 | 17° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 11 | 19 | 10° N | 09h-16h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 13 | 27 | 15° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 3° N | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 9 | 16 | 3° N | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 10 | 16 | 1° N | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 10 | 16 | 1° N | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 344° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 57° ENE | 09h-18h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 16 | 22 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 12 | 15 | 42° NE | 08h-13h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 12 | 18 | 46° NE | 08h-13h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 308° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 13 | 42° NE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 360° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 348° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 16° NNE | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 357° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 8 | 16 | 20° NNE | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 18° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 9 | 18° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 11° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 11° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 4 | 9 | 49° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 9 | 49° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 4° N | aucun | soleil-couvert | 0.0 | 10°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 60° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 12 | 17 | 30° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 7 | 10 | 22° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 7 | 11 | 48° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 324° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 27° NNE | aucun | pluie | 1.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 195° SSO | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 225° SO | aucun | couvert | 0.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 21° NNE | aucun | pluie | 3.7 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 351° N | aucun | pluie | 4.8 | 9°C |
| Cruas - Nuclear Spot | 6 | 18 | 41° NE | aucun | pluie | 6.6 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 2° N | aucun | pluie | 2.4 | 9°C |
| Nord du Pont de Chavanay | 3 | 7 | 2° N | aucun | pluie | 2.4 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 96° E | aucun | pluie | 1.8 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 10° N | aucun | pluie | 2.1 | 8°C |
| Saint-Romain-des-Iles | 2 | 6 | 169° S | aucun | couvert | 0.6 | 6°C |
| Nord du Pont d'Arciat | 2 | 6 | 169° S | aucun | couvert | 0.6 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 43° NE | aucun | pluie | 1.4 | 8°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 360° N | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 5 | 360° N | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 5 | 360° N | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 3 | 5 | 360° N | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 108° ESE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 32° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 5 | 98° E | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 49° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 6 | 35° NE | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 133° SE | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 3 | 7 | 351° N | aucun | pluie | 1.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 351° N | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 7 | 351° N | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 67° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 339° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 2 | 7 | 69° ENE | aucun | couvert | 0.2 | 11°C |
| Nord du Pont d'Arciat | 2 | 7 | 69° ENE | aucun | couvert | 0.2 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 117° ESE | aucun | soleil-couvert | 0.3 | 11°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 353° N | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 5 | 8 | 353° N | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 5 | 8 | 353° N | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 5 | 8 | 353° N | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 111° ESE | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 20 | 187° S | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 15 | 182° S | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 6 | 166° SSE | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 172° S | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 2 | 7 | 358° N | aucun | couvert | 0.7 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 185° S | aucun | pluie | 0.8 | 11°C |
| Nord du Pont de Chavanay | 2 | 7 | 185° S | aucun | pluie | 0.8 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 59° ENE | aucun | pluie | 1.1 | 10°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 200° SSO | aucun | pluie | 1.1 | 11°C |
| Saint-Romain-des-Iles | 2 | 6 | 87° E | aucun | couvert | 0.6 | 8°C |
| Nord du Pont d'Arciat | 2 | 6 | 87° E | aucun | couvert | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 337° NNO | aucun | soleil-couvert | 0.0 | 9°C |

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
| Saint-Romain-des-Iles | 3 | 7 | 140° SE | aucun | soleil-couvert | 0.6 | 8°C |
| Nord du Pont d'Arciat | 3 | 7 | 140° SE | aucun | soleil-couvert | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 4° N | aucun | soleil-couvert | 0.0 | 9°C |

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
| Saint-Romain-des-Iles | 5 | 10 | 351° N | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 5 | 10 | 351° N | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 340° NNO | aucun | soleil-couvert | 0.0 | 8°C |

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
| Saint-Romain-des-Iles | 2 | 7 | 108° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 7 | 108° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 10 | 25° NNE | aucun | couvert | 0.0 | 6°C |

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
| Saint-Romain-des-Iles | 8 | 20 | 169° S | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 8 | 20 | 169° S | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 136° SE | aucun | soleil-couvert | 0.0 | 14°C |

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
| Saint-Romain-des-Iles | 6 | 12 | 167° SSE | aucun | pluie | 2.2 | 15°C |
| Nord du Pont d'Arciat | 6 | 12 | 167° SSE | aucun | pluie | 2.2 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 138° SE | aucun | pluie | 8.9 | 15°C |

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
| Saint-Romain-des-Iles | 3 | 7 | 148° SSE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 3 | 7 | 148° SSE | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 139° SE | aucun | soleil-couvert | 0.0 | 15°C |

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
| Saint-Romain-des-Iles | 8 | 18 | 172° S | aucun | pluie | 4.8 | 14°C |
| Nord du Pont d'Arciat | 8 | 18 | 172° S | aucun | pluie | 4.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 23 | 177° S | aucun | pluie | 6.6 | 14°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Saint-Romain-des-Iles | 10 | 21 | 181° S | aucun | pluie | 4.2 |  |
| Nord du Pont d'Arciat | 10 | 21 | 181° S | aucun | pluie | 4.2 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 32 | 176° S | 08h-13h | pluie | 3.0 |  |
