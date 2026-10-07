# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 07/10/2026 07:57 (Europe/Paris)
- Fichiers générés le : 2026-10-07T08:02:03+02:00
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

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 225° SO | aucun | pluie | 4.5 | 18°C |
| Plage d'Excenevex | 5 | 8 | 75° ENE | aucun | orage | 9.2 | 18°C |
| Plage du Vengeron | 4 | 6 | 177° S | aucun | pluie | 5.9 | 18°C |
| Plage d'Hermance | 6 | 8 | 187° S | aucun | pluie | 6.2 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 10 | 334° NNO | aucun | pluie | 3.5 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 339° NNO | aucun | pluie | 3.9 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 26 | 196° SSO | 12h-20h | orage | 8.9 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 207° SSO | aucun | orage | 16.4 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 195° SSO | aucun | orage | 23.2 | 19°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 170° S | aucun | orage | 29.3 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 158° SSE | aucun | pluie | 10.0 | 19°C |
| Nord du Pont de Chavanay | 8 | 15 | 164° SSE | aucun | pluie | 9.1 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 155° SSE | aucun | orage | 7.5 | 19°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 205° SSO | aucun | orage | 10.2 | 19°C |
| Saint-Romain-des-Iles | 9 | 15 | 168° SSE | aucun | pluie | 4.6 | 19°C |
| Nord du Pont d'Arciat | 10 | 16 | 168° SSE | aucun | pluie | 4.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 147° SSE | aucun | orage | 9.3 | 19°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 210° SSO | aucun | pluie | 18.3 | 14°C |
| Plage d'Excenevex | 18 | 24 | 21° NNE | aucun | orage | 21.5 | 15°C |
| Plage du Vengeron | 12 | 16 | 37° NE | aucun | pluie | 12.7 | 15°C |
| Plage d'Hermance | 14 | 18 | 243° OSO | aucun | pluie | 14.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 16 | 299° ONO | 11h-15h | orage | 11.6 | 13°C |
| Lac du Bourget - Cap des Séselets | 14 | 20 | 309° NO | 11h-17h | pluie | 9.8 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 30 | 356° N | 09h-20h | orage | 64.3 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 15 | 26 | 1° N | 13h-20h | orage | 16.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 30 | 7° N | 10h-20h | soleil-couvert | 0.5 | 16°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 353° N | 14h-19h | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 26 | 327° NNO | 11h-20h | soleil-couvert | 0.2 | 14°C |
| Nord du Pont de Chavanay | 13 | 25 | 323° NO | 11h-20h | soleil-couvert | 0.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 325° NO | 13h-16h | couvert | 0.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 345° NNO | aucun | pluie | 5.8 | 13°C |
| Saint-Romain-des-Iles | 13 | 22 | 317° NO | 08h-17h | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 15 | 23 | 321° NO | 08h-18h | couvert | 0.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 23 | 313° NO | 08h-18h | pluie | 2.1 | 13°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 23 | 57° ENE | 08h-18h | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 18 | 24 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 17 | 23 | 31° NNE | 08h-16h | soleil | 0.0 | 16°C |
| Plage d'Hermance | 16 | 24 | 40° NE | 08h-18h | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 21 | 336° NNO | 13h-18h | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 9 | 13 | 39° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 4° N | 08h-19h | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 14 | 26 | 355° N | 08h-18h | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 30 | 9° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 16 | 27 | 7° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 21 | 343° NNO | 09h-12h | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 11 | 21 | 343° NNO | 09h-12h | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 349° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 349° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 13 | 335° NNO | aucun | soleil-couvert | 0.3 | 14°C |
| Nord du Pont d'Arciat | 7 | 13 | 335° NNO | aucun | soleil-couvert | 0.3 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 2° N | aucun | soleil-couvert | 0.0 | 14°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 222° SO | 14h-17h | couvert | 0.7 | 14°C |
| Plage d'Excenevex | 10 | 12 | 251° OSO | aucun | pluie | 2.7 | 15°C |
| Plage du Vengeron | 5 | 6 | 180° S | aucun | pluie | 2.6 | 15°C |
| Plage d'Hermance | 8 | 12 | 227° SO | aucun | pluie | 2.8 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 343° NNO | aucun | pluie | 1.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 238° OSO | aucun | pluie | 4.1 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 31° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 345° NNO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 4° N | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 6 | 11 | 5° N | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 25° NNE | aucun | soleil-couvert | 0.1 | 17°C |
| Nord du Pont de Chavanay | 6 | 10 | 25° NNE | aucun | soleil-couvert | 0.1 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 3° N | aucun | pluie | 1.4 | 16°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 3° N | aucun | pluie | 1.4 | 16°C |
| Saint-Romain-des-Iles | 7 | 15 | 304° NO | aucun | pluie | 2.8 | 16°C |
| Nord du Pont d'Arciat | 7 | 15 | 304° NO | aucun | pluie | 2.8 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 45° NE | aucun | pluie | 2.5 | 14°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 217° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 7 | 10 | 240° OSO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 8 | 10 | 228° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 8 | 12 | 228° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 304° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 227° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 25° NNE | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 349° N | aucun | couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 14 | 357° N | aucun | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 10 | 353° N | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 8° N | aucun | soleil-couvert | 0.3 | 16°C |
| Nord du Pont de Chavanay | 4 | 10 | 8° N | aucun | soleil-couvert | 0.3 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 42° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 51° NE | aucun | soleil-couvert | 0.3 | 16°C |
| Saint-Romain-des-Iles | 6 | 11 | 348° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 11 | 348° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 34° NE | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 6 | 10 | 34° NE | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 6 | 10 | 34° NE | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 6 | 10 | 34° NE | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 319° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 27° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 317° NO | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 13° NNE | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 6° N | 09h-18h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 5° N | 14h-17h | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 4° N | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 19 | 4° N | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 360° N | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 358° N | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 7 | 14 | 17° NNE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 7 | 14 | 17° NNE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 352° N | aucun | soleil | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 3 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 3 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 3 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 112° ESE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 13° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 323° NO | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 10° N | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 177° S | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 165° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 154° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 2 | 9 | 154° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 126° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 150° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 3 | 8 | 149° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 8 | 149° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 360° N | aucun | couvert | 0.0 | 18°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 47° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 6 | 10 | 47° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 6 | 10 | 47° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 6 | 10 | 47° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 306° NO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 37° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 318° NO | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 16° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 17 | 178° S | aucun | couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 7 | 18 | 180° S | aucun | couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 168° SSE | aucun | couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 5 | 14 | 168° SSE | aucun | couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 163° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 172° S | aucun | couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 4 | 10 | 138° SE | aucun | couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 4 | 10 | 138° SE | aucun | couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 149° SSE | aucun | soleil-couvert | 0.0 | 20°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 42° NE | aucun | pluie | 1.3 | 18°C |
| Plage d'Excenevex | 8 | 11 | 16° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 5 | 9 | 42° NE | aucun | pluie | 1.3 | 18°C |
| Plage d'Hermance | 5 | 9 | 42° NE | aucun | pluie | 1.3 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 288° ONO | aucun | soleil-couvert | 0.6 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 165° SSE | aucun | pluie | 1.2 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 25 | 357° N | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 25 | 355° N | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 29 | 5° N | 11h-20h | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 1° N | 13h-19h | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 353° N | aucun | soleil-couvert | 0.6 | 20°C |
| Nord du Pont de Chavanay | 7 | 18 | 353° N | aucun | soleil-couvert | 0.6 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 2° N | aucun | soleil-couvert | 0.6 | 20°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 351° N | aucun | soleil-couvert | 0.6 | 20°C |
| Saint-Romain-des-Iles | 7 | 14 | 341° NNO | aucun | soleil-couvert | 0.7 | 20°C |
| Nord du Pont d'Arciat | 7 | 14 | 341° NNO | aucun | soleil-couvert | 0.7 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 360° N | aucun | soleil-couvert | 0.6 | 20°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 5 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 5 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 298° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 202° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 342° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 285° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 7° N | 08h-16h | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 360° N | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 14° NNE | aucun | couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 6 | 15 | 14° NNE | aucun | couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 354° N | aucun | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 360° N | aucun | couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 2 | 7 | 43° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 2 | 7 | 43° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 349° N | aucun | couvert | 0.0 | 17°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 117° ESE | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 1 | 5 | 263° O | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 3 | 6 | 117° ESE | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 3 | 6 | 117° ESE | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 296° ONO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 193° SSO | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 11° N | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 10° N | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 3° N | 12h-16h | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 354° N | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 24° NNE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 6 | 15 | 24° NNE | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 18° NNE | aucun | soleil | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 13° NNE | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 3 | 8 | 32° NNE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont d'Arciat | 3 | 8 | 32° NNE | aucun | soleil | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 338° NNO | aucun | soleil | 0.0 | 19°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 206° SSO | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 1 | 5 | 207° SSO | aucun | soleil | 0.0 | 17°C |
| Plage du Vengeron | 4 | 7 | 206° SSO | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 4 | 7 | 206° SSO | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 268° O | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 209° SSO | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 195° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 201° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 4° N | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 353° N | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 27° NNE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 5 | 13 | 27° NNE | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 22° NNE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 13° NNE | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 4 | 9 | 14° NNE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont d'Arciat | 4 | 9 | 14° NNE | aucun | soleil | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 323° NO | aucun | soleil | 0.0 | 19°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 131° SE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 3 | 7 | 15° NNE | aucun | soleil | 0.0 | 17°C |
| Plage du Vengeron | 4 | 7 | 131° SE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 4 | 7 | 131° SE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 299° ONO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 189° S | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 8° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 4° N | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 27 | 7° N | 11h-18h | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 2° N | 13h-16h | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 355° N | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 7 | 17 | 355° N | aucun | soleil-couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 357° N | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 350° N | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 6 | 12 | 334° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 6 | 12 | 334° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 337° NNO | aucun | couvert | 0.0 | 19°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 28° NNE | aucun | pluie | 0.5 | 18°C |
| Plage d'Excenevex | 9 | 16 | 17° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 9 | 14 | 28° NNE | aucun | pluie | 0.5 | 18°C |
| Plage d'Hermance | 9 | 14 | 28° NNE | aucun | pluie | 0.5 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 350° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 26° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 20 | 357° N | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 21 | 352° N | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 36 | 6° N | 08h-20h | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 15 | 32 | 359° N | 08h-20h | couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 352° N | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 10 | 24 | 352° N | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 354° N | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 352° N | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 8 | 16 | 14° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 8 | 16 | 14° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 358° N | aucun | soleil-couvert | 0.0 | 19°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 9 | 339° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 2 | 9 | 9° N | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 2 | 9 | 339° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 2 | 9 | 339° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 272° O | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 131° SE | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 194° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 15 | 5° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 338° NNO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 10 | 48° NE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 2 | 10 | 48° NE | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 47° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 34° NE | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 2 | 8 | 116° ESE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 2 | 8 | 116° ESE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 10° N | aucun | soleil | 0.0 | 16°C |
