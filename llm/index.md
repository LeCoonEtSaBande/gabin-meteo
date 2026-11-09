# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 09/11/2026 08:50 (Europe/Paris)
- Fichiers générés le : 2026-11-09T08:54:03+01:00
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

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 41° NE | aucun | couvert | 0.3 | 12°C |
| Plage d'Excenevex | 4 | 6 | 85° E | aucun | couvert | 0.5 | 12°C |
| Plage du Vengeron | 5 | 7 | 32° NNE | aucun | couvert | 0.2 | 13°C |
| Plage d'Hermance | 5 | 7 | 7° N | aucun | couvert | 0.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 6 | 343° NNO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 182° S | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 19 | 36 | 190° S | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 23 | 187° S | 08h-15h | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 25 | 205° SSO | 09h-20h | couvert | 0.1 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 187° S | aucun | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 6 | 12 | 210° SSO | aucun | couvert | 0.5 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 25 | 188° S | 08h-20h | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 14 | 27 | 187° S | 09h-20h | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 38 | 181° S | 08h-20h | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 16 | 34 | 198° SSO | 08h-20h | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 16 | 25 | 180° S | 12h-19h | couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 17 | 26 | 182° S | 12h-19h | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 28 | 199° SSO | 10h-20h | couvert | 0.0 | 16°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 51° NE | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 2 | 3 | 160° SSE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 4 | 7 | 31° NNE | aucun | couvert | 0.0 | 15°C |
| Plage d'Hermance | 3 | 6 | 24° NNE | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 180° S | aucun | couvert | 0.3 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 129° SE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 192° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 203° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 15 | 193° SSO | aucun | orage | 5.1 | 17°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 164° SSE | aucun | soleil-couvert | 0.2 | 18°C |
| Cruas - Nuclear Spot | 4 | 6 | 196° SSO | aucun | orage | 5.8 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 15 | 151° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 15 | 158° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 178° S | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 196° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 7 | 11 | 190° S | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 8 | 12 | 185° S | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 177° S | aucun | soleil-couvert | 0.4 | 14°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 207° SSO | 13h-16h | couvert | 0.0 | 16°C |
| Plage d'Excenevex | 12 | 16 | 210° SSO | aucun | couvert | 0.0 | 17°C |
| Plage du Vengeron | 14 | 18 | 205° SSO | 12h-16h | couvert | 0.0 | 17°C |
| Plage d'Hermance | 12 | 20 | 206° SSO | 13h-16h | couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 125° SE | aucun | pluie | 3.3 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 7 | 177° S | aucun | pluie | 7.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 30 | 166° SSE | 08h-11h | pluie | 2.2 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 163° SSE | aucun | pluie | 1.2 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 177° S | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 19 | 182° S | 09h-17h | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 5 | 9 | 208° SSO | aucun | couvert | 0.3 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 141° SE | aucun | pluie | 5.4 | 18°C |
| Nord du Pont de Chavanay | 6 | 12 | 141° SE | aucun | pluie | 5.4 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 186° S | aucun | pluie | 5.8 | 18°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 186° S | aucun | pluie | 5.8 | 18°C |
| Saint-Romain-des-Iles | 7 | 10 | 193° SSO | aucun | pluie | 2.7 | 18°C |
| Nord du Pont d'Arciat | 7 | 10 | 193° SSO | aucun | pluie | 2.7 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 190° S | aucun | pluie | 2.3 | 18°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 37° NE | 11h-20h | pluie | 12.3 | 13°C |
| Plage d'Excenevex | 22 | 30 | 27° NNE | 09h-20h | pluie | 12.1 | 12°C |
| Plage du Vengeron | 17 | 23 | 33° NNE | 11h-20h | pluie | 10.8 | 13°C |
| Plage d'Hermance | 17 | 27 | 38° NE | 11h-20h | pluie | 11.8 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 302° ONO | aucun | pluie | 10.9 | 13°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 345° NNO | 15h-18h | pluie | 2.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 195° SSO | aucun | orage | 19.2 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 10 | 337° NNO | aucun | orage | 23.5 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 354° N | 17h-20h | pluie | 4.4 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 17 | 342° NNO | aucun | pluie | 11.2 | 14°C |
| Cruas - Nuclear Spot | 11 | 19 | 6° N | aucun | orage | 17.7 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 355° N | aucun | pluie | 9.4 | 13°C |
| Nord du Pont de Chavanay | 7 | 12 | 355° N | aucun | pluie | 9.4 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 358° N | aucun | pluie | 8.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 358° N | aucun | pluie | 8.2 | 12°C |
| Saint-Romain-des-Iles | 9 | 14 | 1° N | aucun | pluie | 4.1 | 12°C |
| Nord du Pont d'Arciat | 9 | 14 | 1° N | aucun | pluie | 4.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 354° N | aucun | pluie | 7.3 | 12°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 32 | 47 | 34° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 31 | 46 | 28° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 27 | 40 | 33° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 26 | 43 | 38° NE | 08h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 263° O | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 16 | 22 | 349° N | 08h-20h | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 33° NNE | 13h-20h | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 348° NNO | aucun | pluie | 2.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 39 | 359° N | 08h-20h | pluie | 1.2 | 9°C |
| La Roche-de-Glun - Base Nautique | 18 | 36 | 347° NNO | 08h-20h | soleil-couvert | 0.9 | 9°C |
| Cruas - Nuclear Spot | 19 | 41 | 5° N | 08h-20h | pluie | 1.2 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 32 | 341° NNO | 08h-20h | soleil-couvert | 0.3 | 9°C |
| Nord du Pont de Chavanay | 14 | 32 | 341° NNO | 08h-20h | soleil-couvert | 0.3 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 337° NNO | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 14 | 32 | 340° NNO | 08h-20h | soleil-couvert | 0.3 | 8°C |
| Saint-Romain-des-Iles | 15 | 26 | 351° N | 08h-19h | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 15 | 26 | 351° N | 08h-19h | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 32 | 345° NNO | 08h-20h | soleil-couvert | 0.0 | 8°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 33° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 9 | 14 | 33° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 14 | 33° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 9 | 14 | 33° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 349° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 7° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 18 | 192° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 15 | 177° S | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 28 | 14° NNE | aucun | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 23 | 358° N | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 12 | 32 | 25° NNE | 08h-12h | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 17 | 348° NNO | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 6 | 17 | 348° NNO | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 318° NO | aucun | soleil | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 17 | 333° NNO | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 7 | 12 | 339° NNO | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 7 | 12 | 339° NNO | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 335° NNO | aucun | soleil | 0.0 | 8°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 268° O | aucun | couvert | 0.6 | 12°C |
| Plage d'Excenevex | 5 | 8 | 268° O | aucun | couvert | 0.6 | 12°C |
| Plage du Vengeron | 5 | 8 | 268° O | aucun | couvert | 0.6 | 12°C |
| Plage d'Hermance | 5 | 8 | 268° O | aucun | couvert | 0.6 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 112° ESE | aucun | pluie | 2.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 133° SE | aucun | pluie | 1.8 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 20 | 151° SSE | aucun | pluie | 1.8 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 13 | 178° S | aucun | pluie | 1.5 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 185° S | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 187° S | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 6 | 15 | 224° SO | aucun | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 162° SSE | 12h-15h | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 10 | 24 | 162° SSE | 12h-15h | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 163° SSE | 12h-20h | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 158° SSE | 12h-16h | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 8 | 16 | 181° S | aucun | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 8 | 16 | 181° S | aucun | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 25 | 191° S | aucun | soleil | 0.0 | 13°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 228° SO | 13h-20h | pluie | 4.1 | 12°C |
| Plage d'Excenevex | 14 | 19 | 235° SO | 13h-20h | pluie | 3.3 | 12°C |
| Plage du Vengeron | 15 | 21 | 228° SO | 13h-20h | pluie | 4.1 | 12°C |
| Plage d'Hermance | 15 | 21 | 228° SO | 13h-20h | pluie | 4.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 13 | 125° SE | aucun | pluie | 10.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 155° SSE | aucun | pluie | 6.5 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 33 | 161° SSE | 08h-13h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 22 | 186° S | aucun | couvert | 0.7 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 192° SSO | aucun | couvert | 0.8 | 11°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 191° S | 08h-19h | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 4 | 10 | 200° SSO | aucun | pluie | 2.1 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 29 | 167° SSE | 08h-18h | pluie | 1.1 | 12°C |
| Nord du Pont de Chavanay | 12 | 29 | 167° SSE | 08h-18h | pluie | 1.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 31 | 165° SSE | 08h-20h | pluie | 3.6 | 12°C |
| Saint-Cyr-sur-le-Rhône | 13 | 30 | 166° SSE | 08h-20h | pluie | 3.4 | 12°C |
| Saint-Romain-des-Iles | 11 | 22 | 170° S | 08h-20h | pluie | 6.0 | 12°C |
| Nord du Pont d'Arciat | 11 | 22 | 170° S | 08h-20h | pluie | 6.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 30 | 183° S | 08h-20h | pluie | 3.8 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 241° OSO | 08h-20h | pluie | 3.8 | 13°C |
| Plage d'Excenevex | 16 | 21 | 247° OSO | 08h-20h | pluie | 2.5 | 13°C |
| Plage du Vengeron | 16 | 21 | 241° OSO | 08h-20h | pluie | 3.8 | 13°C |
| Plage d'Hermance | 16 | 21 | 241° OSO | 08h-20h | pluie | 3.8 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 184° S | aucun | pluie | 3.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 13 | 249° OSO | aucun | pluie | 6.5 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 179° S | aucun | pluie | 3.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 177° S | aucun | pluie | 4.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 189° S | aucun | pluie | 4.4 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 199° SSO | 08h-19h | pluie | 3.6 | 14°C |
| Cruas - Nuclear Spot | 6 | 14 | 214° SO | aucun | pluie | 4.9 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 31 | 182° S | 08h-20h | pluie | 6.6 | 14°C |
| Nord du Pont de Chavanay | 13 | 31 | 182° S | 08h-20h | pluie | 6.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 30 | 175° S | 08h-20h | pluie | 5.4 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 32 | 176° S | 08h-20h | pluie | 6.2 | 13°C |
| Saint-Romain-des-Iles | 12 | 22 | 181° S | 08h-19h | pluie | 7.8 | 14°C |
| Nord du Pont d'Arciat | 12 | 22 | 181° S | 08h-19h | pluie | 7.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 31 | 191° S | 08h-20h | pluie | 8.5 | 13°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 225° SO | 08h-13h | pluie | 7.8 | 14°C |
| Plage d'Excenevex | 15 | 26 | 226° SO | 08h-16h | pluie | 4.8 | 14°C |
| Plage du Vengeron | 14 | 21 | 225° SO | 08h-13h | pluie | 7.8 | 14°C |
| Plage d'Hermance | 14 | 21 | 225° SO | 08h-13h | pluie | 7.8 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 15 | 136° SE | aucun | pluie | 11.4 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 196° SSO | aucun | pluie | 9.6 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 101° E | aucun | pluie | 1.2 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 107° ESE | aucun | pluie | 1.2 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 18 | 173° S | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 9 | 22 | 190° S | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 4 | 12 | 194° SSO | aucun | couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 22 | 155° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 8 | 22 | 155° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 25 | 165° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 8 | 22 | 159° SSE | aucun | soleil-couvert | 0.6 | 15°C |
| Saint-Romain-des-Iles | 7 | 15 | 182° S | aucun | pluie | 4.2 | 15°C |
| Nord du Pont d'Arciat | 7 | 15 | 182° S | aucun | pluie | 4.2 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 188° S | aucun | pluie | 2.4 | 15°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 12 | 214° SO | aucun | couvert | 0.1 | 15°C |
| Plage d'Excenevex | 8 | 10 | 225° SO | aucun | couvert | 0.1 | 15°C |
| Plage du Vengeron | 10 | 12 | 214° SO | aucun | couvert | 0.1 | 15°C |
| Plage d'Hermance | 10 | 12 | 214° SO | aucun | couvert | 0.1 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 192° SSO | aucun | couvert | 0.1 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 225° SO | aucun | couvert | 0.1 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 26 | 180° S | aucun | couvert | 0.2 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 17 | 179° S | aucun | couvert | 0.2 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 198° SSO | 14h-20h | couvert | 0.1 | 17°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 197° SSO | 08h-20h | couvert | 0.1 | 17°C |
| Cruas - Nuclear Spot | 8 | 20 | 202° SSO | aucun | pluie | 1.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 29 | 193° SSO | 08h-20h | pluie | 0.5 | 17°C |
| Nord du Pont de Chavanay | 12 | 29 | 193° SSO | 08h-20h | pluie | 0.5 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 178° S | 08h-20h | pluie | 0.6 | 18°C |
| Saint-Cyr-sur-le-Rhône | 14 | 30 | 188° S | 08h-20h | pluie | 0.5 | 17°C |
| Saint-Romain-des-Iles | 9 | 16 | 190° S | aucun | pluie | 1.7 | 16°C |
| Nord du Pont d'Arciat | 9 | 16 | 190° S | aucun | pluie | 1.7 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 24 | 205° SSO | 08h-20h | pluie | 0.6 | 17°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 11 | 25° NNE | aucun | pluie | 14.1 | 12°C |
| Plage d'Excenevex | 9 | 12 | 8° N | aucun | pluie | 16.1 | 12°C |
| Plage du Vengeron | 9 | 11 | 25° NNE | aucun | pluie | 14.1 | 12°C |
| Plage d'Hermance | 9 | 11 | 25° NNE | aucun | pluie | 14.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 11 | 105° ESE | aucun | pluie | 18.4 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 16° NNE | aucun | pluie | 17.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 18 | 158° SSE | aucun | orage | 27.9 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 19 | 162° SSE | aucun | orage | 27.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 24 | 21° NNE | 13h-16h | orage | 13.3 | 12°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 13° NNE | aucun | orage | 43.0 | 12°C |
| Cruas - Nuclear Spot | 9 | 28 | 35° NE | aucun | orage | 66.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 15 | 6° N | aucun | orage | 48.8 | 12°C |
| Nord du Pont de Chavanay | 5 | 15 | 6° N | aucun | orage | 48.8 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 22 | 354° N | aucun | orage | 42.8 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 350° N | aucun | orage | 48.9 | 11°C |
| Saint-Romain-des-Iles | 3 | 8 | 354° N | aucun | pluie | 24.4 | 11°C |
| Nord du Pont d'Arciat | 3 | 8 | 354° N | aucun | pluie | 24.4 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 353° N | aucun | orage | 32.5 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 14° NNE | 08h-20h | pluie | 6.6 | 10°C |
| Plage d'Excenevex | 14 | 19 | 19° NNE | 08h-20h | pluie | 10.1 | 10°C |
| Plage du Vengeron | 14 | 19 | 14° NNE | 08h-20h | pluie | 6.6 | 10°C |
| Plage d'Hermance | 14 | 19 | 14° NNE | 08h-20h | pluie | 6.6 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 355° N | aucun | pluie | 7.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 355° N | aucun | pluie | 6.8 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 14 | 330° NNO | aucun | pluie | 19.4 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 17 | 342° NNO | aucun | pluie | 18.2 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 9° N | aucun | pluie | 9.5 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 20 | 334° NNO | aucun | pluie | 10.0 | 11°C |
| Cruas - Nuclear Spot | 8 | 18 | 27° NNE | aucun | pluie | 1.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 332° NNO | aucun | pluie | 4.4 | 10°C |
| Nord du Pont de Chavanay | 8 | 19 | 332° NNO | aucun | pluie | 4.4 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 324° NO | aucun | pluie | 5.1 | 9°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 323° NO | aucun | pluie | 5.0 | 10°C |
| Saint-Romain-des-Iles | 12 | 21 | 345° NNO | 08h-20h | pluie | 8.5 | 9°C |
| Nord du Pont d'Arciat | 12 | 21 | 345° NNO | 08h-20h | pluie | 8.5 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 334° NNO | aucun | pluie | 5.0 | 10°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 19 | 30° NNE | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 10 | 14 | 18° NNE | aucun | pluie | 1.2 | 9°C |
| Plage du Vengeron | 9 | 19 | 30° NNE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 9 | 19 | 30° NNE | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 315° NO | aucun | pluie | 1.3 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 11 | 32° NNE | aucun | couvert | 0.1 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 354° N | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 345° NNO | aucun | couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 10° N | 08h-15h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 5° N | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 13 | 27 | 21° NNE | 08h-16h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 356° N | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 7 | 17 | 356° N | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 347° NNO | aucun | couvert | 0.6 | 9°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 347° NNO | aucun | couvert | 0.6 | 9°C |
| Saint-Romain-des-Iles | 8 | 16 | 353° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 8 | 16 | 353° N | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 347° NNO | aucun | couvert | 0.6 | 9°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 8 | 247° OSO | aucun | couvert | 0.1 | 9°C |
| Plage d'Excenevex | 2 | 6 | 354° N | aucun | couvert | 0.0 | 9°C |
| Plage du Vengeron | 2 | 8 | 247° OSO | aucun | couvert | 0.1 | 9°C |
| Plage d'Hermance | 2 | 8 | 247° OSO | aucun | couvert | 0.1 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 261° O | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 24° NNE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 18° NNE | aucun | soleil | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 30° NNE | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 354° N | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 343° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 5 | 11 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 2 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 198° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 7 | 167° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 7 | 167° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 348° NNO | aucun | couvert | 0.0 | 8°C |
