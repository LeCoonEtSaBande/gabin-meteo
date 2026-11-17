# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 18/11/2026 00:53 (Europe/Paris)
- Fichiers générés le : 2026-11-18T00:56:56+01:00
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

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 29 | 204° SSO | 08h-20h | pluie | 8.3 | 12°C |
| Plage d'Excenevex | 15 | 22 | 216° SO | 08h-17h | pluie | 6.1 | 12°C |
| Plage du Vengeron | 14 | 19 | 200° SSO | 08h-20h | pluie | 3.0 | 12°C |
| Plage d'Hermance | 18 | 26 | 211° SSO | 08h-20h | pluie | 6.7 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 14 | 238° OSO | aucun | pluie | 4.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 141° SE | aucun | pluie | 6.5 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 75° ENE | aucun | couvert | 0.2 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 18 | 30° NNE | aucun | soleil-couvert | 0.6 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 207° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 11 | 172° S | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 7 | 13 | 221° SO | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 192° SSO | aucun | soleil-couvert | 0.4 | 16°C |
| Nord du Pont de Chavanay | 4 | 6 | 186° S | aucun | pluie | 0.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 177° S | aucun | soleil-couvert | 0.1 | 16°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 216° SO | aucun | soleil-couvert | 0.4 | 16°C |
| Saint-Romain-des-Iles | 10 | 16 | 226° SO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 10 | 17 | 201° SSO | aucun | soleil-couvert | 0.1 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 19 | 255° OSO | aucun | pluie | 0.6 | 16°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 32 | 218° SO | 08h-20h | pluie | 2.7 | 12°C |
| Plage d'Excenevex | 19 | 28 | 221° SO | 08h-20h | pluie | 2.7 | 11°C |
| Plage du Vengeron | 19 | 29 | 209° SSO | 08h-20h | pluie | 1.4 | 12°C |
| Plage d'Hermance | 19 | 29 | 213° SSO | 08h-20h | pluie | 1.8 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 19 | 249° OSO | aucun | pluie | 2.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 162° SSE | aucun | pluie | 3.4 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 56° NE | aucun | pluie | 2.3 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 49° NE | aucun | pluie | 1.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 14 | 208° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 165° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 6 | 11 | 206° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 195° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 8 | 14 | 190° S | aucun | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 203° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 191° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 15 | 24 | 261° O | aucun | pluie | 1.3 | 12°C |
| Nord du Pont d'Arciat | 15 | 25 | 259° O | aucun | pluie | 1.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 20 | 211° SSO | aucun | couvert | 0.2 | 14°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 28 | 208° SSO | 08h-20h | pluie | 1.0 | 11°C |
| Plage d'Excenevex | 18 | 24 | 209° SSO | 08h-20h | soleil-couvert | 0.4 | 11°C |
| Plage du Vengeron | 16 | 21 | 206° SSO | 08h-20h | pluie | 2.2 | 12°C |
| Plage d'Hermance | 16 | 24 | 214° SO | 08h-20h | couvert | 0.5 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 134° SE | aucun | pluie | 5.5 | 11°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 150° SSE | aucun | pluie | 3.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 150° SSE | aucun | pluie | 1.8 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 147° SSE | aucun | pluie | 1.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 191° S | aucun | pluie | 1.9 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 19 | 197° SSO | 08h-16h | pluie | 1.3 | 12°C |
| Cruas - Nuclear Spot | 5 | 10 | 193° SSO | aucun | couvert | 0.4 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 24 | 160° SSE | 11h-15h | pluie | 1.9 | 12°C |
| Nord du Pont de Chavanay | 12 | 24 | 160° SSE | 11h-15h | pluie | 1.9 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 179° S | 09h-15h | pluie | 1.5 | 11°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 179° S | 09h-15h | pluie | 1.5 | 11°C |
| Saint-Romain-des-Iles | 9 | 21 | 174° S | aucun | pluie | 1.8 | 14°C |
| Nord du Pont d'Arciat | 9 | 21 | 174° S | aucun | pluie | 1.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 20 | 192° SSO | 11h-15h | pluie | 2.2 | 11°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 220° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 10 | 16 | 216° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 11 | 16 | 205° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 8 | 11 | 220° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 63° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 338° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 15 | 30° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 349° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 6 | 195° SSO | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 4 | 163° SSE | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 4 | 4 | 37° NE | aucun | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 8 | 130° SE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 8 | 130° SE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 13 | 170° S | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 13 | 170° S | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 4 | 6 | 205° SSO | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 6 | 205° SSO | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 4 | 77° ENE | aucun | couvert | 0.0 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 23 | 196° SSO | 17h-20h | orage | 9.0 | 8°C |
| Plage d'Excenevex | 15 | 20 | 201° SSO | 17h-20h | pluie | 7.9 | 8°C |
| Plage du Vengeron | 15 | 20 | 201° SSO | aucun | orage | 18.4 | 8°C |
| Plage d'Hermance | 12 | 18 | 193° SSO | aucun | orage | 17.8 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 274° O | aucun | orage | 23.5 | 10°C |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 268° O | aucun | orage | 32.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 178° S | aucun | orage | 29.6 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 17 | 348° NNO | aucun | pluie | 14.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 16 | 169° S | aucun | pluie | 4.8 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 14 | 182° S | aucun | pluie | 4.5 | 12°C |
| Cruas - Nuclear Spot | 4 | 12 | 188° S | aucun | pluie | 4.2 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 12 | 139° SE | aucun | pluie | 6.6 | 10°C |
| Nord du Pont de Chavanay | 3 | 12 | 139° SE | aucun | pluie | 6.6 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 283° ONO | aucun | pluie | 6.9 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 155° SSE | aucun | pluie | 5.7 | 10°C |
| Saint-Romain-des-Iles | 12 | 21 | 279° O | aucun | pluie | 9.7 | 9°C |
| Nord du Pont d'Arciat | 12 | 21 | 279° O | aucun | pluie | 9.7 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 271° O | aucun | pluie | 9.3 | 9°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 246° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 5 | 8 | 246° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 5 | 8 | 246° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 5 | 8 | 246° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 288° ONO | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 310° NO | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 14 | 332° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 14 | 350° N | aucun | couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 12° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 10° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 22 | 20° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 61° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 37° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 6 | 297° ONO | aucun | couvert | 0.6 | 10°C |
| Nord du Pont d'Arciat | 2 | 6 | 297° ONO | aucun | couvert | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 90° E | aucun | soleil-couvert | 0.0 | 10°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 356° N | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 8 | 356° N | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 5 | 8 | 356° N | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 5 | 8 | 356° N | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 112° ESE | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 113° ESE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 18 | 151° SSE | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 15 | 196° SSO | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 182° S | aucun | couvert | 0.1 | 11°C |
| La Roche-de-Glun - Base Nautique | 2 | 9 | 171° S | aucun | couvert | 0.1 | 10°C |
| Cruas - Nuclear Spot | 2 | 5 | 347° NNO | aucun | pluie | 1.5 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 153° SSE | aucun | couvert | 0.1 | 9°C |
| Nord du Pont de Chavanay | 4 | 11 | 153° SSE | aucun | couvert | 0.1 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 162° SSE | aucun | pluie | 2.2 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 160° SSE | aucun | pluie | 0.6 | 9°C |
| Saint-Romain-des-Iles | 3 | 8 | 147° SSE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 8 | 147° SSE | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 117° ESE | aucun | couvert | 0.2 | 8°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 212° SSO | aucun | couvert | 0.1 | 10°C |
| Plage d'Excenevex | 3 | 5 | 207° SSO | aucun | soleil-couvert | 0.1 | 10°C |
| Plage du Vengeron | 4 | 7 | 212° SSO | aucun | couvert | 0.1 | 10°C |
| Plage d'Hermance | 4 | 7 | 212° SSO | aucun | couvert | 0.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 173° S | aucun | couvert | 0.2 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 221° SO | aucun | soleil-couvert | 0.1 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 202° SSO | aucun | pluie | 1.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 199° SSO | aucun | pluie | 1.2 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 182° S | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 187° S | aucun | pluie | 1.2 | 10°C |
| Cruas - Nuclear Spot | 4 | 11 | 188° S | aucun | soleil-couvert | 0.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 189° S | aucun | pluie | 1.8 | 9°C |
| Nord du Pont de Chavanay | 4 | 11 | 189° S | aucun | pluie | 1.8 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 170° S | aucun | pluie | 1.8 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 175° S | aucun | pluie | 1.8 | 9°C |
| Saint-Romain-des-Iles | 5 | 10 | 152° SSE | aucun | pluie | 1.8 | 9°C |
| Nord du Pont d'Arciat | 5 | 10 | 152° SSE | aucun | pluie | 1.8 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 182° S | aucun | pluie | 2.5 | 8°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 32° NNE | aucun | pluie | 1.3 | 6°C |
| Plage d'Excenevex | 7 | 10 | 25° NNE | aucun | pluie | 3.1 | 6°C |
| Plage du Vengeron | 5 | 9 | 32° NNE | aucun | pluie | 1.3 | 6°C |
| Plage d'Hermance | 5 | 9 | 32° NNE | aucun | pluie | 1.3 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 51° NE | aucun | pluie | 1.8 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 18° NNE | aucun | soleil-couvert | 0.6 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 184° S | aucun | soleil-couvert | 0.6 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 14 | 336° NNO | aucun | soleil-couvert | 0.7 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 187° S | aucun | pluie | 6.1 | 8°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 188° S | aucun | pluie | 2.4 | 8°C |
| Cruas - Nuclear Spot | 7 | 14 | 24° NNE | aucun | pluie | 6.4 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 166° SSE | aucun | pluie | 4.2 | 7°C |
| Nord du Pont de Chavanay | 5 | 14 | 166° SSE | aucun | pluie | 4.2 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 327° NNO | aucun | pluie | 2.4 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 165° SSE | aucun | pluie | 3.6 | 7°C |
| Saint-Romain-des-Iles | 5 | 12 | 324° NO | aucun | couvert | 0.6 | 6°C |
| Nord du Pont d'Arciat | 5 | 12 | 324° NO | aucun | couvert | 0.6 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 351° N | aucun | couvert | 0.6 | 8°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 211° SSO | aucun | couvert | 0.1 | 8°C |
| Plage d'Excenevex | 5 | 9 | 11° N | aucun | couvert | 0.1 | 7°C |
| Plage du Vengeron | 6 | 10 | 211° SSO | aucun | couvert | 0.1 | 8°C |
| Plage d'Hermance | 6 | 10 | 211° SSO | aucun | couvert | 0.1 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 125° SE | aucun | couvert | 0.1 | 4°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 35° NE | aucun | couvert | 0.7 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 352° N | aucun | couvert | 0.7 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 23 | 347° NNO | aucun | couvert | 0.7 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 29 | 357° N | 08h-15h | couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 355° N | 08h-14h | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 13 | 28 | 11° N | 08h-15h | couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 335° NNO | aucun | couvert | 0.1 | 6°C |
| Nord du Pont de Chavanay | 8 | 20 | 335° NNO | aucun | couvert | 0.1 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 329° NNO | aucun | couvert | 0.1 | 6°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 327° NNO | aucun | couvert | 0.1 | 6°C |
| Saint-Romain-des-Iles | 8 | 18 | 318° NO | aucun | couvert | 0.2 | 6°C |
| Nord du Pont d'Arciat | 8 | 18 | 318° NO | aucun | couvert | 0.2 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 334° NNO | aucun | couvert | 0.1 | 6°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 211° SSO | 08h-15h | soleil-couvert | 0.6 | 8°C |
| Plage d'Excenevex | 13 | 19 | 223° SO | 08h-17h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 11 | 16 | 211° SSO | 08h-15h | soleil-couvert | 0.6 | 8°C |
| Plage d'Hermance | 11 | 16 | 211° SSO | 08h-15h | soleil-couvert | 0.6 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 208° SSO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 215° SO | aucun | soleil-couvert | 0.1 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 4° N | aucun | soleil-couvert | 0.6 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 360° N | aucun | soleil-couvert | 0.6 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 7 | 37° NE | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 92° E | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 3 | 10 | 330° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 140° SE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 3 | 8 | 140° SE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 178° S | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 155° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 6 | 12 | 185° S | aucun | soleil-couvert | 0.6 | 8°C |
| Nord du Pont d'Arciat | 6 | 12 | 185° S | aucun | soleil-couvert | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 176° S | aucun | soleil-couvert | 0.0 | 9°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 216° SO | aucun | pluie | 6.3 | 7°C |
| Plage d'Excenevex | 9 | 13 | 233° SO | aucun | pluie | 2.4 | 8°C |
| Plage du Vengeron | 9 | 13 | 216° SO | aucun | pluie | 6.3 | 7°C |
| Plage d'Hermance | 9 | 13 | 216° SO | aucun | pluie | 6.3 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 114° ESE | aucun | couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 243° OSO | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 4 | 143° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 147° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 174° S | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 158° SSE | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 1 | 6 | 254° OSO | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 148° SSE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 9 | 148° SSE | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 153° SSE | aucun | pluie | 1.8 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 161° SSE | aucun | couvert | 0.6 | 8°C |
| Saint-Romain-des-Iles | 4 | 8 | 182° S | aucun | couvert | 0.7 | 8°C |
| Nord du Pont d'Arciat | 4 | 8 | 182° S | aucun | couvert | 0.7 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 152° SSE | aucun | soleil-couvert | 0.6 | 8°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 243° OSO | aucun | pluie | 2.4 | 8°C |
| Plage d'Excenevex | 6 | 10 | 233° SO | aucun | pluie | 1.7 | 8°C |
| Plage du Vengeron | 8 | 13 | 243° OSO | aucun | pluie | 2.4 | 8°C |
| Plage d'Hermance | 8 | 13 | 243° OSO | aucun | pluie | 2.4 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 134° SE | aucun | pluie | 5.4 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 286° ONO | aucun | pluie | 5.3 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 174° S | aucun | pluie | 10.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 167° SSE | aucun | pluie | 5.7 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 193° SSO | aucun | pluie | 5.1 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 198° SSO | 10h-15h | pluie | 2.4 | 9°C |
| Cruas - Nuclear Spot | 3 | 9 | 254° OSO | aucun | pluie | 4.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 25 | 179° S | 10h-17h | pluie | 4.4 | 9°C |
| Nord du Pont de Chavanay | 12 | 25 | 179° S | 10h-17h | pluie | 4.4 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 28 | 174° S | 08h-17h | pluie | 3.8 | 10°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 174° S | 09h-17h | pluie | 4.1 | 9°C |
| Saint-Romain-des-Iles | 9 | 15 | 187° S | aucun | pluie | 6.6 | 9°C |
| Nord du Pont d'Arciat | 9 | 15 | 187° S | aucun | pluie | 6.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 27 | 183° S | 10h-16h | pluie | 2.7 | 10°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 199° SSO | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 5 | 12 | 160° SSE | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 6 | 7 | 199° SSO | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 6 | 7 | 199° SSO | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 180° S | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 254° OSO | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 167° SSE | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 170° S | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 202° SSO | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 206° SSO | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 2 | 7 | 318° NO | aucun | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 193° SSO | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 10 | 193° SSO | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 189° S | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 184° S | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 6 | 208° SSO | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 6 | 208° SSO | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 144° SE | aucun | couvert | 0.0 | 8°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 27° NNE | aucun | couvert | 0.0 |  |
| Plage d'Excenevex | 4 | 7 | 69° ENE | aucun | couvert | 0.0 |  |
| Plage du Vengeron | 3 | 5 | 27° NNE | aucun | couvert | 0.0 |  |
| Plage d'Hermance | 3 | 5 | 27° NNE | aucun | couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 105° ESE | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 14° NNE | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 153° SSE | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 189° S | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 169° S | aucun | couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 185° S | aucun | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 2 | 7 | 219° SO | aucun | couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 167° SSE | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 8 | 18 | 167° SSE | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 169° S | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 162° SSE | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 5 | 9 | 180° S | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 5 | 9 | 180° S | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 161° SSE | aucun | couvert | 0.0 |  |
