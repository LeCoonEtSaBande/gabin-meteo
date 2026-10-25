# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 25/10/2026 20:46 (Europe/Paris)
- Fichiers générés le : 2026-10-25T20:50:41+01:00
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

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 25 | 34 | 211° SSO | 08h-19h | pluie | 4.7 | 14°C |
| Plage d'Excenevex | 18 | 25 | 210° SSO | 08h-17h | pluie | 5.8 | 14°C |
| Plage du Vengeron | 18 | 24 | 245° OSO | 08h-19h | pluie | 4.3 | 14°C |
| Plage d'Hermance | 21 | 29 | 212° SSO | 08h-19h | pluie | 3.4 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 20 | 145° SE | aucun | pluie | 1.8 | 17°C |
| Lac du Bourget - Cap des Séselets | 18 | 26 | 209° SSO | 08h-15h | pluie | 1.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 18° NNE | aucun | pluie | 2.3 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 13 | 339° NNO | aucun | pluie | 0.8 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 188° S | 12h-16h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 168° SSE | aucun | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 6 | 14 | 206° SSO | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 26 | 155° SSE | 09h-16h | pluie | 1.2 | 15°C |
| Nord du Pont de Chavanay | 14 | 26 | 165° SSE | 13h-16h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 29 | 168° SSE | 08h-15h | soleil-couvert | 0.4 | 16°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 190° S | 12h-15h | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 17 | 26 | 185° S | 08h-14h | pluie | 3.3 | 14°C |
| Nord du Pont d'Arciat | 17 | 26 | 196° SSO | 08h-14h | pluie | 3.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 29 | 188° S | 08h-16h | pluie | 1.6 | 14°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 221° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 3 | 5 | 225° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 3 | 4 | 238° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 4 | 6 | 186° S | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 345° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 180° S | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 12° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 345° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 4° N | 10h-15h | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 343° NNO | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 11 | 23 | 24° NNE | 10h-15h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 35° NE | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 4 | 9 | 59° ENE | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 2 | 77° ENE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 28° NNE | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 2 | 6 | 151° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 3 | 6 | 169° S | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 2 | 347° NNO | aucun | soleil | 0.0 | 13°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 3 | 29° NNE | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 3 | 4 | 234° SO | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 2 | 3 | 45° NE | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 2 | 3 | 90° E | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 45° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 3 | 109° ESE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 49° NE | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 341° NNO | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 192° SSO | 12h-15h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 159° SSE | aucun | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 7 | 13 | 194° SSO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 162° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 4 | 7 | 177° S | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 143° SE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 227° SO | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 5 | 9 | 203° SSO | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 7 | 10 | 194° SSO | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 173° S | aucun | soleil | 0.0 | 16°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 47° NE | 14h-20h | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 18 | 25 | 25° NNE | 14h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 14 | 19 | 30° NNE | 15h-20h | soleil | 0.0 | 16°C |
| Plage d'Hermance | 12 | 18 | 38° NE | 15h-20h | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 12 | 311° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 18° NNE | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 346° NNO | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 27 | 15° NNE | 08h-20h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 16 | 26 | 353° N | 08h-20h | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 17 | 34 | 13° NNE | 08h-20h | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 26 | 355° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 14 | 26 | 355° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 355° N | 09h-18h | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 12 | 24 | 355° N | 09h-18h | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 12 | 20 | 16° NNE | 11h-20h | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 12 | 20 | 16° NNE | 11h-20h | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 24 | 355° N | 09h-20h | soleil | 0.0 | 15°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 40° NE | 08h-13h | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 16 | 21 | 32° NNE | 08h-12h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 12 | 16 | 46° NE | 08h-11h | couvert | 0.0 | 13°C |
| Plage d'Hermance | 12 | 18 | 48° NE | 08h-11h | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 295° ONO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 40° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 16° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 351° N | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 2° N | 08h-11h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 15 | 355° N | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 12 | 22 | 19° NNE | 08h-12h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 18° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 9 | 16 | 18° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 12° NNE | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 12° NNE | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 11 | 5° N | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 6 | 11 | 5° N | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 353° N | aucun | couvert | 0.0 | 12°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 15 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 9 | 15 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 9 | 15 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 9 | 15 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 329° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 34° NE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 29° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 347° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 4° N | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 340° NNO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 4 | 11 | 351° N | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 3 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 45° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 20° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 2 | 7 | 78° ENE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 2 | 7 | 78° ENE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 343° NNO | aucun | soleil-couvert | 0.0 | 15°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 27 | 35° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 16 | 27 | 35° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 16 | 27 | 35° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 16 | 27 | 35° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 337° NNO | aucun | couvert | 0.3 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 30° NNE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 15 | 323° NO | aucun | couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 15 | 6° N | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 22 | 4° N | 16h-20h | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 2° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 23 | 14° NNE | 17h-20h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 6° N | aucun | couvert | 0.3 | 14°C |
| Nord du Pont de Chavanay | 7 | 18 | 6° N | aucun | couvert | 0.3 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 19° NNE | aucun | couvert | 0.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 359° N | aucun | couvert | 0.3 | 14°C |
| Saint-Romain-des-Iles | 5 | 11 | 332° NNO | aucun | soleil-couvert | 0.2 | 14°C |
| Nord du Pont d'Arciat | 5 | 11 | 332° NNO | aucun | soleil-couvert | 0.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 349° N | aucun | couvert | 0.3 | 12°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 22 | 36° NE | 08h-17h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 14 | 22 | 36° NE | 08h-17h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 14 | 22 | 36° NE | 08h-17h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 14 | 22 | 36° NE | 08h-17h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 328° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 11 | 23° NNE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 328° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 11 | 9° N | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 6° N | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 1° N | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 11 | 26 | 16° NNE | 11h-17h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 341° NNO | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 9 | 21 | 341° NNO | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 338° NNO | aucun | couvert | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 337° NNO | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 9 | 19 | 311° NO | aucun | pluie | 1.2 | 11°C |
| Nord du Pont d'Arciat | 9 | 19 | 311° NO | aucun | pluie | 1.2 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 320° NO | aucun | soleil-couvert | 0.6 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 20 | 28° NNE | 11h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 14 | 20 | 22° NNE | 09h-20h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 14 | 20 | 28° NNE | 11h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 14 | 20 | 28° NNE | 11h-20h | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 333° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 36° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 12° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 4° N | 12h-18h | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 2° N | aucun | soleil | 0.0 | 8°C |
| Cruas - Nuclear Spot | 11 | 26 | 24° NNE | 11h-16h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 359° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 15 | 359° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 358° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 355° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 5 | 11 | 354° N | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 11 | 354° N | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 13 | 340° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 20° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 10 | 15 | 8° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 10 | 15 | 20° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 10 | 15 | 20° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 330° NNO | aucun | soleil-couvert | 0.1 | 7°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 28° NNE | aucun | soleil-couvert | 0.6 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 179° S | aucun | pluie | 5.1 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 187° S | aucun | pluie | 3.8 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 360° N | aucun | couvert | 0.4 | 7°C |
| La Roche-de-Glun - Base Nautique | 6 | 11 | 325° NO | aucun | pluie | 3.0 | 7°C |
| Cruas - Nuclear Spot | 4 | 13 | 15° NNE | aucun | couvert | 0.1 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 328° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 8 | 328° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 322° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 328° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 8 | 74° ENE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 8 | 74° ENE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 352° N | aucun | soleil-couvert | 0.0 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 10 | 14 | 15° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 14 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 9 | 14 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 13° NNE | aucun | pluie | 1.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 19° NNE | aucun | pluie | 1.4 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 217° SO | aucun | pluie | 10.6 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 8 | 278° O | aucun | pluie | 5.9 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 358° N | aucun | pluie | 1.9 | 9°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 351° N | aucun | couvert | 0.7 | 9°C |
| Cruas - Nuclear Spot | 4 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 348° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 2 | 6 | 348° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 294° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 339° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 7 | 339° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 2 | 7 | 339° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 357° N | aucun | soleil-couvert | 0.0 | 11°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 30° NNE | 16h-20h | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 13 | 19 | 19° NNE | 16h-20h | couvert | 0.0 | 6°C |
| Plage du Vengeron | 14 | 19 | 30° NNE | 16h-20h | couvert | 0.0 | 6°C |
| Plage d'Hermance | 14 | 19 | 30° NNE | 16h-20h | couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 343° NNO | aucun | pluie | 1.8 | 5°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 32° NNE | aucun | pluie | 1.2 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 351° N | aucun | pluie | 2.4 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 335° NNO | aucun | pluie | 4.2 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 352° N | 17h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 10 | 19 | 354° N | aucun | pluie | 3.6 | 8°C |
| Cruas - Nuclear Spot | 7 | 17 | 33° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 28° NNE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 4 | 11 | 28° NNE | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 333° NNO | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 23° NNE | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 3 | 8 | 50° NE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 8 | 50° NE | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 353° N | aucun | soleil | 0.0 | 10°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 24 | 33° NNE | 08h-20h | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 17 | 25 | 35° NE | 08h-20h | soleil | 0.0 | 7°C |
| Plage du Vengeron | 17 | 24 | 33° NNE | 08h-20h | soleil | 0.0 | 7°C |
| Plage d'Hermance | 17 | 24 | 33° NNE | 08h-20h | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 27 | 23° NNE | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 10 | 27 | 31° NNE | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 354° N | aucun | soleil-couvert | 0.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 21 | 345° NNO | aucun | soleil-couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 41 | 359° N | 08h-20h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 17 | 34 | 353° N | 08h-20h | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 6 | 13 | 27° NNE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 21° NNE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 10 | 21° NNE | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 30° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 17° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 8 | 90° E | aucun | soleil | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 8 | 90° E | aucun | soleil | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 7°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 21 | 28° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 11 | 22 | 22° NNE | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 21 | 28° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 9 | 21 | 28° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 22 | 6° N | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 7 | 18 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 20 | 347° NNO | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 346° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 33 | 3° N | 08h-20h | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 15 | 32 | 357° N | 08h-20h | soleil | 0.0 | 8°C |
| Cruas - Nuclear Spot | 4 | 10 | 18° NNE | aucun | pluie | 3.3 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 3° N | aucun | pluie | 1.0 | 10°C |
| Nord du Pont de Chavanay | 2 | 6 | 3° N | aucun | pluie | 1.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 8° N | aucun | couvert | 0.3 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 5 | 332° NNO | aucun | couvert | 0.4 | 9°C |
| Saint-Romain-des-Iles | 3 | 9 | 136° SE | aucun | soleil-couvert | 0.3 | 7°C |
| Nord du Pont d'Arciat | 3 | 9 | 136° SE | aucun | soleil-couvert | 0.3 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 354° N | aucun | soleil-couvert | 0.2 | 9°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 19 | 24° NNE | 08h-14h | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 13 | 19 | 16° NNE | 08h-14h | soleil | 0.0 | 6°C |
| Plage du Vengeron | 12 | 19 | 24° NNE | 08h-14h | soleil | 0.0 | 7°C |
| Plage d'Hermance | 12 | 19 | 24° NNE | 08h-14h | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 5° N | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 6 | 17 | 30° NNE | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 21 | 360° N | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 20 | 355° N | aucun | soleil-couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 38 | 2° N | 08h-14h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 14 | 33 | 355° N | 08h-12h | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 2 | 9 | 352° N | aucun | soleil-couvert | 0.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 227° SO | aucun | pluie | 1.8 | 10°C |
| Nord du Pont de Chavanay | 2 | 6 | 227° SO | aucun | pluie | 1.8 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 162° SSE | aucun | pluie | 2.4 | 10°C |
| Saint-Cyr-sur-le-Rhône | 1 | 6 | 138° SE | aucun | pluie | 2.4 | 10°C |
| Saint-Romain-des-Iles | 6 | 12 | 174° S | aucun | pluie | 2.4 | 9°C |
| Nord du Pont d'Arciat | 6 | 12 | 174° S | aucun | pluie | 2.4 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 143° SE | aucun | pluie | 2.4 | 10°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 6 | 93° E | aucun | soleil | 0.0 |  |
| Plage d'Excenevex | 3 | 6 | 18° NNE | aucun | soleil | 0.0 |  |
| Plage du Vengeron | 2 | 6 | 93° E | aucun | soleil | 0.0 |  |
| Plage d'Hermance | 2 | 6 | 93° E | aucun | soleil | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 289° ONO | aucun | soleil | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 24° NNE | aucun | soleil | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 8 | 4° N | aucun | soleil | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 166° SSE | aucun | soleil | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 359° N | aucun | soleil | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 338° NNO | aucun | soleil | 0.0 |  |
