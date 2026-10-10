# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 10/10/2026 22:38 (Europe/Paris)
- Fichiers générés le : 2026-10-10T22:46:18+02:00
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

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 212° SSO | 08h-14h | couvert | 0.4 | 16°C |
| Plage d'Excenevex | 9 | 14 | 228° SO | aucun | soleil-couvert | 0.3 | 16°C |
| Plage du Vengeron | 9 | 13 | 207° SSO | aucun | soleil-couvert | 0.9 | 16°C |
| Plage d'Hermance | 11 | 14 | 190° S | aucun | soleil-couvert | 0.3 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 171° S | aucun | pluie | 2.7 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 360° N | aucun | soleil-couvert | 0.3 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 20 | 5° N | aucun | soleil-couvert | 0.5 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 354° N | 13h-16h | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 9° N | aucun | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 317° NO | aucun | soleil | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 20° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 7 | 14 | 24° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 16 | 344° NNO | aucun | pluie | 2.3 | 19°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 7° N | aucun | pluie | 0.7 | 19°C |
| Saint-Romain-des-Iles | 6 | 14 | 322° NO | aucun | pluie | 1.5 | 17°C |
| Nord du Pont d'Arciat | 7 | 16 | 323° NO | aucun | pluie | 0.8 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 324° NO | aucun | orage | 10.8 | 16°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 326° NO | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 6 | 8 | 325° NO | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 9 | 11 | 324° NO | aucun | couvert | 0.0 | 16°C |
| Plage d'Hermance | 6 | 8 | 358° N | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 308° NO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 9 | 11 | 17° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 18 | 7° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 19 | 346° NNO | 13h-16h | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 26 | 10° N | 11h-20h | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 13° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 18° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 15 | 18° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 8° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 17° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 7 | 12 | 7° N | aucun | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 7 | 11 | 335° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 355° N | aucun | soleil-couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 52° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 12 | 16 | 42° NE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 10 | 13 | 35° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 9 | 13 | 54° NE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 289° ONO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 351° N | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 15 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 335° NNO | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 24 | 6° N | 08h-18h | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 7° N | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 18 | 6° N | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 8 | 16 | 8° N | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 356° N | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 18° NNE | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 7 | 13 | 28° NNE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 7 | 12 | 26° NNE | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 356° N | aucun | soleil | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 257° OSO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 2 | 3 | 146° SE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 2 | 3 | 29° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 4 | 5 | 109° ESE | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 303° ONO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 205° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 47° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 338° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 24 | 10° N | 11h-20h | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 12 | 20 | 12° NNE | 14h-20h | soleil-couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 24° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 9 | 18 | 24° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 15 | 16° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 8 | 15 | 16° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 6 | 10 | 56° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 6 | 10 | 56° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 10° N | aucun | soleil-couvert | 0.0 | 19°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 72° ENE | aucun | soleil | 0.0 | 22°C |
| Plage d'Excenevex | 9 | 12 | 59° ENE | aucun | soleil | 0.0 | 22°C |
| Plage du Vengeron | 8 | 10 | 35° NE | aucun | soleil | 0.0 | 22°C |
| Plage d'Hermance | 8 | 13 | 52° NE | aucun | soleil | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 315° NO | aucun | soleil | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 243° OSO | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 322° NO | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 225° SO | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 23 | 8° N | 08h-20h | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 11 | 20 | 8° N | 12h-18h | soleil | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 21° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont de Chavanay | 9 | 18 | 21° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 4° N | aucun | soleil-couvert | 0.1 | 20°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 4° N | aucun | soleil-couvert | 0.1 | 20°C |
| Saint-Romain-des-Iles | 8 | 13 | 20° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 8 | 13 | 20° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 341° NNO | aucun | soleil-couvert | 0.0 | 20°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 348° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 3 | 4 | 348° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 3 | 4 | 348° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 3 | 4 | 348° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 111° ESE | aucun | soleil | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 15° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 5 | 120° ESE | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 209° SSO | aucun | soleil | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 190° S | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 188° S | aucun | soleil-couvert | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 164° SSE | aucun | soleil-couvert | 0.0 | 21°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 355° N | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Excenevex | 4 | 6 | 355° N | aucun | soleil-couvert | 0.0 | 21°C |
| Plage du Vengeron | 4 | 6 | 355° N | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Hermance | 4 | 6 | 355° N | aucun | soleil-couvert | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 105° ESE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 180° S | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 332° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 16° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 356° N | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 345° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 12° NNE | aucun | soleil-couvert | 0.0 | 18°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 26° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 11 | 16 | 26° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 11 | 16 | 26° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 11 | 16 | 26° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 326° NO | aucun | couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 227° SO | aucun | pluie | 3.6 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 349° N | aucun | couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 14° NNE | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 6° N | 10h-20h | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 355° N | 11h-20h | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 26 | 348° NNO | 12h-20h | couvert | 0.6 | 13°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 23 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 14 | 20 | 17° NNE | 08h-20h | couvert | 0.0 | 14°C |
| Plage du Vengeron | 14 | 23 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 14 | 23 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 348° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 33° NNE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 352° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 330° NNO | aucun | couvert | 0.1 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 8° N | 08h-20h | pluie | 1.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 1° N | aucun | couvert | 0.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 21 | 329° NNO | aucun | couvert | 0.0 | 14°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 22° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 14 | 20 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 14 | 21 | 22° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Plage d'Hermance | 14 | 21 | 22° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 342° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 44° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 14 | 309° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 8° N | 10h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 8° N | 13h-16h | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 337° NNO | aucun | soleil | 0.0 | 14°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 26 | 30° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 17 | 23 | 26° NNE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 18 | 26 | 30° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Plage d'Hermance | 18 | 26 | 30° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 16 | 325° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 31° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 34° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 358° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 13° NNE | 08h-15h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 2° N | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 335° NNO | aucun | soleil-couvert | 0.0 | 13°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 20 | 24° NNE | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 8 | 15 | 15° NNE | aucun | soleil | 0.0 | 12°C |
| Plage du Vengeron | 10 | 20 | 24° NNE | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 10 | 20 | 24° NNE | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 321° NO | aucun | soleil | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 33° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 351° N | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 150° SSE | aucun | soleil | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 354° N | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 337° NNO | aucun | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 344° NNO | aucun | soleil | 0.0 | 14°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 9 | 15 | 33° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 10 | 16 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 10 | 16 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 328° NNO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 36° NE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 7° N | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 7° N | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 2° N | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 349° N | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 329° NNO | aucun | soleil | 0.0 | 15°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 6 | 10 | 40° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 6 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 294° ONO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 26° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 186° S | aucun | soleil | 0.0 | 21°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 185° S | aucun | soleil | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 5° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 329° NNO | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 358° N | aucun | soleil-couvert | 0.0 | 16°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 19 | 23° NNE | 15h-20h | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 12 | 17 | 23° NNE | 14h-20h | soleil | 0.0 | 14°C |
| Plage du Vengeron | 15 | 19 | 23° NNE | 15h-20h | soleil | 0.0 | 14°C |
| Plage d'Hermance | 15 | 19 | 23° NNE | 15h-20h | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 331° NNO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 17° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 3° N | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 353° N | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 5° N | 13h-20h | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 3° N | 17h-20h | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 322° NO | aucun | soleil-couvert | 0.0 | 13°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 22 | 29° NNE | 08h-11h | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 10 | 18 | 29° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 12 | 22 | 29° NNE | 08h-11h | soleil | 0.0 | 14°C |
| Plage d'Hermance | 12 | 22 | 29° NNE | 08h-11h | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 311° NO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 31° NNE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 31° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 22° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 20 | 358° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 15 | 329° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 22° NNE | aucun | soleil-couvert | 0.0 | 13°C |
