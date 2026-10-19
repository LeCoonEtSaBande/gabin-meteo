# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 19/10/2026 12:58 (Europe/Paris)
- Fichiers générés le : 2026-10-19T13:03:27+02:00
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

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 22 | 38° NE | 08h-20h | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 15 | 22 | 24° NNE | 08h-13h | couvert | 0.0 | 14°C |
| Plage du Vengeron | 14 | 18 | 49° NE | 08h-14h | couvert | 0.0 | 14°C |
| Plage d'Hermance | 16 | 21 | 38° NE | 08h-14h | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 314° NO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 10 | 15 | 349° N | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 21 | 206° SSO | aucun | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 353° N | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 25° NNE | aucun | pluie | 5.5 | 14°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 358° N | aucun | pluie | 4.1 | 14°C |
| Cruas - Nuclear Spot | 10 | 19 | 22° NNE | aucun | pluie | 11.1 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 17° NNE | aucun | pluie | 2.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 7 | 28° NNE | aucun | pluie | 1.8 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 298° ONO | aucun | couvert | 0.7 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 9° N | aucun | couvert | 0.8 | 13°C |
| Saint-Romain-des-Iles | 4 | 8 | 38° NE | aucun | couvert | 0.3 | 13°C |
| Nord du Pont d'Arciat | 4 | 6 | 2° N | aucun | couvert | 0.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 5 | 18° NNE | aucun | couvert | 0.0 | 13°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 224° SO | aucun | pluie | 1.3 | 14°C |
| Plage d'Excenevex | 10 | 15 | 35° NE | aucun | pluie | 1.1 | 14°C |
| Plage du Vengeron | 6 | 8 | 233° SO | aucun | pluie | 1.7 | 14°C |
| Plage d'Hermance | 6 | 7 | 221° SO | aucun | pluie | 1.7 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 16 | 3° N | aucun | pluie | 3.2 | 15°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 13° NNE | aucun | pluie | 1.7 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 30 | 207° SSO | 08h-18h | orage | 15.4 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 18 | 224° SO | aucun | orage | 10.2 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 9° N | aucun | orage | 69.2 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 338° NNO | aucun | orage | 60.8 | 15°C |
| Cruas - Nuclear Spot | 8 | 14 | 25° NNE | aucun | orage | 82.3 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 19 | 355° N | aucun | orage | 38.0 | 15°C |
| Nord du Pont de Chavanay | 9 | 20 | 321° NO | aucun | orage | 37.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 161° SSE | aucun | orage | 24.3 | 14°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 225° SO | aucun | orage | 28.6 | 15°C |
| Saint-Romain-des-Iles | 16 | 28 | 307° NO | aucun | orage | 22.6 | 15°C |
| Nord du Pont d'Arciat | 16 | 27 | 310° NO | aucun | orage | 21.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 316° NO | aucun | orage | 23.8 | 14°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 212° SSO | 08h-20h | pluie | 1.4 | 14°C |
| Plage d'Excenevex | 13 | 17 | 215° SO | 11h-18h | pluie | 2.0 | 14°C |
| Plage du Vengeron | 15 | 21 | 214° SO | 11h-18h | pluie | 1.3 | 15°C |
| Plage d'Hermance | 14 | 21 | 234° SO | 12h-18h | pluie | 1.2 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 11 | 217° SO | aucun | pluie | 2.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 229° SO | aucun | pluie | 6.4 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 24° NNE | aucun | couvert | 0.5 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 16° NNE | aucun | soleil-couvert | 0.1 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 14 | 341° NNO | aucun | pluie | 3.5 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 9 | 319° NO | aucun | pluie | 5.1 | 12°C |
| Cruas - Nuclear Spot | 7 | 16 | 355° N | aucun | pluie | 1.7 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 139° SE | aucun | pluie | 5.2 | 11°C |
| Nord du Pont de Chavanay | 6 | 13 | 139° SE | aucun | pluie | 5.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 9 | 166° SSE | aucun | pluie | 3.8 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 9 | 166° SSE | aucun | pluie | 3.8 | 11°C |
| Saint-Romain-des-Iles | 10 | 16 | 182° S | aucun | pluie | 2.6 | 11°C |
| Nord du Pont d'Arciat | 10 | 16 | 182° S | aucun | pluie | 2.6 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 12 | 192° SSO | aucun | pluie | 4.8 | 11°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 222° SO | 10h-19h | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 12 | 16 | 235° SO | 11h-17h | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 12 | 16 | 221° SO | 13h-18h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 13 | 19 | 227° SO | 13h-18h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 79° E | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 54° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 15 | 37° NE | aucun | soleil | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 7° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 14 | 8° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 10 | 6° N | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 16 | 3° N | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 5 | 177° S | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 5 | 177° S | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 8 | 14 | 173° S | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 8 | 14 | 173° S | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 139° SE | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 30 | 44 | 211° SSO | 08h-20h | pluie | 9.2 | 14°C |
| Plage d'Excenevex | 24 | 32 | 210° SSO | 08h-20h | orage | 10.5 | 14°C |
| Plage du Vengeron | 22 | 32 | 204° SSO | 09h-20h | pluie | 5.7 | 15°C |
| Plage d'Hermance | 24 | 38 | 208° SSO | 10h-20h | orage | 3.8 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 19 | 211° SSO | 12h-15h | pluie | 2.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 7 | 17 | 238° OSO | aucun | pluie | 9.9 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 19 | 36 | 166° SSE | 08h-12h | orage | 4.5 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 24 | 143° SE | 08h-11h | soleil-couvert | 0.5 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 16 | 213° SSO | aucun | soleil-couvert | 0.3 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 20 | 201° SSO | 08h-12h | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 6 | 25 | 248° OSO | aucun | soleil-couvert | 0.3 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 22 | 184° S | 09h-14h | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 13 | 22 | 184° S | 09h-14h | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 183° S | 08h-13h | pluie | 0.6 | 16°C |
| Saint-Cyr-sur-le-Rhône | 13 | 26 | 183° S | 08h-13h | pluie | 0.6 | 16°C |
| Saint-Romain-des-Iles | 16 | 30 | 249° OSO | 14h-18h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 16 | 30 | 249° OSO | 14h-18h | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 30 | 192° SSO | 08h-15h | pluie | 1.0 | 16°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 210° SSO | 09h-20h | pluie | 1.2 | 13°C |
| Plage d'Excenevex | 16 | 20 | 205° SSO | 09h-20h | pluie | 1.2 | 13°C |
| Plage du Vengeron | 14 | 19 | 205° SSO | 09h-20h | pluie | 1.2 | 13°C |
| Plage d'Hermance | 14 | 22 | 236° SO | 09h-20h | pluie | 1.2 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 139° SE | aucun | couvert | 0.2 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 16 | 193° SSO | aucun | pluie | 14.1 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 317° NO | aucun | pluie | 1.2 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 166° SSE | aucun | pluie | 1.6 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 172° S | aucun | pluie | 1.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 174° S | aucun | pluie | 1.5 | 13°C |
| Cruas - Nuclear Spot | 4 | 10 | 197° SSO | aucun | couvert | 0.6 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 21 | 157° SSE | aucun | pluie | 7.0 | 12°C |
| Nord du Pont de Chavanay | 7 | 21 | 157° SSE | aucun | pluie | 7.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 16 | 176° S | aucun | pluie | 11.2 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 21 | 160° SSE | aucun | pluie | 5.8 | 11°C |
| Saint-Romain-des-Iles | 7 | 12 | 222° SO | aucun | pluie | 7.8 | 12°C |
| Nord du Pont d'Arciat | 7 | 12 | 222° SO | aucun | pluie | 7.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 210° SSO | aucun | pluie | 7.3 | 10°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 26 | 216° SO | 08h-20h | pluie | 15.7 | 16°C |
| Plage d'Excenevex | 16 | 26 | 216° SO | 08h-20h | pluie | 15.7 | 16°C |
| Plage du Vengeron | 16 | 26 | 216° SO | 08h-20h | pluie | 15.7 | 16°C |
| Plage d'Hermance | 16 | 26 | 216° SO | 08h-20h | pluie | 15.7 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 160° SSE | aucun | pluie | 21.6 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 196° SSO | aucun | pluie | 11.6 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 15 | 149° SSE | aucun | orage | 36.9 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 182° S | aucun | orage | 26.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 29 | 173° S | 08h-13h | pluie | 3.3 | 16°C |
| La Roche-de-Glun - Base Nautique | 14 | 32 | 186° S | 08h-14h | pluie | 2.8 | 16°C |
| Cruas - Nuclear Spot | 9 | 22 | 174° S | aucun | pluie | 4.2 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 34 | 163° SSE | 08h-15h | pluie | 1.8 | 15°C |
| Nord du Pont de Chavanay | 14 | 34 | 163° SSE | 08h-15h | pluie | 1.8 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 32 | 173° S | 08h-15h | pluie | 1.6 | 16°C |
| Saint-Cyr-sur-le-Rhône | 14 | 35 | 165° SSE | 08h-14h | pluie | 1.2 | 15°C |
| Saint-Romain-des-Iles | 12 | 29 | 176° S | aucun | pluie | 9.8 | 14°C |
| Nord du Pont d'Arciat | 12 | 29 | 176° S | aucun | pluie | 9.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 32 | 183° S | 08h-15h | pluie | 8.5 | 16°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 226° SO | 08h-13h | couvert | 0.8 | 12°C |
| Plage d'Excenevex | 11 | 18 | 226° SO | 08h-13h | couvert | 0.8 | 12°C |
| Plage du Vengeron | 11 | 18 | 226° SO | 08h-13h | couvert | 0.8 | 12°C |
| Plage d'Hermance | 11 | 18 | 226° SO | 08h-13h | couvert | 0.8 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 142° SE | aucun | pluie | 2.4 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 48° NE | aucun | pluie | 1.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 355° N | aucun | pluie | 3.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 353° N | aucun | pluie | 3.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 21 | 353° N | aucun | couvert | 0.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 18 | 346° NNO | aucun | couvert | 0.6 | 11°C |
| Cruas - Nuclear Spot | 7 | 19 | 350° N | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 147° SSE | aucun | pluie | 1.2 | 10°C |
| Nord du Pont de Chavanay | 3 | 7 | 147° SSE | aucun | pluie | 1.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 167° SSE | aucun | pluie | 2.4 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 157° SSE | aucun | pluie | 1.8 | 10°C |
| Saint-Romain-des-Iles | 7 | 12 | 186° S | aucun | pluie | 1.8 | 10°C |
| Nord du Pont d'Arciat | 7 | 12 | 186° S | aucun | pluie | 1.8 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 135° SE | aucun | pluie | 1.8 | 10°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 216° SO | aucun | pluie | 1.2 | 16°C |
| Plage d'Excenevex | 3 | 6 | 160° SSE | aucun | soleil-couvert | 0.6 | 16°C |
| Plage du Vengeron | 4 | 8 | 216° SO | aucun | pluie | 1.2 | 16°C |
| Plage d'Hermance | 4 | 8 | 216° SO | aucun | pluie | 1.2 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 237° OSO | aucun | soleil | 0.6 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 19° NNE | aucun | soleil | 0.6 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 163° SSE | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 165° SSE | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 348° NNO | aucun | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 341° NNO | aucun | soleil | 0.0 | 20°C |
| Cruas - Nuclear Spot | 3 | 8 | 347° NNO | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 144° SE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 2 | 8 | 144° SE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 137° SE | aucun | soleil | 0.2 | 19°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 140° SE | aucun | soleil | 0.1 | 19°C |
| Saint-Romain-des-Iles | 4 | 8 | 183° S | aucun | soleil-couvert | 0.2 | 18°C |
| Nord du Pont d'Arciat | 4 | 8 | 183° S | aucun | soleil-couvert | 0.2 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 143° SE | aucun | soleil | 0.1 | 19°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 6 | 12° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 4 | 7 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 4 | 7 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 247° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 242° OSO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 171° S | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 155° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 188° S | aucun | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 187° S | aucun | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 6 | 14 | 198° SSO | aucun | couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 164° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 18 | 164° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 176° S | aucun | couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 172° S | aucun | couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 3 | 8 | 191° S | aucun | couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 3 | 8 | 191° S | aucun | couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 18 | 191° S | aucun | soleil-couvert | 0.0 | 18°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 133° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 2 | 6 | 12° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 4 | 7 | 133° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 4 | 7 | 133° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 279° O | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 113° ESE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 352° N | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 1° N | 13h-16h | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 9 | 22 | 15° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 23° NNE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 5 | 14 | 23° NNE | aucun | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 57° ENE | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 25° NNE | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 1 | 5 | 288° ONO | aucun | couvert | 0.6 | 16°C |
| Nord du Pont d'Arciat | 1 | 5 | 288° ONO | aucun | couvert | 0.6 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 350° N | aucun | couvert | 0.0 | 16°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 25° NNE | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 4 | 8 | 42° NE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 5 | 9 | 25° NNE | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 5 | 9 | 25° NNE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 279° O | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 32° NNE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 189° S | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 205° SSO | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 182° S | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 182° S | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 4 | 10 | 356° N | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 158° SSE | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 3 | 10 | 158° SSE | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 151° SSE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 158° SSE | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 5 | 11 | 160° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 5 | 11 | 160° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 168° SSE | aucun | soleil-couvert | 0.0 | 14°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 357° N | aucun | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 7 | 27° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 4 | 6 | 357° N | aucun | soleil | 0.0 | 15°C |
| Plage d'Hermance | 4 | 6 | 357° N | aucun | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 321° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 36° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 350° N | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 346° NNO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 4° N | 14h-20h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 355° N | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 11 | 25 | 17° NNE | 13h-18h | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 14° NNE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 6 | 15 | 14° NNE | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 344° NNO | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 6° N | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 4 | 12 | 317° NO | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 4 | 12 | 317° NO | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 345° NNO | aucun | soleil | 0.0 | 16°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 42° NE | aucun | pluie | 3.0 | 12°C |
| Plage d'Excenevex | 10 | 15 | 18° NNE | aucun | pluie | 2.4 | 12°C |
| Plage du Vengeron | 8 | 12 | 42° NE | aucun | pluie | 3.0 | 12°C |
| Plage d'Hermance | 8 | 12 | 42° NE | aucun | pluie | 3.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 19 | 12° NNE | aucun | pluie | 1.2 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 8° N | aucun | pluie | 1.2 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 20 | 349° N | aucun | pluie | 1.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 344° NNO | aucun | pluie | 1.2 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 35 | 4° N | 08h-20h | couvert | 0.7 | 13°C |
| La Roche-de-Glun - Base Nautique | 15 | 29 | 358° N | 08h-20h | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 17 | 38 | 11° N | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 27 | 347° NNO | 08h-20h | couvert | 0.1 | 12°C |
| Nord du Pont de Chavanay | 13 | 27 | 347° NNO | 08h-20h | couvert | 0.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 343° NNO | 11h-20h | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 343° NNO | 09h-20h | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 11 | 20 | 340° NNO | 08h-20h | couvert | 0.7 | 12°C |
| Nord du Pont d'Arciat | 11 | 20 | 340° NNO | 08h-20h | couvert | 0.7 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 23 | 340° NNO | 08h-15h | couvert | 0.0 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 48° NE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 15 | 21 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 13 | 19 | 48° NE | 08h-20h | soleil | 0.0 | 10°C |
| Plage d'Hermance | 13 | 19 | 48° NE | 08h-20h | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 20 | 8° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 7 | 21 | 35° NE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 16 | 348° NNO | aucun | couvert | 0.1 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 17 | 339° NNO | aucun | couvert | 0.7 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 6° N | 08h-20h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 15 | 31 | 1° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 17 | 38 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 27 | 356° N | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 13 | 27 | 356° N | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 352° N | 08h-18h | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 353° N | 09h-19h | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 11 | 20 | 4° N | 12h-17h | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 11 | 20 | 4° N | 12h-17h | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 24 | 357° N | 08h-19h | soleil-couvert | 0.0 | 9°C |
