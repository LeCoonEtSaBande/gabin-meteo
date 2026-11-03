# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 03/11/2026 23:23 (Europe/Paris)
- Fichiers générés le : 2026-11-03T23:27:47+01:00
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

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 36° NE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 17 | 25 | 24° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 18 | 23 | 34° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 17 | 23 | 36° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 18 | 333° NNO | 15h-19h | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 13 | 18 | 356° N | 16h-20h | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 9° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 18 | 346° NNO | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 6° N | 13h-17h | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 348° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 12 | 25 | 23° NNE | 09h-16h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 14 | 8° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 8 | 13 | 17° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 333° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 15° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 7 | 13 | 25° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 8 | 13 | 10° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 348° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 23 | 43° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 16 | 23 | 33° NNE | 08h-14h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 14 | 19 | 40° NE | 08h-14h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 16 | 22 | 40° NE | 08h-20h | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 326° NO | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 10 | 15 | 9° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 203° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 333° NNO | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 21° NNE | aucun | pluie | 2.9 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 338° NNO | aucun | pluie | 2.6 | 9°C |
| Cruas - Nuclear Spot | 12 | 24 | 22° NNE | 15h-18h | couvert | 0.1 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 357° N | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 10 | 29° NNE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 9° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 20° NNE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 5 | 5 | 347° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 10 | 32° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 13° NNE | aucun | soleil-couvert | 0.0 | 8°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 66° ENE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 13 | 18 | 37° NE | 17h-20h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 8 | 10 | 22° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 8 | 12 | 79° E | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 352° N | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 336° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 234° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 345° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 9 | 9° N | aucun | pluie | 0.9 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 14 | 335° NNO | aucun | pluie | 0.8 | 12°C |
| Cruas - Nuclear Spot | 8 | 16 | 32° NNE | aucun | pluie | 1.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 15 | 357° N | aucun | pluie | 0.6 | 12°C |
| Nord du Pont de Chavanay | 4 | 15 | 357° N | aucun | pluie | 0.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 4 | 360° N | aucun | pluie | 0.7 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 50° NE | aucun | pluie | 0.7 | 11°C |
| Saint-Romain-des-Iles | 2 | 5 | 51° NE | aucun | couvert | 0.8 | 11°C |
| Nord du Pont d'Arciat | 2 | 7 | 32° NNE | aucun | couvert | 0.7 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 63° ENE | aucun | pluie | 0.8 | 10°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 217° SO | aucun | couvert | 0.8 | 11°C |
| Plage d'Excenevex | 5 | 6 | 255° OSO | aucun | pluie | 1.2 | 11°C |
| Plage du Vengeron | 4 | 5 | 202° SSO | aucun | couvert | 0.7 | 12°C |
| Plage d'Hermance | 5 | 8 | 225° SO | aucun | pluie | 1.1 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 349° N | aucun | pluie | 2.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 49° NE | aucun | orage | 7.5 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 195° SSO | aucun | pluie | 4.7 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 169° S | aucun | pluie | 3.8 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 8 | 17° NNE | aucun | orage | 6.5 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 7 | 334° NNO | aucun | orage | 8.0 | 10°C |
| Cruas - Nuclear Spot | 6 | 9 | 10° N | aucun | pluie | 6.8 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 5 | 24° NNE | aucun | pluie | 5.8 | 9°C |
| Nord du Pont de Chavanay | 3 | 5 | 24° NNE | aucun | pluie | 5.8 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 4 | 18° NNE | aucun | pluie | 4.7 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 4 | 18° NNE | aucun | pluie | 4.7 | 9°C |
| Saint-Romain-des-Iles | 3 | 7 | 69° ENE | aucun | pluie | 3.5 | 8°C |
| Nord du Pont d'Arciat | 3 | 7 | 69° ENE | aucun | pluie | 3.5 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 119° ESE | aucun | pluie | 3.1 | 8°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 58° ENE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 2 | 4 | 184° S | aucun | soleil | 0.0 | 11°C |
| Plage du Vengeron | 3 | 4 | 45° NE | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 3 | 4 | 74° ENE | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 309° NO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 45° NE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 187° S | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 347° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 7 | 47° NE | aucun | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 4 | 5 | 158° SSE | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 6 | 10 | 17° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 171° S | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 8 | 171° S | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 67° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 67° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 7 | 145° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 7 | 145° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 163° SSE | aucun | couvert | 0.0 | 9°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 360° N | aucun | couvert | 0.4 | 10°C |
| Plage d'Excenevex | 5 | 8 | 360° N | aucun | couvert | 0.8 | 10°C |
| Plage du Vengeron | 5 | 8 | 360° N | aucun | couvert | 0.8 | 10°C |
| Plage d'Hermance | 5 | 8 | 360° N | aucun | couvert | 0.9 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 338° NNO | aucun | pluie | 1.9 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 22° NNE | aucun | pluie | 1.8 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 31 | 171° S | 10h-20h | pluie | 1.8 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 159° SSE | aucun | pluie | 2.3 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 14 | 213° SSO | aucun | pluie | 2.4 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 207° SSO | aucun | pluie | 1.5 | 11°C |
| Cruas - Nuclear Spot | 8 | 18 | 187° S | aucun | pluie | 5.1 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 29 | 179° S | 10h-20h | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 13 | 29 | 179° S | 10h-20h | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 180° S | 12h-20h | couvert | 0.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 14 | 32 | 178° S | 10h-20h | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 10 | 17 | 177° S | aucun | couvert | 0.6 | 12°C |
| Nord du Pont d'Arciat | 10 | 17 | 177° S | aucun | couvert | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 170° S | aucun | pluie | 1.8 | 13°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 360° N | aucun | pluie | 7.3 | 11°C |
| Plage d'Excenevex | 5 | 8 | 360° N | aucun | pluie | 7.3 | 11°C |
| Plage du Vengeron | 5 | 8 | 360° N | aucun | pluie | 7.3 | 11°C |
| Plage d'Hermance | 5 | 8 | 360° N | aucun | pluie | 7.3 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 121° ESE | aucun | pluie | 1.5 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 248° OSO | aucun | pluie | 1.5 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 22 | 157° SSE | aucun | pluie | 2.5 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 16 | 168° SSE | aucun | pluie | 1.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 210° SSO | aucun | couvert | 0.9 | 15°C |
| La Roche-de-Glun - Base Nautique | 11 | 21 | 213° SSO | aucun | couvert | 0.3 | 15°C |
| Cruas - Nuclear Spot | 6 | 21 | 208° SSO | aucun | pluie | 2.5 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 28 | 184° S | 08h-18h | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 13 | 28 | 184° S | 08h-18h | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 32 | 176° S | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 14 | 31 | 175° S | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 13 | 24 | 167° SSE | 08h-16h | pluie | 1.2 | 16°C |
| Nord du Pont d'Arciat | 13 | 24 | 167° SSE | 08h-16h | pluie | 1.2 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 178° S | aucun | soleil-couvert | 0.0 | 16°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 13° NNE | aucun | orage | 20.1 | 11°C |
| Plage d'Excenevex | 5 | 8 | 13° NNE | aucun | orage | 20.1 | 11°C |
| Plage du Vengeron | 5 | 8 | 13° NNE | aucun | orage | 20.1 | 11°C |
| Plage d'Hermance | 5 | 8 | 13° NNE | aucun | orage | 20.1 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 111° ESE | aucun | pluie | 6.6 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 9 | 21° NNE | aucun | couvert | 0.1 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 26 | 163° SSE | 17h-20h | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 18 | 175° S | aucun | pluie | 9.6 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 26 | 193° SSO | 17h-20h | pluie | 1.3 | 18°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 193° SSO | 15h-20h | pluie | 1.1 | 18°C |
| Cruas - Nuclear Spot | 7 | 24 | 187° S | aucun | pluie | 4.1 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 183° S | 15h-20h | soleil-couvert | 0.1 | 18°C |
| Nord du Pont de Chavanay | 12 | 28 | 183° S | 15h-20h | soleil-couvert | 0.1 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 34 | 175° S | 08h-20h | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 15 | 33 | 174° S | 08h-20h | couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 11 | 22 | 172° S | 14h-20h | couvert | 0.6 | 16°C |
| Nord du Pont d'Arciat | 11 | 22 | 172° S | 14h-20h | couvert | 0.6 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 173° S | aucun | couvert | 0.6 | 18°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 4 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 4 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 279° O | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 14° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 27 | 160° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 26 | 154° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 230° SO | aucun | pluie | 5.4 | 17°C |
| La Roche-de-Glun - Base Nautique | 10 | 24 | 221° SO | 13h-18h | pluie | 1.5 | 17°C |
| Cruas - Nuclear Spot | 7 | 23 | 193° SSO | aucun | pluie | 7.3 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 190° S | aucun | pluie | 3.6 | 18°C |
| Nord du Pont de Chavanay | 10 | 24 | 190° S | aucun | pluie | 3.6 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 27 | 180° S | 16h-20h | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 179° S | 17h-20h | soleil-couvert | 0.3 | 18°C |
| Saint-Romain-des-Iles | 8 | 14 | 176° S | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 8 | 14 | 176° S | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 191° S | aucun | pluie | 4.2 | 18°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 343° NNO | aucun | pluie | 2.4 | 14°C |
| Plage d'Excenevex | 4 | 8 | 24° NNE | aucun | couvert | 0.6 | 14°C |
| Plage du Vengeron | 4 | 7 | 343° NNO | aucun | pluie | 2.4 | 14°C |
| Plage d'Hermance | 4 | 7 | 343° NNO | aucun | pluie | 2.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 90° E | aucun | pluie | 4.9 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 31° NNE | aucun | pluie | 4.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 22 | 156° SSE | aucun | pluie | 10.2 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 21 | 137° SE | aucun | pluie | 12.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 193° SSO | aucun | pluie | 15.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 191° S | 10h-14h | pluie | 5.9 | 16°C |
| Cruas - Nuclear Spot | 10 | 22 | 180° S | aucun | orage | 13.2 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 183° S | 10h-14h | pluie | 2.4 | 15°C |
| Nord du Pont de Chavanay | 11 | 24 | 183° S | 10h-14h | pluie | 2.4 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 27 | 177° S | 10h-13h | pluie | 2.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 26 | 176° S | aucun | orage | 8.4 | 15°C |
| Saint-Romain-des-Iles | 10 | 19 | 174° S | 08h-11h | pluie | 5.2 | 14°C |
| Nord du Pont d'Arciat | 10 | 19 | 174° S | 08h-11h | pluie | 5.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 23 | 172° S | aucun | pluie | 9.9 | 14°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 20 | 28° NNE | 17h-20h | pluie | 1.8 | 13°C |
| Plage d'Excenevex | 14 | 20 | 16° NNE | 17h-20h | couvert | 0.3 | 13°C |
| Plage du Vengeron | 14 | 20 | 28° NNE | 17h-20h | pluie | 1.8 | 13°C |
| Plage d'Hermance | 14 | 20 | 28° NNE | 17h-20h | pluie | 1.8 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 3° N | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 212° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 360° N | aucun | pluie | 1.2 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 352° N | aucun | pluie | 1.8 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 22 | 360° N | 17h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 352° N | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 24 | 11° N | aucun | soleil-couvert | 0.6 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 5° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 16 | 5° N | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 358° N | aucun | pluie | 2.4 | 13°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 4° N | aucun | couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 8 | 15 | 360° N | aucun | couvert | 0.6 | 10°C |
| Nord du Pont d'Arciat | 8 | 15 | 360° N | aucun | couvert | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 347° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 20 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 14 | 20 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 14 | 20 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 14 | 20 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 349° N | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 40° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 10° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 355° N | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 8° N | 08h-17h | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 356° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 11 | 25 | 17° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 2° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 7 | 16 | 2° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 331° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 7 | 12 | 350° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 7 | 12 | 350° N | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 343° NNO | aucun | couvert | 0.0 | 10°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 26° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 13 | 20 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 15 | 21 | 26° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 15 | 21 | 26° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 334° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 6 | 17 | 41° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 5° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 351° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 1° N | 09h-16h | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 350° N | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 11 | 26 | 21° NNE | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 16° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 7 | 17 | 16° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 348° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 5° N | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 5 | 11 | 2° N | aucun | soleil | 0.0 | 6°C |
| Nord du Pont d'Arciat | 5 | 11 | 2° N | aucun | soleil | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 338° NNO | aucun | soleil-couvert | 0.0 | 7°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 12 | 19 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 12 | 18 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 12 | 18 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 330° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 23° NNE | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 351° N | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 358° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 347° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 10 | 22 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 6 | 15 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 313° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 18° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 12 | 314° NO | aucun | soleil | 0.0 | 4°C |
| Nord du Pont d'Arciat | 4 | 12 | 314° NO | aucun | soleil | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 336° NNO | aucun | soleil | 0.0 | 6°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 37° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 9 | 14 | 24° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 10 | 15 | 37° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 10 | 15 | 37° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 313° NO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 33° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 12° NNE | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 5° N | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 360° N | 14h-18h | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 350° N | aucun | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 11 | 25 | 18° NNE | 11h-20h | couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 18° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 6 | 16 | 18° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 7° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 9 | 25° NNE | aucun | soleil | 0.0 | 4°C |
| Nord du Pont d'Arciat | 4 | 9 | 25° NNE | aucun | soleil | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 347° NNO | aucun | soleil-couvert | 0.0 | 5°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 12 | 39° NE | aucun | soleil | 0.0 |  |
| Plage d'Excenevex | 6 | 12 | 38° NE | aucun | soleil-couvert | 0.0 |  |
| Plage du Vengeron | 6 | 12 | 39° NE | aucun | soleil | 0.0 |  |
| Plage d'Hermance | 6 | 12 | 39° NE | aucun | soleil | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 292° ONO | aucun | soleil | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 202° SSO | aucun | soleil-couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 347° NNO | aucun | soleil-couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 7° N | aucun | soleil | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 334° NNO | aucun | soleil | 0.0 |  |
| Cruas - Nuclear Spot | 9 | 21 | 30° NNE | aucun | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont de Chavanay | 4 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 24° NNE | aucun | soleil-couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 21° NNE | aucun | soleil-couvert | 0.0 |  |
| Saint-Romain-des-Iles | 2 | 7 | 96° E | aucun | soleil | 0.0 |  |
| Nord du Pont d'Arciat | 2 | 7 | 96° E | aucun | soleil | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 35° NE | aucun | soleil | 0.0 |  |
