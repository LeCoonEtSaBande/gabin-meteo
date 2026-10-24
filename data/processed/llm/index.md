# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 24/10/2026 21:35 (Europe/Paris)
- Fichiers générés le : 2026-10-24T21:38:46+02:00
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

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 24 | 212° SSO | 08h-20h | pluie | 3.6 | 11°C |
| Plage d'Excenevex | 14 | 21 | 197° SSO | 08h-17h | pluie | 2.3 | 11°C |
| Plage du Vengeron | 14 | 21 | 204° SSO | 08h-18h | pluie | 2.2 | 11°C |
| Plage d'Hermance | 15 | 20 | 208° SSO | 08h-18h | pluie | 3.6 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 139° SE | aucun | pluie | 1.3 | 10°C |
| Lac du Bourget - Cap des Séselets | 9 | 14 | 199° SSO | aucun | pluie | 1.5 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 13° NNE | aucun | couvert | 0.4 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 1° N | aucun | couvert | 0.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 65° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 99° E | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 9 | 62° ENE | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 8 | 173° S | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 9 | 175° S | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 175° S | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 225° SO | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 8 | 14 | 163° SSE | aucun | couvert | 0.3 | 13°C |
| Nord du Pont d'Arciat | 9 | 15 | 166° SSE | aucun | couvert | 0.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 167° SSE | aucun | couvert | 0.4 | 12°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 26 | 37 | 214° SO | 08h-20h | pluie | 10.5 | 14°C |
| Plage d'Excenevex | 19 | 28 | 210° SSO | 08h-19h | pluie | 9.1 | 14°C |
| Plage du Vengeron | 19 | 27 | 208° SSO | 08h-19h | pluie | 8.5 | 14°C |
| Plage d'Hermance | 25 | 34 | 211° SSO | 08h-19h | pluie | 6.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 19 | 146° SE | aucun | pluie | 4.3 | 15°C |
| Lac du Bourget - Cap des Séselets | 16 | 22 | 210° SSO | 08h-16h | pluie | 5.9 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 10 | 176° S | aucun | pluie | 6.7 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 160° SSE | aucun | couvert | 0.9 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 187° S | 13h-17h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 159° SSE | aucun | pluie | 2.0 | 14°C |
| Cruas - Nuclear Spot | 7 | 13 | 209° SSO | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 23 | 157° SSE | 11h-16h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 9 | 18 | 169° S | aucun | pluie | 0.9 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 28 | 179° S | 10h-15h | couvert | 0.1 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 214° SO | aucun | pluie | 1.1 | 14°C |
| Saint-Romain-des-Iles | 14 | 23 | 185° S | 08h-15h | pluie | 3.9 | 14°C |
| Nord du Pont d'Arciat | 16 | 23 | 195° SSO | 08h-15h | pluie | 2.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 25 | 189° S | 08h-17h | pluie | 1.9 | 14°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 222° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 6 | 8 | 265° O | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 4 | 6 | 210° SSO | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 6 | 9 | 237° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 302° ONO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 180° S | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 34° NE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 340° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 356° N | 09h-19h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 337° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 12 | 24 | 10° N | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 6 | 12 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 31° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 31° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 7 | 129° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 7 | 129° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 85° E | aucun | soleil-couvert | 0.0 | 13°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 220° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 2 | 4 | 219° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 3 | 4 | 208° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 3 | 4 | 188° S | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 45° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 47° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 174° S | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 191° S | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 190° S | 13h-17h | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 182° S | 14h-17h | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 6 | 12 | 200° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 160° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 6 | 12 | 160° SSE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 192° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 192° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 6 | 11 | 187° S | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 6 | 11 | 187° S | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 196° SSO | aucun | soleil-couvert | 0.0 | 17°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 35° NE | 15h-20h | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 16 | 21 | 27° NNE | 15h-20h | soleil | 0.0 | 16°C |
| Plage du Vengeron | 15 | 19 | 34° NE | 16h-20h | soleil | 0.0 | 17°C |
| Plage d'Hermance | 12 | 18 | 39° NE | 15h-20h | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 11 | 318° NO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 13° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 17° NNE | 12h-16h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 351° N | 13h-16h | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 26 | 12° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 14 | 23 | 7° N | 09h-20h | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 16 | 32 | 10° N | 08h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 21 | 6° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 12 | 21 | 6° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 354° N | aucun | soleil-couvert | 0.2 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 19 | 354° N | aucun | soleil-couvert | 0.2 | 15°C |
| Saint-Romain-des-Iles | 10 | 17 | 15° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 10 | 17 | 15° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 20 | 355° N | 08h-19h | soleil-couvert | 0.0 | 15°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 53° NE | 08h-14h | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 15 | 20 | 32° NNE | 08h-13h | couvert | 0.0 | 13°C |
| Plage du Vengeron | 10 | 14 | 50° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 10 | 16 | 53° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 34° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 14° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 348° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 6° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 331° NNO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 19 | 29° NNE | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 355° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 12 | 355° N | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 58° ENE | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 360° N | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 9 | 71° ENE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 3 | 9 | 71° ENE | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 20° NNE | aucun | soleil | 0.0 | 14°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 40° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 7 | 12 | 40° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 7 | 12 | 40° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 7 | 12 | 40° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 339° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 32° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 112° ESE | aucun | soleil | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 35° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 2° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 344° NNO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 6 | 13 | 357° N | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 19° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 10 | 19° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 320° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 9° N | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 3 | 7 | 322° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 3 | 7 | 322° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 340° NNO | aucun | soleil-couvert | 0.0 | 13°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 45° NE | 11h-18h | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 11 | 17 | 45° NE | 11h-18h | soleil | 0.0 | 13°C |
| Plage du Vengeron | 11 | 17 | 45° NE | 11h-18h | soleil | 0.0 | 13°C |
| Plage d'Hermance | 11 | 17 | 45° NE | 11h-18h | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 315° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 216° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 340° NNO | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 32° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 13° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 8° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 10 | 23 | 20° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 29° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 5 | 12 | 29° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 42° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 21° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 3 | 9 | 337° NNO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 3 | 9 | 337° NNO | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 7° N | aucun | soleil-couvert | 0.0 | 11°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 32° NNE | 11h-20h | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 16 | 23 | 30° NNE | 11h-20h | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 15 | 21 | 32° NNE | 11h-20h | soleil | 0.0 | 12°C |
| Plage d'Hermance | 15 | 21 | 32° NNE | 11h-20h | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 21 | 354° N | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 16 | 38° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 359° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 37 | 8° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 2° N | 10h-20h | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 16 | 34 | 18° NNE | 08h-20h | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 351° N | 12h-20h | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 12 | 28 | 351° N | 12h-20h | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 350° N | 13h-20h | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 348° NNO | 12h-20h | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 11 | 22 | 356° N | 13h-20h | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 11 | 22 | 356° N | 13h-20h | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 25 | 354° N | 13h-20h | soleil | 0.0 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 29° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 20 | 29 | 33° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 19 | 26 | 29° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 19 | 26 | 29° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 9° N | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 8 | 20 | 19° NNE | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 354° N | aucun | couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 348° NNO | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 9° N | 08h-19h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 5° N | 08h-16h | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 16 | 36 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 25 | 6° N | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 10 | 25 | 6° N | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 24 | 7° N | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 10 | 25 | 5° N | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 15 | 28 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 15 | 28 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 24 | 10° N | aucun | soleil-couvert | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 24 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 13 | 22 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 14 | 24 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 14 | 24 | 23° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 355° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 34° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 27° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 358° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 10 | 20 | 11° N | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 6 | 14 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 307° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 4° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 5 | 17 | 355° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 17 | 355° N | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 321° NO | aucun | couvert | 0.0 | 10°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 20 | 27° NNE | 08h-18h | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 10 | 17 | 19° NNE | 08h-13h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 11 | 20 | 27° NNE | 08h-18h | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 11 | 20 | 27° NNE | 08h-18h | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 342° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 32° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 15° NNE | aucun | soleil | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 13° NNE | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 1° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 352° N | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 8 | 20 | 28° NNE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 24° NNE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 6 | 14 | 24° NNE | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 21° NNE | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 18° NNE | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 4 | 10 | 10° N | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 4 | 10 | 10° N | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 353° N | aucun | soleil | 0.0 | 9°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 16 | 35° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 9 | 15 | 24° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 16 | 35° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 9 | 16 | 35° NE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 325° NO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 32° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 7° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 352° N | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 9 | 20 | 10° N | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 5 | 13 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 304° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 21° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 9 | 300° ONO | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 9 | 300° ONO | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 337° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 52° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 9 | 50° NE | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 4 | 10 | 52° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 4 | 10 | 52° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 292° ONO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 215° SO | aucun | couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 14° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 352° N | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 15° NNE | 09h-20h | couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 12° NNE | 12h-20h | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 14 | 31 | 18° NNE | 09h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 7° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 10 | 22 | 7° N | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 2° N | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 358° N | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 6 | 15 | 341° NNO | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 6 | 15 | 341° NNO | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 348° NNO | aucun | couvert | 0.0 | 6°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 118° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 3 | 8 | 101° E | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 4 | 7 | 118° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 4 | 7 | 118° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 10 | 312° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 147° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 23 | 6° N | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 358° N | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 20 | 44 | 10° N | 08h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 15 | 33 | 5° N | 08h-20h | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 18 | 39 | 13° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 346° NNO | 10h-18h | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 12 | 26 | 346° NNO | 10h-18h | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 345° NNO | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 12 | 25 | 342° NNO | 11h-17h | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 7 | 13 | 309° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 7 | 13 | 309° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 340° NNO | aucun | couvert | 0.0 | 9°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 76° ENE | aucun | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 5 | 9 | 34° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 10 | 76° ENE | aucun | soleil | 0.0 | 9°C |
| Plage d'Hermance | 4 | 10 | 76° ENE | aucun | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 314° NO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 15° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 18 | 18° NNE | aucun | couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 14 | 352° N | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 39 | 7° N | 08h-14h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 3° N | 08h-14h | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 17 | 38 | 8° N | 08h-14h | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 356° N | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 10 | 22 | 356° N | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 349° N | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 349° N | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 6 | 12 | 340° NNO | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 12 | 340° NNO | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 349° N | aucun | couvert | 0.0 | 10°C |
