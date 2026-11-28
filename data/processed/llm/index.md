# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 28/11/2026 15:22 (Europe/Paris)
- Fichiers générés le : 2026-11-28T15:23:26+01:00
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

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 47° NE | 08h-15h | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 17 | 25 | 26° NNE | 08h-14h | couvert | 0.0 | 4°C |
| Plage du Vengeron | 13 | 17 | 44° NE | 09h-13h | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 14 | 18 | 47° NE | 08h-14h | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 300° ONO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 25° NNE | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 186° S | aucun | soleil | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 6 | 142° SE | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 21 | 1° N | 08h-11h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 328° NNO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 13 | 26 | 19° NNE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 9° N | aucun | soleil | 0.0 | 6°C |
| Nord du Pont de Chavanay | 3 | 13 | 357° N | aucun | soleil | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 84° E | aucun | soleil | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 27° NNE | aucun | soleil | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 6 | 35° NE | aucun | soleil | 0.0 | 3°C |
| Nord du Pont d'Arciat | 4 | 6 | 66° ENE | aucun | soleil | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 5 | 68° ENE | aucun | soleil | 0.0 | 4°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 223° SO | aucun | couvert | 0.0 | 4°C |
| Plage d'Excenevex | 4 | 6 | 231° SO | aucun | couvert | 0.0 | 5°C |
| Plage du Vengeron | 2 | 3 | 219° SO | aucun | couvert | 0.0 | 4°C |
| Plage d'Hermance | 3 | 4 | 172° S | aucun | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 352° N | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 184° S | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 10 | 345° NNO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 317° NO | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 10 | 212° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 150° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 3 | 5 | 208° SSO | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 3 | 290° ONO | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 2 | 4 | 346° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 4 | 337° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 231° SO | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 5 | 207° SSO | aucun | couvert | 0.3 | 6°C |
| Nord du Pont d'Arciat | 4 | 7 | 196° SSO | aucun | couvert | 0.4 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 4 | 304° NO | aucun | soleil-couvert | 0.1 | 8°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 43° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 14 | 18 | 25° NNE | 15h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 7 | 9 | 42° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 8 | 12 | 57° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 330° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 15 | 32° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 333° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 5° N | 09h-18h | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 9 | 14 | 12° NNE | aucun | couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 15 | 28 | 18° NNE | 08h-18h | couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 356° N | aucun | couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 8 | 15 | 334° NNO | aucun | couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 336° NNO | aucun | couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 8° N | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 7 | 12 | 8° N | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 7 | 13 | 340° NNO | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 12 | 348° NNO | aucun | couvert | 0.0 | 5°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 47° NE | aucun | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 12 | 15 | 24° NNE | aucun | couvert | 0.0 | 7°C |
| Plage du Vengeron | 8 | 10 | 52° NE | aucun | couvert | 0.0 | 7°C |
| Plage d'Hermance | 7 | 10 | 60° ENE | aucun | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 230° SO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 360° N | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 5 | 200° SSO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 343° NNO | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 11 | 357° N | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 6 | 9 | 337° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 7 | 14 | 20° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 27° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 3 | 6 | 27° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 3 | 360° N | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 2 | 3 | 360° N | aucun | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 7 | 185° S | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 4 | 7 | 185° S | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 2 | 354° N | aucun | couvert | 0.0 | 5°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 209° SSO | aucun | couvert | 0.0 | 4°C |
| Plage d'Excenevex | 2 | 3 | 235° SO | aucun | couvert | 0.0 | 5°C |
| Plage du Vengeron | 2 | 3 | 232° SO | aucun | couvert | 0.0 | 5°C |
| Plage d'Hermance | 2 | 3 | 202° SSO | aucun | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 301° ONO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 85° E | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 186° S | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 8 | 202° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 21 | 199° SSO | 11h-14h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 14 | 24 | 190° S | 11h-14h | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 6 | 15 | 189° S | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 17 | 171° S | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 6 | 17 | 171° S | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 187° S | aucun | couvert | 0.6 | 9°C |
| Saint-Cyr-sur-le-Rhône | 11 | 22 | 187° S | aucun | couvert | 0.3 | 9°C |
| Saint-Romain-des-Iles | 6 | 11 | 201° SSO | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 6 | 11 | 201° SSO | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 178° S | aucun | couvert | 0.0 | 10°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 9° N | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 8 | 9° N | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 5 | 8 | 9° N | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 5 | 8 | 9° N | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 101° E | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 81° E | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 322° NO | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 27° NNE | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 359° N | 10h-20h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 352° N | 10h-20h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 18 | 40 | 2° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 28 | 349° N | 11h-20h | soleil-couvert | 0.3 | 8°C |
| Nord du Pont de Chavanay | 13 | 28 | 349° N | 11h-20h | soleil-couvert | 0.3 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 345° NNO | 10h-20h | soleil-couvert | 0.3 | 8°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 348° NNO | 10h-20h | soleil-couvert | 0.4 | 8°C |
| Saint-Romain-des-Iles | 12 | 22 | 9° N | 11h-20h | soleil-couvert | 0.3 | 8°C |
| Nord du Pont d'Arciat | 12 | 22 | 9° N | 11h-20h | soleil-couvert | 0.3 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 26 | 354° N | 09h-20h | soleil-couvert | 0.0 | 8°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 5 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 5 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 5 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 3 | 85° E | aucun | soleil | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 58° ENE | aucun | soleil | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 3 | 41° NE | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 342° NNO | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 28 | 3° N | 08h-15h | soleil | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 356° N | aucun | soleil | 0.0 | 5°C |
| Cruas - Nuclear Spot | 13 | 29 | 19° NNE | 08h-18h | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 351° N | aucun | soleil | 0.0 | 5°C |
| Nord du Pont de Chavanay | 8 | 19 | 351° N | aucun | soleil | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 19 | 328° NNO | aucun | soleil | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 347° NNO | aucun | soleil | 0.0 | 5°C |
| Saint-Romain-des-Iles | 11 | 21 | 344° NNO | aucun | soleil | 0.0 | 4°C |
| Nord du Pont d'Arciat | 11 | 21 | 344° NNO | aucun | soleil | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 341° NNO | aucun | soleil | 0.0 | 5°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 32° NNE | aucun | soleil | 0.0 | 3°C |
| Plage d'Excenevex | 9 | 15 | 30° NNE | aucun | soleil | 0.0 | 3°C |
| Plage du Vengeron | 9 | 14 | 32° NNE | aucun | soleil | 0.0 | 3°C |
| Plage d'Hermance | 9 | 14 | 32° NNE | aucun | soleil | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 331° NNO | aucun | soleil | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 31° NNE | aucun | soleil | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 325° NO | aucun | soleil | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 27° NNE | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 7° N | aucun | soleil | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 347° NNO | aucun | soleil-couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 9 | 20 | 34° NE | aucun | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 25° NNE | aucun | soleil | 0.0 | 2°C |
| Nord du Pont de Chavanay | 5 | 13 | 25° NNE | aucun | soleil | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 11° N | aucun | soleil-couvert | 0.0 | 1°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 14° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 3 | 5 | 326° NO | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 3 | 5 | 326° NO | aucun | soleil-couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 354° N | aucun | soleil-couvert | 0.0 | 2°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 40° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 5 | 10 | 55° NE | aucun | couvert | 0.0 | 5°C |
| Plage du Vengeron | 4 | 10 | 40° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 4 | 10 | 40° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 53° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 28° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 139° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 150° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 15° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 16° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 4 | 10 | 17° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 5 | 25° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Nord du Pont de Chavanay | 1 | 5 | 25° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 297° ONO | aucun | couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 2 | 5 | 10° N | aucun | soleil-couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 3 | 8 | 134° SE | aucun | soleil-couvert | 0.0 | 1°C |
| Nord du Pont d'Arciat | 3 | 8 | 134° SE | aucun | soleil-couvert | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 218° SO | aucun | couvert | 0.0 | 2°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 245° OSO | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 2 | 5 | 225° SO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 3 | 5 | 245° OSO | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 3 | 5 | 245° OSO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 254° OSO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 198° SSO | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 5° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 8 | 24° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 8° N | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 331° NNO | aucun | couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 4 | 12 | 350° N | aucun | soleil-couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 45° NE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 3 | 9 | 45° NE | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 77° ENE | aucun | couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 37° NE | aucun | couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 2 | 7 | 117° ESE | aucun | couvert | 0.2 | 3°C |
| Nord du Pont d'Arciat | 2 | 7 | 117° ESE | aucun | couvert | 0.2 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 5 | 331° NNO | aucun | couvert | 0.1 | 3°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 206° SSO | aucun | pluie | 2.8 | 7°C |
| Plage d'Excenevex | 8 | 11 | 220° SO | aucun | pluie | 2.1 | 7°C |
| Plage du Vengeron | 8 | 12 | 206° SSO | aucun | pluie | 2.8 | 7°C |
| Plage d'Hermance | 8 | 12 | 206° SSO | aucun | pluie | 2.8 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 122° ESE | aucun | pluie | 3.6 | 3°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 25° NNE | aucun | pluie | 2.4 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 356° N | aucun | soleil-couvert | 0.7 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 21 | 349° N | aucun | soleil-couvert | 0.7 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 358° N | aucun | couvert | 0.1 | 8°C |
| La Roche-de-Glun - Base Nautique | 8 | 15 | 357° N | aucun | couvert | 0.7 | 8°C |
| Cruas - Nuclear Spot | 9 | 21 | 14° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 3° N | aucun | pluie | 2.0 | 7°C |
| Nord du Pont de Chavanay | 4 | 10 | 3° N | aucun | pluie | 2.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 358° N | aucun | pluie | 2.6 | 6°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 353° N | aucun | pluie | 2.0 | 6°C |
| Saint-Romain-des-Iles | 8 | 13 | 324° NO | aucun | pluie | 5.4 | 6°C |
| Nord du Pont d'Arciat | 8 | 13 | 324° NO | aucun | pluie | 5.4 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 343° NNO | aucun | pluie | 2.5 | 5°C |

