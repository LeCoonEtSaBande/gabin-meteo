# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 21/11/2026 14:36 (Europe/Paris)
- Fichiers générés le : 2026-11-21T14:39:41+01:00
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

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 229° SO | aucun | soleil-couvert | 0.3 | 11°C |
| Plage d'Excenevex | 6 | 9 | 215° SO | aucun | soleil-couvert | 0.3 | 12°C |
| Plage du Vengeron | 5 | 7 | 157° SSE | aucun | soleil-couvert | 0.3 | 12°C |
| Plage d'Hermance | 6 | 9 | 197° SSO | aucun | pluie | 0.5 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 31° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 240° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 10 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 141° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 6 | 199° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 90° E | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 8 | 31° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 5 | 163° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 4 | 7 | 177° S | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 128° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 229° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 8 | 162° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 8 | 185° S | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 77° ENE | aucun | soleil-couvert | 0.4 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 23 | 35 | 214° SO | 11h-20h | orage | 21.1 | 11°C |
| Plage d'Excenevex | 20 | 26 | 208° SSO | 12h-20h | pluie | 10.7 | 11°C |
| Plage du Vengeron | 16 | 23 | 211° SSO | 12h-20h | pluie | 9.8 | 11°C |
| Plage d'Hermance | 21 | 29 | 221° SO | 12h-20h | pluie | 13.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 19 | 239° OSO | aucun | orage | 40.6 | 12°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 83° E | aucun | orage | 42.9 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 34 | 200° SSO | aucun | orage | 16.3 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 42° NE | 14h-17h | pluie | 2.9 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 197° SSO | aucun | pluie | 1.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 176° S | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 5 | 13 | 239° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 20 | 170° S | aucun | couvert | 0.7 | 13°C |
| Nord du Pont de Chavanay | 10 | 17 | 162° SSE | aucun | pluie | 1.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 22 | 179° S | aucun | pluie | 1.5 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 211° SSO | aucun | couvert | 0.4 | 13°C |
| Saint-Romain-des-Iles | 14 | 23 | 258° OSO | 11h-17h | pluie | 1.3 | 13°C |
| Nord du Pont d'Arciat | 14 | 26 | 264° O | 11h-20h | pluie | 2.3 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 22 | 269° O | 14h-20h | couvert | 0.1 | 13°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 206° SSO | 08h-17h | couvert | 0.9 | 8°C |
| Plage d'Excenevex | 15 | 21 | 207° SSO | 08h-13h | couvert | 0.3 | 8°C |
| Plage du Vengeron | 15 | 20 | 200° SSO | 08h-15h | pluie | 0.9 | 9°C |
| Plage d'Hermance | 13 | 21 | 200° SSO | 08h-13h | couvert | 0.7 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 121° ESE | aucun | pluie | 2.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 9 | 11 | 143° SE | aucun | pluie | 5.4 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 26° NNE | aucun | pluie | 4.3 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 347° NNO | aucun | pluie | 3.4 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 13 | 336° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 9 | 320° NO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 8 | 15 | 21° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 151° SSE | aucun | couvert | 0.5 | 11°C |
| Nord du Pont de Chavanay | 8 | 16 | 338° NNO | aucun | couvert | 0.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 320° NO | aucun | couvert | 0.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 326° NO | aucun | couvert | 0.3 | 11°C |
| Saint-Romain-des-Iles | 16 | 27 | 302° ONO | 10h-14h | soleil-couvert | 0.3 | 10°C |
| Nord du Pont d'Arciat | 15 | 25 | 301° ONO | 10h-13h | soleil-couvert | 0.3 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 18 | 303° ONO | aucun | pluie | 1.0 | 9°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 47° NE | 08h-18h | couvert | 0.0 | 5°C |
| Plage d'Excenevex | 18 | 25 | 27° NNE | 08h-20h | couvert | 0.0 | 5°C |
| Plage du Vengeron | 14 | 18 | 50° NE | 08h-14h | couvert | 0.0 | 6°C |
| Plage d'Hermance | 13 | 20 | 48° NE | 08h-13h | couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 330° NNO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 7 | 9 | 22° NNE | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 19 | 190° S | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 198° SSO | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 8° N | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 12 | 196° SSO | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 6 | 13 | 9° N | aucun | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 45° NE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 9 | 45° NE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 18° NNE | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 18° NNE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 6 | 10 | 46° NE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 6 | 10 | 46° NE | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 354° N | aucun | couvert | 0.0 | 8°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 70° ENE | 08h-12h | pluie | 3.0 | 6°C |
| Plage d'Excenevex | 17 | 22 | 35° NE | 08h-20h | pluie | 7.4 | 6°C |
| Plage du Vengeron | 13 | 17 | 53° NE | 08h-11h | pluie | 1.1 | 6°C |
| Plage d'Hermance | 12 | 18 | 68° ENE | 08h-12h | pluie | 2.2 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 338° NNO | aucun | couvert | 0.7 | 7°C |
| Lac du Bourget - Cap des Séselets | 7 | 9 | 346° NNO | aucun | orage | 13.6 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 23 | 192° SSO | aucun | orage | 18.2 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 10 | 312° NO | aucun | orage | 19.3 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 30° NNE | aucun | orage | 14.6 | 7°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 145° SE | aucun | orage | 12.5 | 6°C |
| Cruas - Nuclear Spot | 6 | 14 | 18° NNE | aucun | orage | 17.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 14 | 158° SSE | aucun | pluie | 5.1 | 6°C |
| Nord du Pont de Chavanay | 8 | 14 | 158° SSE | aucun | pluie | 5.1 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 180° S | aucun | pluie | 4.1 | 6°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 180° S | aucun | pluie | 5.1 | 5°C |
| Saint-Romain-des-Iles | 5 | 8 | 202° SSO | aucun | pluie | 5.4 | 6°C |
| Nord du Pont d'Arciat | 5 | 8 | 202° SSO | aucun | pluie | 5.4 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 170° S | aucun | pluie | 6.2 | 6°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 255° OSO | aucun | soleil-couvert | 0.4 | 9°C |
| Plage d'Excenevex | 5 | 8 | 255° OSO | aucun | soleil-couvert | 0.4 | 9°C |
| Plage du Vengeron | 5 | 8 | 255° OSO | aucun | soleil-couvert | 0.4 | 9°C |
| Plage d'Hermance | 5 | 8 | 255° OSO | aucun | soleil-couvert | 0.4 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 114° ESE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 107° ESE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 120° ESE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 13° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 25° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 352° N | aucun | couvert | 0.3 | 9°C |
| Cruas - Nuclear Spot | 7 | 16 | 33° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 32° NNE | aucun | pluie | 1.4 | 8°C |
| Nord du Pont de Chavanay | 3 | 10 | 32° NNE | aucun | pluie | 1.4 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 12 | 349° N | aucun | pluie | 2.5 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 342° NNO | aucun | pluie | 2.3 | 8°C |
| Saint-Romain-des-Iles | 5 | 9 | 30° NNE | aucun | pluie | 1.8 | 5°C |
| Nord du Pont d'Arciat | 5 | 9 | 30° NNE | aucun | pluie | 1.8 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 350° N | aucun | pluie | 3.3 | 8°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 12 | 234° SO | aucun | pluie | 7.3 | 8°C |
| Plage d'Excenevex | 6 | 12 | 234° SO | aucun | pluie | 7.3 | 8°C |
| Plage du Vengeron | 6 | 12 | 234° SO | aucun | pluie | 7.3 | 8°C |
| Plage d'Hermance | 6 | 12 | 234° SO | aucun | pluie | 7.3 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 137° SE | aucun | pluie | 3.8 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 117° ESE | aucun | pluie | 4.7 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 126° SE | aucun | pluie | 1.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 203° SSO | aucun | couvert | 0.3 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 184° S | aucun | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 192° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 2 | 8 | 11° N | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 178° S | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 4 | 11 | 178° S | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 174° S | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 173° S | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 4 | 9 | 173° S | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 4 | 9 | 173° S | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 128° SE | aucun | soleil-couvert | 0.0 | 7°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 35° NE | aucun | soleil-couvert | 0.4 | 6°C |
| Plage d'Excenevex | 7 | 12 | 24° NNE | aucun | soleil-couvert | 0.1 | 6°C |
| Plage du Vengeron | 7 | 12 | 35° NE | aucun | soleil-couvert | 0.4 | 6°C |
| Plage d'Hermance | 7 | 12 | 35° NE | aucun | soleil-couvert | 0.4 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 108° ESE | aucun | pluie | 1.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 13° NNE | aucun | pluie | 2.9 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 27 | 163° SSE | aucun | pluie | 2.1 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 23 | 152° SSE | aucun | pluie | 2.8 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 193° SSO | aucun | pluie | 6.9 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 18 | 205° SSO | aucun | pluie | 4.7 | 9°C |
| Cruas - Nuclear Spot | 10 | 22 | 184° S | aucun | pluie | 9.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 185° S | 10h-16h | pluie | 1.6 | 9°C |
| Nord du Pont de Chavanay | 11 | 26 | 185° S | 10h-16h | pluie | 1.6 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 24 | 173° S | aucun | pluie | 2.9 | 10°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 176° S | 08h-18h | pluie | 2.1 | 9°C |
| Saint-Romain-des-Iles | 6 | 14 | 179° S | aucun | pluie | 3.7 | 8°C |
| Nord du Pont d'Arciat | 6 | 14 | 179° S | aucun | pluie | 3.7 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 132° SE | aucun | pluie | 3.8 | 10°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 222° SO | aucun | pluie | 3.6 | 5°C |
| Plage d'Excenevex | 9 | 13 | 228° SO | aucun | pluie | 6.1 | 6°C |
| Plage du Vengeron | 8 | 12 | 222° SO | aucun | pluie | 3.6 | 5°C |
| Plage d'Hermance | 8 | 12 | 222° SO | aucun | pluie | 3.6 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 338° NNO | aucun | pluie | 8.5 | 4°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 30° NNE | aucun | pluie | 11.8 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 19 | 178° S | aucun | pluie | 9.8 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 17 | 152° SSE | aucun | pluie | 6.7 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 13 | 261° O | aucun | pluie | 14.6 | 8°C |
| La Roche-de-Glun - Base Nautique | 5 | 16 | 191° S | aucun | pluie | 12.3 | 8°C |
| Cruas - Nuclear Spot | 5 | 14 | 302° ONO | aucun | orage | 23.6 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 16 | 186° S | aucun | pluie | 10.1 | 7°C |
| Nord du Pont de Chavanay | 4 | 16 | 186° S | aucun | pluie | 10.1 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 175° S | aucun | pluie | 9.9 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 16 | 172° S | aucun | pluie | 8.7 | 7°C |
| Saint-Romain-des-Iles | 6 | 11 | 178° S | aucun | pluie | 3.3 | 7°C |
| Nord du Pont d'Arciat | 6 | 11 | 178° S | aucun | pluie | 3.3 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 15 | 127° SE | aucun | pluie | 9.8 | 6°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 13 | 248° OSO | aucun | soleil | 0.6 | 7°C |
| Plage d'Excenevex | 4 | 10 | 274° O | aucun | pluie | 1.2 | 8°C |
| Plage du Vengeron | 6 | 13 | 248° OSO | aucun | soleil | 0.6 | 7°C |
| Plage d'Hermance | 6 | 13 | 248° OSO | aucun | soleil | 0.6 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 15 | 141° SE | aucun | soleil | 0.6 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 29° NNE | aucun | soleil | 0.6 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 151° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 136° SE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 9 | 186° S | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 16 | 213° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 1 | 9 | 324° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 134° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 11 | 134° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 22 | 187° S | aucun | soleil-couvert | 0.6 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 18 | 179° S | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 12 | 223° SO | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 12 | 223° SO | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 19 | 203° SSO | aucun | pluie | 4.2 | 9°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 33° NNE | aucun | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 8 | 12 | 34° NE | aucun | couvert | 0.0 | 5°C |
| Plage du Vengeron | 9 | 13 | 33° NNE | aucun | couvert | 0.0 | 7°C |
| Plage d'Hermance | 9 | 13 | 33° NNE | aucun | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 358° N | aucun | couvert | 0.3 | 7°C |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 19° NNE | aucun | couvert | 0.3 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 30 | 163° SSE | aucun | pluie | 0.6 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 24 | 146° SE | aucun | pluie | 0.7 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 28 | 193° SSO | aucun | couvert | 0.4 | 13°C |
| La Roche-de-Glun - Base Nautique | 14 | 31 | 199° SSO | 09h-20h | couvert | 0.4 | 13°C |
| Cruas - Nuclear Spot | 12 | 27 | 176° S | aucun | pluie | 4.4 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 32 | 187° S | 08h-20h | couvert | 0.1 | 14°C |
| Nord du Pont de Chavanay | 13 | 32 | 187° S | 08h-20h | couvert | 0.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 22 | 44 | 172° S | 08h-20h | couvert | 0.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 16 | 37 | 177° S | 08h-20h | couvert | 0.2 | 13°C |
| Saint-Romain-des-Iles | 15 | 27 | 174° S | 10h-20h | couvert | 0.6 | 14°C |
| Nord du Pont d'Arciat | 15 | 27 | 174° S | 10h-20h | couvert | 0.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 27 | 161° SSE | 17h-20h | soleil-couvert | 0.0 | 13°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 20 | 20° NNE | aucun | pluie | 9.2 | 9°C |
| Plage d'Excenevex | 7 | 10 | 181° S | aucun | pluie | 3.9 | 9°C |
| Plage du Vengeron | 6 | 20 | 20° NNE | aucun | pluie | 9.2 | 9°C |
| Plage d'Hermance | 6 | 20 | 20° NNE | aucun | pluie | 9.2 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 15 | 79° E | aucun | pluie | 7.3 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 20 | 28° NNE | aucun | pluie | 18.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 29 | 160° SSE | aucun | pluie | 3.6 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 27 | 154° SSE | aucun | pluie | 2.4 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 164° SSE | 08h-14h | pluie | 10.5 | 15°C |
| La Roche-de-Glun - Base Nautique | 14 | 30 | 177° S | 08h-15h | pluie | 16.2 | 14°C |
| Cruas - Nuclear Spot | 14 | 35 | 175° S | 08h-14h | pluie | 2.6 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 26 | 166° SSE | aucun | pluie | 21.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 26 | 166° SSE | aucun | pluie | 21.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 38 | 178° S | aucun | pluie | 5.4 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 27 | 153° SSE | aucun | pluie | 13.8 | 12°C |
| Saint-Romain-des-Iles | 8 | 24 | 182° S | aucun | pluie | 2.6 | 13°C |
| Nord du Pont d'Arciat | 8 | 24 | 182° S | aucun | pluie | 2.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 31 | 186° S | aucun | pluie | 9.0 | 12°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 240° OSO | aucun | pluie | 3.0 | 10°C |
| Plage d'Excenevex | 5 | 7 | 193° SSO | aucun | pluie | 1.8 | 10°C |
| Plage du Vengeron | 6 | 9 | 240° OSO | aucun | pluie | 3.0 | 10°C |
| Plage d'Hermance | 6 | 9 | 240° OSO | aucun | pluie | 3.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 124° SE | aucun | pluie | 2.4 | 9°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 9° N | aucun | pluie | 1.9 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 156° SSE | aucun | pluie | 1.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 160° SSE | aucun | soleil-couvert | 0.6 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 7 | 54° NE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 273° O | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 2 | 7 | 51° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 136° SE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 8 | 136° SE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 149° SSE | aucun | soleil | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 152° SSE | aucun | soleil | 0.6 | 13°C |
| Saint-Romain-des-Iles | 4 | 10 | 184° S | aucun | pluie | 2.4 | 12°C |
| Nord du Pont d'Arciat | 4 | 10 | 184° S | aucun | pluie | 2.4 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 163° SSE | aucun | pluie | 3.0 | 13°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 3 | 7 | 55° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 4 | 6 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 4 | 6 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 7 | 63° ENE | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 23° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 12 | 356° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 162° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 359° N | aucun | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 347° NNO | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 6 | 14 | 350° N | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 337° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 2 | 8 | 337° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 83° E | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 66° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 6 | 274° O | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 3 | 6 | 274° O | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 342° NNO | aucun | soleil-couvert | 0.1 | 10°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 9° N | aucun | pluie | 1.8 | 10°C |
| Plage d'Excenevex | 2 | 6 | 39° NE | aucun | pluie | 4.2 | 9°C |
| Plage du Vengeron | 3 | 6 | 9° N | aucun | pluie | 1.8 | 10°C |
| Plage d'Hermance | 3 | 6 | 9° N | aucun | pluie | 1.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 96° E | aucun | couvert | 0.6 | 5°C |
| Lac du Bourget - Cap des Séselets | 1 | 3 | 129° SE | aucun | couvert | 0.6 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 23° NNE | aucun | couvert | 0.6 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 22° NNE | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 10° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 10 | 26 | 15° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 11° N | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 7 | 15 | 11° N | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 4° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 9° N | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 4 | 8 | 337° NNO | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 8 | 337° NNO | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 355° N | aucun | soleil-couvert | 0.0 | 9°C |
