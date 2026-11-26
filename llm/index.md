# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 26/11/2026 16:29 (Europe/Paris)
- Fichiers générés le : 2026-11-26T16:32:20+01:00
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
| Plage de la pointe - Messery | 13 | 17 | 45° NE | 10h-15h | pluie | 1.0 | 6°C |
| Plage d'Excenevex | 13 | 19 | 19° NNE | 16h-20h | couvert | 0.0 | 6°C |
| Plage du Vengeron | 11 | 15 | 45° NE | aucun | couvert | 0.4 | 7°C |
| Plage d'Hermance | 11 | 14 | 46° NE | 17h-20h | couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 17 | 310° NO | aucun | pluie | 1.1 | 8°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 26° NNE | aucun | pluie | 4.1 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 30 | 348° NNO | 08h-20h | pluie | 1.1 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 17 | 29 | 1° N | 08h-20h | pluie | 1.3 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 13° NNE | 10h-20h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 20° NNE | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 13 | 26 | 20° NNE | 11h-20h | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 344° NNO | aucun | couvert | 0.4 | 9°C |
| Nord du Pont de Chavanay | 8 | 15 | 25° NNE | aucun | couvert | 0.4 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 35° NE | aucun | pluie | 1.1 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 35° NE | aucun | pluie | 1.3 | 8°C |
| Saint-Romain-des-Iles | 7 | 11 | 24° NNE | aucun | pluie | 3.3 | 6°C |
| Nord du Pont d'Arciat | 7 | 10 | 5° N | aucun | pluie | 1.3 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 10 | 343° NNO | aucun | pluie | 1.4 | 8°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 44° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 11 | 16 | 26° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 6 | 8 | 58° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 8 | 11 | 65° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 8 | 339° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 5° N | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 21 | 360° N | 11h-17h | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 19 | 345° NNO | 13h-16h | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 25 | 12° NNE | 08h-20h | couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 10° N | aucun | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 18 | 34 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 20 | 25° NNE | 10h-15h | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 11 | 18 | 28° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 8° N | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 26° NNE | aucun | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 7 | 53° NE | aucun | couvert | 0.2 | 4°C |
| Nord du Pont d'Arciat | 5 | 8 | 53° NE | aucun | couvert | 0.3 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 4° N | aucun | couvert | 0.0 | 5°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 62° ENE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 15 | 21 | 31° NNE | 08h-12h | couvert | 0.0 | 4°C |
| Plage du Vengeron | 11 | 15 | 51° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 10 | 15 | 54° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 324° NO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 348° NNO | aucun | soleil | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 200° SSO | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 195° SSO | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 3° N | 08h-12h | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 344° NNO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 14 | 29 | 23° NNE | 08h-12h | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 13° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 7 | 13 | 27° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 4 | 349° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 4 | 7 | 59° ENE | aucun | soleil-couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 5 | 8 | 41° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 4° N | aucun | soleil-couvert | 0.0 | 3°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 219° SO | aucun | couvert | 0.0 | 4°C |
| Plage d'Excenevex | 3 | 4 | 223° SO | aucun | couvert | 0.0 | 4°C |
| Plage du Vengeron | 2 | 2 | 210° SSO | aucun | couvert | 0.0 | 4°C |
| Plage d'Hermance | 3 | 4 | 163° SSE | aucun | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 360° N | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 86° E | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 175° S | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 217° SO | aucun | couvert | 0.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 10 | 3° N | aucun | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 7 | 9 | 332° NNO | aucun | couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 6 | 10 | 7° N | aucun | couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 5 | 41° NE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 4 | 5 | 41° NE | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 5 | 360° N | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 5 | 360° N | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 3 | 3 | 37° NE | aucun | couvert | 0.3 | 4°C |
| Nord du Pont d'Arciat | 3 | 3 | 37° NE | aucun | couvert | 0.3 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 1 | 320° NO | aucun | couvert | 0.0 | 5°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 39° NE | aucun | soleil-couvert | 0.1 | 8°C |
| Plage d'Excenevex | 14 | 19 | 25° NNE | 16h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 8 | 10 | 40° NE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 7 | 11 | 48° NE | aucun | soleil-couvert | 0.1 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 304° NO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 7 | 9 | 339° NNO | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 29° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 344° NNO | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 21 | 5° N | 08h-18h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 358° N | 13h-16h | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 14 | 27 | 14° NNE | 08h-16h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 16 | 19° NNE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 10 | 16 | 19° NNE | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 17 | 347° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 349° N | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 8 | 12 | 10° N | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 8 | 12 | 10° N | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 338° NNO | aucun | couvert | 0.0 | 7°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 8 | 11 | 33° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 4 | 7 | 56° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 5 | 8 | 76° ENE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 101° E | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 119° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 184° S | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 6° N | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 335° NNO | aucun | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 6 | 14 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 14° NNE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 4 | 10 | 14° NNE | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 40° NE | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 3° N | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 3 | 6 | 108° ESE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 6 | 108° ESE | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 357° N | aucun | couvert | 0.0 | 7°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 265° O | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 4 | 7 | 265° O | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 4 | 7 | 265° O | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 4 | 7 | 265° O | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 109° ESE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 113° ESE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 135° SE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 212° SSO | aucun | couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 6 | 10° N | aucun | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 3 | 6 | 337° NNO | aucun | couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 3 | 8 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 357° N | aucun | couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 2 | 7 | 357° N | aucun | couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 156° SSE | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 344° NNO | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 3 | 8 | 134° SE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 3 | 8 | 134° SE | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 174° S | aucun | couvert | 0.0 | 4°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 30° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 8 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 12 | 30° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 9 | 12 | 30° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 332° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 337° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 21 | 328° NNO | aucun | soleil-couvert | 0.3 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 22 | 354° N | aucun | soleil-couvert | 0.3 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 5° N | aucun | soleil-couvert | 0.6 | 8°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 355° N | aucun | soleil | 0.6 | 8°C |
| Cruas - Nuclear Spot | 8 | 20 | 29° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 29° NNE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 5 | 13 | 29° NNE | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 8° N | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 19° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 8 | 17° NNE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 4 | 8 | 17° NNE | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 342° NNO | aucun | soleil-couvert | 0.0 | 7°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 34° NE | 17h-20h | soleil | 0.0 | 5°C |
| Plage d'Excenevex | 10 | 15 | 23° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 10 | 15 | 34° NE | 17h-20h | soleil | 0.0 | 5°C |
| Plage d'Hermance | 10 | 15 | 34° NE | 17h-20h | soleil | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 331° NNO | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 37° NE | aucun | soleil | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 35° NE | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 17° NNE | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 5° N | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 346° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 8 | 18 | 37° NE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 37° NE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 4 | 11 | 37° NE | aucun | couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 347° NNO | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 24° NNE | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 4 | 9 | 356° N | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 4 | 9 | 356° N | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 323° NO | aucun | soleil-couvert | 0.0 | 4°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 13 | 39° NE | aucun | soleil | 0.0 | 4°C |
| Plage d'Excenevex | 7 | 13 | 39° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 6 | 13 | 39° NE | aucun | soleil | 0.0 | 4°C |
| Plage d'Hermance | 6 | 13 | 39° NE | aucun | soleil | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 308° NO | aucun | soleil | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 30° NNE | aucun | soleil | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 41° NE | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 4 | 175° S | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 6° N | aucun | soleil | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 346° NNO | aucun | soleil | 0.0 | 5°C |
| Cruas - Nuclear Spot | 8 | 18 | 32° NNE | aucun | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 24° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 5 | 13 | 24° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 343° NNO | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 17° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 4 | 9 | 14° NNE | aucun | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 4 | 9 | 14° NNE | aucun | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 353° N | aucun | soleil-couvert | 0.0 | 4°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 23° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 15 | 20 | 23° NNE | 17h-20h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 13 | 17 | 23° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 13 | 17 | 23° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 270° O | aucun | couvert | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 202° SSO | aucun | couvert | 0.0 | 2°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 23 | 358° N | aucun | couvert | 0.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 23 | 347° NNO | aucun | couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 14° NNE | 08h-20h | soleil-couvert | 0.0 | 3°C |
| La Roche-de-Glun - Base Nautique | 14 | 30 | 3° N | 11h-20h | soleil-couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 14 | 38 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 348° NNO | 13h-20h | couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 12 | 26 | 348° NNO | 13h-20h | couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 338° NNO | 15h-20h | couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 341° NNO | 14h-20h | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 9 | 16 | 330° NNO | aucun | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 9 | 16 | 330° NNO | aucun | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 24 | 344° NNO | 16h-20h | soleil-couvert | 0.0 | 2°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 21 | 24° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 15 | 21 | 29° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 13 | 21 | 24° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 13 | 21 | 24° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 26 | 15° NNE | 11h-16h | soleil-couvert | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 9 | 24 | 27° NNE | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 6° N | aucun | couvert | 0.0 | -1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 356° N | aucun | couvert | 0.0 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 38 | 1° N | 08h-20h | couvert | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 17 | 35 | 356° N | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 15 | 35 | 12° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 31 | 345° NNO | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 13 | 31 | 345° NNO | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 30 | 345° NNO | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 13 | 30 | 343° NNO | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 11 | 19 | 357° N | 10h-15h | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 11 | 19 | 357° N | 10h-15h | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 28 | 346° NNO | 08h-20h | soleil-couvert | 0.0 | 5°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 21 | 33° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 9 | 21 | 27° NNE | aucun | couvert | 0.0 | 4°C |
| Plage du Vengeron | 10 | 21 | 33° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 10 | 21 | 33° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 304° NO | aucun | soleil-couvert | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 243° OSO | aucun | soleil-couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 7° N | aucun | couvert | 0.0 | -2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 357° N | aucun | couvert | 0.0 | -2°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 11° N | 08h-20h | soleil-couvert | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 7° N | 08h-20h | couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 14 | 31 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 354° N | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 9 | 21 | 354° N | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 346° NNO | aucun | couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 349° N | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 8 | 13 | 325° NO | aucun | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 8 | 13 | 325° NO | aucun | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 348° NNO | aucun | couvert | 0.0 | 4°C |

