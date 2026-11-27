# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 27/11/2026 02:03 (Europe/Paris)
- Fichiers générés le : 2026-11-27T02:04:46+01:00
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
| Plage de la pointe - Messery | 11 | 15 | 37° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 12 | 18 | 27° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 6 | 8 | 59° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 9 | 12 | 62° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 7 | 348° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 11° N | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 21 | 360° N | 11h-18h | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 351° N | 13h-16h | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 24 | 13° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 12° NNE | aucun | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 18 | 34 | 17° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 20 | 26° NNE | 11h-16h | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 11 | 18 | 24° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 7° N | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 20° NNE | aucun | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 7 | 39° NE | aucun | couvert | 0.3 | 4°C |
| Nord du Pont d'Arciat | 5 | 7 | 42° NE | aucun | couvert | 0.3 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 358° N | aucun | couvert | 0.0 | 6°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 61° ENE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 16 | 21 | 29° NNE | 08h-13h | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 11 | 15 | 49° NE | 08h-11h | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 10 | 15 | 50° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 319° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 9 | 352° N | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 174° S | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 191° S | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 11° N | 08h-12h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 338° NNO | aucun | soleil | 0.0 | 7°C |
| Cruas - Nuclear Spot | 12 | 24 | 24° NNE | 08h-11h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 7° N | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 6 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 5 | 351° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 31° NNE | aucun | soleil | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 5 | 51° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 4 | 6 | 59° ENE | aucun | soleil-couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 45° NE | aucun | soleil | 0.0 | 4°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 3 | 218° SO | aucun | couvert | 0.0 | 4°C |
| Plage d'Excenevex | 4 | 5 | 227° SO | aucun | couvert | 0.0 | 4°C |
| Plage du Vengeron | 2 | 3 | 180° S | aucun | couvert | 0.0 | 4°C |
| Plage d'Hermance | 3 | 4 | 163° SSE | aucun | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 6° N | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 148° SSE | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 45° NE | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 6 | 207° SSO | aucun | couvert | 0.1 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 5 | 14° NNE | aucun | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 4 | 6 | 338° NNO | aucun | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 5 | 8 | 4° N | aucun | couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 2 | 49° NE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 2 | 2 | 49° NE | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 3 | 10° N | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 2 | 3 | 10° N | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 2 | 30° NNE | aucun | couvert | 0.2 | 5°C |
| Nord du Pont d'Arciat | 2 | 2 | 30° NNE | aucun | couvert | 0.2 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 1 | 79° E | aucun | couvert | 0.0 | 6°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 39° NE | 16h-19h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 14 | 19 | 27° NNE | 16h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 10 | 13 | 28° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 10 | 14 | 43° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 286° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 319° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 37° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 329° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 353° N | 08h-18h | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 10 | 15 | 343° NNO | aucun | couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 12 | 23 | 16° NNE | 08h-17h | couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 29° NNE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 8 | 13 | 29° NNE | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 26° NNE | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 26° NNE | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 7 | 11 | 7° N | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 7 | 11 | 7° N | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 18° NNE | aucun | couvert | 0.0 | 4°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 51° NE | aucun | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 11 | 15 | 24° NNE | aucun | couvert | 0.0 | 7°C |
| Plage du Vengeron | 8 | 10 | 58° ENE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 8 | 12 | 65° ENE | aucun | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 319° NO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 3° N | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 5 | 131° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 342° NNO | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 2° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 337° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 8 | 18 | 25° NNE | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 4 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 351° N | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 12° NNE | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 6 | 125° SE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 6 | 125° SE | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 343° NNO | aucun | couvert | 0.0 | 7°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 342° NNO | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 4 | 7 | 342° NNO | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 4 | 7 | 342° NNO | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 4 | 7 | 342° NNO | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 113° ESE | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 117° ESE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 137° SE | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 227° SO | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 18 | 189° S | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 188° S | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 5 | 13 | 197° SSO | aucun | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 172° S | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 7 | 17 | 172° S | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 180° S | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 176° S | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 5 | 9 | 164° SSE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 5 | 9 | 164° SSE | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 181° S | aucun | couvert | 0.0 | 9°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 290° ONO | aucun | pluie | 1.8 | 7°C |
| Plage d'Excenevex | 4 | 6 | 290° ONO | aucun | pluie | 1.8 | 7°C |
| Plage du Vengeron | 4 | 6 | 290° ONO | aucun | pluie | 1.8 | 7°C |
| Plage d'Hermance | 4 | 6 | 290° ONO | aucun | pluie | 1.8 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 117° ESE | aucun | pluie | 1.2 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 122° ESE | aucun | pluie | 2.4 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 132° SE | aucun | couvert | 0.3 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 221° SO | aucun | couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 33 | 354° N | 10h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 17 | 34 | 346° NNO | 13h-20h | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 17 | 37 | 4° N | 11h-20h | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 30 | 343° NNO | 15h-20h | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 14 | 30 | 343° NNO | 15h-20h | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 347° NNO | 16h-20h | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 341° NNO | 15h-20h | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 10 | 18 | 1° N | aucun | couvert | 0.6 | 6°C |
| Nord du Pont d'Arciat | 10 | 18 | 1° N | aucun | couvert | 0.6 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 349° N | 17h-20h | soleil | 0.0 | 7°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 22 | 31° NNE | 08h-20h | soleil-couvert | 0.1 | 6°C |
| Plage d'Excenevex | 15 | 24 | 26° NNE | 08h-20h | pluie | 1.9 | 5°C |
| Plage du Vengeron | 14 | 22 | 31° NNE | 08h-20h | soleil-couvert | 0.1 | 6°C |
| Plage d'Hermance | 14 | 22 | 31° NNE | 08h-20h | soleil-couvert | 0.1 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 25 | 15° NNE | 11h-15h | soleil | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 9 | 24 | 31° NNE | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 347° NNO | aucun | couvert | 0.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 23 | 343° NNO | aucun | couvert | 0.0 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 40 | 5° N | 08h-20h | soleil-couvert | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 17 | 35 | 360° N | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 18 | 41 | 13° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 32 | 348° NNO | 08h-20h | couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 14 | 32 | 348° NNO | 08h-20h | couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 31 | 349° N | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 14 | 32 | 346° NNO | 08h-20h | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 13 | 24 | 8° N | 08h-18h | soleil-couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 13 | 24 | 8° N | 08h-18h | soleil-couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 30 | 360° N | 08h-20h | soleil-couvert | 0.0 | 5°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 27 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 3°C |
| Plage d'Excenevex | 21 | 30 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 19 | 27 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 3°C |
| Plage d'Hermance | 19 | 27 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 14° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 8 | 21 | 22° NNE | aucun | couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 16 | 348° NNO | aucun | couvert | 0.0 | -2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 17 | 346° NNO | aucun | couvert | 0.0 | -1°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 35 | 359° N | 08h-20h | couvert | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 354° N | 08h-20h | couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 16 | 35 | 16° NNE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 346° NNO | 08h-18h | couvert | 0.0 | 2°C |
| Nord du Pont de Chavanay | 12 | 26 | 346° NNO | 08h-18h | couvert | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 25 | 346° NNO | 08h-18h | couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 344° NNO | 08h-20h | couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 14 | 26 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 14 | 26 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 26 | 6° N | 08h-18h | soleil-couvert | 0.0 | 4°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 24 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 1°C |
| Plage d'Excenevex | 14 | 24 | 30° NNE | 08h-20h | couvert | 0.0 | 2°C |
| Plage du Vengeron | 14 | 24 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 1°C |
| Plage d'Hermance | 14 | 24 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 1°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 320° NO | aucun | soleil-couvert | 0.0 | 0°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 36° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 358° N | aucun | soleil-couvert | 0.0 | -1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 345° NNO | aucun | soleil-couvert | 0.0 | -1°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 5° N | 08h-20h | soleil-couvert | 0.0 | 3°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 358° N | 08h-16h | soleil-couvert | 0.0 | 2°C |
| Cruas - Nuclear Spot | 12 | 28 | 17° NNE | 08h-20h | soleil-couvert | 0.0 | 3°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 347° NNO | aucun | couvert | 0.0 | 2°C |
| Nord du Pont de Chavanay | 8 | 18 | 347° NNO | aucun | couvert | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 340° NNO | aucun | couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 340° NNO | aucun | couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 9 | 18 | 357° N | aucun | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 9 | 18 | 357° N | aucun | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 341° NNO | aucun | couvert | 0.0 | 3°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 29° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Plage d'Excenevex | 11 | 16 | 19° NNE | 16h-20h | soleil-couvert | 0.0 | 2°C |
| Plage du Vengeron | 10 | 14 | 29° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Plage d'Hermance | 10 | 14 | 29° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 323° NO | aucun | soleil-couvert | 0.0 | 0°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 5° N | aucun | soleil-couvert | 0.0 | -1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 355° N | aucun | couvert | 0.0 | -1°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 26 | 7° N | 09h-20h | couvert | 0.0 | 2°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 2° N | aucun | soleil-couvert | 0.0 | 2°C |
| Cruas - Nuclear Spot | 12 | 28 | 18° NNE | 08h-20h | soleil | 0.0 | 2°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 357° N | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont de Chavanay | 7 | 17 | 357° N | aucun | soleil-couvert | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 344° NNO | aucun | couvert | 0.0 | 1°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 350° N | aucun | couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 6 | 12 | 349° N | aucun | couvert | 0.0 | 1°C |
| Nord du Pont d'Arciat | 6 | 12 | 349° N | aucun | couvert | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 326° NO | aucun | soleil-couvert | 0.0 | 1°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 15 | 39° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Plage d'Excenevex | 9 | 15 | 28° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Plage du Vengeron | 9 | 15 | 39° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Plage d'Hermance | 9 | 15 | 39° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 320° NO | aucun | soleil | 0.0 | 0°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 29° NNE | aucun | couvert | 0.0 | 0°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 323° NO | aucun | soleil-couvert | 0.0 | -1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 286° ONO | aucun | soleil-couvert | 0.0 | -2°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 29 | 8° N | 08h-20h | soleil-couvert | 0.0 | 1°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 5° N | 10h-17h | soleil-couvert | 0.0 | 1°C |
| Cruas - Nuclear Spot | 14 | 30 | 19° NNE | 08h-20h | soleil | 0.0 | 2°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 10° N | aucun | soleil-couvert | 0.0 | 1°C |
| Nord du Pont de Chavanay | 8 | 18 | 10° N | aucun | soleil-couvert | 0.0 | 1°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 346° NNO | aucun | couvert | 0.0 | 0°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 356° N | aucun | soleil-couvert | 0.0 | 1°C |
| Saint-Romain-des-Iles | 7 | 12 | 350° N | aucun | couvert | 0.0 | 0°C |
| Nord du Pont d'Arciat | 7 | 12 | 350° N | aucun | couvert | 0.0 | 0°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 336° NNO | aucun | couvert | 0.0 | 0°C |

