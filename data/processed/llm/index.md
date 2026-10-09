# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 09/10/2026 14:01 (Europe/Paris)
- Fichiers générés le : 2026-10-09T14:05:54+02:00
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

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 329° NNO | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 13 | 18 | 22° NNE | 08h-11h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 11 | 14 | 32° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 12 | 16 | 39° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 14 | 323° NO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 9 | 14 | 338° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 357° N | 08h-15h | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 357° N | 11h-17h | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 31 | 14° NNE | 08h-20h | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 352° N | 08h-13h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 22 | 340° NNO | 09h-13h | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 11 | 20 | 336° NNO | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 332° NNO | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 357° N | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 7 | 14 | 325° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 8 | 15 | 325° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 338° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 16 | 219° SO | 08h-15h | couvert | 0.6 | 16°C |
| Plage d'Excenevex | 10 | 15 | 226° SO | aucun | couvert | 0.8 | 16°C |
| Plage du Vengeron | 9 | 12 | 212° SSO | aucun | soleil-couvert | 0.6 | 16°C |
| Plage d'Hermance | 11 | 15 | 199° SSO | aucun | soleil-couvert | 0.7 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 158° SSE | aucun | pluie | 2.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 9° N | aucun | pluie | 1.8 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 1° N | aucun | soleil-couvert | 0.6 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 353° N | 12h-18h | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 6° N | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 6° N | aucun | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 19° NNE | aucun | pluie | 1.3 | 17°C |
| Nord du Pont de Chavanay | 7 | 12 | 5° N | aucun | pluie | 1.5 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 18 | 353° N | aucun | couvert | 0.1 | 17°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 9° N | aucun | soleil-couvert | 0.6 | 17°C |
| Saint-Romain-des-Iles | 8 | 13 | 289° ONO | aucun | pluie | 1.0 | 16°C |
| Nord du Pont d'Arciat | 10 | 16 | 310° NO | aucun | soleil-couvert | 0.7 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 325° NO | aucun | pluie | 2.1 | 15°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 8 | 13 | 39° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 6 | 7 | 32° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 8 | 32° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 291° ONO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 7 | 87° E | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 20° NNE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 350° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 27 | 6° N | 09h-20h | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 13 | 23 | 4° N | 12h-20h | couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 9° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 9 | 18 | 9° N | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 359° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 359° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 6 | 10 | 358° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 10 | 358° N | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 55° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 12 | 18 | 42° NE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 9 | 12 | 36° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 9 | 13 | 51° NE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 292° ONO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 230° SO | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 14° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 341° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 6° N | 08h-20h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 10 | 19 | 8° N | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 8° N | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 8 | 17 | 8° N | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 3° N | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 3° N | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 6 | 12 | 31° NNE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 6 | 12 | 31° NNE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 4° N | aucun | soleil | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 227° SO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 2 | 6 | 80° E | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 3 | 4 | 24° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 4 | 5 | 174° S | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 288° ONO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 63° ENE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 27° NNE | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 344° NNO | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 360° N | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 8 | 14 | 354° N | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 41° NE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 6 | 12 | 41° NE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 21° NNE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 21° NNE | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 2 | 8 | 103° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 2 | 8 | 103° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 5° N | aucun | soleil | 0.0 | 19°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 43° NE | aucun | couvert | 0.0 | 18°C |
| Plage d'Excenevex | 8 | 12 | 43° NE | aucun | couvert | 0.0 | 18°C |
| Plage du Vengeron | 8 | 12 | 43° NE | aucun | couvert | 0.0 | 18°C |
| Plage d'Hermance | 8 | 12 | 43° NE | aucun | couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 305° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 186° S | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 315° NO | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 10° N | aucun | couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 3° N | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 1° N | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 20° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 6 | 15 | 20° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 11° N | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 6° N | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 6 | 13 | 353° N | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont d'Arciat | 6 | 13 | 353° N | aucun | soleil-couvert | 0.0 | 22°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 348° NNO | aucun | soleil | 0.0 | 21°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 42° NE | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 8 | 12 | 42° NE | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 8 | 12 | 42° NE | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 8 | 12 | 42° NE | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 308° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 28° NNE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 332° NNO | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 11° N | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 178° S | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 197° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 149° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 2 | 9 | 149° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 172° S | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 189° S | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 3 | 9 | 131° SE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 3 | 9 | 131° SE | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 101° E | aucun | soleil-couvert | 0.0 | 18°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 5° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 4 | 6 | 5° N | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 4 | 6 | 5° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 4 | 6 | 5° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 308° NO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 215° SO | aucun | couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 317° NO | aucun | couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 13° NNE | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 359° N | aucun | couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 345° NNO | aucun | couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 10 | 317° NO | aucun | couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 2 | 10 | 317° NO | aucun | couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 223° SO | aucun | couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 2 | 10 | 305° NO | aucun | couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 2 | 7 | 129° SE | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 2 | 7 | 129° SE | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 14° NNE | aucun | couvert | 0.0 | 19°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 25° NNE | aucun | couvert | 0.0 | 18°C |
| Plage d'Excenevex | 9 | 13 | 24° NNE | aucun | couvert | 0.0 | 18°C |
| Plage du Vengeron | 10 | 15 | 25° NNE | aucun | couvert | 0.0 | 18°C |
| Plage d'Hermance | 10 | 15 | 25° NNE | aucun | couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 56° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 195° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 182° S | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 5° N | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 350° N | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 2° N | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 5 | 13 | 2° N | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 17° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 357° N | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 12 | 357° N | aucun | couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 6 | 12 | 357° N | aucun | couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 350° N | aucun | soleil-couvert | 0.0 | 18°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 183° S | aucun | soleil | 0.0 | 19°C |
| Plage d'Excenevex | 3 | 6 | 246° OSO | aucun | soleil | 0.0 | 19°C |
| Plage du Vengeron | 5 | 8 | 183° S | aucun | soleil | 0.0 | 19°C |
| Plage d'Hermance | 5 | 8 | 183° S | aucun | soleil | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 243° OSO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 2° N | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 205° SSO | aucun | soleil | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 222° SO | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 186° S | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 188° S | aucun | soleil | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 161° SSE | aucun | soleil | 0.0 | 21°C |
| Nord du Pont de Chavanay | 7 | 17 | 161° SSE | aucun | soleil | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 168° SSE | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 163° SSE | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 3 | 9 | 119° ESE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 9 | 119° ESE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 18 | 142° SE | aucun | soleil | 0.0 | 20°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 194° SSO | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 6 | 11 | 226° SO | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 7 | 10 | 194° SSO | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 7 | 10 | 194° SSO | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 267° O | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 242° OSO | aucun | soleil-couvert | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 11 | 203° SSO | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 216° SO | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 189° S | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 9 | 21 | 183° S | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 154° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 8 | 20 | 154° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 160° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 160° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 3 | 5 | 207° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 5 | 207° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 19 | 181° S | aucun | soleil-couvert | 0.0 | 20°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 215° SO | aucun | pluie | 3.8 | 17°C |
| Plage d'Excenevex | 10 | 16 | 241° OSO | aucun | pluie | 4.3 | 17°C |
| Plage du Vengeron | 9 | 14 | 215° SO | aucun | pluie | 3.8 | 17°C |
| Plage d'Hermance | 9 | 14 | 215° SO | aucun | pluie | 3.8 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 21 | 229° SO | aucun | pluie | 10.8 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 224° SO | aucun | pluie | 9.6 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 186° S | aucun | soleil-couvert | 0.6 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 196° SSO | aucun | soleil-couvert | 0.6 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 186° S | aucun | soleil-couvert | 0.6 | 19°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 187° S | aucun | pluie | 1.2 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 18 | 175° S | aucun | pluie | 5.4 | 17°C |
| Nord du Pont de Chavanay | 5 | 18 | 175° S | aucun | pluie | 5.4 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 190° S | aucun | pluie | 3.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 177° S | aucun | pluie | 2.4 | 17°C |
| Saint-Romain-des-Iles | 5 | 11 | 276° O | aucun | couvert | 0.6 | 17°C |
| Nord du Pont d'Arciat | 5 | 11 | 276° O | aucun | couvert | 0.6 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 11 | 338° NNO | aucun | pluie | 2.4 | 17°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 215° SO | 14h-20h | pluie | 4.5 | 13°C |
| Plage d'Excenevex | 14 | 22 | 223° SO | 08h-20h | pluie | 7.1 | 13°C |
| Plage du Vengeron | 12 | 18 | 215° SO | 14h-20h | pluie | 4.5 | 13°C |
| Plage d'Hermance | 12 | 18 | 215° SO | 14h-20h | pluie | 4.5 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 19 | 202° SSO | aucun | pluie | 15.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 16 | 208° SSO | aucun | orage | 15.4 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 10 | 148° SSE | aucun | pluie | 7.6 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 135° SE | aucun | pluie | 7.1 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 162° SSE | aucun | pluie | 5.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 162° SSE | aucun | pluie | 8.7 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 12 | 113° ESE | aucun | pluie | 11.1 | 13°C |
| Nord du Pont de Chavanay | 3 | 12 | 113° ESE | aucun | pluie | 11.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 163° SSE | aucun | pluie | 2.7 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 13 | 138° SE | aucun | pluie | 5.0 | 14°C |
| Saint-Romain-des-Iles | 5 | 12 | 192° SSO | aucun | pluie | 4.8 | 14°C |
| Nord du Pont d'Arciat | 5 | 12 | 192° SSO | aucun | pluie | 4.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 16 | 173° S | aucun | pluie | 5.1 | 14°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 20 | 245° OSO | 08h-20h | pluie | 2.3 | 11°C |
| Plage d'Excenevex | 16 | 25 | 211° SSO | 08h-20h | pluie | 1.1 | 11°C |
| Plage du Vengeron | 13 | 20 | 245° OSO | 08h-20h | pluie | 2.3 | 11°C |
| Plage d'Hermance | 13 | 20 | 245° OSO | 08h-20h | pluie | 2.3 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 214° SO | aucun | pluie | 2.1 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 192° SSO | aucun | pluie | 1.8 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 21 | 357° N | aucun | pluie | 1.1 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 356° N | aucun | pluie | 1.5 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 36° NE | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 37° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 179° S | aucun | soleil-couvert | 0.6 | 12°C |
| Nord du Pont de Chavanay | 8 | 17 | 179° S | aucun | soleil-couvert | 0.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 22 | 176° S | aucun | soleil-couvert | 0.6 | 12°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 176° S | aucun | soleil-couvert | 0.6 | 12°C |
| Saint-Romain-des-Iles | 14 | 24 | 182° S | 17h-20h | pluie | 1.2 | 11°C |
| Nord du Pont d'Arciat | 14 | 24 | 182° S | 17h-20h | pluie | 1.2 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 165° SSE | aucun | pluie | 1.2 | 12°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 28 | 211° SSO | 08h-20h | pluie | 18.5 | 13°C |
| Plage d'Excenevex | 21 | 32 | 221° SO | 08h-20h | pluie | 17.7 | 13°C |
| Plage du Vengeron | 17 | 28 | 211° SSO | 08h-20h | pluie | 18.5 | 13°C |
| Plage d'Hermance | 17 | 28 | 211° SSO | 08h-20h | pluie | 18.5 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 36 | 260° O | 13h-17h | pluie | 8.8 | 10°C |
| Lac du Bourget - Cap des Séselets | 7 | 30 | 259° O | aucun | pluie | 20.8 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 22 | 129° SE | aucun | pluie | 16.9 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 23 | 111° ESE | aucun | pluie | 13.2 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 182° S | 08h-14h | soleil-couvert | 0.7 | 19°C |
| La Roche-de-Glun - Base Nautique | 14 | 31 | 184° S | 08h-11h | couvert | 0.3 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 30 | 176° S | aucun | pluie | 9.6 | 15°C |
| Nord du Pont de Chavanay | 13 | 30 | 176° S | aucun | pluie | 9.6 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 32 | 176° S | aucun | pluie | 9.1 | 14°C |
| Saint-Cyr-sur-le-Rhône | 14 | 30 | 176° S | aucun | pluie | 11.4 | 14°C |
| Saint-Romain-des-Iles | 11 | 23 | 263° O | 14h-20h | pluie | 2.3 | 12°C |
| Nord du Pont d'Arciat | 11 | 23 | 263° O | 14h-20h | pluie | 2.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 34 | 192° SSO | 08h-11h | pluie | 3.9 | 15°C |