### mer. 09/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 16 | 18° NNE | aucun | pluie | 1.8 | 5°C |
| Plage d'Excenevex | 16 | 20 | 19° NNE | 17h-20h | soleil-couvert | 0.3 | 6°C |
| Plage du Vengeron | 13 | 16 | 18° NNE | aucun | pluie | 1.8 | 5°C |
| Plage d'Hermance | 13 | 16 | 18° NNE | aucun | pluie | 1.8 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 16 | 13° NNE | aucun | couvert | 0.6 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 11 | 31° NNE | aucun | soleil-couvert | 0.6 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 22 | 356° N | aucun | pluie | 2.4 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 26 | 334° NNO | aucun | pluie | 2.4 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 32 | 3° N | 16h-20h | couvert | 0.4 | 5°C |
| La Roche-de-Glun - Base Nautique | 14 | 30 | 356° N | 15h-20h | couvert | 0.5 | 5°C |
| Cruas - Nuclear Spot | 12 | 27 | 9° N | 17h-20h | couvert | 0.3 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 352° N | 17h-20h | couvert | 0.3 | 5°C |
| Nord du Pont de Chavanay | 12 | 28 | 352° N | 17h-20h | couvert | 0.3 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 348° NNO | aucun | pluie | 1.8 | 4°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 349° N | 17h-20h | couvert | 0.3 | 4°C |
| Saint-Romain-des-Iles | 11 | 20 | 11° N | aucun | pluie | 2.4 | 5°C |
| Nord du Pont d'Arciat | 11 | 20 | 11° N | aucun | pluie | 2.4 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 357° N | aucun | pluie | 3.0 | 4°C |

