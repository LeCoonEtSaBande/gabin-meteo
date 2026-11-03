# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 03/11/2026 13:53 (Europe/Paris)
- Fichiers générés le : 2026-11-03T13:56:15+01:00
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

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 24 | 27° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 17 | 24 | 23° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 15 | 20 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 16 | 22 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 14 | 334° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 11 | 16 | 357° N | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 7° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 17 | 347° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 20 | 9° N | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 345° NNO | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 12 | 24 | 25° NNE | 09h-16h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 8 | 15 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 333° NNO | aucun | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 9° N | aucun | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 7 | 13 | 18° NNE | aucun | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 8 | 13 | 16° NNE | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 336° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 41° NE | 08h-18h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 16 | 24 | 30° NNE | 08h-13h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 14 | 19 | 38° NE | 08h-13h | couvert | 0.0 | 10°C |
| Plage d'Hermance | 16 | 23 | 41° NE | 08h-14h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 314° NO | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 10 | 16 | 4° N | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 200° SSO | aucun | pluie | 0.8 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 314° NO | aucun | couvert | 0.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 18 | 17° NNE | aucun | pluie | 1.6 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 344° NNO | aucun | couvert | 0.8 | 10°C |
| Cruas - Nuclear Spot | 10 | 21 | 21° NNE | aucun | pluie | 2.5 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 11 | 28° NNE | aucun | couvert | 0.4 | 10°C |
| Nord du Pont de Chavanay | 8 | 13 | 39° NE | aucun | couvert | 0.4 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 6 | 355° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 7 | 12 | 22° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 7 | 11 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 4 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 67° ENE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 12 | 18 | 46° NE | 08h-11h | soleil | 0.0 | 11°C |
| Plage du Vengeron | 8 | 10 | 18° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 8 | 12 | 62° ENE | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 347° NNO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 7 | 15 | 51° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 244° OSO | aucun | soleil-couvert | 0.1 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 346° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 18° NNE | aucun | pluie | 1.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 11 | 358° N | aucun | pluie | 1.3 | 12°C |
| Cruas - Nuclear Spot | 6 | 14 | 33° NNE | aucun | pluie | 2.9 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 28° NNE | aucun | soleil-couvert | 0.2 | 12°C |
| Nord du Pont de Chavanay | 5 | 10 | 28° NNE | aucun | soleil-couvert | 0.2 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 5° N | aucun | soleil-couvert | 0.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 5° N | aucun | soleil-couvert | 0.4 | 11°C |
| Saint-Romain-des-Iles | 4 | 10 | 105° ESE | aucun | soleil-couvert | 0.2 | 11°C |
| Nord du Pont d'Arciat | 6 | 10 | 95° E | aucun | soleil-couvert | 0.1 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 18° NNE | aucun | soleil-couvert | 0.4 | 12°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 216° SO | aucun | pluie | 3.9 | 10°C |
| Plage d'Excenevex | 7 | 10 | 240° OSO | aucun | pluie | 2.9 | 10°C |
| Plage du Vengeron | 5 | 6 | 233° SO | aucun | pluie | 5.6 | 10°C |
| Plage d'Hermance | 6 | 9 | 226° SO | aucun | pluie | 4.2 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 3 | 186° S | aucun | pluie | 10.6 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 61° ENE | aucun | pluie | 9.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 204° SSO | aucun | orage | 11.3 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 6 | 12° NNE | aucun | pluie | 7.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 10 | 353° N | aucun | pluie | 3.8 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 8 | 342° NNO | aucun | pluie | 2.6 | 10°C |
| Cruas - Nuclear Spot | 7 | 12 | 333° NNO | aucun | pluie | 4.5 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 23° NNE | aucun | pluie | 0.9 | 10°C |
| Nord du Pont de Chavanay | 4 | 8 | 23° NNE | aucun | pluie | 0.9 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 16° NNE | aucun | pluie | 1.7 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 16° NNE | aucun | pluie | 1.7 | 8°C |
| Saint-Romain-des-Iles | 4 | 4 | 90° E | aucun | pluie | 1.6 | 8°C |
| Nord du Pont d'Arciat | 4 | 4 | 90° E | aucun | pluie | 1.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 94° E | aucun | pluie | 1.6 | 8°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 2 | 324° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 4 | 184° S | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 2 | 2 | 90° E | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 2 | 3 | 114° ESE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 77° ENE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 2 | 45° NE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 168° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 349° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 15 | 17° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 5 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 156° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 3 | 8 | 156° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 48° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 37° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 3 | 7 | 180° S | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 7 | 180° S | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 169° S | aucun | soleil-couvert | 0.0 | 11°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 345° NNO | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 5 | 7 | 345° NNO | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 5 | 7 | 345° NNO | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 5 | 7 | 345° NNO | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 108° ESE | aucun | couvert | 0.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 10 | 14° NNE | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 18 | 177° S | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 182° S | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 205° SSO | aucun | pluie | 1.4 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 15 | 213° SSO | aucun | couvert | 0.7 | 11°C |
| Cruas - Nuclear Spot | 5 | 13 | 200° SSO | aucun | pluie | 4.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 182° S | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 10 | 23 | 182° S | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 172° S | 17h-20h | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 173° S | 17h-20h | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 9 | 16 | 162° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 9 | 16 | 162° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 123° ESE | aucun | couvert | 0.0 | 12°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 253° OSO | aucun | pluie | 2.4 | 16°C |
| Plage d'Excenevex | 8 | 12 | 253° OSO | aucun | pluie | 2.4 | 16°C |
| Plage du Vengeron | 8 | 12 | 253° OSO | aucun | pluie | 2.4 | 16°C |
| Plage d'Hermance | 8 | 12 | 253° OSO | aucun | pluie | 2.4 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 125° SE | aucun | pluie | 2.1 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 256° OSO | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 23 | 167° SSE | aucun | pluie | 1.5 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 17 | 180° S | aucun | couvert | 0.6 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 209° SSO | 11h-15h | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 28 | 207° SSO | 08h-17h | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 21 | 196° SSO | aucun | couvert | 0.1 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 32 | 185° S | 08h-20h | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 13 | 32 | 185° S | 08h-20h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 35 | 176° S | 08h-20h | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 15 | 37 | 175° S | 08h-20h | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 12 | 22 | 170° S | 08h-16h | couvert | 0.6 | 16°C |
| Nord du Pont d'Arciat | 12 | 22 | 170° S | 08h-16h | couvert | 0.6 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 183° S | aucun | couvert | 0.0 | 15°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 6° N | aucun | pluie | 11.5 | 15°C |
| Plage d'Excenevex | 5 | 8 | 6° N | aucun | pluie | 10.8 | 14°C |
| Plage du Vengeron | 5 | 8 | 6° N | aucun | pluie | 11.5 | 15°C |
| Plage d'Hermance | 5 | 8 | 6° N | aucun | pluie | 11.5 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 164° SSE | aucun | pluie | 17.7 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 15 | 33° NNE | aucun | pluie | 13.8 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 30 | 158° SSE | aucun | pluie | 10.8 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 171° S | aucun | orage | 11.7 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 211° SSO | aucun | soleil-couvert | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 200° SSO | 17h-20h | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 5 | 16 | 226° SO | aucun | pluie | 3.7 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 29 | 187° S | 08h-17h | pluie | 3.0 | 16°C |
| Nord du Pont de Chavanay | 12 | 29 | 187° S | 08h-17h | pluie | 3.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 32 | 176° S | 08h-20h | soleil-couvert | 0.6 | 16°C |
| Saint-Cyr-sur-le-Rhône | 14 | 32 | 177° S | 08h-20h | pluie | 1.8 | 15°C |
| Saint-Romain-des-Iles | 11 | 20 | 165° SSE | 09h-14h | soleil | 0.5 | 17°C |
| Nord du Pont d'Arciat | 11 | 20 | 165° SSE | 09h-14h | soleil | 0.5 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 151° SSE | aucun | pluie | 1.8 | 16°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 219° SO | aucun | pluie | 1.3 | 15°C |
| Plage d'Excenevex | 4 | 6 | 197° SSO | aucun | pluie | 0.5 | 14°C |
| Plage du Vengeron | 4 | 6 | 219° SO | aucun | pluie | 1.3 | 15°C |
| Plage d'Hermance | 4 | 6 | 219° SO | aucun | pluie | 1.3 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 112° ESE | aucun | pluie | 2.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 2° N | aucun | pluie | 5.6 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 25 | 173° S | aucun | pluie | 8.7 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 167° SSE | aucun | pluie | 9.9 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 22 | 211° SSO | aucun | orage | 19.9 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 200° SSO | 09h-15h | pluie | 5.4 | 16°C |
| Cruas - Nuclear Spot | 5 | 13 | 220° SO | aucun | orage | 26.2 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 29 | 185° S | 08h-16h | pluie | 6.3 | 17°C |
| Nord du Pont de Chavanay | 13 | 29 | 185° S | 08h-16h | pluie | 6.3 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 27 | 178° S | 08h-15h | pluie | 4.4 | 17°C |
| Saint-Cyr-sur-le-Rhône | 15 | 30 | 176° S | 08h-16h | pluie | 6.3 | 16°C |
| Saint-Romain-des-Iles | 11 | 20 | 165° SSE | 12h-15h | pluie | 2.2 | 18°C |
| Nord du Pont d'Arciat | 11 | 20 | 165° SSE | 12h-15h | pluie | 2.2 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 24 | 176° S | aucun | pluie | 12.3 | 17°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 258° OSO | aucun | pluie | 13.6 | 14°C |
| Plage d'Excenevex | 9 | 18 | 232° SO | aucun | pluie | 10.6 | 14°C |
| Plage du Vengeron | 7 | 9 | 258° OSO | aucun | pluie | 13.6 | 14°C |
| Plage d'Hermance | 7 | 9 | 258° OSO | aucun | pluie | 13.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 16 | 279° O | aucun | orage | 31.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 230° SO | aucun | orage | 21.8 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 24 | 172° S | aucun | pluie | 15.5 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 22 | 170° S | aucun | pluie | 16.1 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 206° SSO | aucun | pluie | 18.8 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 10° N | 10h-13h | pluie | 2.0 | 13°C |
| Cruas - Nuclear Spot | 6 | 18 | 177° S | aucun | pluie | 20.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 349° N | aucun | pluie | 18.7 | 13°C |
| Nord du Pont de Chavanay | 9 | 22 | 349° N | aucun | pluie | 18.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 22 | 325° NO | aucun | pluie | 17.5 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 171° S | aucun | pluie | 18.7 | 13°C |
| Saint-Romain-des-Iles | 12 | 26 | 302° ONO | aucun | pluie | 6.6 | 12°C |
| Nord du Pont d'Arciat | 12 | 26 | 302° ONO | aucun | pluie | 6.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 22 | 198° SSO | aucun | pluie | 19.4 | 13°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 26 | 216° SO | 08h-14h | soleil-couvert | 0.6 | 6°C |
| Plage d'Excenevex | 20 | 29 | 227° SO | 08h-15h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 17 | 26 | 216° SO | 08h-14h | soleil-couvert | 0.6 | 6°C |
| Plage d'Hermance | 17 | 26 | 216° SO | 08h-14h | soleil-couvert | 0.6 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 20 | 239° OSO | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 222° SO | aucun | soleil-couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 21 | 349° N | aucun | soleil-couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 21° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 6° N | aucun | soleil-couvert | 0.6 | 7°C |
| Cruas - Nuclear Spot | 8 | 20 | 26° NNE | aucun | soleil-couvert | 0.6 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 327° NNO | aucun | soleil-couvert | 0.6 | 5°C |
| Nord du Pont de Chavanay | 8 | 20 | 327° NNO | aucun | soleil-couvert | 0.6 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 307° NO | aucun | couvert | 0.6 | 5°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 318° NO | aucun | couvert | 0.6 | 5°C |
| Saint-Romain-des-Iles | 10 | 20 | 287° ONO | aucun | couvert | 0.6 | 4°C |
| Nord du Pont d'Arciat | 10 | 20 | 287° ONO | aucun | couvert | 0.6 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 20 | 292° ONO | aucun | soleil-couvert | 0.0 | 5°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 27° NNE | aucun | soleil-couvert | 0.6 | 7°C |
| Plage d'Excenevex | 11 | 16 | 26° NNE | aucun | couvert | 0.7 | 8°C |
| Plage du Vengeron | 12 | 17 | 27° NNE | aucun | soleil-couvert | 0.6 | 7°C |
| Plage d'Hermance | 12 | 17 | 27° NNE | aucun | soleil-couvert | 0.6 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 333° NNO | aucun | pluie | 1.6 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 218° SO | aucun | pluie | 2.1 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 359° N | aucun | couvert | 0.2 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 351° N | aucun | couvert | 0.1 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 28 | 9° N | 10h-20h | couvert | 0.2 | 6°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 7° N | 12h-17h | couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 11 | 27 | 13° NNE | 12h-18h | couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 330° NNO | aucun | pluie | 1.0 | 5°C |
| Nord du Pont de Chavanay | 8 | 20 | 330° NNO | aucun | pluie | 1.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 315° NO | aucun | pluie | 1.5 | 5°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 321° NO | aucun | pluie | 1.0 | 5°C |
| Saint-Romain-des-Iles | 9 | 16 | 312° NO | aucun | pluie | 2.5 | 4°C |
| Nord du Pont d'Arciat | 9 | 16 | 312° NO | aucun | pluie | 2.5 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 326° NO | aucun | pluie | 1.4 | 5°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 27 | 29° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 19 | 27 | 29° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 18 | 27 | 29° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 18 | 27 | 29° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 304° NO | aucun | pluie | 1.2 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 190° S | aucun | couvert | 0.6 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 4° N | aucun | pluie | 1.2 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 345° NNO | aucun | pluie | 1.2 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 2° N | 08h-12h | couvert | 0.5 | 7°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 352° N | aucun | pluie | 1.8 | 6°C |
| Cruas - Nuclear Spot | 10 | 24 | 18° NNE | aucun | couvert | 0.6 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 336° NNO | 08h-12h | pluie | 1.0 | 7°C |
| Nord du Pont de Chavanay | 10 | 24 | 336° NNO | 08h-12h | pluie | 1.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 25 | 339° NNO | 08h-14h | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 335° NNO | 08h-12h | couvert | 0.5 | 7°C |
| Saint-Romain-des-Iles | 14 | 26 | 347° NNO | 08h-19h | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 14 | 26 | 347° NNO | 08h-19h | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 25 | 353° N | 08h-13h | couvert | 0.0 | 8°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 32° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 10 | 14 | 22° NNE | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 10 | 16 | 32° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 10 | 16 | 32° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 76° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 43° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 270° O | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 6° N | 08h-15h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 2° N | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 11 | 24 | 10° N | 09h-20h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 6 | 15 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 342° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 344° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 6 | 12 | 328° NNO | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 6 | 12 | 328° NNO | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 15 | 342° NNO | aucun | soleil-couvert | 0.0 | 7°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 30° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 8 | 13 | 21° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 8 | 14 | 30° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 8 | 14 | 30° NNE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 313° NO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 184° S | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 239° OSO | aucun | soleil | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 4° N | aucun | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 341° NNO | aucun | soleil | 0.0 | 7°C |
| Cruas - Nuclear Spot | 8 | 19 | 26° NNE | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 43° NE | aucun | soleil | 0.0 | 7°C |
| Nord du Pont de Chavanay | 3 | 10 | 43° NE | aucun | soleil | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 25° NNE | aucun | soleil | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 30° NNE | aucun | soleil | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 6 | 98° E | aucun | soleil | 0.0 | 5°C |
| Nord du Pont d'Arciat | 2 | 6 | 98° E | aucun | soleil | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 342° NNO | aucun | soleil | 0.0 | 6°C |
