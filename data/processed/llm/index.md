# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 05/11/2026 23:43 (Europe/Paris)
- Fichiers générés le : 2026-11-05T23:46:54+01:00
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

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 51° NE | aucun | pluie | 1.4 | 9°C |
| Plage d'Excenevex | 11 | 16 | 77° ENE | aucun | pluie | 1.7 | 9°C |
| Plage du Vengeron | 10 | 15 | 39° NE | aucun | couvert | 0.4 | 9°C |
| Plage d'Hermance | 10 | 16 | 43° NE | aucun | soleil-couvert | 0.4 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 319° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 354° N | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 24 | 197° SSO | 11h-17h | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 252° OSO | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 342° NNO | aucun | pluie | 3.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 315° NO | aucun | pluie | 4.4 | 12°C |
| Cruas - Nuclear Spot | 8 | 13 | 46° NE | aucun | orage | 10.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 8 | 2° N | aucun | orage | 8.9 | 10°C |
| Nord du Pont de Chavanay | 4 | 7 | 62° ENE | aucun | orage | 9.9 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 360° N | aucun | pluie | 6.9 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 6 | 36° NE | aucun | pluie | 5.8 | 10°C |
| Saint-Romain-des-Iles | 4 | 9 | 83° E | aucun | pluie | 2.0 | 11°C |
| Nord du Pont d'Arciat | 4 | 9 | 59° ENE | aucun | pluie | 1.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 84° E | aucun | pluie | 2.2 | 9°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 180° S | aucun | couvert | 0.3 | 9°C |
| Plage d'Excenevex | 3 | 6 | 216° SO | aucun | couvert | 0.2 | 10°C |
| Plage du Vengeron | 4 | 5 | 352° N | aucun | couvert | 0.5 | 10°C |
| Plage d'Hermance | 4 | 6 | 53° NE | aucun | couvert | 0.3 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 360° N | aucun | couvert | 0.2 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 3 | 360° N | aucun | couvert | 0.2 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 4° N | aucun | pluie | 2.8 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 12 | 315° NO | aucun | pluie | 0.9 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 315° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 8 | 16 | 13° NNE | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 8 | 19° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 353° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 49° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 9 | 43° NE | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 7 | 9 | 16° NNE | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 13° NNE | aucun | soleil-couvert | 0.0 | 10°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 231° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 2 | 3 | 171° S | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 4 | 17° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 3 | 5 | 266° O | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 311° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 26° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 182° S | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 349° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 11° N | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 9 | 333° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 20 | 27° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 40° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 6 | 11 | 57° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 43° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 53° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 5 | 6 | 75° ENE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 6 | 73° ENE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 49° NE | aucun | couvert | 0.0 | 8°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 40° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 3 | 4 | 82° E | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 5 | 38° NE | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 3 | 5 | 67° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 86° E | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 5 | 54° NE | aucun | soleil-couvert | 0.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 181° S | aucun | soleil-couvert | 0.4 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 200° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 204° SSO | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 16 | 201° SSO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 4 | 5 | 22° NNE | aucun | couvert | 0.2 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 22 | 172° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 13 | 22 | 172° S | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 186° S | 14h-17h | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 23 | 186° S | 14h-17h | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 6 | 11 | 165° SSE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 11 | 165° SSE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 200° SSO | aucun | couvert | 0.0 | 10°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 236° SO | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 3 | 4 | 14° NNE | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 6 | 9 | 194° SSO | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 6 | 10 | 190° S | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 351° N | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 43° NE | aucun | couvert | 0.1 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 31 | 174° S | 08h-20h | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 153° SSE | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 21 | 210° SSO | 08h-20h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 14 | 24 | 200° SSO | 08h-20h | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 5 | 9 | 216° SO | aucun | pluie | 1.3 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 27 | 181° S | 09h-20h | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 15 | 27 | 181° S | 09h-20h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 32 | 191° S | 08h-20h | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 16 | 32 | 191° S | 08h-20h | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 17 | 27 | 176° S | 13h-20h | couvert | 0.1 | 16°C |
| Nord du Pont d'Arciat | 17 | 27 | 176° S | 13h-20h | couvert | 0.1 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 26 | 193° SSO | 12h-20h | couvert | 0.0 | 16°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 63° ENE | aucun | pluie | 6.5 | 12°C |
| Plage d'Excenevex | 4 | 5 | 58° ENE | aucun | pluie | 6.9 | 12°C |
| Plage du Vengeron | 4 | 5 | 18° NNE | aucun | pluie | 5.5 | 13°C |
| Plage d'Hermance | 4 | 6 | 36° NE | aucun | pluie | 4.9 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 118° ESE | aucun | orage | 9.1 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 5° N | aucun | pluie | 7.8 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 20 | 189° S | aucun | orage | 27.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 12 | 208° SSO | aucun | orage | 28.5 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 181° S | aucun | pluie | 1.2 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 187° S | aucun | soleil-couvert | 0.3 | 16°C |
| Cruas - Nuclear Spot | 3 | 7 | 178° S | aucun | pluie | 10.2 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 167° SSE | aucun | soleil-couvert | 0.6 | 16°C |
| Nord du Pont de Chavanay | 9 | 21 | 167° SSE | aucun | soleil-couvert | 0.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 171° S | aucun | pluie | 2.1 | 17°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 167° SSE | aucun | pluie | 1.2 | 16°C |
| Saint-Romain-des-Iles | 7 | 13 | 170° S | aucun | pluie | 2.7 | 17°C |
| Nord du Pont d'Arciat | 7 | 13 | 170° S | aucun | pluie | 2.7 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 124° SE | aucun | pluie | 4.2 | 17°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 12 | 2° N | aucun | pluie | 6.6 | 13°C |
| Plage d'Excenevex | 5 | 12 | 2° N | aucun | pluie | 6.6 | 13°C |
| Plage du Vengeron | 5 | 12 | 2° N | aucun | pluie | 6.6 | 13°C |
| Plage d'Hermance | 5 | 12 | 2° N | aucun | pluie | 6.6 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 112° ESE | aucun | pluie | 6.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 351° N | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 31 | 164° SSE | aucun | pluie | 12.3 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 30 | 168° SSE | aucun | pluie | 7.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 18 | 181° S | aucun | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 192° SSO | aucun | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 9 | 22 | 182° S | aucun | couvert | 0.4 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 29 | 181° S | 11h-20h | couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 12 | 29 | 181° S | 11h-20h | couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 179° S | 10h-20h | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 13 | 30 | 179° S | 10h-20h | couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 10 | 18 | 170° S | aucun | couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 10 | 18 | 170° S | aucun | couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 181° S | aucun | couvert | 0.0 | 17°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 4 | 6 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 336° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 7 | 357° N | aucun | pluie | 17.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 126° SE | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 178° S | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 23 | 186° S | aucun | pluie | 30.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 25 | 189° S | aucun | pluie | 23.2 | 15°C |
| Cruas - Nuclear Spot | 8 | 22 | 185° S | aucun | pluie | 30.6 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 184° S | 08h-14h | pluie | 8.7 | 14°C |
| Nord du Pont de Chavanay | 12 | 28 | 184° S | 08h-14h | pluie | 8.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 30 | 175° S | 08h-15h | pluie | 7.2 | 15°C |
| Saint-Cyr-sur-le-Rhône | 14 | 31 | 175° S | 08h-17h | pluie | 9.8 | 14°C |
| Saint-Romain-des-Iles | 10 | 19 | 177° S | 08h-13h | pluie | 8.4 | 14°C |
| Nord du Pont d'Arciat | 10 | 19 | 177° S | 08h-13h | pluie | 8.4 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 162° SSE | aucun | orage | 15.0 | 14°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 337° NNO | aucun | pluie | 2.4 | 14°C |
| Plage d'Excenevex | 3 | 6 | 52° NE | aucun | pluie | 1.8 | 14°C |
| Plage du Vengeron | 3 | 6 | 337° NNO | aucun | pluie | 2.4 | 14°C |
| Plage d'Hermance | 3 | 6 | 337° NNO | aucun | pluie | 2.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 10 | 255° OSO | aucun | pluie | 4.2 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 15 | 227° SO | aucun | pluie | 10.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 24 | 177° S | aucun | pluie | 4.3 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 23 | 173° S | aucun | pluie | 3.1 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 206° SSO | aucun | pluie | 12.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 208° SSO | aucun | pluie | 5.5 | 14°C |
| Cruas - Nuclear Spot | 4 | 9 | 314° NO | aucun | orage | 51.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 176° S | aucun | pluie | 3.0 | 15°C |
| Nord du Pont de Chavanay | 9 | 20 | 176° S | aucun | pluie | 3.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 169° S | aucun | pluie | 3.6 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 170° S | aucun | pluie | 2.4 | 15°C |
| Saint-Romain-des-Iles | 4 | 10 | 151° SSE | aucun | pluie | 10.8 | 15°C |
| Nord du Pont d'Arciat | 4 | 10 | 151° SSE | aucun | pluie | 10.8 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 15 | 121° ESE | aucun | pluie | 3.6 | 16°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 24° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 4 | 8 | 27° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 4 | 7 | 24° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 4 | 7 | 24° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 315° NO | aucun | soleil-couvert | 0.4 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 234° SO | aucun | soleil-couvert | 0.9 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 10 | 191° S | aucun | pluie | 6.5 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 84° E | aucun | pluie | 5.9 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 182° S | aucun | soleil-couvert | 0.7 | 16°C |
| La Roche-de-Glun - Base Nautique | 9 | 17 | 182° S | aucun | pluie | 0.6 | 16°C |
| Cruas - Nuclear Spot | 4 | 10 | 200° SSO | aucun | pluie | 1.8 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 137° SE | aucun | pluie | 3.8 | 15°C |
| Nord du Pont de Chavanay | 3 | 9 | 137° SE | aucun | pluie | 3.8 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 134° SE | aucun | pluie | 3.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 190° S | aucun | pluie | 4.3 | 15°C |
| Saint-Romain-des-Iles | 2 | 7 | 88° E | aucun | pluie | 2.1 | 13°C |
| Nord du Pont d'Arciat | 2 | 7 | 88° E | aucun | pluie | 2.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 11 | 182° S | aucun | pluie | 3.0 | 15°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 205° SSO | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 2 | 5 | 22° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 3 | 7 | 205° SSO | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 3 | 7 | 205° SSO | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 245° OSO | aucun | soleil | 0.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 263° O | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 37° NE | aucun | soleil | 0.6 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 53° NE | aucun | soleil | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 183° S | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 2 | 5 | 227° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 193° SSO | aucun | couvert | 0.6 | 12°C |
| Nord du Pont de Chavanay | 2 | 6 | 193° SSO | aucun | couvert | 0.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 16° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 177° S | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 3 | 6 | 261° O | aucun | couvert | 0.6 | 12°C |
| Nord du Pont d'Arciat | 3 | 6 | 261° O | aucun | couvert | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 54° NE | aucun | pluie | 3.6 | 13°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 222° SO | aucun | pluie | 5.1 | 11°C |
| Plage d'Excenevex | 4 | 7 | 257° OSO | aucun | pluie | 1.6 | 12°C |
| Plage du Vengeron | 4 | 7 | 222° SO | aucun | pluie | 5.1 | 11°C |
| Plage d'Hermance | 4 | 7 | 222° SO | aucun | pluie | 5.1 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 112° ESE | aucun | pluie | 3.3 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 24° NNE | aucun | pluie | 9.3 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 164° SSE | aucun | pluie | 5.9 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 19 | 151° SSE | aucun | pluie | 4.6 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 196° SSO | aucun | pluie | 13.9 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 201° SSO | aucun | pluie | 17.5 | 12°C |
| Cruas - Nuclear Spot | 4 | 13 | 1° N | aucun | pluie | 21.7 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 188° S | aucun | pluie | 18.1 | 12°C |
| Nord du Pont de Chavanay | 11 | 26 | 188° S | aucun | pluie | 18.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 32 | 181° S | aucun | pluie | 14.4 | 12°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 180° S | 08h-12h | couvert | 0.5 | 12°C |
| Saint-Romain-des-Iles | 8 | 16 | 178° S | aucun | pluie | 4.2 | 12°C |
| Nord du Pont d'Arciat | 8 | 16 | 178° S | aucun | pluie | 4.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 22 | 180° S | aucun | pluie | 12.9 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 213° SSO | aucun | pluie | 1.9 | 9°C |
| Plage d'Excenevex | 6 | 9 | 213° SSO | aucun | soleil-couvert | 0.7 | 10°C |
| Plage du Vengeron | 6 | 10 | 213° SSO | aucun | pluie | 1.9 | 9°C |
| Plage d'Hermance | 6 | 10 | 213° SSO | aucun | pluie | 1.9 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 235° SO | aucun | soleil-couvert | 0.3 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 191° S | aucun | pluie | 0.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 346° NNO | aucun | soleil | 0.1 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 344° NNO | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 5° N | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 7 | 18 | 355° N | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 54° NE | aucun | soleil | 0.3 | 10°C |
| Nord du Pont de Chavanay | 2 | 7 | 54° NE | aucun | soleil | 0.3 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 15 | 192° SSO | aucun | soleil-couvert | 0.8 | 10°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 24° NNE | aucun | soleil-couvert | 0.2 | 10°C |
| Saint-Romain-des-Iles | 4 | 9 | 158° SSE | aucun | pluie | 3.7 | 9°C |
| Nord du Pont d'Arciat | 4 | 9 | 158° SSE | aucun | pluie | 3.7 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 10 | 177° S | aucun | soleil-couvert | 0.1 | 10°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 15 | 218° SO | aucun | soleil-couvert | 0.6 | 9°C |
| Plage d'Excenevex | 8 | 18 | 232° SO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 6 | 15 | 218° SO | aucun | soleil-couvert | 0.6 | 9°C |
| Plage d'Hermance | 6 | 15 | 218° SO | aucun | soleil-couvert | 0.6 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 259° O | aucun | couvert | 0.7 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 336° NNO | aucun | pluie | 1.9 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 182° S | aucun | pluie | 1.9 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 148° SSE | aucun | pluie | 2.6 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 184° S | aucun | couvert | 0.7 | 8°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 193° SSO | aucun | pluie | 1.9 | 8°C |
| Cruas - Nuclear Spot | 3 | 10 | 5° N | aucun | pluie | 1.2 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 182° S | aucun | pluie | 2.6 | 8°C |
| Nord du Pont de Chavanay | 7 | 15 | 182° S | aucun | pluie | 2.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 175° S | aucun | pluie | 1.2 | 8°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 183° S | aucun | pluie | 2.0 | 7°C |
| Saint-Romain-des-Iles | 5 | 10 | 177° S | aucun | pluie | 1.9 | 7°C |
| Nord du Pont d'Arciat | 5 | 10 | 177° S | aucun | pluie | 1.9 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 156° SSE | aucun | pluie | 4.2 | 8°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 228° SO | 12h-15h | couvert | 0.6 | 13°C |
| Plage d'Excenevex | 10 | 13 | 247° OSO | aucun | couvert | 0.8 | 13°C |
| Plage du Vengeron | 10 | 14 | 228° SO | 12h-15h | couvert | 0.6 | 13°C |
| Plage d'Hermance | 10 | 14 | 228° SO | 12h-15h | couvert | 0.6 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 151° SSE | aucun | couvert | 0.9 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 259° O | aucun | pluie | 1.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 181° S | aucun | soleil-couvert | 0.6 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 189° S | aucun | pluie | 1.2 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 18 | 188° S | aucun | soleil-couvert | 0.1 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 191° S | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 5 | 13 | 206° SSO | aucun | pluie | 2.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 166° SSE | aucun | soleil-couvert | 0.6 | 13°C |
| Nord du Pont de Chavanay | 9 | 20 | 166° SSE | aucun | soleil-couvert | 0.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 176° S | aucun | pluie | 1.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 169° S | aucun | pluie | 1.2 | 12°C |
| Saint-Romain-des-Iles | 5 | 11 | 205° SSO | aucun | pluie | 1.8 | 11°C |
| Nord du Pont d'Arciat | 5 | 11 | 205° SSO | aucun | pluie | 1.8 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 196° SSO | aucun | soleil-couvert | 0.6 | 13°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 12 | 213° SSO | aucun | soleil-couvert | 0.6 |  |
| Plage d'Excenevex | 6 | 10 | 238° OSO | aucun | soleil-couvert | 0.0 |  |
| Plage du Vengeron | 10 | 12 | 213° SSO | aucun | soleil-couvert | 0.6 |  |
| Plage d'Hermance | 10 | 12 | 213° SSO | aucun | soleil-couvert | 0.6 |  |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 171° S | aucun | pluie | 1.8 |  |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 272° O | aucun | pluie | 4.8 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 168° SSE | aucun | pluie | 3.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 160° SSE | aucun | pluie | 3.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 169° S | aucun | pluie | 2.4 |  |
| La Roche-de-Glun - Base Nautique | 10 | 19 | 183° S | aucun | pluie | 2.4 |  |
| Cruas - Nuclear Spot | 3 | 9 | 185° S | aucun | pluie | 5.4 |  |
| Centrale de Saint-Alban-du-Rhône | 8 | 21 | 163° SSE | aucun | couvert | 0.6 |  |
| Nord du Pont de Chavanay | 8 | 21 | 163° SSE | aucun | couvert | 0.6 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 166° SSE | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 169° S | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 8 | 14 | 169° S | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont d'Arciat | 8 | 14 | 169° S | aucun | soleil-couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 186° S | aucun | soleil-couvert | 0.0 |  |
