# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 27/11/2026 16:22 (Europe/Paris)
- Fichiers générés le : 2026-11-27T16:23:22+01:00
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

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 29° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 13 | 19 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 9 | 12 | 42° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 12 | 16 | 40° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 344° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 10° N | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 22 | 2° N | 10h-19h | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 19 | 353° N | 13h-16h | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 25 | 14° NNE | 08h-19h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 6° N | aucun | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 16 | 31 | 17° NNE | 08h-20h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 20 | 24° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 10 | 18 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 13° NNE | aucun | couvert | 0.1 | 7°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 27° NNE | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 6 | 12 | 338° NNO | aucun | couvert | 0.1 | 6°C |
| Nord du Pont d'Arciat | 6 | 12 | 337° NNO | aucun | couvert | 0.2 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 11 | 2° N | aucun | soleil-couvert | 0.0 | 6°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 46° NE | 10h-13h | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 16 | 23 | 29° NNE | 08h-13h | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 12 | 16 | 45° NE | 09h-12h | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 13 | 17 | 44° NE | 08h-13h | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 313° NO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 27° NNE | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 189° S | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 171° S | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 3° N | 08h-11h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 351° N | aucun | soleil | 0.0 | 7°C |
| Cruas - Nuclear Spot | 14 | 27 | 20° NNE | 08h-11h | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 21° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 5 | 10 | 34° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 9° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 32° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 5 | 49° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 4 | 7 | 41° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 4 | 27° NNE | aucun | soleil-couvert | 0.0 | 3°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 2 | 216° SO | aucun | couvert | 0.3 | 4°C |
| Plage d'Excenevex | 3 | 4 | 213° SSO | aucun | couvert | 0.0 | 5°C |
| Plage du Vengeron | 2 | 3 | 66° ENE | aucun | pluie | 0.5 | 4°C |
| Plage d'Hermance | 2 | 3 | 107° ESE | aucun | pluie | 0.5 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 3° N | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 72° ENE | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 46° NE | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 347° NNO | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 10 | 5° N | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 334° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 6 | 9 | 6° N | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 43° NE | aucun | soleil-couvert | 0.3 | 7°C |
| Nord du Pont de Chavanay | 3 | 4 | 43° NE | aucun | soleil-couvert | 0.3 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 222° SO | aucun | soleil-couvert | 0.2 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 225° SO | aucun | soleil-couvert | 0.2 | 7°C |
| Saint-Romain-des-Iles | 2 | 4 | 186° S | aucun | pluie | 1.1 | 6°C |
| Nord du Pont d'Arciat | 2 | 4 | 186° S | aucun | pluie | 1.1 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 2 | 8° N | aucun | couvert | 0.3 | 6°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 23 | 33° NNE | 09h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 18 | 24 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 15 | 20 | 37° NE | 11h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 14 | 21 | 46° NE | 10h-20h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 308° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 1° N | 11h-14h | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 16 | 37° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 337° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 10° N | 08h-17h | couvert | 0.1 | 6°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 7° N | aucun | couvert | 0.1 | 5°C |
| Cruas - Nuclear Spot | 14 | 29 | 8° N | 08h-19h | soleil-couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 33° NNE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 9 | 15 | 33° NNE | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 355° N | aucun | couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 355° N | aucun | couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 6 | 10 | 10° N | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 6 | 10 | 10° N | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 342° NNO | aucun | couvert | 0.0 | 3°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 58° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 9 | 13 | 26° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 8 | 11 | 49° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 5 | 8 | 70° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 307° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 340° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 180° S | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 193° SSO | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 345° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 6 | 11 | 23° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 3 | 165° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 2 | 3 | 165° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 17° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 17° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 7 | 171° S | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 4 | 7 | 171° S | aucun | soleil-couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 135° SE | aucun | soleil-couvert | 0.0 | 6°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 331° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 2 | 4 | 331° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 2 | 4 | 331° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 2 | 4 | 331° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 3 | 120° ESE | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 90° E | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 195° SSO | aucun | soleil | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 189° S | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 188° S | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 193° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 5 | 13 | 191° S | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 166° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 5 | 13 | 166° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 169° S | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 172° S | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 7 | 185° S | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 7 | 185° S | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 175° S | aucun | soleil-couvert | 0.0 | 9°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 25 | 32° NNE | 15h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 16 | 25 | 32° NNE | 15h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 16 | 25 | 32° NNE | 15h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 16 | 25 | 32° NNE | 15h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 321° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 353° N | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 327° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 4° N | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 32 | 360° N | 09h-20h | couvert | 0.5 | 8°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 355° N | 10h-20h | couvert | 0.8 | 7°C |
| Cruas - Nuclear Spot | 16 | 36 | 13° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 346° NNO | 12h-20h | pluie | 1.2 | 7°C |
| Nord du Pont de Chavanay | 12 | 26 | 346° NNO | 12h-20h | pluie | 1.2 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 345° NNO | 13h-20h | couvert | 0.8 | 7°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 343° NNO | 12h-20h | pluie | 1.2 | 7°C |
| Saint-Romain-des-Iles | 11 | 21 | 354° N | 12h-20h | couvert | 0.8 | 6°C |
| Nord du Pont d'Arciat | 11 | 21 | 354° N | 12h-20h | couvert | 0.8 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 23 | 350° N | 14h-20h | couvert | 0.0 | 7°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 29 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 18 | 29 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 18 | 29 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 18 | 29 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 354° N | aucun | couvert | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 6 | 12 | 360° N | aucun | couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 357° N | aucun | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 338° NNO | aucun | couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 2° N | 08h-20h | couvert | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 356° N | 08h-20h | couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 15 | 34 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 348° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 10 | 23 | 348° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 348° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 347° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 11 | 21 | 354° N | 08h-20h | soleil | 0.0 | 4°C |
| Nord du Pont d'Arciat | 11 | 21 | 354° N | 08h-20h | soleil | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 21 | 350° N | aucun | soleil-couvert | 0.0 | 5°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 23 | 30° NNE | 08h-20h | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 16 | 21 | 23° NNE | 08h-20h | soleil | 0.0 | 5°C |
| Plage du Vengeron | 17 | 23 | 30° NNE | 08h-20h | soleil | 0.0 | 6°C |
| Plage d'Hermance | 17 | 23 | 30° NNE | 08h-20h | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 324° NO | aucun | soleil | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 1 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 15° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 9° N | 10h-15h | soleil | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 3° N | aucun | soleil-couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 12 | 26 | 21° NNE | 08h-16h | soleil | 0.0 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 356° N | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 8 | 19 | 356° N | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 340° NNO | aucun | soleil | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 345° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 10 | 19 | 351° N | 13h-17h | soleil | 0.0 | 6°C |
| Nord du Pont d'Arciat | 10 | 19 | 351° N | 13h-17h | soleil | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 340° NNO | aucun | soleil-couvert | 0.0 | 4°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 19 | 37° NE | aucun | soleil | 0.0 | 4°C |
| Plage d'Excenevex | 6 | 15 | 21° NNE | aucun | soleil | 0.0 | 4°C |
| Plage du Vengeron | 7 | 19 | 37° NE | aucun | soleil | 0.0 | 4°C |
| Plage d'Hermance | 7 | 19 | 37° NE | aucun | soleil | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 287° ONO | aucun | soleil | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 209° SSO | aucun | soleil-couvert | 0.0 | 2°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 32° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 36° NE | aucun | soleil-couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 12° NNE | 11h-20h | soleil-couvert | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 9° N | aucun | couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 11 | 24 | 21° NNE | 10h-20h | soleil-couvert | 0.0 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 353° N | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 8 | 18 | 353° N | aucun | soleil-couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 347° NNO | aucun | couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 347° NNO | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 7 | 13 | 349° N | aucun | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 7 | 13 | 349° N | aucun | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 335° NNO | aucun | couvert | 0.0 | 3°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 34° NE | aucun | couvert | 0.0 | 4°C |
| Plage d'Excenevex | 7 | 12 | 24° NNE | aucun | couvert | 0.0 | 4°C |
| Plage du Vengeron | 7 | 12 | 34° NE | aucun | couvert | 0.0 | 4°C |
| Plage d'Hermance | 7 | 12 | 34° NE | aucun | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 8 | 150° SSE | aucun | couvert | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 30° NNE | aucun | couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 106° ESE | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 191° S | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 10° N | aucun | couvert | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 4° N | aucun | couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 10 | 25 | 16° NNE | aucun | couvert | 0.0 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 11° N | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 5 | 13 | 11° N | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 192° SSO | aucun | couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 4° N | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 3 | 9 | 185° S | aucun | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 3 | 9 | 185° S | aucun | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 9 | 115° ESE | aucun | couvert | 0.0 | 3°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 235° SO | aucun | pluie | 7.4 | 6°C |
| Plage d'Excenevex | 8 | 12 | 233° SO | aucun | pluie | 8.2 | 6°C |
| Plage du Vengeron | 9 | 13 | 235° SO | aucun | pluie | 7.4 | 6°C |
| Plage d'Hermance | 9 | 13 | 235° SO | aucun | pluie | 7.4 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 143° SE | aucun | pluie | 14.5 | 3°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 246° OSO | aucun | pluie | 13.3 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 160° SSE | aucun | pluie | 14.4 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 150° SSE | aucun | pluie | 14.8 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 20 | 185° S | aucun | pluie | 8.9 | 6°C |
| La Roche-de-Glun - Base Nautique | 13 | 25 | 195° SSO | 08h-15h | pluie | 6.0 | 6°C |
| Cruas - Nuclear Spot | 6 | 11 | 211° SSO | aucun | pluie | 4.7 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 173° S | 08h-12h | pluie | 4.0 | 4°C |
| Nord du Pont de Chavanay | 11 | 24 | 173° S | 08h-12h | pluie | 4.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 175° S | 08h-11h | pluie | 2.8 | 4°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 173° S | 08h-11h | pluie | 3.2 | 4°C |
| Saint-Romain-des-Iles | 5 | 8 | 168° SSE | aucun | pluie | 7.9 | 4°C |
| Nord du Pont d'Arciat | 5 | 8 | 168° SSE | aucun | pluie | 7.9 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 178° S | 08h-11h | pluie | 3.6 | 4°C |

