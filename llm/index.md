# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 12/11/2026 23:46 (Europe/Paris)
- Fichiers générés le : 2026-11-12T23:51:18+01:00
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

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 37° NE | aucun | pluie | 14.3 | 12°C |
| Plage d'Excenevex | 12 | 17 | 32° NNE | aucun | pluie | 14.0 | 12°C |
| Plage du Vengeron | 6 | 7 | 46° NE | aucun | pluie | 16.6 | 12°C |
| Plage d'Hermance | 8 | 10 | 52° NE | aucun | pluie | 15.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 332° NNO | aucun | orage | 17.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 8° N | aucun | orage | 14.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 22 | 220° SO | aucun | orage | 15.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 12 | 344° NNO | aucun | pluie | 11.2 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 3° N | aucun | pluie | 10.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 339° NNO | aucun | orage | 10.9 | 14°C |
| Cruas - Nuclear Spot | 6 | 12 | 12° NNE | aucun | pluie | 12.4 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 344° NNO | aucun | orage | 14.6 | 14°C |
| Nord du Pont de Chavanay | 10 | 19 | 353° N | aucun | pluie | 16.5 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 332° NNO | aucun | pluie | 20.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 354° N | aucun | orage | 20.3 | 14°C |
| Saint-Romain-des-Iles | 15 | 24 | 359° N | 16h-20h | pluie | 5.6 | 13°C |
| Nord du Pont d'Arciat | 15 | 24 | 354° N | 16h-20h | pluie | 5.2 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 19 | 343° NNO | aucun | orage | 14.8 | 14°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 27 | 38 | 36° NE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 23 | 34 | 29° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 24 | 34 | 31° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Hermance | 23 | 32 | 33° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 16 | 23 | 329° NNO | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 18 | 25 | 5° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 32 | 355° N | 08h-19h | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 18 | 30 | 354° N | 08h-17h | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 33 | 13° NNE | 08h-20h | pluie | 0.7 | 10°C |
| La Roche-de-Glun - Base Nautique | 13 | 29 | 352° N | 08h-19h | soleil-couvert | 0.4 | 10°C |
| Cruas - Nuclear Spot | 18 | 37 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 17 | 28 | 357° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 14 | 25 | 358° N | 08h-20h | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 336° NNO | 08h-15h | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 358° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 16 | 26 | 6° N | 08h-20h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 17 | 25 | 5° N | 08h-20h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 21 | 352° N | 11h-18h | soleil | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 58° ENE | aucun | soleil-couvert | 0.1 | 7°C |
| Plage d'Excenevex | 14 | 18 | 35° NE | 08h-11h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 10 | 13 | 51° NE | aucun | pluie | 0.5 | 8°C |
| Plage d'Hermance | 10 | 14 | 57° ENE | aucun | soleil-couvert | 0.2 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 344° NNO | aucun | soleil-couvert | 0.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 352° N | aucun | pluie | 1.3 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 178° S | 10h-17h | soleil-couvert | 0.3 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 203° SSO | aucun | pluie | 1.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 13 | 188° S | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 181° S | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 8 | 16 | 17° NNE | aucun | soleil-couvert | 0.1 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 146° SE | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 8 | 13 | 146° SE | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 18 | 181° S | aucun | soleil | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 10 | 18 | 181° S | aucun | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 4 | 8 | 189° S | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 10 | 188° S | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 133° SE | aucun | soleil | 0.0 | 12°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 221° SO | aucun | pluie | 0.6 | 14°C |
| Plage d'Excenevex | 9 | 12 | 229° SO | aucun | pluie | 0.5 | 12°C |
| Plage du Vengeron | 10 | 13 | 219° SO | aucun | couvert | 0.4 | 15°C |
| Plage d'Hermance | 11 | 17 | 227° SO | aucun | pluie | 0.5 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 9° N | aucun | couvert | 0.1 | 15°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 175° S | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 35 | 174° S | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 179° S | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 24 | 211° SSO | 17h-20h | pluie | 2.4 | 12°C |
| La Roche-de-Glun - Base Nautique | 13 | 23 | 207° SSO | 16h-20h | pluie | 1.6 | 12°C |
| Cruas - Nuclear Spot | 6 | 14 | 213° SSO | aucun | pluie | 4.2 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 26 | 181° S | 09h-20h | pluie | 1.2 | 13°C |
| Nord du Pont de Chavanay | 15 | 26 | 181° S | 09h-20h | pluie | 1.2 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 30 | 192° SSO | 08h-20h | couvert | 0.7 | 12°C |
| Saint-Cyr-sur-le-Rhône | 15 | 30 | 192° SSO | 08h-20h | couvert | 0.7 | 12°C |
| Saint-Romain-des-Iles | 18 | 27 | 179° S | 10h-20h | pluie | 2.3 | 14°C |
| Nord du Pont d'Arciat | 18 | 27 | 179° S | 10h-20h | pluie | 2.3 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 31 | 189° S | 08h-19h | pluie | 1.6 | 13°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 200° SSO | 08h-17h | orage | 9.0 | 12°C |
| Plage d'Excenevex | 18 | 26 | 205° SSO | 08h-15h | orage | 12.4 | 11°C |
| Plage du Vengeron | 19 | 26 | 201° SSO | 09h-16h | orage | 8.2 | 13°C |
| Plage d'Hermance | 16 | 25 | 194° SSO | 08h-14h | orage | 10.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 19 | 317° NO | aucun | orage | 33.4 | 13°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 141° SE | aucun | orage | 39.7 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 30 | 168° SSE | 08h-13h | pluie | 1.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 18 | 141° SE | aucun | pluie | 1.9 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 24 | 192° SSO | 13h-20h | couvert | 0.6 | 13°C |
| La Roche-de-Glun - Base Nautique | 16 | 27 | 190° S | 12h-20h | couvert | 0.3 | 13°C |
| Cruas - Nuclear Spot | 9 | 15 | 194° SSO | aucun | couvert | 0.6 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 18 | 32 | 178° S | 13h-20h | pluie | 0.8 | 12°C |
| Nord du Pont de Chavanay | 18 | 32 | 178° S | 13h-20h | pluie | 0.8 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 19 | 38 | 187° S | 11h-20h | pluie | 1.3 | 12°C |
| Saint-Cyr-sur-le-Rhône | 19 | 38 | 187° S | 11h-20h | pluie | 1.3 | 12°C |
| Saint-Romain-des-Iles | 23 | 37 | 182° S | 10h-20h | pluie | 1.8 | 12°C |
| Nord du Pont d'Arciat | 23 | 37 | 182° S | 10h-20h | pluie | 1.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 22 | 37 | 178° S | 13h-20h | pluie | 2.0 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 23 | 32 | 230° SO | 11h-20h | pluie | 7.9 | 11°C |
| Plage d'Excenevex | 19 | 25 | 238° OSO | 12h-20h | pluie | 7.6 | 11°C |
| Plage du Vengeron | 24 | 34 | 214° SO | 14h-19h | orage | 8.2 | 12°C |
| Plage d'Hermance | 20 | 31 | 210° SSO | 13h-20h | pluie | 4.8 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 19 | 133° SE | aucun | orage | 19.5 | 13°C |
| Lac du Bourget - Cap des Séselets | 14 | 18 | 187° S | 15h-19h | orage | 7.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 31 | 177° S | 08h-17h | orage | 12.8 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 19 | 167° SSE | aucun | orage | 8.9 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 195° SSO | aucun | pluie | 5.4 | 10°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 193° SSO | 08h-17h | pluie | 4.6 | 10°C |
| Cruas - Nuclear Spot | 4 | 13 | 228° SO | aucun | pluie | 9.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 33 | 180° S | 09h-15h | pluie | 3.7 | 11°C |
| Nord du Pont de Chavanay | 14 | 33 | 180° S | 09h-15h | pluie | 3.7 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 19 | 39 | 172° S | 08h-16h | pluie | 2.1 | 12°C |
| Saint-Cyr-sur-le-Rhône | 15 | 35 | 173° S | 09h-15h | pluie | 2.6 | 11°C |
| Saint-Romain-des-Iles | 14 | 25 | 181° S | 10h-15h | pluie | 9.4 | 12°C |
| Nord du Pont d'Arciat | 14 | 25 | 181° S | 10h-15h | pluie | 9.4 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 20 | 39 | 181° S | 09h-16h | pluie | 4.7 | 10°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 22 | 228° SO | 08h-20h | pluie | 2.4 | 13°C |
| Plage d'Excenevex | 14 | 22 | 228° SO | 08h-20h | pluie | 2.4 | 13°C |
| Plage du Vengeron | 14 | 22 | 228° SO | 08h-20h | pluie | 2.4 | 13°C |
| Plage d'Hermance | 14 | 22 | 228° SO | 08h-20h | pluie | 2.4 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 17 | 156° SSE | aucun | pluie | 7.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 156° SSE | aucun | pluie | 9.5 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 18 | 157° SSE | aucun | pluie | 7.9 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 14 | 156° SSE | aucun | pluie | 11.8 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 27 | 176° S | 09h-15h | soleil-couvert | 0.3 | 12°C |
| La Roche-de-Glun - Base Nautique | 14 | 26 | 187° S | 09h-15h | soleil-couvert | 0.3 | 12°C |
| Cruas - Nuclear Spot | 9 | 19 | 185° S | aucun | soleil-couvert | 0.3 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 30 | 157° SSE | 08h-15h | soleil-couvert | 0.2 | 13°C |
| Nord du Pont de Chavanay | 14 | 30 | 157° SSE | 08h-15h | soleil-couvert | 0.2 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 26 | 156° SSE | 08h-15h | pluie | 1.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 13 | 27 | 154° SSE | 10h-15h | soleil-couvert | 0.7 | 13°C |
| Saint-Romain-des-Iles | 15 | 27 | 191° S | 08h-20h | pluie | 6.5 | 13°C |
| Nord du Pont d'Arciat | 15 | 27 | 191° S | 08h-20h | pluie | 6.5 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 202° SSO | 08h-13h | pluie | 4.2 | 14°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 27 | 228° SO | 08h-20h | pluie | 6.7 | 12°C |
| Plage d'Excenevex | 15 | 27 | 228° SO | 08h-20h | pluie | 6.7 | 12°C |
| Plage du Vengeron | 15 | 27 | 228° SO | 08h-20h | pluie | 6.7 | 12°C |
| Plage d'Hermance | 15 | 27 | 228° SO | 08h-20h | pluie | 6.7 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 24 | 206° SSO | aucun | pluie | 10.6 | 8°C |
| Lac du Bourget - Cap des Séselets | 9 | 25 | 211° SSO | aucun | pluie | 5.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 27 | 161° SSE | aucun | pluie | 4.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 14 | 171° S | aucun | pluie | 1.2 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 173° S | aucun | pluie | 2.4 | 10°C |
| La Roche-de-Glun - Base Nautique | 9 | 16 | 188° S | aucun | pluie | 4.8 | 10°C |
| Cruas - Nuclear Spot | 3 | 9 | 213° SSO | aucun | pluie | 3.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 16 | 165° SSE | aucun | pluie | 7.9 | 10°C |
| Nord du Pont de Chavanay | 8 | 16 | 165° SSE | aucun | pluie | 7.9 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 166° SSE | aucun | pluie | 3.7 | 10°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 160° SSE | aucun | pluie | 6.1 | 10°C |
| Saint-Romain-des-Iles | 6 | 11 | 176° S | aucun | pluie | 4.7 | 11°C |
| Nord du Pont d'Arciat | 6 | 11 | 176° S | aucun | pluie | 4.7 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 179° S | aucun | pluie | 3.8 | 10°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 26 | 196° SSO | 08h-14h | pluie | 1.3 | 10°C |
| Plage d'Excenevex | 19 | 32 | 204° SSO | 08h-16h | soleil-couvert | 0.9 | 11°C |
| Plage du Vengeron | 16 | 26 | 196° SSO | 08h-14h | pluie | 1.3 | 10°C |
| Plage d'Hermance | 16 | 26 | 196° SSO | 08h-14h | pluie | 1.3 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 14 | 166° SSE | aucun | pluie | 1.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 19 | 179° S | aucun | pluie | 3.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 267° O | aucun | soleil-couvert | 0.6 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 12 | 302° ONO | aucun | pluie | 1.2 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 195° SSO | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 192° SSO | aucun | pluie | 1.2 | 12°C |
| Cruas - Nuclear Spot | 2 | 6 | 307° NO | aucun | soleil-couvert | 0.6 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 158° SSE | aucun | soleil-couvert | 0.6 | 12°C |
| Nord du Pont de Chavanay | 7 | 16 | 158° SSE | aucun | soleil-couvert | 0.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 157° SSE | aucun | soleil-couvert | 0.6 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 163° SSE | aucun | soleil-couvert | 0.6 | 12°C |
| Saint-Romain-des-Iles | 4 | 14 | 173° S | aucun | pluie | 3.7 | 11°C |
| Nord du Pont d'Arciat | 4 | 14 | 173° S | aucun | pluie | 3.7 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 130° SE | aucun | pluie | 2.4 | 11°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 210° SSO | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 9 | 17 | 224° SO | aucun | soleil | 0.0 | 11°C |
| Plage du Vengeron | 8 | 13 | 210° SSO | aucun | soleil | 0.0 | 11°C |
| Plage d'Hermance | 8 | 13 | 210° SSO | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 124° SE | aucun | soleil | 0.6 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 270° O | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 2° N | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 359° N | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 10° N | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 356° N | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 9 | 20 | 29° NNE | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 47° NE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 4 | 11 | 47° NE | aucun | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 63° ENE | aucun | soleil | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 42° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 2 | 4 | 233° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 4 | 233° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 5° N | aucun | soleil | 0.0 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 248° OSO | aucun | pluie | 0.9 | 10°C |
| Plage d'Excenevex | 3 | 5 | 156° SSE | aucun | pluie | 0.9 | 10°C |
| Plage du Vengeron | 3 | 6 | 248° OSO | aucun | pluie | 0.9 | 10°C |
| Plage d'Hermance | 3 | 6 | 248° OSO | aucun | pluie | 0.9 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 235° SO | aucun | pluie | 1.1 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 2° N | aucun | pluie | 1.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 24 | 177° S | aucun | soleil-couvert | 0.1 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 21 | 176° S | aucun | soleil-couvert | 0.2 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 199° SSO | aucun | pluie | 1.2 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 202° SSO | 14h-19h | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 7 | 21 | 190° S | aucun | orage | 5.5 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 29 | 184° S | 13h-20h | pluie | 0.7 | 14°C |
| Nord du Pont de Chavanay | 13 | 29 | 184° S | 13h-20h | pluie | 0.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 172° S | 12h-20h | pluie | 1.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 15 | 30 | 173° S | 12h-20h | pluie | 0.9 | 14°C |
| Saint-Romain-des-Iles | 9 | 19 | 178° S | aucun | pluie | 1.3 | 11°C |
| Nord du Pont d'Arciat | 9 | 19 | 178° S | aucun | pluie | 1.3 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 24 | 182° S | aucun | pluie | 1.2 | 14°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 13 | 197° SSO | aucun | pluie | 8.0 | 8°C |
| Plage d'Excenevex | 5 | 11 | 230° SO | aucun | pluie | 2.6 | 8°C |
| Plage du Vengeron | 6 | 13 | 197° SSO | aucun | pluie | 8.0 | 8°C |
| Plage d'Hermance | 6 | 13 | 197° SSO | aucun | pluie | 8.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 266° O | aucun | pluie | 1.8 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 175° S | aucun | pluie | 6.1 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 28 | 351° N | aucun | pluie | 4.5 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 28 | 346° NNO | aucun | pluie | 3.2 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 8° N | 09h-17h | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 11 | 26 | 8° N | 11h-16h | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 12 | 25 | 5° N | 08h-16h | soleil-couvert | 0.9 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 22 | 352° N | aucun | soleil-couvert | 0.1 | 10°C |
| Nord du Pont de Chavanay | 8 | 22 | 352° N | aucun | soleil-couvert | 0.1 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 21 | 342° NNO | aucun | soleil-couvert | 0.1 | 10°C |
| Saint-Cyr-sur-le-Rhône | 8 | 22 | 345° NNO | aucun | soleil-couvert | 0.6 | 10°C |
| Saint-Romain-des-Iles | 10 | 19 | 306° NO | aucun | soleil-couvert | 0.6 | 9°C |
| Nord du Pont d'Arciat | 10 | 19 | 306° NO | aucun | soleil-couvert | 0.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 20 | 328° NNO | aucun | pluie | 1.3 | 9°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 206° SSO | aucun | pluie | 10.0 | 6°C |
| Plage d'Excenevex | 5 | 9 | 197° SSO | aucun | pluie | 11.5 | 6°C |
| Plage du Vengeron | 6 | 10 | 206° SSO | aucun | pluie | 10.0 | 6°C |
| Plage d'Hermance | 6 | 10 | 206° SSO | aucun | pluie | 10.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 190° S | aucun | couvert | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 218° SO | aucun | pluie | 3.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 23 | 348° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 25 | 347° NNO | aucun | pluie | 1.2 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 25 | 13° NNE | aucun | pluie | 1.2 | 8°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 43° NE | aucun | pluie | 1.2 | 8°C |
| Cruas - Nuclear Spot | 9 | 22 | 11° N | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 13 | 35° NE | aucun | pluie | 3.6 | 7°C |
| Nord du Pont de Chavanay | 3 | 13 | 35° NE | aucun | pluie | 3.6 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 359° N | aucun | pluie | 1.2 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 7° N | aucun | pluie | 4.2 | 7°C |
| Saint-Romain-des-Iles | 7 | 13 | 313° NO | aucun | couvert | 0.6 | 6°C |
| Nord du Pont d'Arciat | 7 | 13 | 313° NO | aucun | couvert | 0.6 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 324° NO | aucun | pluie | 1.8 | 7°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 34° NE | aucun | couvert | 0.1 | 4°C |
| Plage d'Excenevex | 7 | 11 | 23° NNE | aucun | couvert | 0.1 | 4°C |
| Plage du Vengeron | 7 | 12 | 34° NE | aucun | couvert | 0.1 | 4°C |
| Plage d'Hermance | 7 | 12 | 34° NE | aucun | couvert | 0.1 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 70° ENE | aucun | pluie | 0.5 | 3°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 33° NNE | aucun | pluie | 0.5 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 173° S | aucun | pluie | 0.5 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 198° SSO | aucun | pluie | 1.2 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 14° NNE | aucun | pluie | 2.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 347° NNO | aucun | pluie | 1.3 | 6°C |
| Cruas - Nuclear Spot | 4 | 11 | 20° NNE | aucun | pluie | 2.1 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 355° N | aucun | pluie | 1.8 | 6°C |
| Nord du Pont de Chavanay | 2 | 7 | 355° N | aucun | pluie | 1.8 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 27° NNE | aucun | pluie | 2.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 360° N | aucun | pluie | 2.0 | 6°C |
| Saint-Romain-des-Iles | 3 | 7 | 153° SSE | aucun | couvert | 0.3 | 4°C |
| Nord du Pont d'Arciat | 3 | 7 | 153° SSE | aucun | couvert | 0.3 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 35° NE | aucun | pluie | 1.2 | 5°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 21° NNE | aucun | pluie | 7.2 | 4°C |
| Plage d'Excenevex | 12 | 18 | 18° NNE | 15h-20h | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 10 | 14 | 21° NNE | aucun | pluie | 7.2 | 4°C |
| Plage d'Hermance | 10 | 14 | 21° NNE | aucun | pluie | 7.2 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 353° N | aucun | couvert | 0.6 | 0°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 350° N | aucun | soleil-couvert | 0.0 | 3°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 26 | 346° NNO | aucun | couvert | 0.6 | -2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 29 | 343° NNO | aucun | couvert | 0.6 | -2°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 35 | 5° N | 08h-20h | soleil-couvert | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 15 | 30 | 360° N | 08h-20h | couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 17 | 37 | 3° N | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 346° NNO | 11h-17h | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 12 | 28 | 346° NNO | 11h-17h | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 340° NNO | 11h-16h | couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 341° NNO | 11h-17h | couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 12 | 21 | 338° NNO | 10h-15h | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 12 | 21 | 338° NNO | 10h-15h | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 23 | 344° NNO | aucun | soleil-couvert | 0.0 | 3°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 20 | 37° NE | 08h-13h | soleil | 0.0 |  |
| Plage d'Excenevex | 10 | 17 | 31° NNE | 08h-13h | soleil | 0.0 |  |
| Plage du Vengeron | 12 | 20 | 37° NE | 08h-13h | soleil | 0.0 |  |
| Plage d'Hermance | 12 | 20 | 37° NE | 08h-13h | soleil | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 77° ENE | aucun | soleil | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 37° NE | aucun | soleil | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 18 | 355° N | aucun | soleil-couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 18 | 335° NNO | aucun | soleil-couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 31 | 5° N | 08h-13h | soleil-couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 359° N | aucun | soleil-couvert | 0.0 |  |
| Cruas - Nuclear Spot | 12 | 32 | 11° N | 08h-13h | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 21° NNE | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont de Chavanay | 6 | 16 | 21° NNE | aucun | soleil-couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 13 | 1° N | aucun | soleil | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 5 | 15 | 8° N | aucun | soleil | 0.0 |  |
| Saint-Romain-des-Iles | 4 | 11 | 344° NNO | aucun | soleil | 0.0 |  |
| Nord du Pont d'Arciat | 4 | 11 | 344° NNO | aucun | soleil | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 333° NNO | aucun | soleil | 0.0 |  |
