# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 10/11/2026 01:45 (Europe/Paris)
- Fichiers générés le : 2026-11-10T01:48:51+01:00
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

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 45° NE | aucun | couvert | 0.1 | 13°C |
| Plage d'Excenevex | 3 | 4 | 78° ENE | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 3 | 7 | 357° N | aucun | couvert | 0.0 | 15°C |
| Plage d'Hermance | 4 | 5 | 22° NNE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 212° SSO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 128° SE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 14 | 190° S | aucun | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 194° SSO | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 14 | 205° SSO | aucun | pluie | 0.8 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 160° SSE | aucun | soleil-couvert | 0.4 | 19°C |
| Cruas - Nuclear Spot | 4 | 10 | 198° SSO | aucun | soleil-couvert | 0.4 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 156° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 5 | 9 | 166° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 21 | 169° S | aucun | couvert | 0.1 | 19°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 200° SSO | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 7 | 11 | 195° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 8 | 12 | 199° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 180° S | aucun | soleil-couvert | 0.0 | 16°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 188° S | aucun | orage | 8.2 | 15°C |
| Plage d'Excenevex | 8 | 10 | 210° SSO | aucun | orage | 9.7 | 16°C |
| Plage du Vengeron | 10 | 13 | 213° SSO | aucun | couvert | 0.7 | 17°C |
| Plage d'Hermance | 8 | 12 | 181° S | aucun | orage | 8.6 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 344° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 99° E | aucun | soleil-couvert | 0.1 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 181° S | 08h-15h | couvert | 0.1 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 157° SSE | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 191° S | aucun | soleil-couvert | 0.5 | 18°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 173° S | aucun | soleil-couvert | 0.1 | 19°C |
| Cruas - Nuclear Spot | 5 | 9 | 213° SSO | aucun | soleil-couvert | 0.3 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 159° SSE | aucun | soleil-couvert | 0.1 | 18°C |
| Nord du Pont de Chavanay | 6 | 13 | 163° SSE | aucun | pluie | 0.7 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 164° SSE | aucun | soleil-couvert | 0.8 | 18°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 191° S | aucun | pluie | 1.1 | 18°C |
| Saint-Romain-des-Iles | 7 | 12 | 180° S | aucun | pluie | 0.7 | 19°C |
| Nord du Pont d'Arciat | 8 | 13 | 200° SSO | aucun | pluie | 3.8 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 15 | 180° S | aucun | pluie | 4.1 | 16°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 35° NE | 11h-20h | pluie | 3.3 | 15°C |
| Plage d'Excenevex | 16 | 23 | 28° NNE | 08h-20h | pluie | 3.6 | 14°C |
| Plage du Vengeron | 13 | 17 | 47° NE | 10h-17h | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 12 | 19 | 54° NE | 10h-17h | soleil-couvert | 0.1 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 327° NNO | aucun | pluie | 2.8 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 353° N | aucun | pluie | 2.1 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 22 | 43 | 172° S | 08h-20h | orage | 8.8 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 18 | 32 | 184° S | 13h-17h | couvert | 0.2 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 22 | 195° SSO | 10h-14h | orage | 8.9 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 202° SSO | 16h-19h | orage | 8.7 | 16°C |
| Cruas - Nuclear Spot | 13 | 24 | 172° S | aucun | orage | 25.1 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 11° N | aucun | orage | 16.3 | 14°C |
| Nord du Pont de Chavanay | 6 | 14 | 11° N | aucun | orage | 16.3 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 5° N | aucun | orage | 23.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 5° N | aucun | orage | 23.2 | 13°C |
| Saint-Romain-des-Iles | 14 | 22 | 3° N | aucun | orage | 27.1 | 13°C |
| Nord du Pont d'Arciat | 14 | 22 | 3° N | aucun | orage | 27.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 345° NNO | aucun | pluie | 14.5 | 13°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 29 | 41 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 30 | 44 | 29° NNE | 08h-20h | soleil-couvert | 0.1 | 9°C |
| Plage du Vengeron | 28 | 39 | 31° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 25 | 40 | 36° NE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 14 | 273° O | aucun | pluie | 0.5 | 10°C |
| Lac du Bourget - Cap des Séselets | 17 | 23 | 360° N | 08h-20h | couvert | 0.3 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 10° N | 09h-20h | couvert | 0.5 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 16 | 29 | 3° N | 09h-20h | couvert | 0.2 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 23 | 36 | 355° N | 08h-20h | soleil-couvert | 0.4 | 9°C |
| La Roche-de-Glun - Base Nautique | 19 | 31 | 351° N | 08h-20h | soleil-couvert | 0.3 | 9°C |
| Cruas - Nuclear Spot | 21 | 44 | 8° N | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 26 | 355° N | 08h-20h | soleil-couvert | 0.2 | 8°C |
| Nord du Pont de Chavanay | 14 | 26 | 355° N | 08h-20h | soleil-couvert | 0.2 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 349° N | 08h-20h | soleil-couvert | 0.3 | 8°C |
| Saint-Cyr-sur-le-Rhône | 12 | 24 | 349° N | 08h-20h | soleil-couvert | 0.3 | 8°C |
| Saint-Romain-des-Iles | 18 | 30 | 4° N | 08h-20h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 18 | 30 | 4° N | 08h-20h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 28 | 355° N | 08h-20h | soleil | 0.1 | 8°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 28 | 45° NE | 08h-12h | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 17 | 26 | 34° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 13 | 20 | 47° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 13 | 22 | 48° NE | aucun | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 337° NNO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 360° N | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 192° SSO | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 163° SSE | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 22 | 8° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 13 | 348° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 10 | 27 | 25° NNE | aucun | couvert | 0.1 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 183° S | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 10 | 183° S | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 230° SO | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 186° S | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 9 | 147° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 9 | 147° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 136° SE | aucun | soleil-couvert | 0.0 | 8°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 327° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 5 | 7 | 327° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 5 | 7 | 327° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 5 | 7 | 327° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 125° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 13 | 132° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 28 | 160° SSE | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 21 | 176° S | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 192° SSO | aucun | pluie | 14.9 | 10°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 206° SSO | aucun | pluie | 18.5 | 10°C |
| Cruas - Nuclear Spot | 5 | 18 | 253° OSO | aucun | pluie | 17.1 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 186° S | 08h-15h | pluie | 2.5 | 10°C |
| Nord du Pont de Chavanay | 12 | 27 | 186° S | 08h-15h | pluie | 2.5 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 27 | 175° S | 10h-13h | pluie | 5.1 | 11°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 172° S | 08h-15h | pluie | 2.2 | 10°C |
| Saint-Romain-des-Iles | 9 | 15 | 184° S | aucun | pluie | 6.5 | 10°C |
| Nord du Pont d'Arciat | 9 | 15 | 184° S | aucun | pluie | 6.5 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 158° SSE | aucun | pluie | 5.0 | 11°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 339° NNO | aucun | pluie | 23.1 | 11°C |
| Plage d'Excenevex | 4 | 7 | 339° NNO | aucun | pluie | 23.1 | 11°C |
| Plage du Vengeron | 4 | 7 | 339° NNO | aucun | pluie | 23.1 | 11°C |
| Plage d'Hermance | 4 | 7 | 339° NNO | aucun | pluie | 23.1 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 14 | 120° ESE | aucun | orage | 40.2 | 10°C |
| Lac du Bourget - Cap des Séselets | 6 | 11 | 138° SE | aucun | orage | 47.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 41 | 165° SSE | 08h-12h | pluie | 4.4 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 29 | 175° S | 08h-11h | pluie | 4.1 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 18 | 3° N | aucun | pluie | 4.8 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 24 | 200° SSO | aucun | pluie | 3.0 | 13°C |
| Cruas - Nuclear Spot | 10 | 22 | 5° N | aucun | pluie | 3.6 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 26 | 189° S | aucun | pluie | 1.8 | 13°C |
| Nord du Pont de Chavanay | 8 | 26 | 189° S | aucun | pluie | 1.8 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 35 | 178° S | aucun | couvert | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 30 | 183° S | aucun | couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 8 | 15 | 314° NO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 8 | 15 | 314° NO | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 29 | 198° SSO | aucun | pluie | 4.2 | 13°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 6 | 10 | 10° N | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 7 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 7 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 295° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 17° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 13 | 174° S | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 12 | 182° S | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 1° N | 08h-12h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 355° N | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 11 | 26 | 10° N | 08h-12h | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 357° N | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 6 | 16 | 357° N | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 10 | 172° S | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 343° NNO | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 5 | 10 | 177° S | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 10 | 177° S | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 155° SSE | aucun | couvert | 0.0 | 10°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 254° OSO | aucun | pluie | 10.4 | 11°C |
| Plage d'Excenevex | 5 | 15 | 258° OSO | aucun | pluie | 9.3 | 11°C |
| Plage du Vengeron | 9 | 14 | 254° OSO | aucun | pluie | 10.4 | 11°C |
| Plage d'Hermance | 9 | 14 | 254° OSO | aucun | pluie | 10.4 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 137° SE | aucun | pluie | 14.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 11 | 227° SO | aucun | pluie | 16.3 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 21 | 172° S | aucun | pluie | 11.4 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 151° SSE | aucun | pluie | 9.3 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 199° SSO | 08h-12h | pluie | 5.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 14 | 31 | 202° SSO | 08h-14h | pluie | 7.4 | 13°C |
| Cruas - Nuclear Spot | 9 | 20 | 168° SSE | aucun | pluie | 13.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 32 | 186° S | 08h-15h | pluie | 12.6 | 12°C |
| Nord du Pont de Chavanay | 14 | 32 | 186° S | 08h-15h | pluie | 12.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 36 | 179° S | 08h-17h | pluie | 11.6 | 12°C |
| Saint-Cyr-sur-le-Rhône | 15 | 35 | 179° S | 08h-16h | pluie | 11.1 | 12°C |
| Saint-Romain-des-Iles | 13 | 23 | 181° S | 08h-16h | pluie | 9.6 | 11°C |
| Nord du Pont d'Arciat | 13 | 23 | 181° S | 08h-16h | pluie | 9.6 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 34 | 193° SSO | 08h-14h | pluie | 13.0 | 11°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 224° SO | 11h-14h | soleil-couvert | 0.1 | 13°C |
| Plage d'Excenevex | 9 | 11 | 242° OSO | aucun | soleil-couvert | 0.2 | 13°C |
| Plage du Vengeron | 10 | 13 | 224° SO | 11h-14h | soleil-couvert | 0.1 | 13°C |
| Plage d'Hermance | 10 | 13 | 224° SO | 11h-14h | soleil-couvert | 0.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 235° SO | aucun | pluie | 1.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 230° SO | aucun | pluie | 1.3 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 182° S | aucun | pluie | 0.9 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 158° SSE | aucun | pluie | 0.6 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 177° S | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 193° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 10 | 186° S | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 151° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 11 | 151° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 156° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 158° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 4 | 8 | 176° S | aucun | pluie | 2.0 | 14°C |
| Nord du Pont d'Arciat | 4 | 8 | 176° S | aucun | pluie | 2.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 172° S | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 202° SSO | aucun | pluie | 1.2 | 11°C |
| Plage d'Excenevex | 10 | 13 | 226° SO | aucun | soleil-couvert | 0.6 | 12°C |
| Plage du Vengeron | 9 | 12 | 202° SSO | aucun | pluie | 1.2 | 11°C |
| Plage d'Hermance | 9 | 12 | 202° SSO | aucun | pluie | 1.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 184° S | aucun | pluie | 1.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 207° SSO | aucun | soleil-couvert | 0.6 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 356° N | aucun | soleil-couvert | 0.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 21 | 354° N | aucun | soleil-couvert | 0.6 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 6 | 14 | 38° NE | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 11 | 36° NE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 11 | 36° NE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 254° OSO | aucun | soleil | 0.6 | 12°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 358° N | aucun | soleil | 0.6 | 12°C |
| Saint-Romain-des-Iles | 6 | 11 | 285° ONO | aucun | soleil-couvert | 0.6 | 12°C |
| Nord du Pont d'Arciat | 6 | 11 | 285° ONO | aucun | soleil-couvert | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 163° SSE | aucun | soleil | 0.0 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 210° SSO | aucun | soleil-couvert | 0.7 | 11°C |
| Plage d'Excenevex | 9 | 21 | 208° SSO | aucun | soleil-couvert | 0.6 | 12°C |
| Plage du Vengeron | 8 | 12 | 210° SSO | aucun | soleil-couvert | 0.7 | 11°C |
| Plage d'Hermance | 8 | 12 | 210° SSO | aucun | soleil-couvert | 0.7 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 128° SE | aucun | pluie | 5.4 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 225° SO | aucun | pluie | 3.9 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 166° SSE | aucun | soleil-couvert | 0.1 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 176° S | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 179° S | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 166° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 10 | 180° S | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 144° SE | aucun | pluie | 2.2 | 10°C |
| Nord du Pont de Chavanay | 4 | 12 | 144° SE | aucun | pluie | 2.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 131° SE | aucun | pluie | 3.3 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 151° SSE | aucun | pluie | 3.1 | 10°C |
| Saint-Romain-des-Iles | 6 | 12 | 187° S | aucun | pluie | 4.8 | 10°C |
| Nord du Pont d'Arciat | 6 | 12 | 187° S | aucun | pluie | 4.8 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 158° SSE | aucun | pluie | 9.1 | 9°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 206° SSO | aucun | pluie | 1.2 | 11°C |
| Plage d'Excenevex | 6 | 9 | 229° SO | aucun | soleil-couvert | 0.6 | 11°C |
| Plage du Vengeron | 7 | 10 | 206° SSO | aucun | pluie | 1.2 | 11°C |
| Plage d'Hermance | 7 | 10 | 206° SSO | aucun | pluie | 1.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 126° SE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 153° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 337° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 326° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 11° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 219° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 3 | 9 | 23° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 209° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 3 | 8 | 209° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 189° S | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 200° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 4 | 9 | 211° SSO | aucun | couvert | 0.1 | 10°C |
| Nord du Pont d'Arciat | 4 | 9 | 211° SSO | aucun | couvert | 0.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 169° S | aucun | couvert | 0.0 | 10°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 200° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 6 | 8 | 228° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 7 | 9 | 200° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 7 | 9 | 200° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 232° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 209° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 122° ESE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 99° E | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 8 | 189° S | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 173° S | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 2 | 7 | 158° SSE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 186° S | aucun | pluie | 1.2 | 11°C |
| Nord du Pont de Chavanay | 3 | 10 | 186° S | aucun | pluie | 1.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 147° SSE | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 179° S | aucun | soleil-couvert | 0.6 | 11°C |
| Saint-Romain-des-Iles | 3 | 8 | 149° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 3 | 8 | 149° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 151° SSE | aucun | soleil-couvert | 0.0 | 12°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 201° SSO | aucun | soleil | 0.0 |  |
| Plage d'Excenevex | 3 | 7 | 128° SE | aucun | soleil | 0.0 |  |
| Plage du Vengeron | 4 | 6 | 201° SSO | aucun | soleil | 0.0 |  |
| Plage d'Hermance | 4 | 6 | 201° SSO | aucun | soleil | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 196° SSO | aucun | soleil | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 352° N | aucun | soleil | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 170° S | aucun | soleil | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 170° S | aucun | soleil | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 184° S | aucun | soleil-couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 185° S | aucun | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 4 | 10 | 190° S | aucun | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 148° SSE | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont de Chavanay | 5 | 13 | 148° SSE | aucun | soleil-couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 153° SSE | aucun | soleil-couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 155° SSE | aucun | soleil-couvert | 0.0 |  |
| Saint-Romain-des-Iles | 2 | 7 | 129° SE | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont d'Arciat | 2 | 7 | 129° SE | aucun | soleil-couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 151° SSE | aucun | couvert | 0.0 |  |
