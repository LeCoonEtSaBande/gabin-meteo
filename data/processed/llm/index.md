# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 15/11/2026 13:51 (Europe/Paris)
- Fichiers générés le : 2026-11-15T13:52:11+01:00
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

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 27 | 218° SO | 14h-20h | soleil-couvert | 0.3 | 13°C |
| Plage d'Excenevex | 10 | 13 | 231° SO | aucun | soleil-couvert | 0.2 | 14°C |
| Plage du Vengeron | 12 | 16 | 208° SSO | aucun | pluie | 0.7 | 14°C |
| Plage d'Hermance | 17 | 22 | 225° SO | 15h-20h | couvert | 0.3 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 344° NNO | aucun | pluie | 1.5 | 14°C |
| Lac du Bourget - Cap des Séselets | 11 | 15 | 211° SSO | aucun | pluie | 1.8 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 28 | 190° S | 11h-20h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 159° SSE | aucun | soleil-couvert | 0.4 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 21 | 191° S | 12h-16h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 21 | 211° SSO | aucun | pluie | 1.3 | 14°C |
| Cruas - Nuclear Spot | 8 | 14 | 196° SSO | aucun | orage | 10.5 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 24 | 169° S | 11h-18h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 13 | 23 | 167° SSE | 12h-16h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 30 | 179° S | 11h-20h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 32 | 191° S | 12h-20h | soleil-couvert | 0.1 | 14°C |
| Saint-Romain-des-Iles | 14 | 22 | 174° S | 13h-20h | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 16 | 24 | 179° S | 12h-19h | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 29 | 192° SSO | 10h-20h | soleil-couvert | 0.0 | 13°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 208° SSO | 08h-17h | couvert | 0.8 | 12°C |
| Plage d'Excenevex | 14 | 19 | 210° SSO | 08h-15h | couvert | 0.2 | 12°C |
| Plage du Vengeron | 15 | 20 | 210° SSO | 09h-17h | pluie | 1.2 | 12°C |
| Plage d'Hermance | 17 | 24 | 209° SSO | 08h-17h | couvert | 0.7 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 140° SE | aucun | couvert | 0.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 215° SO | aucun | couvert | 0.1 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 160° SSE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 188° S | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 11 | 207° SSO | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 172° S | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 8 | 212° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 158° SSE | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 6 | 12 | 162° SSE | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 178° S | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 221° SO | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 10 | 14 | 194° SSO | aucun | couvert | 0.1 | 14°C |
| Nord du Pont d'Arciat | 10 | 16 | 201° SSO | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 14 | 182° S | aucun | couvert | 0.9 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 30 | 218° SO | 08h-20h | orage | 17.0 | 13°C |
| Plage d'Excenevex | 17 | 25 | 210° SSO | 08h-20h | orage | 17.8 | 14°C |
| Plage du Vengeron | 16 | 22 | 221° SO | 08h-20h | orage | 31.7 | 14°C |
| Plage d'Hermance | 18 | 28 | 216° SO | 08h-20h | orage | 20.3 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 12 | 143° SE | aucun | orage | 14.2 | 15°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 152° SSE | aucun | orage | 10.7 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 29 | 157° SSE | 08h-15h | orage | 11.2 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 145° SE | aucun | pluie | 2.7 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 21 | 186° S | 10h-20h | orage | 8.1 | 13°C |
| La Roche-de-Glun - Base Nautique | 15 | 26 | 190° S | 10h-20h | pluie | 5.6 | 14°C |
| Cruas - Nuclear Spot | 5 | 10 | 197° SSO | aucun | pluie | 4.9 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 17 | 36 | 170° S | 08h-20h | pluie | 7.7 | 14°C |
| Nord du Pont de Chavanay | 17 | 36 | 170° S | 10h-20h | pluie | 6.4 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 33 | 181° S | 08h-20h | orage | 15.3 | 13°C |
| Saint-Cyr-sur-le-Rhône | 17 | 33 | 181° S | 08h-20h | orage | 15.2 | 13°C |
| Saint-Romain-des-Iles | 16 | 25 | 175° S | 08h-18h | orage | 9.1 | 14°C |
| Nord du Pont d'Arciat | 18 | 27 | 181° S | 08h-18h | orage | 8.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 20 | 36 | 189° S | 08h-20h | pluie | 12.0 | 14°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 207° SSO | 08h-20h | pluie | 1.0 | 13°C |
| Plage d'Excenevex | 16 | 24 | 223° SO | 08h-20h | couvert | 0.5 | 14°C |
| Plage du Vengeron | 15 | 20 | 211° SSO | 09h-17h | couvert | 0.7 | 14°C |
| Plage d'Hermance | 17 | 25 | 214° SO | 09h-17h | couvert | 0.4 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 12 | 209° SSO | aucun | couvert | 0.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 10 | 12 | 147° SSE | aucun | pluie | 1.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 16 | 148° SSE | aucun | pluie | 1.7 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 131° SE | aucun | pluie | 3.5 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 182° S | aucun | orage | 5.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 19 | 200° SSO | 14h-18h | couvert | 0.2 | 14°C |
| Cruas - Nuclear Spot | 6 | 14 | 235° SO | aucun | pluie | 2.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 18 | 163° SSE | aucun | orage | 8.2 | 15°C |
| Nord du Pont de Chavanay | 10 | 18 | 163° SSE | aucun | orage | 8.2 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 169° S | aucun | orage | 7.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 169° S | aucun | orage | 7.2 | 14°C |
| Saint-Romain-des-Iles | 12 | 19 | 226° SO | 08h-11h | pluie | 0.8 | 16°C |
| Nord du Pont d'Arciat | 12 | 19 | 226° SO | 08h-11h | pluie | 0.8 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 18 | 184° S | aucun | pluie | 1.4 | 14°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 23 | 200° SSO | 08h-20h | pluie | 1.8 | 12°C |
| Plage d'Excenevex | 16 | 21 | 202° SSO | 08h-20h | pluie | 1.4 | 12°C |
| Plage du Vengeron | 16 | 21 | 203° SSO | 08h-20h | pluie | 3.7 | 13°C |
| Plage d'Hermance | 14 | 21 | 205° SSO | 11h-20h | couvert | 0.3 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 13 | 136° SE | aucun | pluie | 8.5 | 12°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 150° SSE | aucun | orage | 14.9 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 144° SE | aucun | pluie | 3.4 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 167° SSE | aucun | pluie | 3.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 163° SSE | aucun | pluie | 1.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 25 | 171° S | aucun | soleil-couvert | 0.7 | 14°C |
| Cruas - Nuclear Spot | 5 | 9 | 178° S | aucun | soleil-couvert | 0.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 19 | 150° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 11 | 19 | 150° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 16 | 172° S | aucun | soleil-couvert | 0.3 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 24 | 187° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 12 | 20 | 222° SO | aucun | soleil-couvert | 0.4 | 13°C |
| Nord du Pont d'Arciat | 12 | 20 | 222° SO | aucun | soleil-couvert | 0.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 25 | 204° SSO | aucun | soleil-couvert | 0.3 | 14°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 31 | 218° SO | 08h-20h | pluie | 7.9 | 11°C |
| Plage d'Excenevex | 18 | 31 | 218° SO | 08h-20h | pluie | 7.9 | 11°C |
| Plage du Vengeron | 18 | 31 | 218° SO | 08h-20h | pluie | 7.9 | 11°C |
| Plage d'Hermance | 18 | 31 | 218° SO | 08h-20h | pluie | 7.9 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 18 | 188° S | aucun | pluie | 9.6 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 17 | 173° S | aucun | pluie | 10.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 158° SSE | aucun | pluie | 7.2 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 143° SE | aucun | pluie | 3.4 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 187° S | aucun | soleil-couvert | 0.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 190° S | 11h-15h | soleil-couvert | 0.2 | 13°C |
| Cruas - Nuclear Spot | 7 | 16 | 185° S | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 167° SSE | aucun | pluie | 1.6 | 13°C |
| Nord du Pont de Chavanay | 9 | 21 | 167° SSE | aucun | pluie | 1.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 170° S | 08h-11h | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 165° SSE | aucun | pluie | 1.9 | 12°C |
| Saint-Romain-des-Iles | 8 | 14 | 189° S | aucun | pluie | 1.6 | 13°C |
| Nord du Pont d'Arciat | 8 | 14 | 189° S | aucun | pluie | 1.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 23 | 190° S | aucun | pluie | 4.8 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 242° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 5 | 9 | 242° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 5 | 9 | 242° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 5 | 9 | 242° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 129° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 337° NNO | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 127° SE | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 218° SO | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 5° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 357° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 10 | 23 | 21° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 16° NNE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 13 | 16° NNE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 24° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 12° NNE | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 7 | 135° SE | aucun | pluie | 1.2 | 9°C |
| Nord du Pont d'Arciat | 2 | 7 | 135° SE | aucun | pluie | 1.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 5° N | aucun | pluie | 1.8 | 10°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 193° SSO | aucun | pluie | 9.8 | 10°C |
| Plage d'Excenevex | 17 | 21 | 196° SSO | 17h-20h | pluie | 4.9 | 10°C |
| Plage du Vengeron | 13 | 17 | 193° SSO | aucun | pluie | 9.8 | 10°C |
| Plage d'Hermance | 13 | 17 | 193° SSO | aucun | pluie | 9.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 14 | 136° SE | aucun | pluie | 12.9 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 238° OSO | aucun | pluie | 10.9 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 26 | 159° SSE | aucun | pluie | 9.9 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 23 | 154° SSE | aucun | pluie | 9.7 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 182° S | aucun | pluie | 19.2 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 199° SSO | 08h-14h | pluie | 3.7 | 12°C |
| Cruas - Nuclear Spot | 10 | 22 | 177° S | aucun | orage | 24.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 32 | 187° S | 08h-15h | pluie | 4.0 | 11°C |
| Nord du Pont de Chavanay | 13 | 32 | 187° S | 08h-15h | pluie | 4.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 20 | 38 | 180° S | 08h-17h | pluie | 4.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 16 | 36 | 177° S | 08h-16h | pluie | 4.8 | 11°C |
| Saint-Romain-des-Iles | 12 | 23 | 180° S | 09h-15h | pluie | 4.3 | 10°C |
| Nord du Pont d'Arciat | 12 | 23 | 180° S | 09h-15h | pluie | 4.3 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 25 | 184° S | aucun | pluie | 9.0 | 11°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 201° SSO | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 15 | 22 | 213° SSO | 08h-12h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 11 | 17 | 201° SSO | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 11 | 17 | 201° SSO | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 128° SE | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 339° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 354° N | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 349° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 17° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 6 | 15 | 28° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 83° E | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 2 | 7 | 83° E | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 163° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 112° ESE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 3 | 9 | 219° SO | aucun | pluie | 2.4 | 11°C |
| Nord du Pont d'Arciat | 3 | 9 | 219° SO | aucun | pluie | 2.4 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 172° S | aucun | soleil-couvert | 0.0 | 10°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 198° SSO | aucun | couvert | 0.1 | 10°C |
| Plage d'Excenevex | 5 | 9 | 236° SO | aucun | couvert | 0.1 | 10°C |
| Plage du Vengeron | 6 | 9 | 198° SSO | aucun | couvert | 0.1 | 10°C |
| Plage d'Hermance | 6 | 9 | 198° SSO | aucun | couvert | 0.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 204° SSO | aucun | couvert | 0.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 180° S | aucun | couvert | 0.7 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 12 | 352° N | aucun | soleil-couvert | 0.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 12 | 331° NNO | aucun | soleil-couvert | 0.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 7 | 32° NNE | aucun | couvert | 0.7 | 11°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 178° S | aucun | soleil-couvert | 0.7 | 11°C |
| Cruas - Nuclear Spot | 3 | 8 | 353° N | aucun | soleil-couvert | 0.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 337° NNO | aucun | pluie | 1.4 | 10°C |
| Nord du Pont de Chavanay | 2 | 7 | 337° NNO | aucun | pluie | 1.4 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 114° ESE | aucun | couvert | 0.6 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 324° NO | aucun | pluie | 1.9 | 10°C |
| Saint-Romain-des-Iles | 5 | 9 | 289° ONO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 5 | 9 | 289° ONO | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 145° SE | aucun | soleil-couvert | 0.6 | 9°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 104° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 2 | 6 | 38° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 3 | 6 | 104° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 3 | 6 | 104° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 341° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 57° ENE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 17 | 360° N | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 19 | 353° N | aucun | soleil-couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 22 | 8° N | 09h-13h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 1° N | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 11 | 27 | 20° NNE | 10h-15h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 5 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 15° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 12° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 7 | 223° SO | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 7 | 223° SO | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 348° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 231° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 2 | 5 | 215° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 5 | 7 | 231° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 5 | 7 | 231° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 238° OSO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 268° O | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 183° S | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 186° S | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 187° S | 12h-17h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 191° S | 10h-20h | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 8 | 18 | 211° SSO | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 30 | 186° S | 09h-20h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 13 | 30 | 186° S | 09h-20h | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 165° SSE | 08h-16h | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 13 | 32 | 180° S | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 7 | 14 | 173° S | aucun | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 7 | 14 | 173° S | aucun | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 22 | 182° S | aucun | soleil | 0.0 | 13°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 237° OSO | aucun | pluie | 1.3 | 11°C |
| Plage d'Excenevex | 6 | 9 | 214° SO | aucun | pluie | 0.8 | 12°C |
| Plage du Vengeron | 9 | 12 | 237° OSO | aucun | pluie | 1.3 | 11°C |
| Plage d'Hermance | 9 | 12 | 237° OSO | aucun | pluie | 1.3 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 169° S | aucun | pluie | 0.5 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 260° O | aucun | pluie | 1.4 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 28 | 202° SSO | aucun | soleil-couvert | 0.4 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 24 | 208° SSO | aucun | soleil-couvert | 0.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 185° S | 09h-20h | pluie | 1.6 | 15°C |
| La Roche-de-Glun - Base Nautique | 15 | 35 | 191° S | 08h-20h | pluie | 1.4 | 14°C |
| Cruas - Nuclear Spot | 12 | 28 | 173° S | 12h-19h | pluie | 1.8 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 17 | 38 | 184° S | 08h-20h | pluie | 1.3 | 13°C |
| Nord du Pont de Chavanay | 17 | 38 | 184° S | 08h-20h | pluie | 1.3 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 23 | 47 | 174° S | 08h-20h | pluie | 1.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 19 | 42 | 178° S | 08h-20h | pluie | 1.1 | 13°C |
| Saint-Romain-des-Iles | 16 | 30 | 177° S | 08h-20h | pluie | 1.3 | 13°C |
| Nord du Pont d'Arciat | 16 | 30 | 177° S | 08h-20h | pluie | 1.3 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 19 | 40 | 181° S | 08h-20h | pluie | 1.3 | 14°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 18 | 232° SO | aucun | soleil-couvert | 0.1 | 8°C |
| Plage d'Excenevex | 8 | 20 | 242° OSO | aucun | soleil-couvert | 0.1 | 9°C |
| Plage du Vengeron | 7 | 18 | 232° SO | aucun | soleil-couvert | 0.1 | 8°C |
| Plage d'Hermance | 7 | 18 | 232° SO | aucun | soleil-couvert | 0.1 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 213° SSO | aucun | soleil-couvert | 0.7 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 219° SO | aucun | pluie | 1.1 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 2° N | aucun | soleil-couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 27° NNE | aucun | soleil | 0.6 | 10°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 73° ENE | aucun | soleil | 0.6 | 9°C |
| Cruas - Nuclear Spot | 2 | 10 | 311° NO | aucun | soleil | 0.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 11 | 92° E | aucun | pluie | 2.5 | 9°C |
| Nord du Pont de Chavanay | 3 | 11 | 92° E | aucun | pluie | 2.5 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 13 | 186° S | aucun | pluie | 3.4 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 219° SO | aucun | soleil | 0.6 | 9°C |
| Saint-Romain-des-Iles | 2 | 5 | 262° O | aucun | soleil-couvert | 0.9 | 9°C |
| Nord du Pont d'Arciat | 2 | 5 | 262° O | aucun | soleil-couvert | 0.9 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 69° ENE | aucun | pluie | 1.9 | 9°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 207° SSO | aucun | pluie | 1.2 | 9°C |
| Plage d'Excenevex | 8 | 14 | 210° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 7 | 12 | 207° SSO | aucun | pluie | 1.2 | 9°C |
| Plage d'Hermance | 7 | 12 | 207° SSO | aucun | pluie | 1.2 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 87° E | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 42° NE | aucun | pluie | 1.2 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 356° N | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 19 | 355° N | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 1° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 356° N | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 8 | 19 | 21° NNE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 62° ENE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 1 | 5 | 236° SO | aucun | couvert | 0.6 | 8°C |
| Nord du Pont d'Arciat | 1 | 5 | 236° SO | aucun | couvert | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 350° N | aucun | couvert | 0.0 | 8°C |
