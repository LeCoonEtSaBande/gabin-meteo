# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 26/11/2026 02:02 (Europe/Paris)
- Fichiers générés le : 2026-11-26T02:03:18+01:00
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

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 33° NNE | 15h-20h | couvert | 0.2 | 7°C |
| Plage d'Excenevex | 14 | 20 | 20° NNE | 15h-20h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 12 | 16 | 45° NE | 17h-20h | couvert | 0.0 | 7°C |
| Plage d'Hermance | 13 | 18 | 40° NE | 17h-20h | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 16 | 297° ONO | 14h-19h | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 9° N | 17h-20h | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 31 | 352° N | 08h-20h | pluie | 1.7 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 16 | 28 | 1° N | 08h-20h | pluie | 1.2 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 13° NNE | 10h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 13° NNE | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 13 | 27 | 14° NNE | 10h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 25° NNE | aucun | couvert | 0.1 | 9°C |
| Nord du Pont de Chavanay | 8 | 15 | 36° NE | aucun | couvert | 0.2 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 353° N | aucun | couvert | 0.6 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 22° NNE | aucun | couvert | 0.9 | 7°C |
| Saint-Romain-des-Iles | 7 | 12 | 35° NE | aucun | pluie | 2.6 | 6°C |
| Nord du Pont d'Arciat | 8 | 12 | 27° NNE | aucun | pluie | 2.4 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 9 | 354° N | aucun | pluie | 2.4 | 6°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 40° NE | aucun | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 15 | 20 | 27° NNE | aucun | couvert | 0.0 | 6°C |
| Plage du Vengeron | 10 | 13 | 54° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 9 | 13 | 53° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 306° NO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 339° NNO | aucun | couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 31° NNE | aucun | couvert | 0.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 339° NNO | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 26 | 13° NNE | 08h-20h | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 16° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 17 | 34 | 18° NNE | 08h-20h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 20 | 14° NNE | 10h-15h | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 9 | 16 | 6° N | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 358° N | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 15° NNE | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 4 | 7 | 53° NE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 5 | 7 | 42° NE | aucun | couvert | 0.1 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 18° NNE | aucun | couvert | 0.0 | 6°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 48° NE | 09h-13h | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 17 | 23 | 30° NNE | 08h-13h | couvert | 0.0 | 4°C |
| Plage du Vengeron | 12 | 16 | 46° NE | 08h-12h | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 12 | 18 | 45° NE | 08h-12h | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 335° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 355° N | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 160° SSE | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 177° S | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 346° NNO | 08h-12h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 10 | 15 | 331° NNO | aucun | soleil | 0.0 | 7°C |
| Cruas - Nuclear Spot | 13 | 27 | 5° N | 08h-11h | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 9° N | aucun | soleil | 0.0 | 6°C |
| Nord du Pont de Chavanay | 6 | 10 | 9° N | aucun | soleil | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 355° N | aucun | soleil | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 355° N | aucun | soleil | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 8 | 62° ENE | aucun | soleil | 0.0 | 4°C |
| Nord du Pont d'Arciat | 4 | 8 | 62° ENE | aucun | soleil | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 321° NO | aucun | soleil | 0.0 | 5°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 3 | 248° OSO | aucun | couvert | 0.0 | 4°C |
| Plage d'Excenevex | 3 | 4 | 225° SO | aucun | couvert | 0.0 | 4°C |
| Plage du Vengeron | 2 | 2 | 41° NE | aucun | couvert | 0.0 | 4°C |
| Plage d'Hermance | 2 | 4 | 157° SSE | aucun | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 3 | 56° NE | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 32° NNE | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 169° S | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 202° SSO | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 10 | 357° N | aucun | couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 327° NNO | aucun | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 6 | 9 | 11° N | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 5 | 41° NE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 4 | 5 | 41° NE | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 211° SSO | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 211° SSO | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 2 | 346° NNO | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 2 | 346° NNO | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 2 | 288° ONO | aucun | couvert | 0.0 | 7°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 9 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 9 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 17° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 328° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 41° NE | aucun | soleil | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 338° NNO | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 1° N | aucun | soleil-couvert | 0.6 | 9°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 344° NNO | aucun | soleil-couvert | 0.9 | 9°C |
| Cruas - Nuclear Spot | 8 | 20 | 19° NNE | aucun | soleil-couvert | 0.3 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 27° NNE | aucun | couvert | 0.3 | 9°C |
| Nord du Pont de Chavanay | 6 | 13 | 27° NNE | aucun | couvert | 0.3 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 14° NNE | aucun | couvert | 0.3 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 19° NNE | aucun | couvert | 0.3 | 9°C |
| Saint-Romain-des-Iles | 6 | 11 | 347° NNO | aucun | couvert | 0.6 | 8°C |
| Nord du Pont d'Arciat | 6 | 11 | 347° NNO | aucun | couvert | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 335° NNO | aucun | couvert | 0.6 | 8°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 3° N | aucun | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 4 | 7 | 3° N | aucun | couvert | 0.0 | 6°C |
| Plage du Vengeron | 4 | 7 | 3° N | aucun | couvert | 0.0 | 6°C |
| Plage d'Hermance | 4 | 7 | 3° N | aucun | couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 94° E | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 107° ESE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 197° SSO | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 193° SSO | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 7° N | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 353° N | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 8 | 18 | 18° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 8° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 5 | 12 | 8° N | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 352° N | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 359° N | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 7 | 69° ENE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 7 | 69° ENE | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 49° NE | aucun | couvert | 0.0 | 8°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 353° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 3 | 5 | 353° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 3 | 5 | 353° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 3 | 5 | 353° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 100° E | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 93° E | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 5 | 126° SE | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 3 | 229° SO | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 14 | 190° S | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 187° S | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 5 | 12 | 207° SSO | aucun | couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 164° SSE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 5 | 12 | 164° SSE | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 172° S | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 164° SSE | aucun | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 3 | 9 | 150° SSE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 3 | 9 | 150° SSE | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 135° SE | aucun | couvert | 0.0 | 6°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 32° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 9 | 26° NNE | aucun | soleil | 0.0 | 6°C |
| Plage du Vengeron | 5 | 9 | 32° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 5 | 9 | 32° NNE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 310° NO | aucun | soleil | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 156° SSE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 151° SSE | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 3° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 342° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 6 | 13 | 12° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 27° NNE | aucun | soleil | 0.0 | 6°C |
| Nord du Pont de Chavanay | 3 | 9 | 27° NNE | aucun | soleil | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 327° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 17° NNE | aucun | soleil | 0.0 | 6°C |
| Saint-Romain-des-Iles | 3 | 8 | 349° N | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 3 | 8 | 349° N | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 332° NNO | aucun | soleil-couvert | 0.0 | 6°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 4 | 9 | 13° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 4 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 4 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 285° ONO | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 240° OSO | aucun | couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 22° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 162° SSE | aucun | soleil-couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 8° N | aucun | soleil-couvert | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 2° N | aucun | couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 9 | 22 | 28° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 30° NNE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 6 | 15 | 30° NNE | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 12° NNE | aucun | couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 17° NNE | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 4 | 9 | 25° NNE | aucun | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 4 | 9 | 25° NNE | aucun | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 348° NNO | aucun | couvert | 0.0 | 3°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 231° SO | aucun | soleil | 0.0 | 4°C |
| Plage d'Excenevex | 2 | 6 | 39° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 3 | 6 | 231° SO | aucun | soleil | 0.0 | 4°C |
| Plage d'Hermance | 3 | 6 | 231° SO | aucun | soleil | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 263° O | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 22° NNE | aucun | soleil | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 147° SSE | aucun | soleil | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 155° SSE | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 11° N | aucun | soleil | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 2 | 9 | 353° N | aucun | soleil | 0.0 | 4°C |
| Cruas - Nuclear Spot | 4 | 17 | 22° NNE | aucun | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 7 | 77° ENE | aucun | soleil | 0.0 | 3°C |
| Nord du Pont de Chavanay | 1 | 7 | 77° ENE | aucun | soleil | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 80° E | aucun | soleil | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 1 | 7 | 60° ENE | aucun | soleil | 0.0 | 2°C |
| Saint-Romain-des-Iles | 4 | 9 | 159° SSE | aucun | soleil-couvert | 0.0 | 1°C |
| Nord du Pont d'Arciat | 4 | 9 | 159° SSE | aucun | soleil-couvert | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 164° SSE | aucun | soleil | 0.0 | 2°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 199° SSO | 09h-14h | pluie | 1.0 | 5°C |
| Plage d'Excenevex | 14 | 19 | 218° SO | 08h-16h | couvert | 0.6 | 6°C |
| Plage du Vengeron | 11 | 17 | 199° SSO | 09h-14h | pluie | 1.0 | 5°C |
| Plage d'Hermance | 11 | 17 | 199° SSO | 09h-14h | pluie | 1.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 162° SSE | aucun | pluie | 2.6 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 198° SSO | aucun | pluie | 2.3 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 359° N | aucun | pluie | 1.6 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 352° N | aucun | soleil-couvert | 0.9 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 32° NNE | aucun | soleil | 0.6 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 42° NE | aucun | soleil | 0.6 | 8°C |
| Cruas - Nuclear Spot | 7 | 17 | 25° NNE | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 60° ENE | aucun | pluie | 1.8 | 8°C |
| Nord du Pont de Chavanay | 2 | 6 | 60° ENE | aucun | pluie | 1.8 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 180° S | aucun | pluie | 1.9 | 8°C |
| Saint-Cyr-sur-le-Rhône | 1 | 5 | 184° S | aucun | soleil-couvert | 0.7 | 8°C |
| Saint-Romain-des-Iles | 6 | 13 | 286° ONO | aucun | pluie | 1.3 | 7°C |
| Nord du Pont d'Arciat | 6 | 13 | 286° ONO | aucun | pluie | 1.3 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 100° E | aucun | pluie | 2.1 | 7°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 209° SSO | 11h-14h | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 12 | 17 | 224° SO | 08h-16h | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 10 | 15 | 209° SSO | 11h-14h | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 10 | 15 | 209° SSO | 11h-14h | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 105° ESE | aucun | soleil-couvert | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 194° SSO | aucun | pluie | 1.2 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 345° NNO | aucun | soleil-couvert | 0.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 344° NNO | aucun | soleil-couvert | 0.0 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 21° NNE | aucun | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 33° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 9 | 22 | 18° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 36° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 2 | 7 | 36° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 188° S | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 196° SSO | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 6 | 10 | 196° SSO | aucun | couvert | 0.6 | 6°C |
| Nord du Pont d'Arciat | 6 | 10 | 196° SSO | aucun | couvert | 0.6 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 153° SSE | aucun | soleil-couvert | 0.6 | 5°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 225° SO | 17h-20h | pluie | 3.4 | 2°C |
| Plage d'Excenevex | 12 | 17 | 237° OSO | aucun | pluie | 12.7 | 2°C |
| Plage du Vengeron | 12 | 17 | 225° SO | 17h-20h | pluie | 3.4 | 2°C |
| Plage d'Hermance | 12 | 17 | 225° SO | 17h-20h | pluie | 3.4 | 2°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 160° SSE | aucun | pluie | 12.8 | 2°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 29° NNE | aucun | pluie | 12.7 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 20 | 157° SSE | aucun | pluie | 16.5 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 142° SE | aucun | pluie | 12.6 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 19 | 221° SO | aucun | pluie | 3.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 10 | 28 | 190° S | 11h-14h | couvert | 0.9 | 6°C |
| Cruas - Nuclear Spot | 8 | 16 | 270° O | aucun | pluie | 7.8 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 186° S | 08h-12h | pluie | 2.5 | 6°C |
| Nord du Pont de Chavanay | 11 | 26 | 186° S | 08h-12h | pluie | 2.5 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 166° SSE | 08h-12h | pluie | 3.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 13 | 30 | 178° S | 08h-12h | pluie | 2.5 | 6°C |
| Saint-Romain-des-Iles | 11 | 21 | 158° SSE | aucun | pluie | 9.6 | 4°C |
| Nord du Pont d'Arciat | 11 | 21 | 158° SSE | aucun | pluie | 9.6 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 32 | 186° S | aucun | pluie | 7.3 | 6°C |