### mer. 09/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 210° SSO | aucun | couvert | 0.3 | 4°C |
| Plage d'Excenevex | 6 | 13 | 50° NE | aucun | couvert | 0.2 | 4°C |
| Plage du Vengeron | 4 | 8 | 210° SSO | aucun | couvert | 0.3 | 4°C |
| Plage d'Hermance | 4 | 8 | 210° SSO | aucun | couvert | 0.3 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 292° ONO | aucun | couvert | 0.1 | 0°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 337° NNO | aucun | couvert | 0.7 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 25 | 347° NNO | aucun | couvert | 0.4 | -2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 26 | 341° NNO | aucun | couvert | 0.3 | -2°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 31 | 10° N | 08h-20h | pluie | 1.8 | 4°C |
| La Roche-de-Glun - Base Nautique | 12 | 27 | 0° N | 08h-12h | couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 14 | 34 | 14° NNE | 08h-20h | couvert | 0.6 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 21 | 348° NNO | aucun | pluie | 3.7 | 3°C |
| Nord du Pont de Chavanay | 10 | 21 | 348° NNO | aucun | pluie | 3.7 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 20 | 343° NNO | aucun | pluie | 3.1 | 3°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 345° NNO | aucun | pluie | 3.1 | 3°C |
| Saint-Romain-des-Iles | 11 | 22 | 337° NNO | 17h-20h | soleil-couvert | 0.9 | 3°C |
| Nord du Pont d'Arciat | 11 | 22 | 337° NNO | 17h-20h | soleil-couvert | 0.9 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 15 | 342° NNO | aucun | pluie | 5.5 | 3°C |

