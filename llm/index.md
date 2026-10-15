# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 15/10/2026 12:07 (Europe/Paris)
- Fichiers générés le : 2026-10-15T12:11:41+02:00
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

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 59° ENE | aucun | couvert | 0.0 | 18°C |
| Plage d'Excenevex | 6 | 9 | 57° ENE | aucun | couvert | 0.0 | 18°C |
| Plage du Vengeron | 8 | 12 | 38° NE | aucun | couvert | 0.0 | 18°C |
| Plage d'Hermance | 7 | 8 | 24° NNE | aucun | couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 329° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 2 | 2 | 49° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 9° N | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 13 | 344° NNO | aucun | soleil | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 6 | 15° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 3 | 8 | 159° SSE | aucun | soleil | 0.0 | 22°C |
| Cruas - Nuclear Spot | 6 | 12 | 52° NE | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 5 | 190° S | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 3 | 5 | 273° O | aucun | soleil-couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 118° ESE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 49° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 3 | 7 | 126° SE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont d'Arciat | 2 | 4 | 302° ONO | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 4 | 43° NE | aucun | soleil-couvert | 0.0 | 18°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 203° SSO | aucun | couvert | 0.0 | 17°C |
| Plage d'Excenevex | 3 | 5 | 218° SO | aucun | couvert | 0.0 | 17°C |
| Plage du Vengeron | 4 | 6 | 24° NNE | aucun | couvert | 0.0 | 18°C |
| Plage d'Hermance | 4 | 6 | 178° S | aucun | couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 55° NE | aucun | couvert | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 29° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 3° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 16 | 349° N | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 7 | 202° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 2 | 2 | 275° O | aucun | soleil-couvert | 0.0 | 20°C |
| Cruas - Nuclear Spot | 3 | 6 | 184° S | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 164° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 3 | 7 | 169° S | aucun | soleil-couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 152° SSE | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 219° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 4 | 7 | 211° SSO | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont d'Arciat | 5 | 8 | 203° SSO | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 187° S | aucun | soleil-couvert | 0.0 | 19°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 46° NE | aucun | orage | 14.7 | 15°C |
| Plage d'Excenevex | 13 | 17 | 38° NE | aucun | orage | 18.9 | 15°C |
| Plage du Vengeron | 10 | 13 | 58° ENE | aucun | pluie | 12.3 | 15°C |
| Plage d'Hermance | 7 | 10 | 66° ENE | aucun | pluie | 13.3 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 10 | 316° NO | aucun | pluie | 3.8 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 243° OSO | aucun | pluie | 1.5 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 28° NNE | aucun | couvert | 0.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 1° N | aucun | couvert | 0.1 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 30 | 5° N | 09h-20h | couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 15 | 26 | 1° N | 10h-20h | couvert | 0.2 | 18°C |
| Cruas - Nuclear Spot | 16 | 32 | 10° N | 08h-20h | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 23 | 351° N | 14h-20h | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 12 | 23 | 351° N | 14h-20h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 22 | 358° N | 14h-20h | couvert | 0.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 22 | 358° N | 14h-20h | couvert | 0.2 | 14°C |
| Saint-Romain-des-Iles | 12 | 20 | 5° N | 12h-20h | couvert | 0.3 | 13°C |
| Nord du Pont d'Arciat | 12 | 20 | 5° N | 12h-20h | couvert | 0.3 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 23 | 350° N | 13h-20h | couvert | 0.0 | 13°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 32° NNE | 08h-12h | pluie | 3.3 | 12°C |
| Plage d'Excenevex | 16 | 23 | 22° NNE | 08h-13h | pluie | 4.4 | 12°C |
| Plage du Vengeron | 11 | 16 | 44° NE | aucun | pluie | 6.6 | 13°C |
| Plage d'Hermance | 11 | 20 | 42° NE | aucun | pluie | 6.9 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 11 | 355° N | aucun | pluie | 5.1 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 24° NNE | aucun | couvert | 0.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 322° NO | aucun | orage | 14.3 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 348° NNO | aucun | orage | 14.1 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 349° N | 08h-20h | pluie | 9.3 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 17 | 338° NNO | aucun | pluie | 8.5 | 12°C |
| Cruas - Nuclear Spot | 12 | 26 | 10° N | 08h-20h | pluie | 11.7 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 6° N | aucun | pluie | 7.3 | 11°C |
| Nord du Pont de Chavanay | 9 | 15 | 6° N | aucun | pluie | 7.3 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 344° NNO | aucun | pluie | 6.8 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 344° NNO | aucun | pluie | 6.8 | 10°C |
| Saint-Romain-des-Iles | 10 | 16 | 360° N | aucun | pluie | 9.3 | 10°C |
| Nord du Pont d'Arciat | 10 | 16 | 360° N | aucun | pluie | 9.3 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 340° NNO | aucun | pluie | 5.3 | 10°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 55° NE | 08h-15h | couvert | 0.0 | 16°C |
| Plage d'Excenevex | 15 | 21 | 34° NE | 08h-13h | couvert | 0.0 | 16°C |
| Plage du Vengeron | 11 | 15 | 48° NE | 09h-12h | couvert | 0.0 | 16°C |
| Plage d'Hermance | 12 | 18 | 54° NE | 08h-13h | couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 360° N | aucun | couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 25° NNE | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 203° SSO | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 10 | 342° NNO | aucun | couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 359° N | aucun | pluie | 8.2 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 353° N | aucun | pluie | 3.3 | 14°C |
| Cruas - Nuclear Spot | 10 | 24 | 16° NNE | aucun | orage | 12.4 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 25° NNE | aucun | pluie | 2.1 | 14°C |
| Nord du Pont de Chavanay | 5 | 13 | 25° NNE | aucun | pluie | 2.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 348° NNO | aucun | couvert | 0.9 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 12° NNE | aucun | pluie | 1.8 | 14°C |
| Saint-Romain-des-Iles | 3 | 8 | 7° N | aucun | couvert | 0.6 | 13°C |
| Nord du Pont d'Arciat | 3 | 8 | 7° N | aucun | couvert | 0.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 7° N | aucun | couvert | 0.9 | 14°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 3° N | aucun | couvert | 0.0 | 17°C |
| Plage d'Excenevex | 3 | 5 | 3° N | aucun | couvert | 0.0 | 17°C |
| Plage du Vengeron | 3 | 5 | 3° N | aucun | couvert | 0.0 | 17°C |
| Plage d'Hermance | 3 | 5 | 3° N | aucun | couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 297° ONO | aucun | soleil-couvert | 0.3 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 27° NNE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 180° S | aucun | couvert | 0.3 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 6 | 236° SO | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 179° S | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 164° SSE | aucun | soleil-couvert | 0.0 | 21°C |
| Cruas - Nuclear Spot | 4 | 13 | 216° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 147° SSE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 5 | 12 | 147° SSE | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 128° SE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 129° SE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 3 | 8 | 92° E | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 8 | 92° E | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 105° ESE | aucun | soleil-couvert | 0.0 | 20°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 260° O | aucun | pluie | 5.9 | 17°C |
| Plage d'Excenevex | 3 | 5 | 260° O | aucun | pluie | 5.9 | 17°C |
| Plage du Vengeron | 3 | 5 | 260° O | aucun | pluie | 5.9 | 17°C |
| Plage d'Hermance | 3 | 5 | 260° O | aucun | pluie | 5.9 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 291° ONO | aucun | pluie | 2.6 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 205° SSO | aucun | pluie | 6.1 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 234° SO | aucun | soleil-couvert | 0.1 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 17 | 200° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 24° NNE | aucun | pluie | 13.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 312° NO | aucun | pluie | 16.2 | 16°C |
| Cruas - Nuclear Spot | 4 | 11 | 24° NNE | aucun | pluie | 16.9 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 183° S | aucun | pluie | 11.6 | 15°C |
| Nord du Pont de Chavanay | 3 | 9 | 183° S | aucun | pluie | 11.6 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 179° S | aucun | pluie | 9.8 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 187° S | aucun | pluie | 10.3 | 15°C |
| Saint-Romain-des-Iles | 3 | 7 | 175° S | aucun | pluie | 12.1 | 14°C |
| Nord du Pont d'Arciat | 3 | 7 | 175° S | aucun | pluie | 12.1 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 147° SSE | aucun | pluie | 10.9 | 14°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 98° E | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 7 | 10 | 5° N | aucun | couvert | 0.0 | 16°C |
| Plage du Vengeron | 5 | 9 | 98° E | aucun | couvert | 0.0 | 15°C |
| Plage d'Hermance | 5 | 9 | 98° E | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 316° NO | aucun | couvert | 0.4 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 355° N | aucun | couvert | 0.2 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 15 | 327° NNO | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 15 | 358° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 356° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 349° N | aucun | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 9 | 22 | 13° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 360° N | aucun | couvert | 0.1 | 16°C |
| Nord du Pont de Chavanay | 5 | 13 | 360° N | aucun | couvert | 0.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 352° N | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 351° N | aucun | couvert | 0.1 | 15°C |
| Saint-Romain-des-Iles | 4 | 9 | 32° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 4 | 9 | 32° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 348° NNO | aucun | couvert | 0.0 | 16°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 77° ENE | aucun | soleil | 0.1 | 14°C |
| Plage d'Excenevex | 5 | 9 | 1° N | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 4 | 8 | 77° ENE | aucun | soleil | 0.1 | 14°C |
| Plage d'Hermance | 4 | 8 | 77° ENE | aucun | soleil | 0.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 319° NO | aucun | soleil-couvert | 0.6 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 169° S | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 21 | 349° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 348° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 12° NNE | 12h-15h | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 9° N | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 11 | 24 | 23° NNE | 11h-15h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 3° N | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 7 | 16 | 3° N | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 5° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 1° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 10 | 358° N | aucun | soleil-couvert | 0.1 | 15°C |
| Nord du Pont d'Arciat | 4 | 10 | 358° N | aucun | soleil-couvert | 0.1 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 343° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 19 | 193° SSO | 13h-20h | pluie | 4.6 | 14°C |
| Plage d'Excenevex | 14 | 22 | 209° SSO | 12h-20h | pluie | 2.4 | 14°C |
| Plage du Vengeron | 11 | 19 | 193° SSO | 13h-20h | pluie | 4.6 | 14°C |
| Plage d'Hermance | 11 | 19 | 193° SSO | 13h-20h | pluie | 4.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 185° S | aucun | pluie | 4.2 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 234° SO | aucun | pluie | 11.4 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 157° SSE | aucun | pluie | 4.4 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 157° SSE | aucun | pluie | 3.8 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 176° S | aucun | pluie | 2.3 | 17°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 189° S | aucun | pluie | 2.2 | 16°C |
| Cruas - Nuclear Spot | 5 | 13 | 173° S | aucun | pluie | 5.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 164° SSE | aucun | pluie | 3.1 | 16°C |
| Nord du Pont de Chavanay | 7 | 18 | 164° SSE | aucun | pluie | 3.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 164° SSE | aucun | pluie | 1.3 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 167° SSE | aucun | pluie | 3.1 | 16°C |
| Saint-Romain-des-Iles | 5 | 11 | 208° SSO | aucun | pluie | 1.8 | 16°C |
| Nord du Pont d'Arciat | 5 | 11 | 208° SSO | aucun | pluie | 1.8 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 193° SSO | aucun | pluie | 3.0 | 16°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 64° ENE | aucun | soleil-couvert | 0.1 | 12°C |
| Plage d'Excenevex | 4 | 8 | 47° NE | aucun | soleil-couvert | 0.1 | 11°C |
| Plage du Vengeron | 5 | 9 | 64° ENE | aucun | soleil-couvert | 0.1 | 12°C |
| Plage d'Hermance | 5 | 9 | 64° ENE | aucun | soleil-couvert | 0.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 297° ONO | aucun | soleil-couvert | 0.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 16° NNE | aucun | couvert | 0.1 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 18 | 342° NNO | aucun | couvert | 0.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 340° NNO | aucun | couvert | 0.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 357° N | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 349° N | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 10 | 24 | 7° N | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 6° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 4 | 12 | 6° N | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 360° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 3 | 8 | 136° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 3 | 8 | 136° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 148° SSE | aucun | soleil-couvert | 0.0 | 12°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 6 | 310° NO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 6 | 42° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 2 | 6 | 310° NO | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 2 | 6 | 310° NO | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 257° OSO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 262° O | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 196° SSO | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 215° SO | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 193° SSO | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 195° SSO | 11h-17h | soleil | 0.0 | 17°C |
| Cruas - Nuclear Spot | 7 | 16 | 205° SSO | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 168° SSE | 12h-16h | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 11 | 25 | 168° SSE | 12h-16h | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 173° S | 10h-19h | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 169° S | 11h-17h | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 7 | 13 | 169° S | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 7 | 13 | 169° S | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 173° S | aucun | soleil | 0.0 | 17°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 258° OSO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 1 | 4 | 304° NO | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 3 | 6 | 258° OSO | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 3 | 6 | 258° OSO | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 263° O | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 15° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 216° SO | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 228° SO | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 194° SSO | 13h-16h | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 195° SSO | 12h-17h | soleil-couvert | 0.0 | 19°C |
| Cruas - Nuclear Spot | 8 | 18 | 185° S | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 179° S | 11h-16h | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 11 | 26 | 179° S | 11h-16h | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 172° S | 09h-16h | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 173° S | 10h-16h | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 9 | 17 | 164° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 9 | 17 | 164° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 23 | 174° S | aucun | soleil-couvert | 0.0 | 19°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 325° NO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 2 | 5 | 15° NNE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 2 | 5 | 325° NO | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 2 | 5 | 325° NO | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 284° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 28° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 206° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 232° SO | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 191° S | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 193° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 5 | 14 | 215° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 167° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 9 | 20 | 167° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 162° SSE | aucun | soleil | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 167° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 6 | 12 | 168° SSE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 12 | 168° SSE | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 152° SSE | aucun | soleil | 0.0 | 19°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 307° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 2 | 6 | 30° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 2 | 5 | 307° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 2 | 5 | 307° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 270° O | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 3° N | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 205° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 220° SO | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 188° S | 12h-17h | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 192° SSO | 11h-20h | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 6 | 16 | 208° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 172° S | 12h-20h | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 12 | 27 | 172° S | 12h-20h | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 166° SSE | 11h-20h | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 13 | 29 | 166° SSE | 11h-20h | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 9 | 17 | 166° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 9 | 17 | 166° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 150° SSE | aucun | soleil-couvert | 0.0 | 19°C |