### mer. 09/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 17 | 169° S | aucun | pluie | 10.9 | 5°C |
| Plage d'Excenevex | 8 | 15 | 198° SSO | aucun | pluie | 10.9 | 4°C |
| Plage du Vengeron | 7 | 17 | 169° S | aucun | pluie | 10.9 | 5°C |
| Plage d'Hermance | 7 | 17 | 169° S | aucun | pluie | 10.9 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 17 | 300° ONO | aucun | pluie | 4.2 | 2°C |
| Lac du Bourget - Cap des Séselets | 3 | 15 | 182° S | aucun | pluie | 3.7 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 28 | 345° NNO | aucun | pluie | 6.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 30 | 346° NNO | aucun | pluie | 6.0 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 355° N | 08h-20h | soleil-couvert | 0.9 | 7°C |
| La Roche-de-Glun - Base Nautique | 15 | 32 | 351° N | 08h-20h | soleil-couvert | 0.9 | 6°C |
| Cruas - Nuclear Spot | 15 | 34 | 357° N | 08h-20h | soleil-couvert | 0.3 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 335° NNO | 09h-20h | pluie | 2.7 | 5°C |
| Nord du Pont de Chavanay | 12 | 27 | 335° NNO | 09h-20h | pluie | 2.7 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 325° NO | 10h-20h | pluie | 1.6 | 5°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 330° NNO | 09h-20h | pluie | 1.6 | 5°C |
| Saint-Romain-des-Iles | 13 | 25 | 318° NO | 08h-20h | pluie | 1.9 | 4°C |
| Nord du Pont d'Arciat | 13 | 25 | 318° NO | 08h-20h | pluie | 1.9 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 26 | 324° NO | 10h-20h | pluie | 1.4 | 5°C |