### jeu. 10/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 35° NE | aucun | couvert | 0.0 | 3°C |
| Plage d'Excenevex | 13 | 19 | 34° NE | 08h-14h | couvert | 0.6 | 3°C |
| Plage du Vengeron | 10 | 16 | 35° NE | aucun | couvert | 0.0 | 3°C |
| Plage d'Hermance | 10 | 16 | 35° NE | aucun | couvert | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 23 | 3° N | aucun | soleil-couvert | 0.6 | -1°C |
| Lac du Bourget - Cap des Séselets | 8 | 21 | 17° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 35 | 345° NNO | aucun | couvert | 0.6 | -3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 39 | 343° NNO | 11h-16h | couvert | 0.3 | -3°C |
| Portes-lès-Valence - Parking des Surfeurs | 23 | 50 | 1° N | 08h-20h | couvert | 0.0 | 3°C |
| La Roche-de-Glun - Base Nautique | 20 | 42 | 356° N | 08h-20h | couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 23 | 53 | 1° N | 08h-20h | soleil-couvert | 0.0 | 3°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 35 | 346° NNO | 08h-17h | couvert | 0.0 | 3°C |
| Nord du Pont de Chavanay | 16 | 35 | 346° NNO | 08h-17h | couvert | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 349° N | 08h-16h | couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 15 | 33 | 345° NNO | 08h-16h | couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 11 | 24 | 334° NNO | 08h-12h | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 11 | 24 | 334° NNO | 08h-12h | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 26 | 345° NNO | 08h-14h | soleil-couvert | 0.0 | 2°C |

