# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 14/11/2026 13:19 (Europe/Paris)
- Fichiers générés le : 2026-11-14T13:21:11+01:00
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

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 39° NE | 08h-12h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 14 | 22 | 25° NNE | 08h-12h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 13 | 18 | 47° NE | 08h-11h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 13 | 18 | 47° NE | 08h-11h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 337° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 22° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 205° SSO | 10h-14h | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 12 | 196° SSO | aucun | pluie | 2.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 8 | 205° SSO | aucun | pluie | 2.6 | 9°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 184° S | aucun | pluie | 1.5 | 8°C |
| Cruas - Nuclear Spot | 8 | 16 | 23° NNE | aucun | orage | 9.1 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 180° S | aucun | pluie | 1.9 | 9°C |
| Nord du Pont de Chavanay | 5 | 9 | 192° SSO | aucun | pluie | 1.9 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 149° SSE | aucun | soleil-couvert | 0.6 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 240° OSO | aucun | pluie | 2.3 | 10°C |
| Saint-Romain-des-Iles | 3 | 3 | 172° S | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 4 | 8 | 186° S | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 126° SE | aucun | pluie | 0.8 | 10°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 28 | 224° SO | 15h-20h | pluie | 1.1 | 13°C |
| Plage d'Excenevex | 11 | 15 | 224° SO | aucun | pluie | 3.2 | 13°C |
| Plage du Vengeron | 14 | 19 | 212° SSO | 14h-17h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 16 | 21 | 208° SSO | 15h-20h | pluie | 0.7 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 196° SSO | aucun | pluie | 2.4 | 14°C |
| Lac du Bourget - Cap des Séselets | 9 | 11 | 159° SSE | aucun | pluie | 2.5 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 30 | 182° S | 11h-20h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 153° SSE | aucun | pluie | 0.8 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 18 | 190° S | 12h-16h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 199° SSO | aucun | pluie | 0.6 | 14°C |
| Cruas - Nuclear Spot | 7 | 13 | 199° SSO | aucun | pluie | 2.1 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 24 | 170° S | 11h-18h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 13 | 24 | 177° S | 12h-18h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 32 | 177° S | 11h-20h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 29 | 190° S | 12h-18h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 14 | 22 | 174° S | 13h-20h | pluie | 0.9 | 14°C |
| Nord du Pont d'Arciat | 14 | 21 | 186° S | 13h-19h | pluie | 0.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 32 | 189° S | 10h-20h | soleil-couvert | 0.0 | 14°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 23 | 201° SSO | 08h-20h | pluie | 3.2 | 12°C |
| Plage d'Excenevex | 16 | 22 | 205° SSO | 08h-12h | pluie | 0.9 | 12°C |
| Plage du Vengeron | 15 | 20 | 204° SSO | 08h-17h | couvert | 0.5 | 13°C |
| Plage d'Hermance | 14 | 22 | 213° SSO | 08h-16h | pluie | 1.5 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 142° SE | aucun | couvert | 0.1 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 135° SE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 58° ENE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 47° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 17 | 211° SSO | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 22 | 197° SSO | 17h-20h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 7 | 208° SSO | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 18 | 164° SSE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 11 | 18 | 164° SSE | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 25 | 183° S | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 13 | 25 | 183° S | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 9 | 14 | 187° S | aucun | pluie | 1.2 | 12°C |
| Nord du Pont d'Arciat | 10 | 15 | 206° SSO | aucun | pluie | 1.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 21 | 188° S | aucun | pluie | 1.5 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 217° SO | 08h-20h | orage | 9.2 | 12°C |
| Plage d'Excenevex | 17 | 23 | 210° SSO | 08h-20h | orage | 13.4 | 13°C |
| Plage du Vengeron | 15 | 20 | 205° SSO | 08h-20h | orage | 21.1 | 13°C |
| Plage d'Hermance | 14 | 21 | 218° SO | 13h-20h | orage | 7.5 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 16 | 163° SSE | aucun | pluie | 9.3 | 14°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 140° SE | aucun | pluie | 2.5 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 32 | 164° SSE | 08h-20h | pluie | 1.8 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 18 | 180° S | aucun | pluie | 1.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 216° SO | 08h-12h | pluie | 2.9 | 14°C |
| La Roche-de-Glun - Base Nautique | 17 | 28 | 205° SSO | 08h-20h | pluie | 3.9 | 14°C |
| Cruas - Nuclear Spot | 7 | 12 | 185° S | aucun | pluie | 3.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 19 | 35 | 184° S | 08h-20h | pluie | 4.0 | 14°C |
| Nord du Pont de Chavanay | 19 | 35 | 184° S | 08h-20h | pluie | 4.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 19 | 38 | 192° SSO | 08h-20h | pluie | 5.5 | 14°C |
| Saint-Cyr-sur-le-Rhône | 19 | 38 | 192° SSO | 08h-20h | pluie | 5.5 | 14°C |
| Saint-Romain-des-Iles | 15 | 26 | 193° SSO | 08h-14h | pluie | 5.6 | 16°C |
| Nord du Pont d'Arciat | 15 | 26 | 193° SSO | 08h-14h | pluie | 5.6 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 22 | 40 | 185° S | 08h-20h | pluie | 8.3 | 15°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 28 | 43 | 196° SSO | 08h-20h | pluie | 1.5 | 14°C |
| Plage d'Excenevex | 23 | 36 | 199° SSO | 08h-20h | pluie | 1.3 | 14°C |
| Plage du Vengeron | 18 | 32 | 190° S | 08h-19h | pluie | 2.8 | 14°C |
| Plage d'Hermance | 20 | 36 | 193° SSO | 08h-19h | pluie | 2.3 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 12 | 153° SSE | aucun | pluie | 5.8 | 14°C |
| Lac du Bourget - Cap des Séselets | 10 | 14 | 157° SSE | aucun | pluie | 3.5 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 157° SSE | 17h-20h | pluie | 4.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 130° SE | aucun | pluie | 2.2 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 17 | 202° SSO | 08h-14h | couvert | 0.1 | 15°C |
| La Roche-de-Glun - Base Nautique | 14 | 23 | 197° SSO | 08h-13h | couvert | 0.3 | 14°C |
| Cruas - Nuclear Spot | 9 | 18 | 181° S | aucun | soleil-couvert | 0.1 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 20 | 161° SSE | aucun | soleil-couvert | 0.4 | 15°C |
| Nord du Pont de Chavanay | 11 | 20 | 161° SSE | aucun | soleil-couvert | 0.4 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 18 | 180° S | aucun | soleil-couvert | 0.2 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 18 | 180° S | aucun | soleil-couvert | 0.2 | 15°C |
| Saint-Romain-des-Iles | 11 | 18 | 216° SO | aucun | pluie | 1.5 | 14°C |
| Nord du Pont d'Arciat | 11 | 18 | 216° SO | aucun | pluie | 1.5 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 201° SSO | aucun | pluie | 0.7 | 16°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 25 | 219° SO | 08h-20h | pluie | 3.4 | 12°C |
| Plage d'Excenevex | 14 | 25 | 219° SO | 08h-20h | pluie | 3.4 | 12°C |
| Plage du Vengeron | 14 | 25 | 219° SO | 08h-20h | pluie | 3.4 | 12°C |
| Plage d'Hermance | 14 | 25 | 219° SO | 08h-20h | pluie | 3.4 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 15 | 158° SSE | aucun | orage | 18.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 154° SSE | aucun | orage | 17.8 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 19 | 154° SSE | aucun | pluie | 14.4 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 154° SSE | aucun | pluie | 12.7 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 22 | 186° S | 16h-20h | couvert | 0.1 | 14°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 192° SSO | 17h-20h | couvert | 0.3 | 14°C |
| Cruas - Nuclear Spot | 10 | 20 | 176° S | aucun | soleil-couvert | 0.3 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 168° SSE | 17h-20h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 11 | 24 | 168° SSE | 17h-20h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 178° S | 09h-12h | soleil-couvert | 0.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 23 | 179° S | 17h-20h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 12 | 27 | 216° SO | 14h-18h | soleil-couvert | 0.2 | 14°C |
| Nord du Pont d'Arciat | 12 | 27 | 216° SO | 14h-18h | soleil-couvert | 0.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 26 | 196° SSO | 11h-20h | pluie | 1.8 | 14°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 28 | 224° SO | 08h-11h | couvert | 0.7 | 6°C |
| Plage d'Excenevex | 16 | 28 | 224° SO | 08h-11h | couvert | 0.7 | 6°C |
| Plage du Vengeron | 16 | 28 | 224° SO | 08h-11h | couvert | 0.7 | 6°C |
| Plage d'Hermance | 16 | 28 | 224° SO | 08h-11h | couvert | 0.7 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 221° SO | aucun | couvert | 0.6 | 4°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 229° SO | aucun | pluie | 1.2 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 19 | 329° NNO | aucun | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 18 | 352° N | aucun | soleil-couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 165° SSE | aucun | pluie | 1.2 | 12°C |
| La Roche-de-Glun - Base Nautique | 7 | 18 | 204° SSO | aucun | pluie | 3.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 11 | 219° SO | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 138° SE | aucun | pluie | 7.2 | 10°C |
| Nord du Pont de Chavanay | 6 | 16 | 138° SE | aucun | pluie | 7.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 19 | 144° SE | aucun | pluie | 3.6 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 18 | 151° SSE | aucun | pluie | 10.2 | 10°C |
| Saint-Romain-des-Iles | 5 | 13 | 201° SSO | aucun | pluie | 4.2 | 10°C |
| Nord du Pont d'Arciat | 5 | 13 | 201° SSO | aucun | pluie | 4.2 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 15 | 139° SE | aucun | pluie | 3.0 | 10°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 307° NO | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 5 | 307° NO | aucun | soleil | 0.0 | 10°C |
| Plage du Vengeron | 3 | 5 | 307° NO | aucun | soleil | 0.0 | 11°C |
| Plage d'Hermance | 3 | 5 | 307° NO | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 115° ESE | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 22° NNE | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 42° NE | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 14 | 12° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 7 | 17 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 36° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 4 | 10 | 36° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 45° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 28° NNE | aucun | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 1 | 5 | 118° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 1 | 5 | 118° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 6 | 67° ENE | aucun | soleil-couvert | 0.0 | 11°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 203° SSO | aucun | pluie | 6.7 | 10°C |
| Plage d'Excenevex | 6 | 9 | 223° SO | aucun | pluie | 4.3 | 10°C |
| Plage du Vengeron | 6 | 9 | 203° SSO | aucun | pluie | 6.7 | 10°C |
| Plage d'Hermance | 6 | 9 | 203° SSO | aucun | pluie | 6.7 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 6 | 115° ESE | aucun | pluie | 3.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 11° N | aucun | pluie | 3.8 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 176° S | aucun | pluie | 4.9 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 174° S | aucun | pluie | 4.3 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 179° S | aucun | pluie | 3.7 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 189° S | aucun | pluie | 3.1 | 10°C |
| Cruas - Nuclear Spot | 4 | 8 | 348° NNO | aucun | pluie | 4.2 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 117° ESE | aucun | pluie | 4.2 | 10°C |
| Nord du Pont de Chavanay | 2 | 9 | 117° ESE | aucun | pluie | 4.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 180° S | aucun | pluie | 5.4 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 167° SSE | aucun | pluie | 4.8 | 10°C |
| Saint-Romain-des-Iles | 2 | 7 | 185° S | aucun | pluie | 3.6 | 9°C |
| Nord du Pont d'Arciat | 2 | 7 | 185° S | aucun | pluie | 3.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 130° SE | aucun | pluie | 4.2 | 9°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 69° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 3 | 6 | 33° NNE | aucun | couvert | 0.0 | 9°C |
| Plage du Vengeron | 3 | 6 | 69° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 3 | 6 | 69° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 306° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 28° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 9 | 188° S | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 149° SSE | aucun | couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 16° NNE | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 348° NNO | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 6 | 15 | 24° NNE | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 16° NNE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 2 | 6 | 16° NNE | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 85° E | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 2° N | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 7 | 147° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 7 | 147° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 5 | 350° N | aucun | soleil-couvert | 0.0 | 7°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 4° N | aucun | pluie | 2.6 | 8°C |
| Plage d'Excenevex | 4 | 8 | 26° NNE | aucun | pluie | 1.3 | 9°C |
| Plage du Vengeron | 3 | 6 | 4° N | aucun | pluie | 2.6 | 8°C |
| Plage d'Hermance | 3 | 6 | 4° N | aucun | pluie | 2.6 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 121° ESE | aucun | couvert | 0.7 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 2° N | aucun | pluie | 1.4 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 198° SSO | aucun | pluie | 6.8 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 220° SO | aucun | pluie | 6.4 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 196° SSO | aucun | pluie | 3.7 | 9°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 189° S | aucun | pluie | 4.9 | 8°C |
| Cruas - Nuclear Spot | 3 | 7 | 234° SO | aucun | pluie | 12.2 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 143° SE | aucun | pluie | 5.5 | 8°C |
| Nord du Pont de Chavanay | 4 | 9 | 143° SE | aucun | pluie | 5.5 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 172° S | aucun | pluie | 5.1 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 133° SE | aucun | pluie | 2.5 | 8°C |
| Saint-Romain-des-Iles | 2 | 7 | 144° SE | aucun | pluie | 3.5 | 8°C |
| Nord du Pont d'Arciat | 2 | 7 | 144° SE | aucun | pluie | 3.5 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 141° SE | aucun | pluie | 2.8 | 8°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 41° NE | 11h-17h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 13 | 18 | 28° NNE | 09h-20h | couvert | 0.5 | 8°C |
| Plage du Vengeron | 11 | 16 | 41° NE | 11h-17h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 11 | 16 | 41° NE | 11h-17h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 21 | 5° N | aucun | couvert | 0.6 | 5°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 21 | 347° NNO | aucun | pluie | 1.3 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 26 | 339° NNO | aucun | pluie | 1.3 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 34 | 358° N | 09h-20h | couvert | 0.5 | 9°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 353° N | 08h-20h | pluie | 1.2 | 9°C |
| Cruas - Nuclear Spot | 15 | 35 | 3° N | 09h-20h | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 29 | 348° NNO | 10h-20h | couvert | 0.4 | 9°C |
| Nord du Pont de Chavanay | 13 | 29 | 348° NNO | 10h-20h | couvert | 0.4 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 347° NNO | 09h-20h | pluie | 1.1 | 9°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 346° NNO | 10h-20h | couvert | 0.4 | 8°C |
| Saint-Romain-des-Iles | 12 | 21 | 353° N | 10h-17h | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 12 | 21 | 353° N | 10h-17h | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 27 | 355° N | 10h-19h | couvert | 0.0 | 9°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 32° NNE | 08h-15h | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 14 | 19 | 20° NNE | 08h-16h | soleil | 0.0 | 7°C |
| Plage du Vengeron | 12 | 18 | 32° NNE | 08h-15h | soleil | 0.0 | 7°C |
| Plage d'Hermance | 12 | 18 | 32° NNE | 08h-15h | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 18 | 18° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 7 | 17 | 26° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 23 | 353° N | aucun | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 23 | 348° NNO | aucun | couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 38 | 5° N | 08h-20h | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 14 | 32 | 3° N | 08h-19h | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 16 | 36 | 13° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 350° N | 08h-14h | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 11 | 26 | 350° N | 08h-14h | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 345° NNO | 08h-13h | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 349° N | 09h-14h | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 10 | 19 | 4° N | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 10 | 19 | 4° N | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 350° N | aucun | soleil-couvert | 0.0 | 7°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 174° S | aucun | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 2 | 10 | 75° ENE | aucun | couvert | 0.0 | 7°C |
| Plage du Vengeron | 2 | 5 | 174° S | aucun | couvert | 0.0 | 7°C |
| Plage d'Hermance | 2 | 5 | 174° S | aucun | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 104° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 174° S | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 167° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 16° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 3 | 8 | 340° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 5 | 14 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 177° S | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 2 | 7 | 177° S | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 133° SE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 172° S | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 4 | 9 | 162° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 4 | 9 | 162° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 160° SSE | aucun | soleil-couvert | 0.0 | 7°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 207° SSO | 08h-15h | pluie | 3.4 | 7°C |
| Plage d'Excenevex | 16 | 21 | 222° SO | 08h-18h | pluie | 4.0 | 7°C |
| Plage du Vengeron | 12 | 17 | 207° SSO | 08h-15h | pluie | 3.4 | 7°C |
| Plage d'Hermance | 12 | 17 | 207° SSO | 08h-15h | pluie | 3.4 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 17 | 192° SSO | aucun | pluie | 8.1 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 195° SSO | aucun | pluie | 11.8 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 167° SSE | aucun | pluie | 5.5 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 12 | 151° SSE | aucun | pluie | 5.4 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 179° S | aucun | pluie | 1.8 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 170° S | aucun | soleil-couvert | 0.6 | 10°C |
| Cruas - Nuclear Spot | 5 | 13 | 189° S | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 18 | 175° S | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 18 | 175° S | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 222° SO | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 5 | 18 | 198° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 9 | 18 | 226° SO | aucun | soleil-couvert | 0.6 | 8°C |
| Nord du Pont d'Arciat | 9 | 18 | 226° SO | aucun | soleil-couvert | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 205° SSO | aucun | soleil-couvert | 0.0 | 9°C |
