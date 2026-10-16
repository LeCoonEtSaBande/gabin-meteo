# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 16/10/2026 22:00 (Europe/Paris)
- Fichiers générés le : 2026-10-16T22:05:28+02:00
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
| Cruas - Nuclear Spot (`cruas`) | Montélimar | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/cruas.md |
| Centrale de Saint-Alban-du-Rhône (`st_alban_du_rhone`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_alban_du_rhone.md |
| Nord du Pont de Chavanay (`pont_de_chavanay`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_de_chavanay.md |
| Loire-sur-Rhône / Chasse-sur-Rhône (`loire_sur_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/loire_sur_rhone.md |
| Saint-Cyr-sur-le-Rhône (`st_cyr_sur_le_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_cyr_sur_le_rhone.md |
| Saint-Romain-des-Iles (`st_romain_des_iles`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_romain_des_iles.md |
| Nord du Pont d'Arciat (`pont_darciat`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_darciat.md |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu (`wwmeyzieu`) | Réservoir du Grand Large - Meyzieu | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/wwmeyzieu.md |

## Tendances journalières (données des puces de la carte)

Courbe des puces : AROMEIFS pour les spots AROME HD, ICONIFS (ICON-CH1 → ICON-CH2 → ICON Global → IFS) pour les spots ICON-CH1. Format : vent moyen max / rafale au même moment, créneau, icône, température à 15 h.

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 59° ENE | aucun | couvert | 0.0 | 17°C |
| Plage d'Excenevex | 3 | 5 | 218° SO | aucun | couvert | 0.0 | 16°C |
| Plage du Vengeron | 6 | 8 | 17° NNE | aucun | couvert | 0.0 | 17°C |
| Plage d'Hermance | 6 | 7 | 16° NNE | aucun | couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 356° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 198° SSO | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 360° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 346° NNO | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 11 | 6° N | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 325° NO | aucun | soleil | 0.0 | 21°C |
| Cruas - Nuclear Spot | 6 | 11 | 27° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 7 | 325° NO | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 4 | 8 | 332° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 122° ESE | aucun | soleil | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 204° SSO | aucun | soleil-couvert | 0.0 | 22°C |
| Saint-Romain-des-Iles | 3 | 4 | 152° SSE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont d'Arciat | 4 | 6 | 183° S | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 19°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 351° N | aucun | pluie | 6.0 | 16°C |
| Plage d'Excenevex | 10 | 14 | 48° NE | aucun | pluie | 8.0 | 16°C |
| Plage du Vengeron | 10 | 12 | 73° ENE | aucun | pluie | 3.6 | 16°C |
| Plage d'Hermance | 12 | 17 | 15° NNE | aucun | pluie | 6.6 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 14 | 310° NO | aucun | pluie | 3.1 | 16°C |
| Lac du Bourget - Cap des Séselets | 8 | 12 | 349° N | aucun | orage | 13.4 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 20 | 360° N | 11h-16h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 20 | 355° N | 13h-18h | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 30 | 7° N | 08h-20h | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 349° N | 15h-20h | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 17 | 34 | 22° NNE | 09h-20h | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 25 | 341° NNO | 10h-20h | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 13 | 25 | 353° N | 11h-20h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 337° NNO | aucun | couvert | 0.1 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 359° N | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 12 | 20 | 7° N | 13h-20h | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 13 | 20 | 4° N | 12h-20h | couvert | 0.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 22 | 352° N | 11h-20h | couvert | 0.1 | 13°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 26° NNE | aucun | pluie | 16.6 | 11°C |
| Plage d'Excenevex | 16 | 25 | 31° NNE | 08h-13h | couvert | 0.4 | 12°C |
| Plage du Vengeron | 14 | 21 | 32° NNE | 08h-12h | couvert | 0.5 | 12°C |
| Plage d'Hermance | 11 | 18 | 26° NNE | aucun | pluie | 16.6 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 300° ONO | aucun | couvert | 0.1 | 12°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 329° NNO | aucun | couvert | 0.1 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 2° N | aucun | couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 351° N | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 23 | 22° NNE | 08h-18h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 20° NNE | aucun | pluie | 1.2 | 14°C |
| Cruas - Nuclear Spot | 16 | 31 | 18° NNE | 08h-20h | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 18 | 354° N | 09h-13h | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 9 | 18 | 5° N | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 328° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 9° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 9 | 17 | 2° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 10 | 15 | 343° NNO | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 359° N | aucun | soleil-couvert | 0.1 | 14°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 36° NE | 10h-16h | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 15 | 20 | 23° NNE | 14h-20h | couvert | 0.0 | 14°C |
| Plage du Vengeron | 11 | 14 | 46° NE | 09h-13h | couvert | 0.6 | 14°C |
| Plage d'Hermance | 11 | 18 | 36° NE | 10h-16h | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 293° ONO | aucun | pluie | 0.9 | 15°C |
| Lac du Bourget - Cap des Séselets | 6 | 17 | 46° NE | aucun | pluie | 4.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 239° OSO | aucun | pluie | 1.4 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 345° NNO | aucun | pluie | 1.7 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 20 | 2° N | 13h-17h | pluie | 0.9 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 348° NNO | aucun | pluie | 3.4 | 11°C |
| Cruas - Nuclear Spot | 10 | 21 | 12° NNE | aucun | pluie | 5.7 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 10° N | aucun | pluie | 1.0 | 11°C |
| Nord du Pont de Chavanay | 8 | 13 | 10° N | aucun | pluie | 1.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 356° N | aucun | pluie | 1.4 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 356° N | aucun | pluie | 1.4 | 10°C |
| Saint-Romain-des-Iles | 5 | 9 | 360° N | aucun | couvert | 0.5 | 11°C |
| Nord du Pont d'Arciat | 5 | 9 | 360° N | aucun | couvert | 0.5 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 347° NNO | aucun | couvert | 0.8 | 10°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 242° OSO | aucun | pluie | 3.1 | 16°C |
| Plage d'Excenevex | 11 | 15 | 44° NE | aucun | pluie | 5.3 | 14°C |
| Plage du Vengeron | 5 | 9 | 49° NE | aucun | pluie | 4.0 | 15°C |
| Plage d'Hermance | 8 | 13 | 242° OSO | aucun | pluie | 3.1 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 13 | 12° NNE | aucun | pluie | 6.4 | 16°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 57° ENE | aucun | couvert | 0.2 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 33 | 163° SSE | 08h-17h | orage | 8.8 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 165° SSE | aucun | pluie | 6.4 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 28 | 222° SO | 16h-20h | pluie | 6.4 | 18°C |
| La Roche-de-Glun - Base Nautique | 13 | 25 | 212° SSO | aucun | pluie | 6.6 | 18°C |
| Cruas - Nuclear Spot | 16 | 36 | 130° SE | 17h-20h | orage | 7.9 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 21 | 17° NNE | aucun | pluie | 4.4 | 17°C |
| Nord du Pont de Chavanay | 6 | 21 | 17° NNE | aucun | pluie | 4.4 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 352° N | aucun | pluie | 2.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 352° N | aucun | pluie | 2.2 | 13°C |
| Saint-Romain-des-Iles | 5 | 7 | 2° N | aucun | orage | 7.7 | 13°C |
| Nord du Pont d'Arciat | 5 | 7 | 2° N | aucun | orage | 7.7 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 13° NNE | aucun | pluie | 1.3 | 14°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 235° SO | aucun | pluie | 3.5 | 11°C |
| Plage d'Excenevex | 12 | 16 | 230° SO | 11h-15h | soleil | 0.0 | 11°C |
| Plage du Vengeron | 13 | 18 | 215° SO | 12h-15h | soleil | 0.0 | 11°C |
| Plage d'Hermance | 11 | 17 | 235° SO | aucun | pluie | 3.5 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 198° SSO | aucun | pluie | 4.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 30° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 3° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 12 | 67° ENE | aucun | soleil-couvert | 0.7 | 17°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 97° E | aucun | soleil-couvert | 0.3 | 17°C |
| Cruas - Nuclear Spot | 4 | 19 | 331° NNO | aucun | soleil-couvert | 0.5 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 15 | 116° ESE | aucun | pluie | 1.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 15 | 116° ESE | aucun | pluie | 1.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 16 | 148° SSE | aucun | soleil-couvert | 0.7 | 17°C |
| Saint-Cyr-sur-le-Rhône | 3 | 15 | 164° SSE | aucun | pluie | 1.3 | 16°C |
| Saint-Romain-des-Iles | 8 | 16 | 176° S | aucun | pluie | 2.5 | 15°C |
| Nord du Pont d'Arciat | 8 | 16 | 176° S | aucun | pluie | 2.5 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 13 | 173° S | aucun | pluie | 4.9 | 16°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 6 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 6 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 6 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 304° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 44° NE | aucun | soleil-couvert | 0.3 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 333° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 13 | 7° N | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 355° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 348° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 10 | 22 | 4° N | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 11° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 6 | 14 | 11° N | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 3° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 359° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 9 | 141° SE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 3 | 9 | 141° SE | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 4° N | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 247° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 9 | 14 | 247° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 9 | 14 | 247° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 9 | 14 | 247° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 105° ESE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 12 | 360° N | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 21 | 188° S | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 19 | 186° S | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 182° S | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 183° S | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 4 | 11 | 195° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 21 | 193° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 8 | 21 | 193° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 179° S | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 179° S | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 7 | 14 | 168° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 7 | 14 | 168° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 151° SSE | aucun | soleil-couvert | 0.0 | 15°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 211° SSO | aucun | soleil-couvert | 0.3 | 16°C |
| Plage d'Excenevex | 7 | 11 | 39° NE | aucun | couvert | 0.1 | 16°C |
| Plage du Vengeron | 6 | 10 | 211° SSO | aucun | soleil-couvert | 0.3 | 16°C |
| Plage d'Hermance | 6 | 10 | 211° SSO | aucun | soleil-couvert | 0.3 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 124° SE | aucun | couvert | 0.8 | 15°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 146° SE | aucun | couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 346° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 347° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 29 | 12° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 8 | 27 | 7° N | aucun | couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 11 | 26 | 16° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 19 | 350° N | aucun | couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 9 | 19 | 350° N | aucun | couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 350° N | aucun | couvert | 0.2 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 349° N | aucun | couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 8 | 15 | 318° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 8 | 15 | 318° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 338° NNO | aucun | couvert | 0.0 | 16°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 7 | 13 | 17° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 6 | 10 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 6 | 10 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 304° NO | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 218° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 7° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 344° NNO | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 10° N | 09h-16h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 6° N | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 26 | 20° NNE | 08h-17h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 360° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 16 | 360° N | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 355° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 354° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 11 | 9° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 4 | 11 | 9° N | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 338° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 208° SSO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 8 | 10 | 236° SO | aucun | soleil | 0.0 | 17°C |
| Plage du Vengeron | 9 | 12 | 208° SSO | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 9 | 12 | 208° SSO | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 254° OSO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 9° N | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 158° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 173° S | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 186° S | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 188° S | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 4 | 11 | 192° SSO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 157° SSE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 9 | 157° SSE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 201° SSO | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 162° SSE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 3 | 9 | 162° SSE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 3 | 9 | 162° SSE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 184° S | aucun | soleil | 0.0 | 16°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 208° SSO | 08h-20h | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 17 | 25 | 220° SO | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 13 | 19 | 208° SSO | 08h-20h | soleil | 0.0 | 15°C |
| Plage d'Hermance | 13 | 19 | 208° SSO | 08h-20h | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 15 | 187° S | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 197° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 159° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 156° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 189° S | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 193° SSO | 11h-14h | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 5 | 16 | 192° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 16 | 172° S | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 8 | 16 | 172° S | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 17 | 173° S | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 161° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 5 | 17 | 283° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 5 | 17 | 283° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 176° S | aucun | soleil-couvert | 0.0 | 16°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 15 | 213° SSO | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 7 | 17 | 230° SO | aucun | soleil | 0.0 | 11°C |
| Plage du Vengeron | 6 | 15 | 213° SSO | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 6 | 15 | 213° SSO | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 302° ONO | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 54° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 23 | 357° N | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 24 | 354° N | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 32 | 0° N | 08h-19h | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 357° N | 10h-17h | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 13 | 30 | 7° N | 08h-19h | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 357° N | aucun | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 19 | 357° N | aucun | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 349° N | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 352° N | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 9 | 330° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 9 | 330° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 340° NNO | aucun | soleil | 0.0 | 12°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 229° SO | 09h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 16 | 22 | 223° SO | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 12 | 18 | 229° SO | 09h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 12 | 18 | 229° SO | 09h-20h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 237° OSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 264° O | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 19 | 11° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 19 | 6° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 70° ENE | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 99° E | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 5 | 13 | 40° NE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 13 | 150° SSE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 4 | 13 | 150° SSE | aucun | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 165° SSE | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 168° SSE | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 6 | 11 | 179° S | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 6 | 11 | 179° S | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 157° SSE | aucun | couvert | 0.0 | 14°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 207° SSO | 08h-16h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 14 | 21 | 222° SO | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 11 | 18 | 207° SSO | 08h-16h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 11 | 18 | 207° SSO | 08h-16h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 116° ESE | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 195° SSO | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 31 | 353° N | aucun | soleil | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 32 | 351° N | aucun | soleil | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 27 | 5° N | 10h-17h | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 23 | 11° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 12 | 28 | 17° NNE | 11h-17h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 3° N | aucun | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 20 | 3° N | aucun | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 350° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 359° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 9 | 19 | 300° ONO | aucun | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 9 | 19 | 300° ONO | aucun | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 329° NNO | aucun | soleil-couvert | 0.0 | 11°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
| Plage d'Excenevex | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
| Plage du Vengeron | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
| Plage d'Hermance | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
| Lac d'Annecy - Plage de Sévrier | 0 | 0 | 0° N | aucun | soleil | 0.0 | 0°C |
| Lac du Bourget - Cap des Séselets | 0 | 0 | 0° N | aucun | soleil | 0.0 | 0°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 0 | 0 | 0° N | aucun | soleil | 0.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 0 | 0 | 0° N | aucun | soleil | 0.0 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
| La Roche-de-Glun - Base Nautique | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
| Cruas - Nuclear Spot | 0 | 0 | 0° N | aucun | soleil | 0.0 | 0°C |
| Centrale de Saint-Alban-du-Rhône | 0 | 0 | 0° N | aucun | soleil | 0.0 | 0°C |
| Nord du Pont de Chavanay | 0 | 0 | 0° N | aucun | soleil | 0.0 | 0°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
| Saint-Cyr-sur-le-Rhône | 0 | 0 | 0° N | aucun | soleil | 0.0 | 0°C |
| Saint-Romain-des-Iles | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
| Nord du Pont d'Arciat | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 0 | 0 | 0° N | aucun | soleil-couvert | 0.0 | 0°C |
