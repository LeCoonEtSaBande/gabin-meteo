# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 03/10/2026 07:50 (Europe/Paris)
- Fichiers générés le : 2026-10-03T08:06:34+02:00
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

### sam. 03/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 257° OSO | aucun | couvert | 0.0 | 19°C |
| Plage d'Excenevex | 4 | 6 | 73° ENE | aucun | couvert | 0.0 | 19°C |
| Plage du Vengeron | 2 | 5 | 284° ONO | aucun | couvert | 0.0 | 19°C |
| Plage d'Hermance | 3 | 4 | 79° E | aucun | couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 341° NNO | aucun | couvert | 0.5 | 20°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 63° ENE | aucun | soleil-couvert | 0.6 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 194° SSO | aucun | pluie | 4.8 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 10 | 350° N | aucun | orage | 3.6 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 203° SSO | aucun | soleil-couvert | 0.2 | 23°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 157° SSE | aucun | soleil-couvert | 0.0 | 24°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 147° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont de Chavanay | 6 | 12 | 154° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 156° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 180° S | aucun | soleil-couvert | 0.0 | 23°C |
| Saint-Romain-des-Iles | 4 | 9 | 106° ESE | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont d'Arciat | 4 | 9 | 92° E | aucun | soleil-couvert | 0.0 | 22°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 172° S | aucun | soleil-couvert | 0.0 | 21°C |

### dim. 04/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 13° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Excenevex | 9 | 15 | 7° N | aucun | soleil-couvert | 0.3 | 21°C |
| Plage du Vengeron | 6 | 10 | 11° N | aucun | soleil-couvert | 0.0 | 22°C |
| Plage d'Hermance | 7 | 9 | 360° N | aucun | soleil-couvert | 0.0 | 23°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 337° NNO | aucun | soleil-couvert | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 3 | 163° SSE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 5° N | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 1° N | aucun | couvert | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 7 | 69° ENE | aucun | soleil-couvert | 0.0 | 25°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 41° NE | aucun | soleil-couvert | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont de Chavanay | 7 | 12 | 17° NNE | aucun | soleil | 0.0 | 25°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 47° NE | aucun | soleil-couvert | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 22° NNE | aucun | soleil-couvert | 0.0 | 25°C |
| Saint-Romain-des-Iles | 4 | 8 | 25° NNE | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont d'Arciat | 5 | 8 | 29° NNE | aucun | soleil-couvert | 0.0 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 11° N | aucun | soleil-couvert | 0.0 | 22°C |

### lun. 05/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 47° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Excenevex | 2 | 4 | 212° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 6 | 7 | 17° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Plage d'Hermance | 5 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 23°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 257° OSO | aucun | soleil-couvert | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 36° NE | aucun | soleil-couvert | 0.0 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 14° NNE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 354° N | aucun | soleil-couvert | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 340° NNO | aucun | soleil | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 8 | 13 | 341° NNO | aucun | soleil | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 15° NNE | aucun | soleil-couvert | 0.0 | 26°C |
| Nord du Pont de Chavanay | 6 | 13 | 15° NNE | aucun | soleil-couvert | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 4° N | aucun | soleil-couvert | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 4° N | aucun | soleil-couvert | 0.0 | 25°C |
| Saint-Romain-des-Iles | 7 | 11 | 17° NNE | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont d'Arciat | 7 | 11 | 17° NNE | aucun | soleil-couvert | 0.0 | 25°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 2° N | aucun | soleil-couvert | 0.0 | 25°C |

