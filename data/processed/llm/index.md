# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 13/10/2026 01:43 (Europe/Paris)
- Fichiers générés le : 2026-10-13T01:47:14+02:00
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

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 200° SSO | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 6 | 202° SSO | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 4 | 6 | 360° N | aucun | couvert | 0.0 | 16°C |
| Plage d'Hermance | 4 | 6 | 159° SSE | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 347° NNO | aucun | couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 32° NNE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 360° N | 13h-18h | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 14 | 23 | 349° N | 13h-18h | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 22 | 2° N | 16h-20h | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 10° N | aucun | soleil | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 14 | 24° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont de Chavanay | 7 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 13° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 30° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 3 | 6 | 171° S | aucun | couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 3 | 5 | 173° S | aucun | couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 4 | 27° NNE | aucun | couvert | 0.0 | 17°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 53° NE | aucun | soleil | 0.0 | 20°C |
| Plage d'Excenevex | 3 | 5 | 336° NNO | aucun | soleil | 0.0 | 19°C |
| Plage du Vengeron | 7 | 9 | 11° N | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 7 | 10 | 45° NE | aucun | soleil | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 277° O | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 347° NNO | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 351° N | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 346° NNO | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 21 | 6° N | 09h-16h | soleil-couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 349° N | aucun | soleil-couvert | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 360° N | aucun | soleil | 0.0 | 23°C |
| Nord du Pont de Chavanay | 8 | 15 | 3° N | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 341° NNO | aucun | soleil-couvert | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 354° N | aucun | soleil-couvert | 0.0 | 23°C |
| Saint-Romain-des-Iles | 8 | 13 | 6° N | aucun | soleil | 0.0 | 21°C |
| Nord du Pont d'Arciat | 8 | 13 | 331° NNO | aucun | soleil | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 339° NNO | aucun | soleil-couvert | 0.0 | 20°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 53° NE | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 3 | 4 | 196° SSO | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 5 | 6 | 22° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 4 | 6 | 31° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 298° ONO | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 62° ENE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 17° NNE | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 348° NNO | aucun | soleil | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 11 | 187° S | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 7 | 12 | 180° S | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 161° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 4 | 8 | 161° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 183° S | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 183° S | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 4 | 9 | 202° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 4 | 9 | 202° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 233° SO | aucun | soleil-couvert | 0.0 | 18°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 47° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 4 | 219° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 4 | 5 | 25° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 4 | 6 | 23° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 56° NE | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 45° NE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 15 | 25° NNE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 347° NNO | aucun | soleil | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 18 | 7° N | 17h-20h | soleil | 0.0 | 23°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 9° N | aucun | soleil | 0.0 | 24°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 20° NNE | aucun | soleil | 0.0 | 24°C |
| Nord du Pont de Chavanay | 8 | 15 | 20° NNE | aucun | soleil | 0.0 | 24°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 13 | 11° N | aucun | soleil | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 7 | 13 | 11° N | aucun | soleil | 0.0 | 24°C |
| Saint-Romain-des-Iles | 5 | 9 | 42° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 5 | 9 | 42° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 8° N | aucun | soleil | 0.0 | 22°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 344° NNO | aucun | pluie | 6.9 | 15°C |
| Plage d'Excenevex | 9 | 16 | 115° ESE | aucun | orage | 18.2 | 14°C |
| Plage du Vengeron | 10 | 14 | 66° ENE | aucun | pluie | 7.5 | 16°C |
| Plage d'Hermance | 11 | 16 | 6° N | aucun | orage | 10.1 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 11 | 331° NNO | aucun | orage | 15.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 211° SSO | aucun | pluie | 3.5 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 18 | 26° NNE | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 7° N | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 27 | 13° NNE | 10h-20h | couvert | 0.3 | 13°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 353° N | 10h-18h | couvert | 0.6 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 350° N | aucun | pluie | 1.8 | 13°C |
| Nord du Pont de Chavanay | 10 | 22 | 350° N | aucun | pluie | 1.8 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 345° NNO | 11h-16h | couvert | 0.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 344° NNO | 11h-17h | couvert | 0.5 | 13°C |
| Saint-Romain-des-Iles | 12 | 21 | 332° NNO | 08h-17h | pluie | 2.8 | 13°C |
| Nord du Pont d'Arciat | 12 | 21 | 332° NNO | 08h-17h | pluie | 2.8 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 340° NNO | 11h-17h | couvert | 0.6 | 13°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 28° NNE | aucun | couvert | 0.0 | 17°C |
| Plage d'Excenevex | 7 | 11 | 28° NNE | aucun | couvert | 0.0 | 17°C |
| Plage du Vengeron | 7 | 11 | 28° NNE | aucun | couvert | 0.0 | 17°C |
| Plage d'Hermance | 7 | 11 | 28° NNE | aucun | couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 322° NO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 217° SO | aucun | pluie | 7.6 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 339° NNO | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 11° N | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 27 | 8° N | 08h-20h | couvert | 0.7 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 2° N | 09h-12h | couvert | 0.3 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 19 | 337° NNO | aucun | pluie | 1.3 | 10°C |
| Nord du Pont de Chavanay | 9 | 19 | 337° NNO | aucun | pluie | 1.3 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 315° NO | aucun | pluie | 2.8 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 324° NO | aucun | pluie | 1.6 | 9°C |
| Saint-Romain-des-Iles | 10 | 18 | 308° NO | 12h-15h | pluie | 1.6 | 9°C |
| Nord du Pont d'Arciat | 10 | 18 | 308° NO | 12h-15h | pluie | 1.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 327° NNO | aucun | pluie | 3.3 | 9°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 35° NE | 16h-20h | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 10 | 16 | 35° NE | 16h-20h | soleil | 0.0 | 17°C |
| Plage du Vengeron | 10 | 16 | 35° NE | 16h-20h | soleil | 0.0 | 17°C |
| Plage d'Hermance | 10 | 16 | 35° NE | 16h-20h | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 339° NNO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 355° N | aucun | pluie | 1.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 346° NNO | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 21° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 22 | 4° N | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 4° N | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 15° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 5 | 13 | 15° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 324° NO | aucun | soleil-couvert | 0.1 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 5° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 3 | 8 | 13° NNE | aucun | pluie | 0.6 | 11°C |
| Nord du Pont d'Arciat | 3 | 8 | 13° NNE | aucun | pluie | 0.6 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 349° N | aucun | soleil-couvert | 0.4 | 12°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 22° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 10 | 16 | 17° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 12 | 17 | 22° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 12 | 17 | 22° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 335° NNO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 34° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 173° S | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 168° SSE | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 18 | 6° N | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 339° NNO | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 13 | 11° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 13 | 11° N | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 325° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 14° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 2 | 8 | 48° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 8 | 48° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 326° NO | aucun | soleil-couvert | 0.0 | 13°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 27° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 8 | 13 | 17° NNE | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 8 | 13 | 27° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 8 | 13 | 27° NNE | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 327° NNO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 34° NE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 56° NE | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 56° NE | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 354° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 15 | 337° NNO | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 21° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 11 | 21° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 12 | 326° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 22° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 2 | 7 | 30° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 7 | 30° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 322° NO | aucun | soleil-couvert | 0.0 | 13°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 22° NNE | 10h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 18 | 26 | 25° NNE | 09h-20h | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 19 | 26 | 22° NNE | 10h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 19 | 26 | 22° NNE | 10h-20h | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 347° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 6° N | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 360° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 19 | 352° N | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 10° N | 09h-20h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 14 | 31 | 5° N | 11h-20h | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 354° N | 13h-19h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 11 | 26 | 354° N | 13h-19h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 21 | 354° N | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 351° N | 13h-19h | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 11 | 22 | 353° N | 14h-20h | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 11 | 22 | 353° N | 14h-20h | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 348° NNO | aucun | soleil-couvert | 0.0 | 11°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 29 | 23° NNE | 08h-14h | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 15 | 27 | 18° NNE | 08h-13h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 17 | 29 | 23° NNE | 08h-14h | soleil | 0.0 | 9°C |
| Plage d'Hermance | 17 | 29 | 23° NNE | 08h-14h | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 333° NNO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 17 | 34° NE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 18° NNE | aucun | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 225° SO | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 24 | 15° NNE | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 6 | 21 | 352° N | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 13 | 55° NE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 4 | 13 | 55° NE | aucun | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 12 | 303° ONO | aucun | soleil | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 13 | 40° NE | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 16 | 332° NNO | aucun | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 6 | 16 | 332° NNO | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 319° NO | aucun | soleil | 0.0 | 11°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 223° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 6 | 12 | 36° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 5 | 8 | 223° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 5 | 8 | 223° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 13 | 125° SE | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 24° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 175° S | aucun | soleil-couvert | 0.6 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 185° S | aucun | soleil-couvert | 0.6 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 196° SSO | aucun | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 195° SSO | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 164° SSE | 12h-18h | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 12 | 28 | 164° SSE | 12h-18h | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 27 | 167° SSE | 13h-20h | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 160° SSE | 12h-18h | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 6 | 12 | 167° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 6 | 12 | 167° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 183° S | 16h-20h | soleil | 0.0 | 16°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 223° SO | 12h-15h | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 9 | 12 | 240° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 11 | 14 | 223° SO | 12h-15h | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 11 | 14 | 223° SO | 12h-15h | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 127° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 242° OSO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 180° S | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 200° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 188° S | aucun | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 188° S | 13h-16h | couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 158° SSE | 13h-16h | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 11 | 24 | 158° SSE | 13h-16h | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 167° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 159° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 13 | 165° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 13 | 165° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 180° S | aucun | soleil-couvert | 0.0 | 18°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 212° SSO | aucun | pluie | 3.9 | 14°C |
| Plage d'Excenevex | 8 | 13 | 241° OSO | aucun | pluie | 1.2 | 15°C |
| Plage du Vengeron | 8 | 13 | 212° SSO | aucun | pluie | 3.9 | 14°C |
| Plage d'Hermance | 8 | 13 | 212° SSO | aucun | pluie | 3.9 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 15 | 214° SO | aucun | pluie | 4.5 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 192° SSO | aucun | pluie | 4.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 9 | 5° N | aucun | pluie | 1.9 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 8 | 307° NO | aucun | pluie | 1.3 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 10 | 348° NNO | aucun | couvert | 0.2 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 349° N | aucun | soleil-couvert | 0.1 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 16 | 211° SSO | aucun | soleil-couvert | 0.6 | 17°C |
| Nord du Pont de Chavanay | 3 | 16 | 211° SSO | aucun | soleil-couvert | 0.6 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 181° S | aucun | pluie | 1.2 | 18°C |
| Saint-Cyr-sur-le-Rhône | 3 | 15 | 197° SSO | aucun | soleil-couvert | 0.6 | 17°C |
| Saint-Romain-des-Iles | 8 | 15 | 279° O | aucun | soleil-couvert | 0.1 | 15°C |
| Nord du Pont d'Arciat | 8 | 15 | 279° O | aucun | soleil-couvert | 0.1 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 196° SSO | aucun | pluie | 3.0 | 16°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 88° E | aucun | pluie | 11.7 | 11°C |
| Plage d'Excenevex | 6 | 9 | 39° NE | aucun | pluie | 2.5 | 12°C |
| Plage du Vengeron | 5 | 8 | 88° E | aucun | pluie | 11.7 | 11°C |
| Plage d'Hermance | 5 | 8 | 88° E | aucun | pluie | 11.7 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 346° NNO | aucun | couvert | 0.6 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 342° NNO | aucun | couvert | 0.6 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 23 | 349° N | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 25 | 346° NNO | aucun | couvert | 0.6 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 6° N | 11h-14h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 12 | 28 | 360° N | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 346° NNO | aucun | couvert | 0.6 | 12°C |
| Nord du Pont de Chavanay | 9 | 22 | 346° NNO | aucun | couvert | 0.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 341° NNO | aucun | couvert | 0.7 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 342° NNO | aucun | couvert | 0.7 | 12°C |
| Saint-Romain-des-Iles | 9 | 17 | 343° NNO | aucun | couvert | 0.6 | 12°C |
| Nord du Pont d'Arciat | 9 | 17 | 343° NNO | aucun | couvert | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 342° NNO | aucun | couvert | 0.0 | 12°C |
