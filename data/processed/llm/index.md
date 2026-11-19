# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 20/11/2026 00:39 (Europe/Paris)
- Fichiers générés le : 2026-11-20T00:42:15+01:00
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

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 25 | 38 | 201° SSO | 08h-20h | pluie | 1.7 | 10°C |
| Plage d'Excenevex | 17 | 26 | 204° SSO | 08h-18h | pluie | 1.9 | 10°C |
| Plage du Vengeron | 16 | 23 | 193° SSO | 08h-20h | pluie | 2.9 | 10°C |
| Plage d'Hermance | 22 | 29 | 206° SSO | 08h-20h | pluie | 2.3 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 14 | 141° SE | aucun | pluie | 5.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 153° SSE | aucun | pluie | 2.8 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 145° SE | aucun | couvert | 0.9 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 143° SE | aucun | couvert | 0.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 207° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 164° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 6 | 11 | 209° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 20 | 153° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 20 | 167° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 180° S | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 205° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 11 | 17 | 177° S | aucun | couvert | 0.3 | 13°C |
| Nord du Pont d'Arciat | 12 | 20 | 197° SSO | 09h-14h | couvert | 0.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 17 | 186° S | 13h-17h | soleil-couvert | 0.0 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 228° SO | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 7 | 11 | 212° SSO | aucun | soleil | 0.0 | 12°C |
| Plage du Vengeron | 7 | 11 | 203° SSO | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 6 | 9 | 203° SSO | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 71° ENE | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 166° SSE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 10 | 172° S | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 6 | 196° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 6 | 17° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 5 | 36° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 5 | 10 | 49° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 177° S | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 2 | 3 | 288° ONO | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 4 | 113° ESE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 219° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 4 | 212° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 5 | 8 | 198° SSO | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 3 | 30° NNE | aucun | soleil-couvert | 0.0 | 13°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 24 | 33 | 206° SSO | 14h-20h | pluie | 8.4 | 11°C |
| Plage d'Excenevex | 21 | 29 | 208° SSO | 15h-20h | pluie | 7.2 | 11°C |
| Plage du Vengeron | 18 | 25 | 201° SSO | 14h-20h | pluie | 9.7 | 11°C |
| Plage d'Hermance | 18 | 29 | 201° SSO | 14h-20h | pluie | 7.4 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 17 | 247° OSO | aucun | orage | 49.6 | 12°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 134° SE | aucun | orage | 50.5 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 33 | 173° S | aucun | pluie | 17.9 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 19 | 150° SSE | aucun | pluie | 13.3 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 192° SSO | aucun | pluie | 4.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 186° S | aucun | pluie | 1.9 | 15°C |
| Cruas - Nuclear Spot | 7 | 14 | 280° O | aucun | pluie | 4.1 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 153° SSE | aucun | couvert | 0.3 | 14°C |
| Nord du Pont de Chavanay | 8 | 17 | 153° SSE | aucun | couvert | 0.3 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 23 | 184° S | aucun | pluie | 1.5 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 184° S | aucun | pluie | 1.5 | 13°C |
| Saint-Romain-des-Iles | 15 | 27 | 257° OSO | 11h-20h | couvert | 0.8 | 12°C |
| Nord du Pont d'Arciat | 15 | 27 | 257° OSO | 11h-20h | couvert | 0.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 23 | 262° O | aucun | pluie | 5.3 | 12°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 42° NE | 15h-20h | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 15 | 20 | 26° NNE | 15h-20h | soleil | 0.0 | 8°C |
| Plage du Vengeron | 12 | 15 | 37° NE | 15h-20h | soleil | 0.0 | 9°C |
| Plage d'Hermance | 11 | 16 | 42° NE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 334° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 323° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 10° N | aucun | pluie | 1.3 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 354° N | aucun | pluie | 1.4 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 23 | 15° NNE | 11h-20h | soleil-couvert | 0.1 | 10°C |
| La Roche-de-Glun - Base Nautique | 12 | 19 | 16° NNE | 13h-17h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 13 | 24 | 4° N | 11h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 23° NNE | aucun | couvert | 0.6 | 10°C |
| Nord du Pont de Chavanay | 8 | 13 | 23° NNE | aucun | couvert | 0.6 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 10 | 22° NNE | aucun | couvert | 0.6 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 10 | 22° NNE | aucun | couvert | 0.6 | 9°C |
| Saint-Romain-des-Iles | 7 | 14 | 336° NNO | aucun | couvert | 0.2 | 9°C |
| Nord du Pont d'Arciat | 7 | 14 | 336° NNO | aucun | couvert | 0.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 332° NNO | aucun | pluie | 3.3 | 9°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 45° NE | 08h-12h | couvert | 0.0 | 5°C |
| Plage d'Excenevex | 17 | 23 | 26° NNE | 08h-13h | couvert | 0.0 | 4°C |
| Plage du Vengeron | 14 | 18 | 47° NE | 08h-11h | couvert | 0.0 | 5°C |
| Plage d'Hermance | 13 | 19 | 47° NE | 08h-11h | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 335° NNO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 351° N | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 183° S | aucun | couvert | 0.1 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 178° S | aucun | couvert | 0.2 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 7° N | aucun | couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 342° NNO | aucun | couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 7 | 19 | 26° NNE | aucun | couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 175° S | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 3 | 10 | 175° S | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 81° E | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 24° NNE | aucun | couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 7 | 140° SE | aucun | couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 2 | 7 | 140° SE | aucun | couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 109° ESE | aucun | couvert | 0.0 | 4°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 360° N | aucun | pluie | 10.0 | 8°C |
| Plage d'Excenevex | 4 | 7 | 360° N | aucun | pluie | 10.0 | 8°C |
| Plage du Vengeron | 4 | 7 | 360° N | aucun | pluie | 10.0 | 8°C |
| Plage d'Hermance | 4 | 7 | 360° N | aucun | pluie | 10.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 120° ESE | aucun | orage | 24.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 111° ESE | aucun | orage | 37.9 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 315° NO | aucun | orage | 27.2 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 11 | 304° NO | aucun | orage | 22.5 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 7 | 222° SO | aucun | pluie | 14.6 | 9°C |
| La Roche-de-Glun - Base Nautique | 3 | 6 | 132° SE | aucun | pluie | 14.1 | 8°C |
| Cruas - Nuclear Spot | 3 | 7 | 345° NNO | aucun | pluie | 18.7 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 170° S | aucun | pluie | 13.8 | 8°C |
| Nord du Pont de Chavanay | 4 | 12 | 170° S | aucun | pluie | 13.8 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 169° S | aucun | pluie | 15.1 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 14 | 160° SSE | aucun | pluie | 14.5 | 8°C |
| Saint-Romain-des-Iles | 7 | 12 | 169° S | aucun | pluie | 8.4 | 7°C |
| Nord du Pont d'Arciat | 7 | 12 | 169° S | aucun | pluie | 8.4 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 15 | 132° SE | aucun | pluie | 15.2 | 7°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 27° NNE | aucun | pluie | 9.5 | 7°C |
| Plage d'Excenevex | 5 | 9 | 27° NNE | aucun | pluie | 9.5 | 7°C |
| Plage du Vengeron | 5 | 9 | 27° NNE | aucun | pluie | 9.5 | 7°C |
| Plage d'Hermance | 5 | 9 | 27° NNE | aucun | pluie | 9.5 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 292° ONO | aucun | pluie | 8.3 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 228° SO | aucun | pluie | 10.8 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 14 | 329° NNO | aucun | pluie | 3.9 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 355° N | aucun | pluie | 2.4 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 13° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 8 | 19 | 359° N | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 358° N | aucun | couvert | 0.6 | 8°C |
| Nord du Pont de Chavanay | 6 | 14 | 358° N | aucun | couvert | 0.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 350° N | aucun | soleil-couvert | 0.6 | 7°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 346° NNO | aucun | pluie | 1.2 | 7°C |
| Saint-Romain-des-Iles | 7 | 13 | 323° NO | aucun | couvert | 0.1 | 7°C |
| Nord du Pont d'Arciat | 7 | 13 | 323° NO | aucun | couvert | 0.1 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 340° NNO | aucun | couvert | 0.0 | 7°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 196° SSO | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 2 | 9 | 43° NE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 4 | 7 | 196° SSO | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 4 | 7 | 196° SSO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 93° E | aucun | couvert | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 1 | 8 | 25° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 41° NE | aucun | soleil-couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 12 | 22° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 22 | 8° N | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 4° N | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 9 | 22 | 16° NNE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 5° N | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 5 | 13 | 5° N | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 360° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 4 | 13 | 357° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 5 | 23° NNE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 2 | 5 | 23° NNE | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 5° N | aucun | soleil-couvert | 0.0 | 5°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 199° SSO | 11h-15h | pluie | 1.6 | 6°C |
| Plage d'Excenevex | 15 | 21 | 205° SSO | 10h-18h | pluie | 1.7 | 7°C |
| Plage du Vengeron | 11 | 16 | 199° SSO | 11h-15h | pluie | 1.6 | 6°C |
| Plage d'Hermance | 11 | 16 | 199° SSO | 11h-15h | pluie | 1.6 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 129° SE | aucun | pluie | 3.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 2° N | aucun | pluie | 3.4 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 18 | 348° NNO | aucun | pluie | 2.4 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 18 | 336° NNO | aucun | pluie | 1.8 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 2° N | aucun | pluie | 1.8 | 6°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 16° NNE | aucun | pluie | 1.2 | 6°C |
| Cruas - Nuclear Spot | 8 | 19 | 355° N | aucun | pluie | 1.8 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 12 | 328° NNO | aucun | pluie | 1.8 | 6°C |
| Nord du Pont de Chavanay | 2 | 12 | 328° NNO | aucun | pluie | 1.8 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 167° SSE | aucun | pluie | 1.8 | 6°C |
| Saint-Cyr-sur-le-Rhône | 2 | 14 | 323° NO | aucun | pluie | 2.4 | 6°C |
| Saint-Romain-des-Iles | 7 | 12 | 301° ONO | aucun | pluie | 2.4 | 7°C |
| Nord du Pont d'Arciat | 7 | 12 | 301° ONO | aucun | pluie | 2.4 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 190° S | aucun | pluie | 1.3 | 6°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 8 | 208° SSO | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 2 | 7 | 178° S | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 3 | 8 | 208° SSO | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 3 | 8 | 208° SSO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 90° E | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 13° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 16 | 9° N | aucun | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 16 | 355° N | aucun | couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 12° NNE | 11h-15h | couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 4° N | aucun | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 12 | 27 | 11° N | 08h-16h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 10° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 6 | 14 | 10° N | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 28° NNE | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 7° N | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 7 | 172° S | aucun | couvert | 0.7 | 8°C |
| Nord du Pont d'Arciat | 2 | 7 | 172° S | aucun | couvert | 0.7 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 317° NO | aucun | couvert | 0.0 | 7°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 198° SSO | aucun | pluie | 2.5 | 7°C |
| Plage d'Excenevex | 5 | 9 | 206° SSO | aucun | pluie | 2.4 | 7°C |
| Plage du Vengeron | 5 | 9 | 198° SSO | aucun | pluie | 2.5 | 7°C |
| Plage d'Hermance | 5 | 9 | 198° SSO | aucun | pluie | 2.5 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 165° SSE | aucun | couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 1 | 4 | 27° NNE | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 358° N | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 346° NNO | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 360° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 358° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 10 | 22 | 4° N | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 45° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 3 | 9 | 45° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 5 | 72° ENE | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 32° NNE | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 1 | 4 | 218° SO | aucun | couvert | 0.7 | 7°C |
| Nord du Pont d'Arciat | 1 | 4 | 218° SO | aucun | couvert | 0.7 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 5 | 174° S | aucun | couvert | 0.6 | 6°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 210° SSO | aucun | pluie | 1.4 | 10°C |
| Plage d'Excenevex | 5 | 10 | 210° SSO | aucun | pluie | 2.0 | 9°C |
| Plage du Vengeron | 6 | 9 | 210° SSO | aucun | pluie | 1.4 | 10°C |
| Plage d'Hermance | 6 | 9 | 210° SSO | aucun | pluie | 1.4 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 199° SSO | aucun | pluie | 1.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 351° N | aucun | pluie | 2.1 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 171° S | aucun | couvert | 0.6 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 161° SSE | aucun | couvert | 0.6 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 11 | 21° NNE | aucun | soleil-couvert | 0.6 | 9°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 299° ONO | aucun | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 2 | 10 | 351° N | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 4 | 73° ENE | aucun | couvert | 0.7 | 8°C |
| Nord du Pont de Chavanay | 1 | 4 | 73° ENE | aucun | couvert | 0.7 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 139° SE | aucun | couvert | 0.9 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 4 | 90° E | aucun | couvert | 0.8 | 7°C |
| Saint-Romain-des-Iles | 4 | 6 | 175° S | aucun | pluie | 5.4 | 8°C |
| Nord du Pont d'Arciat | 4 | 6 | 175° S | aucun | pluie | 5.4 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 127° SE | aucun | pluie | 2.2 | 7°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 69° ENE | aucun | pluie | 6.8 | 10°C |
| Plage d'Excenevex | 9 | 12 | 55° NE | aucun | pluie | 6.6 | 9°C |
| Plage du Vengeron | 5 | 8 | 69° ENE | aucun | pluie | 6.8 | 10°C |
| Plage d'Hermance | 5 | 8 | 69° ENE | aucun | pluie | 6.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 160° SSE | aucun | pluie | 9.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 206° SSO | aucun | pluie | 6.6 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 345° NNO | aucun | pluie | 4.9 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 325° NO | aucun | pluie | 3.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 4° N | aucun | pluie | 1.2 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 358° N | aucun | pluie | 1.2 | 8°C |
| Cruas - Nuclear Spot | 11 | 25 | 6° N | aucun | soleil-couvert | 0.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 3° N | aucun | pluie | 3.0 | 8°C |
| Nord du Pont de Chavanay | 8 | 18 | 3° N | aucun | pluie | 3.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 354° N | aucun | pluie | 4.8 | 8°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 360° N | aucun | pluie | 3.6 | 8°C |
| Saint-Romain-des-Iles | 7 | 14 | 349° N | aucun | pluie | 1.2 | 7°C |
| Nord du Pont d'Arciat | 7 | 14 | 349° N | aucun | pluie | 1.2 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 341° NNO | aucun | pluie | 3.0 | 8°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 55° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 9 | 14 | 31° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 8 | 12 | 55° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 8 | 12 | 55° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 352° N | aucun | soleil | 0.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 26° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 360° N | aucun | couvert | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 355° N | aucun | couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 9° N | 08h-20h | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 5° N | 09h-19h | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 14 | 33 | 14° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 23 | 353° N | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 9 | 23 | 353° N | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 351° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 350° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 7 | 13 | 349° N | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 7 | 13 | 349° N | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 358° N | aucun | soleil-couvert | 0.0 | 5°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Excenevex | 9 | 14 | 8° N | aucun | couvert | 0.0 |  |
| Plage du Vengeron | 8 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Hermance | 8 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 333° NNO | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 37° NE | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 5° N | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 355° N | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 7° N | aucun | soleil-couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 2° N | aucun | soleil-couvert | 0.0 |  |
| Cruas - Nuclear Spot | 11 | 26 | 18° NNE | aucun | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 1° N | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 6 | 13 | 1° N | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 350° N | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 355° N | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 6 | 12 | 2° N | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 6 | 12 | 2° N | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 352° N | aucun | couvert | 0.0 |  |
