# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 07/10/2026 13:55 (Europe/Paris)
- Fichiers générés le : 2026-10-07T13:59:52+02:00
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
| Plage de la pointe - Messery | 5 | 7 | 196° SSO | aucun | pluie | 1.5 | 17°C |
| Plage d'Excenevex | 6 | 9 | 122° ESE | aucun | pluie | 2.7 | 17°C |
| Plage du Vengeron | 3 | 5 | 190° S | aucun | pluie | 2.3 | 17°C |
| Plage d'Hermance | 5 | 7 | 212° SSO | aucun | pluie | 1.9 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 330° NNO | aucun | pluie | 4.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 203° SSO | aucun | pluie | 6.9 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 29 | 192° SSO | 08h-19h | orage | 21.6 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 203° SSO | aucun | orage | 26.1 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 5 | 186° S | aucun | orage | 27.5 | 18°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 174° S | aucun | orage | 15.9 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 14 | 166° SSE | aucun | orage | 12.5 | 18°C |
| Nord du Pont de Chavanay | 8 | 14 | 174° S | aucun | orage | 9.9 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 23 | 172° S | aucun | orage | 6.3 | 19°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 207° SSO | aucun | orage | 10.0 | 19°C |
| Saint-Romain-des-Iles | 11 | 18 | 153° SSE | aucun | pluie | 2.4 | 20°C |
| Nord du Pont d'Arciat | 11 | 16 | 157° SSE | aucun | pluie | 2.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 168° SSE | aucun | pluie | 3.0 | 18°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 199° SSO | 08h-12h | orage | 15.6 | 15°C |
| Plage d'Excenevex | 13 | 18 | 211° SSO | 08h-11h | pluie | 7.1 | 15°C |
| Plage du Vengeron | 16 | 21 | 27° NNE | aucun | orage | 14.0 | 15°C |
| Plage d'Hermance | 14 | 22 | 6° N | 17h-20h | pluie | 2.1 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 19 | 355° N | 17h-20h | orage | 11.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 15 | 21 | 310° NO | 12h-18h | pluie | 9.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 20 | 37 | 346° NNO | 09h-20h | orage | 50.3 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 18 | 30 | 4° N | 12h-20h | pluie | 9.9 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 26 | 12° NNE | 10h-20h | pluie | 2.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 353° N | aucun | orage | 6.4 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 25 | 321° NO | 11h-20h | soleil-couvert | 0.8 | 13°C |
| Nord du Pont de Chavanay | 13 | 27 | 319° NO | 09h-18h | pluie | 4.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 326° NO | aucun | orage | 15.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 340° NNO | aucun | pluie | 12.6 | 12°C |
| Saint-Romain-des-Iles | 14 | 25 | 307° NO | 08h-17h | couvert | 0.3 | 13°C |
| Nord du Pont d'Arciat | 15 | 24 | 305° NO | 08h-17h | couvert | 0.8 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 22 | 314° NO | 09h-18h | pluie | 4.0 | 13°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 40° NE | 08h-19h | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 20 | 27 | 27° NNE | 08h-20h | soleil | 0.0 | 15°C |
| Plage du Vengeron | 17 | 23 | 35° NE | 08h-17h | soleil | 0.0 | 16°C |
| Plage d'Hermance | 16 | 24 | 38° NE | 08h-18h | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 17 | 324° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 10 | 14 | 19° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 20° NNE | 10h-14h | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 3° N | 08h-17h | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 20 | 33 | 7° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 17 | 29 | 6° N | 10h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 21 | 338° NNO | 08h-19h | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 11 | 21 | 16° NNE | 10h-19h | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 356° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 10 | 20 | 356° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 15 | 338° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 8 | 13 | 325° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 347° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 219° SO | 15h-18h | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 8 | 11 | 245° OSO | aucun | pluie | 1.7 | 13°C |
| Plage du Vengeron | 5 | 7 | 185° S | aucun | couvert | 0.8 | 14°C |
| Plage d'Hermance | 8 | 13 | 204° SSO | aucun | couvert | 0.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 142° SE | aucun | couvert | 0.2 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 241° OSO | aucun | pluie | 1.9 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 22° NNE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 345° NNO | aucun | soleil | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 348° NNO | 08h-13h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 9 | 15 | 16° NNE | aucun | soleil-couvert | 0.1 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 14 | 20° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 7 | 14 | 20° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 9 | 5° N | aucun | soleil-couvert | 0.3 | 17°C |
| Saint-Cyr-sur-le-Rhône | 5 | 9 | 5° N | aucun | soleil-couvert | 0.3 | 17°C |
| Saint-Romain-des-Iles | 6 | 10 | 192° SSO | aucun | pluie | 1.2 | 14°C |
| Nord du Pont d'Arciat | 6 | 10 | 192° SSO | aucun | pluie | 1.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 113° ESE | aucun | couvert | 0.6 | 14°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 323° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 10 | 13 | 311° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 9 | 12 | 332° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 8 | 12 | 324° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 297° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 348° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 19 | 22° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 355° N | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 26 | 6° N | 08h-16h | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 22 | 4° N | 11h-15h | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 8 | 17 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 2° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 2° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 5 | 10 | 337° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 5 | 10 | 337° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 340° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 7° N | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 16 | 21 | 34° NE | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 6 | 10 | 34° NE | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 6 | 10 | 34° NE | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 319° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 18° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 317° NO | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 13° NNE | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 6° N | 08h-19h | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 0° N | 11h-17h | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 358° N | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 9 | 21 | 358° N | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 352° N | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 353° N | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 7 | 15 | 9° N | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 7 | 15 | 9° N | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 353° N | aucun | soleil | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 3 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 3 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 3 | 5 | 357° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 112° ESE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 30° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 323° NO | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 10° N | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 12° NNE | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 325° NO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 45° NE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 2 | 9 | 45° NE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 47° NE | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 35° NE | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 2 | 7 | 120° ESE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 2 | 7 | 120° ESE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 356° N | aucun | soleil | 0.0 | 17°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 47° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 6 | 10 | 47° NE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 6 | 10 | 47° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 6 | 10 | 47° NE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 306° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 227° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 318° NO | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 16° NNE | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 186° S | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 186° S | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 167° SSE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 4 | 12 | 167° SSE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 159° SSE | aucun | soleil | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 4 | 13 | 169° S | aucun | soleil | 0.0 | 20°C |
| Saint-Romain-des-Iles | 3 | 9 | 143° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 9 | 143° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 126° SE | aucun | soleil-couvert | 0.0 | 18°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 9 | 15 | 17° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 6 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 6 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 284° ONO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 178° S | aucun | soleil-couvert | 0.6 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 353° N | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 23 | 353° N | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 9° N | 11h-20h | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 4° N | 12h-20h | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 347° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 10 | 23 | 347° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 352° N | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 346° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 8 | 16 | 345° NNO | aucun | soleil-couvert | 0.6 | 17°C |
| Nord du Pont d'Arciat | 8 | 16 | 345° NNO | aucun | soleil-couvert | 0.6 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 344° NNO | aucun | soleil-couvert | 0.0 | 17°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 197° SSO | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 11 | 15 | 229° SO | 17h-20h | couvert | 0.0 | 15°C |
| Plage du Vengeron | 9 | 14 | 197° SSO | aucun | couvert | 0.0 | 15°C |
| Plage d'Hermance | 9 | 14 | 197° SSO | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 242° OSO | aucun | couvert | 0.6 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 189° S | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 21 | 359° N | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 23 | 351° N | aucun | couvert | 0.1 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 9° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 8° N | 12h-20h | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 2° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 20 | 2° N | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 19 | 360° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 9 | 15 | 305° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 9 | 15 | 305° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 341° NNO | aucun | soleil-couvert | 0.6 | 16°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 27 | 25° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 21 | 30 | 24° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Plage du Vengeron | 19 | 27 | 25° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Plage d'Hermance | 19 | 27 | 25° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 27 | 9° N | 09h-15h | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 10 | 28 | 28° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 28 | 345° NNO | aucun | soleil-couvert | 0.6 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 28 | 338° NNO | aucun | soleil-couvert | 0.6 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 21 | 42 | 353° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 20 | 40 | 348° NNO | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 33 | 349° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 15 | 33 | 349° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 347° NNO | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 14 | 32 | 350° N | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 14 | 26 | 358° N | 08h-18h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 14 | 26 | 358° N | 08h-18h | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 32 | 350° N | 08h-20h | soleil | 0.0 | 13°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 14° NNE | 12h-20h | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 14 | 20 | 18° NNE | 12h-20h | soleil | 0.0 | 16°C |
| Plage du Vengeron | 13 | 18 | 14° NNE | 12h-20h | soleil | 0.0 | 16°C |
| Plage d'Hermance | 13 | 18 | 14° NNE | 12h-20h | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 23 | 4° N | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 16 | 21° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 22 | 356° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 352° N | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 8° N | 08h-20h | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 16 | 35 | 359° N | 08h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 30 | 346° NNO | 10h-20h | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 13 | 30 | 346° NNO | 10h-20h | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 347° NNO | 12h-20h | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 343° NNO | 11h-20h | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 11 | 20 | 353° N | 13h-16h | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 11 | 20 | 353° N | 13h-16h | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 27 | 353° N | 12h-20h | soleil | 0.0 | 16°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 26° NNE | 08h-20h | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 12 | 16 | 27° NNE | 11h-20h | soleil | 0.0 | 16°C |
| Plage du Vengeron | 13 | 17 | 26° NNE | 08h-20h | soleil | 0.0 | 17°C |
| Plage d'Hermance | 13 | 17 | 26° NNE | 08h-20h | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 350° N | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 38° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 9 | 265° O | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 34 | 9° N | 08h-20h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 355° N | 08h-20h | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 356° N | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 10 | 24 | 356° N | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 344° NNO | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 350° N | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 12 | 22 | 5° N | 12h-17h | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 12 | 22 | 5° N | 12h-17h | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 349° N | aucun | soleil | 0.0 | 18°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 28° NNE | aucun | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 9 | 14 | 37° NE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 10 | 16 | 28° NNE | aucun | soleil | 0.0 | 17°C |
| Plage d'Hermance | 10 | 16 | 28° NNE | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 323° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 14 | 22° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 208° SSO | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 215° SO | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 24 | 13° NNE | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 6 | 22 | 351° N | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 13 | 46° NE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 4 | 13 | 46° NE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 50° NE | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 38° NE | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 3 | 10 | 297° ONO | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 3 | 10 | 297° ONO | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 16°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 163° SSE | aucun | soleil | 0.0 | 19°C |
| Plage d'Excenevex | 0 | 5 | 76° ENE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 3 | 5 | 163° SSE | aucun | soleil | 0.0 | 19°C |
| Plage d'Hermance | 3 | 5 | 163° SSE | aucun | soleil | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 247° OSO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 220° SO | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 8° N | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 14° NNE | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 354° N | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 347° NNO | aucun | soleil | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 12 | 332° NNO | aucun | soleil | 0.0 | 21°C |
| Nord du Pont de Chavanay | 2 | 12 | 332° NNO | aucun | soleil | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 45° NE | aucun | soleil | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 43° NE | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 3 | 6 | 298° ONO | aucun | soleil | 0.0 | 20°C |
| Nord du Pont d'Arciat | 3 | 6 | 298° ONO | aucun | soleil | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 358° N | aucun | soleil | 0.0 | 19°C |
