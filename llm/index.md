# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 22/11/2026 23:36 (Europe/Paris)
- Fichiers générés le : 2026-11-22T23:37:54+01:00
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

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 30 | 200° SSO | 13h-20h | pluie | 8.3 | 10°C |
| Plage d'Excenevex | 18 | 27 | 208° SSO | 14h-20h | pluie | 6.3 | 10°C |
| Plage du Vengeron | 17 | 23 | 205° SSO | 13h-20h | pluie | 8.9 | 11°C |
| Plage d'Hermance | 21 | 31 | 196° SSO | 13h-20h | pluie | 7.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 16 | 247° OSO | aucun | orage | 38.3 | 12°C |
| Lac du Bourget - Cap des Séselets | 9 | 15 | 154° SSE | aucun | orage | 39.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 24 | 204° SSO | aucun | pluie | 14.4 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 62° ENE | aucun | pluie | 9.5 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 196° SSO | aucun | couvert | 0.5 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 151° SSE | aucun | couvert | 0.1 | 14°C |
| Cruas - Nuclear Spot | 5 | 8 | 223° SO | aucun | soleil-couvert | 0.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 312° NO | aucun | couvert | 0.7 | 14°C |
| Nord du Pont de Chavanay | 6 | 15 | 313° NO | aucun | pluie | 1.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 18 | 288° ONO | aucun | pluie | 1.1 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 228° SO | aucun | pluie | 1.0 | 14°C |
| Saint-Romain-des-Iles | 14 | 25 | 285° ONO | 14h-17h | pluie | 3.9 | 12°C |
| Nord du Pont d'Arciat | 16 | 27 | 293° ONO | 11h-20h | orage | 11.9 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 22 | 262° O | aucun | pluie | 3.3 | 13°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 210° SSO | 08h-17h | pluie | 1.8 | 8°C |
| Plage d'Excenevex | 14 | 21 | 198° SSO | 08h-16h | pluie | 1.2 | 8°C |
| Plage du Vengeron | 16 | 21 | 204° SSO | 08h-17h | pluie | 2.7 | 8°C |
| Plage d'Hermance | 18 | 24 | 209° SSO | 08h-16h | pluie | 1.3 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 136° SE | aucun | pluie | 2.7 | 8°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 157° SSE | aucun | pluie | 3.4 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 358° N | aucun | pluie | 1.5 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 15 | 14° NNE | aucun | pluie | 1.3 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 4° N | aucun | soleil-couvert | 0.1 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 9 | 18 | 14° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 346° NNO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 7 | 13 | 328° NNO | aucun | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 312° NO | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 334° NNO | aucun | couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 10 | 17 | 288° ONO | aucun | couvert | 0.3 | 9°C |
| Nord du Pont d'Arciat | 11 | 18 | 305° NO | 12h-15h | couvert | 0.1 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 19 | 308° NO | aucun | couvert | 0.4 | 10°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 58° ENE | aucun | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 15 | 19 | 25° NNE | 08h-13h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 10 | 14 | 60° ENE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 10 | 14 | 51° NE | aucun | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 8° N | aucun | couvert | 0.1 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 352° N | aucun | couvert | 0.2 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 28 | 168° SSE | 13h-20h | pluie | 0.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 15 | 168° SSE | aucun | couvert | 0.2 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 221° SO | aucun | pluie | 0.6 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 201° SSO | aucun | couvert | 0.4 | 8°C |
| Cruas - Nuclear Spot | 6 | 14 | 27° NNE | aucun | pluie | 1.3 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 21 | 185° S | aucun | couvert | 0.1 | 7°C |
| Nord du Pont de Chavanay | 11 | 21 | 185° S | aucun | couvert | 0.1 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 188° S | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 10 | 19 | 188° S | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 4 | 7 | 47° NE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 5 | 9 | 14° NNE | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 124° SE | aucun | couvert | 0.0 | 7°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 97° E | aucun | orage | 12.5 | 7°C |
| Plage d'Excenevex | 6 | 10 | 76° ENE | aucun | orage | 12.6 | 7°C |
| Plage du Vengeron | 5 | 7 | 38° NE | aucun | orage | 11.9 | 8°C |
| Plage d'Hermance | 5 | 8 | 32° NNE | aucun | orage | 12.8 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 339° NNO | aucun | orage | 17.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 8 | 184° S | aucun | pluie | 7.4 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 175° S | aucun | orage | 8.7 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 348° NNO | aucun | pluie | 5.3 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 222° SO | aucun | pluie | 6.5 | 9°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 197° SSO | aucun | pluie | 8.1 | 9°C |
| Cruas - Nuclear Spot | 4 | 6 | 11° N | aucun | pluie | 3.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 160° SSE | aucun | pluie | 10.3 | 8°C |
| Nord du Pont de Chavanay | 5 | 10 | 160° SSE | aucun | pluie | 10.3 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 196° SSO | aucun | pluie | 11.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 196° SSO | aucun | pluie | 11.0 | 8°C |
| Saint-Romain-des-Iles | 7 | 10 | 177° S | aucun | pluie | 10.9 | 8°C |
| Nord du Pont d'Arciat | 7 | 10 | 177° S | aucun | pluie | 10.9 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 162° SSE | aucun | pluie | 11.4 | 8°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 215° SO | aucun | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 8 | 11 | 229° SO | aucun | couvert | 0.5 | 9°C |
| Plage du Vengeron | 5 | 7 | 171° S | aucun | couvert | 0.3 | 9°C |
| Plage d'Hermance | 7 | 10 | 212° SSO | aucun | couvert | 0.2 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 317° NO | aucun | pluie | 3.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 318° NO | aucun | couvert | 0.6 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 25 | 8° N | 11h-19h | couvert | 0.4 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 356° N | 11h-17h | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 8° N | 11h-20h | couvert | 0.3 | 8°C |
| La Roche-de-Glun - Base Nautique | 12 | 19 | 12° NNE | 14h-20h | couvert | 0.2 | 8°C |
| Cruas - Nuclear Spot | 13 | 27 | 12° NNE | 11h-20h | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 13 | 35° NE | aucun | couvert | 0.7 | 7°C |
| Nord du Pont de Chavanay | 7 | 13 | 35° NE | aucun | couvert | 0.7 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 29° NNE | aucun | pluie | 1.3 | 6°C |
| Saint-Cyr-sur-le-Rhône | 6 | 11 | 29° NNE | aucun | pluie | 1.3 | 6°C |
| Saint-Romain-des-Iles | 7 | 11 | 47° NE | aucun | pluie | 1.0 | 5°C |
| Nord du Pont d'Arciat | 7 | 11 | 47° NE | aucun | pluie | 1.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 6° N | aucun | pluie | 2.5 | 6°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 31° NNE | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 20 | 27 | 21° NNE | 08h-20h | couvert | 0.0 | 4°C |
| Plage du Vengeron | 18 | 24 | 32° NNE | 08h-20h | couvert | 0.0 | 5°C |
| Plage d'Hermance | 16 | 24 | 33° NNE | 08h-20h | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 11 | 329° NNO | aucun | couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 328° NNO | aucun | couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 24° NNE | aucun | couvert | 0.4 | -4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 335° NNO | aucun | couvert | 0.0 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 31 | 10° N | 08h-20h | soleil-couvert | 0.0 | 3°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 4° N | 11h-20h | soleil-couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 15 | 32 | 13° NNE | 08h-20h | soleil-couvert | 0.0 | 3°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 360° N | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont de Chavanay | 10 | 22 | 360° N | aucun | soleil-couvert | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 350° N | aucun | couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 354° N | aucun | couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 9 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 9 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 348° NNO | aucun | soleil-couvert | 0.0 | 2°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 15° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 4 | 7 | 15° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 4 | 7 | 15° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 4 | 7 | 15° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 103° ESE | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 82° E | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 139° SE | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 6 | 204° SSO | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 9° N | 08h-15h | soleil-couvert | 0.0 | 3°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 3° N | aucun | soleil-couvert | 0.0 | 3°C |
| Cruas - Nuclear Spot | 13 | 27 | 15° NNE | 08h-17h | soleil | 0.0 | 4°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 12° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Nord du Pont de Chavanay | 7 | 16 | 12° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 337° NNO | aucun | soleil-couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 7° N | aucun | soleil-couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 5 | 10 | 328° NNO | aucun | soleil-couvert | 0.0 | 1°C |
| Nord du Pont d'Arciat | 5 | 10 | 328° NNO | aucun | soleil-couvert | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 327° NNO | aucun | soleil-couvert | 0.0 | 2°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 256° OSO | aucun | pluie | 4.2 | 9°C |
| Plage d'Excenevex | 10 | 15 | 256° OSO | aucun | pluie | 4.2 | 9°C |
| Plage du Vengeron | 10 | 15 | 256° OSO | aucun | pluie | 4.2 | 9°C |
| Plage d'Hermance | 10 | 15 | 256° OSO | aucun | pluie | 4.2 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 103° ESE | aucun | pluie | 7.5 | 7°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 121° ESE | aucun | pluie | 9.8 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 16 | 145° SE | aucun | pluie | 2.3 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 158° SSE | aucun | couvert | 0.6 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 12° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 332° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 5 | 13 | 7° N | aucun | soleil-couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 15° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 3 | 9 | 15° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 13° NNE | aucun | couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 2° N | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 2 | 7 | 124° SE | aucun | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 2 | 7 | 124° SE | aucun | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 335° NNO | aucun | couvert | 0.0 | 2°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 31° NNE | aucun | soleil | 0.0 | 4°C |
| Plage d'Excenevex | 6 | 10 | 22° NNE | aucun | soleil | 0.0 | 4°C |
| Plage du Vengeron | 6 | 10 | 31° NNE | aucun | soleil | 0.0 | 4°C |
| Plage d'Hermance | 6 | 10 | 31° NNE | aucun | soleil | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 268° O | aucun | soleil | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 217° SO | aucun | soleil-couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 4 | 180° S | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 4 | 180° S | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 8° N | aucun | soleil | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 341° NNO | aucun | soleil | 0.0 | 4°C |
| Cruas - Nuclear Spot | 6 | 14 | 37° NE | aucun | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont de Chavanay | 3 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 41° NE | aucun | soleil-couvert | 0.0 | 1°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 26° NNE | aucun | soleil-couvert | 0.0 | 2°C |
| Saint-Romain-des-Iles | 2 | 7 | 100° E | aucun | soleil-couvert | 0.0 | 0°C |
| Nord du Pont d'Arciat | 2 | 7 | 100° E | aucun | soleil-couvert | 0.0 | 0°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 2°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 18° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Plage d'Excenevex | 7 | 13 | 12° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Plage du Vengeron | 8 | 13 | 18° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Plage d'Hermance | 8 | 13 | 18° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 47° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 9° N | aucun | couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 143° SE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 127° SE | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 180° S | aucun | couvert | 0.7 | 6°C |
| La Roche-de-Glun - Base Nautique | 3 | 8 | 180° S | aucun | couvert | 0.1 | 6°C |
| Cruas - Nuclear Spot | 3 | 9 | 205° SSO | aucun | couvert | 0.1 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 170° S | aucun | pluie | 1.2 | 3°C |
| Nord du Pont de Chavanay | 3 | 10 | 170° S | aucun | pluie | 1.2 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 161° SSE | aucun | couvert | 0.7 | 2°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 162° SSE | aucun | pluie | 1.2 | 3°C |
| Saint-Romain-des-Iles | 2 | 6 | 87° E | aucun | couvert | 0.0 | 0°C |
| Nord du Pont d'Arciat | 2 | 6 | 87° E | aucun | couvert | 0.0 | 0°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 147° SSE | aucun | couvert | 0.7 | 4°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 23° NNE | aucun | soleil | 0.0 | 4°C |
| Plage d'Excenevex | 6 | 10 | 23° NNE | aucun | soleil | 0.0 | 4°C |
| Plage du Vengeron | 7 | 11 | 23° NNE | aucun | soleil | 0.0 | 4°C |
| Plage d'Hermance | 7 | 11 | 23° NNE | aucun | soleil | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 344° NNO | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 20° NNE | aucun | soleil | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 133° SE | aucun | soleil | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 129° SE | aucun | soleil | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 6 | 2° N | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 317° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 2 | 6 | 344° NNO | aucun | couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 342° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 2 | 6 | 342° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 27° NNE | aucun | soleil | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 2 | 5 | 333° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 6 | 143° SE | aucun | soleil | 0.0 | 4°C |
| Nord du Pont d'Arciat | 2 | 6 | 143° SE | aucun | soleil | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 7° N | aucun | soleil | 0.0 | 5°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 20 | 27° NNE | 16h-20h | soleil | 0.0 | 4°C |
| Plage d'Excenevex | 12 | 18 | 22° NNE | 16h-20h | soleil | 0.0 | 4°C |
| Plage du Vengeron | 14 | 20 | 27° NNE | 16h-20h | soleil | 0.0 | 4°C |
| Plage d'Hermance | 14 | 20 | 27° NNE | 16h-20h | soleil | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 338° NNO | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 39° NE | aucun | soleil | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 177° S | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 170° S | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 9° N | aucun | soleil | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 339° NNO | aucun | soleil | 0.0 | 5°C |
| Cruas - Nuclear Spot | 7 | 18 | 19° NNE | aucun | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 27° NNE | aucun | soleil | 0.0 | 3°C |
| Nord du Pont de Chavanay | 3 | 10 | 27° NNE | aucun | soleil | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 342° NNO | aucun | soleil-couvert | 0.0 | 2°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 21° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 3 | 6 | 309° NO | aucun | soleil | 0.0 | 2°C |
| Nord du Pont d'Arciat | 3 | 6 | 309° NO | aucun | soleil | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 344° NNO | aucun | soleil | 0.0 | 3°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 31 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | -1°C |
| Plage d'Excenevex | 22 | 32 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | -1°C |
| Plage du Vengeron | 22 | 31 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | -1°C |
| Plage d'Hermance | 22 | 31 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | -1°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 19 | 358° N | aucun | soleil | 0.0 | -2°C |
| Lac du Bourget - Cap des Séselets | 8 | 21 | 31° NNE | aucun | soleil-couvert | 0.0 | 0°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 358° N | aucun | soleil-couvert | 0.0 | -2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 359° N | aucun | soleil-couvert | 0.0 | -1°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 27 | 11° N | 12h-20h | soleil | 0.0 | 1°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 2° N | 14h-20h | soleil | 0.0 | 1°C |
| Cruas - Nuclear Spot | 13 | 30 | 15° NNE | 13h-20h | soleil | 0.0 | 1°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 357° N | aucun | soleil | 0.0 | 1°C |
| Nord du Pont de Chavanay | 9 | 21 | 357° N | aucun | soleil | 0.0 | 1°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 17 | 328° NNO | aucun | soleil | 0.0 | 0°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 348° NNO | aucun | soleil | 0.0 | 0°C |
| Saint-Romain-des-Iles | 13 | 23 | 360° N | 14h-20h | soleil | 0.0 | 0°C |
| Nord du Pont d'Arciat | 13 | 23 | 360° N | 14h-20h | soleil | 0.0 | 0°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 345° NNO | aucun | soleil | 0.0 | 0°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 30 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | -4°C |
| Plage d'Excenevex | 22 | 32 | 34° NE | 08h-20h | soleil-couvert | 0.0 | -3°C |
| Plage du Vengeron | 20 | 30 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | -4°C |
| Plage d'Hermance | 20 | 30 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | -4°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 19 | 10° N | aucun | soleil-couvert | 0.0 | -5°C |
| Lac du Bourget - Cap des Séselets | 8 | 22 | 22° NNE | aucun | soleil-couvert | 0.0 | -3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 1° N | aucun | couvert | 0.0 | -6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 351° N | aucun | couvert | 0.0 | -6°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 7° N | 08h-20h | soleil | 0.0 | -1°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 4° N | 08h-20h | soleil | 0.0 | -2°C |
| Cruas - Nuclear Spot | 15 | 34 | 17° NNE | 08h-20h | soleil | 0.0 | -2°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 350° N | aucun | soleil | 0.0 | -2°C |
| Nord du Pont de Chavanay | 10 | 24 | 350° N | aucun | soleil | 0.0 | -2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 343° NNO | 14h-20h | soleil | 0.0 | -2°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 348° NNO | aucun | soleil | 0.0 | -2°C |
| Saint-Romain-des-Iles | 13 | 24 | 7° N | 08h-20h | soleil | 0.0 | -2°C |
| Nord du Pont d'Arciat | 13 | 24 | 7° N | 08h-20h | soleil | 0.0 | -2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 1° N | 17h-20h | soleil | 0.0 | -2°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 27 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | -4°C |
| Plage d'Excenevex | 16 | 27 | 27° NNE | 08h-20h | soleil-couvert | 0.0 | -4°C |
| Plage du Vengeron | 16 | 27 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | -4°C |
| Plage d'Hermance | 16 | 27 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | -4°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 339° NNO | aucun | soleil-couvert | 0.0 | -6°C |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 31° NNE | aucun | soleil-couvert | 0.0 | -4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 17 | 2° N | aucun | couvert | 0.0 | -8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 351° N | aucun | couvert | 0.0 | -8°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 37 | 9° N | 08h-20h | soleil | 0.0 | -3°C |
| La Roche-de-Glun - Base Nautique | 15 | 31 | 4° N | 08h-20h | soleil | 0.0 | -3°C |
| Cruas - Nuclear Spot | 17 | 38 | 16° NNE | 08h-20h | soleil | 0.0 | -3°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 27 | 352° N | 09h-16h | soleil-couvert | 0.0 | -3°C |
| Nord du Pont de Chavanay | 11 | 27 | 352° N | 09h-16h | soleil-couvert | 0.0 | -3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 24 | 348° NNO | aucun | soleil | 0.0 | -4°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 347° NNO | 09h-16h | soleil-couvert | 0.0 | -4°C |
| Saint-Romain-des-Iles | 11 | 22 | 349° N | 08h-15h | soleil | 0.0 | -4°C |
| Nord du Pont d'Arciat | 11 | 22 | 349° N | 08h-15h | soleil | 0.0 | -4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 343° NNO | aucun | soleil | 0.0 | -3°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 16 | 44° NE | aucun | soleil | 0.0 |  |
| Plage d'Excenevex | 9 | 17 | 27° NNE | aucun | soleil-couvert | 0.0 |  |
| Plage du Vengeron | 8 | 16 | 44° NE | aucun | soleil | 0.0 |  |
| Plage d'Hermance | 8 | 16 | 44° NE | aucun | soleil | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 315° NO | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 2 | 11 | 22° NNE | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 6° N | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 350° N | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 33 | 15° NNE | 08h-13h | soleil | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 14° NNE | 08h-13h | soleil | 0.0 |  |
| Cruas - Nuclear Spot | 14 | 34 | 23° NNE | 08h-13h | soleil | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 4° N | aucun | soleil | 0.0 |  |
| Nord du Pont de Chavanay | 9 | 21 | 4° N | aucun | soleil | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 17 | 357° N | aucun | soleil | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 357° N | aucun | soleil | 0.0 |  |
| Saint-Romain-des-Iles | 8 | 16 | 350° N | aucun | soleil | 0.0 |  |
| Nord du Pont d'Arciat | 8 | 16 | 350° N | aucun | soleil | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 345° NNO | aucun | soleil | 0.0 |  |