### jeu. 10/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 21° NNE | aucun | soleil | 0.0 | 3°C |
| Plage d'Excenevex | 13 | 19 | 18° NNE | 08h-20h | soleil | 0.0 | 2°C |
| Plage du Vengeron | 10 | 15 | 21° NNE | aucun | soleil | 0.0 | 3°C |
| Plage d'Hermance | 10 | 15 | 21° NNE | aucun | soleil | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 13° NNE | aucun | soleil-couvert | 0.0 | -2°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 30° NNE | aucun | soleil | 0.0 | 2°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 23 | 349° N | aucun | couvert | 0.0 | -4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 26 | 346° NNO | aucun | couvert | 0.0 | -3°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 4° N | 08h-20h | soleil | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 355° N | 08h-20h | soleil | 0.0 | 3°C |
| Cruas - Nuclear Spot | 15 | 35 | 9° N | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 354° N | 08h-16h | soleil-couvert | 0.0 | 3°C |
| Nord du Pont de Chavanay | 12 | 26 | 354° N | 08h-16h | soleil-couvert | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 351° N | 09h-15h | couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 353° N | 08h-16h | couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 8 | 16 | 357° N | aucun | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 8 | 16 | 357° N | aucun | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 349° N | aucun | soleil-couvert | 0.0 | 2°C |

