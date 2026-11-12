# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 12/11/2026 14:53 (Europe/Paris)
- Fichiers générés le : 2026-11-12T14:56:36+01:00
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
| Plage de la pointe - Messery | 10 | 14 | 39° NE | aucun | pluie | 10.9 | 12°C |
| Plage d'Excenevex | 10 | 14 | 32° NNE | aucun | pluie | 11.7 | 12°C |
| Plage du Vengeron | 7 | 9 | 40° NE | aucun | pluie | 12.3 | 12°C |
| Plage d'Hermance | 7 | 9 | 52° NE | aucun | pluie | 11.7 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 6 | 345° NNO | aucun | pluie | 13.8 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 28° NNE | aucun | pluie | 17.2 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 22 | 220° SO | aucun | orage | 29.4 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 338° NNO | aucun | orage | 25.5 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 13° NNE | aucun | pluie | 10.9 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 338° NNO | aucun | orage | 12.2 | 15°C |
| Cruas - Nuclear Spot | 7 | 14 | 24° NNE | aucun | pluie | 12.7 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 19 | 340° NNO | aucun | orage | 16.2 | 14°C |
| Nord du Pont de Chavanay | 10 | 19 | 347° NNO | aucun | pluie | 16.2 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 333° NNO | aucun | pluie | 19.9 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 360° N | aucun | pluie | 19.3 | 14°C |
| Saint-Romain-des-Iles | 16 | 26 | 358° N | 15h-20h | pluie | 5.2 | 13°C |
| Nord du Pont d'Arciat | 17 | 26 | 357° N | 15h-20h | pluie | 5.9 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 22 | 349° N | aucun | orage | 16.1 | 14°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 26 | 38 | 38° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 24 | 35 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 24 | 34 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 24 | 34 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 16 | 23 | 330° NNO | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 18 | 26 | 4° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 31 | 355° N | 08h-19h | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 18 | 30 | 354° N | 08h-17h | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 20 | 35 | 13° NNE | 08h-20h | pluie | 1.3 | 10°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 352° N | 08h-19h | soleil-couvert | 0.1 | 10°C |
| Cruas - Nuclear Spot | 21 | 41 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 27 | 5° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 14 | 24 | 6° N | 08h-17h | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 337° NNO | 10h-15h | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 1° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 16 | 26 | 6° N | 08h-20h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 17 | 26 | 4° N | 08h-20h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 22 | 352° N | 08h-18h | soleil | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 56° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 15 | 20 | 30° NNE | 08h-11h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 11 | 15 | 47° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 11 | 16 | 52° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 350° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 360° N | aucun | pluie | 0.7 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 29 | 174° S | 11h-17h | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 192° SSO | aucun | soleil-couvert | 0.1 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 21 | 191° S | 15h-19h | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 12 | 20 | 177° S | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 8 | 15 | 19° NNE | aucun | soleil-couvert | 0.2 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 19 | 174° S | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 11 | 19 | 174° S | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 21 | 182° S | 17h-20h | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 12 | 21 | 182° S | 17h-20h | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 4 | 9 | 190° S | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 9 | 187° S | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 12 | 164° SSE | aucun | soleil | 0.0 | 10°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 219° SO | aucun | couvert | 0.4 | 12°C |
| Plage d'Excenevex | 10 | 13 | 224° SO | aucun | couvert | 0.2 | 11°C |
| Plage du Vengeron | 10 | 13 | 225° SO | aucun | couvert | 0.3 | 15°C |
| Plage d'Hermance | 12 | 17 | 230° SO | aucun | couvert | 0.3 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 148° SSE | aucun | couvert | 0.9 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 141° SE | aucun | pluie | 0.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 21 | 39 | 172° S | 08h-20h | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 19 | 180° S | aucun | couvert | 0.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 214° SO | 12h-17h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 19 | 201° SSO | 12h-16h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 6 | 11 | 238° OSO | aucun | pluie | 3.2 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 26 | 178° S | 08h-17h | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 15 | 26 | 178° S | 08h-17h | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 192° SSO | 08h-20h | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 14 | 29 | 192° SSO | 08h-20h | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 18 | 28 | 184° S | 09h-19h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 18 | 28 | 184° S | 09h-19h | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 32 | 193° SSO | 08h-19h | couvert | 0.4 | 13°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 25 | 36 | 214° SO | 09h-20h | pluie | 3.6 | 12°C |
| Plage d'Excenevex | 22 | 33 | 221° SO | 09h-20h | pluie | 4.3 | 12°C |
| Plage du Vengeron | 22 | 31 | 214° SO | 09h-20h | pluie | 7.1 | 13°C |
| Plage d'Hermance | 36 | 62 | 232° SO | 09h-20h | pluie | 6.2 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 17 | 36 | 228° SO | 09h-12h | pluie | 1.7 | 12°C |
| Lac du Bourget - Cap des Séselets | 16 | 21 | 196° SSO | 08h-13h | pluie | 2.4 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 20 | 47 | 170° S | 08h-12h | orage | 5.7 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 138° SE | aucun | pluie | 1.8 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 24 | 194° SSO | 08h-14h | pluie | 1.6 | 13°C |
| La Roche-de-Glun - Base Nautique | 17 | 27 | 193° SSO | 08h-14h | pluie | 1.4 | 13°C |
| Cruas - Nuclear Spot | 9 | 16 | 182° S | aucun | pluie | 3.4 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 25 | 175° S | 08h-14h | couvert | 0.1 | 13°C |
| Nord du Pont de Chavanay | 14 | 25 | 175° S | 08h-14h | couvert | 0.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 28 | 181° S | 08h-14h | couvert | 0.5 | 14°C |
| Saint-Cyr-sur-le-Rhône | 15 | 28 | 181° S | 08h-14h | couvert | 0.5 | 13°C |
| Saint-Romain-des-Iles | 12 | 19 | 189° S | aucun | pluie | 4.3 | 14°C |
| Nord du Pont d'Arciat | 12 | 19 | 189° S | aucun | pluie | 4.3 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 19 | 32 | 187° S | 08h-14h | pluie | 1.5 | 14°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 16 | 252° OSO | aucun | orage | 20.1 | 9°C |
| Plage d'Excenevex | 7 | 16 | 252° OSO | aucun | orage | 20.1 | 9°C |
| Plage du Vengeron | 7 | 16 | 252° OSO | aucun | orage | 20.1 | 9°C |
| Plage d'Hermance | 7 | 16 | 252° OSO | aucun | orage | 20.1 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 19 | 115° ESE | aucun | orage | 25.8 | 9°C |
| Lac du Bourget - Cap des Séselets | 6 | 20 | 124° SE | aucun | orage | 24.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 24 | 146° SE | aucun | pluie | 17.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 17 | 197° SSO | aucun | pluie | 15.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 198° SSO | aucun | pluie | 3.9 | 14°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 198° SSO | 08h-15h | pluie | 3.8 | 14°C |
| Cruas - Nuclear Spot | 8 | 19 | 205° SSO | aucun | pluie | 7.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 30 | 180° S | 08h-13h | pluie | 2.1 | 16°C |
| Nord du Pont de Chavanay | 13 | 30 | 180° S | 08h-13h | pluie | 2.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 38 | 173° S | 08h-14h | pluie | 7.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 16 | 34 | 176° S | 08h-13h | pluie | 4.8 | 15°C |
| Saint-Romain-des-Iles | 16 | 28 | 181° S | 08h-20h | pluie | 5.5 | 14°C |
| Nord du Pont d'Arciat | 16 | 28 | 181° S | 08h-20h | pluie | 5.5 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 19 | 38 | 189° S | 08h-15h | pluie | 7.9 | 15°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 24 | 241° OSO | 08h-18h | pluie | 2.7 | 12°C |
| Plage d'Excenevex | 14 | 24 | 241° OSO | 08h-18h | pluie | 2.7 | 12°C |
| Plage du Vengeron | 14 | 24 | 241° OSO | 08h-18h | pluie | 2.7 | 12°C |
| Plage d'Hermance | 14 | 24 | 241° OSO | 08h-18h | pluie | 2.7 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 19 | 143° SE | aucun | pluie | 4.9 | 10°C |
| Lac du Bourget - Cap des Séselets | 8 | 19 | 142° SE | aucun | pluie | 2.3 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 21 | 148° SSE | aucun | couvert | 0.9 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 18 | 156° SSE | aucun | pluie | 2.1 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 178° S | aucun | pluie | 1.8 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 196° SSO | 09h-12h | pluie | 2.4 | 12°C |
| Cruas - Nuclear Spot | 6 | 16 | 181° S | aucun | pluie | 2.1 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 24 | 156° SSE | aucun | pluie | 3.0 | 13°C |
| Nord du Pont de Chavanay | 9 | 24 | 156° SSE | aucun | pluie | 3.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 173° S | aucun | pluie | 3.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 164° SSE | aucun | pluie | 3.0 | 13°C |
| Saint-Romain-des-Iles | 12 | 25 | 267° O | 17h-20h | couvert | 0.4 | 13°C |
| Nord du Pont d'Arciat | 12 | 25 | 267° O | 17h-20h | couvert | 0.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 200° SSO | aucun | pluie | 3.6 | 13°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 26 | 223° SO | 08h-16h | pluie | 2.7 | 10°C |
| Plage d'Excenevex | 16 | 26 | 223° SO | 08h-20h | pluie | 3.2 | 10°C |
| Plage du Vengeron | 16 | 26 | 223° SO | 08h-16h | pluie | 2.7 | 10°C |
| Plage d'Hermance | 16 | 26 | 223° SO | 08h-16h | pluie | 2.7 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 17 | 170° S | aucun | pluie | 6.5 | 7°C |
| Lac du Bourget - Cap des Séselets | 7 | 18 | 194° SSO | aucun | pluie | 5.8 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 164° SSE | aucun | pluie | 19.6 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 19 | 180° S | aucun | pluie | 14.9 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 195° SSO | aucun | pluie | 2.4 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 202° SSO | 10h-14h | soleil-couvert | 0.5 | 12°C |
| Cruas - Nuclear Spot | 6 | 14 | 176° S | aucun | pluie | 8.5 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 189° S | aucun | pluie | 6.0 | 11°C |
| Nord du Pont de Chavanay | 5 | 13 | 189° S | aucun | pluie | 6.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 183° S | aucun | pluie | 9.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 187° S | aucun | pluie | 7.2 | 11°C |
| Saint-Romain-des-Iles | 6 | 15 | 248° OSO | aucun | pluie | 4.2 | 12°C |
| Nord du Pont d'Arciat | 6 | 15 | 248° OSO | aucun | pluie | 4.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 189° S | aucun | pluie | 4.2 | 12°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 197° SSO | aucun | pluie | 4.8 | 10°C |
| Plage d'Excenevex | 8 | 10 | 210° SSO | aucun | pluie | 2.4 | 10°C |
| Plage du Vengeron | 9 | 12 | 197° SSO | aucun | pluie | 4.8 | 10°C |
| Plage d'Hermance | 9 | 12 | 197° SSO | aucun | pluie | 4.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 13 | 136° SE | aucun | pluie | 1.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 1 | 8 | 246° OSO | aucun | pluie | 5.4 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 9 | 246° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 176° S | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 160° SSE | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 164° SSE | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 2 | 6 | 286° ONO | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 137° SE | aucun | couvert | 0.6 | 13°C |
| Nord du Pont de Chavanay | 5 | 12 | 137° SE | aucun | couvert | 0.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 10 | 177° S | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 151° SSE | aucun | couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 5 | 9 | 197° SSO | aucun | pluie | 1.2 | 12°C |
| Nord du Pont d'Arciat | 5 | 9 | 197° SSO | aucun | pluie | 1.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 179° S | aucun | soleil-couvert | 0.0 | 13°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 134° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 5 | 209° SSO | aucun | soleil | 0.0 | 11°C |
| Plage du Vengeron | 3 | 5 | 134° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 3 | 5 | 134° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 275° O | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 24° NNE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 356° N | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 24° NNE | aucun | soleil | 0.6 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 27° NNE | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 57° ENE | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 2 | 6 | 345° NNO | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 67° ENE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 2 | 8 | 67° ENE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 225° SO | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 60° ENE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 4 | 6 | 238° OSO | aucun | soleil-couvert | 0.1 | 12°C |
| Nord du Pont d'Arciat | 4 | 6 | 238° OSO | aucun | soleil-couvert | 0.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 6 | 207° SSO | aucun | soleil | 0.0 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 131° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 2 | 10 | 167° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 5 | 131° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 3 | 5 | 131° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 290° ONO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 169° S | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 18° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 20° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 3° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 5 | 13 | 39° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 61° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 3 | 8 | 61° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 73° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 58° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 2 | 6 | 129° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 2 | 6 | 129° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 5 | 270° O | aucun | soleil-couvert | 0.0 | 11°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 213° SSO | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 9 | 13 | 224° SO | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 8 | 11 | 213° SSO | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 8 | 11 | 213° SSO | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 118° ESE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 1 | 4 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 335° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 204° SSO | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 200° SSO | aucun | couvert | 0.6 | 10°C |
| Cruas - Nuclear Spot | 3 | 8 | 330° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 147° SSE | aucun | soleil-couvert | 0.6 | 10°C |
| Nord du Pont de Chavanay | 3 | 8 | 147° SSE | aucun | soleil-couvert | 0.6 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 140° SE | aucun | soleil-couvert | 0.6 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 139° SE | aucun | soleil-couvert | 0.6 | 10°C |
| Saint-Romain-des-Iles | 4 | 9 | 180° S | aucun | soleil-couvert | 0.6 | 9°C |
| Nord du Pont d'Arciat | 4 | 9 | 180° S | aucun | soleil-couvert | 0.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 131° SE | aucun | pluie | 1.2 | 9°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 214° SO | aucun | couvert | 0.6 | 10°C |
| Plage d'Excenevex | 6 | 9 | 232° SO | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 5 | 9 | 214° SO | aucun | couvert | 0.6 | 10°C |
| Plage d'Hermance | 5 | 9 | 214° SO | aucun | couvert | 0.6 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 270° O | aucun | couvert | 0.3 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 33° NNE | aucun | pluie | 1.6 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 350° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 344° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 3° N | aucun | soleil-couvert | 0.1 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 355° N | aucun | soleil-couvert | 0.1 | 10°C |
| Cruas - Nuclear Spot | 7 | 17 | 19° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 47° NE | aucun | soleil-couvert | 0.7 | 10°C |
| Nord du Pont de Chavanay | 2 | 8 | 47° NE | aucun | soleil-couvert | 0.7 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 67° ENE | aucun | pluie | 2.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 36° NE | aucun | pluie | 1.3 | 9°C |
| Saint-Romain-des-Iles | 3 | 5 | 272° O | aucun | couvert | 0.6 | 8°C |
| Nord du Pont d'Arciat | 3 | 5 | 272° O | aucun | couvert | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 253° OSO | aucun | couvert | 0.2 | 8°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 12° NNE | aucun | pluie | 3.6 | 8°C |
| Plage d'Excenevex | 9 | 13 | 13° NNE | aucun | pluie | 1.8 | 8°C |
| Plage du Vengeron | 8 | 11 | 12° NNE | aucun | pluie | 3.6 | 8°C |
| Plage d'Hermance | 8 | 11 | 12° NNE | aucun | pluie | 3.6 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 12 | 60° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 32° NNE | aucun | soleil-couvert | 0.6 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 353° N | aucun | couvert | 0.6 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 23 | 356° N | aucun | soleil-couvert | 0.6 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 5° N | 10h-20h | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 1° N | 11h-19h | soleil | 0.0 | 8°C |
| Cruas - Nuclear Spot | 14 | 31 | 9° N | 10h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 359° N | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 9 | 20 | 359° N | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 356° N | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 357° N | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 5 | 10 | 350° N | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 5 | 10 | 350° N | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 343° NNO | aucun | soleil-couvert | 0.0 | 7°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 25° NNE | 08h-20h | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 10 | 17 | 21° NNE | 12h-15h | soleil | 0.0 | 6°C |
| Plage du Vengeron | 11 | 17 | 25° NNE | 08h-20h | soleil | 0.0 | 7°C |
| Plage d'Hermance | 11 | 17 | 25° NNE | 08h-20h | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 337° NNO | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 4 | 15 | 46° NE | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 43° NE | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 22° NNE | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 8° N | aucun | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 350° N | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 10 | 22 | 30° NNE | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 29° NNE | aucun | soleil | 0.0 | 6°C |
| Nord du Pont de Chavanay | 5 | 13 | 29° NNE | aucun | soleil | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 4° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 18° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 3 | 8 | 322° NO | aucun | soleil | 0.0 | 5°C |
| Nord du Pont d'Arciat | 3 | 8 | 322° NO | aucun | soleil | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 12 | 354° N | aucun | soleil-couvert | 0.0 | 5°C |
