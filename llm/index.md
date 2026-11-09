# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 08/11/2026 22:15 (Europe/Paris)
- Fichiers générés le : 2026-11-09T08:11:04+01:00
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

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 207° SSO | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 3 | 5 | 237° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 3 | 5 | 18° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 5 | 218° SO | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 354° N | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 188° S | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 20 | 196° SSO | 13h-18h | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 16 | 200° SSO | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 10 | 194° SSO | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 14 | 171° S | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 8 | 192° SSO | aucun | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 18 | 169° S | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 9 | 17 | 165° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 173° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 196° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 4 | 25° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 5 | 185° S | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 17 | 185° S | aucun | soleil-couvert | 0.0 | 12°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 55° NE | aucun | couvert | 0.1 | 12°C |
| Plage d'Excenevex | 5 | 7 | 63° ENE | aucun | couvert | 0.3 | 12°C |
| Plage du Vengeron | 7 | 9 | 28° NNE | aucun | couvert | 0.3 | 13°C |
| Plage d'Hermance | 6 | 8 | 44° NE | aucun | couvert | 0.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 337° NNO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 167° SSE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 34 | 197° SSO | 08h-20h | couvert | 0.3 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 24 | 186° S | 09h-15h | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 213° SSO | 11h-20h | couvert | 0.3 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 24 | 191° S | aucun | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 7 | 14 | 206° SSO | aucun | pluie | 4.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 23 | 179° S | 10h-20h | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 14 | 24 | 178° S | 10h-18h | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 40 | 183° S | 08h-20h | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 15 | 32 | 201° SSO | 08h-20h | couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 14 | 22 | 174° S | 14h-19h | couvert | 0.2 | 17°C |
| Nord du Pont d'Arciat | 15 | 23 | 178° S | 13h-19h | couvert | 0.3 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 28 | 195° SSO | 11h-20h | couvert | 0.0 | 15°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 56° NE | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 4 | 6 | 65° ENE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 4 | 6 | 30° NNE | aucun | couvert | 0.0 | 15°C |
| Plage d'Hermance | 4 | 5 | 38° NE | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 36° NE | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 2 | 144° SE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 23 | 174° S | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 155° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 12 | 196° SSO | aucun | pluie | 4.5 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 166° SSE | aucun | pluie | 2.2 | 17°C |
| Cruas - Nuclear Spot | 3 | 5 | 237° OSO | aucun | pluie | 1.7 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 156° SSE | aucun | pluie | 2.1 | 17°C |
| Nord du Pont de Chavanay | 7 | 14 | 161° SSE | aucun | pluie | 2.1 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 166° SSE | aucun | pluie | 1.7 | 17°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 194° SSO | aucun | pluie | 1.7 | 18°C |
| Saint-Romain-des-Iles | 6 | 10 | 200° SSO | aucun | orage | 4.3 | 18°C |
| Nord du Pont d'Arciat | 7 | 10 | 198° SSO | aucun | pluie | 2.6 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 177° S | aucun | soleil-couvert | 0.1 | 14°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 16 | 207° SSO | 13h-17h | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 11 | 14 | 215° SO | aucun | soleil-couvert | 0.3 | 18°C |
| Plage du Vengeron | 12 | 15 | 214° SO | 12h-16h | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 11 | 16 | 210° SSO | 13h-16h | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 338° NNO | aucun | couvert | 0.2 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 72° ENE | aucun | soleil-couvert | 0.6 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 21 | 175° S | 10h-14h | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 10 | 157° SSE | aucun | couvert | 0.2 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 188° S | 12h-15h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 19 | 180° S | 12h-16h | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 4 | 6 | 120° ESE | aucun | couvert | 0.5 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 11 | 153° SSE | aucun | pluie | 2.8 | 17°C |
| Nord du Pont de Chavanay | 6 | 11 | 153° SSE | aucun | pluie | 2.8 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 16 | 185° S | aucun | pluie | 4.2 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 16 | 185° S | aucun | pluie | 4.2 | 16°C |
| Saint-Romain-des-Iles | 6 | 9 | 184° S | aucun | pluie | 3.4 | 16°C |
| Nord du Pont d'Arciat | 6 | 9 | 184° S | aucun | pluie | 3.4 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 167° SSE | aucun | pluie | 5.5 | 16°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 33 | 30° NNE | 14h-20h | orage | 13.6 | 14°C |
| Plage d'Excenevex | 22 | 31 | 24° NNE | 12h-20h | orage | 14.3 | 13°C |
| Plage du Vengeron | 20 | 28 | 31° NNE | 14h-20h | orage | 11.4 | 14°C |
| Plage d'Hermance | 20 | 30 | 34° NE | 14h-20h | orage | 12.6 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 356° N | aucun | orage | 9.4 | 13°C |
| Lac du Bourget - Cap des Séselets | 13 | 17 | 344° NNO | 14h-20h | pluie | 5.6 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 191° S | aucun | pluie | 13.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 327° NNO | aucun | pluie | 11.7 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 26 | 6° N | aucun | pluie | 2.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 351° N | aucun | pluie | 2.2 | 14°C |
| Cruas - Nuclear Spot | 11 | 24 | 13° NNE | aucun | pluie | 4.5 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 339° NNO | aucun | pluie | 1.9 | 14°C |
| Nord du Pont de Chavanay | 9 | 18 | 339° NNO | aucun | pluie | 1.9 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 18 | 330° NNO | aucun | pluie | 1.5 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 331° NNO | aucun | pluie | 1.5 | 13°C |
| Saint-Romain-des-Iles | 13 | 24 | 4° N | aucun | pluie | 4.9 | 12°C |
| Nord du Pont d'Arciat | 13 | 24 | 4° N | aucun | pluie | 4.9 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 19 | 348° NNO | aucun | couvert | 0.6 | 13°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 32 | 47 | 32° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 32 | 47 | 30° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 27 | 39 | 34° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 26 | 40 | 36° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 294° ONO | aucun | couvert | 0.3 | 10°C |
| Lac du Bourget - Cap des Séselets | 17 | 22 | 350° N | 08h-20h | pluie | 1.1 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 21 | 22° NNE | 14h-19h | couvert | 0.6 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 26 | 336° NNO | aucun | couvert | 0.2 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 3° N | 08h-20h | couvert | 0.6 | 9°C |
| La Roche-de-Glun - Base Nautique | 15 | 30 | 359° N | 08h-20h | couvert | 0.6 | 9°C |
| Cruas - Nuclear Spot | 17 | 37 | 11° N | 08h-20h | pluie | 1.8 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 29 | 337° NNO | 08h-20h | couvert | 0.3 | 9°C |
| Nord du Pont de Chavanay | 13 | 29 | 337° NNO | 08h-20h | couvert | 0.3 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 342° NNO | 08h-20h | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 13 | 27 | 330° NNO | 08h-20h | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 16 | 28 | 347° NNO | 08h-20h | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 16 | 28 | 347° NNO | 08h-20h | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 25 | 349° N | 08h-20h | couvert | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 32 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 20 | 32 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 20 | 32 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 20 | 32 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 332° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 6 | 12 | 352° N | aucun | soleil-couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 340° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 13 | 9° N | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 6° N | aucun | couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 358° N | aucun | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 11 | 28 | 15° NNE | aucun | couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 4° N | aucun | couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 4 | 12 | 4° N | aucun | couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 307° NO | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 346° NNO | aucun | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 7 | 13 | 349° N | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 7 | 13 | 349° N | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 328° NNO | aucun | couvert | 0.0 | 6°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 6 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 6 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 6 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 344° NNO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 67° ENE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 126° SE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 192° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 184° S | aucun | pluie | 5.9 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 180° S | aucun | pluie | 6.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 12 | 236° SO | aucun | pluie | 7.4 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 179° S | aucun | pluie | 10.2 | 11°C |
| Nord du Pont de Chavanay | 8 | 20 | 179° S | aucun | pluie | 10.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 21 | 180° S | aucun | pluie | 11.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 8 | 21 | 163° SSE | aucun | pluie | 11.3 | 10°C |
| Saint-Romain-des-Iles | 5 | 10 | 193° SSO | aucun | pluie | 2.4 | 9°C |
| Nord du Pont d'Arciat | 5 | 10 | 193° SSO | aucun | pluie | 2.4 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 137° SE | aucun | pluie | 6.1 | 10°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 6° N | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 4 | 9 | 17° NNE | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 8 | 6° N | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 4 | 8 | 6° N | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 302° ONO | aucun | couvert | 0.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 16° NNE | aucun | couvert | 0.7 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 23 | 175° S | aucun | pluie | 1.4 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 21 | 169° S | aucun | pluie | 1.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 213° SSO | aucun | couvert | 0.7 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 210° SSO | aucun | couvert | 0.6 | 13°C |
| Cruas - Nuclear Spot | 7 | 16 | 190° S | aucun | pluie | 2.7 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 26 | 188° S | aucun | couvert | 0.6 | 12°C |
| Nord du Pont de Chavanay | 10 | 26 | 188° S | aucun | couvert | 0.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 28 | 177° S | 15h-20h | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 11 | 30 | 175° S | 11h-17h | couvert | 0.4 | 12°C |
| Saint-Romain-des-Iles | 12 | 22 | 175° S | 11h-17h | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 12 | 22 | 175° S | 11h-17h | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 19 | 170° S | aucun | couvert | 0.0 | 13°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 209° SSO | 16h-20h | pluie | 2.1 | 12°C |
| Plage d'Excenevex | 15 | 20 | 215° SO | 16h-20h | pluie | 1.4 | 12°C |
| Plage du Vengeron | 11 | 16 | 209° SSO | 16h-20h | pluie | 2.1 | 12°C |
| Plage d'Hermance | 11 | 16 | 209° SSO | 16h-20h | pluie | 2.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 152° SSE | aucun | pluie | 5.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 233° SO | aucun | pluie | 7.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 192° SSO | aucun | pluie | 3.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 188° S | aucun | pluie | 3.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 179° S | aucun | pluie | 1.3 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 185° S | 13h-18h | pluie | 1.7 | 11°C |
| Cruas - Nuclear Spot | 6 | 14 | 189° S | aucun | pluie | 3.2 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 152° SSE | 11h-16h | pluie | 1.5 | 11°C |
| Nord du Pont de Chavanay | 11 | 26 | 152° SSE | 11h-16h | pluie | 1.5 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 172° S | 10h-20h | pluie | 2.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 157° SSE | 12h-15h | pluie | 1.2 | 11°C |
| Saint-Romain-des-Iles | 6 | 15 | 176° S | aucun | pluie | 4.2 | 12°C |
| Nord du Pont d'Arciat | 6 | 15 | 176° S | aucun | pluie | 4.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 25 | 189° S | aucun | pluie | 7.9 | 11°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 22 | 207° SSO | 08h-20h | orage | 23.1 | 11°C |
| Plage d'Excenevex | 18 | 25 | 216° SO | 08h-20h | pluie | 8.3 | 12°C |
| Plage du Vengeron | 15 | 22 | 207° SSO | 08h-20h | orage | 23.1 | 11°C |
| Plage d'Hermance | 15 | 22 | 207° SSO | 08h-20h | orage | 23.1 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 24 | 143° SE | aucun | pluie | 18.6 | 8°C |
| Lac du Bourget - Cap des Séselets | 8 | 24 | 183° S | aucun | pluie | 22.6 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 21 | 143° SE | aucun | pluie | 8.8 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 20 | 128° SE | aucun | pluie | 10.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 26 | 175° S | 08h-15h | pluie | 1.8 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 33 | 180° S | 09h-17h | couvert | 0.9 | 13°C |
| Cruas - Nuclear Spot | 11 | 23 | 198° SSO | aucun | pluie | 1.8 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 30 | 174° S | 08h-15h | pluie | 1.4 | 13°C |
| Nord du Pont de Chavanay | 12 | 30 | 174° S | 08h-15h | pluie | 1.4 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 33 | 176° S | 08h-15h | soleil-couvert | 0.8 | 14°C |
| Saint-Cyr-sur-le-Rhône | 14 | 30 | 176° S | 08h-15h | pluie | 2.0 | 13°C |
| Saint-Romain-des-Iles | 15 | 29 | 184° S | 08h-14h | pluie | 1.6 | 14°C |
| Nord du Pont d'Arciat | 15 | 29 | 184° S | 08h-14h | pluie | 1.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 31 | 182° S | 08h-15h | soleil-couvert | 0.8 | 13°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 209° SSO | 08h-20h | pluie | 3.1 | 10°C |
| Plage d'Excenevex | 16 | 23 | 214° SO | 08h-20h | pluie | 1.5 | 11°C |
| Plage du Vengeron | 13 | 19 | 209° SSO | 08h-20h | pluie | 3.1 | 10°C |
| Plage d'Hermance | 13 | 19 | 209° SSO | 08h-20h | pluie | 3.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 143° SE | aucun | pluie | 8.6 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 172° S | aucun | pluie | 10.7 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 146° SE | aucun | pluie | 12.2 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 14 | 130° SE | aucun | pluie | 9.5 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 183° S | aucun | pluie | 5.9 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 194° SSO | aucun | pluie | 4.3 | 11°C |
| Cruas - Nuclear Spot | 4 | 13 | 181° S | aucun | pluie | 3.3 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 174° S | aucun | pluie | 3.7 | 11°C |
| Nord du Pont de Chavanay | 10 | 22 | 174° S | aucun | pluie | 3.7 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 168° SSE | 08h-14h | soleil-couvert | 0.2 | 11°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 172° S | aucun | pluie | 2.5 | 10°C |
| Saint-Romain-des-Iles | 7 | 16 | 187° S | aucun | pluie | 2.5 | 10°C |
| Nord du Pont d'Arciat | 7 | 16 | 187° S | aucun | pluie | 2.5 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 23 | 193° SSO | 08h-14h | pluie | 0.5 | 11°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 205° SSO | 08h-16h | pluie | 3.6 | 8°C |
| Plage d'Excenevex | 15 | 20 | 217° SO | 08h-16h | pluie | 2.1 | 8°C |
| Plage du Vengeron | 13 | 18 | 205° SSO | 08h-16h | pluie | 3.6 | 8°C |
| Plage d'Hermance | 13 | 18 | 205° SSO | 08h-16h | pluie | 3.6 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 182° S | aucun | pluie | 5.4 | 5°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 194° SSO | aucun | pluie | 10.6 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 98° E | aucun | pluie | 7.9 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 72° ENE | aucun | pluie | 4.9 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 14 | 172° S | aucun | soleil-couvert | 0.6 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 14 | 162° SSE | aucun | pluie | 4.9 | 11°C |
| Cruas - Nuclear Spot | 5 | 15 | 223° SO | aucun | pluie | 2.1 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 15 | 207° SSO | aucun | pluie | 6.8 | 10°C |
| Nord du Pont de Chavanay | 3 | 15 | 207° SSO | aucun | pluie | 6.8 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 13 | 182° S | aucun | soleil-couvert | 0.6 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 16 | 205° SSO | aucun | pluie | 2.5 | 10°C |
| Saint-Romain-des-Iles | 8 | 17 | 261° O | aucun | pluie | 4.5 | 9°C |
| Nord du Pont d'Arciat | 8 | 17 | 261° O | aucun | pluie | 4.5 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 217° SO | aucun | pluie | 3.8 | 10°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 220° SO | 11h-20h | pluie | 1.3 | 6°C |
| Plage d'Excenevex | 15 | 21 | 226° SO | 09h-20h | couvert | 0.2 | 7°C |
| Plage du Vengeron | 13 | 19 | 220° SO | 11h-20h | pluie | 1.3 | 6°C |
| Plage d'Hermance | 13 | 19 | 220° SO | 11h-20h | pluie | 1.3 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 153° SSE | aucun | pluie | 2.1 | 3°C |
| Lac du Bourget - Cap des Séselets | 2 | 11 | 171° S | aucun | couvert | 0.2 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 350° N | aucun | soleil-couvert | 0.7 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 353° N | aucun | soleil-couvert | 0.7 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 32° NNE | aucun | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 49° NE | aucun | soleil | 0.0 | 8°C |
| Cruas - Nuclear Spot | 4 | 11 | 43° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 53° NE | aucun | pluie | 1.2 | 8°C |
| Nord du Pont de Chavanay | 3 | 9 | 53° NE | aucun | pluie | 1.2 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 186° S | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 204° SSO | aucun | soleil-couvert | 0.1 | 8°C |
| Saint-Romain-des-Iles | 6 | 11 | 264° O | aucun | pluie | 2.5 | 8°C |
| Nord du Pont d'Arciat | 6 | 11 | 264° O | aucun | pluie | 2.5 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 161° SSE | aucun | soleil-couvert | 0.1 | 8°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 206° SSO | aucun | pluie | 6.4 | 6°C |
| Plage d'Excenevex | 11 | 19 | 231° SO | 08h-13h | pluie | 3.0 | 7°C |
| Plage du Vengeron | 10 | 15 | 206° SSO | aucun | pluie | 6.4 | 6°C |
| Plage d'Hermance | 10 | 15 | 206° SSO | aucun | pluie | 6.4 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 152° SSE | aucun | pluie | 3.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 211° SSO | aucun | pluie | 3.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 1° N | aucun | pluie | 1.2 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 17 | 348° NNO | aucun | couvert | 0.6 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 8° N | aucun | soleil-couvert | 0.6 | 10°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 359° N | aucun | soleil-couvert | 0.6 | 9°C |
| Cruas - Nuclear Spot | 9 | 22 | 7° N | aucun | soleil | 0.6 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 356° N | aucun | pluie | 1.2 | 8°C |
| Nord du Pont de Chavanay | 6 | 15 | 356° N | aucun | pluie | 1.2 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 337° NNO | aucun | couvert | 0.6 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 346° NNO | aucun | pluie | 1.2 | 8°C |
| Saint-Romain-des-Iles | 9 | 17 | 319° NO | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 9 | 17 | 319° NO | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 328° NNO | aucun | pluie | 1.2 | 7°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 34° NE | aucun | soleil | 0.0 |  |
| Plage d'Excenevex | 12 | 17 | 21° NNE | aucun | soleil | 0.0 |  |
| Plage du Vengeron | 11 | 17 | 34° NE | aucun | soleil | 0.0 |  |
| Plage d'Hermance | 11 | 17 | 34° NE | aucun | soleil | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 352° N | aucun | soleil-couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 37° NE | aucun | soleil-couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 11 | 33° NNE | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 9° N | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 29 | 8° N | 08h-13h | couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 358° N | 08h-13h | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 13 | 30 | 23° NNE | 08h-13h | soleil | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 356° N | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 7 | 18 | 356° N | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 333° NNO | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 347° NNO | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 7 | 15 | 6° N | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 7 | 15 | 6° N | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 340° NNO | aucun | couvert | 0.0 |  |
