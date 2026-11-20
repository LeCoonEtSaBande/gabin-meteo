# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 20/11/2026 15:11 (Europe/Paris)
- Fichiers générés le : 2026-11-20T15:12:03+01:00
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
| Plage de la pointe - Messery | 24 | 32 | 194° SSO | 08h-20h | pluie | 4.8 | 10°C |
| Plage d'Excenevex | 17 | 26 | 197° SSO | 08h-19h | pluie | 4.3 | 10°C |
| Plage du Vengeron | 16 | 22 | 196° SSO | 08h-20h | pluie | 7.7 | 10°C |
| Plage d'Hermance | 20 | 27 | 211° SSO | 08h-20h | pluie | 4.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 15 | 131° SE | aucun | pluie | 5.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 8 | 13 | 149° SSE | aucun | pluie | 5.1 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 14 | 141° SE | aucun | couvert | 0.5 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 10 | 125° SE | aucun | pluie | 2.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 203° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 174° S | aucun | soleil-couvert | 0.1 | 13°C |
| Cruas - Nuclear Spot | 5 | 10 | 200° SSO | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 17 | 159° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 18 | 160° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 186° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 180° S | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 11 | 18 | 211° SSO | aucun | pluie | 0.9 | 13°C |
| Nord du Pont d'Arciat | 11 | 16 | 217° SO | aucun | pluie | 0.7 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 19 | 202° SSO | 10h-16h | soleil-couvert | 0.0 | 13°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 221° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 7 | 10 | 226° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 7 | 10 | 232° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 7 | 10 | 227° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 7 | 153° SSE | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 122° ESE | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 9 | 207° SSO | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 204° SSO | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 5 | 212° SSO | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 59° ENE | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 9 | 59° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 140° SE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 3 | 6 | 197° SSO | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 147° SSE | aucun | soleil | 0.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 214° SO | aucun | soleil | 0.1 | 14°C |
| Saint-Romain-des-Iles | 5 | 9 | 175° S | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 5 | 6 | 178° S | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 4 | 86° E | aucun | soleil | 0.0 | 13°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 29 | 209° SSO | 12h-20h | pluie | 11.2 | 11°C |
| Plage d'Excenevex | 20 | 26 | 209° SSO | 13h-20h | pluie | 6.6 | 11°C |
| Plage du Vengeron | 17 | 25 | 224° SO | 12h-20h | pluie | 8.7 | 12°C |
| Plage d'Hermance | 17 | 27 | 206° SSO | 13h-20h | pluie | 8.9 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 18 | 250° OSO | aucun | orage | 37.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 9 | 11 | 143° SE | aucun | orage | 28.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 33 | 162° SSE | aucun | orage | 14.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 20 | 7° N | aucun | orage | 10.7 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 14 | 205° SSO | aucun | pluie | 1.4 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 27 | 184° S | aucun | pluie | 1.7 | 13°C |
| Cruas - Nuclear Spot | 8 | 15 | 352° N | aucun | couvert | 0.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 14 | 162° SSE | aucun | couvert | 0.4 | 12°C |
| Nord du Pont de Chavanay | 8 | 15 | 154° SSE | aucun | couvert | 0.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 174° S | aucun | pluie | 2.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 211° SSO | aucun | pluie | 2.3 | 11°C |
| Saint-Romain-des-Iles | 18 | 30 | 274° O | 10h-20h | pluie | 4.2 | 12°C |
| Nord du Pont d'Arciat | 19 | 33 | 259° O | 10h-20h | pluie | 4.4 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 27 | 245° OSO | 09h-13h | couvert | 0.5 | 10°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 201° SSO | 08h-12h | pluie | 2.2 | 9°C |
| Plage d'Excenevex | 16 | 22 | 200° SSO | 08h-12h | pluie | 1.3 | 9°C |
| Plage du Vengeron | 16 | 21 | 200° SSO | 08h-13h | pluie | 2.2 | 9°C |
| Plage d'Hermance | 15 | 22 | 201° SSO | 08h-12h | pluie | 1.9 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 127° SE | aucun | pluie | 1.4 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 140° SE | aucun | pluie | 6.7 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 43° NE | aucun | pluie | 10.4 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 24° NNE | aucun | pluie | 2.9 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 342° NNO | 14h-20h | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 12 | 18 | 328° NNO | 15h-19h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 13 | 26 | 6° N | 15h-20h | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 18 | 28° NNE | aucun | soleil-couvert | 0.7 | 10°C |
| Nord du Pont de Chavanay | 12 | 18 | 28° NNE | aucun | soleil-couvert | 0.7 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 355° N | aucun | pluie | 0.6 | 7°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 355° N | aucun | pluie | 0.6 | 7°C |
| Saint-Romain-des-Iles | 11 | 21 | 283° ONO | aucun | pluie | 1.9 | 7°C |
| Nord du Pont d'Arciat | 11 | 21 | 283° ONO | aucun | pluie | 1.9 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 15 | 350° N | aucun | pluie | 1.2 | 7°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 67° ENE | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 12 | 16 | 27° NNE | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 5 | 7 | 16° NNE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 6 | 9 | 76° ENE | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 353° N | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 34° NE | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 182° S | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 177° S | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 359° N | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 341° NNO | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 8 | 16 | 28° NNE | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 24° NNE | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 5 | 12 | 24° NNE | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 4 | 82° E | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 21° NNE | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 6 | 87° E | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 4 | 6 | 87° E | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 5° N | aucun | couvert | 0.0 | 9°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 17 | 15° NNE | aucun | pluie | 3.0 | 6°C |
| Plage d'Excenevex | 10 | 17 | 15° NNE | aucun | pluie | 3.0 | 6°C |
| Plage du Vengeron | 10 | 17 | 15° NNE | aucun | pluie | 3.0 | 6°C |
| Plage d'Hermance | 10 | 17 | 15° NNE | aucun | pluie | 3.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 270° O | aucun | pluie | 2.1 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 343° NNO | aucun | pluie | 8.9 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 167° SSE | aucun | pluie | 12.7 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 260° O | aucun | pluie | 8.5 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 360° N | aucun | pluie | 1.6 | 10°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 52° NE | aucun | pluie | 1.4 | 8°C |
| Cruas - Nuclear Spot | 3 | 6 | 307° NO | aucun | pluie | 4.8 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 320° NO | aucun | pluie | 3.0 | 8°C |
| Nord du Pont de Chavanay | 2 | 8 | 320° NO | aucun | pluie | 3.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 18° NNE | aucun | pluie | 4.6 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 339° NNO | aucun | pluie | 3.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 7 | 192° SSO | aucun | pluie | 4.8 | 6°C |
| Nord du Pont d'Arciat | 3 | 7 | 192° SSO | aucun | pluie | 4.8 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 125° SE | aucun | pluie | 4.0 | 7°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 8° N | aucun | pluie | 1.3 | 7°C |
| Plage d'Excenevex | 4 | 8 | 8° N | aucun | pluie | 1.3 | 7°C |
| Plage du Vengeron | 4 | 8 | 8° N | aucun | pluie | 1.3 | 7°C |
| Plage d'Hermance | 4 | 8 | 8° N | aucun | pluie | 1.3 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 257° OSO | aucun | pluie | 1.8 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 266° O | aucun | pluie | 1.4 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 313° NO | aucun | couvert | 0.5 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 22° NNE | aucun | couvert | 0.1 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 198° SSO | aucun | pluie | 1.2 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 194° SSO | aucun | soleil | 0.6 | 10°C |
| Cruas - Nuclear Spot | 6 | 12 | 182° S | aucun | pluie | 1.8 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 173° S | aucun | pluie | 3.0 | 10°C |
| Nord du Pont de Chavanay | 9 | 20 | 173° S | aucun | pluie | 3.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 179° S | aucun | pluie | 3.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 173° S | aucun | pluie | 3.6 | 10°C |
| Saint-Romain-des-Iles | 9 | 16 | 174° S | aucun | pluie | 1.2 | 8°C |
| Nord du Pont d'Arciat | 9 | 16 | 174° S | aucun | pluie | 1.2 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 184° S | aucun | pluie | 4.2 | 9°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 221° SO | 13h-16h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 16 | 22 | 229° SO | 13h-16h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 14 | 21 | 221° SO | 13h-16h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 14 | 21 | 221° SO | 13h-16h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 165° SSE | aucun | soleil-couvert | 0.3 | 4°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 213° SSO | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 327° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 12 | 7° N | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 181° S | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 21 | 193° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 4 | 12 | 191° S | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 21 | 169° S | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 7 | 21 | 169° S | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 175° S | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 7 | 22 | 170° S | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 7 | 14 | 194° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 7 | 14 | 194° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 26 | 200° SSO | aucun | soleil-couvert | 0.6 | 9°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 5 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 5 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 5 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 6 | 285° ONO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 26° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 26 | 172° S | aucun | couvert | 0.8 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 25 | 167° SSE | aucun | couvert | 0.9 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 174° S | 11h-19h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 30 | 182° S | 11h-20h | couvert | 0.3 | 13°C |
| Cruas - Nuclear Spot | 13 | 28 | 167° SSE | 12h-20h | pluie | 1.5 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 35 | 184° S | 09h-20h | couvert | 0.4 | 12°C |
| Nord du Pont de Chavanay | 13 | 35 | 184° S | 09h-20h | couvert | 0.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 42 | 174° S | 08h-20h | pluie | 0.5 | 12°C |
| Saint-Cyr-sur-le-Rhône | 16 | 40 | 174° S | 08h-20h | couvert | 0.4 | 12°C |
| Saint-Romain-des-Iles | 14 | 25 | 171° S | 10h-20h | soleil-couvert | 0.1 | 12°C |
| Nord du Pont d'Arciat | 14 | 25 | 171° S | 10h-20h | soleil-couvert | 0.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 26 | 167° SSE | 17h-20h | couvert | 0.0 | 13°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 229° SO | aucun | pluie | 7.8 | 7°C |
| Plage d'Excenevex | 7 | 14 | 253° OSO | aucun | pluie | 6.6 | 8°C |
| Plage du Vengeron | 8 | 14 | 229° SO | aucun | pluie | 7.8 | 7°C |
| Plage d'Hermance | 8 | 14 | 229° SO | aucun | pluie | 7.8 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 95° E | aucun | pluie | 10.8 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 327° NNO | aucun | pluie | 22.2 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 26 | 191° S | aucun | pluie | 16.8 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 15 | 182° S | aucun | pluie | 14.4 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 27 | 338° NNO | aucun | orage | 18.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 8 | 27 | 322° NO | aucun | orage | 18.6 | 6°C |
| Cruas - Nuclear Spot | 5 | 24 | 22° NNE | aucun | pluie | 8.4 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 20 | 351° N | aucun | pluie | 12.6 | 6°C |
| Nord du Pont de Chavanay | 4 | 20 | 351° N | aucun | pluie | 12.6 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 22 | 299° ONO | aucun | pluie | 12.6 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 24 | 320° NO | aucun | pluie | 12.6 | 6°C |
| Saint-Romain-des-Iles | 6 | 11 | 181° S | aucun | pluie | 7.2 | 6°C |
| Nord du Pont d'Arciat | 6 | 11 | 181° S | aucun | pluie | 7.2 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 298° ONO | aucun | pluie | 13.2 | 6°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 228° SO | aucun | pluie | 3.6 | 6°C |
| Plage d'Excenevex | 6 | 10 | 236° SO | aucun | pluie | 4.8 | 7°C |
| Plage du Vengeron | 7 | 11 | 228° SO | aucun | pluie | 3.6 | 6°C |
| Plage d'Hermance | 7 | 11 | 228° SO | aucun | pluie | 3.6 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 132° SE | aucun | pluie | 6.0 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 351° N | aucun | pluie | 3.6 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 24 | 177° S | aucun | pluie | 4.2 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 23 | 170° S | aucun | pluie | 6.6 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 17 | 185° S | aucun | pluie | 1.2 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 21 | 195° SSO | aucun | pluie | 1.8 | 11°C |
| Cruas - Nuclear Spot | 8 | 20 | 178° S | aucun | pluie | 1.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 26 | 195° SSO | aucun | pluie | 3.0 | 10°C |
| Nord du Pont de Chavanay | 8 | 26 | 195° SSO | aucun | pluie | 3.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 29 | 178° S | aucun | soleil | 0.6 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 29 | 183° S | aucun | pluie | 3.0 | 10°C |
| Saint-Romain-des-Iles | 7 | 15 | 274° O | aucun | soleil | 0.6 | 8°C |
| Nord du Pont d'Arciat | 7 | 15 | 274° O | aucun | soleil | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 23 | 172° S | aucun | soleil | 0.6 | 9°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 23° NNE | aucun | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 5 | 9 | 30° NNE | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 7 | 11 | 23° NNE | aucun | couvert | 0.0 | 9°C |
| Plage d'Hermance | 7 | 11 | 23° NNE | aucun | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 326° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 174° S | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 185° S | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 8° N | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 345° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 7 | 16 | 19° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 23° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 3 | 10 | 23° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 18° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 5 | 332° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 5 | 332° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 328° NNO | aucun | soleil-couvert | 0.0 | 7°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 47° NE | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 7 | 12 | 42° NE | aucun | couvert | 0.0 | 7°C |
| Plage du Vengeron | 8 | 12 | 47° NE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 8 | 12 | 47° NE | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 317° NO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 28° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 190° S | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 198° SSO | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 189° S | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 193° SSO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 10 | 219° SO | aucun | couvert | 0.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 170° S | 12h-17h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 11 | 26 | 170° S | 12h-17h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 22 | 156° SSE | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 164° SSE | 12h-20h | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 5 | 11 | 161° SSE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 5 | 11 | 161° SSE | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 118° ESE | aucun | couvert | 0.0 | 12°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 40° NE | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 6 | 11 | 47° NE | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 6 | 10 | 40° NE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 6 | 10 | 40° NE | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 338° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 6 | 13 | 31° NNE | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 148° SSE | aucun | couvert | 0.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 135° SE | aucun | couvert | 0.6 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 173° S | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 164° SSE | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 4 | 13 | 257° OSO | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 16 | 151° SSE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 16 | 151° SSE | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 153° SSE | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 18 | 151° SSE | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 5 | 10 | 178° S | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 5 | 10 | 178° S | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 120° ESE | aucun | couvert | 0.0 | 13°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 37° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 6 | 9 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 6 | 8 | 37° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 6 | 8 | 37° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 320° NO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 36° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 158° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 20 | 12° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 9° N | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 9 | 20 | 17° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 7° N | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 7 | 15 | 7° N | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 352° N | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 358° N | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 12 | 352° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 12 | 352° N | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 356° N | aucun | soleil-couvert | 0.0 | 11°C |
