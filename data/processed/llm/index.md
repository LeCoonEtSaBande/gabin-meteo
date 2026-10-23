# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 23/10/2026 12:15 (Europe/Paris)
- Fichiers générés le : 2026-10-23T12:19:22+02:00
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

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 35 | 200° SSO | 08h-20h | orage | 13.2 | 14°C |
| Plage d'Excenevex | 21 | 30 | 195° SSO | 10h-19h | orage | 11.7 | 14°C |
| Plage du Vengeron | 21 | 30 | 202° SSO | 10h-17h | orage | 7.9 | 15°C |
| Plage d'Hermance | 20 | 30 | 204° SSO | 10h-18h | orage | 13.2 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 17 | 23 | 146° SE | 12h-16h | pluie | 2.3 | 14°C |
| Lac du Bourget - Cap des Séselets | 13 | 24 | 204° SSO | 15h-19h | soleil | 0.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 21 | 209° SSO | 08h-11h | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 159° SSE | aucun | pluie | 2.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 167° SSE | aucun | orage | 6.7 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 181° S | aucun | orage | 6.5 | 15°C |
| Cruas - Nuclear Spot | 7 | 14 | 151° SSE | aucun | orage | 6.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 23 | 129° SE | 11h-14h | pluie | 0.9 | 16°C |
| Nord du Pont de Chavanay | 13 | 22 | 129° SE | 11h-14h | pluie | 0.5 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 27 | 166° SSE | aucun | pluie | 2.8 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 202° SSO | aucun | pluie | 2.7 | 16°C |
| Saint-Romain-des-Iles | 14 | 24 | 221° SO | 08h-15h | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 14 | 22 | 194° SSO | 08h-15h | couvert | 0.1 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 29 | 186° S | 08h-15h | pluie | 2.6 | 14°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 23 | 187° S | 08h-20h | pluie | 3.2 | 10°C |
| Plage d'Excenevex | 12 | 19 | 200° SSO | 09h-16h | pluie | 2.2 | 10°C |
| Plage du Vengeron | 14 | 19 | 205° SSO | 08h-17h | pluie | 1.1 | 10°C |
| Plage d'Hermance | 14 | 18 | 218° SO | 08h-17h | pluie | 3.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 136° SE | aucun | pluie | 1.6 | 10°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 218° SO | aucun | pluie | 3.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 6° N | aucun | couvert | 0.7 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 17 | 2° N | aucun | couvert | 0.5 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 69° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 101° E | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 5 | 12 | 26° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 7 | 175° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 9 | 187° S | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 174° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 205° SSO | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 14 | 166° SSE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 11 | 17 | 163° SSE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 170° S | aucun | pluie | 1.1 | 12°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 31 | 220° SO | 08h-20h | pluie | 8.1 | 14°C |
| Plage d'Excenevex | 18 | 25 | 204° SSO | 08h-19h | pluie | 7.9 | 15°C |
| Plage du Vengeron | 17 | 24 | 212° SSO | 08h-19h | pluie | 5.1 | 15°C |
| Plage d'Hermance | 15 | 23 | 226° SO | 10h-18h | pluie | 5.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 14 | 140° SE | aucun | pluie | 1.9 | 15°C |
| Lac du Bourget - Cap des Séselets | 14 | 21 | 205° SSO | aucun | pluie | 11.5 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 55° NE | aucun | pluie | 5.4 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 184° S | aucun | pluie | 1.6 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 199° SSO | 14h-18h | couvert | 0.4 | 13°C |
| La Roche-de-Glun - Base Nautique | 13 | 21 | 189° S | 10h-18h | couvert | 0.7 | 14°C |
| Cruas - Nuclear Spot | 4 | 7 | 207° SSO | aucun | couvert | 0.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 21 | 154° SSE | 12h-16h | couvert | 0.4 | 12°C |
| Nord du Pont de Chavanay | 11 | 21 | 154° SSE | 12h-16h | couvert | 0.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 25 | 184° S | 08h-17h | couvert | 0.6 | 12°C |
| Saint-Cyr-sur-le-Rhône | 13 | 25 | 184° S | 09h-17h | couvert | 0.6 | 12°C |
| Saint-Romain-des-Iles | 15 | 24 | 190° S | 08h-15h | pluie | 1.1 | 13°C |
| Nord du Pont d'Arciat | 15 | 24 | 190° S | 08h-15h | pluie | 1.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 22 | 179° S | 08h-16h | couvert | 0.3 | 13°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 216° SO | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 3 | 4 | 254° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 5 | 7 | 216° SO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 5 | 8 | 236° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 332° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 58° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 25° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 343° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 346° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 325° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 7 | 12 | 24° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 5 | 164° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 5 | 164° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 1 | 276° O | aucun | soleil-couvert | 0.1 | 16°C |
| Saint-Cyr-sur-le-Rhône | 2 | 1 | 276° O | aucun | soleil-couvert | 0.1 | 16°C |
| Saint-Romain-des-Iles | 6 | 10 | 186° S | aucun | pluie | 0.8 | 14°C |
| Nord du Pont d'Arciat | 6 | 10 | 186° S | aucun | pluie | 0.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 95° E | aucun | couvert | 0.4 | 13°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 3 | 209° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 3 | 4 | 216° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 2 | 3 | 149° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 2 | 3 | 229° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 318° NO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 50° NE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 208° SSO | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 10 | 194° SSO | aucun | soleil | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 190° S | 13h-17h | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 188° S | 12h-18h | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 9 | 21 | 199° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 169° S | 13h-17h | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 12 | 27 | 169° S | 13h-17h | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 174° S | 13h-18h | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 170° S | 13h-17h | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 13 | 169° S | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 6 | 13 | 169° S | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 174° S | aucun | soleil | 0.0 | 19°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 44° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Excenevex | 7 | 11 | 44° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 7 | 11 | 44° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 7 | 11 | 44° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 323° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 159° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 41° NE | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 2° N | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 3° N | 11h-20h | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 1° N | 12h-20h | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 15 | 33 | 11° N | 08h-20h | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 360° N | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 10 | 22 | 360° N | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 359° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 359° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 8 | 14 | 355° N | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 8 | 14 | 355° N | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 359° N | aucun | soleil-couvert | 0.0 | 16°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 16° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 5 | 8 | 16° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 5 | 8 | 16° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 8 | 16° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 320° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 110° ESE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 4 | 231° SO | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 3° N | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 352° N | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 10 | 25 | 25° NNE | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 18° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 6 | 14 | 18° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 9° N | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 8° N | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 4 | 11 | 18° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 4 | 11 | 18° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 344° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 347° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 5 | 8 | 33° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 4 | 7 | 347° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 7 | 347° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 108° ESE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 31° NNE | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 114° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 3 | 195° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 4° N | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 343° NNO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 6 | 13 | 23° NNE | aucun | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 326° NO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 2 | 7 | 326° NO | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 90° E | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 317° NO | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 3 | 8 | 127° SE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 8 | 127° SE | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 158° SSE | aucun | couvert | 0.0 | 11°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 34° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 7 | 12 | 24° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 7 | 12 | 34° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 7 | 12 | 34° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 314° NO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 21° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 2° N | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 2° N | aucun | soleil | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 5° N | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 2° N | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 9 | 21 | 20° NNE | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 31° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 15 | 31° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 28° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 22° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 9 | 28° NNE | aucun | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 4 | 9 | 28° NNE | aucun | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 352° N | aucun | soleil-couvert | 0.0 | 11°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 30° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 11 | 17 | 21° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 10 | 15 | 30° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 10 | 15 | 30° NNE | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 297° ONO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 210° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 13 | 26° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 12 | 17° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 30 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 20° NNE | 11h-18h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 12 | 30 | 27° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 356° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 9 | 22 | 356° N | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 349° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 347° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 9 | 16 | 327° NNO | aucun | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 9 | 16 | 327° NNO | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 350° N | aucun | soleil-couvert | 0.0 | 10°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 27° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 12 | 18 | 17° NNE | 08h-17h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 13 | 19 | 27° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 13 | 19 | 27° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 330° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 38° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 20° NNE | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 14° NNE | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 9° N | aucun | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 7° N | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 10 | 22 | 20° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 9° N | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 6 | 14 | 9° N | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 344° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 359° N | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 6 | 10 | 338° NNO | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 6 | 10 | 338° NNO | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 343° NNO | aucun | couvert | 0.0 | 7°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 19° NNE | 16h-20h | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 10 | 16 | 17° NNE | 17h-20h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 12 | 18 | 19° NNE | 16h-20h | soleil | 0.0 | 7°C |
| Plage d'Hermance | 12 | 18 | 19° NNE | 16h-20h | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 342° NNO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 37° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 175° S | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 165° SSE | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 8° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 348° NNO | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 7 | 18 | 35° NE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 5 | 12 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 20° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 17° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 5 | 323° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 5 | 323° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 334° NNO | aucun | soleil-couvert | 0.0 | 7°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 8 | 13 | 23° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 8 | 13 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 8 | 13 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 333° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 32° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 32° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 32° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 9° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 4 | 10 | 9° N | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 351° N | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 2 | 9 | 351° N | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 21° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 17° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 7 | 155° SSE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 7 | 155° SSE | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 344° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 11 | 28° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 5 | 10 | 36° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 4 | 11 | 28° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 4 | 11 | 28° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 280° O | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 16° NNE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 200° SSO | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 217° SO | aucun | soleil | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 186° S | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 191° S | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 12 | 204° SSO | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 161° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 15 | 161° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 168° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 166° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 5 | 11 | 158° SSE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 11 | 158° SSE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 163° SSE | aucun | soleil-couvert | 0.0 | 11°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 48° NE | aucun | couvert | 0.6 | 10°C |
| Plage d'Excenevex | 2 | 6 | 54° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 3 | 6 | 48° NE | aucun | couvert | 0.6 | 10°C |
| Plage d'Hermance | 3 | 6 | 48° NE | aucun | couvert | 0.6 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 297° ONO | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 33° NNE | aucun | couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 25° NNE | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 188° S | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 7 | 347° NNO | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 325° NO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 3 | 7 | 8° N | aucun | couvert | 0.6 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 342° NNO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 3 | 6 | 342° NNO | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 198° SSO | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 191° S | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 2 | 5 | 50° NE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 2 | 5 | 50° NE | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 338° NNO | aucun | couvert | 0.6 | 11°C |
