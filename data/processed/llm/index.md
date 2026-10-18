# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 18/10/2026 21:29 (Europe/Paris)
- Fichiers générés le : 2026-10-18T21:33:57+02:00
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

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 26 | 35° NE | 08h-15h | pluie | 3.4 | 12°C |
| Plage d'Excenevex | 16 | 23 | 21° NNE | 08h-12h | pluie | 1.1 | 12°C |
| Plage du Vengeron | 14 | 21 | 41° NE | aucun | pluie | 11.7 | 12°C |
| Plage d'Hermance | 16 | 21 | 34° NE | 08h-12h | couvert | 0.5 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 12 | 327° NNO | aucun | pluie | 8.1 | 12°C |
| Lac du Bourget - Cap des Séselets | 7 | 11 | 354° N | aucun | pluie | 7.5 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 360° N | aucun | pluie | 8.1 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 342° NNO | aucun | pluie | 6.2 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 16° NNE | aucun | couvert | 0.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 356° N | aucun | pluie | 1.2 | 12°C |
| Cruas - Nuclear Spot | 14 | 25 | 12° NNE | 08h-20h | couvert | 0.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 12 | 321° NO | aucun | pluie | 1.4 | 12°C |
| Nord du Pont de Chavanay | 9 | 12 | 306° NO | aucun | pluie | 1.5 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 341° NNO | aucun | pluie | 3.6 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 18° NNE | aucun | pluie | 4.3 | 11°C |
| Saint-Romain-des-Iles | 8 | 14 | 320° NO | aucun | pluie | 2.1 | 11°C |
| Nord du Pont d'Arciat | 9 | 14 | 328° NNO | aucun | pluie | 2.5 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 12 | 337° NNO | aucun | pluie | 3.6 | 10°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 24 | 40° NE | 08h-20h | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 15 | 22 | 32° NNE | 08h-12h | couvert | 0.0 | 14°C |
| Plage du Vengeron | 12 | 17 | 49° NE | 08h-13h | couvert | 0.0 | 15°C |
| Plage d'Hermance | 14 | 19 | 47° NE | 08h-18h | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 307° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 10 | 14 | 2° N | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 221° SO | aucun | couvert | 0.1 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 8 | 328° NNO | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 23° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 351° N | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 11 | 22 | 24° NNE | 10h-15h | couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 11 | 14° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 5 | 10 | 31° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 326° NO | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 24° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 5 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 5 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 25° NNE | aucun | soleil-couvert | 0.0 | 13°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 207° SSO | aucun | pluie | 2.7 | 15°C |
| Plage d'Excenevex | 12 | 16 | 38° NE | 08h-11h | couvert | 0.0 | 15°C |
| Plage du Vengeron | 7 | 10 | 49° NE | aucun | pluie | 3.7 | 16°C |
| Plage d'Hermance | 8 | 12 | 58° ENE | aucun | pluie | 2.8 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 347° NNO | aucun | pluie | 4.8 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 21° NNE | aucun | pluie | 1.2 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 189° S | 08h-16h | pluie | 4.9 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 15 | 193° SSO | aucun | orage | 20.3 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 25° NNE | aucun | orage | 33.1 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 241° OSO | aucun | orage | 29.4 | 15°C |
| Cruas - Nuclear Spot | 7 | 15 | 9° N | aucun | orage | 57.5 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 10° N | aucun | orage | 19.5 | 15°C |
| Nord du Pont de Chavanay | 5 | 13 | 358° N | aucun | orage | 19.8 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 344° NNO | aucun | orage | 14.2 | 15°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 232° SO | aucun | orage | 12.9 | 15°C |
| Saint-Romain-des-Iles | 13 | 23 | 310° NO | aucun | pluie | 9.2 | 13°C |
| Nord du Pont d'Arciat | 13 | 23 | 312° NO | aucun | pluie | 8.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 19 | 333° NNO | aucun | pluie | 6.1 | 15°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 28 | 217° SO | 08h-20h | pluie | 4.2 | 14°C |
| Plage d'Excenevex | 14 | 19 | 205° SSO | 13h-19h | pluie | 2.4 | 14°C |
| Plage du Vengeron | 15 | 21 | 212° SSO | 13h-18h | pluie | 2.1 | 14°C |
| Plage d'Hermance | 16 | 24 | 214° SO | 14h-18h | pluie | 1.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 10 | 115° ESE | aucun | pluie | 4.2 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 231° SO | aucun | pluie | 7.5 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 66° ENE | aucun | pluie | 1.2 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 10 | 32° NNE | aucun | pluie | 0.6 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 341° NNO | aucun | pluie | 2.5 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 10 | 323° NO | aucun | pluie | 3.4 | 12°C |
| Cruas - Nuclear Spot | 10 | 20 | 349° N | aucun | soleil-couvert | 0.7 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 190° S | aucun | pluie | 4.1 | 11°C |
| Nord du Pont de Chavanay | 4 | 9 | 190° S | aucun | pluie | 4.1 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 210° SSO | aucun | pluie | 4.8 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 11 | 210° SSO | aucun | pluie | 4.8 | 10°C |
| Saint-Romain-des-Iles | 7 | 12 | 202° SSO | aucun | pluie | 4.3 | 11°C |
| Nord du Pont d'Arciat | 7 | 12 | 202° SSO | aucun | pluie | 4.3 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 164° SSE | aucun | pluie | 6.0 | 11°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 215° SO | 11h-18h | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 13 | 16 | 232° SO | 11h-17h | soleil | 0.0 | 14°C |
| Plage du Vengeron | 13 | 17 | 217° SO | 13h-18h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 12 | 19 | 222° SO | 13h-18h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 77° ENE | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 59° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 44° NE | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 354° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 8° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 3° N | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 9 | 19 | 4° N | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 5 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 17° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 17° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 6 | 11 | 186° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 6 | 11 | 186° S | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 153° SSE | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 35 | 212° SSO | 08h-18h | pluie | 4.4 | 17°C |
| Plage d'Excenevex | 21 | 38 | 262° O | 08h-18h | pluie | 3.7 | 17°C |
| Plage du Vengeron | 21 | 32 | 239° OSO | 10h-18h | pluie | 3.2 | 17°C |
| Plage d'Hermance | 20 | 31 | 214° SO | 10h-18h | pluie | 3.7 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 23 | 232° SO | 11h-14h | orage | 6.7 | 15°C |
| Lac du Bourget - Cap des Séselets | 7 | 20 | 192° SSO | aucun | pluie | 12.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 32 | 175° S | 08h-13h | pluie | 0.8 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 140° SE | aucun | pluie | 2.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 185° S | aucun | pluie | 3.9 | 17°C |
| La Roche-de-Glun - Base Nautique | 9 | 21 | 198° SSO | aucun | pluie | 1.4 | 17°C |
| Cruas - Nuclear Spot | 4 | 11 | 194° SSO | aucun | pluie | 1.3 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 173° S | aucun | pluie | 2.7 | 15°C |
| Nord du Pont de Chavanay | 11 | 26 | 173° S | aucun | pluie | 2.7 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 27 | 175° S | aucun | soleil-couvert | 0.5 | 16°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 171° S | aucun | pluie | 1.9 | 15°C |
| Saint-Romain-des-Iles | 12 | 23 | 262° O | 08h-16h | soleil-couvert | 0.9 | 15°C |
| Nord du Pont d'Arciat | 12 | 23 | 262° O | 08h-16h | soleil-couvert | 0.9 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 28 | 189° S | aucun | pluie | 2.7 | 16°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 230° SO | aucun | pluie | 2.1 | 14°C |
| Plage d'Excenevex | 5 | 9 | 230° SO | aucun | pluie | 2.1 | 14°C |
| Plage du Vengeron | 5 | 9 | 230° SO | aucun | pluie | 2.1 | 14°C |
| Plage d'Hermance | 5 | 9 | 230° SO | aucun | pluie | 2.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 298° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 16 | 192° SSO | aucun | pluie | 4.5 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 19 | 327° NNO | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 17 | 353° N | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 160° SSE | aucun | pluie | 1.6 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 158° SSE | aucun | pluie | 1.2 | 12°C |
| Cruas - Nuclear Spot | 2 | 5 | 285° ONO | aucun | pluie | 2.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 154° SSE | aucun | pluie | 3.3 | 12°C |
| Nord du Pont de Chavanay | 3 | 6 | 154° SSE | aucun | pluie | 3.3 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 162° SSE | aucun | pluie | 1.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 2 | 13 | 187° S | aucun | pluie | 8.4 | 12°C |
| Saint-Romain-des-Iles | 7 | 13 | 256° OSO | aucun | pluie | 2.3 | 12°C |
| Nord du Pont d'Arciat | 7 | 13 | 256° OSO | aucun | pluie | 2.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 94° E | aucun | orage | 15.1 | 11°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 243° OSO | 12h-20h | couvert | 0.0 | 17°C |
| Plage d'Excenevex | 14 | 21 | 243° OSO | 12h-20h | couvert | 0.0 | 17°C |
| Plage du Vengeron | 14 | 21 | 243° OSO | 12h-20h | couvert | 0.0 | 17°C |
| Plage d'Hermance | 14 | 21 | 243° OSO | 12h-20h | couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 140° SE | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 191° S | aucun | pluie | 5.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 128° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 200° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 20 | 175° S | aucun | pluie | 4.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 22 | 193° SSO | 08h-11h | pluie | 1.1 | 14°C |
| Cruas - Nuclear Spot | 7 | 14 | 173° S | aucun | pluie | 0.7 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 165° SSE | 08h-11h | pluie | 1.4 | 13°C |
| Nord du Pont de Chavanay | 12 | 26 | 165° SSE | 08h-11h | pluie | 1.4 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 28 | 168° SSE | 08h-12h | pluie | 1.8 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 165° SSE | 08h-11h | pluie | 1.6 | 13°C |
| Saint-Romain-des-Iles | 8 | 21 | 179° S | aucun | pluie | 6.1 | 14°C |
| Nord du Pont d'Arciat | 8 | 21 | 179° S | aucun | pluie | 6.1 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 170° S | aucun | pluie | 2.5 | 15°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 12 | 237° OSO | aucun | couvert | 0.0 | 16°C |
| Plage d'Excenevex | 5 | 14 | 248° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 6 | 12 | 237° OSO | aucun | couvert | 0.0 | 16°C |
| Plage d'Hermance | 6 | 12 | 237° OSO | aucun | couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 120° ESE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 78° ENE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 17 | 355° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 347° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 7° N | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 356° N | aucun | soleil-couvert | 0.0 | 20°C |
| Cruas - Nuclear Spot | 8 | 20 | 29° NNE | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 10° N | aucun | soleil-couvert | 0.2 | 18°C |
| Nord du Pont de Chavanay | 3 | 9 | 10° N | aucun | soleil-couvert | 0.2 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 71° ENE | aucun | soleil-couvert | 0.2 | 18°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 15° NNE | aucun | soleil-couvert | 0.3 | 18°C |
| Saint-Romain-des-Iles | 3 | 6 | 178° S | aucun | pluie | 1.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 6 | 178° S | aucun | pluie | 1.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 137° SE | aucun | soleil-couvert | 0.7 | 17°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 20° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 4 | 7 | 53° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 4 | 7 | 20° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 4 | 7 | 20° NNE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 248° OSO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 27° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 201° SSO | aucun | soleil | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 208° SSO | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 189° S | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 190° S | aucun | soleil-couvert | 0.0 | 19°C |
| Cruas - Nuclear Spot | 7 | 17 | 205° SSO | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 168° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 8 | 20 | 168° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 173° S | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 8 | 21 | 170° S | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 13 | 171° S | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 6 | 13 | 171° S | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 179° S | aucun | soleil-couvert | 0.0 | 18°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 38° NE | aucun | pluie | 1.8 | 15°C |
| Plage d'Excenevex | 10 | 16 | 17° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 8 | 12 | 38° NE | aucun | pluie | 1.8 | 15°C |
| Plage d'Hermance | 8 | 12 | 38° NE | aucun | pluie | 1.8 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 12 | 355° N | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 140° SE | aucun | soleil-couvert | 0.6 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 20 | 357° N | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 350° N | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 7° N | 11h-20h | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 12 | 28 | 356° N | 13h-20h | soleil | 0.0 | 17°C |
| Cruas - Nuclear Spot | 14 | 32 | 15° NNE | 11h-20h | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 25 | 350° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 9 | 25 | 350° N | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 357° N | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 12° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 8 | 16 | 1° N | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 8 | 16 | 1° N | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 346° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 21 | 19° NNE | 08h-14h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 13 | 19 | 15° NNE | 08h-13h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 13 | 21 | 19° NNE | 08h-14h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 13 | 21 | 19° NNE | 08h-14h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 330° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 30° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 10 | 346° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 266° O | aucun | soleil-couvert | 0.1 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 29 | 7° N | 08h-14h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 25 | 355° N | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 13 | 32 | 18° NNE | 08h-15h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 14° NNE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 16 | 14° NNE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 17 | 319° NO | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 2° N | aucun | soleil | 0.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 11 | 326° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 6 | 11 | 326° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 19 | 330° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 229° SO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 5 | 7 | 210° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 5 | 8 | 229° SO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 5 | 8 | 229° SO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 248° OSO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 22° NNE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 196° SSO | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 211° SSO | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 181° S | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 180° S | aucun | soleil-couvert | 0.0 | 19°C |
| Cruas - Nuclear Spot | 5 | 13 | 195° SSO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 161° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 9 | 20 | 161° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 170° S | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 161° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 4 | 8 | 161° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 4 | 8 | 161° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 178° S | aucun | soleil-couvert | 0.0 | 19°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 128° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 1 | 4 | 279° O | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 3 | 5 | 128° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 3 | 5 | 128° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 276° O | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 195° SSO | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 45° NE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 56° NE | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 1 | 7 | 7° N | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 1 | 6 | 330° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 1 | 7 | 124° SE | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 55° NE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 2 | 8 | 55° NE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 11° N | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 33° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 2 | 7 | 149° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 2 | 7 | 149° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 4 | 333° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 13 | 237° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 7 | 14 | 229° SO | aucun | couvert | 0.0 | 16°C |
| Plage du Vengeron | 6 | 13 | 237° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 6 | 13 | 237° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 237° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 241° OSO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 191° S | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 204° SSO | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 184° S | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 186° S | 13h-17h | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 6 | 14 | 200° SSO | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 160° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 8 | 19 | 160° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 165° SSE | aucun | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 165° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 10 | 147° SSE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 4 | 10 | 147° SSE | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 184° S | aucun | couvert | 0.0 | 16°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 85° E | aucun | pluie | 1.1 | 13°C |
| Plage d'Excenevex | 10 | 18 | 24° NNE | aucun | soleil | 0.3 | 13°C |
| Plage du Vengeron | 8 | 12 | 85° E | aucun | pluie | 1.1 | 13°C |
| Plage d'Hermance | 8 | 12 | 85° E | aucun | pluie | 1.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 351° N | aucun | pluie | 0.7 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 56° NE | aucun | pluie | 0.5 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 351° N | aucun | couvert | 0.7 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 346° NNO | aucun | couvert | 0.1 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 33 | 7° N | 08h-14h | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 0° N | 08h-14h | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 14 | 34 | 13° NNE | 08h-14h | soleil-couvert | 0.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 353° N | aucun | soleil-couvert | 0.1 | 13°C |
| Nord du Pont de Chavanay | 9 | 22 | 353° N | aucun | soleil-couvert | 0.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 353° N | aucun | soleil-couvert | 0.1 | 12°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 350° N | aucun | soleil-couvert | 0.1 | 12°C |
| Saint-Romain-des-Iles | 6 | 13 | 341° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 6 | 13 | 341° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 347° NNO | aucun | soleil-couvert | 0.1 | 13°C |
