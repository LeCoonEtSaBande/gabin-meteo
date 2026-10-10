# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 10/10/2026 11:18 (Europe/Paris)
- Fichiers générés le : 2026-10-10T11:22:14+02:00
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
| Lac du Bourget - Cap des Séselets | 6 | 7 | 27° NNE | aucun | soleil-couvert | 0.2 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 20 | 5° N | aucun | soleil-couvert | 0.5 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 354° N | 13h-16h | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 9° N | aucun | pluie | 1.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 21° NNE | aucun | pluie | 2.5 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 13° NNE | aucun | pluie | 0.8 | 18°C |
| Nord du Pont de Chavanay | 8 | 14 | 13° NNE | aucun | soleil-couvert | 0.6 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 19 | 337° NNO | aucun | pluie | 1.3 | 18°C |
| Saint-Cyr-sur-le-Rhône | 6 | 20 | 4° N | aucun | pluie | 1.3 | 18°C |
| Saint-Romain-des-Iles | 6 | 10 | 218° SO | aucun | soleil-couvert | 0.8 | 16°C |
| Nord du Pont d'Arciat | 7 | 14 | 311° NO | aucun | pluie | 0.8 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 315° NO | aucun | pluie | 1.2 | 16°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 332° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 10 | 15 | 18° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 7 | 10 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 8 | 341° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 285° ONO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 20° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 21° NNE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 348° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 26 | 6° N | 10h-20h | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 2° N | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 17 | 1° N | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 16 | 5° N | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 7° N | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 19° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 7 | 12 | 360° N | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 7 | 12 | 337° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 357° N | aucun | soleil-couvert | 0.0 | 15°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 52° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 12 | 16 | 42° NE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 10 | 13 | 35° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 9 | 13 | 54° NE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 289° ONO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 10° N | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 15 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 335° NNO | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 8° N | 08h-19h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 10 | 19 | 6° N | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 359° N | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 8 | 17 | 359° N | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 5° N | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 7 | 14 | 5° N | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 8 | 12 | 347° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 8 | 12 | 347° NNO | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 354° N | aucun | soleil | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 257° OSO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 2 | 3 | 146° SE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 2 | 3 | 29° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 4 | 5 | 109° ESE | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 303° ONO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 56° NE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 47° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 338° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 355° N | aucun | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 8 | 13 | 355° N | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 17° NNE | aucun | soleil | 0.0 | 22°C |
| Nord du Pont de Chavanay | 7 | 12 | 17° NNE | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 13° NNE | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 13° NNE | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 4 | 8 | 62° ENE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 4 | 8 | 62° ENE | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 2° N | aucun | soleil-couvert | 0.0 | 19°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 72° ENE | aucun | soleil | 0.0 | 21°C |
| Plage d'Excenevex | 9 | 12 | 59° ENE | aucun | soleil | 0.0 | 21°C |
| Plage du Vengeron | 8 | 10 | 35° NE | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 8 | 13 | 52° NE | aucun | soleil | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 317° NO | aucun | soleil | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 184° S | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 313° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 225° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 353° N | aucun | soleil-couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 7 | 18 | 358° N | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 6° N | aucun | soleil | 0.0 | 21°C |
| Nord du Pont de Chavanay | 6 | 16 | 6° N | aucun | soleil | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 353° N | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 360° N | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 7 | 13 | 1° N | aucun | soleil | 0.0 | 22°C |
| Nord du Pont d'Arciat | 7 | 13 | 1° N | aucun | soleil | 0.0 | 22°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 353° N | aucun | soleil | 0.0 | 22°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 53° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 5 | 8 | 53° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 5 | 8 | 53° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 5 | 8 | 53° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 310° NO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 20° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 321° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 25° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 188° S | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 188° S | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 165° SSE | aucun | soleil | 0.0 | 21°C |
| Nord du Pont de Chavanay | 6 | 15 | 165° SSE | aucun | soleil | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 169° S | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 168° SSE | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 5 | 12 | 170° S | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 5 | 12 | 170° S | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 158° SSE | aucun | soleil-couvert | 0.0 | 20°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 36° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 5 | 8 | 36° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 5 | 8 | 36° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 5 | 8 | 36° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 311° NO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 197° SSO | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 315° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 27° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 16 | 2° N | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 9 | 17 | 1° N | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 14 | 343° NNO | aucun | soleil-couvert | 0.6 | 20°C |
| Nord du Pont de Chavanay | 3 | 14 | 343° NNO | aucun | soleil-couvert | 0.6 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 208° SSO | aucun | soleil | 0.6 | 20°C |
| Saint-Cyr-sur-le-Rhône | 2 | 14 | 325° NO | aucun | pluie | 1.2 | 20°C |
| Saint-Romain-des-Iles | 4 | 9 | 305° NO | aucun | soleil-couvert | 0.6 | 21°C |
| Nord du Pont d'Arciat | 4 | 9 | 305° NO | aucun | soleil-couvert | 0.6 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 12 | 12° NNE | aucun | pluie | 3.0 | 19°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 19 | 39° NE | 09h-14h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 12 | 19 | 39° NE | 09h-15h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 12 | 19 | 39° NE | 09h-14h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 12 | 19 | 39° NE | 09h-14h | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 17 | 359° N | aucun | couvert | 0.6 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 17° NNE | aucun | couvert | 0.8 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 20 | 350° N | aucun | soleil-couvert | 0.6 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 346° NNO | aucun | couvert | 0.6 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 7° N | 08h-20h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 16 | 31 | 2° N | 08h-20h | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 356° N | 08h-20h | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 12 | 27 | 356° N | 08h-20h | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 353° N | 08h-18h | couvert | 0.1 | 12°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 351° N | 08h-19h | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 11 | 20 | 331° NNO | 08h-13h | couvert | 0.2 | 12°C |
| Nord du Pont d'Arciat | 11 | 20 | 331° NNO | 08h-13h | couvert | 0.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 330° NNO | 08h-15h | soleil-couvert | 0.3 | 12°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 25° NNE | 08h-20h | couvert | 0.9 | 13°C |
| Plage d'Excenevex | 13 | 18 | 22° NNE | 08h-20h | pluie | 1.1 | 14°C |
| Plage du Vengeron | 13 | 19 | 25° NNE | 08h-20h | couvert | 0.9 | 13°C |
| Plage d'Hermance | 13 | 19 | 25° NNE | 08h-20h | couvert | 0.9 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 335° NNO | aucun | pluie | 1.7 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 360° N | aucun | pluie | 2.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 350° N | aucun | pluie | 5.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 12 | 337° NNO | aucun | pluie | 5.9 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 33 | 4° N | 08h-15h | pluie | 4.5 | 10°C |
| La Roche-de-Glun - Base Nautique | 12 | 28 | 355° N | 08h-12h | pluie | 3.2 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 22 | 348° NNO | aucun | pluie | 6.0 | 10°C |
| Nord du Pont de Chavanay | 8 | 22 | 348° NNO | aucun | pluie | 6.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 344° NNO | aucun | pluie | 7.8 | 10°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 344° NNO | aucun | pluie | 7.2 | 10°C |
| Saint-Romain-des-Iles | 9 | 16 | 2° N | aucun | pluie | 4.8 | 10°C |
| Nord du Pont d'Arciat | 9 | 16 | 2° N | aucun | pluie | 4.8 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 353° N | aucun | pluie | 9.0 | 10°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 19 | 21° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 12 | 18 | 31° NNE | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 12 | 19 | 21° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Plage d'Hermance | 12 | 19 | 21° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 335° NNO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 34° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 11° N | aucun | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 190° S | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 7° N | 12h-19h | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 360° N | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 24° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 7 | 17 | 24° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 20° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 16° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 6 | 12 | 6° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 6 | 12 | 6° N | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 318° NO | aucun | soleil-couvert | 0.0 | 15°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 22° NNE | 12h-20h | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 12 | 17 | 20° NNE | 14h-20h | couvert | 0.0 | 14°C |
| Plage du Vengeron | 13 | 18 | 22° NNE | 12h-20h | couvert | 0.0 | 15°C |
| Plage d'Hermance | 13 | 18 | 22° NNE | 12h-20h | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 342° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 41° NE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 360° N | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 359° N | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 29 | 11° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 360° N | 12h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 9° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 9 | 21 | 9° N | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 325° NO | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 10 | 20 | 332° NNO | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 10 | 18 | 347° NNO | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 10 | 18 | 347° NNO | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 338° NNO | aucun | couvert | 0.0 | 14°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 28 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 18 | 25 | 26° NNE | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 19 | 28 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 19 | 28 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 15 | 325° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 16 | 32° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 10 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 354° N | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 35 | 15° NNE | 08h-13h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 9° N | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 20 | 355° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 20 | 355° N | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 321° NO | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 336° NNO | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 11 | 19 | 342° NNO | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 11 | 19 | 342° NNO | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 334° NNO | aucun | soleil | 0.0 | 14°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 28° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 8 | 13 | 18° NNE | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 10 | 15 | 28° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 10 | 15 | 28° NNE | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 326° NO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 31° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 3 | 197° SSO | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 3 | 191° S | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 7° N | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 312° NO | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 5 | 341° NNO | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 2 | 5 | 341° NNO | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 32° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 41° NE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 2 | 7 | 79° E | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 2 | 7 | 79° E | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 350° N | aucun | soleil | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 8 | 13 | 25° NNE | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 9 | 13 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 9 | 13 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 313° NO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 36° NE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 347° NNO | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 301° ONO | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 5° N | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 357° N | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 43° NE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 2 | 9 | 43° NE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 25° NNE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 27° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 2 | 7 | 65° ENE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 7 | 65° ENE | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 7° N | aucun | soleil | 0.0 | 15°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 33° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 6 | 10 | 36° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 6 | 10 | 33° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 6 | 10 | 33° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 319° NO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 34° NE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 16° NNE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 28° NNE | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 349° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 325° NO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 324° NO | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 2 | 9 | 324° NO | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 303° ONO | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 31° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 2 | 8 | 105° ESE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 8 | 105° ESE | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 352° N | aucun | soleil | 0.0 | 16°C |