### ven. 11/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 20 | 206° SSO | aucun | pluie | 3.8 | 4°C |
| Plage d'Excenevex | 16 | 24 | 217° SO | aucun | pluie | 2.5 | 3°C |
| Plage du Vengeron | 12 | 20 | 206° SSO | aucun | pluie | 3.8 | 4°C |
| Plage d'Hermance | 12 | 20 | 206° SSO | aucun | pluie | 3.8 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 320° NO | aucun | pluie | 5.4 | 0°C |
| Lac du Bourget - Cap des Séselets | 4 | 15 | 357° N | aucun | pluie | 4.1 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 32 | 342° NNO | aucun | pluie | 7.8 | -2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 32 | 341° NNO | aucun | pluie | 6.0 | -1°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 357° N | 11h-16h | soleil | 0.9 | 6°C |
| La Roche-de-Glun - Base Nautique | 14 | 30 | 351° N | 11h-16h | soleil | 0.3 | 5°C |
| Cruas - Nuclear Spot | 13 | 30 | 354° N | 11h-16h | soleil | 0.3 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 338° NNO | 12h-15h | soleil-couvert | 0.2 | 4°C |
| Nord du Pont de Chavanay | 12 | 27 | 338° NNO | 12h-15h | soleil-couvert | 0.2 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 27 | 333° NNO | 11h-16h | soleil-couvert | 0.6 | 4°C |
| Saint-Cyr-sur-le-Rhône | 13 | 29 | 335° NNO | 11h-15h | soleil-couvert | 0.6 | 4°C |
| Saint-Romain-des-Iles | 15 | 25 | 317° NO | 08h-16h | soleil-couvert | 0.6 | 4°C |
| Nord du Pont d'Arciat | 15 | 25 | 317° NO | 08h-16h | soleil-couvert | 0.6 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 25 | 332° NNO | aucun | pluie | 1.3 | 4°C |