### mar. 06/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 36° NE | aucun | soleil | 0.0 | 21°C |
| Plage d'Excenevex | 4 | 5 | 71° ENE | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 5 | 6 | 15° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Hermance | 5 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 295° ONO | aucun | soleil-couvert | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 180° S | aucun | soleil-couvert | 0.0 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 11° N | aucun | couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 353° N | aucun | couvert | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 16 | 194° SSO | aucun | soleil-couvert | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 8 | 15 | 196° SSO | aucun | soleil-couvert | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 11 | 185° S | aucun | soleil-couvert | 0.0 | 26°C |
| Nord du Pont de Chavanay | 7 | 11 | 185° S | aucun | soleil-couvert | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 171° S | aucun | soleil-couvert | 0.0 | 26°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 171° S | aucun | soleil-couvert | 0.0 | 26°C |
| Saint-Romain-des-Iles | 3 | 9 | 163° SSE | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont d'Arciat | 3 | 9 | 163° SSE | aucun | soleil-couvert | 0.0 | 25°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 63° ENE | aucun | soleil-couvert | 0.0 | 25°C |

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 221° SO | 15h-20h | couvert | 0.4 | 21°C |
| Plage d'Excenevex | 10 | 13 | 216° SO | aucun | couvert | 0.2 | 20°C |
| Plage du Vengeron | 13 | 18 | 221° SO | 15h-19h | couvert | 0.2 | 22°C |
| Plage d'Hermance | 12 | 20 | 230° SO | aucun | couvert | 0.4 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 12 | 3° N | aucun | pluie | 4.1 | 20°C |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 256° OSO | aucun | couvert | 0.9 | 22°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 201° SSO | aucun | pluie | 3.8 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 5° N | aucun | pluie | 2.4 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 229° SO | aucun | orage | 17.1 | 19°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 219° SO | aucun | orage | 14.4 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 209° SSO | aucun | pluie | 5.7 | 19°C |
| Nord du Pont de Chavanay | 9 | 20 | 209° SSO | aucun | pluie | 5.7 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 173° S | aucun | pluie | 5.1 | 19°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 195° SSO | aucun | pluie | 5.4 | 19°C |
| Saint-Romain-des-Iles | 9 | 17 | 193° SSO | aucun | pluie | 3.0 | 21°C |
| Nord du Pont d'Arciat | 9 | 17 | 193° SSO | aucun | pluie | 3.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 191° S | aucun | pluie | 4.8 | 19°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 286° ONO | aucun | orage | 21.3 | 14°C |
| Plage d'Excenevex | 8 | 13 | 286° ONO | aucun | orage | 21.3 | 14°C |
| Plage du Vengeron | 8 | 13 | 286° ONO | aucun | orage | 21.3 | 14°C |
| Plage d'Hermance | 8 | 13 | 286° ONO | aucun | orage | 21.3 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 322° NO | aucun | orage | 25.7 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 337° NNO | aucun | pluie | 7.6 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 330° NNO | aucun | pluie | 12.3 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 22 | 351° N | aucun | pluie | 5.7 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 34 | 2° N | 12h-20h | soleil | 0.9 | 17°C |
| La Roche-de-Glun - Base Nautique | 16 | 32 | 357° N | 12h-20h | soleil | 0.9 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 29 | 344° NNO | 13h-19h | soleil | 0.4 | 15°C |
| Nord du Pont de Chavanay | 12 | 29 | 344° NNO | 13h-19h | soleil | 0.4 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 27 | 335° NNO | 13h-19h | soleil | 0.4 | 15°C |
| Saint-Cyr-sur-le-Rhône | 12 | 29 | 339° NNO | 13h-19h | soleil | 0.2 | 15°C |
| Saint-Romain-des-Iles | 13 | 24 | 326° NO | 09h-19h | pluie | 1.5 | 14°C |
| Nord du Pont d'Arciat | 13 | 24 | 326° NO | 09h-19h | pluie | 1.5 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 27 | 329° NNO | 13h-18h | soleil | 0.9 | 15°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 24 | 36° NE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 15 | 24 | 36° NE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 15 | 24 | 36° NE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 15 | 24 | 36° NE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 20 | 348° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 12 | 31 | 29° NNE | 11h-17h | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 37 | 339° NNO | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 16 | 37 | 354° N | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 25 | 52 | 359° N | 08h-20h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 23 | 47 | 356° N | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 18 | 38 | 358° N | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 18 | 38 | 358° N | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 36 | 0° N | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 18 | 38 | 357° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 15 | 27 | 4° N | 08h-18h | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 15 | 27 | 4° N | 08h-18h | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 33 | 5° N | 08h-20h | soleil-couvert | 0.0 | 13°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 217° SO | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 6 | 10 | 223° SO | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 7 | 10 | 217° SO | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 7 | 10 | 217° SO | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 13 | 338° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 146° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 329° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 23 | 359° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 33 | 11° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 8° N | 08h-17h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 359° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 9 | 22 | 359° N | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 354° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 6 | 15 | 327° NNO | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 6 | 15 | 327° NNO | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 347° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 121° ESE | aucun | pluie | 3.1 | 12°C |
| Plage d'Excenevex | 4 | 9 | 115° ESE | aucun | soleil-couvert | 0.7 | 12°C |
| Plage du Vengeron | 6 | 10 | 121° ESE | aucun | pluie | 3.1 | 12°C |
| Plage d'Hermance | 6 | 10 | 121° ESE | aucun | pluie | 3.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 348° NNO | aucun | soleil-couvert | 0.1 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 24° NNE | aucun | soleil-couvert | 0.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 28 | 353° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 30 | 355° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 35 | 7° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 15 | 30 | 5° N | 08h-20h | soleil-couvert | 0.1 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 3° N | aucun | soleil | 0.3 | 14°C |
| Nord du Pont de Chavanay | 10 | 24 | 3° N | aucun | soleil | 0.3 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 359° N | aucun | soleil-couvert | 0.3 | 14°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 1° N | aucun | soleil | 0.4 | 14°C |
| Saint-Romain-des-Iles | 8 | 16 | 337° NNO | aucun | soleil-couvert | 0.6 | 14°C |
| Nord du Pont d'Arciat | 8 | 16 | 337° NNO | aucun | soleil-couvert | 0.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 352° N | aucun | soleil-couvert | 0.0 | 14°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 42° NE | 12h-20h | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 14 | 20 | 32° NNE | 10h-20h | soleil | 0.0 | 13°C |
| Plage du Vengeron | 12 | 17 | 42° NE | 12h-20h | soleil | 0.0 | 13°C |
| Plage d'Hermance | 12 | 17 | 42° NE | 12h-20h | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 23 | 7° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 8 | 21 | 26° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 24 | 344° NNO | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 25 | 349° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 5° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 16 | 32 | 3° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 0° N | 12h-18h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 12 | 27 | 0° N | 12h-18h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 25 | 357° N | 12h-17h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 360° N | 12h-18h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 11 | 20 | 8° N | 13h-16h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 11 | 20 | 8° N | 13h-16h | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 7° N | 13h-18h | soleil-couvert | 0.0 | 14°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 24° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 20 | 28 | 27° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Plage du Vengeron | 18 | 25 | 24° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Plage d'Hermance | 18 | 25 | 24° NNE | 08h-20h | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 26 | 11° N | 13h-16h | soleil | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 10 | 25 | 26° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 4° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 19 | 360° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 10° N | 08h-20h | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 5° N | 08h-19h | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 29 | 351° N | 11h-19h | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 13 | 29 | 351° N | 11h-19h | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 27 | 350° N | 11h-19h | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 349° N | 11h-19h | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 13 | 24 | 2° N | 11h-19h | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 13 | 24 | 2° N | 11h-19h | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 27 | 355° N | 10h-19h | soleil | 0.0 | 15°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 22 | 26° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 10 | 17 | 21° NNE | aucun | soleil | 0.0 | 10°C |
| Plage du Vengeron | 11 | 22 | 26° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 11 | 22 | 26° NNE | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 327° NNO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 32° NNE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 35° NE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 29° NNE | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 19 | 9° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 15 | 1° N | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 13 | 42° NE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 13 | 42° NE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 18° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 28° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 11 | 323° NO | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 3 | 11 | 323° NO | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 341° NNO | aucun | soleil | 0.0 | 14°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 130° SE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 8 | 34° NE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 3 | 6 | 130° SE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 3 | 6 | 130° SE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 316° NO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 34° NE | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 354° N | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 352° N | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 2° N | aucun | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 349° N | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 3° N | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 6 | 13 | 3° N | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 2° N | aucun | soleil | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 359° N | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 4 | 11 | 316° NO | aucun | soleil | 0.0 | 19°C |
| Nord du Pont d'Arciat | 4 | 11 | 316° NO | aucun | soleil | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 1° N | aucun | soleil | 0.0 | 18°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 24° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 8 | 12 | 16° NNE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 9 | 13 | 24° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Hermance | 9 | 13 | 24° NNE | aucun | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 323° NO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 63° ENE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 25° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 14° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 22 | 5° N | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 354° N | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 9° N | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 6 | 16 | 9° N | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 357° N | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 360° N | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 5 | 12 | 23° NNE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 5 | 12 | 23° NNE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 341° NNO | aucun | soleil | 0.0 | 16°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 12 | 43° NE | aucun | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 6 | 10 | 34° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 6 | 12 | 43° NE | aucun | soleil | 0.0 | 15°C |
| Plage d'Hermance | 6 | 12 | 43° NE | aucun | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 307° NO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 37° NE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 30° NNE | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 19° NNE | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 6° N | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 352° N | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 30° NNE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 4 | 12 | 30° NNE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 41° NE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 22° NNE | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 2 | 7 | 62° ENE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 2 | 7 | 62° ENE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 358° N | aucun | soleil | 0.0 | 18°C |
