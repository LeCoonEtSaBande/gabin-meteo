# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 21/11/2026 00:12 (Europe/Paris)
- Fichiers générés le : 2026-11-21T00:16:48+01:00
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
| Lac du Bourget - Cap des Séselets (`cap_des_seselets`) | Lac du Bourget | ICONCH1 | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/cap_des_seselets.md |
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

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 227° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 8 | 11 | 214° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 7 | 10 | 229° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 6 | 8 | 207° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 158° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 118° ESE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 208° SSO | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 193° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 5 | 12° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 5° N | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 5 | 10 | 50° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 157° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 6 | 153° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 152° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 212° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 3 | 4 | 191° S | aucun | pluie | 0.5 | 14°C |
| Nord du Pont d'Arciat | 4 | 6 | 203° SSO | aucun | pluie | 0.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 3 | 65° ENE | aucun | soleil-couvert | 0.0 | 13°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 26 | 215° SO | 13h-20h | pluie | 8.3 | 11°C |
| Plage d'Excenevex | 19 | 25 | 207° SSO | 13h-20h | pluie | 7.2 | 11°C |
| Plage du Vengeron | 16 | 22 | 221° SO | 14h-20h | pluie | 3.5 | 11°C |
| Plage d'Hermance | 15 | 22 | 211° SSO | 14h-20h | pluie | 5.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 17 | 261° O | aucun | orage | 35.4 | 10°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 142° SE | aucun | orage | 35.5 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 31 | 167° SSE | aucun | orage | 25.6 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 25° NNE | aucun | orage | 14.8 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 14 | 195° SSO | aucun | couvert | 0.9 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 163° SSE | aucun | couvert | 0.1 | 15°C |
| Cruas - Nuclear Spot | 5 | 11 | 206° SSO | aucun | soleil-couvert | 0.3 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 16 | 157° SSE | aucun | couvert | 0.2 | 14°C |
| Nord du Pont de Chavanay | 7 | 12 | 163° SSE | aucun | couvert | 0.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 290° ONO | aucun | pluie | 1.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 217° SO | aucun | couvert | 0.5 | 13°C |
| Saint-Romain-des-Iles | 15 | 30 | 260° O | 15h-20h | pluie | 3.9 | 12°C |
| Nord du Pont d'Arciat | 16 | 27 | 260° O | 14h-20h | pluie | 4.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 26 | 267° O | 16h-19h | couvert | 0.6 | 12°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 28 | 199° SSO | 08h-13h | pluie | 2.0 | 9°C |
| Plage d'Excenevex | 16 | 23 | 25° NNE | 08h-11h | pluie | 1.6 | 8°C |
| Plage du Vengeron | 16 | 22 | 199° SSO | 08h-11h | pluie | 1.7 | 9°C |
| Plage d'Hermance | 13 | 22 | 193° SSO | aucun | pluie | 2.3 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 117° ESE | aucun | pluie | 4.3 | 7°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 155° SSE | aucun | pluie | 7.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 50° NE | aucun | pluie | 6.4 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 12° NNE | aucun | pluie | 2.2 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 24° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 335° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 9 | 18 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 7 | 126° SE | aucun | pluie | 1.4 | 9°C |
| Nord du Pont de Chavanay | 4 | 7 | 126° SE | aucun | pluie | 1.4 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 14° NNE | aucun | pluie | 2.5 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 14° NNE | aucun | pluie | 2.5 | 9°C |
| Saint-Romain-des-Iles | 9 | 14 | 226° SO | aucun | pluie | 1.6 | 10°C |
| Nord du Pont d'Arciat | 9 | 14 | 226° SO | aucun | pluie | 1.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 159° SSE | aucun | pluie | 4.5 | 8°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 47° NE | 08h-13h | couvert | 0.0 | 5°C |
| Plage d'Excenevex | 20 | 27 | 23° NNE | 08h-13h | couvert | 0.0 | 4°C |
| Plage du Vengeron | 15 | 19 | 48° NE | 08h-12h | couvert | 0.0 | 5°C |
| Plage d'Hermance | 14 | 21 | 48° NE | 08h-12h | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 319° NO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 16° NNE | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 189° S | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 350° N | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 15 | 213° SSO | aucun | couvert | 0.2 | 7°C |
| La Roche-de-Glun - Base Nautique | 11 | 21 | 211° SSO | aucun | couvert | 0.2 | 8°C |
| Cruas - Nuclear Spot | 9 | 21 | 28° NNE | aucun | pluie | 1.6 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 16 | 161° SSE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 10 | 16 | 161° SSE | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 188° S | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 188° S | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 4 | 8 | 74° ENE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 4 | 8 | 74° ENE | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 5 | 77° ENE | aucun | couvert | 0.0 | 5°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 63° ENE | aucun | orage | 8.0 | 5°C |
| Plage d'Excenevex | 15 | 21 | 33° NNE | 08h-16h | pluie | 0.9 | 5°C |
| Plage du Vengeron | 13 | 17 | 43° NE | aucun | orage | 7.9 | 5°C |
| Plage d'Hermance | 11 | 16 | 57° ENE | aucun | pluie | 7.3 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 343° NNO | aucun | pluie | 4.7 | 6°C |
| Lac du Bourget - Cap des Séselets | 7 | 8 | 353° N | aucun | orage | 9.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 204° SSO | aucun | orage | 18.8 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 270° O | aucun | orage | 26.2 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 359° N | aucun | orage | 24.4 | 6°C |
| La Roche-de-Glun - Base Nautique | 8 | 15 | 336° NNO | aucun | orage | 23.1 | 5°C |
| Cruas - Nuclear Spot | 6 | 17 | 31° NNE | aucun | orage | 29.9 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 14 | 336° NNO | aucun | orage | 20.8 | 4°C |
| Nord du Pont de Chavanay | 4 | 14 | 336° NNO | aucun | orage | 20.8 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 338° NNO | aucun | pluie | 17.3 | 4°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 343° NNO | aucun | pluie | 18.1 | 3°C |
| Saint-Romain-des-Iles | 4 | 6 | 314° NO | aucun | pluie | 18.8 | 3°C |
| Nord du Pont d'Arciat | 4 | 6 | 314° NO | aucun | pluie | 18.8 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 314° NO | aucun | pluie | 16.1 | 4°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 358° N | aucun | pluie | 2.5 | 7°C |
| Plage d'Excenevex | 5 | 7 | 358° N | aucun | pluie | 2.5 | 7°C |
| Plage du Vengeron | 5 | 7 | 358° N | aucun | pluie | 2.5 | 7°C |
| Plage d'Hermance | 5 | 7 | 358° N | aucun | pluie | 2.5 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 122° ESE | aucun | pluie | 6.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 119° ESE | aucun | pluie | 8.3 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 17 | 162° SSE | aucun | pluie | 3.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 13 | 176° S | aucun | pluie | 4.5 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 6 | 186° S | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 310° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 2 | 7 | 337° NNO | aucun | soleil-couvert | 0.3 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 168° SSE | aucun | pluie | 1.8 | 8°C |
| Nord du Pont de Chavanay | 3 | 6 | 168° SSE | aucun | pluie | 1.8 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 154° SSE | aucun | pluie | 1.2 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 164° SSE | aucun | pluie | 1.5 | 8°C |
| Saint-Romain-des-Iles | 4 | 6 | 189° S | aucun | pluie | 2.4 | 7°C |
| Nord du Pont d'Arciat | 4 | 6 | 189° S | aucun | pluie | 2.4 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 144° SE | aucun | pluie | 1.8 | 8°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 3 | 5 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 3 | 5 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 3 | 5 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 102° ESE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 98° E | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 5 | 105° ESE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 6 | 32° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 10° N | aucun | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 360° N | aucun | soleil | 0.0 | 8°C |
| Cruas - Nuclear Spot | 4 | 10 | 41° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 67° ENE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 2 | 7 | 67° ENE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 70° ENE | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 69° ENE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 7 | 159° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 7 | 159° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 144° SE | aucun | soleil-couvert | 0.0 | 5°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 191° S | aucun | pluie | 7.7 | 7°C |
| Plage d'Excenevex | 4 | 8 | 205° SSO | aucun | pluie | 6.2 | 8°C |
| Plage du Vengeron | 6 | 10 | 191° S | aucun | pluie | 7.7 | 7°C |
| Plage d'Hermance | 6 | 10 | 191° S | aucun | pluie | 7.7 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 5 | 99° E | aucun | pluie | 2.4 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 4° N | aucun | pluie | 4.2 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 165° SSE | aucun | couvert | 0.1 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 166° SSE | aucun | couvert | 0.1 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 173° S | aucun | couvert | 0.1 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 189° S | aucun | pluie | 1.0 | 10°C |
| Cruas - Nuclear Spot | 2 | 7 | 242° OSO | aucun | pluie | 0.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 185° S | aucun | pluie | 4.3 | 8°C |
| Nord du Pont de Chavanay | 6 | 14 | 185° S | aucun | pluie | 4.3 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 189° S | aucun | pluie | 7.3 | 7°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 182° S | aucun | pluie | 6.1 | 8°C |
| Saint-Romain-des-Iles | 5 | 9 | 191° S | aucun | pluie | 11.4 | 6°C |
| Nord du Pont d'Arciat | 5 | 9 | 191° S | aucun | pluie | 11.4 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 149° SSE | aucun | pluie | 10.4 | 7°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 231° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 9 | 17 | 246° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 8 | 13 | 231° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 8 | 13 | 231° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 137° SE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 270° O | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 171° S | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 165° SSE | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 176° S | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 171° S | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 2 | 8 | 187° S | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 138° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 10 | 138° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 133° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 140° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 9 | 157° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 9 | 157° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 174° S | aucun | soleil-couvert | 0.0 | 10°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 12 | 233° SO | aucun | pluie | 1.2 | 11°C |
| Plage d'Excenevex | 9 | 11 | 236° SO | aucun | couvert | 0.6 | 11°C |
| Plage du Vengeron | 10 | 12 | 233° SO | aucun | pluie | 1.2 | 11°C |
| Plage d'Hermance | 10 | 12 | 233° SO | aucun | pluie | 1.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 123° ESE | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 337° NNO | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 162° SSE | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 151° SSE | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 190° S | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 193° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 10 | 190° S | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 167° SSE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 14 | 167° SSE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 172° S | aucun | couvert | 0.6 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 167° SSE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 6 | 11 | 178° S | aucun | pluie | 1.2 | 9°C |
| Nord du Pont d'Arciat | 6 | 11 | 178° S | aucun | pluie | 1.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 176° S | aucun | pluie | 2.4 | 9°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 238° OSO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 2 | 4 | 128° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 2 | 4 | 238° OSO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 2 | 4 | 238° OSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 270° O | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 281° O | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 194° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 212° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 188° S | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 187° S | 11h-16h | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 6 | 16 | 194° SSO | aucun | soleil-couvert | 0.1 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 182° S | 11h-17h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 11 | 26 | 182° S | 11h-17h | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 172° S | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 12 | 25 | 176° S | 10h-17h | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 8 | 16 | 171° S | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 8 | 16 | 171° S | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 169° S | aucun | soleil-couvert | 0.0 | 13°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 6 | 256° OSO | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 1 | 3 | 306° NO | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 2 | 6 | 256° OSO | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 2 | 6 | 256° OSO | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 6 | 249° OSO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 19° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 160° SSE | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 167° SSE | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 204° SSO | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 209° SSO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 3 | 8 | 225° SO | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 162° SSE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 7 | 16 | 162° SSE | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 157° SSE | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 158° SSE | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 4 | 9 | 182° S | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 4 | 9 | 182° S | aucun | couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 135° SE | aucun | couvert | 0.0 | 12°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 24° NNE | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 8 | 11 | 22° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 10 | 14 | 24° NNE | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 10 | 14 | 24° NNE | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 325° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 40° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 4° N | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 161° SSE | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 358° N | aucun | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 15 | 347° NNO | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 7 | 18 | 7° N | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 3° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 5 | 12 | 3° N | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 339° NNO | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 353° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 4 | 11 | 316° NO | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 11 | 316° NO | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 340° NNO | aucun | couvert | 0.0 | 10°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 28° NNE | 08h-13h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 10 | 14 | 14° NNE | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 11 | 16 | 28° NNE | 08h-13h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 11 | 16 | 28° NNE | 08h-13h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 341° NNO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 30° NNE | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 29° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 4° N | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 357° N | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 9 | 21 | 7° N | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 11 | 11° N | aucun | couvert | 0.6 | 9°C |
| Nord du Pont de Chavanay | 5 | 11 | 11° N | aucun | couvert | 0.6 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 349° N | aucun | couvert | 0.6 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 360° N | aucun | couvert | 0.6 | 8°C |
| Saint-Romain-des-Iles | 6 | 12 | 8° N | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 12 | 8° N | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 360° N | aucun | couvert | 0.0 | 9°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 22° NNE | 08h-13h | soleil-couvert | 0.0 |  |
| Plage d'Excenevex | 15 | 22 | 26° NNE | 08h-13h | soleil-couvert | 0.0 |  |
| Plage du Vengeron | 16 | 22 | 22° NNE | 08h-13h | soleil-couvert | 0.0 |  |
| Plage d'Hermance | 16 | 22 | 22° NNE | 08h-13h | soleil-couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 7 | 17 | 2° N | aucun | soleil-couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 5 | 16 | 36° NE | aucun | soleil-couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 22° NNE | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 351° N | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 10° N | 08h-13h | soleil-couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 3° N | 08h-13h | soleil-couvert | 0.0 |  |
| Cruas - Nuclear Spot | 14 | 33 | 23° NNE | 08h-13h | soleil | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 351° N | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 10 | 22 | 351° N | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 344° NNO | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 345° NNO | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 10 | 19 | 342° NNO | aucun | soleil-couvert | 0.0 |  |
| Nord du Pont d'Arciat | 10 | 19 | 342° NNO | aucun | soleil-couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 340° NNO | aucun | couvert | 0.0 |  |
