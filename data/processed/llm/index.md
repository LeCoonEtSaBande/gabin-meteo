# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 21/10/2026 22:43 (Europe/Paris)
- Fichiers générés le : 2026-10-21T22:47:53+02:00
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

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 216° SO | 08h-20h | pluie | 6.5 | 13°C |
| Plage d'Excenevex | 11 | 19 | 210° SSO | aucun | pluie | 8.0 | 12°C |
| Plage du Vengeron | 16 | 21 | 210° SSO | 13h-20h | pluie | 2.9 | 12°C |
| Plage d'Hermance | 18 | 25 | 215° SO | 13h-19h | pluie | 2.9 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 11 | 348° NNO | aucun | pluie | 4.4 | 12°C |
| Lac du Bourget - Cap des Séselets | 8 | 12 | 24° NNE | aucun | pluie | 2.6 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 14 | 353° N | aucun | pluie | 2.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 5° N | aucun | pluie | 1.3 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 11 | 340° NNO | aucun | soleil-couvert | 0.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 167° SSE | aucun | pluie | 1.3 | 14°C |
| Cruas - Nuclear Spot | 8 | 18 | 25° NNE | aucun | pluie | 1.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 167° SSE | aucun | pluie | 1.5 | 13°C |
| Nord du Pont de Chavanay | 5 | 11 | 161° SSE | aucun | pluie | 1.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 153° SSE | aucun | pluie | 1.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 215° SO | aucun | pluie | 1.1 | 13°C |
| Saint-Romain-des-Iles | 10 | 16 | 186° S | aucun | pluie | 2.9 | 13°C |
| Nord du Pont d'Arciat | 12 | 17 | 185° S | 13h-16h | pluie | 1.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 216° SO | aucun | pluie | 1.7 | 12°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 214° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 9 | 13 | 224° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 7 | 10 | 221° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 9 | 12 | 227° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 171° S | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 35° NE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 1° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 346° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 359° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 355° N | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 8 | 16 | 27° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 213° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 7 | 223° SO | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 159° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 212° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 7 | 12 | 177° S | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 7 | 12 | 186° S | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 159° SSE | aucun | soleil | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 32 | 48 | 211° SSO | 09h-20h | pluie | 5.4 | 15°C |
| Plage d'Excenevex | 24 | 33 | 218° SO | 10h-20h | pluie | 8.3 | 15°C |
| Plage du Vengeron | 23 | 31 | 198° SSO | 11h-20h | pluie | 7.2 | 16°C |
| Plage d'Hermance | 19 | 29 | 203° SSO | 12h-20h | orage | 10.8 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 17 | 157° SSE | aucun | orage | 6.4 | 15°C |
| Lac du Bourget - Cap des Séselets | 15 | 25 | 219° SO | 13h-19h | pluie | 0.8 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 28 | 170° S | 08h-12h | orage | 5.7 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 124° SE | aucun | orage | 9.1 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 159° SSE | aucun | pluie | 1.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 171° S | aucun | pluie | 0.9 | 16°C |
| Cruas - Nuclear Spot | 8 | 17 | 236° SO | aucun | pluie | 3.7 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 23 | 141° SE | aucun | pluie | 1.6 | 17°C |
| Nord du Pont de Chavanay | 10 | 17 | 142° SE | aucun | pluie | 1.1 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 31 | 168° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 192° SSO | aucun | soleil-couvert | 0.1 | 17°C |
| Saint-Romain-des-Iles | 15 | 25 | 229° SO | 09h-16h | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 15 | 24 | 222° SO | 12h-15h | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 29 | 182° S | 08h-18h | couvert | 0.5 | 16°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 15 | 232° SO | 15h-18h | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 11 | 14 | 236° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 9 | 13 | 233° SO | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 10 | 15 | 236° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 43° NE | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 10 | 208° SSO | aucun | pluie | 3.9 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 9° N | 11h-17h | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 2° N | 11h-16h | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 23° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 5 | 9 | 11° N | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 8 | 16 | 23° NNE | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 10 | 117° ESE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 7 | 10 | 117° ESE | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 99° E | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 99° E | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 9 | 18 | 154° SSE | aucun | pluie | 1.5 | 12°C |
| Nord du Pont d'Arciat | 9 | 18 | 154° SSE | aucun | pluie | 1.5 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 128° SE | aucun | couvert | 0.4 | 12°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 24 | 218° SO | 08h-20h | pluie | 10.3 | 12°C |
| Plage d'Excenevex | 14 | 19 | 203° SSO | 10h-20h | pluie | 6.3 | 13°C |
| Plage du Vengeron | 13 | 17 | 224° SO | 12h-15h | pluie | 3.2 | 13°C |
| Plage d'Hermance | 12 | 19 | 215° SO | 10h-15h | pluie | 5.4 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 137° SE | aucun | orage | 11.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 259° O | aucun | orage | 16.9 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 43° NE | aucun | orage | 8.4 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 209° SSO | aucun | pluie | 4.4 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 200° SSO | aucun | pluie | 3.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 13 | 22 | 189° S | 10h-16h | pluie | 4.0 | 12°C |
| Cruas - Nuclear Spot | 6 | 7 | 22° NNE | aucun | pluie | 1.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 22 | 155° SSE | 11h-14h | pluie | 1.2 | 12°C |
| Nord du Pont de Chavanay | 12 | 22 | 155° SSE | 11h-14h | pluie | 1.2 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 180° S | 09h-15h | pluie | 3.4 | 12°C |
| Saint-Cyr-sur-le-Rhône | 13 | 26 | 180° S | 09h-15h | pluie | 3.4 | 12°C |
| Saint-Romain-des-Iles | 14 | 21 | 182° S | 08h-14h | pluie | 4.5 | 12°C |
| Nord du Pont d'Arciat | 14 | 21 | 182° S | 08h-14h | pluie | 4.5 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 21 | 175° S | 09h-14h | pluie | 3.6 | 12°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 292° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 5 | 292° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 4 | 5 | 292° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 4 | 5 | 292° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 315° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 342° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 161° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 5 | 199° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 352° N | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 317° NO | aucun | soleil | 0.0 | 22°C |
| Cruas - Nuclear Spot | 4 | 12 | 353° N | aucun | soleil | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 141° SE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 2 | 7 | 141° SE | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 84° E | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 69° ENE | aucun | soleil | 0.0 | 20°C |
| Saint-Romain-des-Iles | 5 | 9 | 210° SSO | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 5 | 9 | 210° SSO | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 120° ESE | aucun | soleil-couvert | 0.0 | 20°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 309° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 4 | 6 | 309° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 4 | 6 | 309° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 4 | 6 | 309° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 108° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 249° OSO | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 114° ESE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 197° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 190° S | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 188° S | 11h-16h | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 6 | 16 | 205° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 24 | 170° S | 12h-16h | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 12 | 24 | 170° S | 12h-16h | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 169° S | 12h-16h | soleil | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 12 | 24 | 168° SSE | 12h-16h | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 6 | 12 | 176° S | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 6 | 12 | 176° S | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 174° S | aucun | soleil | 0.0 | 20°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 4 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 4 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 4 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 321° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 1 | 4 | 54° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 321° NO | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 15° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 27 | 8° N | 09h-17h | couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 3° N | 12h-16h | couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 12 | 27 | 15° NNE | 08h-18h | couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 2° N | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 8 | 19 | 2° N | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 347° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 353° N | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 6 | 12 | 6° N | aucun | couvert | 0.6 | 16°C |
| Nord du Pont d'Arciat | 6 | 12 | 6° N | aucun | couvert | 0.6 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 348° NNO | aucun | couvert | 0.0 | 18°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 5 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 5 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 5 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 297° ONO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 32° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 206° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 222° SO | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 16 | 173° S | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 178° S | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 4 | 11 | 10° N | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 178° S | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 5 | 13 | 178° S | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 182° S | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 179° S | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 5 | 10 | 155° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 5 | 10 | 155° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 131° SE | aucun | soleil-couvert | 0.0 | 15°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 3° N | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 6 | 29° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 3 | 7 | 3° N | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 3 | 7 | 3° N | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 270° O | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 12° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 196° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 200° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 192° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 194° SSO | 12h-16h | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 7 | 17 | 207° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 168° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 9 | 22 | 168° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 163° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 163° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 13 | 168° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 13 | 168° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 162° SSE | aucun | soleil-couvert | 0.0 | 19°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 243° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 2 | 6 | 255° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 4 | 8 | 243° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 4 | 8 | 243° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 252° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 2° N | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 234° SO | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 245° OSO | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 187° S | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 190° S | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 5 | 12 | 203° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 164° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 7 | 16 | 164° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 176° S | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 174° S | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 5 | 10 | 153° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 5 | 10 | 153° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 185° S | aucun | soleil-couvert | 0.0 | 18°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 22° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 3 | 7 | 32° NNE | aucun | soleil-couvert | 0.1 | 15°C |
| Plage du Vengeron | 3 | 6 | 22° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 3 | 6 | 22° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 287° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 28° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 37° NE | aucun | couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 323° NO | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 168° SSE | aucun | couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 172° S | aucun | couvert | 0.0 | 19°C |
| Cruas - Nuclear Spot | 4 | 11 | 200° SSO | aucun | couvert | 0.6 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 159° SSE | aucun | couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 3 | 10 | 159° SSE | aucun | couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 168° SSE | aucun | couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 169° S | aucun | couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 2 | 7 | 135° SE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 2 | 7 | 135° SE | aucun | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 177° S | aucun | couvert | 0.0 | 18°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 35° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 6 | 10 | 25° NNE | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 7 | 11 | 35° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 7 | 11 | 35° NE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 324° NO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 24° NNE | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 203° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 238° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 209° SSO | aucun | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 164° SSE | aucun | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 2 | 8 | 214° SO | aucun | couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 153° SSE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 4 | 11 | 153° SSE | aucun | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 134° SE | aucun | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 151° SSE | aucun | couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 3 | 8 | 147° SSE | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 3 | 8 | 147° SSE | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 75° ENE | aucun | couvert | 0.0 | 15°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 9 | 51° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 4 | 10 | 48° NE | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 2 | 9 | 51° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 2 | 9 | 51° NE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 283° ONO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 27° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 207° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 222° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 187° S | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 187° S | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 5 | 13 | 208° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 160° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 6 | 16 | 160° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 157° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 159° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 4 | 10 | 169° S | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 4 | 10 | 169° S | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 159° SSE | aucun | soleil-couvert | 0.0 | 18°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 6 | 9 | 17° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 6 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 6 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 64° ENE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 24° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 11° N | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 21° NNE | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 18 | 3° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 351° N | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 9 | 21 | 7° N | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 338° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 6 | 14 | 338° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 333° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 333° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 6 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 346° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 38° NE | 08h-14h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 14 | 21 | 25° NNE | 08h-14h | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 14 | 21 | 38° NE | 08h-14h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 14 | 21 | 38° NE | 08h-14h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 349° N | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 43° NE | aucun | couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 3° N | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 319° NO | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 1° N | 08h-14h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 353° N | 08h-11h | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 12 | 27 | 23° NNE | 08h-14h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 3° N | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 18 | 3° N | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 333° NNO | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 347° NNO | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 8 | 16 | 8° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 8 | 16 | 8° N | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 344° NNO | aucun | soleil-couvert | 0.0 | 12°C |
