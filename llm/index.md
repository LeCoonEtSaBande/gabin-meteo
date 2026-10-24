# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 24/10/2026 11:38 (Europe/Paris)
- Fichiers générés le : 2026-10-24T11:41:31+02:00
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

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 24 | 181° S | 08h-20h | pluie | 5.2 | 10°C |
| Plage d'Excenevex | 14 | 21 | 201° SSO | 08h-18h | pluie | 3.2 | 10°C |
| Plage du Vengeron | 15 | 22 | 201° SSO | 08h-19h | pluie | 3.5 | 10°C |
| Plage d'Hermance | 15 | 21 | 173° S | 08h-20h | pluie | 5.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 11 | 146° SE | aucun | pluie | 3.3 | 9°C |
| Lac du Bourget - Cap des Séselets | 9 | 14 | 199° SSO | aucun | pluie | 1.5 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 14 | 23° NNE | aucun | couvert | 0.5 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 360° N | aucun | couvert | 0.3 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 65° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 99° E | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 9 | 62° ENE | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 8 | 173° S | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 9 | 175° S | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 175° S | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 225° SO | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 8 | 14 | 163° SSE | aucun | couvert | 0.3 | 13°C |
| Nord du Pont d'Arciat | 9 | 15 | 166° SSE | aucun | couvert | 0.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 167° SSE | aucun | couvert | 0.4 | 12°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 38 | 214° SO | 08h-20h | pluie | 9.8 | 14°C |
| Plage d'Excenevex | 20 | 30 | 203° SSO | 08h-20h | pluie | 8.1 | 14°C |
| Plage du Vengeron | 20 | 28 | 210° SSO | 08h-19h | pluie | 8.0 | 14°C |
| Plage d'Hermance | 24 | 34 | 211° SSO | 08h-18h | pluie | 5.9 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 18 | 144° SE | 09h-12h | couvert | 0.5 | 15°C |
| Lac du Bourget - Cap des Séselets | 16 | 22 | 210° SSO | 08h-16h | pluie | 5.9 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 44° NE | aucun | pluie | 5.4 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 158° SSE | aucun | couvert | 0.8 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 187° S | 13h-17h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 159° SSE | aucun | pluie | 2.0 | 14°C |
| Cruas - Nuclear Spot | 7 | 13 | 209° SSO | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 23 | 157° SSE | 11h-16h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 9 | 18 | 169° S | aucun | pluie | 0.9 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 28 | 179° S | 10h-15h | couvert | 0.1 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 214° SO | aucun | pluie | 1.1 | 14°C |
| Saint-Romain-des-Iles | 14 | 23 | 185° S | 08h-15h | pluie | 3.9 | 14°C |
| Nord du Pont d'Arciat | 16 | 23 | 195° SSO | 08h-15h | pluie | 2.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 25 | 189° S | 08h-17h | pluie | 1.9 | 14°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 239° OSO | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 7 | 9 | 262° O | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 4 | 5 | 241° OSO | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 7 | 10 | 253° OSO | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 318° NO | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 180° S | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 16 | 29° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 12 | 331° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 348° NNO | 11h-18h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 15 | 337° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 10 | 20 | 15° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 24° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 8 | 24° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 16° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 16° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 5 | 7 | 191° S | aucun | couvert | 0.1 | 11°C |
| Nord du Pont d'Arciat | 5 | 7 | 191° S | aucun | couvert | 0.1 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 3 | 94° E | aucun | couvert | 0.3 | 10°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 222° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 2 | 3 | 209° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 3 | 4 | 210° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 3 | 4 | 176° S | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 32° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 52° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 207° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 189° S | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 18 | 192° SSO | 14h-17h | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 11 | 19 | 184° S | 14h-17h | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 6 | 12 | 200° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 159° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 6 | 12 | 159° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 192° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 192° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 5 | 10 | 178° S | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 5 | 10 | 178° S | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 176° S | aucun | soleil-couvert | 0.0 | 16°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 42° NE | 16h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 15 | 20 | 53° NE | 15h-20h | couvert | 0.0 | 15°C |
| Plage du Vengeron | 13 | 19 | 32° NNE | 15h-20h | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 12 | 18 | 44° NE | 15h-20h | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 307° NO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 42° NE | aucun | soleil-couvert | 0.4 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 14° NNE | 14h-20h | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 359° N | 12h-18h | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 3° N | 09h-20h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 355° N | 10h-20h | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 15 | 33 | 7° N | 08h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 359° N | 15h-18h | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 10 | 23 | 359° N | 15h-18h | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 355° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 356° N | 15h-18h | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 9 | 16 | 345° NNO | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 9 | 16 | 345° NNO | aucun | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 347° NNO | aucun | soleil-couvert | 0.0 | 15°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 24 | 38° NE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 19 | 26 | 31° NNE | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 14 | 18 | 43° NE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 14 | 20 | 45° NE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 354° N | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 37° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 119° ESE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 329° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 15° NNE | 08h-18h | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 6° N | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 12 | 28 | 20° NNE | 08h-19h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 4° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 8 | 19 | 4° N | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 341° NNO | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 352° N | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 15 | 2° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 8 | 15 | 2° N | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 339° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 8° N | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 4 | 6 | 8° N | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 4 | 6 | 8° N | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 4 | 6 | 8° N | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 105° ESE | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 45° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 345° NNO | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 32° NNE | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 32 | 4° N | 10h-20h | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 358° N | 14h-20h | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 13 | 29 | 20° NNE | 09h-20h | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 350° N | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 22 | 350° N | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 337° NNO | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 344° NNO | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 10 | 19 | 354° N | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 10 | 19 | 354° N | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 344° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 22 | 37° NE | 14h-20h | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 15 | 22 | 20° NNE | 14h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 14 | 22 | 37° NE | 14h-20h | soleil | 0.0 | 9°C |
| Plage d'Hermance | 14 | 22 | 37° NE | 14h-20h | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 1° N | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 26° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 2° N | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 358° N | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 30 | 7° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 9° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 14 | 31 | 21° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 1° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 10 | 22 | 1° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 10 | 20 | 9° N | aucun | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 10 | 20 | 9° N | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 15 | 23 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 14 | 21 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 14 | 21 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 17 | 1° N | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 3° N | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 1° N | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 353° N | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 15° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 16° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 15 | 34 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 2° N | 12h-17h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 11 | 24 | 2° N | 12h-17h | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 359° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 358° N | 13h-16h | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 11 | 21 | 345° NNO | 12h-16h | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 11 | 21 | 345° NNO | 12h-16h | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 3° N | aucun | soleil-couvert | 0.0 | 10°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 28° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 10 | 15 | 15° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 10 | 15 | 28° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 10 | 15 | 28° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 336° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 27° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 11 | 333° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 321° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 8° N | 08h-17h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 1° N | 11h-14h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 12 | 31 | 22° NNE | 08h-20h | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 2° N | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 7 | 17 | 2° N | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 358° N | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 6 | 14 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 14 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 6 | 10 | 18° NNE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 6 | 11 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 6 | 11 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 313° NO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 30° NNE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 189° S | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 195° SSO | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 5° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 319° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 6 | 16 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 333° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 8 | 333° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 30° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 2 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 5 | 284° ONO | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 5 | 284° ONO | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 347° NNO | aucun | soleil-couvert | 0.0 | 7°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 30° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 6 | 10 | 33° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 6 | 10 | 30° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 6 | 10 | 30° NNE | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 315° NO | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 177° S | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 203° SSO | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 4° N | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 333° NNO | aucun | soleil-couvert | 0.1 | 10°C |
| Cruas - Nuclear Spot | 4 | 9 | 9° N | aucun | soleil | 0.1 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 20° NNE | aucun | pluie | 2.1 | 9°C |
| Nord du Pont de Chavanay | 3 | 9 | 20° NNE | aucun | pluie | 2.1 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 18° NNE | aucun | pluie | 1.5 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 9° N | aucun | pluie | 1.5 | 9°C |
| Saint-Romain-des-Iles | 2 | 6 | 77° ENE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 6 | 77° ENE | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 334° NNO | aucun | soleil-couvert | 0.8 | 8°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 31° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 7 | 11 | 24° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 7 | 11 | 31° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 7 | 11 | 31° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 323° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 152° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 135° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 9° N | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 357° N | aucun | pluie | 1.2 | 11°C |
| Cruas - Nuclear Spot | 5 | 12 | 25° NNE | aucun | pluie | 1.8 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 25° NNE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 9 | 25° NNE | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 32° NNE | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 18° NNE | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 6 | 19° NNE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 6 | 19° NNE | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 355° N | aucun | couvert | 0.0 | 8°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 40° NE | aucun | pluie | 3.6 | 8°C |
| Plage d'Excenevex | 7 | 13 | 33° NNE | aucun | pluie | 1.8 | 8°C |
| Plage du Vengeron | 8 | 13 | 40° NE | aucun | pluie | 3.6 | 8°C |
| Plage d'Hermance | 8 | 13 | 40° NE | aucun | pluie | 3.6 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 37° NE | aucun | pluie | 6.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 29° NNE | aucun | pluie | 7.8 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 326° NO | aucun | pluie | 3.6 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 318° NO | aucun | pluie | 3.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 6° N | aucun | pluie | 8.1 | 8°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 327° NNO | aucun | pluie | 9.1 | 8°C |
| Cruas - Nuclear Spot | 5 | 11 | 17° NNE | aucun | pluie | 1.9 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 11 | 2° N | aucun | pluie | 11.8 | 7°C |
| Nord du Pont de Chavanay | 5 | 11 | 2° N | aucun | pluie | 11.8 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 328° NNO | aucun | pluie | 8.5 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 348° NNO | aucun | pluie | 10.5 | 7°C |
| Saint-Romain-des-Iles | 3 | 9 | 318° NO | aucun | pluie | 1.8 | 6°C |
| Nord du Pont d'Arciat | 3 | 9 | 318° NO | aucun | pluie | 1.8 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 324° NO | aucun | pluie | 6.0 | 7°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 31° NNE | 08h-20h | pluie | 3.1 | 7°C |
| Plage d'Excenevex | 20 | 27 | 29° NNE | 08h-20h | pluie | 2.5 | 7°C |
| Plage du Vengeron | 19 | 26 | 31° NNE | 08h-20h | pluie | 3.1 | 7°C |
| Plage d'Hermance | 19 | 26 | 31° NNE | 08h-20h | pluie | 3.1 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 24 | 12° NNE | aucun | pluie | 6.6 | 4°C |
| Lac du Bourget - Cap des Séselets | 8 | 22 | 20° NNE | aucun | pluie | 3.8 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 355° N | aucun | pluie | 6.8 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 344° NNO | aucun | pluie | 6.8 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 37 | 355° N | 08h-20h | pluie | 3.3 | 7°C |
| La Roche-de-Glun - Base Nautique | 17 | 33 | 349° N | 08h-20h | pluie | 3.4 | 6°C |
| Cruas - Nuclear Spot | 18 | 39 | 6° N | 08h-20h | pluie | 1.2 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 31 | 341° NNO | 11h-20h | pluie | 1.8 | 6°C |
| Nord du Pont de Chavanay | 15 | 31 | 341° NNO | 11h-20h | pluie | 1.8 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 345° NNO | 11h-20h | couvert | 0.6 | 6°C |
| Saint-Cyr-sur-le-Rhône | 14 | 30 | 339° NNO | 10h-20h | pluie | 1.2 | 6°C |
| Saint-Romain-des-Iles | 14 | 25 | 355° N | 10h-20h | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 14 | 25 | 355° N | 10h-20h | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 28 | 350° N | 11h-20h | couvert | 0.6 | 6°C |
