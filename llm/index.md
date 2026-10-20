# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 20/10/2026 22:43 (Europe/Paris)
- Fichiers générés le : 2026-10-20T22:47:53+02:00
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

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 191° S | aucun | couvert | 0.1 | 14°C |
| Plage d'Excenevex | 5 | 7 | 53° NE | aucun | couvert | 0.1 | 14°C |
| Plage du Vengeron | 4 | 5 | 212° SSO | aucun | couvert | 0.7 | 14°C |
| Plage d'Hermance | 4 | 5 | 180° S | aucun | couvert | 0.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 339° NNO | aucun | couvert | 0.5 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 35° NE | aucun | pluie | 8.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 33 | 203° SSO | 08h-16h | orage | 19.3 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 16 | 223° SO | aucun | orage | 16.8 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 22 | 11° N | aucun | orage | 29.4 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 345° NNO | aucun | orage | 21.6 | 15°C |
| Cruas - Nuclear Spot | 6 | 11 | 28° NNE | aucun | orage | 39.1 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 14 | 10° N | aucun | orage | 18.6 | 15°C |
| Nord du Pont de Chavanay | 6 | 11 | 7° N | aucun | orage | 18.9 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 300° ONO | aucun | orage | 19.4 | 15°C |
| Saint-Cyr-sur-le-Rhône | 7 | 6 | 208° SSO | aucun | orage | 20.9 | 16°C |
| Saint-Romain-des-Iles | 6 | 11 | 360° N | aucun | orage | 21.0 | 13°C |
| Nord du Pont d'Arciat | 9 | 15 | 324° NO | aucun | orage | 19.8 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 5 | 108° ESE | aucun | orage | 21.9 | 13°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 32 | 222° SO | 08h-19h | pluie | 4.7 | 13°C |
| Plage d'Excenevex | 14 | 22 | 220° SO | 13h-18h | pluie | 3.2 | 13°C |
| Plage du Vengeron | 16 | 21 | 218° SO | 13h-20h | pluie | 4.2 | 13°C |
| Plage d'Hermance | 19 | 29 | 219° SO | 13h-19h | pluie | 3.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 12 | 305° NO | aucun | pluie | 9.7 | 13°C |
| Lac du Bourget - Cap des Séselets | 8 | 21 | 137° SE | aucun | orage | 7.8 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 16° NNE | aucun | pluie | 5.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 34° NE | aucun | pluie | 2.9 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 10 | 342° NNO | aucun | soleil-couvert | 0.5 | 14°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 141° SE | aucun | pluie | 1.9 | 14°C |
| Cruas - Nuclear Spot | 6 | 15 | 22° NNE | aucun | pluie | 0.8 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 147° SSE | aucun | soleil-couvert | 0.8 | 13°C |
| Nord du Pont de Chavanay | 6 | 12 | 164° SSE | aucun | couvert | 0.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 173° S | aucun | pluie | 2.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 201° SSO | aucun | pluie | 2.9 | 12°C |
| Saint-Romain-des-Iles | 10 | 16 | 185° S | aucun | pluie | 2.9 | 12°C |
| Nord du Pont d'Arciat | 11 | 17 | 188° S | aucun | pluie | 3.9 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 205° SSO | aucun | pluie | 3.7 | 13°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 11 | 224° SO | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 9 | 11 | 254° OSO | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 6 | 7 | 234° SO | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 6 | 9 | 212° SSO | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 66° ENE | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 40° NE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 19 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 348° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 4° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 345° NNO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 16 | 21° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 3 | 135° SE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 3 | 6 | 214° SO | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 114° ESE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 204° SSO | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 7 | 13 | 177° S | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 8 | 13 | 184° S | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 156° SSE | aucun | soleil | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 26 | 37 | 207° SSO | 10h-20h | pluie | 7.8 | 14°C |
| Plage d'Excenevex | 20 | 41 | 206° SSO | 11h-20h | orage | 11.2 | 13°C |
| Plage du Vengeron | 22 | 30 | 198° SSO | 11h-20h | pluie | 5.3 | 14°C |
| Plage d'Hermance | 21 | 32 | 205° SSO | 12h-19h | orage | 9.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 20 | 195° SSO | aucun | orage | 18.2 | 15°C |
| Lac du Bourget - Cap des Séselets | 8 | 17 | 259° O | aucun | orage | 10.9 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 32 | 181° S | 08h-12h | orage | 5.6 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 110° ESE | aucun | pluie | 2.8 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 173° S | aucun | pluie | 4.3 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 198° SSO | aucun | pluie | 3.2 | 16°C |
| Cruas - Nuclear Spot | 6 | 9 | 94° E | aucun | pluie | 4.5 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 181° S | 08h-13h | soleil-couvert | 0.5 | 16°C |
| Nord du Pont de Chavanay | 14 | 24 | 181° S | 08h-13h | soleil-couvert | 0.5 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 28 | 185° S | aucun | pluie | 0.8 | 16°C |
| Saint-Cyr-sur-le-Rhône | 14 | 28 | 185° S | aucun | pluie | 0.8 | 16°C |
| Saint-Romain-des-Iles | 12 | 22 | 189° S | 09h-16h | pluie | 1.2 | 15°C |
| Nord du Pont d'Arciat | 12 | 22 | 189° S | 09h-16h | pluie | 1.2 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 32 | 188° S | 08h-11h | pluie | 0.7 | 15°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 213° SSO | 08h-12h | pluie | 0.7 | 11°C |
| Plage d'Excenevex | 13 | 19 | 211° SSO | aucun | soleil-couvert | 0.4 | 11°C |
| Plage du Vengeron | 16 | 21 | 207° SSO | 09h-12h | pluie | 2.6 | 12°C |
| Plage d'Hermance | 11 | 17 | 209° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 13 | 36° NE | aucun | pluie | 4.8 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 218° SO | aucun | soleil-couvert | 0.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 12° NNE | aucun | orage | 6.6 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 360° N | aucun | soleil-couvert | 0.8 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 31° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 8 | 16 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 5° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 5 | 12 | 5° N | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 54° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 54° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 6 | 16 | 249° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 6 | 16 | 249° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 5 | 61° ENE | aucun | soleil-couvert | 0.0 | 13°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 24 | 239° OSO | 08h-15h | orage | 24.9 | 15°C |
| Plage d'Excenevex | 14 | 20 | 245° OSO | 08h-15h | pluie | 12.3 | 15°C |
| Plage du Vengeron | 12 | 16 | 220° SO | 12h-15h | pluie | 7.3 | 15°C |
| Plage d'Hermance | 13 | 20 | 240° OSO | 08h-15h | orage | 20.3 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 13 | 132° SE | aucun | orage | 17.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 195° SSO | aucun | pluie | 15.7 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 158° SSE | aucun | orage | 40.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 194° SSO | aucun | orage | 23.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 190° S | aucun | pluie | 1.8 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 193° SSO | aucun | pluie | 1.2 | 13°C |
| Cruas - Nuclear Spot | 6 | 14 | 172° S | aucun | couvert | 0.3 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 154° SSE | aucun | pluie | 2.8 | 12°C |
| Nord du Pont de Chavanay | 10 | 23 | 154° SSE | aucun | pluie | 2.8 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 25 | 164° SSE | 08h-17h | pluie | 1.3 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 158° SSE | aucun | pluie | 2.7 | 12°C |
| Saint-Romain-des-Iles | 8 | 20 | 180° S | aucun | pluie | 12.8 | 13°C |
| Nord du Pont d'Arciat | 8 | 20 | 180° S | aucun | pluie | 12.8 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 21 | 191° S | 13h-17h | pluie | 3.4 | 12°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 254° OSO | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 5 | 9 | 254° OSO | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 5 | 9 | 254° OSO | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 5 | 9 | 254° OSO | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 133° SE | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 14° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 332° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 17° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 2° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 351° N | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 10 | 24 | 11° N | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 13 | 36° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 4 | 13 | 36° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 4 | 283° ONO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 19° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 4 | 8 | 156° SSE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 8 | 156° SSE | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 338° NNO | aucun | soleil-couvert | 0.0 | 13°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 270° O | aucun | pluie | 2.1 | 17°C |
| Plage d'Excenevex | 4 | 7 | 270° O | aucun | pluie | 2.1 | 17°C |
| Plage du Vengeron | 4 | 7 | 270° O | aucun | pluie | 2.1 | 17°C |
| Plage d'Hermance | 4 | 7 | 270° O | aucun | pluie | 2.1 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 118° ESE | aucun | soleil-couvert | 0.3 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 43° NE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 323° NO | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 9° N | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 355° N | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 347° NNO | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 10 | 22 | 14° NNE | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 21° NNE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 7 | 17 | 21° NNE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 17° NNE | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 14° NNE | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 4 | 9 | 297° ONO | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 4 | 9 | 297° ONO | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 358° N | aucun | soleil | 0.0 | 18°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 31° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 4 | 8 | 55° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 5 | 9 | 31° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 5 | 9 | 31° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 265° O | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 20° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 198° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 216° SO | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 174° S | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 183° S | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 4 | 10 | 196° SSO | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 11 | 180° S | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 5 | 11 | 180° S | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 146° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 184° S | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 4 | 10 | 156° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 10 | 156° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 127° SE | aucun | soleil-couvert | 0.0 | 14°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 26° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 6 | 10 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 6 | 9 | 26° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 6 | 9 | 26° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 315° NO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 34° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 1° N | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 354° N | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 4° N | 13h-20h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 359° N | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 11 | 25 | 14° NNE | 13h-18h | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 21° NNE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 6 | 15 | 21° NNE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 41° NE | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 16° NNE | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 3 | 9 | 349° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 3 | 9 | 349° N | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 347° NNO | aucun | soleil-couvert | 0.0 | 17°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 15 | 44° NE | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 8 | 13 | 31° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 8 | 15 | 44° NE | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 8 | 15 | 44° NE | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 313° NO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 32° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 344° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 231° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 2° N | 11h-20h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 354° N | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 11 | 23 | 19° NNE | 08h-12h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 21° NNE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 14 | 21° NNE | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 13° NNE | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 19° NNE | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 10 | 348° NNO | aucun | couvert | 0.6 | 12°C |
| Nord du Pont d'Arciat | 4 | 10 | 348° NNO | aucun | couvert | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 323° NO | aucun | soleil-couvert | 0.0 | 12°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 20° NNE | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 10 | 15 | 20° NNE | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 10 | 15 | 20° NNE | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 10 | 15 | 20° NNE | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 336° NNO | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 37° NE | aucun | couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 8° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 9° N | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 6° N | 09h-20h | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 5° N | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 12 | 27 | 24° NNE | 08h-20h | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 1° N | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 8 | 18 | 1° N | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 350° N | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 354° N | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 8 | 15 | 12° NNE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 8 | 15 | 12° NNE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 331° NNO | aucun | couvert | 0.0 | 11°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 64° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 9 | 15 | 29° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 9 | 14 | 64° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 9 | 14 | 64° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 337° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 28° NNE | aucun | couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 360° N | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 339° NNO | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 9° N | 09h-20h | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 7° N | 11h-19h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 15 | 32 | 16° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 358° N | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 9 | 21 | 358° N | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 341° NNO | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 354° N | aucun | couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 9 | 17 | 5° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 9 | 17 | 5° N | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 19 | 341° NNO | aucun | soleil-couvert | 0.0 | 11°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 187° S | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 3 | 6 | 214° SO | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 5 | 8 | 187° S | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 5 | 8 | 187° S | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 270° O | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 242° OSO | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 10° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 9° N | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 6° N | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 358° N | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 11 | 24 | 10° N | 17h-20h | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 21° NNE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 14 | 21° NNE | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 41° NE | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 20° NNE | aucun | couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 2 | 8 | 289° ONO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 8 | 289° ONO | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 354° N | aucun | couvert | 0.0 | 11°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 218° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 13 | 18 | 223° SO | 12h-20h | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 10 | 14 | 218° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 10 | 14 | 218° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 270° O | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 239° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 342° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 338° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 354° N | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 10 | 24 | 2° N | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 103° ESE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 3 | 8 | 103° ESE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 121° ESE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 215° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 8 | 178° S | aucun | soleil-couvert | 0.6 | 13°C |
| Nord du Pont d'Arciat | 4 | 8 | 178° S | aucun | soleil-couvert | 0.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 141° SE | aucun | soleil-couvert | 0.6 | 13°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 20 | 208° SSO | aucun | pluie | 0.7 | 10°C |
| Plage d'Excenevex | 12 | 25 | 219° SO | 08h-14h | pluie | 0.5 | 10°C |
| Plage du Vengeron | 9 | 20 | 208° SSO | aucun | pluie | 0.7 | 10°C |
| Plage d'Hermance | 9 | 20 | 208° SSO | aucun | pluie | 0.7 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 309° NO | aucun | pluie | 1.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 321° NO | aucun | pluie | 0.7 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 32 | 345° NNO | aucun | pluie | 2.3 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 32 | 345° NNO | aucun | pluie | 2.1 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 33 | 2° N | aucun | soleil-couvert | 0.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 15 | 30 | 360° N | aucun | soleil-couvert | 0.1 | 12°C |
| Cruas - Nuclear Spot | 15 | 33 | 3° N | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 346° NNO | 11h-14h | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 11 | 25 | 346° NNO | 11h-14h | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 334° NNO | 08h-14h | soleil-couvert | 0.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 12 | 23 | 341° NNO | 08h-14h | soleil-couvert | 0.4 | 11°C |
| Saint-Romain-des-Iles | 12 | 22 | 307° NO | 08h-14h | soleil | 0.9 | 10°C |
| Nord du Pont d'Arciat | 12 | 22 | 307° NO | 08h-14h | soleil | 0.9 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 330° NNO | 08h-12h | pluie | 0.5 | 11°C |
