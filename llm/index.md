# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 14/10/2026 12:21 (Europe/Paris)
- Fichiers générés le : 2026-10-14T12:25:44+02:00
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

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 60° ENE | aucun | soleil | 0.0 | 19°C |
| Plage d'Excenevex | 4 | 6 | 5° N | aucun | soleil | 0.0 | 19°C |
| Plage du Vengeron | 7 | 10 | 32° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 7 | 9 | 56° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 309° NO | aucun | soleil | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 6 | 7 | 12° NNE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 359° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 354° N | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 21 | 7° N | 08h-16h | soleil-couvert | 0.0 | 23°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 346° NNO | aucun | soleil-couvert | 0.0 | 23°C |
| Cruas - Nuclear Spot | 13 | 27 | 21° NNE | 08h-16h | soleil-couvert | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 358° N | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont de Chavanay | 8 | 15 | 16° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 324° NO | aucun | soleil-couvert | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 8° N | aucun | soleil-couvert | 0.0 | 22°C |
| Saint-Romain-des-Iles | 8 | 14 | 24° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont d'Arciat | 9 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 347° NNO | aucun | soleil-couvert | 0.0 | 19°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 60° ENE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 3 | 4 | 223° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 5 | 7 | 19° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 6 | 7 | 28° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 62° ENE | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 2 | 2 | 45° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 12° NNE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 351° N | aucun | soleil | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 204° SSO | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 153° SSE | aucun | soleil | 0.0 | 23°C |
| Cruas - Nuclear Spot | 6 | 12 | 202° SSO | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 11 | 164° SSE | aucun | soleil | 0.0 | 22°C |
| Nord du Pont de Chavanay | 6 | 10 | 169° S | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 146° SE | aucun | soleil | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 203° SSO | aucun | soleil | 0.0 | 23°C |
| Saint-Romain-des-Iles | 4 | 8 | 183° S | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont d'Arciat | 4 | 8 | 190° S | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 8 | 158° SSE | aucun | soleil-couvert | 0.0 | 19°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 40° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 4 | 203° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 4 | 5 | 22° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 4 | 6 | 18° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 77° ENE | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 50° NE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 28° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 342° NNO | aucun | soleil | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 7 | 341° NNO | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 4 | 6 | 343° NNO | aucun | soleil | 0.0 | 23°C |
| Cruas - Nuclear Spot | 3 | 5 | 338° NNO | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 9 | 2° N | aucun | soleil | 0.0 | 23°C |
| Nord du Pont de Chavanay | 6 | 9 | 2° N | aucun | soleil | 0.0 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 9 | 7° N | aucun | soleil | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 5 | 9 | 7° N | aucun | soleil | 0.0 | 24°C |
| Saint-Romain-des-Iles | 6 | 10 | 354° N | aucun | soleil | 0.0 | 24°C |
| Nord du Pont d'Arciat | 6 | 10 | 354° N | aucun | soleil | 0.0 | 24°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 22° NNE | aucun | soleil | 0.0 | 23°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 24 | 49° NE | aucun | pluie | 3.7 | 15°C |
| Plage d'Excenevex | 17 | 23 | 38° NE | 16h-20h | pluie | 1.5 | 16°C |
| Plage du Vengeron | 16 | 22 | 48° NE | 17h-20h | pluie | 1.0 | 16°C |
| Plage d'Hermance | 14 | 21 | 51° NE | aucun | pluie | 3.7 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 11 | 315° NO | aucun | pluie | 3.7 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 236° SO | aucun | couvert | 0.3 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 12° NNE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 353° N | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 28 | 358° N | 09h-20h | couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 14 | 23 | 356° N | 11h-20h | couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 15 | 31 | 6° N | 08h-20h | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 20 | 355° N | aucun | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 11 | 20 | 355° N | aucun | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 351° N | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 10 | 19 | 351° N | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 11 | 18 | 8° N | 17h-20h | pluie | 1.0 | 13°C |
| Nord du Pont d'Arciat | 11 | 18 | 8° N | 17h-20h | pluie | 1.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 19 | 344° NNO | aucun | couvert | 0.0 | 14°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 30 | 33° NNE | 08h-20h | orage | 18.4 | 11°C |
| Plage d'Excenevex | 19 | 29 | 22° NNE | 08h-20h | orage | 20.8 | 10°C |
| Plage du Vengeron | 17 | 24 | 42° NE | 08h-20h | orage | 16.4 | 11°C |
| Plage d'Hermance | 16 | 26 | 38° NE | 08h-20h | orage | 17.6 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 331° NNO | aucun | pluie | 13.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 252° OSO | aucun | pluie | 17.5 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 9 | 340° NNO | aucun | pluie | 19.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 347° NNO | aucun | pluie | 14.3 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 6° N | 08h-20h | pluie | 1.2 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 359° N | 08h-19h | pluie | 1.1 | 12°C |
| Cruas - Nuclear Spot | 13 | 29 | 16° NNE | 08h-20h | pluie | 1.1 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 349° N | aucun | pluie | 1.8 | 11°C |
| Nord du Pont de Chavanay | 9 | 20 | 349° N | aucun | pluie | 1.8 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 337° NNO | aucun | pluie | 1.5 | 11°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 337° NNO | aucun | pluie | 1.8 | 11°C |
| Saint-Romain-des-Iles | 12 | 20 | 350° N | 08h-14h | pluie | 1.1 | 10°C |
| Nord du Pont d'Arciat | 12 | 20 | 350° N | 08h-14h | pluie | 1.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 342° NNO | aucun | pluie | 1.2 | 11°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 38° NE | 10h-19h | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 15 | 20 | 34° NE | 10h-19h | couvert | 0.0 | 15°C |
| Plage du Vengeron | 12 | 19 | 37° NE | 10h-19h | couvert | 0.0 | 15°C |
| Plage d'Hermance | 12 | 19 | 37° NE | 10h-19h | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 13 | 348° NNO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 33° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 306° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 21° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 2° N | 08h-14h | pluie | 1.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 18 | 350° N | aucun | pluie | 1.0 | 14°C |
| Cruas - Nuclear Spot | 12 | 25 | 19° NNE | 08h-14h | orage | 11.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 2° N | aucun | pluie | 0.8 | 14°C |
| Nord du Pont de Chavanay | 7 | 16 | 2° N | aucun | pluie | 0.8 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 333° NNO | aucun | pluie | 0.5 | 13°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 351° N | aucun | pluie | 0.7 | 14°C |
| Saint-Romain-des-Iles | 6 | 12 | 345° NNO | aucun | soleil-couvert | 0.1 | 13°C |
| Nord du Pont d'Arciat | 6 | 12 | 345° NNO | aucun | soleil-couvert | 0.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 341° NNO | aucun | couvert | 0.3 | 14°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 6 | 10 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 6 | 10 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 6 | 10 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 282° ONO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 23° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 165° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 190° S | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 355° N | aucun | pluie | 1.8 | 16°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 159° SSE | aucun | couvert | 0.6 | 16°C |
| Cruas - Nuclear Spot | 4 | 12 | 9° N | aucun | pluie | 2.4 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 149° SSE | aucun | couvert | 0.6 | 16°C |
| Nord du Pont de Chavanay | 2 | 9 | 149° SSE | aucun | couvert | 0.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 148° SSE | aucun | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 155° SSE | aucun | couvert | 0.6 | 16°C |
| Saint-Romain-des-Iles | 3 | 9 | 130° SE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 3 | 9 | 130° SE | aucun | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 182° S | aucun | couvert | 0.0 | 16°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 12° NNE | aucun | pluie | 1.2 | 17°C |
| Plage d'Excenevex | 6 | 10 | 12° NNE | aucun | soleil | 0.6 | 16°C |
| Plage du Vengeron | 6 | 10 | 12° NNE | aucun | pluie | 1.2 | 17°C |
| Plage d'Hermance | 6 | 10 | 12° NNE | aucun | pluie | 1.2 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 315° NO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 211° SSO | aucun | pluie | 1.2 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 4 | 112° ESE | aucun | pluie | 4.8 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 223° SO | aucun | soleil | 0.6 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 169° S | aucun | pluie | 1.1 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 185° S | aucun | soleil-couvert | 0.8 | 18°C |
| Cruas - Nuclear Spot | 4 | 10 | 171° S | aucun | pluie | 3.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 148° SSE | aucun | pluie | 4.3 | 18°C |
| Nord du Pont de Chavanay | 4 | 11 | 148° SSE | aucun | pluie | 4.3 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 146° SE | aucun | orage | 3.3 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 148° SSE | aucun | pluie | 1.5 | 18°C |
| Saint-Romain-des-Iles | 3 | 8 | 155° SSE | aucun | pluie | 1.7 | 17°C |
| Nord du Pont d'Arciat | 3 | 8 | 155° SSE | aucun | pluie | 1.7 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 167° SSE | aucun | pluie | 0.7 | 17°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 101° E | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 2 | 5 | 341° NNO | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 2 | 5 | 101° E | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 2 | 5 | 101° E | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 306° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 5° N | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 5° N | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 8° N | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 5° N | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 359° N | aucun | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 6 | 15 | 345° NNO | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 31° NNE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 4 | 11 | 31° NNE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 39° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 23° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 2 | 8 | 306° NO | aucun | soleil | 0.0 | 19°C |
| Nord du Pont d'Arciat | 2 | 8 | 306° NO | aucun | soleil | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 15° NNE | aucun | soleil-couvert | 0.0 | 18°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 26° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 4 | 7 | 36° NE | aucun | soleil | 0.0 | 17°C |
| Plage du Vengeron | 6 | 9 | 26° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 6 | 9 | 26° NNE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 304° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 35° NE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 360° N | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 234° SO | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 7 | 343° NNO | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 1 | 7 | 336° NNO | aucun | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 4 | 10 | 4° N | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 83° E | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 2 | 8 | 83° E | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 8 | 65° ENE | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 80° E | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 2 | 8 | 124° SE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 2 | 8 | 124° SE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 158° SSE | aucun | soleil-couvert | 0.0 | 17°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 27° NNE | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 7 | 9° N | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 3 | 6 | 27° NNE | aucun | couvert | 0.0 | 15°C |
| Plage d'Hermance | 3 | 6 | 27° NNE | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 317° NO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 39° NE | aucun | couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 358° N | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 356° N | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 359° N | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 349° N | aucun | soleil-couvert | 0.0 | 19°C |
| Cruas - Nuclear Spot | 9 | 20 | 16° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 5 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 31° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 16° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 3 | 9 | 312° NO | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 9 | 312° NO | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 6° N | aucun | soleil-couvert | 0.0 | 18°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 8 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 3 | 8 | 40° NE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 3 | 8 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 3 | 8 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 297° ONO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 3° N | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 57° ENE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 42° NE | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 14 | 11° N | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 2° N | aucun | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 5 | 14 | 35° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 40° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 10 | 40° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 41° NE | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 38° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 2 | 6 | 101° E | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 6 | 101° E | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 348° NNO | aucun | couvert | 0.0 | 14°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 224° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 8 | 13 | 221° SO | aucun | couvert | 0.0 | 17°C |
| Plage du Vengeron | 8 | 13 | 224° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 8 | 13 | 224° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 246° OSO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 253° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 180° S | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 180° S | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 196° SSO | 12h-20h | couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 14 | 30 | 195° SSO | 11h-20h | couvert | 0.0 | 19°C |
| Cruas - Nuclear Spot | 10 | 24 | 190° S | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 34 | 181° S | 11h-20h | couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 15 | 34 | 181° S | 11h-20h | couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 33 | 174° S | 10h-20h | couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 15 | 34 | 176° S | 11h-20h | couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 12 | 22 | 173° S | 13h-20h | couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 12 | 22 | 173° S | 13h-20h | couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 29 | 184° S | 11h-20h | couvert | 0.0 | 18°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 217° SO | aucun | pluie | 25.0 | 13°C |
| Plage d'Excenevex | 6 | 12 | 30° NNE | aucun | pluie | 18.8 | 13°C |
| Plage du Vengeron | 6 | 11 | 217° SO | aucun | pluie | 25.0 | 13°C |
| Plage d'Hermance | 6 | 11 | 217° SO | aucun | pluie | 25.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 243° OSO | aucun | pluie | 19.4 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 214° SO | aucun | pluie | 21.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 15° NNE | aucun | pluie | 24.6 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 3° N | aucun | pluie | 26.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 25 | 9° N | 13h-20h | orage | 15.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 4° N | aucun | pluie | 25.0 | 11°C |
| Cruas - Nuclear Spot | 12 | 27 | 13° NNE | 13h-20h | orage | 16.2 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 23 | 1° N | aucun | pluie | 27.7 | 11°C |
| Nord du Pont de Chavanay | 9 | 23 | 1° N | aucun | pluie | 27.7 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 20 | 348° NNO | aucun | pluie | 22.6 | 10°C |
| Saint-Cyr-sur-le-Rhône | 9 | 24 | 350° N | aucun | pluie | 25.0 | 10°C |
| Saint-Romain-des-Iles | 7 | 15 | 333° NNO | aucun | pluie | 14.3 | 9°C |
| Nord du Pont d'Arciat | 7 | 15 | 333° NNO | aucun | pluie | 14.3 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 353° N | aucun | pluie | 18.6 | 10°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 22° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 11 | 17 | 14° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 10 | 15 | 22° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 10 | 15 | 22° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 333° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 200° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 359° N | aucun | couvert | 0.1 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 343° NNO | aucun | couvert | 0.1 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 8° N | 08h-16h | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 6° N | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 12 | 28 | 19° NNE | 08h-18h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 5° N | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 7 | 17 | 5° N | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 10° N | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 2° N | aucun | soleil | 0.0 | 13°C |
| Saint-Romain-des-Iles | 5 | 11 | 13° NNE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 5 | 11 | 13° NNE | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 331° NNO | aucun | soleil | 0.0 | 12°C |
