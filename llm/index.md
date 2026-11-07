# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 07/11/2026 21:59 (Europe/Paris)
- Fichiers générés le : 2026-11-07T22:02:56+01:00
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

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 220° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 6 | 9 | 224° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 4 | 267° O | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 6 | 8 | 226° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 352° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 7 | 5 | 18° NNE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 191° S | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 347° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 23° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 345° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 7 | 15 | 32° NNE | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 11 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 38° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 4 | 9 | 160° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 8 | 160° SSE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 277° O | aucun | soleil-couvert | 0.0 | 9°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 73° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 3 | 5 | 59° ENE | aucun | couvert | 0.0 | 9°C |
| Plage du Vengeron | 5 | 7 | 22° NNE | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 5 | 6 | 54° NE | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 338° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 32° NNE | aucun | pluie | 1.4 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 20 | 188° S | 10h-17h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 196° SSO | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 10 | 194° SSO | aucun | pluie | 0.9 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 177° S | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 6 | 210° SSO | aucun | pluie | 1.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 157° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 9 | 16 | 165° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 172° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 193° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 6 | 30° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 5 | 37° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 180° S | aucun | soleil-couvert | 0.0 | 13°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 61° ENE | aucun | couvert | 0.3 | 12°C |
| Plage d'Excenevex | 4 | 5 | 78° ENE | aucun | pluie | 0.8 | 12°C |
| Plage du Vengeron | 4 | 6 | 32° NNE | aucun | pluie | 1.0 | 13°C |
| Plage d'Hermance | 4 | 6 | 36° NE | aucun | pluie | 0.5 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 339° NNO | aucun | couvert | 0.2 | 16°C |
| Lac du Bourget - Cap des Séselets | 12 | 17 | 222° SO | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 19 | 35 | 171° S | 08h-20h | pluie | 1.5 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 158° SSE | aucun | pluie | 1.3 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 20 | 211° SSO | 08h-20h | pluie | 1.2 | 15°C |
| La Roche-de-Glun - Base Nautique | 12 | 22 | 204° SSO | aucun | couvert | 0.4 | 17°C |
| Cruas - Nuclear Spot | 8 | 15 | 206° SSO | aucun | pluie | 2.1 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 24 | 174° S | 08h-20h | couvert | 0.2 | 16°C |
| Nord du Pont de Chavanay | 16 | 27 | 174° S | 08h-20h | couvert | 0.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 40 | 183° S | 08h-20h | couvert | 0.1 | 16°C |
| Saint-Cyr-sur-le-Rhône | 15 | 32 | 204° SSO | 08h-20h | couvert | 0.6 | 16°C |
| Saint-Romain-des-Iles | 15 | 24 | 181° S | 14h-20h | couvert | 0.2 | 18°C |
| Nord du Pont d'Arciat | 18 | 27 | 178° S | 14h-20h | couvert | 0.2 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 25 | 197° SSO | 08h-20h | couvert | 0.1 | 16°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 232° SO | aucun | pluie | 1.8 | 14°C |
| Plage d'Excenevex | 3 | 4 | 76° ENE | aucun | pluie | 3.0 | 13°C |
| Plage du Vengeron | 3 | 4 | 180° S | aucun | couvert | 0.4 | 15°C |
| Plage d'Hermance | 4 | 6 | 255° OSO | aucun | pluie | 1.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 74° ENE | aucun | orage | 13.8 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 50° NE | aucun | pluie | 4.5 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 170° S | aucun | orage | 24.4 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 201° SSO | aucun | orage | 18.6 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 11 | 207° SSO | aucun | pluie | 2.4 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 14 | 208° SSO | aucun | pluie | 1.4 | 17°C |
| Cruas - Nuclear Spot | 2 | 2 | 85° E | aucun | pluie | 5.7 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 19 | 164° SSE | aucun | pluie | 1.5 | 16°C |
| Nord du Pont de Chavanay | 10 | 19 | 164° SSE | aucun | pluie | 1.5 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 25 | 188° S | 08h-13h | couvert | 0.5 | 15°C |
| Saint-Cyr-sur-le-Rhône | 13 | 25 | 188° S | 08h-13h | couvert | 0.5 | 15°C |
| Saint-Romain-des-Iles | 9 | 15 | 186° S | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 9 | 15 | 186° S | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 15 | 165° SSE | aucun | soleil-couvert | 0.0 | 16°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 212° SSO | aucun | pluie | 10.5 | 14°C |
| Plage d'Excenevex | 5 | 7 | 240° OSO | aucun | pluie | 10.1 | 15°C |
| Plage du Vengeron | 5 | 7 | 201° SSO | aucun | pluie | 9.7 | 15°C |
| Plage d'Hermance | 6 | 9 | 201° SSO | aucun | pluie | 9.8 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 13° NNE | aucun | pluie | 2.7 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 40° NE | aucun | pluie | 4.5 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 29 | 176° S | 11h-20h | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 12 | 168° SSE | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 13 | 205° SSO | aucun | orage | 7.3 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 17 | 200° SSO | aucun | orage | 7.7 | 16°C |
| Cruas - Nuclear Spot | 3 | 4 | 99° E | aucun | pluie | 6.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 19 | 168° SSE | 10h-13h | pluie | 2.0 | 16°C |
| Nord du Pont de Chavanay | 11 | 19 | 168° SSE | 10h-13h | pluie | 2.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 24 | 194° SSO | 08h-16h | pluie | 2.6 | 16°C |
| Saint-Cyr-sur-le-Rhône | 13 | 24 | 194° SSO | 08h-16h | pluie | 2.6 | 16°C |
| Saint-Romain-des-Iles | 10 | 18 | 176° S | aucun | pluie | 3.9 | 17°C |
| Nord du Pont d'Arciat | 10 | 18 | 176° S | aucun | pluie | 3.9 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 26 | 198° SSO | 10h-17h | soleil-couvert | 0.6 | 16°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 55° NE | aucun | pluie | 0.7 | 16°C |
| Plage d'Excenevex | 3 | 4 | 90° E | aucun | pluie | 1.1 | 16°C |
| Plage du Vengeron | 4 | 5 | 17° NNE | aucun | pluie | 1.5 | 16°C |
| Plage d'Hermance | 4 | 6 | 27° NNE | aucun | pluie | 1.1 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 112° ESE | aucun | couvert | 0.9 | 15°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 29° NNE | aucun | pluie | 13.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 10° N | aucun | pluie | 5.8 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 351° N | aucun | pluie | 1.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 28 | 2° N | 14h-20h | pluie | 14.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 347° NNO | aucun | pluie | 17.3 | 14°C |
| Cruas - Nuclear Spot | 12 | 27 | 9° N | 14h-20h | orage | 16.8 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 19 | 343° NNO | aucun | pluie | 14.1 | 14°C |
| Nord du Pont de Chavanay | 9 | 19 | 343° NNO | aucun | pluie | 14.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 17 | 336° NNO | aucun | pluie | 10.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 340° NNO | aucun | pluie | 13.0 | 14°C |
| Saint-Romain-des-Iles | 11 | 20 | 355° N | aucun | pluie | 6.0 | 14°C |
| Nord du Pont d'Arciat | 11 | 20 | 355° N | aucun | pluie | 6.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 19 | 353° N | aucun | pluie | 5.9 | 15°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 25 | 29° NNE | 12h-20h | pluie | 5.1 | 9°C |
| Plage d'Excenevex | 16 | 25 | 29° NNE | 12h-20h | pluie | 5.1 | 9°C |
| Plage du Vengeron | 16 | 25 | 29° NNE | 12h-20h | pluie | 5.1 | 9°C |
| Plage d'Hermance | 16 | 25 | 29° NNE | 12h-20h | pluie | 5.1 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 356° N | aucun | pluie | 3.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 9 | 25 | 22° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 335° NNO | aucun | pluie | 2.7 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 12° NNE | aucun | pluie | 1.5 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 1° N | 08h-20h | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 14 | 30 | 358° N | 08h-20h | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 13 | 28 | 11° N | 10h-20h | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 29 | 339° NNO | 08h-20h | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 13 | 29 | 339° NNO | 08h-20h | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 331° NNO | 08h-20h | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 13 | 29 | 332° NNO | 08h-20h | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 14 | 24 | 335° NNO | 08h-20h | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 14 | 24 | 335° NNO | 08h-20h | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 26 | 339° NNO | 08h-16h | couvert | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 20 | 35° NE | 08h-11h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 12 | 20 | 35° NE | 08h-11h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 12 | 20 | 35° NE | 08h-11h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 12 | 20 | 35° NE | 08h-11h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 352° N | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 29° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 360° N | aucun | pluie | 1.5 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 4 | 180° S | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 26 | 8° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 8 | 23 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 12 | 28 | 19° NNE | 08h-11h | couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 32° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 5 | 13 | 32° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 15 | 299° ONO | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 15° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 6 | 16 | 338° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 6 | 16 | 338° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 15 | 310° NO | aucun | soleil-couvert | 0.0 | 7°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 24° NNE | aucun | pluie | 5.1 | 9°C |
| Plage d'Excenevex | 6 | 11 | 40° NE | aucun | pluie | 3.3 | 9°C |
| Plage du Vengeron | 6 | 10 | 24° NNE | aucun | pluie | 5.1 | 9°C |
| Plage d'Hermance | 6 | 10 | 24° NNE | aucun | pluie | 5.1 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 134° SE | aucun | pluie | 6.3 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 24° NNE | aucun | pluie | 6.4 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 171° S | aucun | pluie | 6.4 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 180° S | aucun | pluie | 9.5 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 164° SSE | aucun | pluie | 22.2 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 178° S | aucun | pluie | 17.4 | 11°C |
| Cruas - Nuclear Spot | 4 | 12 | 254° OSO | aucun | pluie | 21.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 15 | 141° SE | aucun | pluie | 1.2 | 12°C |
| Nord du Pont de Chavanay | 5 | 15 | 141° SE | aucun | pluie | 1.2 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 177° S | aucun | pluie | 3.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 142° SE | aucun | pluie | 1.8 | 12°C |
| Saint-Romain-des-Iles | 5 | 11 | 177° S | aucun | pluie | 5.0 | 11°C |
| Nord du Pont d'Arciat | 5 | 11 | 177° S | aucun | pluie | 5.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 126° SE | aucun | pluie | 4.2 | 11°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 212° SSO | 09h-15h | soleil-couvert | 0.5 | 11°C |
| Plage d'Excenevex | 14 | 18 | 226° SO | 08h-16h | soleil-couvert | 0.6 | 11°C |
| Plage du Vengeron | 12 | 16 | 212° SSO | 09h-15h | soleil-couvert | 0.5 | 11°C |
| Plage d'Hermance | 12 | 16 | 212° SSO | 09h-15h | soleil-couvert | 0.5 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 18 | 132° SE | aucun | pluie | 1.7 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 212° SSO | aucun | pluie | 3.6 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 161° SSE | aucun | pluie | 1.4 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 153° SSE | aucun | soleil-couvert | 0.8 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 189° S | aucun | soleil-couvert | 0.3 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 183° S | aucun | soleil-couvert | 0.2 | 12°C |
| Cruas - Nuclear Spot | 5 | 14 | 193° SSO | aucun | couvert | 0.1 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 165° SSE | aucun | soleil-couvert | 0.9 | 13°C |
| Nord du Pont de Chavanay | 8 | 18 | 165° SSE | aucun | soleil-couvert | 0.9 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 18 | 167° SSE | aucun | pluie | 1.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 165° SSE | aucun | pluie | 1.0 | 12°C |
| Saint-Romain-des-Iles | 7 | 12 | 185° S | aucun | pluie | 2.2 | 12°C |
| Nord du Pont d'Arciat | 7 | 12 | 185° S | aucun | pluie | 2.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 19 | 181° S | aucun | pluie | 1.2 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 18 | 269° O | 10h-20h | pluie | 18.8 | 12°C |
| Plage d'Excenevex | 11 | 20 | 284° ONO | 13h-20h | pluie | 14.8 | 12°C |
| Plage du Vengeron | 15 | 18 | 269° O | 10h-20h | pluie | 18.8 | 12°C |
| Plage d'Hermance | 15 | 18 | 269° O | 10h-20h | pluie | 18.8 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 27 | 144° SE | aucun | pluie | 13.7 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 23 | 210° SSO | aucun | orage | 16.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 22 | 169° S | aucun | pluie | 10.3 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 14 | 171° S | aucun | pluie | 9.8 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 28 | 187° S | 14h-20h | pluie | 3.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 192° SSO | 08h-20h | pluie | 4.2 | 13°C |
| Cruas - Nuclear Spot | 10 | 24 | 194° SSO | aucun | pluie | 4.2 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 32 | 174° S | 08h-20h | pluie | 4.2 | 13°C |
| Nord du Pont de Chavanay | 14 | 32 | 174° S | 08h-20h | pluie | 4.2 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 40 | 174° S | 08h-20h | pluie | 4.7 | 13°C |
| Saint-Cyr-sur-le-Rhône | 15 | 35 | 171° S | 08h-20h | pluie | 6.1 | 13°C |
| Saint-Romain-des-Iles | 14 | 33 | 188° S | 08h-20h | pluie | 15.3 | 13°C |
| Nord du Pont d'Arciat | 14 | 33 | 188° S | 08h-20h | pluie | 15.3 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 19 | 38 | 192° SSO | 08h-20h | orage | 25.3 | 13°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 209° SSO | 08h-20h | pluie | 16.0 | 10°C |
| Plage d'Excenevex | 22 | 30 | 209° SSO | 08h-20h | pluie | 10.9 | 10°C |
| Plage du Vengeron | 19 | 26 | 209° SSO | 08h-20h | pluie | 16.0 | 10°C |
| Plage d'Hermance | 19 | 26 | 209° SSO | 08h-20h | pluie | 16.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 24 | 172° S | aucun | pluie | 15.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 8 | 24 | 187° S | aucun | pluie | 19.2 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 112° ESE | aucun | pluie | 15.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 15 | 117° ESE | aucun | pluie | 12.6 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 27 | 166° SSE | 09h-16h | soleil-couvert | 0.8 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 170° S | 08h-18h | pluie | 3.1 | 13°C |
| Cruas - Nuclear Spot | 11 | 24 | 203° SSO | 11h-15h | soleil-couvert | 0.3 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 26 | 170° S | aucun | pluie | 9.6 | 12°C |
| Nord du Pont de Chavanay | 9 | 26 | 170° S | aucun | pluie | 9.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 165° SSE | 11h-14h | pluie | 1.5 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 24 | 167° SSE | aucun | pluie | 18.0 | 12°C |
| Saint-Romain-des-Iles | 17 | 29 | 295° ONO | 16h-20h | pluie | 3.3 | 12°C |
| Nord du Pont d'Arciat | 17 | 29 | 295° ONO | 16h-20h | pluie | 3.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 183° S | 08h-13h | soleil-couvert | 0.6 | 12°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 189° S | 08h-20h | pluie | 1.4 | 7°C |
| Plage d'Excenevex | 15 | 21 | 208° SSO | 08h-20h | pluie | 1.3 | 7°C |
| Plage du Vengeron | 12 | 18 | 189° S | 08h-20h | pluie | 1.4 | 7°C |
| Plage d'Hermance | 12 | 18 | 189° S | 08h-20h | pluie | 1.4 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 14 | 159° SSE | aucun | pluie | 4.6 | 3°C |
| Lac du Bourget - Cap des Séselets | 3 | 13 | 231° SO | aucun | pluie | 4.1 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 30 | 355° N | aucun | pluie | 3.6 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 31 | 355° N | aucun | pluie | 3.3 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 22 | 20° NNE | aucun | pluie | 1.2 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 20 | 15° NNE | aucun | pluie | 1.2 | 9°C |
| Cruas - Nuclear Spot | 10 | 24 | 346° NNO | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 22 | 350° N | aucun | soleil-couvert | 0.6 | 8°C |
| Nord du Pont de Chavanay | 7 | 22 | 350° N | aucun | soleil-couvert | 0.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 319° NO | aucun | pluie | 1.3 | 8°C |
| Saint-Cyr-sur-le-Rhône | 8 | 21 | 330° NNO | aucun | pluie | 1.3 | 8°C |
| Saint-Romain-des-Iles | 10 | 18 | 293° ONO | 08h-13h | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 10 | 18 | 293° ONO | 08h-13h | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 311° NO | aucun | pluie | 6.6 | 8°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 221° SO | aucun | soleil-couvert | 0.6 | 8°C |
| Plage d'Excenevex | 5 | 11 | 202° SSO | aucun | pluie | 1.2 | 7°C |
| Plage du Vengeron | 8 | 12 | 221° SO | aucun | soleil-couvert | 0.6 | 8°C |
| Plage d'Hermance | 8 | 12 | 221° SO | aucun | soleil-couvert | 0.6 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 142° SE | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 41° NE | aucun | pluie | 1.2 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 14 | 346° NNO | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 15 | 350° N | aucun | soleil-couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 10° N | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 13° NNE | aucun | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 8 | 20 | 18° NNE | aucun | couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 32° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 4 | 9 | 32° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 353° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 2° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 3 | 9 | 143° SE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 9 | 143° SE | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 6°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 32° NNE | aucun | pluie | 6.6 | 4°C |
| Plage d'Excenevex | 7 | 11 | 36° NE | aucun | pluie | 4.8 | 3°C |
| Plage du Vengeron | 7 | 11 | 32° NNE | aucun | pluie | 6.6 | 4°C |
| Plage d'Hermance | 7 | 11 | 32° NNE | aucun | pluie | 6.6 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 5° N | aucun | pluie | 9.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 30° NNE | aucun | pluie | 10.8 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 194° SSO | aucun | pluie | 9.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 14 | 194° SSO | aucun | pluie | 10.2 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 193° SSO | aucun | pluie | 4.8 | 7°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 165° SSE | aucun | pluie | 6.6 | 8°C |
| Cruas - Nuclear Spot | 2 | 6 | 223° SO | aucun | pluie | 5.6 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 155° SSE | aucun | pluie | 6.6 | 7°C |
| Nord du Pont de Chavanay | 6 | 15 | 155° SSE | aucun | pluie | 6.6 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 163° SSE | aucun | pluie | 7.8 | 6°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 160° SSE | aucun | pluie | 6.6 | 6°C |
| Saint-Romain-des-Iles | 5 | 9 | 151° SSE | aucun | pluie | 4.8 | 5°C |
| Nord du Pont d'Arciat | 5 | 9 | 151° SSE | aucun | pluie | 4.8 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 133° SE | aucun | pluie | 6.6 | 5°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 13 | 37° NE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Excenevex | 6 | 12 | 38° NE | aucun | soleil-couvert | 0.0 |  |
| Plage du Vengeron | 7 | 13 | 37° NE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Hermance | 7 | 13 | 37° NE | aucun | soleil-couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 30° NNE | aucun | soleil-couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 34° NE | aucun | soleil-couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 144° SE | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 159° SSE | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 10 | 40° NE | aucun | soleil-couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 2 | 11 | 344° NNO | aucun | soleil-couvert | 0.0 |  |
| Cruas - Nuclear Spot | 4 | 10 | 15° NNE | aucun | couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 1 | 8 | 343° NNO | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont de Chavanay | 1 | 8 | 343° NNO | aucun | soleil-couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 0 | 3 | 360° N | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 1 | 6 | 330° NNO | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 3 | 7 | 157° SSE | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 3 | 7 | 157° SSE | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 137° SE | aucun | couvert | 0.0 |  |