### mer. 09/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 24° NNE | 15h-20h | soleil | 0.0 | 3°C |
| Plage d'Excenevex | 13 | 19 | 21° NNE | 14h-20h | soleil | 0.0 | 3°C |
| Plage du Vengeron | 16 | 22 | 24° NNE | 15h-20h | soleil | 0.0 | 3°C |
| Plage d'Hermance | 16 | 22 | 24° NNE | 15h-20h | soleil | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 308° NO | aucun | soleil | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 218° SO | aucun | soleil-couvert | 0.0 | 0°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 13 | 354° N | aucun | soleil-couvert | 0.0 | -1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 214° SO | aucun | couvert | 0.0 | -1°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 12° NNE | 08h-20h | soleil-couvert | 0.0 | 1°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 7° N | 08h-20h | soleil-couvert | 0.0 | 1°C |
| Cruas - Nuclear Spot | 16 | 35 | 16° NNE | 08h-20h | soleil | 0.0 | 2°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 7° N | aucun | soleil | 0.0 | 2°C |
| Nord du Pont de Chavanay | 10 | 22 | 7° N | aucun | soleil | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 356° N | aucun | soleil-couvert | 0.0 | 0°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 357° N | aucun | soleil | 0.0 | 1°C |
| Saint-Romain-des-Iles | 8 | 15 | 351° N | aucun | soleil | 0.0 | 1°C |
| Nord du Pont d'Arciat | 8 | 15 | 351° N | aucun | soleil | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 348° NNO | aucun | soleil-couvert | 0.0 | 0°C |