### ven. 11/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 19° NNE | 08h-15h | soleil-couvert | 0.0 | 1°C |
| Plage d'Excenevex | 13 | 20 | 17° NNE | 08h-14h | soleil-couvert | 0.0 | 0°C |
| Plage du Vengeron | 14 | 21 | 19° NNE | 08h-15h | soleil-couvert | 0.0 | 1°C |
| Plage d'Hermance | 14 | 21 | 19° NNE | 08h-15h | soleil-couvert | 0.0 | 1°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 316° NO | aucun | soleil-couvert | 0.0 | -2°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 23° NNE | aucun | soleil-couvert | 0.0 | 0°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 13 | 67° ENE | aucun | soleil-couvert | 0.0 | -4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 12° NNE | aucun | soleil-couvert | 0.0 | -4°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 26 | 15° NNE | 08h-12h | soleil-couvert | 0.0 | 2°C |
| La Roche-de-Glun - Base Nautique | 8 | 23 | 9° N | aucun | soleil-couvert | 0.0 | 1°C |
| Cruas - Nuclear Spot | 11 | 26 | 21° NNE | 08h-17h | soleil | 0.0 | 2°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 17 | 6° N | aucun | soleil-couvert | 0.0 | 1°C |
| Nord du Pont de Chavanay | 6 | 17 | 6° N | aucun | soleil-couvert | 0.0 | 1°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 14 | 354° N | aucun | soleil-couvert | 0.0 | 0°C |
| Saint-Cyr-sur-le-Rhône | 6 | 17 | 355° N | aucun | soleil-couvert | 0.0 | 1°C |
| Saint-Romain-des-Iles | 7 | 14 | 5° N | aucun | soleil-couvert | 0.0 | 1°C |
| Nord du Pont d'Arciat | 7 | 14 | 5° N | aucun | soleil-couvert | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 358° N | aucun | soleil-couvert | 0.0 | 0°C |

### sam. 12/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 225° SO | aucun | couvert | 0.0 | 1°C |
| Plage d'Excenevex | 3 | 6 | 216° SO | aucun | soleil-couvert | 0.0 | 1°C |
| Plage du Vengeron | 4 | 7 | 225° SO | aucun | couvert | 0.0 | 1°C |
| Plage d'Hermance | 4 | 7 | 225° SO | aucun | couvert | 0.0 | 1°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 281° O | aucun | soleil-couvert | 0.0 | -1°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 21° NNE | aucun | soleil | 0.0 | 1°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 24° NNE | aucun | soleil-couvert | 0.0 | -2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 17° NNE | aucun | soleil-couvert | 0.0 | -2°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 5° N | aucun | soleil | 0.0 | 3°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 358° N | aucun | soleil-couvert | 0.0 | 2°C |
| Cruas - Nuclear Spot | 9 | 21 | 24° NNE | aucun | soleil | 0.0 | 3°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 36° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont de Chavanay | 5 | 13 | 36° NE | aucun | soleil-couvert | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 42° NE | aucun | soleil-couvert | 0.0 | 1°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 2 | 7 | 113° ESE | aucun | soleil-couvert | 0.1 | 2°C |
| Nord du Pont d'Arciat | 2 | 7 | 113° ESE | aucun | soleil-couvert | 0.1 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 220° SO | aucun | soleil-couvert | 0.0 | 1°C |
