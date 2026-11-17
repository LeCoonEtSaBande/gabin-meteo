# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 17/11/2026 15:42 (Europe/Paris)
- Fichiers générés le : 2026-11-17T15:43:21+01:00
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
| Plage de la pointe - Messery | 25 | 36 | 215° SO | 08h-16h | orage | 7.8 | 14°C |
| Plage d'Excenevex | 19 | 29 | 205° SSO | 08h-17h | orage | 8.4 | 15°C |
| Plage du Vengeron | 19 | 25 | 219° SO | 10h-17h | orage | 6.5 | 15°C |
| Plage d'Hermance | 24 | 34 | 213° SSO | 08h-17h | orage | 9.8 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 116° ESE | aucun | orage | 10.6 | 16°C |
| Lac du Bourget - Cap des Séselets | 11 | 15 | 218° SO | aucun | pluie | 8.3 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 28 | 179° S | aucun | pluie | 6.3 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 23 | 199° SSO | aucun | pluie | 2.1 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 26 | 163° SSE | 10h-20h | pluie | 4.4 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 29 | 191° S | 14h-17h | soleil-couvert | 0.1 | 15°C |
| Cruas - Nuclear Spot | 9 | 16 | 166° SSE | aucun | pluie | 1.3 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 24 | 139° SE | 10h-15h | soleil-couvert | 0.4 | 15°C |
| Nord du Pont de Chavanay | 14 | 27 | 154° SSE | 10h-14h | couvert | 0.5 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 42 | 180° S | 08h-13h | pluie | 4.2 | 15°C |
| Saint-Cyr-sur-le-Rhône | 15 | 37 | 188° S | aucun | pluie | 4.7 | 15°C |
| Saint-Romain-des-Iles | 19 | 29 | 181° S | 08h-13h | pluie | 2.4 | 18°C |
| Nord du Pont d'Arciat | 15 | 24 | 195° SSO | 08h-13h | pluie | 2.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 33 | 190° S | 08h-20h | pluie | 3.7 | 15°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 38 | 206° SSO | 08h-20h | pluie | 5.6 | 12°C |
| Plage d'Excenevex | 17 | 24 | 218° SO | 08h-17h | pluie | 4.9 | 12°C |
| Plage du Vengeron | 15 | 21 | 206° SSO | 12h-20h | pluie | 1.4 | 13°C |
| Plage d'Hermance | 22 | 30 | 205° SSO | 08h-20h | pluie | 5.8 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 14 | 207° SSO | aucun | pluie | 3.1 | 13°C |
| Lac du Bourget - Cap des Séselets | 9 | 13 | 186° S | aucun | pluie | 7.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 10 | 73° ENE | aucun | couvert | 0.6 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 19 | 41° NE | aucun | pluie | 1.5 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 21 | 205° SSO | 10h-13h | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 171° S | aucun | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 6 | 13 | 215° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 154° SSE | aucun | soleil-couvert | 0.3 | 16°C |
| Nord du Pont de Chavanay | 8 | 17 | 277° O | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 13 | 188° S | aucun | pluie | 0.5 | 16°C |
| Saint-Cyr-sur-le-Rhône | 5 | 9 | 234° SO | aucun | soleil-couvert | 0.5 | 16°C |
| Saint-Romain-des-Iles | 13 | 35 | 307° NO | aucun | pluie | 2.2 | 12°C |
| Nord du Pont d'Arciat | 13 | 23 | 280° O | aucun | pluie | 1.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 18 | 292° ONO | aucun | soleil-couvert | 0.4 | 15°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 221° SO | 08h-20h | pluie | 5.4 | 12°C |
| Plage d'Excenevex | 17 | 25 | 220° SO | 08h-20h | pluie | 6.7 | 12°C |
| Plage du Vengeron | 18 | 28 | 206° SSO | 08h-17h | pluie | 2.3 | 13°C |
| Plage d'Hermance | 19 | 29 | 212° SSO | 08h-14h | pluie | 1.6 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 18 | 290° ONO | aucun | orage | 17.4 | 12°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 135° SE | aucun | orage | 5.9 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 15 | 165° SSE | aucun | couvert | 0.3 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 45° NE | aucun | soleil-couvert | 0.2 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 11 | 179° S | aucun | pluie | 1.5 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 17 | 197° SSO | aucun | pluie | 3.1 | 13°C |
| Cruas - Nuclear Spot | 6 | 11 | 178° S | aucun | soleil-couvert | 0.3 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 22 | 153° SSE | aucun | pluie | 1.7 | 13°C |
| Nord du Pont de Chavanay | 11 | 22 | 153° SSE | aucun | pluie | 1.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 176° S | aucun | soleil-couvert | 0.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 176° S | aucun | soleil-couvert | 0.2 | 13°C |
| Saint-Romain-des-Iles | 12 | 19 | 257° OSO | aucun | couvert | 0.6 | 14°C |
| Nord du Pont d'Arciat | 12 | 23 | 255° OSO | aucun | couvert | 0.5 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 15 | 183° S | aucun | pluie | 2.1 | 13°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 212° SSO | 08h-20h | pluie | 4.2 | 12°C |
| Plage d'Excenevex | 16 | 23 | 203° SSO | 08h-20h | pluie | 4.7 | 12°C |
| Plage du Vengeron | 14 | 19 | 207° SSO | 08h-18h | pluie | 4.3 | 12°C |
| Plage d'Hermance | 15 | 22 | 205° SSO | 08h-18h | pluie | 2.8 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 146° SE | aucun | pluie | 4.8 | 12°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 158° SSE | aucun | pluie | 3.8 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 154° SSE | aucun | pluie | 3.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 156° SSE | aucun | pluie | 1.5 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 194° SSO | aucun | pluie | 4.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 20 | 192° SSO | 08h-16h | pluie | 3.1 | 12°C |
| Cruas - Nuclear Spot | 8 | 15 | 158° SSE | aucun | couvert | 0.9 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 24 | 165° SSE | 09h-15h | pluie | 2.6 | 11°C |
| Nord du Pont de Chavanay | 12 | 24 | 165° SSE | 09h-15h | pluie | 2.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 25 | 181° S | 08h-15h | pluie | 2.5 | 11°C |
| Saint-Cyr-sur-le-Rhône | 13 | 25 | 181° S | 08h-15h | pluie | 2.5 | 11°C |
| Saint-Romain-des-Iles | 12 | 23 | 251° OSO | 15h-20h | couvert | 0.5 | 13°C |
| Nord du Pont d'Arciat | 12 | 23 | 251° OSO | 15h-20h | couvert | 0.5 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 24 | 190° S | 08h-16h | pluie | 3.9 | 11°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 216° SO | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 10 | 13 | 233° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 9 | 15 | 201° SSO | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 9 | 15 | 224° SO | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 65° ENE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 356° N | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 35° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 345° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 14 | 344° NNO | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 13 | 333° NNO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 7 | 11 | 20° NNE | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 14° NNE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 3 | 7 | 14° NNE | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 70° ENE | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 347° NNO | aucun | couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 4 | 8 | 212° SSO | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 4 | 8 | 212° SSO | aucun | couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 45° NE | aucun | soleil-couvert | 0.0 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 221° SO | aucun | pluie | 5.2 | 7°C |
| Plage d'Excenevex | 6 | 10 | 221° SO | aucun | pluie | 5.2 | 7°C |
| Plage du Vengeron | 6 | 10 | 221° SO | aucun | pluie | 5.2 | 7°C |
| Plage d'Hermance | 6 | 10 | 221° SO | aucun | pluie | 5.2 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 157° SSE | aucun | pluie | 3.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 137° SE | aucun | pluie | 4.3 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 349° N | aucun | pluie | 7.2 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 358° N | aucun | pluie | 7.2 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 173° S | aucun | pluie | 4.8 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 195° SSO | aucun | pluie | 3.9 | 13°C |
| Cruas - Nuclear Spot | 4 | 10 | 207° SSO | aucun | pluie | 2.7 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 147° SSE | aucun | pluie | 6.3 | 12°C |
| Nord du Pont de Chavanay | 6 | 13 | 147° SSE | aucun | pluie | 6.3 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 179° S | aucun | pluie | 4.9 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 149° SSE | aucun | pluie | 5.8 | 11°C |
| Saint-Romain-des-Iles | 9 | 16 | 246° OSO | aucun | pluie | 4.0 | 12°C |
| Nord du Pont d'Arciat | 9 | 16 | 246° OSO | aucun | pluie | 4.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 272° O | aucun | pluie | 5.8 | 12°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 97° E | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 338° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 321° NO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 357° N | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 30° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 72° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 4 | 10 | 25° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 115° ESE | aucun | soleil-couvert | 0.6 | 11°C |
| Nord du Pont de Chavanay | 2 | 7 | 115° ESE | aucun | soleil-couvert | 0.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 153° SSE | aucun | soleil-couvert | 0.6 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 145° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 8 | 200° SSO | aucun | pluie | 1.2 | 10°C |
| Nord du Pont d'Arciat | 3 | 8 | 200° SSO | aucun | pluie | 1.2 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 151° SSE | aucun | soleil-couvert | 0.0 | 11°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 356° N | aucun | pluie | 1.4 | 8°C |
| Plage d'Excenevex | 5 | 9 | 356° N | aucun | soleil-couvert | 0.1 | 8°C |
| Plage du Vengeron | 5 | 9 | 356° N | aucun | pluie | 1.4 | 8°C |
| Plage d'Hermance | 5 | 9 | 356° N | aucun | pluie | 1.4 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 106° ESE | aucun | pluie | 3.9 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 3° N | aucun | orage | 4.4 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 18 | 153° SSE | aucun | couvert | 0.6 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 13 | 182° S | aucun | pluie | 1.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 182° S | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 198° SSO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 2 | 7 | 281° O | aucun | soleil-couvert | 0.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 19 | 189° S | aucun | soleil-couvert | 0.6 | 12°C |
| Nord du Pont de Chavanay | 7 | 19 | 189° S | aucun | soleil-couvert | 0.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 18 | 179° S | aucun | pluie | 6.6 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 175° S | aucun | pluie | 1.2 | 12°C |
| Saint-Romain-des-Iles | 5 | 11 | 171° S | aucun | pluie | 3.7 | 9°C |
| Nord du Pont d'Arciat | 5 | 11 | 171° S | aucun | pluie | 3.7 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 143° SE | aucun | pluie | 4.3 | 12°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 7 | 11 | 25° NNE | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 7 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 7 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 61° ENE | aucun | pluie | 1.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 30° NNE | aucun | soleil-couvert | 0.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 28 | 161° SSE | aucun | couvert | 0.1 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 26 | 158° SSE | aucun | couvert | 0.3 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 196° SSO | aucun | pluie | 1.5 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 26 | 193° SSO | 12h-18h | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 9 | 30 | 166° SSE | aucun | pluie | 5.4 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 27 | 186° S | aucun | pluie | 1.4 | 12°C |
| Nord du Pont de Chavanay | 10 | 27 | 186° S | aucun | pluie | 1.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 31 | 171° S | 11h-20h | pluie | 0.5 | 12°C |
| Saint-Cyr-sur-le-Rhône | 12 | 29 | 174° S | 12h-20h | pluie | 1.5 | 12°C |
| Saint-Romain-des-Iles | 10 | 20 | 175° S | aucun | pluie | 1.3 | 12°C |
| Nord du Pont d'Arciat | 10 | 20 | 175° S | aucun | pluie | 1.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 145° SE | aucun | couvert | 0.4 | 13°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 217° SO | 13h-17h | pluie | 5.6 | 5°C |
| Plage d'Excenevex | 11 | 18 | 241° OSO | 14h-20h | pluie | 7.3 | 6°C |
| Plage du Vengeron | 11 | 16 | 217° SO | 13h-17h | pluie | 5.6 | 5°C |
| Plage d'Hermance | 11 | 16 | 217° SO | 13h-17h | pluie | 5.6 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 226° SO | aucun | pluie | 11.5 | 1°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 10° N | aucun | pluie | 16.2 | 2°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 15 | 259° O | aucun | pluie | 13.9 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 15 | 245° OSO | aucun | pluie | 15.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 173° S | aucun | pluie | 5.5 | 7°C |
| La Roche-de-Glun - Base Nautique | 5 | 9 | 173° S | aucun | pluie | 7.9 | 6°C |
| Cruas - Nuclear Spot | 7 | 19 | 49° NE | aucun | pluie | 2.1 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 11 | 159° SSE | aucun | pluie | 7.8 | 6°C |
| Nord du Pont de Chavanay | 6 | 11 | 159° SSE | aucun | pluie | 7.8 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 17 | 260° O | aucun | pluie | 13.9 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 168° SSE | aucun | pluie | 9.0 | 6°C |
| Saint-Romain-des-Iles | 5 | 10 | 188° S | aucun | pluie | 9.7 | 7°C |
| Nord du Pont d'Arciat | 5 | 10 | 188° S | aucun | pluie | 9.7 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 217° SO | aucun | pluie | 10.9 | 6°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 204° SSO | aucun | couvert | 0.9 | 7°C |
| Plage d'Excenevex | 9 | 13 | 216° SO | aucun | couvert | 0.3 | 7°C |
| Plage du Vengeron | 8 | 13 | 204° SSO | aucun | couvert | 0.9 | 7°C |
| Plage d'Hermance | 8 | 13 | 204° SSO | aucun | couvert | 0.9 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 139° SE | aucun | pluie | 1.5 | 3°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 351° N | aucun | pluie | 1.1 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 9° N | aucun | soleil-couvert | 0.1 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 151° SSE | aucun | soleil-couvert | 0.1 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 357° N | aucun | pluie | 1.3 | 9°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 345° NNO | aucun | pluie | 1.3 | 9°C |
| Cruas - Nuclear Spot | 4 | 9 | 348° NNO | aucun | pluie | 1.2 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 4° N | aucun | pluie | 1.3 | 7°C |
| Nord du Pont de Chavanay | 3 | 7 | 4° N | aucun | pluie | 1.3 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 8 | 38° NE | aucun | pluie | 3.1 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 17° NNE | aucun | pluie | 1.9 | 7°C |
| Saint-Romain-des-Iles | 6 | 12 | 302° ONO | aucun | pluie | 1.2 | 7°C |
| Nord du Pont d'Arciat | 6 | 12 | 302° ONO | aucun | pluie | 1.2 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 325° NO | aucun | pluie | 1.9 | 7°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 17° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 9 | 14 | 14° NNE | aucun | soleil-couvert | 0.6 | 7°C |
| Plage du Vengeron | 10 | 14 | 17° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 10 | 14 | 17° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 345° NNO | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 27° NNE | aucun | soleil-couvert | 0.6 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 11° N | aucun | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 1° N | aucun | couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 8° N | 08h-17h | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 6° N | 10h-14h | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 13 | 30 | 12° NNE | 08h-17h | soleil-couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 358° N | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 7 | 16 | 358° N | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 355° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 4 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 355° N | aucun | soleil-couvert | 0.0 | 6°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 212° SSO | aucun | pluie | 1.4 | 6°C |
| Plage d'Excenevex | 8 | 11 | 224° SO | aucun | pluie | 1.2 | 6°C |
| Plage du Vengeron | 7 | 10 | 212° SSO | aucun | pluie | 1.4 | 6°C |
| Plage d'Hermance | 7 | 10 | 212° SSO | aucun | pluie | 1.4 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 121° ESE | aucun | pluie | 1.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 25° NNE | aucun | pluie | 1.5 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 197° SSO | aucun | couvert | 0.8 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 203° SSO | aucun | couvert | 0.7 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 174° S | aucun | pluie | 7.3 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 179° S | aucun | pluie | 8.5 | 9°C |
| Cruas - Nuclear Spot | 4 | 11 | 216° SO | aucun | pluie | 6.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 159° SSE | aucun | pluie | 9.6 | 10°C |
| Nord du Pont de Chavanay | 8 | 18 | 159° SSE | aucun | pluie | 9.6 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 157° SSE | aucun | pluie | 7.3 | 9°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 155° SSE | aucun | pluie | 9.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 9 | 168° SSE | aucun | pluie | 6.1 | 6°C |
| Nord du Pont d'Arciat | 4 | 9 | 168° SSE | aucun | pluie | 6.1 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 137° SE | aucun | pluie | 3.8 | 8°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 207° SSO | aucun | couvert | 0.1 | 7°C |
| Plage d'Excenevex | 10 | 14 | 229° SO | 09h-12h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 8 | 12 | 207° SSO | aucun | couvert | 0.1 | 7°C |
| Plage d'Hermance | 8 | 12 | 207° SSO | aucun | couvert | 0.1 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 267° O | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 1 | 8 | 13° NNE | aucun | pluie | 3.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 24 | 354° N | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 26 | 351° N | aucun | soleil-couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 5° N | 12h-15h | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 358° N | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 11 | 24 | 15° NNE | 11h-16h | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 14° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 4 | 11 | 14° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 264° O | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 8° N | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 3 | 7 | 332° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 3 | 7 | 332° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 23° NNE | aucun | soleil-couvert | 0.0 | 7°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 33° NNE | aucun | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 7 | 13 | 33° NNE | aucun | couvert | 0.0 | 6°C |
| Plage du Vengeron | 8 | 12 | 33° NNE | aucun | couvert | 0.0 | 7°C |
| Plage d'Hermance | 8 | 12 | 33° NNE | aucun | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 345° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 27° NNE | aucun | couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 171° S | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 178° S | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 19 | 8° N | aucun | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 348° NNO | aucun | couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 9 | 22 | 28° NNE | aucun | couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 356° N | aucun | couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 3 | 9 | 356° N | aucun | couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 317° NO | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 355° N | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 3 | 7 | 188° S | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 3 | 7 | 188° S | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 9 | 348° NNO | aucun | couvert | 0.0 | 4°C |
