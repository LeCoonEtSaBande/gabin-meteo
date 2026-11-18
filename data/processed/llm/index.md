# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 18/11/2026 15:20 (Europe/Paris)
- Fichiers générés le : 2026-11-18T15:24:44+01:00
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
| Plage de la pointe - Messery | 20 | 30 | 207° SSO | 08h-20h | couvert | 0.7 | 12°C |
| Plage d'Excenevex | 15 | 22 | 211° SSO | 11h-17h | couvert | 0.7 | 13°C |
| Plage du Vengeron | 14 | 20 | 207° SSO | 11h-20h | couvert | 0.9 | 13°C |
| Plage d'Hermance | 20 | 26 | 196° SSO | 08h-20h | pluie | 1.7 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 19 | 241° OSO | aucun | pluie | 3.7 | 14°C |
| Lac du Bourget - Cap des Séselets | 7 | 13 | 221° SO | aucun | pluie | 3.3 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 12 | 134° SE | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 15 | 75° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 13 | 199° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 18 | 191° S | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 8 | 14 | 217° SO | aucun | soleil | 0.3 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 14 | 147° SSE | aucun | pluie | 1.2 | 16°C |
| Nord du Pont de Chavanay | 6 | 10 | 150° SSE | aucun | pluie | 1.1 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 18 | 178° S | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 206° SSO | aucun | soleil-couvert | 0.5 | 16°C |
| Saint-Romain-des-Iles | 9 | 14 | 182° S | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 10 | 22 | 209° SSO | aucun | soleil-couvert | 0.1 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 243° OSO | aucun | pluie | 1.5 | 14°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 206° SSO | 08h-20h | pluie | 5.2 | 11°C |
| Plage d'Excenevex | 16 | 24 | 210° SSO | 08h-20h | pluie | 3.6 | 11°C |
| Plage du Vengeron | 20 | 26 | 209° SSO | 08h-20h | pluie | 5.5 | 11°C |
| Plage d'Hermance | 25 | 35 | 208° SSO | 08h-20h | pluie | 3.6 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 23 | 229° SO | aucun | pluie | 4.3 | 12°C |
| Lac du Bourget - Cap des Séselets | 10 | 16 | 241° OSO | aucun | pluie | 3.1 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 348° NNO | aucun | couvert | 0.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 15 | 35° NE | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 202° SSO | aucun | soleil-couvert | 0.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 159° SSE | aucun | soleil-couvert | 0.1 | 14°C |
| Cruas - Nuclear Spot | 7 | 13 | 202° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 12 | 187° S | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 9 | 15 | 202° SSO | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 204° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 198° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 14 | 26 | 245° OSO | aucun | pluie | 1.0 | 13°C |
| Nord du Pont d'Arciat | 15 | 23 | 203° SSO | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 18 | 199° SSO | aucun | soleil-couvert | 0.2 | 14°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 207° SSO | 08h-20h | pluie | 2.8 | 11°C |
| Plage d'Excenevex | 18 | 26 | 212° SSO | 08h-20h | pluie | 2.9 | 11°C |
| Plage du Vengeron | 16 | 21 | 204° SSO | 08h-20h | pluie | 3.3 | 12°C |
| Plage d'Hermance | 15 | 22 | 207° SSO | 08h-20h | pluie | 2.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 113° ESE | aucun | pluie | 4.3 | 10°C |
| Lac du Bourget - Cap des Séselets | 12 | 15 | 153° SSE | 15h-18h | pluie | 2.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 150° SSE | aucun | pluie | 1.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 144° SE | aucun | pluie | 1.8 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 199° SSO | aucun | pluie | 1.4 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 19 | 192° SSO | 14h-17h | pluie | 1.6 | 12°C |
| Cruas - Nuclear Spot | 8 | 15 | 164° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 20 | 164° SSE | 13h-17h | pluie | 1.1 | 12°C |
| Nord du Pont de Chavanay | 13 | 27 | 141° SE | 14h-17h | pluie | 1.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 216° SO | aucun | pluie | 2.5 | 11°C |
| Saint-Cyr-sur-le-Rhône | 10 | 20 | 179° S | aucun | pluie | 2.5 | 11°C |
| Saint-Romain-des-Iles | 11 | 20 | 212° SSO | 15h-18h | pluie | 2.6 | 14°C |
| Nord du Pont d'Arciat | 11 | 20 | 212° SSO | 15h-18h | pluie | 2.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 19 | 215° SO | 08h-13h | soleil-couvert | 0.0 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 220° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 10 | 12 | 223° SO | aucun | soleil | 0.0 | 12°C |
| Plage du Vengeron | 9 | 12 | 200° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 9 | 13 | 231° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 150° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 146° SE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 165° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 341° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 10 | 17° NNE | aucun | soleil-couvert | 0.1 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 321° NO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 5 | 10 | 2° N | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 5 | 117° ESE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 5 | 117° ESE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 10° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 10° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 5 | 8 | 140° SE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 5 | 8 | 140° SE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 103° ESE | aucun | soleil-couvert | 0.0 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 29 | 210° SSO | 12h-20h | orage | 6.9 | 11°C |
| Plage d'Excenevex | 19 | 25 | 213° SSO | 12h-20h | orage | 7.5 | 11°C |
| Plage du Vengeron | 16 | 22 | 215° SO | 12h-20h | orage | 7.1 | 12°C |
| Plage d'Hermance | 17 | 25 | 201° SSO | 12h-18h | orage | 6.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 21 | 257° OSO | aucun | orage | 25.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 9 | 11 | 139° SE | aucun | orage | 21.6 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 21 | 25° NNE | aucun | orage | 16.5 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 17 | 16° NNE | aucun | pluie | 6.3 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 180° S | aucun | pluie | 4.9 | 13°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 183° S | aucun | pluie | 1.8 | 14°C |
| Cruas - Nuclear Spot | 4 | 3 | 81° E | aucun | pluie | 2.7 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 177° S | aucun | pluie | 2.8 | 12°C |
| Nord du Pont de Chavanay | 12 | 26 | 177° S | aucun | pluie | 2.8 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 30 | 189° S | aucun | pluie | 2.7 | 12°C |
| Saint-Cyr-sur-le-Rhône | 13 | 30 | 189° S | aucun | pluie | 2.4 | 12°C |
| Saint-Romain-des-Iles | 15 | 29 | 275° O | 13h-19h | soleil | 0.6 | 12°C |
| Nord du Pont d'Arciat | 15 | 29 | 275° O | 13h-19h | soleil | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 30 | 193° SSO | aucun | pluie | 4.1 | 12°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 345° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 5 | 8 | 345° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 5 | 8 | 345° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 5 | 8 | 345° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 273° O | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 50° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 22 | 333° NNO | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 24 | 349° N | aucun | soleil-couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 3° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 351° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 7 | 16 | 35° NE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 12 | 40° NE | aucun | pluie | 1.2 | 10°C |
| Nord du Pont de Chavanay | 3 | 12 | 40° NE | aucun | pluie | 1.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 149° SSE | aucun | soleil-couvert | 0.3 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 11 | 42° NE | aucun | pluie | 1.2 | 10°C |
| Saint-Romain-des-Iles | 7 | 13 | 281° O | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 7 | 13 | 281° O | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 109° ESE | aucun | soleil-couvert | 0.0 | 10°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 14° NNE | aucun | couvert | 0.0 | 5°C |
| Plage d'Excenevex | 6 | 10 | 14° NNE | aucun | couvert | 0.0 | 5°C |
| Plage du Vengeron | 6 | 10 | 14° NNE | aucun | couvert | 0.0 | 5°C |
| Plage d'Hermance | 6 | 10 | 14° NNE | aucun | couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 11 | 113° ESE | aucun | couvert | 0.7 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 15 | 106° ESE | aucun | couvert | 0.6 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 20 | 171° S | aucun | pluie | 2.1 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 17 | 187° S | aucun | pluie | 1.2 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 207° SSO | aucun | pluie | 1.2 | 9°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 190° S | aucun | pluie | 1.3 | 9°C |
| Cruas - Nuclear Spot | 3 | 12 | 9° N | aucun | pluie | 1.7 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 12 | 158° SSE | aucun | pluie | 0.6 | 8°C |
| Nord du Pont de Chavanay | 3 | 12 | 158° SSE | aucun | pluie | 0.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 128° SE | aucun | couvert | 0.4 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 11 | 156° SSE | aucun | pluie | 0.5 | 8°C |
| Saint-Romain-des-Iles | 3 | 8 | 163° SSE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 8 | 163° SSE | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 128° SE | aucun | couvert | 0.1 | 7°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 17° NNE | aucun | pluie | 12.1 | 7°C |
| Plage d'Excenevex | 5 | 9 | 17° NNE | aucun | pluie | 12.1 | 7°C |
| Plage du Vengeron | 5 | 9 | 17° NNE | aucun | pluie | 12.1 | 7°C |
| Plage d'Hermance | 5 | 9 | 17° NNE | aucun | pluie | 12.1 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 108° ESE | aucun | pluie | 4.3 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 36° NE | aucun | pluie | 3.9 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 19 | 160° SSE | aucun | couvert | 0.4 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 15 | 178° S | aucun | couvert | 0.1 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 16° NNE | aucun | pluie | 3.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 19° NNE | aucun | pluie | 3.0 | 10°C |
| Cruas - Nuclear Spot | 3 | 9 | 40° NE | aucun | pluie | 2.4 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 69° ENE | aucun | pluie | 1.8 | 10°C |
| Nord du Pont de Chavanay | 2 | 7 | 69° ENE | aucun | pluie | 1.8 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 76° ENE | aucun | pluie | 2.4 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 53° NE | aucun | pluie | 1.8 | 10°C |
| Saint-Romain-des-Iles | 3 | 9 | 249° OSO | aucun | couvert | 0.6 | 9°C |
| Nord du Pont d'Arciat | 3 | 9 | 249° OSO | aucun | couvert | 0.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 118° ESE | aucun | pluie | 1.8 | 9°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 214° SO | 08h-16h | pluie | 8.7 | 8°C |
| Plage d'Excenevex | 16 | 21 | 227° SO | 09h-17h | pluie | 6.9 | 9°C |
| Plage du Vengeron | 15 | 21 | 214° SO | 08h-16h | pluie | 8.7 | 8°C |
| Plage d'Hermance | 15 | 21 | 214° SO | 08h-16h | pluie | 8.7 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 125° SE | aucun | pluie | 15.8 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 13 | 183° S | aucun | pluie | 17.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 159° SSE | aucun | pluie | 8.5 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 147° SSE | aucun | pluie | 8.8 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 179° S | aucun | pluie | 2.4 | 11°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 190° S | 08h-14h | pluie | 1.0 | 10°C |
| Cruas - Nuclear Spot | 6 | 14 | 193° SSO | aucun | pluie | 1.3 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 167° SSE | aucun | pluie | 6.4 | 10°C |
| Nord du Pont de Chavanay | 8 | 19 | 167° SSE | aucun | pluie | 6.4 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 166° SSE | aucun | pluie | 5.5 | 10°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 166° SSE | aucun | pluie | 7.7 | 10°C |
| Saint-Romain-des-Iles | 6 | 14 | 187° S | aucun | pluie | 3.1 | 9°C |
| Nord du Pont d'Arciat | 6 | 14 | 187° S | aucun | pluie | 3.1 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 193° SSO | aucun | pluie | 4.5 | 10°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 15 | 246° OSO | aucun | pluie | 4.8 | 8°C |
| Plage d'Excenevex | 9 | 14 | 248° OSO | aucun | pluie | 5.4 | 8°C |
| Plage du Vengeron | 9 | 15 | 246° OSO | aucun | pluie | 4.8 | 8°C |
| Plage d'Hermance | 9 | 15 | 246° OSO | aucun | pluie | 4.8 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 130° SE | aucun | pluie | 4.2 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 16° NNE | aucun | pluie | 3.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 169° S | aucun | pluie | 2.4 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 162° SSE | aucun | pluie | 3.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 177° S | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 194° SSO | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 3 | 8 | 182° S | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 183° S | aucun | couvert | 0.6 | 9°C |
| Nord du Pont de Chavanay | 6 | 14 | 183° S | aucun | couvert | 0.6 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 176° S | aucun | pluie | 1.2 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 166° SSE | aucun | pluie | 1.2 | 8°C |
| Saint-Romain-des-Iles | 8 | 13 | 177° S | aucun | pluie | 1.9 | 7°C |
| Nord du Pont d'Arciat | 8 | 13 | 177° S | aucun | pluie | 1.9 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 142° SE | aucun | pluie | 1.8 | 8°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 209° SSO | aucun | pluie | 17.3 | 10°C |
| Plage d'Excenevex | 11 | 18 | 206° SSO | aucun | pluie | 14.4 | 10°C |
| Plage du Vengeron | 12 | 16 | 209° SSO | aucun | pluie | 17.3 | 10°C |
| Plage d'Hermance | 12 | 16 | 209° SSO | aucun | pluie | 17.3 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 16 | 167° SSE | aucun | pluie | 13.4 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 16 | 198° SSO | aucun | pluie | 14.3 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 21 | 170° S | aucun | pluie | 8.1 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 173° S | aucun | pluie | 10.1 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 21 | 222° SO | aucun | pluie | 10.3 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 214° SO | aucun | pluie | 6.2 | 11°C |
| Cruas - Nuclear Spot | 9 | 19 | 210° SSO | aucun | pluie | 10.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 186° S | aucun | pluie | 3.6 | 11°C |
| Nord du Pont de Chavanay | 8 | 20 | 186° S | aucun | pluie | 3.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 180° S | 08h-14h | pluie | 2.1 | 11°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 177° S | aucun | pluie | 3.6 | 10°C |
| Saint-Romain-des-Iles | 6 | 19 | 180° S | aucun | pluie | 4.8 | 10°C |
| Nord du Pont d'Arciat | 6 | 19 | 180° S | aucun | pluie | 4.8 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 25 | 190° S | 08h-14h | pluie | 4.4 | 11°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 16 | 240° OSO | aucun | pluie | 1.1 | 10°C |
| Plage d'Excenevex | 9 | 19 | 241° OSO | aucun | couvert | 0.3 | 10°C |
| Plage du Vengeron | 8 | 16 | 240° OSO | aucun | pluie | 1.1 | 10°C |
| Plage d'Hermance | 8 | 16 | 240° OSO | aucun | pluie | 1.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 13 | 137° SE | aucun | couvert | 0.1 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 208° SSO | aucun | couvert | 0.1 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 20 | 175° S | aucun | soleil-couvert | 0.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 17 | 175° S | aucun | soleil-couvert | 0.1 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 189° S | aucun | soleil-couvert | 0.1 | 11°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 194° SSO | 16h-20h | soleil-couvert | 0.2 | 11°C |
| Cruas - Nuclear Spot | 8 | 20 | 205° SSO | aucun | pluie | 0.5 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 30 | 187° S | 16h-20h | couvert | 0.3 | 10°C |
| Nord du Pont de Chavanay | 14 | 30 | 187° S | 16h-20h | couvert | 0.3 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 36 | 175° S | 14h-20h | soleil-couvert | 0.2 | 10°C |
| Saint-Cyr-sur-le-Rhône | 15 | 33 | 180° S | 15h-20h | soleil-couvert | 0.2 | 10°C |
| Saint-Romain-des-Iles | 13 | 22 | 179° S | 17h-20h | couvert | 0.5 | 10°C |
| Nord du Pont d'Arciat | 13 | 22 | 179° S | 17h-20h | couvert | 0.5 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 30 | 176° S | 16h-20h | pluie | 1.0 | 10°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 27 | 204° SSO | 08h-13h | pluie | 1.2 | 10°C |
| Plage d'Excenevex | 23 | 37 | 214° SO | 08h-15h | couvert | 0.6 | 10°C |
| Plage du Vengeron | 16 | 27 | 204° SSO | 08h-13h | pluie | 1.2 | 10°C |
| Plage d'Hermance | 16 | 27 | 204° SSO | 08h-13h | pluie | 1.2 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 23 | 211° SSO | aucun | pluie | 1.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 7 | 26 | 224° SO | aucun | couvert | 0.6 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 347° NNO | aucun | pluie | 1.2 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 339° NNO | aucun | pluie | 1.2 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 23 | 200° SSO | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 27 | 221° SO | aucun | couvert | 0.6 | 11°C |
| Cruas - Nuclear Spot | 6 | 13 | 355° N | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 29 | 94° E | aucun | pluie | 4.2 | 11°C |
| Nord du Pont de Chavanay | 5 | 29 | 94° E | aucun | pluie | 4.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 32 | 16° NNE | aucun | couvert | 0.6 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 27 | 57° ENE | aucun | pluie | 1.8 | 11°C |
| Saint-Romain-des-Iles | 8 | 34 | 278° O | aucun | couvert | 0.6 | 11°C |
| Nord du Pont d'Arciat | 8 | 34 | 278° O | aucun | couvert | 0.6 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 306° NO | aucun | couvert | 0.0 | 11°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 220° SO | 12h-16h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 10 | 13 | 221° SO | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 11 | 14 | 220° SO | 12h-16h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 11 | 14 | 220° SO | 12h-16h | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 118° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 261° O | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 183° S | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 187° S | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 180° S | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 190° S | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 10 | 186° S | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 137° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 5 | 13 | 137° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 149° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 147° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 5 | 10 | 157° SSE | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 5 | 10 | 157° SSE | aucun | couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 193° SSO | aucun | couvert | 0.0 | 12°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 243° OSO | aucun | couvert | 0.1 | 13°C |
| Plage d'Excenevex | 2 | 10 | 84° E | aucun | couvert | 0.1 | 12°C |
| Plage du Vengeron | 6 | 7 | 243° OSO | aucun | couvert | 0.1 | 13°C |
| Plage d'Hermance | 6 | 7 | 243° OSO | aucun | couvert | 0.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 221° SO | aucun | couvert | 0.7 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 270° O | aucun | pluie | 1.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 176° S | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 177° S | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 194° SSO | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 202° SSO | 11h-20h | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 5 | 12 | 216° SO | aucun | couvert | 0.3 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 31 | 194° SSO | 12h-20h | couvert | 0.1 | 16°C |
| Nord du Pont de Chavanay | 13 | 31 | 194° SSO | 12h-20h | couvert | 0.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 35 | 181° S | 10h-20h | couvert | 0.8 | 16°C |
| Saint-Cyr-sur-le-Rhône | 14 | 34 | 187° S | 11h-20h | couvert | 0.7 | 15°C |
| Saint-Romain-des-Iles | 9 | 18 | 186° S | aucun | pluie | 1.9 | 13°C |
| Nord du Pont d'Arciat | 9 | 18 | 186° S | aucun | pluie | 1.9 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 34 | 190° S | 14h-20h | pluie | 2.2 | 15°C |
