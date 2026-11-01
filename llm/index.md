# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 01/11/2026 17:30 (Europe/Paris)
- Fichiers générés le : 2026-11-01T17:34:38+01:00
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
| Plage de la pointe - Messery | 30 | 43 | 35° NE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 28 | 42 | 28° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage du Vengeron | 30 | 46 | 30° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Hermance | 27 | 41 | 34° NE | 08h-20h | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 24 | 34 | 347° NNO | 08h-18h | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 18 | 25 | 348° NNO | 08h-20h | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 33 | 356° N | 08h-18h | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 18 | 32 | 355° N | 08h-18h | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 32 | 23° NNE | 08h-20h | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 347° NNO | 11h-20h | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 18 | 36 | 23° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 28 | 346° NNO | 08h-20h | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 14 | 26 | 348° NNO | 09h-20h | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 334° NNO | 14h-18h | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 3° N | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 16 | 26 | 11° N | 09h-20h | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 16 | 26 | 9° N | 08h-20h | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 29 | 355° N | 11h-20h | soleil | 0.0 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 23 | 32 | 40° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 19 | 29 | 29° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 19 | 26 | 43° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 20 | 28 | 41° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 340° NNO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 3° N | 08h-11h | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 1° N | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 19 | 351° N | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 26 | 15° NNE | 08h-20h | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 7° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 18 | 34 | 16° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 21 | 2° N | 08h-13h | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 11 | 19 | 5° N | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 342° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 360° N | aucun | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 12 | 20 | 25° NNE | 11h-17h | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 12 | 19 | 24° NNE | 10h-20h | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 349° N | aucun | soleil-couvert | 0.0 | 9°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 18 | 24 | 26° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 15 | 19 | 29° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 14 | 21 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 306° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 10 | 14 | 6° N | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 354° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 15° NNE | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 13 | 340° NNO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 11 | 23 | 25° NNE | 08h-14h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 11 | 22° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 11 | 46° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 6 | 12 | 35° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 11 | 35° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 355° N | aucun | soleil-couvert | 0.0 | 8°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 54° NE | 08h-14h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 17 | 23 | 27° NNE | 08h-13h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 12 | 16 | 44° NE | 08h-12h | couvert | 0.0 | 10°C |
| Plage d'Hermance | 12 | 18 | 49° NE | 08h-13h | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 300° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 7 | 16 | 48° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 7° N | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 344° NNO | aucun | couvert | 0.0 | 10°C |
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
| Plage de la pointe - Messery | 5 | 7 | 59° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 11 | 15 | 32° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 6 | 7 | 35° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 7 | 10 | 60° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 343° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 58° ENE | aucun | soleil-couvert | 0.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 9 | 187° S | aucun | soleil-couvert | 0.4 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 348° NNO | aucun | couvert | 0.3 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 359° N | aucun | pluie | 2.1 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 6 | 357° N | aucun | pluie | 1.2 | 9°C |
| Cruas - Nuclear Spot | 6 | 10 | 23° NNE | aucun | pluie | 2.9 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 42° NE | aucun | soleil-couvert | 0.9 | 10°C |
| Nord du Pont de Chavanay | 3 | 4 | 42° NE | aucun | soleil-couvert | 0.9 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 255° OSO | aucun | pluie | 4.5 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 255° OSO | aucun | pluie | 1.7 | 9°C |
| Saint-Romain-des-Iles | 2 | 11 | 157° SSE | aucun | pluie | 4.4 | 10°C |
| Nord du Pont d'Arciat | 2 | 11 | 157° SSE | aucun | pluie | 4.4 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 9 | 329° NNO | aucun | pluie | 2.3 | 9°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 267° O | aucun | couvert | 0.5 | 12°C |
| Plage d'Excenevex | 4 | 5 | 49° NE | aucun | couvert | 0.4 | 12°C |
| Plage du Vengeron | 4 | 5 | 35° NE | aucun | couvert | 0.4 | 12°C |
| Plage d'Hermance | 4 | 7 | 39° NE | aucun | couvert | 0.5 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 329° NNO | aucun | pluie | 1.6 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 6° N | aucun | pluie | 2.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 208° SSO | aucun | pluie | 4.1 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 189° S | aucun | pluie | 1.9 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 354° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 345° NNO | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 5 | 12 | 10° N | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 26° NNE | aucun | soleil-couvert | 0.6 | 12°C |
| Nord du Pont de Chavanay | 3 | 10 | 26° NNE | aucun | soleil-couvert | 0.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 46° NE | aucun | soleil-couvert | 0.6 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 27° NNE | aucun | soleil-couvert | 0.6 | 11°C |
| Saint-Romain-des-Iles | 2 | 6 | 69° ENE | aucun | pluie | 2.4 | 9°C |
| Nord du Pont d'Arciat | 2 | 6 | 69° ENE | aucun | pluie | 2.4 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 358° N | aucun | pluie | 1.5 | 11°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 360° N | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 4 | 7 | 360° N | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 4 | 7 | 360° N | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 4 | 7 | 360° N | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 105° ESE | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 1 | 4 | 20° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 193° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 180° S | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 174° S | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 193° SSO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 2 | 6 | 355° N | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 166° SSE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 3 | 10 | 166° SSE | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 167° SSE | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 168° SSE | aucun | couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 3 | 8 | 148° SSE | aucun | couvert | 0.6 | 10°C |
| Nord du Pont d'Arciat | 3 | 8 | 148° SSE | aucun | couvert | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 169° S | aucun | couvert | 0.0 | 10°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 6° N | aucun | pluie | 18.9 | 9°C |
| Plage d'Excenevex | 5 | 9 | 6° N | aucun | pluie | 18.9 | 9°C |
| Plage du Vengeron | 5 | 9 | 6° N | aucun | pluie | 18.9 | 9°C |
| Plage d'Hermance | 5 | 9 | 6° N | aucun | pluie | 18.9 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 112° ESE | aucun | pluie | 20.5 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 228° SO | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 25 | 156° SSE | aucun | pluie | 9.4 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 20 | 172° S | aucun | pluie | 10.7 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 172° S | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 182° S | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 10 | 188° S | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 153° SSE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 11 | 153° SSE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 126° SE | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 159° SSE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 2 | 8 | 95° E | aucun | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 2 | 8 | 95° E | aucun | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 2° N | aucun | soleil | 0.0 | 13°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 22° NNE | aucun | pluie | 2.3 | 11°C |
| Plage d'Excenevex | 5 | 9 | 43° NE | aucun | pluie | 1.4 | 11°C |
| Plage du Vengeron | 5 | 8 | 22° NNE | aucun | pluie | 2.3 | 11°C |
| Plage d'Hermance | 5 | 8 | 22° NNE | aucun | pluie | 2.3 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 97° E | aucun | pluie | 2.9 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 10° N | aucun | pluie | 2.7 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 176° S | aucun | pluie | 1.1 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 169° S | aucun | pluie | 1.1 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 181° S | aucun | pluie | 1.5 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 188° S | aucun | pluie | 1.4 | 14°C |
| Cruas - Nuclear Spot | 8 | 20 | 178° S | aucun | pluie | 3.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 25 | 182° S | aucun | pluie | 2.4 | 14°C |
| Nord du Pont de Chavanay | 10 | 25 | 182° S | aucun | pluie | 2.4 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 29 | 174° S | 15h-20h | pluie | 1.9 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 172° S | 15h-20h | pluie | 2.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 18 | 175° S | aucun | pluie | 3.2 | 12°C |
| Nord du Pont d'Arciat | 7 | 18 | 175° S | aucun | pluie | 3.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 147° SSE | aucun | pluie | 2.9 | 15°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 215° SO | aucun | pluie | 11.6 | 15°C |
| Plage d'Excenevex | 5 | 8 | 252° OSO | aucun | pluie | 7.2 | 15°C |
| Plage du Vengeron | 8 | 10 | 215° SO | aucun | pluie | 11.6 | 15°C |
| Plage d'Hermance | 8 | 10 | 215° SO | aucun | pluie | 11.6 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 164° SSE | aucun | pluie | 15.4 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 279° O | aucun | pluie | 11.4 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 16 | 158° SSE | aucun | pluie | 6.3 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 16 | 158° SSE | aucun | pluie | 5.7 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 184° S | aucun | couvert | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 19 | 193° SSO | aucun | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 5 | 12 | 185° S | aucun | pluie | 6.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 155° SSE | aucun | couvert | 0.7 | 17°C |
| Nord du Pont de Chavanay | 10 | 22 | 155° SSE | aucun | couvert | 0.7 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 163° SSE | aucun | soleil-couvert | 0.7 | 17°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 155° SSE | aucun | couvert | 0.7 | 16°C |
| Saint-Romain-des-Iles | 7 | 13 | 168° SSE | aucun | pluie | 18.3 | 15°C |
| Nord du Pont d'Arciat | 7 | 13 | 168° SSE | aucun | pluie | 18.3 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 19 | 176° S | aucun | orage | 33.8 | 16°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 28° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 7 | 11 | 13° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 8 | 11 | 28° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 8 | 11 | 28° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 294° ONO | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 194° SSO | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 2° N | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 354° N | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 8° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 358° N | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 21 | 24° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 1° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 6 | 13 | 1° N | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 359° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 353° N | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 8 | 28° NNE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 8 | 28° NNE | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 1° N | aucun | couvert | 0.0 | 14°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 359° N | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 5 | 10 | 55° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 5 | 7 | 359° N | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 5 | 7 | 359° N | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 7 | 293° ONO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 10° N | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 178° S | aucun | soleil-couvert | 0.1 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 162° SSE | aucun | soleil-couvert | 0.7 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 235° SO | aucun | pluie | 4.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 207° SSO | aucun | pluie | 2.4 | 16°C |
| Cruas - Nuclear Spot | 5 | 15 | 218° SO | aucun | pluie | 12.7 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 190° S | 14h-20h | couvert | 0.4 | 17°C |
| Nord du Pont de Chavanay | 10 | 24 | 190° S | 14h-20h | couvert | 0.4 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 161° SSE | aucun | pluie | 6.7 | 17°C |
| Saint-Cyr-sur-le-Rhône | 11 | 27 | 176° S | 10h-20h | pluie | 0.5 | 17°C |
| Saint-Romain-des-Iles | 6 | 12 | 156° SSE | aucun | pluie | 4.6 | 16°C |
| Nord du Pont d'Arciat | 6 | 12 | 156° SSE | aucun | pluie | 4.6 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 122° ESE | aucun | pluie | 6.4 | 16°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 193° SSO | aucun | pluie | 2.4 | 14°C |
| Plage d'Excenevex | 2 | 6 | 149° SSE | aucun | pluie | 1.2 | 15°C |
| Plage du Vengeron | 4 | 7 | 193° SSO | aucun | pluie | 2.4 | 14°C |
| Plage d'Hermance | 4 | 7 | 193° SSO | aucun | pluie | 2.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 203° SSO | aucun | pluie | 1.8 | 12°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 8° N | aucun | pluie | 9.1 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 158° SSE | aucun | pluie | 2.1 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 189° S | aucun | pluie | 2.5 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 196° SSO | aucun | soleil-couvert | 0.6 | 17°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 177° S | aucun | pluie | 1.2 | 16°C |
| Cruas - Nuclear Spot | 2 | 7 | 211° SSO | aucun | pluie | 8.4 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 157° SSE | aucun | pluie | 4.8 | 16°C |
| Nord du Pont de Chavanay | 6 | 14 | 157° SSE | aucun | pluie | 4.8 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 173° S | aucun | pluie | 1.2 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 165° SSE | aucun | pluie | 3.6 | 16°C |
| Saint-Romain-des-Iles | 4 | 9 | 165° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 4 | 9 | 165° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 150° SSE | aucun | soleil-couvert | 0.6 | 16°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 345° NNO | aucun | soleil-couvert | 0.6 | 14°C |
| Plage d'Excenevex | 5 | 7 | 359° N | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 4 | 7 | 345° NNO | aucun | soleil-couvert | 0.6 | 14°C |
| Plage d'Hermance | 4 | 7 | 345° NNO | aucun | soleil-couvert | 0.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 280° O | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 196° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 1° N | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 354° N | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 6° N | 12h-19h | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 358° N | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 26 | 14° NNE | 12h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 6° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 6 | 15 | 6° N | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 4° N | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 4° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 9 | 347° NNO | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 9 | 347° NNO | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 353° N | aucun | soleil-couvert | 0.0 | 13°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 51° NE | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 8 | 12 | 32° NNE | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 8 | 13 | 51° NE | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 8 | 13 | 51° NE | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 342° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 35° NE | aucun | couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 0 | 8 | 76° ENE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 8 | 216° SO | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 6° N | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 350° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 10 | 23 | 14° NNE | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 35° NE | aucun | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 5 | 13 | 35° NE | aucun | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 20° NNE | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 6 | 11° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 2 | 6 | 11° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 353° N | aucun | couvert | 0.0 | 9°C |
