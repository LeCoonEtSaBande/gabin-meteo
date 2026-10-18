# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 18/10/2026 11:43 (Europe/Paris)
- Fichiers générés le : 2026-10-18T11:47:23+02:00
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

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 26 | 35° NE | 08h-12h | couvert | 0.5 | 12°C |
| Plage d'Excenevex | 16 | 23 | 21° NNE | 08h-11h | couvert | 0.6 | 12°C |
| Plage du Vengeron | 14 | 21 | 41° NE | aucun | pluie | 7.8 | 12°C |
| Plage d'Hermance | 16 | 21 | 34° NE | 08h-11h | couvert | 0.3 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 11 | 322° NO | aucun | pluie | 9.3 | 12°C |
| Lac du Bourget - Cap des Séselets | 7 | 11 | 354° N | aucun | pluie | 8.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 4° N | aucun | orage | 21.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 341° NNO | aucun | orage | 15.3 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 20 | 24° NNE | 14h-19h | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 356° N | aucun | pluie | 0.9 | 12°C |
| Cruas - Nuclear Spot | 13 | 26 | 19° NNE | 08h-20h | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 331° NNO | aucun | pluie | 1.1 | 12°C |
| Nord du Pont de Chavanay | 7 | 14 | 319° NO | aucun | pluie | 1.5 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 341° NNO | aucun | pluie | 3.4 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 18° NNE | aucun | pluie | 3.1 | 10°C |
| Saint-Romain-des-Iles | 8 | 13 | 3° N | aucun | pluie | 2.1 | 10°C |
| Nord du Pont d'Arciat | 9 | 14 | 339° NNO | aucun | pluie | 2.8 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 334° NNO | aucun | pluie | 3.4 | 10°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 42° NE | 08h-19h | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 15 | 20 | 29° NNE | 16h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 11 | 15 | 42° NE | 15h-19h | soleil | 0.0 | 16°C |
| Plage d'Hermance | 12 | 16 | 46° NE | 13h-19h | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 313° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 9 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 189° S | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 317° NO | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 16° NNE | aucun | pluie | 5.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 355° N | aucun | pluie | 5.1 | 14°C |
| Cruas - Nuclear Spot | 12 | 24 | 26° NNE | 08h-13h | couvert | 0.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 14° NNE | aucun | pluie | 1.3 | 15°C |
| Nord du Pont de Chavanay | 5 | 10 | 27° NNE | aucun | pluie | 1.3 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 324° NO | aucun | pluie | 1.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 24° NNE | aucun | pluie | 1.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 6 | 53° NE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 5 | 9 | 40° NE | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 338° NNO | aucun | couvert | 0.1 | 12°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 56° NE | aucun | orage | 11.3 | 15°C |
| Plage d'Excenevex | 11 | 16 | 42° NE | aucun | orage | 10.2 | 15°C |
| Plage du Vengeron | 6 | 8 | 49° NE | aucun | orage | 12.0 | 15°C |
| Plage d'Hermance | 6 | 10 | 70° ENE | aucun | orage | 11.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 342° NNO | aucun | orage | 13.3 | 15°C |
| Lac du Bourget - Cap des Séselets | 8 | 16 | 18° NNE | aucun | couvert | 0.3 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 28 | 182° S | 08h-13h | pluie | 2.7 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 129° SE | aucun | orage | 40.9 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 30 | 2° N | aucun | orage | 29.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 16 | 27 | 359° N | aucun | orage | 29.9 | 14°C |
| Cruas - Nuclear Spot | 13 | 33 | 353° N | aucun | orage | 37.4 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 28 | 339° NNO | aucun | orage | 22.3 | 12°C |
| Nord du Pont de Chavanay | 15 | 28 | 339° NNO | aucun | orage | 22.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 21 | 339° NNO | aucun | orage | 17.8 | 12°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 339° NNO | aucun | orage | 17.5 | 12°C |
| Saint-Romain-des-Iles | 17 | 31 | 308° NO | 16h-20h | pluie | 8.6 | 12°C |
| Nord du Pont d'Arciat | 17 | 31 | 308° NO | 16h-20h | pluie | 8.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 313° NO | aucun | orage | 12.6 | 13°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 23 | 32 | 212° SSO | 08h-20h | pluie | 3.4 | 14°C |
| Plage d'Excenevex | 16 | 24 | 209° SSO | 11h-20h | pluie | 3.6 | 14°C |
| Plage du Vengeron | 18 | 24 | 209° SSO | 12h-20h | pluie | 4.2 | 13°C |
| Plage d'Hermance | 18 | 28 | 213° SSO | 12h-18h | pluie | 2.8 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 12 | 133° SE | aucun | pluie | 4.6 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 86° E | aucun | pluie | 2.2 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 206° SSO | aucun | pluie | 3.5 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 180° S | aucun | pluie | 1.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 16 | 344° NNO | aucun | soleil-couvert | 0.3 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 325° NO | aucun | pluie | 1.1 | 14°C |
| Cruas - Nuclear Spot | 10 | 22 | 357° N | aucun | soleil-couvert | 0.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 19° NNE | aucun | soleil-couvert | 0.5 | 13°C |
| Nord du Pont de Chavanay | 5 | 9 | 19° NNE | aucun | soleil-couvert | 0.5 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 314° NO | aucun | soleil-couvert | 0.8 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 314° NO | aucun | soleil-couvert | 0.8 | 13°C |
| Saint-Romain-des-Iles | 10 | 19 | 280° O | aucun | pluie | 0.7 | 13°C |
| Nord du Pont d'Arciat | 10 | 19 | 280° O | aucun | pluie | 0.7 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 229° SO | aucun | pluie | 1.2 | 11°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 222° SO | 10h-18h | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 10 | 14 | 228° SO | 11h-14h | soleil | 0.0 | 13°C |
| Plage du Vengeron | 11 | 14 | 223° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 11 | 17 | 231° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 197° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 58° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 34° NE | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 355° N | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 7 | 354° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 4 | 337° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 7 | 11 | 15° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 137° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 14 | 137° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 149° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 139° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 9 | 17 | 178° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 9 | 17 | 178° S | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 172° S | aucun | soleil-couvert | 0.0 | 15°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 23 | 230° SO | 08h-20h | pluie | 1.5 | 15°C |
| Plage d'Excenevex | 18 | 23 | 230° SO | 08h-20h | pluie | 1.5 | 15°C |
| Plage du Vengeron | 18 | 23 | 230° SO | 08h-20h | pluie | 1.5 | 15°C |
| Plage d'Hermance | 18 | 23 | 230° SO | 08h-20h | pluie | 1.5 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 7 | 207° SSO | aucun | pluie | 2.4 | 12°C |
| Lac du Bourget - Cap des Séselets | 6 | 23 | 201° SSO | aucun | pluie | 15.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 11 | 164° SSE | aucun | pluie | 1.2 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 7 | 168° SSE | aucun | soleil-couvert | 0.6 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 199° SSO | aucun | pluie | 1.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 193° SSO | aucun | pluie | 2.8 | 16°C |
| Cruas - Nuclear Spot | 6 | 13 | 207° SSO | aucun | soleil | 0.3 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 21 | 179° S | aucun | pluie | 4.2 | 14°C |
| Nord du Pont de Chavanay | 8 | 21 | 179° S | aucun | pluie | 4.2 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 27 | 180° S | aucun | soleil-couvert | 0.3 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 179° S | aucun | pluie | 1.8 | 14°C |
| Saint-Romain-des-Iles | 16 | 31 | 270° O | 09h-17h | pluie | 2.4 | 13°C |
| Nord du Pont d'Arciat | 16 | 31 | 270° O | 09h-17h | pluie | 2.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 26 | 186° S | 13h-16h | soleil | 0.0 | 14°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 308° NO | aucun | couvert | 0.1 | 13°C |
| Plage d'Excenevex | 8 | 11 | 308° NO | aucun | couvert | 0.1 | 13°C |
| Plage du Vengeron | 8 | 11 | 308° NO | aucun | couvert | 0.1 | 13°C |
| Plage d'Hermance | 8 | 11 | 308° NO | aucun | couvert | 0.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 326° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 8 | 21 | 207° SSO | aucun | pluie | 14.7 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 14 | 324° NO | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 14 | 356° N | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 20 | 199° SSO | aucun | pluie | 1.9 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 20 | 224° SO | aucun | soleil-couvert | 0.7 | 14°C |
| Cruas - Nuclear Spot | 4 | 16 | 199° SSO | aucun | pluie | 1.8 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 169° S | aucun | pluie | 2.6 | 13°C |
| Nord du Pont de Chavanay | 6 | 12 | 169° S | aucun | pluie | 2.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 174° S | aucun | pluie | 3.3 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 18 | 282° ONO | aucun | pluie | 7.3 | 13°C |
| Saint-Romain-des-Iles | 12 | 21 | 267° O | 13h-17h | pluie | 1.8 | 12°C |
| Nord du Pont d'Arciat | 12 | 21 | 267° O | 13h-17h | pluie | 1.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 21 | 254° OSO | aucun | pluie | 4.4 | 13°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 6 | 11 | 35° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 8 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 4 | 8 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 76° ENE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 18° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 346° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 348° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 358° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 356° N | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 8 | 19 | 350° N | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 32° NNE | aucun | soleil-couvert | 0.2 | 11°C |
| Nord du Pont de Chavanay | 4 | 11 | 32° NNE | aucun | soleil-couvert | 0.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 337° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 35° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 7 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 7 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 8° N | aucun | soleil-couvert | 0.0 | 11°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 27° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 7 | 13 | 29° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 8 | 13 | 27° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 8 | 13 | 27° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 331° NNO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 33° NNE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 4° N | aucun | soleil | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 5° N | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 5° N | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 359° N | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 10 | 24 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 24° NNE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 14 | 24° NNE | aucun | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 17° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 15° NNE | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 2 | 7 | 32° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 7 | 32° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 353° N | aucun | soleil | 0.0 | 12°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 5 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 4 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 305° NO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 15° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 4° N | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 360° N | aucun | soleil | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 9° N | 13h-17h | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 9° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 25 | 9° N | 14h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 28° NNE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 12 | 28° NNE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 51° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 22° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 2 | 6 | 75° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 6 | 75° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 340° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 38° NE | 13h-20h | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 12 | 16 | 22° NNE | 13h-20h | soleil | 0.0 | 14°C |
| Plage du Vengeron | 12 | 16 | 38° NE | 13h-20h | soleil | 0.0 | 15°C |
| Plage d'Hermance | 12 | 16 | 38° NE | 13h-20h | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 339° NNO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 47° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 3° N | aucun | soleil | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 351° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 32 | 7° N | 10h-20h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 28 | 2° N | 11h-19h | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 14 | 33 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 350° N | aucun | couvert | 0.1 | 13°C |
| Nord du Pont de Chavanay | 9 | 21 | 350° N | aucun | couvert | 0.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 343° NNO | aucun | couvert | 0.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 342° NNO | aucun | couvert | 0.1 | 12°C |
| Saint-Romain-des-Iles | 9 | 16 | 348° NNO | aucun | couvert | 0.2 | 12°C |
| Nord du Pont d'Arciat | 9 | 16 | 348° NNO | aucun | couvert | 0.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 344° NNO | aucun | couvert | 0.1 | 12°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 29° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 6 | 11 | 33° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 7 | 12 | 29° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 7 | 12 | 29° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 317° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 32° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 174° S | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 212° SSO | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 13 | 354° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 2 | 9 | 320° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 6 | 20 | 18° NNE | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 327° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 2 | 7 | 327° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 5° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 336° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 9 | 147° SSE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 3 | 9 | 147° SSE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 13°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 8 | 21° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 4 | 9 | 40° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 3 | 8 | 21° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 3 | 8 | 21° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 304° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 20° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 166° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 155° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 1 | 8 | 5° N | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 3 | 6 | 312° NO | aucun | soleil | 0.0 | 17°C |
| Cruas - Nuclear Spot | 2 | 4 | 5° N | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 4 | 344° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 2 | 4 | 344° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 73° ENE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 1 | 3 | 333° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 2 | 7 | 112° ESE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 2 | 7 | 112° ESE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 6 | 340° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 27° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 6 | 38° NE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 6 | 9 | 27° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Hermance | 6 | 9 | 27° NNE | aucun | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 297° ONO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 31° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 4 | 189° S | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 186° S | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 5° N | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 3 | 8 | 350° N | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 3 | 7 | 356° N | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 28° NNE | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 2 | 6 | 28° NNE | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 38° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 28° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 2 | 7 | 90° E | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 7 | 90° E | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 4 | 315° NO | aucun | soleil-couvert | 0.0 | 14°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 18° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 4 | 7 | 44° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 4 | 7 | 18° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 4 | 7 | 18° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 266° O | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 21° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 216° SO | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 228° SO | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 185° S | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 185° S | aucun | soleil | 0.0 | 17°C |
| Cruas - Nuclear Spot | 6 | 15 | 201° SSO | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 163° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 9 | 21 | 163° SSE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 165° SSE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 163° SSE | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 13 | 168° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 6 | 13 | 168° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 169° S | aucun | soleil | 0.0 | 18°C |
