# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 17/11/2026 01:54 (Europe/Paris)
- Fichiers générés le : 2026-11-17T01:57:00+01:00
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

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 34 | 224° SO | 08h-18h | orage | 10.0 | 14°C |
| Plage d'Excenevex | 16 | 26 | 208° SSO | 08h-17h | orage | 9.3 | 15°C |
| Plage du Vengeron | 18 | 24 | 217° SO | 08h-20h | orage | 14.2 | 15°C |
| Plage d'Hermance | 22 | 34 | 222° SO | 08h-19h | orage | 11.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 117° ESE | aucun | orage | 12.3 | 16°C |
| Lac du Bourget - Cap des Séselets | 14 | 22 | 212° SSO | aucun | orage | 12.5 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 27 | 194° SSO | 08h-14h | pluie | 4.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 24 | 211° SSO | aucun | couvert | 0.5 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 201° SSO | 08h-11h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 24 | 190° S | aucun | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 7 | 12 | 193° SSO | aucun | pluie | 1.5 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 23 | 171° S | 10h-16h | pluie | 1.1 | 14°C |
| Nord du Pont de Chavanay | 12 | 24 | 169° S | aucun | pluie | 0.9 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 30 | 170° S | 08h-16h | pluie | 5.6 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 192° SSO | 12h-15h | pluie | 2.1 | 14°C |
| Saint-Romain-des-Iles | 13 | 24 | 193° SSO | 10h-15h | pluie | 2.3 | 15°C |
| Nord du Pont d'Arciat | 16 | 24 | 197° SSO | 10h-15h | pluie | 2.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 19 | 30 | 190° S | 08h-20h | pluie | 4.8 | 14°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 27 | 209° SSO | 08h-20h | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 16 | 23 | 225° SO | 08h-20h | couvert | 0.1 | 14°C |
| Plage du Vengeron | 15 | 20 | 212° SSO | 08h-20h | soleil-couvert | 0.4 | 14°C |
| Plage d'Hermance | 16 | 24 | 217° SO | 08h-18h | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 16 | 235° SO | aucun | pluie | 0.9 | 14°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 146° SE | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 156° SSE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 171° S | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 21 | 204° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 25 | 165° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 6 | 11 | 203° SSO | aucun | soleil-couvert | 0.4 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 180° S | aucun | soleil-couvert | 0.2 | 16°C |
| Nord du Pont de Chavanay | 14 | 24 | 4° N | aucun | soleil-couvert | 0.3 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 248° OSO | aucun | pluie | 0.9 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 197° SSO | aucun | pluie | 1.1 | 12°C |
| Saint-Romain-des-Iles | 12 | 25 | 238° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 14 | 24 | 237° OSO | aucun | soleil-couvert | 0.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 223° SO | aucun | pluie | 1.6 | 13°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 25 | 214° SO | 08h-20h | pluie | 2.0 | 12°C |
| Plage d'Excenevex | 18 | 24 | 203° SSO | 08h-20h | pluie | 2.2 | 12°C |
| Plage du Vengeron | 16 | 21 | 206° SSO | 08h-17h | pluie | 2.0 | 13°C |
| Plage d'Hermance | 15 | 22 | 208° SSO | 08h-20h | pluie | 1.6 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 126° SE | aucun | orage | 7.6 | 12°C |
| Lac du Bourget - Cap des Séselets | 10 | 12 | 157° SSE | aucun | pluie | 2.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 54° NE | aucun | pluie | 2.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 35° NE | aucun | pluie | 2.1 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 14 | 181° S | aucun | pluie | 4.4 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 18 | 195° SSO | aucun | pluie | 3.2 | 14°C |
| Cruas - Nuclear Spot | 7 | 12 | 183° S | aucun | soleil-couvert | 0.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 21 | 142° SE | aucun | pluie | 1.3 | 13°C |
| Nord du Pont de Chavanay | 12 | 21 | 142° SE | aucun | pluie | 1.3 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 171° S | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 171° S | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 10 | 19 | 175° S | aucun | pluie | 1.0 | 13°C |
| Nord du Pont d'Arciat | 10 | 19 | 175° S | aucun | pluie | 1.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 179° S | aucun | pluie | 1.5 | 13°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 28 | 204° SSO | 08h-19h | pluie | 7.2 | 11°C |
| Plage d'Excenevex | 17 | 22 | 207° SSO | 08h-19h | pluie | 7.1 | 11°C |
| Plage du Vengeron | 15 | 20 | 201° SSO | 08h-16h | pluie | 6.0 | 11°C |
| Plage d'Hermance | 15 | 24 | 200° SSO | 08h-16h | pluie | 4.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 118° ESE | aucun | pluie | 8.5 | 11°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 157° SSE | aucun | pluie | 3.5 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 156° SSE | aucun | pluie | 1.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 149° SSE | aucun | couvert | 0.4 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 197° SSO | 10h-16h | couvert | 0.4 | 12°C |
| La Roche-de-Glun - Base Nautique | 13 | 22 | 195° SSO | 08h-17h | pluie | 1.3 | 12°C |
| Cruas - Nuclear Spot | 7 | 13 | 161° SSE | aucun | couvert | 0.1 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 170° S | 09h-16h | couvert | 0.5 | 11°C |
| Nord du Pont de Chavanay | 14 | 24 | 170° S | 09h-16h | couvert | 0.5 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 179° S | 08h-16h | couvert | 0.9 | 10°C |
| Saint-Cyr-sur-le-Rhône | 14 | 29 | 179° S | 08h-16h | couvert | 0.9 | 10°C |
| Saint-Romain-des-Iles | 12 | 23 | 173° S | 08h-15h | pluie | 1.8 | 12°C |
| Nord du Pont d'Arciat | 12 | 23 | 173° S | 08h-15h | pluie | 1.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 27 | 188° S | 08h-17h | pluie | 3.3 | 11°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 24 | 206° SSO | 08h-16h | pluie | 1.0 | 11°C |
| Plage d'Excenevex | 16 | 20 | 204° SSO | 08h-15h | pluie | 1.2 | 11°C |
| Plage du Vengeron | 14 | 19 | 205° SSO | 08h-14h | pluie | 1.3 | 11°C |
| Plage d'Hermance | 13 | 21 | 208° SSO | 08h-14h | pluie | 1.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 115° ESE | aucun | soleil-couvert | 0.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 157° SSE | aucun | soleil-couvert | 0.5 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 23° NNE | aucun | soleil-couvert | 0.1 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 187° S | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 183° S | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 2 | 7 | 352° N | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 11 | 156° SSE | aucun | soleil-couvert | 0.9 | 13°C |
| Nord du Pont de Chavanay | 5 | 11 | 156° SSE | aucun | soleil-couvert | 0.9 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 167° SSE | aucun | soleil-couvert | 0.3 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 173° S | aucun | pluie | 1.5 | 12°C |
| Saint-Romain-des-Iles | 5 | 9 | 201° SSO | aucun | pluie | 1.2 | 11°C |
| Nord du Pont d'Arciat | 5 | 9 | 201° SSO | aucun | pluie | 1.2 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 201° SSO | aucun | couvert | 0.3 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 353° N | aucun | pluie | 10.1 | 9°C |
| Plage d'Excenevex | 5 | 8 | 353° N | aucun | pluie | 10.1 | 9°C |
| Plage du Vengeron | 5 | 8 | 353° N | aucun | pluie | 10.1 | 9°C |
| Plage d'Hermance | 5 | 8 | 353° N | aucun | pluie | 10.1 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 114° ESE | aucun | pluie | 16.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 11 | 103° ESE | aucun | pluie | 17.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 17 | 154° SSE | aucun | pluie | 11.4 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 13 | 159° SSE | aucun | pluie | 14.3 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 226° SO | aucun | pluie | 2.1 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 213° SSO | aucun | pluie | 3.9 | 10°C |
| Cruas - Nuclear Spot | 3 | 6 | 336° NNO | aucun | pluie | 1.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 161° SSE | aucun | pluie | 4.8 | 9°C |
| Nord du Pont de Chavanay | 5 | 12 | 161° SSE | aucun | pluie | 4.8 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 178° S | aucun | pluie | 10.8 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 160° SSE | aucun | pluie | 11.4 | 8°C |
| Saint-Romain-des-Iles | 6 | 12 | 196° SSO | aucun | pluie | 6.6 | 8°C |
| Nord du Pont d'Arciat | 6 | 12 | 196° SSO | aucun | pluie | 6.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 104° ESE | aucun | pluie | 5.4 | 8°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 32° NNE | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 7 | 11 | 32° NNE | aucun | soleil | 0.0 | 12°C |
| Plage du Vengeron | 7 | 11 | 32° NNE | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 7 | 11 | 32° NNE | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 347° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 5° N | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 14 | 331° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 358° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 354° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 325° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 10 | 324° NO | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 95° E | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 2 | 8 | 95° E | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 175° S | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 173° S | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 5 | 9 | 217° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 5 | 9 | 217° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 147° SSE | aucun | couvert | 0.0 | 11°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 36° NE | aucun | couvert | 0.6 | 8°C |
| Plage d'Excenevex | 6 | 8 | 44° NE | aucun | couvert | 0.6 | 8°C |
| Plage du Vengeron | 6 | 8 | 36° NE | aucun | couvert | 0.6 | 8°C |
| Plage d'Hermance | 6 | 8 | 36° NE | aucun | couvert | 0.6 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 98° E | aucun | pluie | 2.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 4° N | aucun | pluie | 1.9 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 16 | 170° S | aucun | pluie | 7.5 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 16 | 158° SSE | aucun | pluie | 7.1 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 18 | 216° SO | aucun | pluie | 7.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 7 | 20 | 214° SO | aucun | pluie | 4.4 | 10°C |
| Cruas - Nuclear Spot | 4 | 15 | 275° O | aucun | pluie | 22.7 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 180° S | 12h-15h | couvert | 0.2 | 11°C |
| Nord du Pont de Chavanay | 11 | 24 | 180° S | 12h-15h | couvert | 0.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 23 | 167° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 171° S | 11h-17h | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 5 | 12 | 179° S | aucun | pluie | 1.8 | 9°C |
| Nord du Pont d'Arciat | 5 | 12 | 179° S | aucun | pluie | 1.8 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 125° SE | aucun | soleil-couvert | 0.0 | 10°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 20° NNE | aucun | pluie | 4.8 | 7°C |
| Plage d'Excenevex | 7 | 12 | 12° NNE | aucun | pluie | 4.2 | 8°C |
| Plage du Vengeron | 7 | 12 | 20° NNE | aucun | pluie | 4.8 | 7°C |
| Plage d'Hermance | 7 | 12 | 20° NNE | aucun | pluie | 4.8 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 10 | 56° NE | aucun | pluie | 6.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 25° NNE | aucun | pluie | 4.8 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 16 | 308° NO | aucun | pluie | 2.9 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 277° O | aucun | pluie | 2.1 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 6° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 310° NO | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 4 | 12 | 24° NNE | aucun | couvert | 0.1 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 311° NO | aucun | soleil-couvert | 0.6 | 10°C |
| Nord du Pont de Chavanay | 2 | 7 | 311° NO | aucun | soleil-couvert | 0.6 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 101° E | aucun | couvert | 0.6 | 10°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 84° E | aucun | couvert | 0.6 | 9°C |
| Saint-Romain-des-Iles | 3 | 7 | 351° N | aucun | pluie | 1.2 | 9°C |
| Nord du Pont d'Arciat | 3 | 7 | 351° N | aucun | pluie | 1.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 15° NNE | aucun | couvert | 0.0 | 10°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 30° NNE | aucun | couvert | 0.6 | 6°C |
| Plage d'Excenevex | 7 | 11 | 13° NNE | aucun | couvert | 0.6 | 7°C |
| Plage du Vengeron | 6 | 10 | 30° NNE | aucun | couvert | 0.6 | 6°C |
| Plage d'Hermance | 6 | 10 | 30° NNE | aucun | couvert | 0.6 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 335° NNO | aucun | couvert | 0.6 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 45° NE | aucun | soleil-couvert | 0.6 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 1° N | aucun | soleil-couvert | 0.1 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 351° N | aucun | soleil-couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 20 | 1° N | aucun | soleil-couvert | 0.1 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 352° N | aucun | couvert | 0.1 | 8°C |
| Cruas - Nuclear Spot | 9 | 20 | 2° N | aucun | couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 355° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 7 | 16 | 355° N | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 336° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 346° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 7 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 7 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 348° NNO | aucun | couvert | 0.0 | 6°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 58° ENE | aucun | couvert | 0.6 | 5°C |
| Plage d'Excenevex | 11 | 16 | 31° NNE | 15h-20h | couvert | 0.0 | 5°C |
| Plage du Vengeron | 9 | 14 | 58° ENE | aucun | couvert | 0.6 | 5°C |
| Plage d'Hermance | 9 | 14 | 58° ENE | aucun | couvert | 0.6 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 14 | 355° N | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 357° N | aucun | couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 347° NNO | aucun | couvert | 0.7 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 24 | 344° NNO | aucun | couvert | 0.1 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 8° N | 08h-20h | soleil-couvert | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 357° N | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 12 | 27 | 16° NNE | 08h-20h | couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 355° N | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 9 | 20 | 355° N | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 350° N | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 351° N | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 9 | 16 | 354° N | aucun | soleil-couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 9 | 16 | 354° N | aucun | soleil-couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 349° N | aucun | soleil-couvert | 0.0 | 4°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Plage d'Excenevex | 10 | 15 | 31° NNE | 17h-20h | soleil | 0.0 | 3°C |
| Plage du Vengeron | 10 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Plage d'Hermance | 10 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 328° NNO | aucun | soleil-couvert | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 44° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 9° N | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 13° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 6° N | 08h-16h | soleil | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 9 | 22 | 356° N | aucun | soleil-couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 11 | 25 | 15° NNE | 08h-18h | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 360° N | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 7 | 17 | 360° N | aucun | soleil-couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 359° N | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 357° N | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 6 | 12 | 18° NNE | aucun | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 6 | 12 | 18° NNE | aucun | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 348° NNO | aucun | soleil-couvert | 0.0 | 3°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 32° NNE | aucun | couvert | 0.0 | 3°C |
| Plage d'Excenevex | 8 | 14 | 26° NNE | aucun | couvert | 0.0 | 2°C |
| Plage du Vengeron | 8 | 13 | 32° NNE | aucun | couvert | 0.0 | 3°C |
| Plage d'Hermance | 8 | 13 | 32° NNE | aucun | couvert | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 333° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 31° NNE | aucun | couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 182° S | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 175° S | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 17° NNE | aucun | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 325° NO | aucun | couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 5 | 15 | 25° NNE | aucun | couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 340° NNO | aucun | couvert | 0.0 | 3°C |
| Nord du Pont de Chavanay | 3 | 7 | 340° NNO | aucun | couvert | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 287° ONO | aucun | couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 330° NNO | aucun | couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 2 | 6 | 311° NO | aucun | couvert | 0.0 | 1°C |
| Nord du Pont d'Arciat | 2 | 6 | 311° NO | aucun | couvert | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 355° N | aucun | couvert | 0.0 | 3°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 12 | 39° NE | aucun | pluie | 3.5 | 6°C |
| Plage d'Excenevex | 6 | 12 | 43° NE | aucun | pluie | 1.1 | 6°C |
| Plage du Vengeron | 6 | 12 | 39° NE | aucun | pluie | 3.5 | 6°C |
| Plage d'Hermance | 6 | 12 | 39° NE | aucun | pluie | 3.5 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 151° SSE | aucun | pluie | 1.4 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 27° NNE | aucun | pluie | 2.5 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 144° SE | aucun | couvert | 0.1 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 150° SSE | aucun | couvert | 0.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 9 | 16° NNE | aucun | pluie | 1.8 | 7°C |
| La Roche-de-Glun - Base Nautique | 3 | 6 | 198° SSO | aucun | pluie | 2.5 | 6°C |
| Cruas - Nuclear Spot | 4 | 10 | 19° NNE | aucun | pluie | 1.8 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 2° N | aucun | pluie | 1.8 | 5°C |
| Nord du Pont de Chavanay | 3 | 7 | 2° N | aucun | pluie | 1.8 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 158° SSE | aucun | pluie | 2.4 | 3°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 164° SSE | aucun | pluie | 1.8 | 4°C |
| Saint-Romain-des-Iles | 2 | 5 | 101° E | aucun | pluie | 3.6 | 2°C |
| Nord du Pont d'Arciat | 2 | 5 | 101° E | aucun | pluie | 3.6 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 59° ENE | aucun | pluie | 2.4 | 3°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 58° ENE | aucun | couvert | 0.0 |  |
| Plage d'Excenevex | 5 | 8 | 48° NE | aucun | couvert | 0.0 |  |
| Plage du Vengeron | 4 | 6 | 58° ENE | aucun | couvert | 0.0 |  |
| Plage d'Hermance | 4 | 6 | 58° ENE | aucun | couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 1 | 7 | 256° OSO | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 219° SO | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 146° SE | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 152° SSE | aucun | soleil-couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 6° N | aucun | couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 345° NNO | aucun | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 3 | 7 | 10° N | aucun | couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 4° N | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 3 | 8 | 4° N | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 41° NE | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 360° N | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 4 | 9 | 25° NNE | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 4 | 9 | 25° NNE | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 340° NNO | aucun | couvert | 0.0 |  |