### jeu. 10/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 23 | 27° NNE | 08h-20h | soleil | 0.0 | 2°C |
| Plage d'Excenevex | 14 | 21 | 24° NNE | 08h-20h | soleil-couvert | 0.0 | 1°C |
| Plage du Vengeron | 14 | 23 | 27° NNE | 08h-20h | soleil | 0.0 | 2°C |
| Plage d'Hermance | 14 | 23 | 27° NNE | 08h-20h | soleil | 0.0 | 2°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 333° NNO | aucun | soleil | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 37° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 207° SSO | aucun | soleil-couvert | 0.0 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 27 | 8° N | 08h-16h | soleil-couvert | 0.0 | 1°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 355° N | aucun | soleil-couvert | 0.0 | 1°C |
| Cruas - Nuclear Spot | 14 | 32 | 19° NNE | 08h-18h | soleil | 0.0 | 2°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 16 | 10° N | aucun | soleil-couvert | 0.0 | 1°C |
| Nord du Pont de Chavanay | 8 | 16 | 10° N | aucun | soleil-couvert | 0.0 | 1°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 337° NNO | aucun | soleil-couvert | 0.0 | 0°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 355° N | aucun | soleil-couvert | 0.0 | 0°C |
| Saint-Romain-des-Iles | 7 | 14 | 343° NNO | aucun | soleil-couvert | 0.0 | 1°C |
| Nord du Pont d'Arciat | 7 | 14 | 343° NNO | aucun | soleil-couvert | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 332° NNO | aucun | soleil-couvert | 0.0 | 0°C |

