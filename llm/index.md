# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 19/10/2026 23:36 (Europe/Paris)
- Fichiers générés le : 2026-10-19T23:40:38+02:00
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

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 22 | 38° NE | 08h-20h | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 15 | 22 | 24° NNE | 08h-14h | couvert | 0.0 | 13°C |
| Plage du Vengeron | 14 | 18 | 49° NE | 08h-13h | couvert | 0.0 | 14°C |
| Plage d'Hermance | 16 | 21 | 38° NE | 08h-17h | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 326° NO | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 12 | 18 | 344° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 16 | 221° SO | aucun | couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 338° NNO | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 13 | 23° NNE | aucun | orage | 9.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 356° N | aucun | pluie | 6.9 | 14°C |
| Cruas - Nuclear Spot | 10 | 17 | 27° NNE | aucun | pluie | 13.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 8° N | aucun | pluie | 3.1 | 13°C |
| Nord du Pont de Chavanay | 6 | 11 | 12° NNE | aucun | pluie | 3.3 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 304° NO | aucun | pluie | 2.3 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 28° NNE | aucun | pluie | 1.9 | 12°C |
| Saint-Romain-des-Iles | 6 | 11 | 27° NNE | aucun | couvert | 0.4 | 13°C |
| Nord du Pont d'Arciat | 6 | 10 | 26° NNE | aucun | couvert | 0.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 11 | 360° N | aucun | couvert | 0.1 | 12°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 239° OSO | aucun | pluie | 6.5 | 14°C |
| Plage d'Excenevex | 4 | 9 | 75° ENE | aucun | pluie | 4.1 | 14°C |
| Plage du Vengeron | 4 | 6 | 242° OSO | aucun | pluie | 9.4 | 14°C |
| Plage d'Hermance | 4 | 5 | 135° SE | aucun | pluie | 7.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 348° NNO | aucun | pluie | 9.6 | 14°C |
| Lac du Bourget - Cap des Séselets | 9 | 10 | 5° N | aucun | pluie | 5.4 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 205° SSO | aucun | orage | 60.5 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 219° SO | aucun | orage | 53.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 14° NNE | aucun | orage | 34.9 | 15°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 270° O | aucun | orage | 24.8 | 16°C |
| Cruas - Nuclear Spot | 5 | 9 | 49° NE | aucun | orage | 34.3 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 9 | 346° NNO | aucun | orage | 22.1 | 15°C |
| Nord du Pont de Chavanay | 5 | 8 | 138° SE | aucun | orage | 20.4 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 313° NO | aucun | pluie | 14.2 | 15°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 205° SSO | aucun | pluie | 18.5 | 15°C |
| Saint-Romain-des-Iles | 8 | 13 | 348° NNO | aucun | orage | 12.7 | 15°C |
| Nord du Pont d'Arciat | 10 | 16 | 339° NNO | aucun | orage | 13.1 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 18 | 341° NNO | aucun | orage | 20.0 | 14°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 215° SO | 09h-20h | pluie | 2.0 | 14°C |
| Plage d'Excenevex | 13 | 17 | 216° SO | 13h-19h | pluie | 2.6 | 14°C |
| Plage du Vengeron | 16 | 22 | 215° SO | 12h-20h | pluie | 1.7 | 15°C |
| Plage d'Hermance | 14 | 22 | 219° SO | 14h-18h | pluie | 1.5 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 15 | 269° O | aucun | pluie | 6.4 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 12 | 83° E | aucun | pluie | 3.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 19 | 47° NE | aucun | pluie | 7.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 15° NNE | aucun | pluie | 2.7 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 356° N | aucun | pluie | 2.4 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 153° SSE | aucun | pluie | 1.9 | 13°C |
| Cruas - Nuclear Spot | 6 | 14 | 19° NNE | aucun | pluie | 1.5 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 155° SSE | aucun | pluie | 2.1 | 13°C |
| Nord du Pont de Chavanay | 5 | 12 | 161° SSE | aucun | pluie | 1.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 9 | 160° SSE | aucun | pluie | 2.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 209° SSO | aucun | pluie | 2.6 | 13°C |
| Saint-Romain-des-Iles | 10 | 16 | 182° S | aucun | pluie | 3.6 | 12°C |
| Nord du Pont d'Arciat | 10 | 15 | 186° S | aucun | pluie | 3.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 201° SSO | aucun | pluie | 3.0 | 12°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 12 | 224° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 8 | 11 | 228° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 5 | 7 | 240° OSO | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 7 | 10 | 213° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 306° NO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 3 | 60° ENE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 31° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 349° N | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 15 | 1° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 12 | 349° N | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 10 | 20 | 2° N | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 333° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 3 | 7 | 333° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 7 | 12 | 185° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 7 | 12 | 185° S | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 138° SE | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 27 | 40 | 233° SO | 08h-20h | pluie | 3.2 | 15°C |
| Plage d'Excenevex | 22 | 30 | 217° SO | 08h-20h | pluie | 2.0 | 15°C |
| Plage du Vengeron | 16 | 22 | 215° SO | 09h-20h | pluie | 1.6 | 15°C |
| Plage d'Hermance | 18 | 29 | 220° SO | 10h-20h | pluie | 2.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 17 | 172° S | aucun | pluie | 1.8 | 13°C |
| Lac du Bourget - Cap des Séselets | 7 | 18 | 230° SO | aucun | pluie | 7.8 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 29 | 171° S | 08h-13h | soleil-couvert | 0.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 142° SE | aucun | pluie | 0.7 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 218° SO | aucun | soleil-couvert | 0.5 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 18 | 187° S | aucun | pluie | 1.8 | 17°C |
| Cruas - Nuclear Spot | 5 | 9 | 194° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 23 | 183° S | 08h-14h | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 13 | 23 | 183° S | 08h-14h | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 179° S | 08h-13h | soleil-couvert | 0.1 | 17°C |
| Saint-Cyr-sur-le-Rhône | 13 | 26 | 179° S | 08h-13h | soleil-couvert | 0.1 | 17°C |
| Saint-Romain-des-Iles | 11 | 19 | 231° SO | aucun | pluie | 1.5 | 17°C |
| Nord du Pont d'Arciat | 11 | 19 | 231° SO | aucun | pluie | 1.5 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 30 | 192° SSO | 08h-14h | soleil-couvert | 0.1 | 17°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 223° SO | 12h-20h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 11 | 15 | 226° SO | 13h-17h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 11 | 15 | 212° SSO | 14h-19h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 11 | 16 | 217° SO | 14h-18h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 153° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 212° SSO | aucun | couvert | 0.5 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 28° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 31° NNE | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 44° NE | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 5 | 12 | 22° NNE | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 130° SE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 5 | 12 | 130° SE | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 13 | 177° S | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 190° S | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 8 | 15 | 166° SSE | aucun | couvert | 0.9 | 12°C |
| Nord du Pont d'Arciat | 8 | 15 | 166° SSE | aucun | couvert | 0.9 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 126° SE | aucun | couvert | 0.0 | 13°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 22 | 234° SO | 08h-20h | pluie | 19.2 | 14°C |
| Plage d'Excenevex | 14 | 22 | 234° SO | 08h-20h | pluie | 19.2 | 14°C |
| Plage du Vengeron | 14 | 22 | 234° SO | 08h-20h | pluie | 19.2 | 14°C |
| Plage d'Hermance | 14 | 22 | 234° SO | 08h-20h | pluie | 19.2 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 131° SE | aucun | pluie | 23.9 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 19 | 213° SSO | aucun | pluie | 22.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 158° SSE | aucun | orage | 47.7 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 190° S | aucun | orage | 39.4 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 176° S | 08h-15h | pluie | 1.4 | 14°C |
| La Roche-de-Glun - Base Nautique | 15 | 31 | 189° S | 08h-16h | pluie | 3.8 | 13°C |
| Cruas - Nuclear Spot | 9 | 23 | 186° S | aucun | pluie | 3.6 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 30 | 168° SSE | 08h-15h | pluie | 4.0 | 12°C |
| Nord du Pont de Chavanay | 14 | 30 | 168° SSE | 08h-15h | pluie | 4.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 32 | 164° SSE | 08h-15h | pluie | 7.9 | 12°C |
| Saint-Cyr-sur-le-Rhône | 14 | 30 | 164° SSE | 08h-15h | pluie | 4.4 | 12°C |
| Saint-Romain-des-Iles | 14 | 25 | 178° S | aucun | pluie | 9.4 | 13°C |
| Nord du Pont d'Arciat | 14 | 25 | 178° S | aucun | pluie | 9.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 30 | 188° S | 08h-15h | pluie | 7.4 | 12°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 242° OSO | aucun | couvert | 0.3 | 13°C |
| Plage d'Excenevex | 9 | 14 | 242° OSO | aucun | couvert | 0.3 | 13°C |
| Plage du Vengeron | 9 | 14 | 242° OSO | aucun | couvert | 0.3 | 13°C |
| Plage d'Hermance | 9 | 14 | 242° OSO | aucun | couvert | 0.3 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 138° SE | aucun | pluie | 2.7 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 178° S | aucun | pluie | 6.3 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 16 | 322° NO | aucun | couvert | 0.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 353° N | aucun | couvert | 0.3 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 13° NNE | 12h-20h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 10° N | 14h-17h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 11 | 27 | 24° NNE | 13h-20h | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 18 | 11° N | aucun | pluie | 1.8 | 10°C |
| Nord du Pont de Chavanay | 6 | 18 | 11° N | aucun | pluie | 1.8 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 16 | 8° N | aucun | pluie | 2.4 | 10°C |
| Saint-Cyr-sur-le-Rhône | 7 | 19 | 3° N | aucun | pluie | 1.8 | 10°C |
| Saint-Romain-des-Iles | 7 | 16 | 287° ONO | aucun | soleil-couvert | 0.6 | 10°C |
| Nord du Pont d'Arciat | 7 | 16 | 287° ONO | aucun | soleil-couvert | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 3° N | aucun | soleil-couvert | 0.6 | 10°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 12 | 38° NE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 5 | 12 | 26° NNE | aucun | soleil | 0.0 | 10°C |
| Plage du Vengeron | 6 | 12 | 38° NE | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 6 | 12 | 38° NE | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 314° NO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 45° NE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 197° SSO | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 198° SSO | aucun | soleil | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 6° N | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 356° N | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 9 | 21 | 24° NNE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 18° NNE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 14 | 18° NNE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 12° NNE | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 12° NNE | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 2 | 7 | 59° ENE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 7 | 59° ENE | aucun | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 6° N | aucun | soleil | 0.0 | 12°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 128° SE | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 3 | 6 | 2° N | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 3 | 6 | 128° SE | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 3 | 6 | 128° SE | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 285° ONO | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 37° NE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 9° N | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 18° NNE | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 18 | 5° N | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 352° N | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 9 | 20 | 13° NNE | aucun | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 11° N | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 3 | 9 | 11° N | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 312° NO | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 15° NNE | aucun | couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 2 | 6 | 317° NO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 6 | 317° NO | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 338° NNO | aucun | couvert | 0.0 | 12°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 29° NNE | 08h-20h | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 10 | 16 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 11 | 16 | 29° NNE | 08h-20h | soleil | 0.0 | 14°C |
| Plage d'Hermance | 11 | 16 | 29° NNE | 08h-20h | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 320° NO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 255° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 25° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 24° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 5° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 360° N | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 10 | 24 | 27° NNE | 08h-14h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 6° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 16 | 6° N | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 351° N | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 353° N | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 6 | 14 | 359° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 6 | 14 | 359° N | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 341° NNO | aucun | soleil-couvert | 0.0 | 13°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 10 | 28° NNE | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 6 | 10 | 45° NE | aucun | soleil | 0.0 | 12°C |
| Plage du Vengeron | 5 | 10 | 28° NNE | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 5 | 10 | 28° NNE | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 257° OSO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 18° NNE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 199° SSO | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 232° SO | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 183° S | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 183° S | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 5 | 14 | 200° SSO | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 159° SSE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 6 | 16 | 159° SSE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 167° SSE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 163° SSE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 10 | 155° SSE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 4 | 10 | 155° SSE | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 153° SSE | aucun | soleil | 0.0 | 16°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 357° N | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 6 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 6 | 8 | 357° N | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 6 | 8 | 357° N | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 287° ONO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 1° N | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 16 | 187° S | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 187° S | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 198° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 200° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 4 | 11 | 235° SO | aucun | couvert | 0.6 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 170° S | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 9 | 21 | 170° S | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 158° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 161° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 7 | 14 | 163° SSE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 7 | 14 | 163° SSE | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 142° SE | aucun | soleil-couvert | 0.0 | 16°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 27° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 6 | 10 | 28° NNE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 11 | 27° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 6 | 11 | 27° NNE | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 62° ENE | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 16° NNE | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 216° SO | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 207° SSO | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 214° SO | aucun | pluie | 6.8 | 15°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 319° NO | aucun | pluie | 4.9 | 14°C |
| Cruas - Nuclear Spot | 4 | 11 | 221° SO | aucun | pluie | 16.7 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 15 | 205° SSO | aucun | pluie | 6.4 | 14°C |
| Nord du Pont de Chavanay | 2 | 15 | 205° SSO | aucun | pluie | 6.4 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 4° N | aucun | pluie | 5.7 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 17 | 90° E | aucun | pluie | 6.5 | 13°C |
| Saint-Romain-des-Iles | 2 | 10 | 144° SE | aucun | pluie | 2.6 | 12°C |
| Nord du Pont d'Arciat | 2 | 10 | 144° SE | aucun | pluie | 2.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 90° E | aucun | couvert | 0.1 | 13°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 217° SO | 13h-16h | pluie | 1.6 | 12°C |
| Plage d'Excenevex | 16 | 22 | 228° SO | 11h-18h | pluie | 1.2 | 13°C |
| Plage du Vengeron | 12 | 16 | 217° SO | 13h-16h | pluie | 1.6 | 12°C |
| Plage d'Hermance | 12 | 16 | 217° SO | 13h-16h | pluie | 1.6 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 230° SO | aucun | pluie | 5.8 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 180° S | aucun | pluie | 1.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 17 | 333° NNO | aucun | pluie | 6.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 21 | 203° SSO | aucun | pluie | 2.8 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 12° NNE | aucun | pluie | 5.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 330° NNO | aucun | pluie | 5.1 | 12°C |
| Cruas - Nuclear Spot | 4 | 9 | 356° N | aucun | orage | 6.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 72° ENE | aucun | orage | 6.9 | 12°C |
| Nord du Pont de Chavanay | 4 | 12 | 72° ENE | aucun | orage | 6.9 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 35° NE | aucun | orage | 7.6 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 65° ENE | aucun | orage | 7.7 | 11°C |
| Saint-Romain-des-Iles | 6 | 9 | 303° ONO | aucun | pluie | 6.1 | 10°C |
| Nord du Pont d'Arciat | 6 | 9 | 303° ONO | aucun | pluie | 6.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 300° ONO | aucun | pluie | 4.8 | 11°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 3 | 7 | 357° N | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 4 | 8 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 4 | 8 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 309° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 198° SSO | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 225° SO | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 10° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 8 | 345° NNO | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 5 | 12 | 13° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 5 | 322° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 2 | 5 | 322° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 94° E | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 109° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 1 | 3 | 324° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 1 | 3 | 324° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 159° SSE | aucun | soleil-couvert | 0.0 | 10°C |
