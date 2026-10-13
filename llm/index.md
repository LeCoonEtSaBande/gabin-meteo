# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 13/10/2026 23:53 (Europe/Paris)
- Fichiers générés le : 2026-10-13T23:57:58+02:00
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

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 203° SSO | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 5 | 202° SSO | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 6 | 8 | 7° N | aucun | couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 6 | 178° S | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 346° NNO | aucun | couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 40° NE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 25 | 357° N | 14h-20h | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 22 | 353° N | 13h-18h | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 20 | 18° NNE | 15h-18h | soleil | 0.0 | 23°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 16° NNE | aucun | soleil-couvert | 0.0 | 23°C |
| Cruas - Nuclear Spot | 11 | 21 | 13° NNE | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont de Chavanay | 8 | 14 | 32° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 25° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 34° NE | aucun | soleil | 0.0 | 22°C |
| Saint-Romain-des-Iles | 3 | 7 | 58° ENE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont d'Arciat | 3 | 8 | 47° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 7 | 42° NE | aucun | soleil-couvert | 0.0 | 18°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 53° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 4 | 5 | 357° N | aucun | soleil | 0.0 | 19°C |
| Plage du Vengeron | 6 | 8 | 27° NNE | aucun | soleil | 0.0 | 20°C |
| Plage d'Hermance | 6 | 8 | 48° NE | aucun | soleil | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 278° O | aucun | soleil | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 6 | 7 | 25° NNE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 1° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 353° N | aucun | soleil | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 21 | 5° N | 10h-16h | soleil | 0.0 | 23°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 351° N | aucun | soleil-couvert | 0.0 | 24°C |
| Cruas - Nuclear Spot | 12 | 23 | 24° NNE | 08h-16h | soleil | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 17 | 5° N | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont de Chavanay | 8 | 15 | 1° N | aucun | soleil-couvert | 0.0 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 333° NNO | aucun | soleil-couvert | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 352° N | aucun | soleil-couvert | 0.0 | 23°C |
| Saint-Romain-des-Iles | 8 | 14 | 7° N | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont d'Arciat | 8 | 13 | 338° NNO | aucun | soleil-couvert | 0.2 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 348° NNO | aucun | soleil-couvert | 0.0 | 19°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 47° NE | aucun | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 3 | 4 | 145° SE | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 4 | 5 | 25° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 3 | 6 | 16° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 63° ENE | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 35° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 3° N | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 353° N | aucun | soleil | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 196° SSO | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 154° SSE | aucun | soleil | 0.0 | 24°C |
| Cruas - Nuclear Spot | 6 | 12 | 201° SSO | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 164° SSE | aucun | soleil | 0.0 | 23°C |
| Nord du Pont de Chavanay | 6 | 12 | 170° S | aucun | soleil | 0.0 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 146° SE | aucun | soleil | 0.0 | 23°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 198° SSO | aucun | soleil | 0.0 | 24°C |
| Saint-Romain-des-Iles | 4 | 8 | 175° S | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont d'Arciat | 3 | 7 | 197° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 9 | 154° SSE | aucun | soleil | 0.0 | 20°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 43° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 3 | 4 | 205° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 4 | 6 | 23° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 4 | 7 | 16° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 68° ENE | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 3 | 45° NE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 18 | 27° NNE | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 347° NNO | aucun | soleil | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 10 | 350° N | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 8° N | aucun | soleil | 0.0 | 23°C |
| Cruas - Nuclear Spot | 6 | 12 | 356° N | aucun | soleil | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 16° NNE | aucun | soleil | 0.0 | 24°C |
| Nord du Pont de Chavanay | 6 | 12 | 16° NNE | aucun | soleil | 0.0 | 24°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 17° NNE | aucun | soleil | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 17° NNE | aucun | soleil | 0.0 | 24°C |
| Saint-Romain-des-Iles | 5 | 9 | 18° NNE | aucun | soleil | 0.0 | 23°C |
| Nord du Pont d'Arciat | 5 | 9 | 18° NNE | aucun | soleil | 0.0 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 15° NNE | aucun | soleil | 0.0 | 23°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 45° NE | 16h-20h | pluie | 2.1 | 14°C |
| Plage d'Excenevex | 19 | 26 | 30° NNE | 13h-20h | pluie | 6.7 | 14°C |
| Plage du Vengeron | 19 | 26 | 42° NE | 15h-20h | pluie | 2.6 | 15°C |
| Plage d'Hermance | 15 | 24 | 45° NE | 16h-20h | pluie | 1.2 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 15 | 304° NO | aucun | orage | 11.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 13 | 222° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 32° NNE | aucun | couvert | 0.4 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 3° N | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 26 | 4° N | 08h-20h | couvert | 0.3 | 17°C |
| La Roche-de-Glun - Base Nautique | 13 | 22 | 1° N | 13h-20h | couvert | 0.6 | 16°C |
| Cruas - Nuclear Spot | 16 | 32 | 6° N | 08h-20h | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 24 | 354° N | 13h-20h | couvert | 0.2 | 15°C |
| Nord du Pont de Chavanay | 13 | 24 | 354° N | 13h-20h | couvert | 0.2 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 21 | 346° NNO | aucun | pluie | 1.3 | 13°C |
| Saint-Cyr-sur-le-Rhône | 11 | 21 | 346° NNO | aucun | pluie | 1.3 | 13°C |
| Saint-Romain-des-Iles | 13 | 21 | 6° N | 13h-20h | pluie | 4.6 | 13°C |
| Nord du Pont d'Arciat | 13 | 21 | 6° N | 13h-20h | pluie | 4.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 24 | 350° N | 13h-20h | pluie | 2.2 | 13°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 28 | 34° NE | 08h-20h | pluie | 10.6 | 11°C |
| Plage d'Excenevex | 19 | 27 | 26° NNE | 08h-20h | pluie | 10.5 | 11°C |
| Plage du Vengeron | 15 | 23 | 39° NE | 08h-20h | pluie | 11.2 | 12°C |
| Plage d'Hermance | 14 | 24 | 39° NE | 08h-20h | pluie | 11.1 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 310° NO | aucun | pluie | 7.1 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 203° SSO | aucun | pluie | 12.7 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 305° NO | aucun | orage | 17.6 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 14 | 350° N | aucun | pluie | 15.4 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 27 | 9° N | 08h-20h | pluie | 4.8 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 357° N | 08h-13h | couvert | 0.4 | 10°C |
| Cruas - Nuclear Spot | 13 | 29 | 14° NNE | 08h-20h | pluie | 4.2 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 343° NNO | aucun | pluie | 6.6 | 10°C |
| Nord du Pont de Chavanay | 9 | 20 | 343° NNO | aucun | pluie | 6.6 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 341° NNO | aucun | pluie | 6.9 | 10°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 337° NNO | aucun | pluie | 6.9 | 10°C |
| Saint-Romain-des-Iles | 10 | 18 | 344° NNO | 09h-12h | couvert | 0.1 | 10°C |
| Nord du Pont d'Arciat | 10 | 18 | 344° NNO | 09h-12h | couvert | 0.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 342° NNO | aucun | pluie | 7.8 | 10°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 35° NE | 08h-13h | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 11 | 17 | 35° NE | 08h-13h | couvert | 0.0 | 15°C |
| Plage du Vengeron | 11 | 17 | 35° NE | 08h-13h | couvert | 0.0 | 15°C |
| Plage d'Hermance | 11 | 17 | 35° NE | 08h-13h | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 355° N | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 22° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 340° NNO | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 360° N | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 1° N | 08h-11h | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 349° N | aucun | pluie | 1.5 | 12°C |
| Cruas - Nuclear Spot | 12 | 25 | 20° NNE | 08h-11h | pluie | 1.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 3° N | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 13 | 3° N | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 331° NNO | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 350° N | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 11 | 346° NNO | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 11 | 346° NNO | aucun | couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 353° N | aucun | couvert | 0.0 | 13°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 29° NNE | aucun | pluie | 1.2 | 16°C |
| Plage d'Excenevex | 8 | 13 | 29° NNE | aucun | pluie | 1.2 | 16°C |
| Plage du Vengeron | 8 | 13 | 29° NNE | aucun | pluie | 1.2 | 16°C |
| Plage d'Hermance | 8 | 13 | 29° NNE | aucun | pluie | 1.2 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 340° NNO | aucun | soleil-couvert | 0.1 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 26° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 237° OSO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 16 | 178° S | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 354° N | aucun | couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 342° NNO | aucun | couvert | 0.0 | 19°C |
| Cruas - Nuclear Spot | 6 | 14 | 30° NNE | aucun | couvert | 0.1 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 46° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 4 | 11 | 46° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 39° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 36° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 4 | 10 | 327° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 4 | 10 | 327° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 350° N | aucun | couvert | 0.0 | 16°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 56° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 6 | 11 | 15° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 5 | 9 | 56° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 5 | 9 | 56° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 264° O | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 210° SSO | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 16° NNE | aucun | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 27° NNE | aucun | couvert | 0.6 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 6° N | aucun | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 359° N | aucun | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 7 | 16 | 31° NNE | aucun | couvert | 0.8 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 23° NNE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 4 | 10 | 23° NNE | aucun | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 63° ENE | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 17° NNE | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 2 | 8 | 12° NNE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 2 | 8 | 12° NNE | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 31° NNE | aucun | couvert | 0.0 | 14°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 227° SO | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 6 | 10 | 239° OSO | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 7 | 11 | 227° SO | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 7 | 11 | 227° SO | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 257° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 360° N | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 8 | 156° SSE | aucun | soleil-couvert | 0.7 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 4 | 239° OSO | aucun | soleil-couvert | 0.7 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 19° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 333° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 3 | 12 | 46° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 321° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 337° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 3 | 8 | 125° SE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 3 | 8 | 125° SE | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 348° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 35° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 8 | 12 | 13° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 6 | 10 | 35° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 6 | 10 | 35° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 309° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 176° S | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 4° N | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 357° N | aucun | couvert | 0.6 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 11° N | 12h-20h | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 10° N | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 12 | 27 | 20° NNE | 08h-20h | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 7° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 7 | 18 | 7° N | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 5° N | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 1° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 6 | 14 | 5° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 6 | 14 | 5° N | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 339° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 19° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 9 | 14 | 14° NNE | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 9 | 13 | 19° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 9 | 13 | 19° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 310° NO | aucun | couvert | 0.6 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 21° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 10° N | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 349° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 4° N | 10h-17h | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 358° N | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 12 | 29 | 17° NNE | 08h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 360° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 16 | 360° N | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 353° N | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 354° N | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 14 | 350° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 7 | 14 | 350° N | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 348° NNO | aucun | couvert | 0.0 | 14°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 27° NNE | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 7 | 12 | 14° NNE | aucun | couvert | 0.6 | 13°C |
| Plage du Vengeron | 7 | 12 | 27° NNE | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 7 | 12 | 27° NNE | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 333° NNO | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 27° NNE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 36° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 9° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 2° N | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 18 | 17° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 11 | 28° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 11 | 28° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 9° N | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 18° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 3 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 348° NNO | aucun | soleil-couvert | 0.0 | 13°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 5 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 4 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 4 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 297° ONO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 25° NNE | aucun | soleil-couvert | 0.2 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 230° SO | aucun | couvert | 0.3 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 8 | 295° ONO | aucun | pluie | 1.1 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 357° N | aucun | pluie | 2.4 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 311° NO | aucun | pluie | 1.8 | 14°C |
| Cruas - Nuclear Spot | 4 | 9 | 7° N | aucun | couvert | 0.6 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 5 | 347° NNO | aucun | pluie | 2.4 | 13°C |
| Nord du Pont de Chavanay | 2 | 5 | 347° NNO | aucun | pluie | 2.4 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 34° NE | aucun | pluie | 1.8 | 13°C |
| Saint-Cyr-sur-le-Rhône | 2 | 4 | 342° NNO | aucun | pluie | 1.8 | 13°C |
| Saint-Romain-des-Iles | 2 | 7 | 139° SE | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 7 | 139° SE | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 300° ONO | aucun | couvert | 0.6 | 13°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 4 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 4 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 304° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 12° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 191° S | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 198° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 5° N | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 345° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 5 | 12 | 16° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 8° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 22° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 2 | 7 | 113° ESE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 2 | 7 | 113° ESE | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 335° NNO | aucun | soleil-couvert | 0.0 | 15°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 6 | 34° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 4 | 7 | 28° NNE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 2 | 6 | 34° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 2 | 6 | 34° NE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 307° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 32° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 29° NNE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 32° NNE | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 5° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 348° NNO | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 4 | 10 | 45° NE | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 10 | 46° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 43° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 40° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 2 | 7 | 52° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 2 | 7 | 52° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 4 | 307° NO | aucun | couvert | 0.0 | 15°C |
