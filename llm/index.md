# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 09/10/2026 00:18 (Europe/Paris)
- Fichiers générés le : 2026-10-09T00:22:10+02:00
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
| Plage de la pointe - Messery | 10 | 14 | 56° NE | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 12 | 18 | 25° NNE | 08h-11h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 10 | 13 | 51° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 10 | 14 | 48° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 294° ONO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 9 | 13 | 8° N | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 358° N | 08h-14h | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 349° N | 08h-16h | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 32 | 11° N | 08h-20h | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 355° N | 09h-14h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 20 | 1° N | 13h-17h | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 10 | 19 | 4° N | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 342° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 1° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 7 | 14 | 325° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 9 | 15 | 331° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 15 | 342° NNO | aucun | soleil-couvert | 0.0 | 15°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 214° SO | 09h-18h | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 10 | 13 | 216° SO | aucun | soleil-couvert | 0.1 | 15°C |
| Plage du Vengeron | 7 | 10 | 183° S | aucun | couvert | 0.4 | 15°C |
| Plage d'Hermance | 8 | 12 | 192° SSO | aucun | couvert | 0.3 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 347° NNO | aucun | pluie | 1.1 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 360° N | aucun | soleil-couvert | 0.3 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 26° NNE | aucun | soleil-couvert | 0.3 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 345° NNO | aucun | soleil-couvert | 0.1 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 8° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 7° N | aucun | soleil-couvert | 0.1 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 6° N | aucun | pluie | 1.3 | 16°C |
| Nord du Pont de Chavanay | 5 | 10 | 355° N | aucun | pluie | 1.7 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 16 | 345° NNO | aucun | couvert | 0.8 | 16°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 2° N | aucun | pluie | 1.7 | 16°C |
| Saint-Romain-des-Iles | 6 | 18 | 315° NO | aucun | pluie | 2.3 | 15°C |
| Nord du Pont d'Arciat | 7 | 10 | 204° SSO | aucun | pluie | 3.4 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 17° NNE | aucun | pluie | 2.7 | 16°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 60° ENE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 6 | 8 | 57° ENE | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 5 | 7 | 20° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 8 | 29° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 298° ONO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 215° SO | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 17 | 24° NNE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 349° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 24 | 5° N | 08h-20h | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 11 | 19 | 1° N | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 14° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 15 | 14° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 7 | 12 | 36° NE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 7 | 12 | 36° NE | aucun | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 5° N | aucun | couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 67° ENE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 5 | 62° ENE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 5 | 7 | 31° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 8 | 29° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 276° O | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 354° N | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 332° NNO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 24 | 358° N | 09h-20h | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 11 | 20 | 354° N | 11h-18h | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 13° NNE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 8 | 17 | 13° NNE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 5° N | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 7 | 14 | 5° N | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 8 | 13 | 32° NNE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 8 | 13 | 32° NNE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 3° N | aucun | soleil | 0.0 | 18°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 222° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 3 | 4 | 183° S | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 3 | 4 | 184° S | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 3 | 5 | 166° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 47° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 183° S | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 343° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 12° NNE | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 9° N | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 32° NNE | aucun | soleil | 0.0 | 22°C |
| Nord du Pont de Chavanay | 5 | 14 | 32° NNE | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 44° NE | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 25° NNE | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 7 | 12 | 323° NO | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont d'Arciat | 7 | 12 | 323° NO | aucun | soleil-couvert | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 356° N | aucun | soleil | 0.0 | 21°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 38° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Excenevex | 8 | 13 | 38° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage du Vengeron | 8 | 13 | 38° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Hermance | 8 | 13 | 38° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 323° NO | aucun | couvert | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 52° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 317° NO | aucun | couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 22° NNE | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 4° N | aucun | soleil-couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 350° N | aucun | soleil-couvert | 0.3 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 3 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 303° ONO | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 2 | 7 | 50° NE | aucun | soleil-couvert | 0.6 | 21°C |
| Nord du Pont d'Arciat | 2 | 7 | 50° NE | aucun | soleil-couvert | 0.6 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 350° N | aucun | soleil-couvert | 0.3 | 20°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 230° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Excenevex | 7 | 10 | 230° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Plage du Vengeron | 7 | 10 | 230° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Hermance | 7 | 10 | 230° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 106° ESE | aucun | soleil | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 32° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 119° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 203° SSO | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 11 | 7° N | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 344° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 83° E | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 2 | 9 | 83° E | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 146° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 209° SSO | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 4 | 9 | 185° S | aucun | couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 4 | 9 | 185° S | aucun | couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 117° ESE | aucun | couvert | 0.0 | 18°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 238° OSO | aucun | pluie | 7.8 | 19°C |
| Plage d'Excenevex | 5 | 9 | 20° NNE | aucun | couvert | 0.6 | 18°C |
| Plage du Vengeron | 5 | 9 | 238° OSO | aucun | pluie | 7.8 | 19°C |
| Plage d'Hermance | 5 | 9 | 238° OSO | aucun | pluie | 7.8 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 257° OSO | aucun | couvert | 0.6 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 229° SO | aucun | pluie | 1.2 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 20 | 352° N | aucun | couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 347° NNO | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 24 | 4° N | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 11 | 21 | 356° N | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 347° NNO | aucun | pluie | 1.8 | 20°C |
| Nord du Pont de Chavanay | 7 | 16 | 347° NNO | aucun | pluie | 1.8 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 16 | 346° NNO | aucun | soleil-couvert | 0.6 | 19°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 341° NNO | aucun | pluie | 1.8 | 19°C |
| Saint-Romain-des-Iles | 7 | 13 | 336° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 7 | 13 | 336° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 349° N | aucun | pluie | 1.2 | 19°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 22 | 22° NNE | 08h-16h | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 14 | 22 | 16° NNE | 08h-19h | couvert | 0.0 | 15°C |
| Plage du Vengeron | 14 | 22 | 22° NNE | 08h-16h | couvert | 0.0 | 15°C |
| Plage d'Hermance | 14 | 22 | 22° NNE | 08h-16h | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 14 | 342° NNO | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 31° NNE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 349° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 338° NNO | aucun | couvert | 0.7 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 9° N | 08h-19h | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 1° N | 08h-16h | couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 351° N | aucun | couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 20 | 351° N | aucun | couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 326° NO | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 338° NNO | aucun | couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 6 | 12 | 325° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 6 | 12 | 325° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 18 | 333° NNO | aucun | couvert | 0.0 | 16°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 11 | 23° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 10 | 36° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 3 | 11 | 23° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 3 | 11 | 23° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 287° ONO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 19° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 191° S | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 191° S | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 16 | 172° S | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 5 | 18 | 186° S | aucun | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 190° S | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 4 | 11 | 190° S | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 180° S | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 11 | 198° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 4 | 10 | 148° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 4 | 10 | 148° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 112° ESE | aucun | soleil-couvert | 0.0 | 16°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 229° SO | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 6 | 11 | 223° SO | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 7 | 12 | 229° SO | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 7 | 12 | 229° SO | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 253° OSO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 34° NE | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 194° SSO | aucun | soleil | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 212° SSO | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 192° SSO | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 186° S | 12h-17h | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 166° SSE | 13h-16h | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 11 | 25 | 166° SSE | 13h-16h | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 167° SSE | 13h-18h | soleil | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 166° SSE | 13h-17h | soleil | 0.0 | 20°C |
| Saint-Romain-des-Iles | 6 | 12 | 165° SSE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont d'Arciat | 6 | 12 | 165° SSE | aucun | soleil | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 184° S | aucun | soleil | 0.0 | 20°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 212° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 4 | 7 | 249° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 6 | 10 | 212° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 6 | 10 | 212° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 12 | 246° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 12 | 202° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 196° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 21 | 194° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 199° SSO | 13h-17h | soleil-couvert | 0.2 | 19°C |
| La Roche-de-Glun - Base Nautique | 12 | 27 | 197° SSO | 11h-19h | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 30 | 178° S | 10h-20h | soleil-couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 14 | 30 | 178° S | 10h-20h | soleil-couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 29 | 179° S | 08h-20h | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 14 | 30 | 176° S | 09h-20h | soleil-couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 11 | 21 | 173° S | 13h-18h | soleil-couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 11 | 21 | 173° S | 13h-18h | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 27 | 189° S | 10h-18h | soleil-couvert | 0.0 | 19°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 214° SO | 13h-18h | pluie | 3.0 | 12°C |
| Plage d'Excenevex | 19 | 25 | 227° SO | 11h-19h | pluie | 4.3 | 13°C |
| Plage du Vengeron | 13 | 19 | 214° SO | 13h-18h | pluie | 3.0 | 12°C |
| Plage d'Hermance | 13 | 19 | 214° SO | 13h-18h | pluie | 3.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 24 | 222° SO | aucun | pluie | 7.8 | 6°C |
| Lac du Bourget - Cap des Séselets | 6 | 24 | 219° SO | aucun | pluie | 16.2 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 20 | 177° S | aucun | pluie | 20.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 20 | 174° S | aucun | orage | 22.2 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 19 | 309° NO | aucun | orage | 27.9 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 23 | 299° ONO | aucun | orage | 27.9 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 27 | 323° NO | aucun | orage | 27.8 | 7°C |
| Nord du Pont de Chavanay | 6 | 27 | 323° NO | aucun | orage | 27.8 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 25 | 298° ONO | aucun | orage | 26.5 | 8°C |
| Saint-Cyr-sur-le-Rhône | 9 | 28 | 315° NO | aucun | orage | 27.1 | 7°C |
| Saint-Romain-des-Iles | 11 | 22 | 295° ONO | aucun | orage | 24.3 | 8°C |
| Nord du Pont d'Arciat | 11 | 22 | 295° ONO | aucun | orage | 24.3 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 305° NO | aucun | orage | 24.9 | 8°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 215° SO | 10h-18h | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 15 | 22 | 229° SO | 08h-19h | soleil | 0.0 | 14°C |
| Plage du Vengeron | 13 | 18 | 215° SO | 10h-18h | soleil | 0.0 | 13°C |
| Plage d'Hermance | 13 | 18 | 215° SO | 10h-18h | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 18 | 235° SO | aucun | soleil | 0.6 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 224° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 191° S | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 203° SSO | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 183° S | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 172° S | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 17 | 180° S | aucun | soleil | 0.6 | 14°C |
| Nord du Pont de Chavanay | 6 | 17 | 180° S | aucun | soleil | 0.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 183° S | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 6 | 17 | 186° S | aucun | soleil | 0.6 | 14°C |
| Saint-Romain-des-Iles | 9 | 18 | 201° SSO | aucun | soleil | 0.6 | 14°C |
| Nord du Pont d'Arciat | 9 | 18 | 201° SSO | aucun | soleil | 0.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 214° SO | aucun | soleil | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 231° SO | 11h-14h | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 11 | 14 | 244° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 12 | 17 | 231° SO | 11h-14h | couvert | 0.0 | 15°C |
| Plage d'Hermance | 12 | 17 | 231° SO | 11h-14h | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 14 | 244° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 270° O | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 27 | 174° S | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 23 | 176° S | aucun | soleil | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 23 | 204° SSO | aucun | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 203° SSO | aucun | couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 29 | 186° S | 09h-14h | couvert | 0.6 | 14°C |
| Nord du Pont de Chavanay | 11 | 29 | 186° S | 09h-14h | couvert | 0.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 36 | 179° S | 08h-14h | pluie | 1.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 14 | 33 | 181° S | 08h-14h | couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 14 | 26 | 178° S | 08h-14h | pluie | 1.9 | 13°C |
| Nord du Pont d'Arciat | 14 | 26 | 178° S | 08h-14h | pluie | 1.9 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 33 | 187° S | 08h-14h | pluie | 1.2 | 13°C |
