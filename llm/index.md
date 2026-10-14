# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 14/10/2026 22:48 (Europe/Paris)
- Fichiers générés le : 2026-10-14T22:51:52+02:00
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

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 213° SSO | aucun | soleil | 0.0 | 19°C |
| Plage d'Excenevex | 3 | 5 | 220° SO | aucun | soleil | 0.0 | 19°C |
| Plage du Vengeron | 6 | 7 | 20° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 5 | 6 | 358° N | aucun | soleil | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 277° O | aucun | soleil | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 8 | 9 | 22° NNE | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 359° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 17 | 352° N | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 5° N | 08h-17h | soleil-couvert | 0.0 | 23°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 351° N | aucun | soleil-couvert | 0.0 | 23°C |
| Cruas - Nuclear Spot | 13 | 26 | 21° NNE | 08h-16h | soleil | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 19 | 17° NNE | aucun | soleil | 0.0 | 23°C |
| Nord du Pont de Chavanay | 10 | 17 | 17° NNE | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 312° NO | aucun | soleil-couvert | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 22°C |
| Saint-Romain-des-Iles | 8 | 15 | 18° NNE | aucun | soleil | 0.0 | 22°C |
| Nord du Pont d'Arciat | 8 | 13 | 29° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 337° NNO | aucun | soleil-couvert | 0.0 | 19°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 53° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Excenevex | 4 | 6 | 54° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 6 | 8 | 33° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 6 | 7 | 17° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 2° N | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 184° S | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 11° N | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 351° N | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 202° SSO | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 158° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Cruas - Nuclear Spot | 6 | 12 | 207° SSO | aucun | soleil | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 166° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont de Chavanay | 5 | 10 | 174° S | aucun | soleil-couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 150° SSE | aucun | soleil | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 219° SO | aucun | soleil | 0.0 | 23°C |
| Saint-Romain-des-Iles | 2 | 3 | 32° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont d'Arciat | 2 | 6 | 211° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 180° S | aucun | soleil-couvert | 0.0 | 20°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 42° NE | aucun | couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 4 | 193° SSO | aucun | couvert | 0.0 | 17°C |
| Plage du Vengeron | 3 | 4 | 25° NNE | aucun | couvert | 0.0 | 18°C |
| Plage d'Hermance | 3 | 5 | 11° N | aucun | couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 81° E | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 27° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 18 | 27° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 344° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 7 | 177° S | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 2 | 3 | 275° O | aucun | soleil-couvert | 0.0 | 22°C |
| Cruas - Nuclear Spot | 3 | 8 | 166° SSE | aucun | soleil-couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 322° NO | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 3 | 4 | 306° NO | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 155° SSE | aucun | soleil | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 222° SO | aucun | soleil-couvert | 0.0 | 22°C |
| Saint-Romain-des-Iles | 4 | 7 | 207° SSO | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont d'Arciat | 5 | 8 | 198° SSO | aucun | soleil-couvert | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 195° SSO | aucun | soleil | 0.0 | 20°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 51° NE | 15h-20h | pluie | 10.0 | 16°C |
| Plage d'Excenevex | 19 | 25 | 30° NNE | 13h-20h | pluie | 11.5 | 15°C |
| Plage du Vengeron | 18 | 26 | 43° NE | 15h-20h | pluie | 8.4 | 15°C |
| Plage d'Hermance | 16 | 24 | 45° NE | 15h-20h | pluie | 8.3 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 15 | 317° NO | aucun | orage | 11.7 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 243° OSO | aucun | couvert | 0.9 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 12° NNE | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 360° N | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 29 | 4° N | 08h-20h | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 15 | 26 | 359° N | 08h-20h | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 16 | 33 | 9° N | 08h-20h | couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 24 | 345° NNO | 12h-20h | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 13 | 24 | 345° NNO | 12h-20h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 346° NNO | 15h-20h | couvert | 0.3 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 22 | 346° NNO | 15h-20h | couvert | 0.3 | 14°C |
| Saint-Romain-des-Iles | 13 | 21 | 3° N | 13h-20h | pluie | 1.3 | 12°C |
| Nord du Pont d'Arciat | 13 | 21 | 3° N | 13h-20h | pluie | 1.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 24 | 347° NNO | 11h-20h | couvert | 0.3 | 15°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 34 | 33° NNE | 08h-20h | couvert | 0.1 | 10°C |
| Plage d'Excenevex | 25 | 35 | 21° NNE | 08h-20h | pluie | 0.6 | 10°C |
| Plage du Vengeron | 21 | 30 | 35° NE | 08h-15h | couvert | 0.0 | 10°C |
| Plage d'Hermance | 19 | 30 | 37° NE | 08h-16h | couvert | 0.1 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 323° NO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 241° OSO | aucun | pluie | 9.7 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 4° N | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 359° N | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 8° N | 08h-20h | orage | 24.4 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 19 | 359° N | aucun | orage | 24.2 | 10°C |
| Cruas - Nuclear Spot | 14 | 28 | 10° N | 08h-20h | orage | 26.9 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 21 | 350° N | aucun | pluie | 18.7 | 10°C |
| Nord du Pont de Chavanay | 11 | 21 | 350° N | aucun | pluie | 18.7 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 17 | 342° NNO | aucun | pluie | 20.7 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 17 | 342° NNO | aucun | pluie | 20.7 | 9°C |
| Saint-Romain-des-Iles | 10 | 16 | 357° N | aucun | pluie | 11.4 | 10°C |
| Nord du Pont d'Arciat | 10 | 16 | 357° N | aucun | pluie | 11.4 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 349° N | aucun | pluie | 17.8 | 10°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 48° NE | 08h-15h | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 17 | 23 | 30° NNE | 08h-15h | couvert | 0.0 | 14°C |
| Plage du Vengeron | 15 | 22 | 40° NE | 10h-14h | couvert | 0.0 | 14°C |
| Plage d'Hermance | 15 | 22 | 44° NE | 10h-14h | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 292° ONO | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 35° NE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 311° NO | aucun | couvert | 0.9 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 14 | 344° NNO | aucun | pluie | 1.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 5° N | 09h-17h | pluie | 11.1 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 19 | 359° N | aucun | pluie | 14.0 | 12°C |
| Cruas - Nuclear Spot | 13 | 28 | 24° NNE | 08h-15h | pluie | 14.7 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 5° N | aucun | pluie | 8.1 | 12°C |
| Nord du Pont de Chavanay | 7 | 16 | 5° N | aucun | pluie | 8.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 352° N | aucun | pluie | 5.9 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 357° N | aucun | pluie | 7.5 | 12°C |
| Saint-Romain-des-Iles | 6 | 12 | 347° NNO | aucun | pluie | 1.6 | 12°C |
| Nord du Pont d'Arciat | 6 | 12 | 347° NNO | aucun | pluie | 1.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 358° N | aucun | pluie | 2.6 | 13°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 342° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 2 | 4 | 342° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 2 | 4 | 342° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 2 | 4 | 342° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 301° ONO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 38° NE | aucun | couvert | 0.1 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 256° OSO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 171° S | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 17 | 32° NNE | aucun | orage | 12.7 | 16°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 146° SE | aucun | pluie | 7.9 | 15°C |
| Cruas - Nuclear Spot | 4 | 11 | 221° SO | aucun | orage | 42.8 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 157° SSE | aucun | pluie | 4.6 | 15°C |
| Nord du Pont de Chavanay | 4 | 10 | 157° SSE | aucun | pluie | 4.6 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 8 | 9° N | aucun | pluie | 4.9 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 167° SSE | aucun | pluie | 5.4 | 15°C |
| Saint-Romain-des-Iles | 2 | 7 | 198° SSO | aucun | pluie | 4.9 | 15°C |
| Nord du Pont d'Arciat | 2 | 7 | 198° SSO | aucun | pluie | 4.9 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 7 | 151° SSE | aucun | pluie | 1.6 | 16°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 349° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 3 | 6 | 349° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 3 | 6 | 349° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 3 | 6 | 349° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 102° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 249° OSO | aucun | couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 20 | 181° S | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 18 | 173° S | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 200° SSO | 13h-17h | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 196° SSO | 13h-17h | soleil | 0.0 | 20°C |
| Cruas - Nuclear Spot | 9 | 20 | 201° SSO | aucun | soleil-couvert | 0.7 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 182° S | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 10 | 24 | 182° S | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 178° S | 14h-20h | soleil | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 179° S | 14h-18h | soleil | 0.0 | 20°C |
| Saint-Romain-des-Iles | 5 | 12 | 168° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 5 | 12 | 168° SSE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 177° S | aucun | soleil-couvert | 0.0 | 19°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 200° SSO | aucun | pluie | 4.6 | 14°C |
| Plage d'Excenevex | 10 | 15 | 222° SO | 12h-15h | pluie | 1.5 | 15°C |
| Plage du Vengeron | 9 | 14 | 200° SSO | aucun | pluie | 4.6 | 14°C |
| Plage d'Hermance | 9 | 14 | 200° SSO | aucun | pluie | 4.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 62° ENE | aucun | pluie | 3.9 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 336° NNO | aucun | pluie | 3.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 17 | 15° NNE | aucun | pluie | 9.3 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 17 | 9° N | aucun | pluie | 16.4 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 17° NNE | aucun | soleil-couvert | 0.7 | 18°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 25° NNE | aucun | soleil-couvert | 0.1 | 17°C |
| Cruas - Nuclear Spot | 7 | 17 | 31° NNE | aucun | soleil-couvert | 0.1 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 12 | 76° ENE | aucun | pluie | 1.9 | 16°C |
| Nord du Pont de Chavanay | 3 | 12 | 76° ENE | aucun | pluie | 1.9 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 10 | 273° O | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 2 | 11 | 342° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 12 | 248° OSO | aucun | pluie | 4.4 | 16°C |
| Nord du Pont d'Arciat | 4 | 12 | 248° OSO | aucun | pluie | 4.4 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 334° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 211° SSO | 12h-20h | pluie | 1.8 | 16°C |
| Plage d'Excenevex | 14 | 19 | 235° SO | 13h-20h | soleil-couvert | 0.6 | 17°C |
| Plage du Vengeron | 13 | 18 | 211° SSO | 12h-20h | pluie | 1.8 | 16°C |
| Plage d'Hermance | 13 | 18 | 211° SSO | 12h-20h | pluie | 1.8 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 234° SO | aucun | pluie | 1.8 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 226° SO | aucun | pluie | 2.4 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 183° S | aucun | soleil-couvert | 0.6 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 197° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 190° S | aucun | soleil-couvert | 0.6 | 19°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 190° S | 13h-16h | soleil-couvert | 0.2 | 19°C |
| Cruas - Nuclear Spot | 7 | 16 | 185° S | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 158° SSE | 13h-16h | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 11 | 24 | 158° SSE | 13h-16h | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 166° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 159° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 8 | 15 | 182° S | aucun | pluie | 3.6 | 18°C |
| Nord du Pont d'Arciat | 8 | 15 | 182° S | aucun | pluie | 3.6 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 185° S | aucun | soleil-couvert | 0.6 | 19°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 22 | 195° SSO | 08h-15h | pluie | 2.1 | 12°C |
| Plage d'Excenevex | 15 | 22 | 223° SO | 08h-17h | soleil-couvert | 0.8 | 12°C |
| Plage du Vengeron | 11 | 22 | 195° SSO | 08h-15h | pluie | 2.1 | 12°C |
| Plage d'Hermance | 11 | 22 | 195° SSO | 08h-15h | pluie | 2.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 195° SSO | aucun | pluie | 2.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 1 | 17 | 185° S | aucun | couvert | 0.9 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 20 | 355° N | aucun | pluie | 0.6 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 22 | 355° N | aucun | couvert | 0.3 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 16° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 37° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 7 | 18 | 16° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 11 | 61° ENE | aucun | soleil-couvert | 0.6 | 14°C |
| Nord du Pont de Chavanay | 3 | 11 | 61° ENE | aucun | soleil-couvert | 0.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 9 | 39° NE | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 56° NE | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 5 | 11 | 267° O | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 5 | 11 | 267° O | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 124° SE | aucun | couvert | 0.0 | 13°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 18 | 240° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 6 | 10 | 262° O | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 10 | 18 | 240° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 10 | 18 | 240° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 138° SE | aucun | soleil-couvert | 0.1 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 274° O | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 23 | 181° S | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 185° S | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 25 | 199° SSO | 13h-18h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 198° SSO | 09h-20h | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 6 | 15 | 222° SO | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 30 | 175° S | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 14 | 30 | 175° S | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 32 | 174° S | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 15 | 33 | 173° S | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 12 | 24 | 184° S | 13h-20h | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 12 | 24 | 184° S | 13h-20h | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 34 | 200° SSO | 08h-20h | soleil-couvert | 0.6 | 16°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 241° OSO | aucun | soleil | 0.0 | 19°C |
| Plage d'Excenevex | 9 | 12 | 234° SO | aucun | soleil | 0.0 | 17°C |
| Plage du Vengeron | 12 | 17 | 241° OSO | aucun | soleil | 0.0 | 19°C |
| Plage d'Hermance | 12 | 17 | 241° OSO | aucun | soleil | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 119° ESE | aucun | soleil | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 5 | 24 | 244° OSO | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 37 | 167° SSE | 12h-17h | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 34 | 164° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 38 | 184° S | 10h-20h | soleil-couvert | 0.6 | 21°C |
| La Roche-de-Glun - Base Nautique | 19 | 39 | 187° S | 09h-20h | soleil-couvert | 0.6 | 21°C |
| Cruas - Nuclear Spot | 14 | 34 | 176° S | 12h-20h | pluie | 5.7 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 17 | 40 | 186° S | 08h-20h | soleil-couvert | 0.6 | 20°C |
| Nord du Pont de Chavanay | 17 | 40 | 186° S | 08h-20h | soleil-couvert | 0.6 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 22 | 46 | 177° S | 08h-20h | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 19 | 43 | 181° S | 08h-20h | soleil-couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 18 | 34 | 187° S | 09h-17h | pluie | 6.3 | 20°C |
| Nord du Pont d'Arciat | 18 | 34 | 187° S | 09h-17h | pluie | 6.3 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 37 | 185° S | 08h-20h | soleil-couvert | 0.0 | 21°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 203° SSO | aucun | pluie | 2.1 | 17°C |
| Plage d'Excenevex | 5 | 10 | 252° OSO | aucun | pluie | 2.0 | 17°C |
| Plage du Vengeron | 6 | 9 | 203° SSO | aucun | pluie | 2.1 | 17°C |
| Plage d'Hermance | 6 | 9 | 203° SSO | aucun | pluie | 2.1 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 279° O | aucun | orage | 3.4 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 18° NNE | aucun | orage | 3.6 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 26° NNE | aucun | orage | 4.2 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 12° NNE | aucun | orage | 5.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 359° N | aucun | orage | 6.1 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 349° N | aucun | orage | 6.4 | 17°C |
| Cruas - Nuclear Spot | 11 | 24 | 358° N | 08h-11h | orage | 5.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 14° NNE | aucun | pluie | 1.1 | 16°C |
| Nord du Pont de Chavanay | 5 | 12 | 14° NNE | aucun | pluie | 1.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 11 | 342° NNO | aucun | couvert | 0.3 | 16°C |
| Saint-Cyr-sur-le-Rhône | 4 | 13 | 360° N | aucun | pluie | 0.7 | 16°C |
| Saint-Romain-des-Iles | 2 | 3 | 295° ONO | aucun | soleil-couvert | 0.6 | 16°C |
| Nord du Pont d'Arciat | 2 | 3 | 295° ONO | aucun | soleil-couvert | 0.6 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 10° N | aucun | soleil-couvert | 0.1 | 16°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 197° SSO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 5 | 8 | 211° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 8 | 11 | 197° SSO | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 8 | 11 | 197° SSO | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 272° O | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 192° SSO | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 13 | 9° N | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 22° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 1° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 347° NNO | aucun | soleil | 0.0 | 17°C |
| Cruas - Nuclear Spot | 8 | 18 | 356° N | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 23° NNE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 6 | 15 | 23° NNE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 26° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 19° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 3 | 8 | 296° ONO | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 3 | 8 | 296° ONO | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 28° NNE | aucun | soleil | 0.0 | 17°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 23° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 4 | 8 | 27° NNE | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 5 | 8 | 23° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 5 | 8 | 23° NNE | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 264° O | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 27° NNE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 202° SSO | aucun | couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 203° SSO | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 12 | 14° NNE | aucun | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 334° NNO | aucun | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 4 | 15 | 5° N | aucun | couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 123° ESE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 2 | 7 | 123° ESE | aucun | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 114° ESE | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 123° ESE | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 4 | 8 | 157° SSE | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 4 | 8 | 157° SSE | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 144° SE | aucun | couvert | 0.0 | 14°C |
