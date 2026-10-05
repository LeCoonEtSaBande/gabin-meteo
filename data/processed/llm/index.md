# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 06/10/2026 01:16 (Europe/Paris)
- Fichiers générés le : 2026-10-06T01:20:10+02:00
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

### mar. 06/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 68° ENE | aucun | soleil | 0.0 | 21°C |
| Plage d'Excenevex | 6 | 10 | 60° ENE | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 5 | 11 | 16° NNE | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 7 | 12 | 76° ENE | aucun | soleil | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 7° N | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 17° NNE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 12° NNE | aucun | pluie | 0.6 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 6° N | aucun | soleil-couvert | 0.8 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 20 | 219° SO | 14h-17h | soleil | 0.0 | 26°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 154° SSE | aucun | soleil | 0.0 | 26°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 18 | 172° S | 16h-19h | soleil | 0.0 | 27°C |
| Nord du Pont de Chavanay | 10 | 18 | 170° S | aucun | soleil | 0.0 | 27°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 164° SSE | aucun | soleil | 0.0 | 26°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 192° SSO | aucun | soleil | 0.0 | 26°C |
| Saint-Romain-des-Iles | 6 | 9 | 140° SE | aucun | soleil | 0.0 | 26°C |
| Nord du Pont d'Arciat | 6 | 8 | 141° SE | aucun | soleil | 0.0 | 24°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 15 | 152° SSE | aucun | soleil | 0.0 | 24°C |

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 215° SO | aucun | pluie | 1.5 | 18°C |
| Plage d'Excenevex | 7 | 9 | 241° OSO | aucun | pluie | 1.6 | 18°C |
| Plage du Vengeron | 4 | 6 | 204° SSO | aucun | pluie | 2.0 | 18°C |
| Plage d'Hermance | 5 | 9 | 219° SO | aucun | pluie | 2.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 123° ESE | aucun | orage | 11.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 8 | 12 | 218° SO | aucun | pluie | 5.5 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 23 | 183° S | aucun | orage | 21.2 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 311° NO | aucun | orage | 31.2 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 232° SO | aucun | pluie | 6.2 | 19°C |
| La Roche-de-Glun - Base Nautique | 9 | 21 | 193° SSO | aucun | pluie | 7.5 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 18 | 149° SSE | aucun | pluie | 5.3 | 22°C |
| Nord du Pont de Chavanay | 9 | 17 | 156° SSE | aucun | pluie | 5.6 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 183° S | aucun | pluie | 1.4 | 22°C |
| Saint-Cyr-sur-le-Rhône | 8 | 26 | 198° SSO | aucun | orage | 6.6 | 22°C |
| Saint-Romain-des-Iles | 14 | 24 | 177° S | aucun | pluie | 2.0 | 23°C |
| Nord du Pont d'Arciat | 16 | 24 | 183° S | aucun | pluie | 3.0 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 180° S | aucun | orage | 6.7 | 22°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 197° SSO | aucun | orage | 14.1 | 16°C |
| Plage d'Excenevex | 13 | 17 | 224° SO | aucun | orage | 21.3 | 16°C |
| Plage du Vengeron | 11 | 16 | 312° NO | aucun | orage | 12.7 | 16°C |
| Plage d'Hermance | 11 | 20 | 22° NNE | aucun | orage | 18.9 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 22 | 321° NO | aucun | orage | 19.9 | 14°C |
| Lac du Bourget - Cap des Séselets | 8 | 17 | 291° ONO | aucun | pluie | 11.8 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 26 | 357° N | 12h-20h | orage | 19.3 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 23 | 13° NNE | 14h-20h | pluie | 3.2 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 32 | 20° NNE | 09h-20h | pluie | 4.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 18 | 30 | 11° N | 10h-20h | pluie | 2.2 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 29 | 344° NNO | 08h-19h | pluie | 2.5 | 14°C |
| Nord du Pont de Chavanay | 16 | 29 | 344° NNO | 08h-19h | pluie | 2.5 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 341° NNO | 08h-17h | pluie | 5.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 13 | 26 | 341° NNO | 08h-17h | pluie | 5.2 | 12°C |
| Saint-Romain-des-Iles | 17 | 28 | 313° NO | 08h-16h | pluie | 2.5 | 12°C |
| Nord du Pont d'Arciat | 17 | 28 | 313° NO | 08h-16h | pluie | 2.5 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 24 | 312° NO | 08h-16h | orage | 7.4 | 11°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 19 | 59° ENE | 10h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 13 | 18 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 12 | 16 | 40° NE | 11h-14h | soleil | 0.0 | 16°C |
| Plage d'Hermance | 12 | 18 | 60° ENE | 10h-15h | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 17 | 329° NNO | 14h-17h | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 21° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 26 | 11° N | 08h-18h | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 15 | 28 | 3° N | 08h-18h | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 21 | 34 | 5° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 18 | 31 | 358° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 24 | 342° NNO | 08h-17h | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 12 | 24 | 342° NNO | 08h-17h | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 350° N | 10h-14h | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 22 | 350° N | 10h-14h | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 9 | 15 | 318° NO | aucun | pluie | 1.2 | 16°C |
| Nord du Pont d'Arciat | 9 | 15 | 318° NO | aucun | pluie | 1.2 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 348° NNO | aucun | soleil-couvert | 0.1 | 14°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 212° SSO | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 7 | 9 | 202° SSO | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 5 | 7 | 204° SSO | aucun | couvert | 0.0 | 16°C |
| Plage d'Hermance | 6 | 10 | 190° S | aucun | couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 329° NNO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 186° S | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 21° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 351° N | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 9° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 10° N | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 37° NE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 6 | 14 | 37° NE | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 73° ENE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 29° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 2 | 6 | 156° SSE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 2 | 6 | 156° SSE | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 90° E | aucun | soleil-couvert | 0.0 | 15°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Excenevex | 7 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 7 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 7 | 11 | 25° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 323° NO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 218° SO | aucun | couvert | 0.6 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 16 | 323° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 16 | 4° N | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 3° N | 10h-19h | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 358° N | 12h-16h | couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 6° N | aucun | couvert | 0.1 | 17°C |
| Nord du Pont de Chavanay | 7 | 17 | 6° N | aucun | couvert | 0.1 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 11° N | aucun | couvert | 0.1 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 1° N | aucun | couvert | 0.1 | 16°C |
| Saint-Romain-des-Iles | 4 | 10 | 8° N | aucun | couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 4 | 10 | 8° N | aucun | couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 348° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 40° NE | aucun | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 9 | 14 | 40° NE | aucun | soleil | 0.0 | 17°C |
| Plage du Vengeron | 9 | 14 | 40° NE | aucun | soleil | 0.0 | 17°C |
| Plage d'Hermance | 9 | 14 | 40° NE | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 309° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 254° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 333° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 17° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 16 | 171° S | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 4 | 13 | 179° S | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 12 | 162° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 3 | 12 | 162° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 147° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 156° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 4 | 10 | 162° SSE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 4 | 10 | 162° SSE | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 26° NNE | aucun | soleil-couvert | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 159° SSE | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 3 | 6 | 31° NNE | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 4 | 7 | 159° SSE | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 4 | 7 | 159° SSE | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 259° O | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 17° NNE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 18° NNE | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 22° NNE | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 179° S | aucun | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 182° S | aucun | soleil | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 156° SSE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 2 | 8 | 156° SSE | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 143° SE | aucun | soleil | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 201° SSO | aucun | soleil | 0.0 | 20°C |
| Saint-Romain-des-Iles | 2 | 8 | 108° ESE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont d'Arciat | 2 | 8 | 108° ESE | aucun | soleil | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 352° N | aucun | soleil | 0.0 | 20°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Excenevex | 5 | 8 | 19° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 6 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 6 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 272° O | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 36° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 198° SSO | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 337° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 162° SSE | aucun | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 2 | 9 | 168° SSE | aucun | soleil | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 246° OSO | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 2 | 8 | 246° OSO | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 41° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 1 | 8 | 77° ENE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 2 | 8 | 90° E | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 2 | 8 | 90° E | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 8 | 51° NE | aucun | soleil-couvert | 0.0 | 20°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 20° NNE | aucun | couvert | 0.0 | 18°C |
| Plage d'Excenevex | 3 | 6 | 41° NE | aucun | couvert | 0.0 | 18°C |
| Plage du Vengeron | 3 | 6 | 20° NNE | aucun | couvert | 0.0 | 18°C |
| Plage d'Hermance | 3 | 6 | 20° NNE | aucun | couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 293° ONO | aucun | couvert | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 38° NE | aucun | couvert | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 22°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 202° SSO | aucun | soleil-couvert | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 186° S | aucun | soleil-couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 184° S | aucun | soleil-couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 17 | 167° SSE | aucun | couvert | 0.0 | 22°C |
| Nord du Pont de Chavanay | 6 | 17 | 167° SSE | aucun | couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 167° SSE | aucun | couvert | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 168° SSE | aucun | couvert | 0.0 | 22°C |
| Saint-Romain-des-Iles | 5 | 11 | 162° SSE | aucun | couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 5 | 11 | 162° SSE | aucun | couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 158° SSE | aucun | couvert | 0.0 | 22°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 11 | 86° E | aucun | pluie | 2.4 | 19°C |
| Plage d'Excenevex | 3 | 12 | 62° ENE | aucun | pluie | 3.0 | 18°C |
| Plage du Vengeron | 4 | 11 | 86° E | aucun | pluie | 2.4 | 19°C |
| Plage d'Hermance | 4 | 11 | 86° E | aucun | pluie | 2.4 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 255° OSO | aucun | pluie | 1.2 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 182° S | aucun | couvert | 0.6 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 358° N | aucun | couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 359° N | aucun | couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 9° N | 16h-20h | couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 6° N | aucun | couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 19 | 348° NNO | aucun | couvert | 0.0 | 22°C |
| Nord du Pont de Chavanay | 7 | 19 | 348° NNO | aucun | couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 351° N | aucun | couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 346° NNO | aucun | couvert | 0.0 | 22°C |
| Saint-Romain-des-Iles | 8 | 15 | 313° NO | aucun | couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 8 | 15 | 313° NO | aucun | couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 355° N | aucun | couvert | 0.0 | 21°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 26 | 34° NE | 08h-20h | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 21 | 29 | 31° NNE | 08h-20h | soleil | 0.0 | 14°C |
| Plage du Vengeron | 18 | 26 | 34° NE | 08h-20h | soleil | 0.0 | 14°C |
| Plage d'Hermance | 18 | 26 | 34° NE | 08h-20h | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 26 | 16° NNE | 12h-18h | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 10 | 27 | 25° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 350° N | aucun | couvert | 0.1 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 25 | 347° NNO | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 39 | 7° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 17 | 34 | 359° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 32 | 353° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 14 | 32 | 353° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 355° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 14 | 31 | 353° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 15 | 27 | 6° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 15 | 27 | 6° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 29 | 357° N | 08h-20h | soleil-couvert | 0.0 | 15°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 25 | 35 | 39° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 26 | 36 | 39° NE | 08h-20h | soleil | 0.0 | 11°C |
| Plage du Vengeron | 25 | 35 | 39° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 25 | 35 | 39° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 37 | 25° NNE | 10h-18h | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 14 | 34 | 29° NNE | 10h-18h | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 22 | 2° N | aucun | pluie | 2.4 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 24 | 360° N | aucun | pluie | 1.2 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 20 | 44 | 4° N | 08h-19h | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 19 | 36 | 359° N | 08h-18h | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 35 | 353° N | 08h-18h | soleil | 0.4 | 12°C |
| Nord du Pont de Chavanay | 16 | 35 | 353° N | 08h-18h | soleil | 0.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 34 | 359° N | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 16 | 34 | 353° N | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 19 | 33 | 21° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 19 | 33 | 21° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 35 | 2° N | 08h-18h | soleil | 0.0 | 12°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 21 | 23° NNE | 08h-12h | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 12 | 18 | 19° NNE | 08h-11h | couvert | 0.0 | 13°C |
| Plage du Vengeron | 13 | 21 | 23° NNE | 08h-12h | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 13 | 21 | 23° NNE | 08h-12h | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 8 | 18 | 22° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 230° SO | aucun | pluie | 1.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 14 | 253° OSO | aucun | pluie | 1.8 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 22 | 5° N | 11h-15h | pluie | 2.7 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 344° NNO | aucun | pluie | 4.8 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 349° N | aucun | pluie | 2.4 | 10°C |
| Nord du Pont de Chavanay | 6 | 14 | 349° N | aucun | pluie | 2.4 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 323° NO | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 343° NNO | aucun | pluie | 1.2 | 10°C |
| Saint-Romain-des-Iles | 4 | 10 | 1° N | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 4 | 10 | 1° N | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 335° NNO | aucun | couvert | 0.0 | 12°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 6 | 118° ESE | aucun | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 2 | 7 | 338° NNO | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 2 | 6 | 118° ESE | aucun | soleil | 0.0 | 15°C |
| Plage d'Hermance | 2 | 6 | 118° ESE | aucun | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 274° O | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 32° NNE | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 155° SSE | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 160° SSE | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 9 | 13° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 2 | 9 | 82° E | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 5 | 336° NNO | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 2 | 5 | 336° NNO | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 292° ONO | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 3 | 5 | 320° NO | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 2 | 8 | 122° ESE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 2 | 8 | 122° ESE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 319° NO | aucun | soleil | 0.0 | 18°C |