### mer. 09/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 218° SO | aucun | soleil | 0.0 | 5°C |
| Plage d'Excenevex | 12 | 17 | 223° SO | 08h-12h | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 9 | 13 | 218° SO | aucun | soleil | 0.0 | 5°C |
| Plage d'Hermance | 9 | 13 | 218° SO | aucun | soleil | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 90° E | aucun | soleil | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 223° SO | aucun | couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 16 | 343° NNO | aucun | couvert | 0.1 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 16 | 334° NNO | aucun | couvert | 0.1 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 19 | 346° NNO | aucun | couvert | 0.4 | 6°C |
| La Roche-de-Glun - Base Nautique | 2 | 16 | 11° N | aucun | couvert | 0.4 | 5°C |
| Cruas - Nuclear Spot | 5 | 17 | 355° N | aucun | couvert | 0.1 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 162° SSE | aucun | couvert | 0.3 | 7°C |
| Nord du Pont de Chavanay | 3 | 8 | 162° SSE | aucun | couvert | 0.3 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 155° SSE | aucun | soleil-couvert | 0.2 | 6°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 157° SSE | aucun | soleil-couvert | 0.3 | 6°C |
| Saint-Romain-des-Iles | 6 | 11 | 178° S | aucun | soleil-couvert | 0.6 | 5°C |
| Nord du Pont d'Arciat | 6 | 11 | 178° S | aucun | soleil-couvert | 0.6 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 104° ESE | aucun | soleil-couvert | 0.0 | 5°C |

### jeu. 10/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 38° NE | aucun | soleil | 0.0 |  |
| Plage d'Excenevex | 11 | 15 | 31° NNE | aucun | couvert | 0.0 |  |
| Plage du Vengeron | 10 | 14 | 38° NE | aucun | soleil | 0.0 |  |
| Plage d'Hermance | 10 | 14 | 38° NE | aucun | soleil | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 1 | 5 | 80° E | aucun | soleil-couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 309° NO | aucun | soleil-couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 334° NNO | aucun | soleil-couvert | 0.6 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 17 | 334° NNO | aucun | soleil-couvert | 0.6 |  |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 4° N | aucun | soleil-couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 6° N | aucun | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 9 | 21 | 10° N | aucun | soleil | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 360° N | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 7 | 16 | 360° N | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 354° N | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 354° N | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 7 | 13 | 358° N | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 7 | 13 | 358° N | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 348° NNO | aucun | couvert | 0.0 |  |
