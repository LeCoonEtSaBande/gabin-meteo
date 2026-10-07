# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 08/10/2026 00:11 (Europe/Paris)
- Fichiers générés le : 2026-10-08T00:15:31+02:00
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

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 337° NNO | 17h-20h | pluie | 1.2 | 14°C |
| Plage d'Excenevex | 14 | 21 | 342° NNO | aucun | orage | 13.4 | 14°C |
| Plage du Vengeron | 11 | 15 | 219° SO | aucun | pluie | 10.5 | 14°C |
| Plage d'Hermance | 17 | 27 | 353° N | 17h-20h | pluie | 0.8 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 20 | 343° NNO | 15h-20h | orage | 8.9 | 14°C |
| Lac du Bourget - Cap des Séselets | 15 | 24 | 340° NNO | 13h-20h | orage | 12.2 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 36 | 348° NNO | 10h-20h | orage | 33.7 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 17 | 30 | 3° N | 11h-20h | orage | 11.3 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 26 | 11° N | 12h-20h | pluie | 6.6 | 15°C |
| La Roche-de-Glun - Base Nautique | 9 | 21 | 344° NNO | aucun | pluie | 7.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 24 | 331° NNO | 14h-20h | pluie | 4.0 | 14°C |
| Nord du Pont de Chavanay | 12 | 24 | 321° NO | 10h-13h | pluie | 1.5 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 322° NO | aucun | orage | 15.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 20 | 348° NNO | aucun | pluie | 13.6 | 13°C |
| Saint-Romain-des-Iles | 12 | 23 | 309° NO | 10h-16h | couvert | 0.4 | 14°C |
| Nord du Pont d'Arciat | 14 | 24 | 311° NO | 08h-16h | pluie | 1.3 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 21 | 324° NO | 10h-19h | pluie | 1.8 | 14°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 41° NE | 08h-18h | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 18 | 24 | 26° NNE | 08h-16h | soleil | 0.0 | 16°C |
| Plage du Vengeron | 14 | 18 | 40° NE | 08h-13h | soleil | 0.0 | 16°C |
| Plage d'Hermance | 13 | 19 | 44° NE | 08h-14h | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 14 | 330° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 8 | 13 | 9° N | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 15° NNE | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 349° N | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 33 | 10° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 352° N | 08h-16h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 22 | 360° N | 09h-18h | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 11 | 21 | 2° N | 11h-14h | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 345° NNO | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 360° N | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 8 | 16 | 342° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 10 | 16 | 327° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 18 | 342° NNO | aucun | soleil | 0.0 | 14°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 214° SO | 11h-20h | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 11 | 14 | 234° SO | aucun | pluie | 1.9 | 16°C |
| Plage du Vengeron | 8 | 11 | 218° SO | aucun | pluie | 1.2 | 15°C |
| Plage d'Hermance | 9 | 14 | 202° SSO | aucun | pluie | 1.7 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 180° S | aucun | pluie | 3.5 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 217° SO | aucun | soleil-couvert | 0.2 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 36° NE | aucun | soleil-couvert | 0.6 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 349° N | aucun | soleil-couvert | 0.1 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 350° N | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 8 | 13 | 360° N | aucun | soleil-couvert | 0.1 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 15° NNE | aucun | soleil-couvert | 0.1 | 16°C |
| Nord du Pont de Chavanay | 5 | 10 | 15° NNE | aucun | soleil-couvert | 0.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 34° NE | aucun | soleil-couvert | 0.2 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 34° NE | aucun | soleil-couvert | 0.2 | 15°C |
| Saint-Romain-des-Iles | 6 | 14 | 189° S | aucun | pluie | 1.5 | 14°C |
| Nord du Pont d'Arciat | 6 | 14 | 189° S | aucun | pluie | 1.5 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 4 | 103° ESE | aucun | soleil-couvert | 0.2 | 14°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 73° ENE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 12 | 17 | 30° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 7 | 9 | 49° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 6 | 9 | 81° E | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 295° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 225° SO | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 16° NNE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 351° N | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 25 | 8° N | 08h-20h | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 6° N | 10h-19h | couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 12° NNE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 9 | 18 | 12° NNE | aucun | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 356° N | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 356° N | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 6 | 12 | 13° NNE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 6 | 12 | 13° NNE | aucun | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 360° N | aucun | couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 54° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 11 | 15 | 27° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 8 | 10 | 32° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 7 | 11 | 48° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 301° ONO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 37° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 17° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 345° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 6° N | 08h-20h | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 1° N | 12h-17h | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 1° N | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 18 | 1° N | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 17 | 356° N | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 351° N | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 7 | 14 | 13° NNE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 7 | 14 | 13° NNE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 332° NNO | aucun | soleil | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 7° N | aucun | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 5 | 7 | 7° N | aucun | soleil | 0.0 | 17°C |
| Plage du Vengeron | 5 | 7 | 7° N | aucun | soleil | 0.0 | 17°C |
| Plage d'Hermance | 5 | 7 | 7° N | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 310° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 9° N | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 328° NNO | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 7° N | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 3° N | 11h-17h | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 358° N | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 8° N | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 7 | 17 | 8° N | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 358° N | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 12 | 358° N | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 12 | 358° N | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 343° NNO | aucun | soleil | 0.0 | 17°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 6 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 6 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 6 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 315° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 198° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 16 | 326° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 2° N | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 10° N | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 4° N | aucun | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 8° N | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 7 | 16 | 8° N | aucun | soleil-couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 1° N | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 1° N | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 5 | 11 | 351° N | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 5 | 11 | 351° N | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 345° NNO | aucun | soleil-couvert | 0.0 | 19°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 148° SSE | aucun | pluie | 1.8 | 17°C |
| Plage d'Excenevex | 2 | 7 | 174° S | aucun | pluie | 1.2 | 16°C |
| Plage du Vengeron | 4 | 7 | 148° SSE | aucun | pluie | 1.8 | 17°C |
| Plage d'Hermance | 4 | 7 | 148° SSE | aucun | pluie | 1.8 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 10 | 261° O | aucun | pluie | 1.8 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 141° SE | aucun | pluie | 2.4 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 358° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 356° N | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 8° N | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 359° N | aucun | couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 9° N | aucun | soleil-couvert | 0.6 | 20°C |
| Nord du Pont de Chavanay | 6 | 16 | 9° N | aucun | soleil-couvert | 0.6 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 16 | 20° NNE | aucun | pluie | 5.4 | 19°C |
| Saint-Cyr-sur-le-Rhône | 5 | 16 | 3° N | aucun | pluie | 1.8 | 20°C |
| Saint-Romain-des-Iles | 8 | 12 | 306° NO | aucun | pluie | 6.7 | 19°C |
| Nord du Pont d'Arciat | 8 | 12 | 306° NO | aucun | pluie | 6.7 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 19 | 262° O | aucun | pluie | 3.6 | 19°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 32° NNE | 17h-20h | pluie | 2.0 | 13°C |
| Plage d'Excenevex | 16 | 23 | 28° NNE | 15h-20h | pluie | 5.4 | 14°C |
| Plage du Vengeron | 13 | 19 | 32° NNE | 17h-20h | pluie | 2.0 | 13°C |
| Plage d'Hermance | 13 | 19 | 32° NNE | 17h-20h | pluie | 2.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 17 | 358° N | aucun | pluie | 4.3 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 337° NNO | aucun | pluie | 1.3 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 24 | 353° N | aucun | couvert | 0.7 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 27 | 350° N | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 33 | 4° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 359° N | 10h-20h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 26 | 356° N | aucun | soleil-couvert | 0.7 | 13°C |
| Nord du Pont de Chavanay | 10 | 26 | 356° N | aucun | soleil-couvert | 0.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 357° N | aucun | soleil-couvert | 0.1 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 360° N | aucun | soleil-couvert | 0.1 | 12°C |
| Saint-Romain-des-Iles | 8 | 16 | 347° NNO | aucun | couvert | 0.7 | 12°C |
| Nord du Pont d'Arciat | 8 | 16 | 347° NNO | aucun | couvert | 0.7 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 20 | 346° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 28 | 24° NNE | 08h-16h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 18 | 30 | 30° NNE | 08h-16h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 19 | 28 | 24° NNE | 08h-16h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 19 | 28 | 24° NNE | 08h-16h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 339° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 22 | 36° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 359° N | aucun | soleil-couvert | 0.3 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 346° NNO | aucun | couvert | 0.3 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 38 | 1° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 14 | 32 | 352° N | 08h-16h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 27 | 342° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 10 | 27 | 342° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 23 | 333° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 26 | 332° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 12 | 22 | 343° NNO | 08h-12h | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 12 | 22 | 343° NNO | 08h-12h | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 342° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 5 | 9 | 25° NNE | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 4 | 8 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 4 | 8 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 304° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 171° S | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 2° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 344° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 10° N | 10h-20h | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 10° N | 13h-18h | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 1° N | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 8 | 20 | 1° N | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 17 | 358° N | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 355° N | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 6 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 6 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 348° NNO | aucun | soleil | 0.0 | 15°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 119° ESE | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 5 | 9 | 34° NE | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 4 | 10 | 119° ESE | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 4 | 10 | 119° ESE | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 303° ONO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 160° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 10° N | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 345° NNO | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 33 | 10° N | 08h-20h | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 5° N | 09h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 355° N | aucun | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 9 | 22 | 355° N | aucun | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 350° N | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 350° N | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 14 | 358° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 8 | 14 | 358° N | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 350° N | aucun | couvert | 0.0 | 15°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 213° SSO | 08h-18h | soleil-couvert | 0.1 | 15°C |
| Plage d'Excenevex | 14 | 19 | 230° SO | 08h-20h | soleil | 0.0 | 15°C |
| Plage du Vengeron | 13 | 18 | 213° SSO | 08h-18h | soleil-couvert | 0.1 | 15°C |
| Plage d'Hermance | 13 | 18 | 213° SSO | 08h-18h | soleil-couvert | 0.1 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 242° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 222° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 13° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 14 | 351° N | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 14° NNE | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 341° NNO | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 100° E | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 4 | 11 | 100° E | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 225° SO | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 90° E | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 7 | 13 | 264° O | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 7 | 13 | 264° O | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 129° SE | aucun | soleil-couvert | 0.0 | 15°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 29 | 33° NNE | 08h-20h | soleil | 0.3 | 10°C |
| Plage d'Excenevex | 22 | 31 | 31° NNE | 08h-20h | soleil | 0.1 | 10°C |
| Plage du Vengeron | 20 | 29 | 33° NNE | 08h-20h | soleil | 0.3 | 10°C |
| Plage d'Hermance | 20 | 29 | 33° NNE | 08h-20h | soleil | 0.3 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 26 | 15° NNE | 09h-18h | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 11 | 29 | 25° NNE | 12h-20h | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 23 | 339° NNO | aucun | couvert | 0.6 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 24 | 335° NNO | aucun | couvert | 0.6 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 42 | 359° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 18 | 38 | 351° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 33 | 350° N | 08h-20h | soleil-couvert | 0.1 | 11°C |
| Nord du Pont de Chavanay | 15 | 33 | 350° N | 08h-20h | soleil-couvert | 0.1 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 31 | 353° N | 08h-20h | soleil-couvert | 0.1 | 11°C |
| Saint-Cyr-sur-le-Rhône | 15 | 32 | 351° N | 08h-20h | soleil-couvert | 0.1 | 11°C |
| Saint-Romain-des-Iles | 16 | 29 | 8° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 16 | 29 | 8° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 30 | 354° N | 08h-20h | soleil-couvert | 0.0 | 11°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 28 | 22° NNE | 08h-14h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 16 | 24 | 23° NNE | 08h-14h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 17 | 28 | 22° NNE | 08h-14h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 17 | 28 | 22° NNE | 08h-14h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 17 | 346° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 44° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 6° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 354° N | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 36 | 12° NNE | 08h-14h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 14 | 31 | 8° N | 08h-14h | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 355° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 12 | 28 | 355° N | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 23 | 348° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 349° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 14 | 25 | 352° N | 08h-14h | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 14 | 25 | 352° N | 08h-14h | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 354° N | aucun | soleil-couvert | 0.0 | 12°C |
