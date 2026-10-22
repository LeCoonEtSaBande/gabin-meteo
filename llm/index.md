# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 22/10/2026 12:20 (Europe/Paris)
- Fichiers générés le : 2026-10-22T12:24:44+02:00
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

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 247° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 8 | 12 | 253° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 8 | 237° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 9 | 11 | 204° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 159° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 29° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 5° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 348° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 5° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 5 | 10 | 55° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 5 | 159° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 8 | 201° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 162° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 217° SO | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 8 | 14 | 179° S | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 9 | 14 | 184° S | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 185° S | aucun | soleil-couvert | 0.0 | 13°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 27 | 39 | 209° SSO | 08h-17h | orage | 8.6 | 15°C |
| Plage d'Excenevex | 20 | 29 | 197° SSO | 10h-17h | orage | 9.2 | 14°C |
| Plage du Vengeron | 22 | 30 | 201° SSO | 08h-20h | pluie | 6.3 | 15°C |
| Plage d'Hermance | 24 | 34 | 196° SSO | 08h-19h | pluie | 5.7 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 24 | 209° SSO | 14h-17h | couvert | 0.2 | 15°C |
| Lac du Bourget - Cap des Séselets | 15 | 22 | 173° S | 13h-18h | orage | 4.3 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 29 | 206° SSO | 08h-11h | couvert | 0.4 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 19 | 192° SSO | aucun | pluie | 2.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 182° S | aucun | pluie | 1.5 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 24 | 190° S | aucun | soleil-couvert | 0.4 | 16°C |
| Cruas - Nuclear Spot | 6 | 12 | 176° S | aucun | pluie | 0.7 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 19 | 165° SSE | aucun | couvert | 0.2 | 16°C |
| Nord du Pont de Chavanay | 9 | 18 | 159° SSE | aucun | soleil-couvert | 0.1 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 29 | 175° S | aucun | soleil-couvert | 0.1 | 17°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 203° SSO | aucun | soleil-couvert | 0.7 | 17°C |
| Saint-Romain-des-Iles | 13 | 22 | 224° SO | 13h-16h | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 13 | 22 | 223° SO | 12h-17h | soleil-couvert | 0.2 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 28 | 194° SSO | 08h-14h | couvert | 0.0 | 15°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 204° SSO | 08h-20h | couvert | 0.1 | 11°C |
| Plage d'Excenevex | 12 | 17 | 198° SSO | 11h-14h | couvert | 0.0 | 11°C |
| Plage du Vengeron | 12 | 16 | 216° SO | 12h-15h | couvert | 0.0 | 11°C |
| Plage d'Hermance | 11 | 16 | 225° SO | aucun | couvert | 0.1 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 267° O | aucun | couvert | 0.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 8 | 17 | 180° S | aucun | pluie | 1.7 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 18° NNE | aucun | couvert | 0.5 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 355° N | aucun | couvert | 0.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 31° NNE | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 45° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 7 | 15 | 24° NNE | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 172° S | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 9 | 172° S | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 90° E | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 90° E | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 9 | 17 | 276° O | aucun | pluie | 1.5 | 12°C |
| Nord du Pont d'Arciat | 9 | 17 | 276° O | aucun | pluie | 1.5 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 136° SE | aucun | couvert | 0.0 | 13°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 29 | 225° SO | 08h-20h | pluie | 5.3 | 14°C |
| Plage d'Excenevex | 18 | 25 | 204° SSO | 08h-20h | pluie | 5.4 | 14°C |
| Plage du Vengeron | 16 | 21 | 210° SSO | 08h-20h | pluie | 2.2 | 14°C |
| Plage d'Hermance | 14 | 22 | 222° SO | 11h-18h | pluie | 2.2 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 11 | 129° SE | aucun | pluie | 2.7 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 295° ONO | aucun | pluie | 12.1 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 72° ENE | aucun | pluie | 2.3 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 175° S | aucun | pluie | 0.7 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 209° SSO | 13h-17h | couvert | 0.4 | 12°C |
| La Roche-de-Glun - Base Nautique | 14 | 23 | 197° SSO | 10h-17h | pluie | 1.3 | 13°C |
| Cruas - Nuclear Spot | 4 | 8 | 229° SO | aucun | couvert | 0.5 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 26 | 155° SSE | 11h-16h | couvert | 0.8 | 12°C |
| Nord du Pont de Chavanay | 14 | 26 | 155° SSE | 11h-16h | couvert | 0.8 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 29 | 181° S | 08h-16h | pluie | 1.1 | 12°C |
| Saint-Cyr-sur-le-Rhône | 15 | 29 | 181° S | 08h-16h | pluie | 1.1 | 12°C |
| Saint-Romain-des-Iles | 15 | 25 | 184° S | 08h-15h | pluie | 3.4 | 12°C |
| Nord du Pont d'Arciat | 15 | 25 | 184° S | 08h-15h | pluie | 3.4 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 26 | 180° S | 08h-15h | pluie | 1.0 | 12°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 218° SO | 12h-16h | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 11 | 15 | 247° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 10 | 13 | 216° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 10 | 16 | 223° SO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 315° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 268° O | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 33° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 343° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 352° N | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 9 | 13 | 335° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 10 | 20 | 8° N | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 5 | 36° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 3 | 5 | 36° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 103° ESE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 6 | 11 | 161° SSE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 6 | 11 | 161° SSE | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 142° SE | aucun | soleil-couvert | 0.0 | 16°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 244° OSO | aucun | couvert | 0.0 | 16°C |
| Plage d'Excenevex | 7 | 11 | 244° OSO | aucun | couvert | 0.0 | 16°C |
| Plage du Vengeron | 7 | 11 | 244° OSO | aucun | couvert | 0.0 | 16°C |
| Plage d'Hermance | 7 | 11 | 244° OSO | aucun | couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 118° ESE | aucun | couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 179° S | aucun | couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 193° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 195° SSO | 14h-19h | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 191° S | 13h-20h | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 9 | 20 | 196° SSO | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 172° S | 14h-20h | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 11 | 25 | 172° S | 14h-20h | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 170° S | 15h-20h | soleil | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 171° S | 14h-20h | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 9 | 17 | 164° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 9 | 17 | 164° SSE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 174° S | aucun | soleil | 0.0 | 20°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 31° NNE | aucun | pluie | 1.6 | 16°C |
| Plage d'Excenevex | 9 | 13 | 31° NNE | aucun | pluie | 1.6 | 16°C |
| Plage du Vengeron | 9 | 13 | 31° NNE | aucun | pluie | 1.6 | 16°C |
| Plage d'Hermance | 9 | 13 | 31° NNE | aucun | pluie | 1.6 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 319° NO | aucun | pluie | 3.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 11° N | aucun | couvert | 0.6 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 16 | 328° NNO | aucun | pluie | 2.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 16 | 4° N | aucun | couvert | 0.7 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 6° N | 12h-20h | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 3° N | 13h-20h | soleil | 0.0 | 17°C |
| Cruas - Nuclear Spot | 14 | 30 | 12° NNE | 13h-20h | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 10° N | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 9 | 20 | 10° N | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 358° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 4° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 8 | 17 | 318° NO | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 8 | 17 | 318° NO | aucun | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 346° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 28° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 8 | 12 | 28° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 8 | 12 | 28° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 8 | 12 | 28° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 325° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 30° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 108° ESE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 15° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 24 | 12° NNE | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 21 | 352° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 9 | 27 | 22° NNE | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 15 | 348° NNO | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 2 | 15 | 348° NNO | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 14 | 299° ONO | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 3 | 15 | 333° NNO | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 12 | 315° NO | aucun | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 3 | 12 | 315° NO | aucun | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 16 | 331° NNO | aucun | soleil-couvert | 0.0 | 13°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 31° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 6 | 11 | 38° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 11 | 31° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 6 | 11 | 31° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 318° NO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 34° NE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 146° SE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 145° SE | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 187° S | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 174° S | aucun | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 4 | 10 | 201° SSO | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 156° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 5 | 14 | 156° SSE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 153° SSE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 156° SSE | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 5 | 11 | 164° SSE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 5 | 11 | 164° SSE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 119° ESE | aucun | soleil | 0.0 | 18°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 8 | 13 | 15° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 9 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 9 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 316° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 42° NE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 43° NE | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 43° NE | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 187° S | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 182° S | aucun | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 5 | 13 | 213° SSO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 163° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 6 | 14 | 163° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 169° S | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 161° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 6 | 12 | 157° SSE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 6 | 12 | 157° SSE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 151° SSE | aucun | soleil | 0.0 | 18°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 26° NNE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 8 | 12 | 37° NE | aucun | soleil | 0.0 | 12°C |
| Plage du Vengeron | 8 | 11 | 26° NNE | aucun | soleil | 0.0 | 11°C |
| Plage d'Hermance | 8 | 11 | 26° NNE | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 333° NNO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 33° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 352° N | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 9 | 308° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 14 | 187° S | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 186° S | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 5 | 13 | 228° SO | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 153° SSE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 7 | 17 | 153° SSE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 155° SSE | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 153° SSE | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 8 | 15 | 165° SSE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 8 | 15 | 165° SSE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 157° SSE | aucun | soleil | 0.0 | 16°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 6 | 11 | 16° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 6 | 10 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Plage d'Hermance | 6 | 10 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 285° ONO | aucun | soleil | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 31° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 34° NE | aucun | soleil | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 24° NNE | aucun | soleil | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 182° S | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 176° S | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 5 | 12 | 212° SSO | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 155° SSE | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 6 | 14 | 155° SSE | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 160° SSE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 156° SSE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 5 | 11 | 158° SSE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 5 | 11 | 158° SSE | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 146° SE | aucun | soleil | 0.0 | 15°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 33° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 8 | 13 | 33° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 9 | 14 | 33° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 9 | 14 | 33° NNE | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 333° NNO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 34° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 4 | 180° S | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 4 | 176° S | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 14° NNE | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 10° N | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 8 | 5° N | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 31° NNE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 2 | 8 | 31° NNE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 7° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 15° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 2 | 7 | 126° SE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 2 | 7 | 126° SE | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 6° N | aucun | soleil-couvert | 0.0 | 12°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 12 | 42° NE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 7 | 13 | 44° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 5 | 12 | 42° NE | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 5 | 12 | 42° NE | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 297° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 29° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 25° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 190° S | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 3 | 6 | 213° SSO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 2 | 4 | 349° N | aucun | pluie | 3.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 129° SE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 2 | 8 | 129° SE | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 38° NE | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 101° E | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 2 | 7 | 118° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 2 | 7 | 118° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 331° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 37° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 8 | 12 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 8 | 12 | 37° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 8 | 12 | 37° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 309° NO | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 33° NNE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 11° N | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 13° NNE | aucun | soleil | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 359° N | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 341° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 8 | 16 | 9° N | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 12 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 338° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 355° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 3 | 12 | 324° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 12 | 324° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 354° N | aucun | soleil | 0.0 | 10°C |
