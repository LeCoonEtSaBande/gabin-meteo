# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 22/10/2026 22:37 (Europe/Paris)
- Fichiers générés le : 2026-10-22T22:42:36+02:00
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

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 239° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 8 | 12 | 236° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 7 | 203° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 9 | 12 | 222° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 7 | 142° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 39° NE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 360° N | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 353° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 2° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 21° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 8 | 16 | 18° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 7 | 207° SSO | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 7 | 208° SSO | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 156° SSE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 208° SSO | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 10 | 16 | 179° S | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 10 | 16 | 189° S | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 188° S | aucun | soleil | 0.0 | 13°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 35 | 204° SSO | 08h-20h | orage | 11.8 | 15°C |
| Plage d'Excenevex | 20 | 29 | 191° S | 10h-20h | orage | 16.2 | 14°C |
| Plage du Vengeron | 21 | 29 | 203° SSO | 09h-20h | orage | 19.6 | 15°C |
| Plage d'Hermance | 23 | 54 | 187° S | 09h-20h | orage | 11.4 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 19 | 154° SSE | 11h-17h | orage | 12.7 | 14°C |
| Lac du Bourget - Cap des Séselets | 16 | 24 | 185° S | 11h-19h | orage | 12.2 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 195° SSO | 08h-11h | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 21 | 197° SSO | aucun | pluie | 2.5 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 164° SSE | aucun | pluie | 4.3 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 175° S | aucun | pluie | 1.8 | 14°C |
| Cruas - Nuclear Spot | 6 | 12 | 203° SSO | aucun | pluie | 2.7 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 20 | 142° SE | aucun | soleil-couvert | 0.3 | 15°C |
| Nord du Pont de Chavanay | 11 | 18 | 137° SE | aucun | couvert | 0.2 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 169° S | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 196° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 14 | 24 | 206° SSO | 09h-14h | soleil-couvert | 0.3 | 15°C |
| Nord du Pont d'Arciat | 14 | 21 | 202° SSO | 09h-14h | soleil-couvert | 0.2 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 19 | 30 | 189° S | 08h-11h | couvert | 0.0 | 15°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 212° SSO | 08h-19h | pluie | 1.7 | 11°C |
| Plage d'Excenevex | 12 | 18 | 216° SO | 08h-14h | pluie | 1.8 | 10°C |
| Plage du Vengeron | 14 | 19 | 210° SSO | 08h-15h | pluie | 1.3 | 11°C |
| Plage d'Hermance | 12 | 19 | 213° SSO | aucun | pluie | 1.7 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 132° SE | aucun | couvert | 0.3 | 10°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 203° SSO | aucun | pluie | 1.9 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 32° NNE | aucun | couvert | 0.5 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 353° N | aucun | soleil-couvert | 0.2 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 48° NE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 209° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 8 | 182° S | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 8 | 219° SO | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 180° S | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 221° SO | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 9 | 15 | 183° S | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 9 | 13 | 190° S | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 11 | 177° S | aucun | couvert | 0.0 | 12°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 33 | 226° SO | 08h-20h | pluie | 6.5 | 13°C |
| Plage d'Excenevex | 17 | 23 | 209° SSO | 08h-19h | orage | 6.9 | 14°C |
| Plage du Vengeron | 17 | 22 | 210° SSO | 08h-19h | pluie | 4.0 | 14°C |
| Plage d'Hermance | 16 | 24 | 227° SO | 10h-18h | pluie | 3.7 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 11 | 133° SE | aucun | pluie | 4.4 | 15°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 268° O | aucun | pluie | 12.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 61° ENE | aucun | couvert | 0.5 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 27° NNE | aucun | couvert | 0.1 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 19 | 203° SSO | 11h-17h | couvert | 0.2 | 12°C |
| La Roche-de-Glun - Base Nautique | 15 | 24 | 197° SSO | 09h-17h | couvert | 0.4 | 13°C |
| Cruas - Nuclear Spot | 5 | 9 | 196° SSO | aucun | pluie | 1.2 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 29 | 163° SSE | 09h-16h | couvert | 0.7 | 13°C |
| Nord du Pont de Chavanay | 14 | 29 | 163° SSE | 09h-16h | couvert | 0.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 30 | 183° S | 08h-16h | couvert | 0.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 15 | 30 | 183° S | 08h-16h | couvert | 0.1 | 13°C |
| Saint-Romain-des-Iles | 16 | 25 | 187° S | 08h-15h | pluie | 4.3 | 12°C |
| Nord du Pont d'Arciat | 16 | 25 | 187° S | 08h-15h | pluie | 4.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 27 | 181° S | 08h-15h | pluie | 1.1 | 13°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 211° SSO | 13h-17h | couvert | 0.0 | 16°C |
| Plage d'Excenevex | 10 | 13 | 230° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 12 | 16 | 211° SSO | 13h-17h | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 11 | 18 | 217° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 65° ENE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 60° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 38° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 351° N | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 8° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 11 | 341° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 23 | 17° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 5 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 47° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 47° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 11 | 156° SSE | aucun | soleil-couvert | 0.1 | 13°C |
| Nord du Pont d'Arciat | 7 | 11 | 156° SSE | aucun | soleil-couvert | 0.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 129° SE | aucun | couvert | 0.1 | 12°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 241° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Excenevex | 9 | 14 | 241° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 9 | 14 | 241° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 9 | 14 | 241° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 130° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 232° SO | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 203° SSO | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 193° SSO | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 195° SSO | 13h-17h | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 193° SSO | 13h-19h | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 9 | 20 | 202° SSO | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 170° S | 13h-19h | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 12 | 27 | 170° S | 13h-19h | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 173° S | 13h-20h | soleil | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 169° S | 13h-19h | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 8 | 16 | 170° S | aucun | soleil | 0.0 | 19°C |
| Nord du Pont d'Arciat | 8 | 16 | 170° S | aucun | soleil | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 176° S | aucun | soleil | 0.0 | 19°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 41° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 9 | 14 | 41° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 9 | 14 | 41° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 9 | 14 | 41° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 330° NNO | aucun | couvert | 0.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 130° SE | aucun | couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 325° NO | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 13 | 12° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 1° N | 10h-20h | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 358° N | 12h-20h | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 14 | 32 | 13° NNE | 10h-20h | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 21 | 2° N | aucun | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 10 | 21 | 2° N | aucun | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 340° NNO | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 354° N | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 12 | 346° NNO | aucun | soleil-couvert | 0.3 | 14°C |
| Nord du Pont d'Arciat | 7 | 12 | 346° NNO | aucun | soleil-couvert | 0.3 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 337° NNO | aucun | soleil-couvert | 0.0 | 15°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 12° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 7 | 10 | 12° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 7 | 10 | 12° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 7 | 10 | 12° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 353° N | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 28° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 118° ESE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 200° SSO | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 17 | 8° N | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 4 | 13 | 323° NO | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 6 | 19 | 24° NNE | aucun | soleil-couvert | 0.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 208° SSO | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 2 | 8 | 208° SSO | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 155° SSE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 225° SO | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 9 | 155° SSE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 4 | 9 | 155° SSE | aucun | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 150° SSE | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 23° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 8 | 38° NE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 4 | 8 | 23° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Hermance | 4 | 8 | 23° NNE | aucun | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 279° O | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 27° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 41° NE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 42° NE | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 160° SSE | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 160° SSE | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 2 | 7 | 198° SSO | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 156° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 4 | 11 | 156° SSE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 159° SSE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 158° SSE | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 3 | 8 | 161° SSE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 3 | 8 | 161° SSE | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 142° SE | aucun | soleil | 0.0 | 19°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 16° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 6 | 37° NE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 4 | 6 | 16° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 4 | 6 | 16° NNE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 306° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 40° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 4 | 190° S | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 191° S | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 4° N | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 351° N | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 4 | 10 | 37° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 36° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 4 | 11 | 36° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 28° NNE | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 25° NNE | aucun | couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 3 | 8 | 64° ENE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 3 | 8 | 64° ENE | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 338° NNO | aucun | couvert | 0.0 | 15°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 8 | 26° NNE | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 3 | 8 | 35° NE | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 3 | 8 | 26° NNE | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 3 | 8 | 26° NNE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 248° OSO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 18° NNE | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 148° SSE | aucun | couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 148° SSE | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 186° S | aucun | couvert | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 194° SSO | aucun | couvert | 0.6 | 16°C |
| Cruas - Nuclear Spot | 5 | 13 | 181° S | aucun | couvert | 0.6 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 150° SSE | aucun | couvert | 0.6 | 15°C |
| Nord du Pont de Chavanay | 4 | 10 | 150° SSE | aucun | couvert | 0.6 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 175° S | aucun | pluie | 1.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 158° SSE | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 3 | 8 | 149° SSE | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 3 | 8 | 149° SSE | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 178° S | aucun | couvert | 0.0 | 14°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 203° SSO | aucun | pluie | 2.0 | 12°C |
| Plage d'Excenevex | 10 | 16 | 226° SO | aucun | pluie | 1.9 | 13°C |
| Plage du Vengeron | 7 | 12 | 203° SSO | aucun | pluie | 2.0 | 12°C |
| Plage d'Hermance | 7 | 12 | 203° SSO | aucun | pluie | 2.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 285° ONO | aucun | pluie | 2.1 | 9°C |
| Lac du Bourget - Cap des Séselets | 1 | 4 | 264° O | aucun | pluie | 4.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 3° N | aucun | pluie | 1.8 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 350° N | aucun | pluie | 1.6 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 8° N | aucun | soleil-couvert | 0.1 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 7° N | aucun | soleil-couvert | 0.9 | 13°C |
| Cruas - Nuclear Spot | 10 | 24 | 13° NNE | aucun | soleil-couvert | 0.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 18° NNE | aucun | pluie | 2.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 13 | 18° NNE | aucun | pluie | 2.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 6° N | aucun | pluie | 1.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 13° NNE | aucun | pluie | 2.8 | 12°C |
| Saint-Romain-des-Iles | 7 | 13 | 319° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 7 | 13 | 319° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 354° N | aucun | pluie | 0.6 | 13°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 40° NE | aucun | pluie | 1.3 | 10°C |
| Plage d'Excenevex | 8 | 14 | 22° NNE | aucun | couvert | 0.3 | 10°C |
| Plage du Vengeron | 6 | 10 | 40° NE | aucun | pluie | 1.3 | 10°C |
| Plage d'Hermance | 6 | 10 | 40° NE | aucun | pluie | 1.3 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 253° OSO | aucun | couvert | 0.7 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 191° S | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 1° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 11° N | aucun | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 7 | 18 | 39° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 38° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 4 | 12 | 38° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 19° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 23° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 3 | 8 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 8 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 335° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 194° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 2 | 6 | 292° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 4 | 7 | 194° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 7 | 194° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 248° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 229° SO | aucun | couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 197° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 216° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 192° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 184° S | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 4 | 11 | 187° S | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 87° E | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 2 | 8 | 87° E | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 48° NE | aucun | soleil-couvert | 0.6 | 11°C |
| Saint-Romain-des-Iles | 1 | 7 | 315° NO | aucun | soleil-couvert | 0.1 | 11°C |
| Nord du Pont d'Arciat | 1 | 7 | 315° NO | aucun | soleil-couvert | 0.1 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 348° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 23° NNE | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 8 | 12 | 13° NNE | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 10 | 14 | 23° NNE | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 10 | 14 | 23° NNE | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 333° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 36° NE | aucun | couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 14° NNE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 360° N | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 6° N | 15h-20h | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 346° NNO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 11 | 25 | 11° N | 14h-20h | couvert | 0.1 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 350° N | aucun | pluie | 1.2 | 11°C |
| Nord du Pont de Chavanay | 6 | 15 | 350° N | aucun | pluie | 1.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 315° NO | aucun | pluie | 2.4 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 342° NNO | aucun | pluie | 1.8 | 11°C |
| Saint-Romain-des-Iles | 7 | 13 | 348° NNO | aucun | couvert | 0.1 | 10°C |
| Nord du Pont d'Arciat | 7 | 13 | 348° NNO | aucun | couvert | 0.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 339° NNO | aucun | pluie | 1.8 | 10°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 13 | 29° NNE | aucun | couvert | 0.1 | 10°C |
| Plage d'Excenevex | 7 | 12 | 15° NNE | aucun | couvert | 0.1 | 10°C |
| Plage du Vengeron | 6 | 13 | 29° NNE | aucun | couvert | 0.1 | 10°C |
| Plage d'Hermance | 6 | 13 | 29° NNE | aucun | couvert | 0.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 344° NNO | aucun | pluie | 1.4 | 8°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 117° ESE | aucun | couvert | 0.7 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 337° NNO | aucun | pluie | 1.2 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 327° NNO | aucun | pluie | 1.3 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 23 | 6° N | 08h-14h | pluie | 2.1 | 8°C |
| La Roche-de-Glun - Base Nautique | 11 | 21 | 354° N | 08h-11h | pluie | 1.2 | 8°C |
| Cruas - Nuclear Spot | 13 | 28 | 18° NNE | 08h-14h | pluie | 1.5 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 2° N | aucun | couvert | 0.7 | 9°C |
| Nord du Pont de Chavanay | 8 | 18 | 2° N | aucun | couvert | 0.7 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 17 | 344° NNO | aucun | couvert | 0.7 | 8°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 354° N | aucun | couvert | 0.7 | 8°C |
| Saint-Romain-des-Iles | 8 | 17 | 6° N | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 8 | 17 | 6° N | aucun | couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 352° N | aucun | couvert | 0.1 | 9°C |
