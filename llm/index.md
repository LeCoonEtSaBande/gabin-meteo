# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 19/11/2026 15:33 (Europe/Paris)
- Fichiers générés le : 2026-11-19T15:34:14+01:00
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

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 28 | 208° SSO | 08h-20h | pluie | 4.3 | 11°C |
| Plage d'Excenevex | 16 | 24 | 207° SSO | 09h-20h | pluie | 3.8 | 11°C |
| Plage du Vengeron | 15 | 19 | 211° SSO | 08h-20h | pluie | 6.8 | 12°C |
| Plage d'Hermance | 17 | 25 | 231° SO | 08h-20h | pluie | 3.3 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 19 | 237° OSO | aucun | pluie | 5.9 | 11°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 209° SSO | aucun | pluie | 4.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 34° NE | aucun | pluie | 3.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 18 | 23° NNE | aucun | couvert | 0.6 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 9 | 206° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 170° S | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 6 | 11 | 118° ESE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 151° SSE | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 14 | 162° SSE | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 13 | 302° ONO | aucun | soleil-couvert | 0.1 | 14°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 215° SO | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 12 | 20 | 237° OSO | aucun | pluie | 1.0 | 13°C |
| Nord du Pont d'Arciat | 14 | 22 | 233° SO | aucun | couvert | 0.7 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 18 | 209° SSO | aucun | pluie | 1.7 | 13°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 33 | 197° SSO | 08h-20h | pluie | 2.6 | 10°C |
| Plage d'Excenevex | 17 | 24 | 213° SSO | 08h-20h | pluie | 2.3 | 10°C |
| Plage du Vengeron | 18 | 23 | 199° SSO | 08h-20h | pluie | 4.5 | 10°C |
| Plage d'Hermance | 20 | 28 | 201° SSO | 08h-20h | pluie | 2.9 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 12 | 142° SE | aucun | pluie | 5.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 172° S | aucun | pluie | 2.7 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 151° SSE | aucun | pluie | 1.3 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 187° S | aucun | pluie | 1.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 202° SSO | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 154° SSE | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 6 | 10 | 207° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 158° SSE | aucun | pluie | 0.9 | 12°C |
| Nord du Pont de Chavanay | 7 | 12 | 161° SSE | aucun | pluie | 1.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 173° S | aucun | couvert | 0.3 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 226° SO | aucun | couvert | 0.6 | 12°C |
| Saint-Romain-des-Iles | 11 | 18 | 200° SSO | 12h-15h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 12 | 20 | 226° SO | 10h-14h | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 18 | 195° SSO | 16h-19h | couvert | 0.4 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 223° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 8 | 12 | 214° SO | aucun | soleil-couvert | 0.2 | 12°C |
| Plage du Vengeron | 9 | 14 | 205° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 8 | 12 | 232° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 74° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 156° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 10 | 164° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 6 | 189° S | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 2 | 149° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 2 | 4 | 101° E | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 4 | 4 | 45° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 4 | 145° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 2 | 4 | 145° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 6 | 96° E | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 223° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 3 | 3 | 176° S | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 4 | 6 | 198° SSO | aucun | couvert | 0.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 119° ESE | aucun | couvert | 0.2 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 30 | 210° SSO | 12h-20h | pluie | 13.5 | 11°C |
| Plage d'Excenevex | 19 | 28 | 210° SSO | 13h-20h | pluie | 9.2 | 11°C |
| Plage du Vengeron | 17 | 23 | 210° SSO | 13h-20h | pluie | 8.1 | 11°C |
| Plage d'Hermance | 16 | 25 | 208° SSO | 13h-20h | pluie | 8.5 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 17 | 253° OSO | aucun | orage | 31.7 | 10°C |
| Lac du Bourget - Cap des Séselets | 9 | 11 | 265° O | aucun | orage | 34.5 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 32 | 167° SSE | aucun | orage | 10.1 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 162° SSE | aucun | orage | 6.6 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 15 | 188° S | aucun | pluie | 1.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 18 | 182° S | aucun | couvert | 0.3 | 14°C |
| Cruas - Nuclear Spot | 8 | 15 | 355° N | aucun | pluie | 1.5 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 22 | 167° SSE | aucun | couvert | 0.6 | 14°C |
| Nord du Pont de Chavanay | 12 | 22 | 167° SSE | aucun | couvert | 0.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 27 | 183° S | aucun | pluie | 1.3 | 13°C |
| Saint-Cyr-sur-le-Rhône | 14 | 27 | 183° S | aucun | pluie | 1.3 | 13°C |
| Saint-Romain-des-Iles | 16 | 31 | 269° O | 11h-20h | pluie | 2.1 | 13°C |
| Nord du Pont d'Arciat | 16 | 31 | 269° O | 11h-20h | pluie | 2.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 27 | 196° SSO | aucun | pluie | 2.7 | 12°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 23 | 207° SSO | 08h-17h | pluie | 2.4 | 9°C |
| Plage d'Excenevex | 14 | 18 | 13° NNE | 08h-13h | pluie | 1.8 | 9°C |
| Plage du Vengeron | 14 | 19 | 199° SSO | 08h-15h | pluie | 2.2 | 9°C |
| Plage d'Hermance | 12 | 18 | 202° SSO | 08h-14h | pluie | 1.9 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 130° SE | aucun | pluie | 2.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 7 | 142° SE | aucun | pluie | 4.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 32° NNE | aucun | pluie | 4.2 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 1° N | aucun | pluie | 1.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 18 | 16° NNE | aucun | soleil-couvert | 0.9 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 15° NNE | aucun | soleil-couvert | 0.9 | 10°C |
| Cruas - Nuclear Spot | 9 | 21 | 3° N | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 16 | 345° NNO | aucun | pluie | 2.1 | 9°C |
| Nord du Pont de Chavanay | 8 | 16 | 345° NNO | aucun | pluie | 2.1 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 351° N | aucun | soleil-couvert | 0.9 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 20° NNE | aucun | pluie | 2.1 | 8°C |
| Saint-Romain-des-Iles | 7 | 12 | 279° O | aucun | soleil-couvert | 0.8 | 7°C |
| Nord du Pont d'Arciat | 7 | 12 | 279° O | aucun | soleil-couvert | 0.8 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 351° N | aucun | soleil-couvert | 0.4 | 8°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 2° N | aucun | couvert | 0.3 | 8°C |
| Plage d'Excenevex | 5 | 8 | 2° N | aucun | couvert | 0.3 | 8°C |
| Plage du Vengeron | 5 | 8 | 2° N | aucun | couvert | 0.3 | 8°C |
| Plage d'Hermance | 5 | 8 | 2° N | aucun | couvert | 0.3 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 121° ESE | aucun | pluie | 0.9 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 119° ESE | aucun | pluie | 2.1 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 24 | 174° S | aucun | pluie | 1.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 21 | 188° S | aucun | pluie | 0.9 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 4° N | aucun | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 351° N | aucun | couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 9 | 24 | 21° NNE | aucun | couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 21° NNE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 4 | 10 | 21° NNE | aucun | couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 4° N | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 14° NNE | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 3 | 6 | 338° NNO | aucun | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 3 | 6 | 338° NNO | aucun | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 3° N | aucun | couvert | 0.0 | 5°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 360° N | aucun | couvert | 0.7 | 10°C |
| Plage d'Excenevex | 6 | 9 | 360° N | aucun | couvert | 0.7 | 10°C |
| Plage du Vengeron | 6 | 9 | 360° N | aucun | couvert | 0.7 | 10°C |
| Plage d'Hermance | 6 | 9 | 360° N | aucun | couvert | 0.7 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 103° ESE | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 119° ESE | aucun | couvert | 0.6 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 24 | 160° SSE | aucun | pluie | 1.2 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 19 | 164° SSE | aucun | couvert | 0.6 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 6 | 200° SSO | aucun | pluie | 4.9 | 10°C |
| La Roche-de-Glun - Base Nautique | 2 | 11 | 52° NE | aucun | pluie | 5.9 | 8°C |
| Cruas - Nuclear Spot | 2 | 7 | 252° OSO | aucun | pluie | 7.3 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 15 | 112° ESE | aucun | pluie | 6.8 | 8°C |
| Nord du Pont de Chavanay | 2 | 15 | 112° ESE | aucun | pluie | 6.8 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 97° E | aucun | pluie | 9.5 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 14 | 121° ESE | aucun | pluie | 8.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 8 | 191° S | aucun | pluie | 11.6 | 7°C |
| Nord du Pont d'Arciat | 4 | 8 | 191° S | aucun | pluie | 11.6 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 122° ESE | aucun | pluie | 10.8 | 7°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 19 | 273° O | 09h-13h | pluie | 5.7 | 8°C |
| Plage d'Excenevex | 12 | 19 | 273° O | 09h-13h | pluie | 5.7 | 7°C |
| Plage du Vengeron | 12 | 19 | 273° O | 09h-13h | pluie | 5.7 | 8°C |
| Plage d'Hermance | 12 | 19 | 273° O | 09h-13h | pluie | 5.7 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 263° O | aucun | orage | 12.3 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 243° OSO | aucun | orage | 12.3 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 31 | 187° S | aucun | pluie | 9.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 23 | 194° SSO | aucun | pluie | 4.2 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 4 | 14° NNE | aucun | pluie | 5.4 | 10°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 135° SE | aucun | pluie | 5.4 | 10°C |
| Cruas - Nuclear Spot | 2 | 4 | 345° NNO | aucun | pluie | 6.1 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 171° S | aucun | pluie | 4.2 | 10°C |
| Nord du Pont de Chavanay | 5 | 10 | 171° S | aucun | pluie | 4.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 178° S | aucun | couvert | 0.6 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 11 | 176° S | aucun | pluie | 4.2 | 9°C |
| Saint-Romain-des-Iles | 3 | 8 | 155° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 3 | 8 | 155° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 150° SSE | aucun | soleil-couvert | 0.0 | 11°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 49° NE | aucun | pluie | 3.0 | 8°C |
| Plage d'Excenevex | 6 | 10 | 33° NNE | aucun | soleil-couvert | 0.6 | 8°C |
| Plage du Vengeron | 6 | 10 | 49° NE | aucun | pluie | 3.0 | 8°C |
| Plage d'Hermance | 6 | 10 | 49° NE | aucun | pluie | 3.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 339° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 32° NNE | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 0 | 11 | 236° SO | aucun | pluie | 1.2 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 0 | 8 | 11° N | aucun | couvert | 0.6 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 7 | 3° N | aucun | couvert | 0.6 | 11°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 317° NO | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 2 | 7 | 338° NNO | aucun | pluie | 2.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 6 | 115° ESE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 1 | 6 | 115° ESE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 174° S | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 125° SE | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 7 | 149° SSE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 7 | 149° SSE | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 88° E | aucun | couvert | 0.1 | 11°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 319° NO | aucun | couvert | 0.2 | 9°C |
| Plage d'Excenevex | 2 | 8 | 7° N | aucun | couvert | 0.7 | 9°C |
| Plage du Vengeron | 2 | 5 | 319° NO | aucun | couvert | 0.2 | 9°C |
| Plage d'Hermance | 2 | 5 | 319° NO | aucun | couvert | 0.2 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 5 | 270° O | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 18° NNE | aucun | pluie | 2.7 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 188° S | aucun | pluie | 0.5 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 183° S | aucun | pluie | 0.5 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 215° SO | aucun | pluie | 1.8 | 12°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 205° SSO | aucun | pluie | 2.0 | 13°C |
| Cruas - Nuclear Spot | 6 | 14 | 203° SSO | aucun | pluie | 3.9 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 187° S | aucun | pluie | 2.5 | 12°C |
| Nord du Pont de Chavanay | 9 | 20 | 187° S | aucun | pluie | 2.5 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 174° S | aucun | pluie | 3.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 179° S | aucun | pluie | 2.6 | 12°C |
| Saint-Romain-des-Iles | 7 | 14 | 164° SSE | aucun | pluie | 1.4 | 11°C |
| Nord du Pont d'Arciat | 7 | 14 | 164° SSE | aucun | pluie | 1.4 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 186° S | aucun | pluie | 2.4 | 12°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 224° SO | aucun | pluie | 3.7 | 8°C |
| Plage d'Excenevex | 6 | 10 | 227° SO | aucun | pluie | 6.4 | 8°C |
| Plage du Vengeron | 6 | 9 | 224° SO | aucun | pluie | 3.7 | 8°C |
| Plage d'Hermance | 6 | 9 | 224° SO | aucun | pluie | 3.7 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 250° OSO | aucun | pluie | 8.4 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 214° SO | aucun | pluie | 6.9 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 359° N | aucun | pluie | 2.6 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 354° N | aucun | pluie | 1.9 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 4° N | aucun | pluie | 4.2 | 8°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 6° N | aucun | pluie | 5.1 | 8°C |
| Cruas - Nuclear Spot | 8 | 19 | 7° N | aucun | pluie | 4.8 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 344° NNO | aucun | pluie | 6.7 | 8°C |
| Nord du Pont de Chavanay | 6 | 12 | 344° NNO | aucun | pluie | 6.7 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 321° NO | aucun | pluie | 6.1 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 336° NNO | aucun | pluie | 7.3 | 7°C |
| Saint-Romain-des-Iles | 7 | 13 | 308° NO | aucun | pluie | 4.3 | 7°C |
| Nord du Pont d'Arciat | 7 | 13 | 308° NO | aucun | pluie | 4.3 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 306° NO | aucun | pluie | 6.1 | 8°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 13 | 211° SSO | aucun | couvert | 0.6 | 6°C |
| Plage d'Excenevex | 6 | 15 | 223° SO | aucun | couvert | 0.6 | 6°C |
| Plage du Vengeron | 5 | 13 | 211° SSO | aucun | couvert | 0.6 | 6°C |
| Plage d'Hermance | 5 | 13 | 211° SSO | aucun | couvert | 0.6 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 353° N | aucun | soleil-couvert | 0.6 | 3°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 39° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 24 | 351° N | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 26 | 351° N | aucun | couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 6° N | 11h-16h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 358° N | 11h-15h | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 12 | 28 | 9° N | 10h-16h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 8 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 16 | 348° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 348° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 6 | 13 | 319° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 6 | 13 | 319° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 350° N | aucun | soleil-couvert | 0.0 | 7°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 35° NE | aucun | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 8 | 52° NE | aucun | couvert | 0.0 | 7°C |
| Plage du Vengeron | 3 | 7 | 35° NE | aucun | couvert | 0.0 | 7°C |
| Plage d'Hermance | 3 | 7 | 35° NE | aucun | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 123° ESE | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 6° N | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 175° S | aucun | couvert | 0.7 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 172° S | aucun | couvert | 0.7 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 6 | 191° S | aucun | pluie | 1.2 | 8°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 156° SSE | aucun | couvert | 0.6 | 8°C |
| Cruas - Nuclear Spot | 2 | 6 | 332° NNO | aucun | pluie | 3.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 149° SSE | aucun | couvert | 0.6 | 8°C |
| Nord du Pont de Chavanay | 4 | 12 | 149° SSE | aucun | couvert | 0.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 193° SSO | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 173° S | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 4 | 9 | 167° SSE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 4 | 9 | 167° SSE | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 132° SE | aucun | couvert | 0.0 | 7°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 6 | 34° NE | aucun | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 3 | 6 | 46° NE | aucun | couvert | 0.0 | 9°C |
| Plage du Vengeron | 2 | 6 | 34° NE | aucun | couvert | 0.0 | 9°C |
| Plage d'Hermance | 2 | 6 | 34° NE | aucun | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 136° SE | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 322° NO | aucun | couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 172° S | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 168° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 186° S | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 192° SSO | 16h-20h | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 13 | 208° SSO | aucun | couvert | 0.1 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 180° S | 17h-20h | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 12 | 26 | 180° S | 17h-20h | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 28 | 176° S | 16h-20h | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 13 | 27 | 174° S | 16h-20h | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 9 | 16 | 181° S | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 9 | 16 | 181° S | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 181° S | aucun | couvert | 0.0 | 10°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 209° SSO | 08h-14h | pluie | 9.2 | 10°C |
| Plage d'Excenevex | 18 | 23 | 210° SSO | 08h-17h | pluie | 8.2 | 10°C |
| Plage du Vengeron | 15 | 20 | 209° SSO | 08h-14h | pluie | 9.2 | 10°C |
| Plage d'Hermance | 15 | 20 | 209° SSO | 08h-14h | pluie | 9.2 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 15 | 136° SE | aucun | pluie | 8.4 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 183° S | aucun | pluie | 10.1 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 19 | 141° SE | aucun | pluie | 6.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 21 | 326° NO | aucun | pluie | 5.4 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 15 | 351° N | aucun | pluie | 3.6 | 13°C |
| La Roche-de-Glun - Base Nautique | 6 | 23 | 205° SSO | aucun | pluie | 1.2 | 12°C |
| Cruas - Nuclear Spot | 8 | 21 | 354° N | aucun | pluie | 6.6 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 25 | 179° S | aucun | pluie | 2.4 | 12°C |
| Nord du Pont de Chavanay | 6 | 25 | 179° S | aucun | pluie | 2.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 29 | 181° S | aucun | pluie | 1.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 28 | 177° S | aucun | pluie | 4.2 | 12°C |
| Saint-Romain-des-Iles | 9 | 19 | 291° ONO | aucun | pluie | 1.8 | 10°C |
| Nord du Pont d'Arciat | 9 | 19 | 291° ONO | aucun | pluie | 1.8 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 26 | 192° SSO | aucun | pluie | 1.8 | 12°C |
