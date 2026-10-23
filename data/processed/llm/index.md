# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 23/10/2026 22:31 (Europe/Paris)
- Fichiers générés le : 2026-10-23T22:36:33+02:00
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
| Plage de la pointe - Messery | 22 | 32 | 211° SSO | 08h-20h | pluie | 8.2 | 13°C |
| Plage d'Excenevex | 20 | 28 | 193° SSO | 11h-20h | pluie | 5.5 | 13°C |
| Plage du Vengeron | 21 | 29 | 196° SSO | 10h-15h | pluie | 2.6 | 14°C |
| Plage d'Hermance | 22 | 31 | 203° SSO | 11h-20h | pluie | 3.9 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 17 | 26 | 136° SE | 13h-18h | pluie | 5.1 | 14°C |
| Lac du Bourget - Cap des Séselets | 14 | 20 | 190° S | 11h-17h | orage | 12.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 21 | 209° SSO | aucun | orage | 5.4 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 199° SSO | aucun | pluie | 1.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 155° SSE | aucun | pluie | 1.4 | 17°C |
| La Roche-de-Glun - Base Nautique | 11 | 26 | 200° SSO | aucun | pluie | 3.7 | 18°C |
| Cruas - Nuclear Spot | 6 | 12 | 207° SSO | aucun | pluie | 1.5 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 18 | 158° SSE | aucun | pluie | 1.2 | 17°C |
| Nord du Pont de Chavanay | 10 | 17 | 172° S | aucun | soleil-couvert | 0.7 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 27 | 168° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 187° S | aucun | soleil-couvert | 0.1 | 17°C |
| Saint-Romain-des-Iles | 14 | 17 | 201° SSO | 10h-14h | pluie | 0.6 | 16°C |
| Nord du Pont d'Arciat | 14 | 23 | 224° SO | 11h-16h | soleil-couvert | 0.2 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 20 | 29 | 183° S | 08h-17h | couvert | 0.3 | 16°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 29 | 211° SSO | 08h-20h | pluie | 4.7 | 10°C |
| Plage d'Excenevex | 13 | 18 | 203° SSO | 08h-18h | pluie | 2.7 | 10°C |
| Plage du Vengeron | 15 | 20 | 203° SSO | 08h-18h | pluie | 3.3 | 10°C |
| Plage d'Hermance | 18 | 24 | 204° SSO | 08h-20h | pluie | 4.9 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 11 | 134° SE | aucun | pluie | 2.9 | 9°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 172° S | aucun | pluie | 2.7 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 7° N | aucun | pluie | 1.3 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 15 | 3° N | aucun | couvert | 0.6 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 57° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 3 | 4 | 201° SSO | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 5 | 11 | 31° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 182° S | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 10 | 178° S | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 176° S | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 183° S | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 9 | 14 | 152° SSE | aucun | couvert | 0.2 | 14°C |
| Nord du Pont d'Arciat | 10 | 14 | 160° SSE | aucun | couvert | 0.5 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 11 | 157° SSE | aucun | couvert | 0.1 | 12°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 28 | 39 | 206° SSO | 08h-19h | pluie | 11.8 | 14°C |
| Plage d'Excenevex | 23 | 34 | 207° SSO | 08h-19h | pluie | 12.0 | 14°C |
| Plage du Vengeron | 20 | 27 | 204° SSO | 08h-19h | pluie | 9.8 | 15°C |
| Plage d'Hermance | 21 | 32 | 205° SSO | 08h-18h | pluie | 8.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 16 | 129° SE | aucun | pluie | 1.7 | 15°C |
| Lac du Bourget - Cap des Séselets | 16 | 24 | 212° SSO | 08h-16h | pluie | 2.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 16 | 56° NE | aucun | pluie | 6.9 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 187° S | aucun | pluie | 3.2 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 18 | 194° SSO | aucun | couvert | 0.1 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 157° SSE | aucun | couvert | 0.1 | 14°C |
| Cruas - Nuclear Spot | 6 | 12 | 194° SSO | aucun | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 22 | 160° SSE | 12h-17h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 9 | 19 | 163° SSE | aucun | pluie | 1.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 25 | 179° S | 11h-15h | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 213° SSO | aucun | pluie | 2.2 | 14°C |
| Saint-Romain-des-Iles | 15 | 24 | 185° S | 08h-15h | pluie | 2.7 | 14°C |
| Nord du Pont d'Arciat | 16 | 25 | 193° SSO | 08h-16h | pluie | 2.9 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 24 | 193° SSO | 08h-17h | pluie | 1.4 | 14°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 214° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 5 | 236° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 4 | 5 | 207° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 4 | 6 | 210° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 313° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 3 | 48° NE | aucun | soleil-couvert | 0.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 32° NNE | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 335° NNO | aucun | soleil | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 15 | 354° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 12 | 332° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 9 | 16 | 20° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 183° S | aucun | soleil-couvert | 0.3 | 15°C |
| Nord du Pont de Chavanay | 4 | 8 | 183° S | aucun | soleil-couvert | 0.3 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 45° NE | aucun | pluie | 0.7 | 15°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 45° NE | aucun | pluie | 0.7 | 15°C |
| Saint-Romain-des-Iles | 7 | 10 | 188° S | aucun | pluie | 1.6 | 12°C |
| Nord du Pont d'Arciat | 7 | 10 | 188° S | aucun | pluie | 1.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 86° E | aucun | pluie | 1.4 | 12°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 209° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 2 | 4 | 209° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 2 | 2 | 131° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 3 | 4 | 222° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 18° NNE | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 50° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 195° SSO | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 193° SSO | aucun | soleil | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 194° SSO | 13h-17h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 186° S | 13h-17h | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 7 | 13 | 200° SSO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 148° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 4 | 8 | 148° SSE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 200° SSO | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 200° SSO | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 5 | 10 | 178° S | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 5 | 10 | 178° S | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 300° ONO | aucun | soleil-couvert | 0.0 | 15°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 43° NE | aucun | pluie | 2.2 | 15°C |
| Plage d'Excenevex | 10 | 16 | 43° NE | 14h-17h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 11 | 16 | 339° NNO | 14h-17h | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 10 | 16 | 43° NE | aucun | soleil-couvert | 0.2 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 13 | 318° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 17 | 39° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 3° N | 11h-14h | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 2° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 35 | 2° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 15 | 31 | 356° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 15 | 33 | 11° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 352° N | 10h-18h | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 11 | 24 | 352° N | 10h-18h | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 354° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 344° NNO | 10h-19h | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 9 | 18 | 7° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 9 | 18 | 7° N | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 347° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 36° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 7 | 11 | 36° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 7 | 11 | 36° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 7 | 11 | 36° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 360° N | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 35° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 111° ESE | aucun | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 197° SSO | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 4° N | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 343° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 10 | 23 | 25° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 35° NE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 4 | 12 | 35° NE | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 48° NE | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 29° NNE | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 3 | 8 | 341° NNO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 3 | 8 | 341° NNO | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 360° N | aucun | couvert | 0.0 | 12°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 4 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 4 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 101° E | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 34° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 113° ESE | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 202° SSO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 357° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 324° NO | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 10 | 346° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 29° NNE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 3 | 8 | 29° NNE | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 32° NNE | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 21° NNE | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 2 | 8 | 97° E | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 2 | 8 | 97° E | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 344° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 36° NE | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 4 | 8 | 34° NE | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 4 | 9 | 36° NE | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 9 | 36° NE | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 262° O | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 212° SSO | aucun | couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 355° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 10° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 2° N | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 9 | 22 | 11° N | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 35° NE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 4 | 10 | 35° NE | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 42° NE | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 32° NNE | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 7 | 308° NO | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 7 | 308° NO | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 329° NNO | aucun | couvert | 0.0 | 12°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 204° SSO | 11h-15h | pluie | 1.2 | 12°C |
| Plage d'Excenevex | 14 | 20 | 212° SSO | 10h-17h | soleil-couvert | 0.5 | 13°C |
| Plage du Vengeron | 11 | 16 | 204° SSO | 11h-15h | pluie | 1.2 | 12°C |
| Plage d'Hermance | 11 | 16 | 204° SSO | 11h-15h | pluie | 1.2 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 242° OSO | aucun | pluie | 3.7 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 12 | 231° SO | aucun | pluie | 2.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 5° N | aucun | pluie | 1.2 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 357° N | aucun | couvert | 0.6 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 21° NNE | 13h-20h | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 22° NNE | 14h-17h | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 12 | 26 | 10° N | 14h-20h | soleil-couvert | 0.7 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 351° N | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 8 | 18 | 351° N | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 346° NNO | aucun | soleil | 0.1 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 344° NNO | aucun | soleil | 0.0 | 13°C |
| Saint-Romain-des-Iles | 10 | 22 | 303° ONO | aucun | soleil | 0.3 | 10°C |
| Nord du Pont d'Arciat | 10 | 22 | 303° ONO | aucun | soleil | 0.3 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 328° NNO | aucun | soleil-couvert | 0.1 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 25° NNE | aucun | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 8 | 12 | 10° N | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 7 | 11 | 25° NNE | aucun | couvert | 0.0 | 9°C |
| Plage d'Hermance | 7 | 11 | 25° NNE | aucun | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 308° NO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 30° NNE | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 335° NNO | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 13 | 328° NNO | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 6° N | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 345° NNO | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 24 | 20° NNE | aucun | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 9° N | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 13 | 9° N | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 357° N | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 358° N | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 10 | 33° NNE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 10 | 33° NNE | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 346° NNO | aucun | couvert | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 12 | 36° NE | aucun | pluie | 6.7 | 9°C |
| Plage d'Excenevex | 4 | 11 | 6° N | aucun | pluie | 6.7 | 9°C |
| Plage du Vengeron | 4 | 12 | 36° NE | aucun | pluie | 6.7 | 9°C |
| Plage d'Hermance | 4 | 12 | 36° NE | aucun | pluie | 6.7 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 4 | 360° N | aucun | pluie | 15.1 | 7°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 23° NNE | aucun | pluie | 9.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 15 | 348° NNO | aucun | pluie | 5.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 15 | 341° NNO | aucun | pluie | 4.5 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 3° N | aucun | pluie | 5.7 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 347° NNO | aucun | pluie | 5.7 | 10°C |
| Cruas - Nuclear Spot | 9 | 19 | 22° NNE | aucun | orage | 6.5 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 12° NNE | aucun | pluie | 4.2 | 10°C |
| Nord du Pont de Chavanay | 6 | 13 | 12° NNE | aucun | pluie | 4.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 356° N | aucun | pluie | 3.3 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 5° N | aucun | pluie | 4.2 | 9°C |
| Saint-Romain-des-Iles | 4 | 8 | 9° N | aucun | pluie | 1.2 | 9°C |
| Nord du Pont d'Arciat | 4 | 8 | 9° N | aucun | pluie | 1.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 332° NNO | aucun | pluie | 3.5 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 352° N | aucun | pluie | 1.2 | 10°C |
| Plage d'Excenevex | 5 | 9 | 20° NNE | aucun | couvert | 0.6 | 10°C |
| Plage du Vengeron | 4 | 10 | 352° N | aucun | pluie | 1.2 | 10°C |
| Plage d'Hermance | 4 | 10 | 352° N | aucun | pluie | 1.2 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 15 | 79° E | aucun | pluie | 2.4 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 20° NNE | aucun | pluie | 3.6 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 21 | 169° S | aucun | pluie | 6.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 20 | 163° SSE | aucun | pluie | 5.4 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 196° SSO | aucun | pluie | 3.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 18 | 199° SSO | aucun | pluie | 7.2 | 10°C |
| Cruas - Nuclear Spot | 4 | 10 | 7° N | aucun | pluie | 3.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 24 | 169° S | aucun | pluie | 6.0 | 10°C |
| Nord du Pont de Chavanay | 8 | 24 | 169° S | aucun | pluie | 6.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 177° S | aucun | pluie | 1.8 | 10°C |
| Saint-Cyr-sur-le-Rhône | 10 | 26 | 165° SSE | aucun | pluie | 4.2 | 10°C |
| Saint-Romain-des-Iles | 4 | 9 | 144° SE | aucun | pluie | 3.0 | 7°C |
| Nord du Pont d'Arciat | 4 | 9 | 144° SE | aucun | pluie | 3.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 18 | 113° ESE | aucun | pluie | 4.2 | 8°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 230° SO | aucun | pluie | 20.6 | 13°C |
| Plage d'Excenevex | 5 | 9 | 68° ENE | aucun | pluie | 18.6 | 13°C |
| Plage du Vengeron | 7 | 11 | 230° SO | aucun | pluie | 20.6 | 13°C |
| Plage d'Hermance | 7 | 11 | 230° SO | aucun | pluie | 20.6 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 16 | 145° SE | aucun | pluie | 12.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 1 | 16 | 258° OSO | aucun | pluie | 14.9 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 135° SE | aucun | pluie | 2.6 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 139° SE | aucun | soleil-couvert | 0.2 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 195° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 194° SSO | 10h-15h | couvert | 0.5 | 16°C |
| Cruas - Nuclear Spot | 6 | 14 | 222° SO | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 22 | 173° S | aucun | pluie | 6.0 | 16°C |
| Nord du Pont de Chavanay | 8 | 22 | 173° S | aucun | pluie | 6.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 21 | 176° S | aucun | pluie | 8.4 | 16°C |
| Saint-Cyr-sur-le-Rhône | 8 | 22 | 175° S | aucun | pluie | 3.4 | 15°C |
| Saint-Romain-des-Iles | 5 | 10 | 4° N | aucun | pluie | 5.7 | 8°C |
| Nord du Pont d'Arciat | 5 | 10 | 4° N | aucun | pluie | 5.7 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 20 | 199° SSO | aucun | pluie | 18.4 | 14°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 22 | 215° SO | 13h-16h | pluie | 2.6 | 13°C |
| Plage d'Excenevex | 16 | 29 | 220° SO | 12h-18h | pluie | 3.6 | 13°C |
| Plage du Vengeron | 12 | 22 | 215° SO | 13h-16h | pluie | 2.6 | 13°C |
| Plage d'Hermance | 12 | 22 | 215° SO | 13h-16h | pluie | 2.6 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 22 | 198° SSO | aucun | pluie | 7.7 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 24 | 182° S | aucun | pluie | 8.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 26 | 141° SE | aucun | pluie | 4.2 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 25 | 121° ESE | aucun | pluie | 4.4 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 181° S | aucun | pluie | 1.2 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 27 | 190° S | aucun | couvert | 0.4 | 16°C |
| Cruas - Nuclear Spot | 7 | 26 | 188° S | aucun | pluie | 1.5 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 29 | 173° S | aucun | couvert | 0.4 | 16°C |
| Nord du Pont de Chavanay | 11 | 29 | 173° S | aucun | couvert | 0.4 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 34 | 190° S | aucun | pluie | 0.6 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 30 | 183° S | aucun | pluie | 1.1 | 15°C |
| Saint-Romain-des-Iles | 6 | 26 | 251° OSO | aucun | pluie | 1.7 | 12°C |
| Nord du Pont d'Arciat | 6 | 26 | 251° OSO | aucun | pluie | 1.7 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 29 | 203° SSO | aucun | pluie | 0.6 | 15°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 24 | 203° SSO | 11h-14h | pluie | 6.4 | 11°C |
| Plage d'Excenevex | 18 | 26 | 222° SO | 10h-14h | pluie | 7.0 | 11°C |
| Plage du Vengeron | 14 | 24 | 203° SSO | 11h-14h | pluie | 6.4 | 11°C |
| Plage d'Hermance | 14 | 24 | 203° SSO | 11h-14h | pluie | 6.4 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 29 | 153° SSE | aucun | pluie | 13.9 | 7°C |
| Lac du Bourget - Cap des Séselets | 8 | 32 | 207° SSO | aucun | pluie | 12.1 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 23 | 174° S | aucun | pluie | 5.4 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 20 | 164° SSE | aucun | pluie | 4.8 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 202° SSO | aucun | pluie | 3.1 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 202° SSO | aucun | pluie | 4.3 | 16°C |
| Cruas - Nuclear Spot | 6 | 15 | 231° SO | aucun | pluie | 7.9 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 184° S | aucun | pluie | 1.3 | 15°C |
| Nord du Pont de Chavanay | 9 | 22 | 184° S | aucun | pluie | 1.3 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 177° S | 08h-11h | pluie | 1.5 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 178° S | aucun | pluie | 1.3 | 14°C |
| Saint-Romain-des-Iles | 15 | 26 | 257° OSO | 08h-14h | pluie | 4.5 | 13°C |
| Nord du Pont d'Arciat | 15 | 26 | 257° OSO | 08h-14h | pluie | 4.5 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 27 | 173° S | 08h-11h | pluie | 3.8 | 14°C |
