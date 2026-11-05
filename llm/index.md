# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 05/11/2026 14:20 (Europe/Paris)
- Fichiers générés le : 2026-11-05T14:25:11+01:00
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

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 51° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 11 | 16 | 38° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 10 | 15 | 39° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 10 | 16 | 43° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 320° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 354° N | aucun | soleil-couvert | 0.1 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 200° SSO | 11h-16h | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 301° ONO | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 21° NNE | aucun | orage | 13.5 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 347° NNO | aucun | orage | 14.0 | 12°C |
| Cruas - Nuclear Spot | 8 | 13 | 46° NE | aucun | orage | 25.3 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 8 | 2° N | aucun | orage | 12.5 | 11°C |
| Nord du Pont de Chavanay | 5 | 9 | 35° NE | aucun | orage | 12.8 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 5 | 280° O | aucun | orage | 7.8 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 18° NNE | aucun | pluie | 6.9 | 12°C |
| Saint-Romain-des-Iles | 5 | 4 | 12° NNE | aucun | pluie | 5.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 9 | 59° ENE | aucun | orage | 6.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 11° N | aucun | pluie | 4.3 | 9°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 214° SO | aucun | pluie | 3.0 | 10°C |
| Plage d'Excenevex | 2 | 4 | 194° SSO | aucun | pluie | 1.6 | 10°C |
| Plage du Vengeron | 3 | 6 | 24° NNE | aucun | pluie | 2.7 | 10°C |
| Plage d'Hermance | 3 | 6 | 60° ENE | aucun | pluie | 3.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 12 | 1° N | aucun | pluie | 4.5 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 20° NNE | aucun | pluie | 1.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 24° NNE | aucun | orage | 7.5 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 324° NO | aucun | pluie | 7.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 12° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 16° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 10 | 20 | 16° NNE | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 339° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 11 | 321° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 355° N | aucun | couvert | 0.1 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 37° NE | aucun | couvert | 0.2 | 12°C |
| Saint-Romain-des-Iles | 6 | 10 | 340° NNO | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 9 | 337° NNO | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 9 | 28° NNE | aucun | couvert | 0.0 | 9°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 45° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 4 | 5 | 54° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 4 | 11° N | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 4 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 69° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 7 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 185° S | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 349° N | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 16° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 5° N | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 8 | 16 | 22° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 58° ENE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 10 | 58° ENE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 272° O | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 32° NNE | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 7 | 77° ENE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 4 | 7 | 77° ENE | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 55° NE | aucun | couvert | 0.0 | 8°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 195° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 2 | 4 | 72° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 5 | 6 | 194° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 4 | 5 | 193° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 319° NO | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 40° NE | aucun | couvert | 0.1 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 184° S | aucun | couvert | 0.4 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 208° SSO | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 209° SSO | 15h-19h | couvert | 0.1 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 19 | 203° SSO | 14h-20h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 7 | 213° SSO | aucun | couvert | 0.3 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 170° S | 11h-20h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 14 | 24 | 170° S | 11h-20h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 28 | 188° S | 10h-20h | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 14 | 28 | 188° S | 10h-20h | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 12 | 18 | 172° S | 15h-19h | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 12 | 18 | 172° S | 15h-19h | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 27 | 194° SSO | 12h-20h | couvert | 0.0 | 14°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 245° OSO | aucun | couvert | 0.8 | 13°C |
| Plage d'Excenevex | 2 | 3 | 110° ESE | aucun | couvert | 0.3 | 12°C |
| Plage du Vengeron | 7 | 9 | 193° SSO | aucun | couvert | 0.6 | 14°C |
| Plage d'Hermance | 4 | 7 | 201° SSO | aucun | couvert | 0.4 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 81° E | aucun | pluie | 1.5 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 230° SO | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 29 | 170° S | 08h-20h | pluie | 16.3 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 161° SSE | aucun | pluie | 5.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 23 | 211° SSO | 08h-14h | couvert | 0.1 | 14°C |
| La Roche-de-Glun - Base Nautique | 14 | 25 | 202° SSO | 08h-20h | couvert | 0.6 | 13°C |
| Cruas - Nuclear Spot | 9 | 22 | 187° S | aucun | pluie | 1.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 29 | 186° S | 08h-20h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 16 | 29 | 186° S | 08h-20h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 35 | 197° SSO | 08h-20h | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 17 | 35 | 197° SSO | 08h-20h | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 19 | 31 | 178° S | 08h-18h | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 19 | 31 | 178° S | 08h-18h | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 26 | 194° SSO | 10h-16h | couvert | 0.0 | 14°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 325° NO | aucun | pluie | 1.2 | 17°C |
| Plage d'Excenevex | 4 | 6 | 325° NO | aucun | pluie | 1.2 | 17°C |
| Plage du Vengeron | 4 | 6 | 325° NO | aucun | pluie | 1.2 | 17°C |
| Plage d'Hermance | 4 | 6 | 325° NO | aucun | pluie | 1.2 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 120° ESE | aucun | pluie | 2.1 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 7° N | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 136° SE | aucun | soleil-couvert | 0.6 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 185° S | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 209° SSO | aucun | couvert | 0.6 | 17°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 207° SSO | aucun | couvert | 0.4 | 17°C |
| Cruas - Nuclear Spot | 1 | 5 | 270° O | aucun | couvert | 0.9 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 21 | 175° S | aucun | pluie | 1.9 | 17°C |
| Nord du Pont de Chavanay | 10 | 21 | 175° S | aucun | pluie | 1.9 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 176° S | aucun | pluie | 1.2 | 17°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 171° S | aucun | soleil-couvert | 0.7 | 17°C |
| Saint-Romain-des-Iles | 6 | 12 | 172° S | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 12 | 172° S | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 172° S | aucun | soleil-couvert | 0.0 | 18°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 326° NO | aucun | pluie | 14.5 | 13°C |
| Plage d'Excenevex | 5 | 8 | 326° NO | aucun | pluie | 14.5 | 13°C |
| Plage du Vengeron | 5 | 8 | 326° NO | aucun | pluie | 14.5 | 13°C |
| Plage d'Hermance | 5 | 8 | 326° NO | aucun | pluie | 14.5 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 110° ESE | aucun | pluie | 6.4 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 19° NNE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 27 | 161° SSE | aucun | pluie | 3.7 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 20 | 164° SSE | aucun | pluie | 2.4 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 191° S | aucun | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 193° SSO | 12h-15h | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 3 | 11 | 245° OSO | aucun | couvert | 0.4 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 175° S | 11h-16h | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 11 | 25 | 175° S | 11h-16h | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 177° S | 12h-16h | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 12 | 24 | 173° S | 11h-17h | couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 8 | 14 | 173° S | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 8 | 14 | 173° S | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 179° S | aucun | couvert | 0.0 | 16°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 289° ONO | aucun | pluie | 0.7 | 14°C |
| Plage d'Excenevex | 4 | 6 | 289° ONO | aucun | pluie | 0.5 | 14°C |
| Plage du Vengeron | 4 | 6 | 289° ONO | aucun | pluie | 0.7 | 14°C |
| Plage d'Hermance | 4 | 6 | 289° ONO | aucun | pluie | 0.7 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 112° ESE | aucun | pluie | 0.6 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 13° NNE | aucun | pluie | 0.8 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 17 | 185° S | aucun | pluie | 2.5 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 182° S | aucun | pluie | 2.5 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 16 | 206° SSO | aucun | pluie | 1.9 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 208° SSO | aucun | couvert | 0.6 | 16°C |
| Cruas - Nuclear Spot | 3 | 13 | 260° O | aucun | pluie | 6.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 25 | 184° S | 08h-11h | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 10 | 25 | 184° S | 08h-11h | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 179° S | aucun | pluie | 11.5 | 16°C |
| Saint-Cyr-sur-le-Rhône | 10 | 26 | 176° S | 10h-13h | couvert | 0.4 | 16°C |
| Saint-Romain-des-Iles | 7 | 13 | 184° S | aucun | pluie | 17.4 | 14°C |
| Nord du Pont d'Arciat | 7 | 13 | 184° S | aucun | pluie | 17.4 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 16 | 111° ESE | aucun | pluie | 5.4 | 15°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 205° SSO | 12h-15h | pluie | 2.0 | 13°C |
| Plage d'Excenevex | 10 | 12 | 220° SO | aucun | pluie | 8.1 | 13°C |
| Plage du Vengeron | 11 | 14 | 205° SSO | 12h-15h | pluie | 2.0 | 13°C |
| Plage d'Hermance | 11 | 14 | 205° SSO | 12h-15h | pluie | 2.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 139° SE | aucun | pluie | 10.3 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 187° S | aucun | pluie | 13.7 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 185° S | aucun | pluie | 8.4 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 189° S | aucun | pluie | 3.1 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 188° S | aucun | pluie | 1.8 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 189° S | aucun | pluie | 6.6 | 15°C |
| Cruas - Nuclear Spot | 4 | 10 | 181° S | aucun | pluie | 1.3 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 158° SSE | aucun | pluie | 6.7 | 14°C |
| Nord du Pont de Chavanay | 5 | 14 | 158° SSE | aucun | pluie | 6.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 173° S | aucun | pluie | 5.5 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 175° S | aucun | pluie | 3.7 | 14°C |
| Saint-Romain-des-Iles | 4 | 12 | 205° SSO | aucun | pluie | 9.8 | 15°C |
| Nord du Pont d'Arciat | 4 | 12 | 205° SSO | aucun | pluie | 9.8 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 167° SSE | aucun | pluie | 14.3 | 15°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 31° NNE | 15h-20h | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 14 | 21 | 34° NE | 11h-20h | pluie | 1.5 | 6°C |
| Plage du Vengeron | 12 | 18 | 31° NNE | 15h-20h | soleil | 0.0 | 6°C |
| Plage d'Hermance | 12 | 18 | 31° NNE | 15h-20h | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 22 | 19° NNE | aucun | pluie | 6.6 | 3°C |
| Lac du Bourget - Cap des Séselets | 8 | 22 | 22° NNE | aucun | pluie | 1.8 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 35 | 350° N | aucun | pluie | 3.6 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 32 | 348° NNO | aucun | pluie | 3.6 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 21 | 44 | 358° N | 08h-20h | soleil-couvert | 0.6 | 8°C |
| La Roche-de-Glun - Base Nautique | 19 | 39 | 360° N | 08h-20h | soleil-couvert | 0.6 | 7°C |
| Cruas - Nuclear Spot | 20 | 44 | 3° N | 08h-20h | soleil-couvert | 0.6 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 32 | 356° N | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 15 | 32 | 356° N | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 31 | 345° NNO | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 14 | 31 | 349° N | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 13 | 26 | 333° NNO | 08h-17h | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 13 | 26 | 333° NNO | 08h-17h | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 32 | 346° NNO | 08h-18h | soleil-couvert | 0.0 | 7°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 23 | 31° NNE | 08h-20h | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 16 | 22 | 26° NNE | 08h-19h | soleil | 0.0 | 6°C |
| Plage du Vengeron | 16 | 23 | 31° NNE | 08h-20h | soleil | 0.0 | 6°C |
| Plage d'Hermance | 16 | 23 | 31° NNE | 08h-20h | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 18 | 19° NNE | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 7 | 21 | 23° NNE | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 20 | 6° N | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 21 | 358° N | aucun | soleil-couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 34 | 5° N | 08h-16h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 11 | 29 | 1° N | 08h-14h | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 16 | 38 | 16° NNE | 08h-19h | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 24 | 350° N | aucun | soleil | 0.0 | 7°C |
| Nord du Pont de Chavanay | 9 | 24 | 350° N | aucun | soleil | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 338° NNO | aucun | soleil | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 8 | 22 | 340° NNO | aucun | soleil | 0.0 | 6°C |
| Saint-Romain-des-Iles | 11 | 21 | 351° N | 11h-15h | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 11 | 21 | 351° N | 11h-15h | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 349° N | aucun | soleil | 0.0 | 7°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 223° SO | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 7 | 10 | 213° SSO | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 6 | 10 | 223° SO | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 6 | 10 | 223° SO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 257° OSO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 6° N | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 23° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 20° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 355° N | aucun | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 337° NNO | aucun | soleil | 0.0 | 7°C |
| Cruas - Nuclear Spot | 6 | 15 | 359° N | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 44° NE | aucun | soleil | 0.0 | 5°C |
| Nord du Pont de Chavanay | 3 | 10 | 44° NE | aucun | soleil | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 46° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 39° NE | aucun | soleil | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 6 | 115° ESE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 2 | 6 | 115° ESE | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 355° N | aucun | soleil-couvert | 0.0 | 4°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 211° SSO | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 9 | 12 | 224° SO | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 8 | 12 | 211° SSO | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 8 | 12 | 211° SSO | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 231° SO | aucun | couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 232° SO | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 358° N | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 17 | 348° NNO | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 9° N | 09h-17h | couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 10° N | aucun | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 12 | 29 | 17° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 35° NE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 4 | 10 | 35° NE | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 18° NNE | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 16° NNE | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 5 | 232° SO | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 5 | 232° SO | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 328° NNO | aucun | couvert | 0.0 | 6°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 204° SSO | 09h-17h | couvert | 0.8 | 9°C |
| Plage d'Excenevex | 14 | 20 | 212° SSO | 09h-20h | pluie | 1.9 | 10°C |
| Plage du Vengeron | 13 | 18 | 204° SSO | 09h-17h | couvert | 0.8 | 9°C |
| Plage d'Hermance | 13 | 18 | 204° SSO | 09h-17h | couvert | 0.8 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 120° ESE | aucun | couvert | 0.7 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 155° SSE | aucun | couvert | 0.8 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 20 | 353° N | aucun | couvert | 0.2 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 345° NNO | aucun | couvert | 0.1 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 14° NNE | 08h-17h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 15° NNE | 11h-14h | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 15 | 33 | 11° N | 08h-20h | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 10° N | aucun | couvert | 0.1 | 10°C |
| Nord du Pont de Chavanay | 6 | 14 | 10° N | aucun | couvert | 0.1 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 12° NNE | aucun | couvert | 0.2 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 357° N | aucun | couvert | 0.2 | 10°C |
| Saint-Romain-des-Iles | 8 | 14 | 275° O | aucun | couvert | 0.6 | 10°C |
| Nord du Pont d'Arciat | 8 | 14 | 275° O | aucun | couvert | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 290° ONO | aucun | couvert | 0.9 | 9°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 15 | 220° SO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 11 | 16 | 216° SO | 17h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 9 | 15 | 220° SO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 9 | 15 | 220° SO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 282° ONO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 233° SO | aucun | couvert | 0.6 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 23 | 350° N | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 24 | 347° NNO | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 4° N | 08h-15h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 6° N | 08h-12h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 12 | 28 | 11° N | 08h-17h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 14° NNE | aucun | soleil-couvert | 0.6 | 9°C |
| Nord du Pont de Chavanay | 6 | 15 | 14° NNE | aucun | soleil-couvert | 0.6 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 4° N | aucun | couvert | 0.6 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 7° N | aucun | soleil-couvert | 0.6 | 9°C |
| Saint-Romain-des-Iles | 5 | 10 | 287° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 10 | 287° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 336° NNO | aucun | soleil-couvert | 0.0 | 9°C |