### ven. 11/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 34° NE | 08h-13h | soleil-couvert | 0.0 |  |
| Plage d'Excenevex | 11 | 17 | 23° NNE | 08h-11h | soleil-couvert | 0.0 |  |
| Plage du Vengeron | 11 | 18 | 34° NE | 08h-13h | soleil-couvert | 0.0 |  |
| Plage d'Hermance | 11 | 18 | 34° NE | 08h-13h | soleil-couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 335° NNO | aucun | soleil | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 38° NE | aucun | soleil | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 48° NE | aucun | soleil | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 159° SSE | aucun | soleil | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 5° N | aucun | soleil | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 344° NNO | aucun | soleil | 0.0 |  |
| Cruas - Nuclear Spot | 8 | 18 | 36° NE | aucun | soleil | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 30° NNE | aucun | soleil | 0.0 |  |
| Nord du Pont de Chavanay | 4 | 10 | 30° NNE | aucun | soleil | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 18° NNE | aucun | soleil-couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 22° NNE | aucun | soleil | 0.0 |  |
| Saint-Romain-des-Iles | 2 | 7 | 7° N | aucun | soleil | 0.0 |  |
| Nord du Pont d'Arciat | 2 | 7 | 7° N | aucun | soleil | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 28° NNE | aucun | soleil | 0.0 |  |
