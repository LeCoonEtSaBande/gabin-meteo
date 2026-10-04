# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 04/10/2026 13:12 (Europe/Paris)
- Fichiers générés le : 2026-10-04T13:17:48+02:00
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
| Centrale de Saint-Alban-du-Rhône (`st_alban_du_rhone`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_alban_du_rhone.md |
| Nord du Pont de Chavanay (`pont_de_chavanay`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_de_chavanay.md |
| Loire-sur-Rhône / Chasse-sur-Rhône (`loire_sur_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/loire_sur_rhone.md |
| Saint-Cyr-sur-le-Rhône (`st_cyr_sur_le_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_cyr_sur_le_rhone.md |
| Saint-Romain-des-Iles (`st_romain_des_iles`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_romain_des_iles.md |
| Nord du Pont d'Arciat (`pont_darciat`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_darciat.md |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu (`wwmeyzieu`) | Réservoir du Grand Large - Meyzieu | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/wwmeyzieu.md |

## Tendances journalières (données des puces de la carte)

Courbe des puces : AROMEIFS pour les spots AROME HD, ICONIFS (ICON-CH1 → ICON-CH2 → ICON Global → IFS) pour les spots ICON-CH1. Format : vent moyen max / rafale au même moment, créneau, icône, température à 15 h.

### dim. 04/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 60° ENE | aucun | couvert | 0.4 | 20°C |
| Plage d'Excenevex | 5 | 7 | 58° ENE | aucun | couvert | 0.0 | 20°C |
| Plage du Vengeron | 8 | 10 | 21° NNE | aucun | pluie | 1.6 | 21°C |
| Plage d'Hermance | 7 | 9 | 37° NE | aucun | couvert | 0.1 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 303° ONO | aucun | couvert | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 3° N | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 9° N | aucun | couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 2° N | aucun | couvert | 0.0 | 23°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 93° E | aucun | soleil-couvert | 0.0 | 26°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 96° E | aucun | soleil | 0.0 | 26°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 43° NE | aucun | soleil-couvert | 0.0 | 24°C |
| Nord du Pont de Chavanay | 4 | 9 | 18° NNE | aucun | soleil-couvert | 0.0 | 25°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 51° NE | aucun | soleil-couvert | 0.1 | 24°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 16° NNE | aucun | soleil-couvert | 0.3 | 25°C |
| Saint-Romain-des-Iles | 4 | 9 | 195° SSO | aucun | soleil-couvert | 0.0 | 24°C |
| Nord du Pont d'Arciat | 3 | 4 | 180° S | aucun | soleil-couvert | 0.0 | 22°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 34° NE | aucun | soleil-couvert | 0.0 | 21°C |

### lun. 05/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 24° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 4 | 5 | 19° NNE | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 5 | 7 | 25° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Hermance | 5 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 292° ONO | aucun | soleil | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 18° NNE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 5° N | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 2° N | aucun | soleil | 0.0 | 23°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 72° ENE | aucun | soleil | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 351° N | aucun | soleil | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 27° NNE | aucun | soleil | 0.0 | 26°C |
| Nord du Pont de Chavanay | 6 | 12 | 31° NNE | aucun | soleil | 0.0 | 25°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 13° NNE | aucun | soleil | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 19° NNE | aucun | soleil | 0.0 | 25°C |
| Saint-Romain-des-Iles | 5 | 10 | 30° NNE | aucun | soleil | 0.0 | 25°C |
| Nord du Pont d'Arciat | 6 | 10 | 31° NNE | aucun | soleil | 0.0 | 24°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 37° NE | aucun | soleil | 0.0 | 22°C |

### mar. 06/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 39° NE | aucun | soleil | 0.0 | 20°C |
| Plage d'Excenevex | 4 | 6 | 72° ENE | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 4 | 5 | 13° NNE | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 4 | 6 | 33° NNE | aucun | soleil | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 309° NO | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 213° SSO | aucun | soleil | 0.0 | 23°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 355° N | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 339° NNO | aucun | soleil | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 20 | 196° SSO | 15h-19h | soleil-couvert | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 11 | 20 | 186° S | 15h-18h | soleil-couvert | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 190° S | aucun | soleil | 0.0 | 27°C |
| Nord du Pont de Chavanay | 9 | 16 | 190° S | aucun | soleil | 0.0 | 27°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 15 | 189° S | aucun | soleil | 0.0 | 26°C |
| Saint-Cyr-sur-le-Rhône | 8 | 15 | 189° S | aucun | soleil | 0.0 | 26°C |
| Saint-Romain-des-Iles | 5 | 12 | 171° S | aucun | soleil | 0.0 | 26°C |
| Nord du Pont d'Arciat | 5 | 12 | 171° S | aucun | soleil | 0.0 | 26°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 11 | 156° SSE | aucun | soleil | 0.0 | 26°C |

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 211° SSO | aucun | pluie | 1.9 | 18°C |
| Plage d'Excenevex | 5 | 7 | 237° OSO | aucun | pluie | 1.2 | 18°C |
| Plage du Vengeron | 3 | 4 | 214° SO | aucun | pluie | 2.0 | 18°C |
| Plage d'Hermance | 4 | 6 | 221° SO | aucun | pluie | 1.9 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 65° ENE | aucun | pluie | 1.7 | 18°C |
| Lac du Bourget - Cap des Séselets | 6 | 11 | 46° NE | aucun | pluie | 1.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 180° S | 16h-20h | orage | 3.5 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 191° S | aucun | orage | 11.1 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 225° SO | aucun | pluie | 3.5 | 20°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 190° S | aucun | pluie | 2.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 187° S | aucun | pluie | 7.8 | 18°C |
| Nord du Pont de Chavanay | 8 | 18 | 187° S | aucun | pluie | 7.8 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 193° SSO | aucun | pluie | 7.4 | 17°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 193° SSO | aucun | pluie | 7.4 | 17°C |
| Saint-Romain-des-Iles | 16 | 27 | 177° S | 12h-16h | pluie | 1.7 | 22°C |
| Nord du Pont d'Arciat | 16 | 27 | 177° S | 12h-16h | pluie | 1.7 | 22°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 185° S | aucun | pluie | 12.7 | 18°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 22 | 231° SO | 08h-12h | orage | 18.6 | 16°C |
| Plage d'Excenevex | 14 | 19 | 230° SO | 10h-14h | orage | 8.3 | 16°C |
| Plage du Vengeron | 13 | 16 | 241° OSO | aucun | orage | 15.8 | 16°C |
| Plage d'Hermance | 13 | 21 | 267° O | 16h-19h | couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 19 | 320° NO | aucun | orage | 27.4 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 13 | 249° OSO | aucun | pluie | 3.8 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 25 | 359° N | 13h-20h | orage | 16.9 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 20 | 359° N | aucun | pluie | 6.3 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 9° N | 14h-20h | soleil-couvert | 0.4 | 16°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 357° N | 14h-20h | pluie | 0.8 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 336° NNO | 14h-19h | soleil-couvert | 0.1 | 16°C |
| Nord du Pont de Chavanay | 12 | 27 | 336° NNO | 14h-19h | soleil-couvert | 0.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 326° NO | 14h-18h | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 328° NNO | 14h-19h | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 13 | 23 | 316° NO | 15h-18h | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 13 | 23 | 316° NO | 15h-18h | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 27 | 321° NO | 14h-18h | soleil-couvert | 0.3 | 15°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 24° NNE | 10h-15h | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 11 | 18 | 24° NNE | 10h-15h | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 11 | 18 | 24° NNE | 10h-15h | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 11 | 18 | 24° NNE | 10h-15h | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 19 | 355° N | aucun | soleil-couvert | 0.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 24° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 26 | 25° NNE | 08h-11h | couvert | 0.6 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 32 | 349° N | 08h-12h | couvert | 0.7 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 357° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 15 | 31 | 349° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 357° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 10 | 23 | 357° N | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 360° N | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 355° N | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 7 | 15 | 333° NNO | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 7 | 15 | 333° NNO | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 355° N | aucun | couvert | 0.0 | 14°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 241° OSO | aucun | couvert | 0.3 | 13°C |
| Plage d'Excenevex | 7 | 12 | 241° OSO | aucun | couvert | 0.3 | 13°C |
| Plage du Vengeron | 7 | 12 | 241° OSO | aucun | couvert | 0.3 | 13°C |
| Plage d'Hermance | 7 | 12 | 241° OSO | aucun | couvert | 0.3 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 135° SE | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 241° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 328° NNO | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 6° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 3° N | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 354° N | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 29° NNE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 5 | 13 | 29° NNE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 43° NE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 23° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 8 | 292° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 4 | 8 | 292° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 11 | 8° N | aucun | soleil | 0.0 | 15°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 229° SO | aucun | pluie | 5.3 | 16°C |
| Plage d'Excenevex | 6 | 11 | 229° SO | aucun | pluie | 5.3 | 16°C |
| Plage du Vengeron | 6 | 11 | 229° SO | aucun | pluie | 5.3 | 16°C |
| Plage d'Hermance | 6 | 11 | 229° SO | aucun | pluie | 5.3 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 12 | 308° NO | aucun | pluie | 2.4 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 175° S | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 21 | 330° NNO | aucun | soleil-couvert | 0.6 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 19 | 349° N | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 4° N | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 359° N | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 17 | 20° NNE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 6 | 17 | 20° NNE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 17° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 16° NNE | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 5 | 12 | 322° NO | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 5 | 12 | 322° NO | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 334° NNO | aucun | soleil-couvert | 0.0 | 17°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 13 | 227° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Excenevex | 7 | 11 | 221° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 7 | 13 | 227° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 7 | 13 | 227° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 257° OSO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 238° OSO | aucun | soleil-couvert | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 11° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 12 | 173° S | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 171° S | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 164° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 3 | 10 | 164° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 141° SE | aucun | couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 162° SSE | aucun | couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 5 | 11 | 156° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 5 | 11 | 156° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 156° SSE | aucun | couvert | 0.0 | 18°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 193° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 8 | 12 | 220° SO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 10 | 13 | 193° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 10 | 13 | 193° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 250° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 201° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 1° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 2° N | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 8° N | aucun | soleil-couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 4° N | aucun | soleil-couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 52° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 3 | 10 | 52° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 57° ENE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 3 | 9 | 160° SSE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont d'Arciat | 3 | 9 | 160° SSE | aucun | soleil-couvert | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 6 | 138° SE | aucun | soleil-couvert | 0.0 | 20°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 212° SSO | aucun | pluie | 4.2 | 17°C |
| Plage d'Excenevex | 12 | 17 | 224° SO | 08h-20h | pluie | 1.2 | 17°C |
| Plage du Vengeron | 9 | 13 | 212° SSO | aucun | pluie | 4.2 | 17°C |
| Plage d'Hermance | 9 | 13 | 212° SSO | aucun | pluie | 4.2 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 188° S | aucun | pluie | 4.8 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 212° SSO | aucun | pluie | 1.8 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 360° N | aucun | couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 354° N | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 9° N | aucun | couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 3° N | aucun | couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 28° NNE | aucun | couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 5 | 13 | 28° NNE | aucun | couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 152° SSE | aucun | couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 12° NNE | aucun | couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 6 | 12 | 261° O | aucun | couvert | 0.6 | 18°C |
| Nord du Pont d'Arciat | 6 | 12 | 261° O | aucun | couvert | 0.6 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 6 | 60° ENE | aucun | couvert | 0.0 | 19°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 17 | 239° OSO | aucun | pluie | 1.3 | 12°C |
| Plage d'Excenevex | 6 | 17 | 44° NE | aucun | pluie | 11.7 | 10°C |
| Plage du Vengeron | 4 | 17 | 239° OSO | aucun | pluie | 1.3 | 12°C |
| Plage d'Hermance | 4 | 17 | 239° OSO | aucun | pluie | 1.3 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 22 | 338° NNO | aucun | pluie | 3.7 | 9°C |
| Lac du Bourget - Cap des Séselets | 6 | 19 | 360° N | aucun | soleil | 0.9 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 33 | 346° NNO | 12h-16h | couvert | 0.8 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 37 | 346° NNO | 11h-17h | soleil-couvert | 0.7 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 33 | 7° N | 08h-20h | soleil-couvert | 0.7 | 14°C |
| La Roche-de-Glun - Base Nautique | 17 | 32 | 5° N | 08h-20h | soleil-couvert | 0.8 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 29 | 347° NNO | 09h-18h | soleil | 0.6 | 13°C |
| Nord du Pont de Chavanay | 12 | 29 | 347° NNO | 09h-18h | soleil | 0.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 27 | 340° NNO | 09h-18h | soleil | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 344° NNO | 08h-20h | pluie | 1.2 | 13°C |
| Saint-Romain-des-Iles | 12 | 22 | 328° NNO | 10h-17h | soleil | 0.5 | 13°C |
| Nord du Pont d'Arciat | 12 | 22 | 328° NNO | 10h-17h | soleil | 0.5 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 25 | 341° NNO | 12h-16h | soleil | 0.3 | 13°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 34° NE | aucun | soleil-couvert | 0.9 | 11°C |
| Plage d'Excenevex | 9 | 16 | 36° NE | aucun | pluie | 1.0 | 11°C |
| Plage du Vengeron | 8 | 14 | 34° NE | aucun | soleil-couvert | 0.9 | 11°C |
| Plage d'Hermance | 8 | 14 | 34° NE | aucun | soleil-couvert | 0.9 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 15 | 360° N | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 78° ENE | aucun | soleil-couvert | 0.6 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 358° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 359° N | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 5° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 1° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 9 | 22 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 350° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 351° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 6 | 13 | 10° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 13 | 10° N | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 358° N | aucun | soleil-couvert | 0.0 | 11°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 24° NNE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 13 | 19 | 25° NNE | 14h-20h | soleil | 0.0 | 11°C |
| Plage du Vengeron | 11 | 18 | 24° NNE | aucun | soleil | 0.0 | 11°C |
| Plage d'Hermance | 11 | 18 | 24° NNE | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 347° NNO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 32° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 353° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 4° N | 09h-20h | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 360° N | 12h-20h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 353° N | aucun | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 9 | 21 | 353° N | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 351° N | aucun | soleil | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 351° N | aucun | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 9 | 18 | 18° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 9 | 18 | 18° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 358° N | aucun | soleil | 0.0 | 11°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 26 | 28° NNE | 08h-20h | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 18 | 26 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 18 | 26 | 28° NNE | 08h-20h | soleil | 0.0 | 8°C |
| Plage d'Hermance | 18 | 26 | 28° NNE | 08h-20h | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 19 | 7° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 8 | 22 | 20° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 357° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 354° N | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 33 | 9° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 6° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 358° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 9 | 22 | 358° N | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 353° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 13 | 23 | 16° NNE | 14h-20h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 13 | 23 | 16° NNE | 14h-20h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 4° N | aucun | soleil-couvert | 0.0 | 10°C |
