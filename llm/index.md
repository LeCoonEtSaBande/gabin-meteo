# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 17/10/2026 21:32 (Europe/Paris)
- Fichiers générés le : 2026-10-17T21:37:05+02:00
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

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 47° NE | aucun | couvert | 0.5 | 16°C |
| Plage d'Excenevex | 16 | 24 | 38° NE | 17h-20h | couvert | 0.6 | 16°C |
| Plage du Vengeron | 15 | 21 | 56° NE | 17h-20h | pluie | 1.0 | 16°C |
| Plage d'Hermance | 14 | 19 | 61° ENE | aucun | pluie | 1.3 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 14 | 284° ONO | aucun | couvert | 0.4 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 8 | 124° SE | aucun | pluie | 3.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 22 | 1° N | 11h-19h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 355° N | 12h-19h | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 30 | 6° N | 08h-20h | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 350° N | 17h-20h | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 17 | 36 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 23 | 356° N | 09h-20h | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 13 | 23 | 359° N | 10h-20h | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 341° NNO | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 5° N | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 12 | 20 | 352° N | 09h-16h | couvert | 0.2 | 13°C |
| Nord du Pont d'Arciat | 12 | 18 | 2° N | 10h-16h | couvert | 0.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 21 | 349° N | 09h-20h | couvert | 0.0 | 14°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 28 | 31° NNE | 08h-12h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 14 | 23 | 23° NNE | aucun | orage | 15.5 | 12°C |
| Plage du Vengeron | 12 | 19 | 53° NE | aucun | orage | 16.5 | 12°C |
| Plage d'Hermance | 14 | 22 | 40° NE | aucun | pluie | 17.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 15 | 354° N | aucun | pluie | 13.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 8° N | aucun | pluie | 3.9 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 9° N | aucun | orage | 18.2 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 326° NO | aucun | orage | 15.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 25° NNE | 13h-19h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 27° NNE | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 13 | 26 | 20° NNE | 08h-20h | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 326° NO | aucun | couvert | 0.8 | 13°C |
| Nord du Pont de Chavanay | 8 | 14 | 313° NO | aucun | couvert | 0.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 319° NO | aucun | pluie | 1.8 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 39° NE | aucun | pluie | 1.9 | 11°C |
| Saint-Romain-des-Iles | 9 | 15 | 360° N | aucun | couvert | 0.2 | 12°C |
| Nord du Pont d'Arciat | 10 | 15 | 339° NNO | aucun | pluie | 1.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 341° NNO | aucun | pluie | 2.1 | 11°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 50° NE | 09h-19h | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 15 | 20 | 26° NNE | 12h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 11 | 15 | 38° NE | 13h-19h | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 12 | 18 | 48° NE | 12h-19h | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 8 | 12 | 334° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 202° SSO | aucun | couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 360° N | aucun | couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 15° NNE | aucun | pluie | 1.5 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 353° N | aucun | pluie | 1.6 | 16°C |
| Cruas - Nuclear Spot | 11 | 22 | 25° NNE | 09h-14h | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 17° NNE | aucun | soleil-couvert | 0.4 | 15°C |
| Nord du Pont de Chavanay | 5 | 11 | 41° NE | aucun | soleil-couvert | 0.4 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 324° NO | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 31° NNE | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 4 | 8 | 43° NE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 5 | 8 | 48° NE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 357° N | aucun | couvert | 0.0 | 13°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 226° SO | aucun | pluie | 7.4 | 15°C |
| Plage d'Excenevex | 11 | 15 | 41° NE | aucun | pluie | 5.4 | 15°C |
| Plage du Vengeron | 5 | 7 | 50° NE | aucun | orage | 9.0 | 15°C |
| Plage d'Hermance | 7 | 11 | 70° ENE | aucun | orage | 7.8 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 342° NNO | aucun | orage | 11.8 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 57° ENE | aucun | pluie | 1.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 26 | 184° S | 08h-15h | orage | 11.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 11 | 230° SO | aucun | orage | 33.4 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 17 | 359° N | aucun | pluie | 6.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 334° NNO | aucun | pluie | 5.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 14 | 4° N | aucun | pluie | 9.9 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 17 | 360° N | aucun | pluie | 4.1 | 14°C |
| Nord du Pont de Chavanay | 9 | 17 | 360° N | aucun | pluie | 4.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 349° N | aucun | pluie | 4.8 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 349° N | aucun | pluie | 4.8 | 13°C |
| Saint-Romain-des-Iles | 11 | 20 | 313° NO | aucun | pluie | 2.7 | 13°C |
| Nord du Pont d'Arciat | 11 | 20 | 313° NO | aucun | pluie | 2.7 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 15 | 359° N | aucun | pluie | 4.1 | 14°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 23 | 34 | 214° SO | 08h-20h | pluie | 2.5 | 14°C |
| Plage d'Excenevex | 21 | 28 | 222° SO | 11h-20h | pluie | 2.3 | 15°C |
| Plage du Vengeron | 18 | 26 | 217° SO | 11h-19h | pluie | 3.2 | 14°C |
| Plage d'Hermance | 18 | 28 | 219° SO | 12h-20h | pluie | 2.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 13 | 195° SSO | aucun | pluie | 3.8 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 227° SO | aucun | pluie | 2.3 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 131° SE | aucun | pluie | 4.5 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 17 | 338° NNO | aucun | pluie | 1.9 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 337° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 12 | 315° NO | aucun | soleil-couvert | 0.2 | 15°C |
| Cruas - Nuclear Spot | 11 | 24 | 5° N | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 58° ENE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 9 | 58° ENE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 74° ENE | aucun | soleil-couvert | 0.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 74° ENE | aucun | soleil-couvert | 0.1 | 13°C |
| Saint-Romain-des-Iles | 5 | 9 | 186° S | aucun | pluie | 0.6 | 12°C |
| Nord du Pont d'Arciat | 5 | 9 | 186° S | aucun | pluie | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 96° E | aucun | couvert | 0.4 | 12°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 218° SO | 08h-14h | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 11 | 14 | 224° SO | aucun | soleil-couvert | 0.3 | 13°C |
| Plage du Vengeron | 9 | 12 | 218° SO | aucun | soleil-couvert | 0.1 | 13°C |
| Plage d'Hermance | 9 | 13 | 215° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 320° NO | aucun | soleil-couvert | 0.1 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 348° NNO | aucun | soleil-couvert | 0.2 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 19 | 360° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 28° NNE | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 63° ENE | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 6 | 15 | 42° NE | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 128° SE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 14 | 128° SE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 123° ESE | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 137° SE | aucun | soleil | 0.0 | 13°C |
| Saint-Romain-des-Iles | 8 | 15 | 148° SSE | aucun | soleil-couvert | 0.9 | 13°C |
| Nord du Pont d'Arciat | 8 | 15 | 148° SSE | aucun | soleil-couvert | 0.9 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 113° ESE | aucun | soleil | 0.0 | 13°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 32 | 235° SO | 13h-20h | pluie | 1.2 | 17°C |
| Plage d'Excenevex | 20 | 32 | 235° SO | 13h-20h | pluie | 1.2 | 17°C |
| Plage du Vengeron | 20 | 32 | 235° SO | 13h-20h | pluie | 1.2 | 17°C |
| Plage d'Hermance | 20 | 32 | 235° SO | 13h-20h | pluie | 1.2 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 224° SO | aucun | pluie | 4.5 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 17 | 153° SSE | aucun | pluie | 7.2 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 18 | 180° S | aucun | pluie | 2.4 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 16 | 196° SSO | aucun | pluie | 1.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 171° S | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 181° S | 11h-14h | soleil-couvert | 0.4 | 15°C |
| Cruas - Nuclear Spot | 8 | 16 | 322° NO | aucun | soleil | 0.6 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 177° S | aucun | soleil-couvert | 0.6 | 16°C |
| Nord du Pont de Chavanay | 9 | 21 | 177° S | aucun | soleil-couvert | 0.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 179° S | aucun | soleil-couvert | 0.6 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 175° S | aucun | soleil-couvert | 0.6 | 16°C |
| Saint-Romain-des-Iles | 13 | 24 | 265° O | 12h-17h | soleil | 0.9 | 14°C |
| Nord du Pont d'Arciat | 13 | 24 | 265° O | 12h-17h | soleil | 0.9 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 188° S | aucun | pluie | 1.2 | 16°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 56° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 6 | 10 | 56° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 10 | 56° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 6 | 10 | 56° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 335° NNO | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 227° SO | aucun | couvert | 0.1 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 18 | 317° NO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 17 | 356° N | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 357° N | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 348° NNO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 8 | 19 | 17° NNE | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 209° SSO | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 9 | 209° SSO | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 175° S | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 202° SSO | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 12 | 163° SSE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 6 | 12 | 163° SSE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 145° SE | aucun | couvert | 0.0 | 12°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 20 | 243° OSO | 08h-17h | pluie | 10.0 | 12°C |
| Plage d'Excenevex | 14 | 21 | 247° OSO | 09h-18h | pluie | 8.6 | 13°C |
| Plage du Vengeron | 13 | 20 | 243° OSO | 08h-17h | pluie | 10.0 | 12°C |
| Plage d'Hermance | 13 | 20 | 243° OSO | 08h-17h | pluie | 10.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 19 | 141° SE | aucun | pluie | 9.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 13 | 272° O | aucun | pluie | 9.1 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 17 | 154° SSE | aucun | pluie | 6.7 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 152° SSE | aucun | pluie | 6.1 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 19 | 203° SSO | aucun | couvert | 0.1 | 14°C |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 204° SSO | 09h-15h | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 6 | 16 | 229° SO | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 186° S | 08h-13h | couvert | 0.6 | 13°C |
| Nord du Pont de Chavanay | 10 | 24 | 186° S | 08h-13h | couvert | 0.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 28 | 177° S | 08h-15h | couvert | 0.5 | 13°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 180° S | 08h-14h | couvert | 0.1 | 13°C |
| Saint-Romain-des-Iles | 11 | 21 | 183° S | aucun | pluie | 5.4 | 12°C |
| Nord du Pont d'Arciat | 11 | 21 | 183° S | aucun | pluie | 5.4 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 30 | 192° SSO | 08h-15h | pluie | 1.0 | 13°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 10 | 239° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 6 | 12 | 232° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 5 | 10 | 239° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 5 | 10 | 239° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 277° O | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 36° NE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 192° SSO | aucun | couvert | 0.2 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 205° SSO | aucun | couvert | 0.2 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 176° S | aucun | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 192° SSO | aucun | couvert | 0.1 | 15°C |
| Cruas - Nuclear Spot | 3 | 7 | 197° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 175° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 3 | 9 | 175° S | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 174° S | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 181° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 9 | 147° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 9 | 147° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 137° SE | aucun | couvert | 0.0 | 14°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 209° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 8 | 12 | 229° SO | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 8 | 13 | 209° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 8 | 13 | 209° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 131° SE | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 311° NO | aucun | soleil-couvert | 0.6 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 19 | 190° S | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 197° SSO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 190° S | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 190° S | 12h-16h | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 5 | 14 | 223° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 177° S | 11h-16h | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 12 | 27 | 177° S | 11h-16h | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 173° S | 08h-16h | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 176° S | 10h-16h | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 9 | 16 | 178° S | aucun | pluie | 1.2 | 18°C |
| Nord du Pont d'Arciat | 9 | 16 | 178° S | aucun | pluie | 1.2 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 190° S | aucun | soleil-couvert | 0.0 | 18°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 253° OSO | aucun | pluie | 10.2 | 14°C |
| Plage d'Excenevex | 4 | 10 | 289° ONO | aucun | pluie | 8.4 | 14°C |
| Plage du Vengeron | 6 | 10 | 253° OSO | aucun | pluie | 10.2 | 14°C |
| Plage d'Hermance | 6 | 10 | 253° OSO | aucun | pluie | 10.2 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 126° SE | aucun | pluie | 10.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 345° NNO | aucun | pluie | 10.8 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 26 | 169° S | aucun | pluie | 8.4 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 25 | 163° SSE | aucun | pluie | 9.6 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 193° SSO | aucun | pluie | 13.8 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 210° SSO | aucun | pluie | 9.6 | 15°C |
| Cruas - Nuclear Spot | 13 | 28 | 176° S | 12h-19h | pluie | 9.5 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 192° SSO | 13h-20h | pluie | 5.4 | 14°C |
| Nord du Pont de Chavanay | 12 | 27 | 192° SSO | 13h-20h | pluie | 5.4 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 33 | 173° S | 08h-20h | pluie | 7.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 32 | 184° S | 10h-20h | pluie | 5.7 | 14°C |
| Saint-Romain-des-Iles | 10 | 18 | 174° S | aucun | pluie | 10.8 | 14°C |
| Nord du Pont d'Arciat | 10 | 18 | 174° S | aucun | pluie | 10.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 28 | 182° S | 11h-17h | pluie | 5.1 | 14°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 16° NNE | 13h-20h | soleil | 0.4 | 13°C |
| Plage d'Excenevex | 15 | 21 | 14° NNE | 13h-20h | soleil | 0.2 | 13°C |
| Plage du Vengeron | 16 | 22 | 16° NNE | 13h-20h | soleil | 0.4 | 13°C |
| Plage d'Hermance | 16 | 22 | 16° NNE | 13h-20h | soleil | 0.4 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 351° N | aucun | soleil-couvert | 0.1 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 20° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 17 | 350° N | aucun | couvert | 0.2 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 345° NNO | aucun | couvert | 0.7 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 26 | 4° N | 08h-20h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 358° N | 09h-20h | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 13 | 28 | 16° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 19 | 353° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 9 | 19 | 353° N | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 353° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 350° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 9 | 17 | 1° N | aucun | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 9 | 17 | 1° N | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 352° N | aucun | soleil-couvert | 0.0 | 11°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 18 | 33° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 9 | 15 | 31° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 9 | 18 | 33° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 9 | 18 | 33° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 327° NNO | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 34° NE | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 310° NO | aucun | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 313° NO | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 357° N | aucun | pluie | 3.6 | 13°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 316° NO | aucun | pluie | 3.0 | 13°C |
| Cruas - Nuclear Spot | 5 | 16 | 24° NNE | aucun | pluie | 1.8 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 5 | 4° N | aucun | pluie | 1.8 | 13°C |
| Nord du Pont de Chavanay | 1 | 5 | 4° N | aucun | pluie | 1.8 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 270° O | aucun | pluie | 1.8 | 13°C |
| Saint-Cyr-sur-le-Rhône | 1 | 6 | 360° N | aucun | pluie | 1.8 | 12°C |
| Saint-Romain-des-Iles | 3 | 9 | 157° SSE | aucun | couvert | 0.6 | 12°C |
| Nord du Pont d'Arciat | 3 | 9 | 157° SSE | aucun | couvert | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 7 | 146° SE | aucun | pluie | 2.4 | 14°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 36° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 8 | 12 | 18° NNE | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 8 | 12 | 36° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 8 | 12 | 36° NE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 325° NO | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 29° NNE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 323° NO | aucun | pluie | 1.5 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 225° SO | aucun | pluie | 1.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 7° N | aucun | pluie | 4.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 352° N | aucun | pluie | 3.6 | 14°C |
| Cruas - Nuclear Spot | 10 | 25 | 18° NNE | aucun | pluie | 3.1 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 26° NNE | aucun | couvert | 0.6 | 13°C |
| Nord du Pont de Chavanay | 4 | 10 | 26° NNE | aucun | couvert | 0.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 330° NNO | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 356° N | aucun | couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 5 | 10 | 349° N | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 5 | 10 | 349° N | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 326° NO | aucun | couvert | 0.0 | 13°C |