### jeu. 10/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 17 | 38° NE | aucun | soleil | 0.0 | 4°C |
| Plage d'Excenevex | 8 | 18 | 29° NNE | aucun | soleil | 0.0 | 3°C |
| Plage du Vengeron | 8 | 17 | 38° NE | aucun | soleil | 0.0 | 4°C |
| Plage d'Hermance | 8 | 17 | 38° NE | aucun | soleil | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 315° NO | aucun | soleil | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 344° NNO | aucun | soleil | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 15 | 15° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 29 | 13° NNE | 08h-11h | soleil | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 9 | 23 | 12° NNE | aucun | soleil | 0.0 | 4°C |
| Cruas - Nuclear Spot | 11 | 35 | 18° NNE | 08h-13h | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 12° NNE | aucun | soleil | 0.0 | 4°C |
| Nord du Pont de Chavanay | 6 | 16 | 12° NNE | aucun | soleil | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 13 | 359° N | aucun | soleil | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 359° N | aucun | soleil | 0.0 | 4°C |
| Saint-Romain-des-Iles | 4 | 10 | 2° N | aucun | soleil | 0.0 | 4°C |
| Nord du Pont d'Arciat | 4 | 10 | 2° N | aucun | soleil | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 18 | 353° N | aucun | soleil-couvert | 0.0 | 3°C |
