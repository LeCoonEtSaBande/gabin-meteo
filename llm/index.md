# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 16/11/2026 14:50 (Europe/Paris)
- Fichiers générés le : 2026-11-16T14:57:55+01:00
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

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 25 | 220° SO | 08h-20h | pluie | 1.2 | 12°C |
| Plage d'Excenevex | 14 | 20 | 211° SSO | 08h-15h | couvert | 0.0 | 13°C |
| Plage du Vengeron | 15 | 19 | 215° SO | 09h-20h | pluie | 2.1 | 13°C |
| Plage d'Hermance | 17 | 23 | 214° SO | 08h-20h | pluie | 1.3 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 135° SE | aucun | pluie | 1.1 | 14°C |
| Lac du Bourget - Cap des Séselets | 11 | 15 | 211° SSO | aucun | pluie | 1.1 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 12 | 204° SSO | aucun | couvert | 0.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 8 | 192° SSO | aucun | couvert | 0.3 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 206° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 155° SSE | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 5 | 9 | 206° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 14 | 160° SSE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 7 | 12 | 165° SSE | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 171° S | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 211° SSO | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 9 | 14 | 179° S | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 10 | 14 | 191° S | aucun | couvert | 0.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 181° S | aucun | couvert | 0.0 | 13°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 33 | 217° SO | 08h-20h | pluie | 11.3 | 14°C |
| Plage d'Excenevex | 17 | 26 | 206° SSO | 08h-20h | pluie | 9.8 | 14°C |
| Plage du Vengeron | 18 | 24 | 235° SO | 08h-20h | orage | 18.7 | 14°C |
| Plage d'Hermance | 24 | 32 | 221° SO | 08h-19h | orage | 14.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 11 | 210° SSO | aucun | orage | 13.3 | 16°C |
| Lac du Bourget - Cap des Séselets | 14 | 20 | 167° SSE | 08h-13h | orage | 18.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 28 | 198° SSO | 08h-14h | pluie | 2.4 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 26 | 199° SSO | 08h-11h | couvert | 0.3 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 23 | 191° S | 15h-20h | couvert | 0.4 | 14°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 188° S | aucun | pluie | 1.5 | 15°C |
| Cruas - Nuclear Spot | 7 | 12 | 193° SSO | aucun | pluie | 1.7 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 24 | 154° SSE | 10h-16h | couvert | 0.5 | 15°C |
| Nord du Pont de Chavanay | 13 | 21 | 166° SSE | 11h-14h | couvert | 0.3 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 38 | 165° SSE | 08h-18h | pluie | 10.1 | 15°C |
| Saint-Cyr-sur-le-Rhône | 14 | 31 | 179° S | 08h-15h | pluie | 7.2 | 14°C |
| Saint-Romain-des-Iles | 14 | 22 | 182° S | 08h-19h | pluie | 3.6 | 15°C |
| Nord du Pont d'Arciat | 16 | 25 | 190° S | 08h-20h | pluie | 3.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 19 | 32 | 175° S | 08h-20h | pluie | 9.2 | 14°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 208° SSO | 08h-20h | couvert | 0.3 | 14°C |
| Plage d'Excenevex | 18 | 24 | 230° SO | 08h-18h | soleil-couvert | 0.1 | 14°C |
| Plage du Vengeron | 13 | 17 | 210° SSO | 08h-20h | pluie | 0.9 | 15°C |
| Plage d'Hermance | 15 | 24 | 217° SO | 08h-17h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 12 | 231° SO | aucun | pluie | 1.1 | 14°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 155° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 150° SSE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 353° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 11 | 197° SSO | aucun | orage | 6.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 12 | 197° SSO | aucun | orage | 5.8 | 14°C |
| Cruas - Nuclear Spot | 4 | 8 | 79° E | aucun | orage | 12.7 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 19 | 137° SE | aucun | pluie | 6.0 | 14°C |
| Nord du Pont de Chavanay | 8 | 16 | 135° SE | aucun | pluie | 6.9 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 33 | 265° O | aucun | pluie | 2.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 23 | 220° SO | aucun | pluie | 2.2 | 13°C |
| Saint-Romain-des-Iles | 12 | 19 | 231° SO | 11h-15h | soleil-couvert | 0.2 | 15°C |
| Nord du Pont d'Arciat | 12 | 19 | 231° SO | 11h-15h | soleil-couvert | 0.2 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 12 | 193° SSO | aucun | pluie | 1.0 | 14°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 33 | 220° SO | 08h-20h | pluie | 3.4 | 12°C |
| Plage d'Excenevex | 19 | 31 | 207° SSO | 08h-20h | pluie | 3.2 | 12°C |
| Plage du Vengeron | 16 | 28 | 207° SSO | 08h-20h | pluie | 2.8 | 12°C |
| Plage d'Hermance | 19 | 28 | 211° SSO | 08h-17h | pluie | 1.9 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 19 | 238° OSO | aucun | pluie | 5.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 152° SSE | aucun | pluie | 3.1 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 12° NNE | aucun | couvert | 0.6 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 16° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 175° S | aucun | pluie | 4.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 24 | 183° S | aucun | pluie | 4.7 | 13°C |
| Cruas - Nuclear Spot | 5 | 10 | 180° S | aucun | soleil-couvert | 0.4 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 23 | 153° SSE | aucun | pluie | 5.2 | 13°C |
| Nord du Pont de Chavanay | 12 | 23 | 153° SSE | aucun | pluie | 5.2 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 174° S | aucun | soleil-couvert | 0.4 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 174° S | aucun | soleil-couvert | 0.4 | 13°C |
| Saint-Romain-des-Iles | 9 | 17 | 182° S | aucun | pluie | 1.6 | 14°C |
| Nord du Pont d'Arciat | 9 | 17 | 182° S | aucun | pluie | 1.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 185° S | aucun | pluie | 2.7 | 13°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 32 | 206° SSO | 08h-20h | pluie | 10.2 | 11°C |
| Plage d'Excenevex | 20 | 28 | 212° SSO | 08h-20h | pluie | 8.5 | 11°C |
| Plage du Vengeron | 19 | 25 | 200° SSO | 08h-18h | pluie | 8.4 | 11°C |
| Plage d'Hermance | 17 | 27 | 200° SSO | 08h-17h | pluie | 6.3 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 15 | 284° ONO | aucun | pluie | 8.7 | 11°C |
| Lac du Bourget - Cap des Séselets | 12 | 15 | 153° SSE | 12h-15h | pluie | 1.2 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 21 | 38° NE | aucun | pluie | 6.4 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 4° N | aucun | pluie | 4.9 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 203° SSO | aucun | soleil-couvert | 0.9 | 13°C |
| La Roche-de-Glun - Base Nautique | 12 | 20 | 194° SSO | 10h-13h | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 5 | 10 | 206° SSO | aucun | soleil-couvert | 0.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 160° SSE | aucun | pluie | 1.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 17 | 160° SSE | aucun | pluie | 1.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 183° S | aucun | pluie | 1.3 | 14°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 183° S | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 10 | 22 | 172° S | aucun | pluie | 7.3 | 11°C |
| Nord du Pont d'Arciat | 10 | 22 | 172° S | aucun | pluie | 7.3 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 186° S | aucun | pluie | 7.7 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 233° SO | aucun | soleil-couvert | 0.9 | 11°C |
| Plage d'Excenevex | 6 | 10 | 233° SO | aucun | soleil-couvert | 0.9 | 11°C |
| Plage du Vengeron | 6 | 10 | 233° SO | aucun | soleil-couvert | 0.9 | 11°C |
| Plage d'Hermance | 6 | 10 | 233° SO | aucun | soleil-couvert | 0.9 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 171° S | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 332° NNO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 360° N | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 13° NNE | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 9° N | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 21 | 26° NNE | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 21° NNE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 13 | 21° NNE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 27° NNE | aucun | couvert | 0.3 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 18° NNE | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 9 | 77° ENE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 9 | 77° ENE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 19° NNE | aucun | couvert | 0.0 | 10°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 232° SO | aucun | pluie | 14.1 | 8°C |
| Plage d'Excenevex | 7 | 11 | 232° SO | aucun | pluie | 14.1 | 8°C |
| Plage du Vengeron | 7 | 11 | 232° SO | aucun | pluie | 14.1 | 8°C |
| Plage d'Hermance | 7 | 11 | 232° SO | aucun | pluie | 14.1 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 116° ESE | aucun | orage | 25.3 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 121° ESE | aucun | orage | 27.5 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 23 | 149° SSE | aucun | pluie | 17.3 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 19 | 172° S | aucun | pluie | 18.1 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 162° SSE | aucun | pluie | 4.8 | 9°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 178° S | aucun | pluie | 3.6 | 9°C |
| Cruas - Nuclear Spot | 2 | 6 | 283° ONO | aucun | pluie | 7.8 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 166° SSE | aucun | pluie | 9.6 | 8°C |
| Nord du Pont de Chavanay | 6 | 14 | 166° SSE | aucun | pluie | 9.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 157° SSE | aucun | pluie | 8.4 | 7°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 154° SSE | aucun | pluie | 11.4 | 7°C |
| Saint-Romain-des-Iles | 6 | 10 | 185° S | aucun | pluie | 6.1 | 7°C |
| Nord du Pont d'Arciat | 6 | 10 | 185° S | aucun | pluie | 6.1 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 119° ESE | aucun | pluie | 7.2 | 7°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 24 | 227° SO | 08h-14h | pluie | 2.4 | 9°C |
| Plage d'Excenevex | 15 | 24 | 227° SO | 08h-14h | pluie | 2.4 | 9°C |
| Plage du Vengeron | 15 | 24 | 227° SO | 08h-14h | pluie | 2.4 | 9°C |
| Plage d'Hermance | 15 | 24 | 227° SO | 08h-14h | pluie | 2.4 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 205° SSO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 184° S | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 18 | 336° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 17 | 358° N | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 17° NNE | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 12° NNE | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 10 | 22 | 29° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 13° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 13 | 13° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 22° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 8° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 5 | 11 | 314° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 5 | 11 | 314° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 357° N | aucun | soleil-couvert | 0.0 | 10°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 359° N | aucun | pluie | 4.9 | 8°C |
| Plage d'Excenevex | 5 | 9 | 41° NE | aucun | pluie | 4.6 | 8°C |
| Plage du Vengeron | 6 | 9 | 359° N | aucun | pluie | 4.9 | 8°C |
| Plage d'Hermance | 6 | 9 | 359° N | aucun | pluie | 4.9 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 96° E | aucun | pluie | 13.1 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 13° NNE | aucun | pluie | 9.1 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 20 | 183° S | aucun | pluie | 8.6 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 175° S | aucun | pluie | 8.6 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 17 | 206° SSO | aucun | pluie | 10.3 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 22 | 211° SSO | aucun | pluie | 7.6 | 10°C |
| Cruas - Nuclear Spot | 12 | 26 | 165° SSE | aucun | orage | 23.4 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 183° S | 11h-16h | pluie | 2.1 | 10°C |
| Nord du Pont de Chavanay | 12 | 28 | 183° S | 11h-16h | pluie | 2.1 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 171° S | 11h-18h | pluie | 1.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 15 | 32 | 175° S | 10h-19h | pluie | 2.4 | 10°C |
| Saint-Romain-des-Iles | 9 | 15 | 169° S | aucun | soleil-couvert | 0.3 | 9°C |
| Nord du Pont d'Arciat | 9 | 15 | 169° S | aucun | soleil-couvert | 0.3 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 147° SSE | aucun | pluie | 6.1 | 9°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 203° SSO | aucun | pluie | 5.4 | 7°C |
| Plage d'Excenevex | 12 | 16 | 218° SO | aucun | pluie | 6.0 | 7°C |
| Plage du Vengeron | 10 | 14 | 203° SSO | aucun | pluie | 5.4 | 7°C |
| Plage d'Hermance | 10 | 14 | 203° SSO | aucun | pluie | 5.4 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 226° SO | aucun | pluie | 4.8 | 6°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 48° NE | aucun | pluie | 2.4 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 24 | 333° NNO | aucun | pluie | 2.4 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 26 | 318° NO | aucun | pluie | 2.4 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 17 | 90° E | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 195° SSO | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 2 | 18 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 173° S | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 15 | 173° S | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 184° S | aucun | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 173° S | aucun | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 7 | 17 | 189° S | aucun | soleil-couvert | 0.6 | 9°C |
| Nord du Pont d'Arciat | 7 | 17 | 189° S | aucun | soleil-couvert | 0.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 103° ESE | aucun | pluie | 1.2 | 10°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 29° NNE | 14h-20h | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 9 | 14 | 24° NNE | aucun | couvert | 0.1 | 6°C |
| Plage du Vengeron | 11 | 16 | 29° NNE | 14h-20h | couvert | 0.0 | 7°C |
| Plage d'Hermance | 11 | 16 | 29° NNE | 14h-20h | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 350° N | aucun | couvert | 0.3 | 5°C |
| Lac du Bourget - Cap des Séselets | 7 | 17 | 28° NNE | aucun | pluie | 1.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 13 | 172° S | aucun | pluie | 3.8 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 294° ONO | aucun | pluie | 5.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 353° N | aucun | pluie | 7.7 | 6°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 345° NNO | aucun | pluie | 6.3 | 6°C |
| Cruas - Nuclear Spot | 11 | 23 | 356° N | 17h-20h | pluie | 5.2 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 349° N | aucun | pluie | 2.8 | 7°C |
| Nord du Pont de Chavanay | 4 | 9 | 349° N | aucun | pluie | 2.8 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 295° ONO | aucun | pluie | 2.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 351° N | aucun | pluie | 2.1 | 6°C |
| Saint-Romain-des-Iles | 3 | 6 | 331° NNO | aucun | pluie | 2.1 | 5°C |
| Nord du Pont d'Arciat | 3 | 6 | 331° NNO | aucun | pluie | 2.1 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 327° NNO | aucun | couvert | 0.7 | 6°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 200° SSO | aucun | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 5 | 8 | 257° OSO | aucun | couvert | 0.0 | 6°C |
| Plage du Vengeron | 5 | 9 | 200° SSO | aucun | couvert | 0.0 | 6°C |
| Plage d'Hermance | 5 | 9 | 200° SSO | aucun | couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 253° OSO | aucun | couvert | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 199° SSO | aucun | pluie | 1.2 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 351° N | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 19 | 343° NNO | aucun | couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 17° NNE | 12h-17h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 11 | 24 | 17° NNE | 12h-16h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 359° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 8 | 18 | 359° N | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 353° N | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 350° N | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 6 | 11 | 328° NNO | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 6 | 11 | 328° NNO | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 15 | 343° NNO | aucun | couvert | 0.0 | 6°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 23° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 8 | 13 | 23° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 9 | 14 | 23° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 9 | 14 | 23° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 29° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 180° S | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 184° S | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 7° N | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 354° N | aucun | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 8 | 20 | 28° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 22° NNE | aucun | soleil-couvert | 0.3 | 5°C |
| Nord du Pont de Chavanay | 4 | 10 | 22° NNE | aucun | soleil-couvert | 0.3 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 331° NNO | aucun | couvert | 0.1 | 4°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 17° NNE | aucun | soleil-couvert | 0.3 | 5°C |
| Saint-Romain-des-Iles | 2 | 6 | 153° SSE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 2 | 6 | 153° SSE | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 358° N | aucun | couvert | 0.0 | 4°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 33° NNE | aucun | pluie | 9.2 | 6°C |
| Plage d'Excenevex | 6 | 10 | 47° NE | aucun | pluie | 5.5 | 6°C |
| Plage du Vengeron | 6 | 10 | 33° NNE | aucun | pluie | 9.2 | 6°C |
| Plage d'Hermance | 6 | 10 | 33° NNE | aucun | pluie | 9.2 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 11° N | aucun | pluie | 8.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 31° NNE | aucun | pluie | 6.7 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 17 | 199° SSO | aucun | pluie | 10.7 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 15 | 186° S | aucun | pluie | 12.3 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 174° S | aucun | pluie | 9.8 | 8°C |
| La Roche-de-Glun - Base Nautique | 2 | 9 | 55° NE | aucun | pluie | 9.3 | 7°C |
| Cruas - Nuclear Spot | 2 | 9 | 215° SO | aucun | pluie | 10.8 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 134° SE | aucun | pluie | 9.5 | 6°C |
| Nord du Pont de Chavanay | 3 | 8 | 134° SE | aucun | pluie | 9.5 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 8 | 321° NO | aucun | pluie | 7.2 | 5°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 120° ESE | aucun | pluie | 7.7 | 6°C |
| Saint-Romain-des-Iles | 5 | 10 | 195° SSO | aucun | pluie | 5.4 | 5°C |
| Nord du Pont d'Arciat | 5 | 10 | 195° SSO | aucun | pluie | 5.4 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 98° E | aucun | pluie | 5.6 | 6°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 32° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 11 | 16 | 28° NNE | 17h-20h | couvert | 0.0 | 3°C |
| Plage du Vengeron | 10 | 15 | 32° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Hermance | 10 | 15 | 32° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 343° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 28° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 2° N | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 351° N | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 8° N | 11h-15h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 2° N | aucun | soleil-couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 10 | 22 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 16° NNE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 7 | 15 | 16° NNE | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 11° N | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 7° N | aucun | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 10 | 28° NNE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 4 | 10 | 28° NNE | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 346° NNO | aucun | couvert | 0.0 | 6°C |
