# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 25/11/2026 16:49 (Europe/Paris)
- Fichiers générés le : 2026-11-25T16:50:40+01:00
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

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 46° NE | aucun | pluie | 2.6 | 7°C |
| Plage d'Excenevex | 14 | 19 | 33° NNE | aucun | pluie | 3.4 | 7°C |
| Plage du Vengeron | 9 | 12 | 33° NNE | aucun | pluie | 2.1 | 7°C |
| Plage d'Hermance | 8 | 11 | 60° ENE | aucun | pluie | 2.6 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 180° S | aucun | pluie | 8.4 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 7 | 20° NNE | aucun | pluie | 7.7 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 197° SSO | aucun | pluie | 14.5 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 192° SSO | aucun | orage | 17.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 345° NNO | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 317° NO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 7 | 14 | 23° NNE | aucun | couvert | 0.1 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 347° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 9 | 348° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 159° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 216° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 13 | 206° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 8 | 13 | 207° SSO | aucun | soleil-couvert | 0.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 131° SE | aucun | couvert | 0.0 | 10°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 44° NE | 08h-20h | couvert | 0.5 | 7°C |
| Plage d'Excenevex | 13 | 19 | 32° NNE | 08h-20h | couvert | 0.4 | 6°C |
| Plage du Vengeron | 13 | 17 | 46° NE | 14h-17h | couvert | 0.0 | 7°C |
| Plage d'Hermance | 13 | 18 | 43° NE | 09h-20h | couvert | 0.2 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 15 | 304° NO | 13h-18h | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 10 | 14 | 16° NNE | aucun | pluie | 2.2 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 28 | 353° N | 08h-20h | pluie | 1.9 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 15 | 25 | 359° N | 08h-20h | pluie | 1.7 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 24 | 20° NNE | 08h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 1° N | aucun | couvert | 0.1 | 8°C |
| Cruas - Nuclear Spot | 13 | 26 | 20° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 10° N | aucun | couvert | 0.4 | 8°C |
| Nord du Pont de Chavanay | 8 | 16 | 351° N | aucun | couvert | 0.4 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 331° NNO | aucun | pluie | 1.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 22° NNE | aucun | pluie | 1.1 | 8°C |
| Saint-Romain-des-Iles | 7 | 12 | 39° NE | aucun | couvert | 0.6 | 7°C |
| Nord du Pont d'Arciat | 8 | 12 | 37° NE | aucun | couvert | 0.3 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 336° NNO | aucun | couvert | 0.8 | 7°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 40° NE | 17h-20h | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 16 | 22 | 21° NNE | 17h-20h | couvert | 0.0 | 6°C |
| Plage du Vengeron | 11 | 15 | 46° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 11 | 16 | 46° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 301° ONO | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 333° NNO | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 32° NNE | aucun | couvert | 0.0 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 337° NNO | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 26 | 12° NNE | 08h-20h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 13 | 21 | 14° NNE | 13h-19h | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 17 | 32 | 14° NNE | 08h-20h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 19 | 17° NNE | 11h-14h | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 10 | 17 | 15° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 14° NNE | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 7 | 14 | 14° NNE | aucun | couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 6 | 9 | 44° NE | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 6 | 9 | 44° NE | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 11 | 3° N | aucun | couvert | 0.0 | 6°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 42° NE | aucun | soleil-couvert | 0.0 | 4°C |
| Plage d'Excenevex | 17 | 23 | 27° NNE | 08h-14h | couvert | 0.0 | 4°C |
| Plage du Vengeron | 13 | 18 | 45° NE | 08h-11h | couvert | 0.0 | 4°C |
| Plage d'Hermance | 13 | 19 | 46° NE | 08h-11h | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 322° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 2° N | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 180° S | aucun | soleil | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 194° SSO | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 354° N | 08h-13h | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 9 | 15 | 343° NNO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 14 | 28 | 6° N | 08h-12h | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 9° N | aucun | soleil | 0.0 | 6°C |
| Nord du Pont de Chavanay | 7 | 12 | 9° N | aucun | soleil | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 9 | 7° N | aucun | soleil | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 5 | 9 | 7° N | aucun | soleil | 0.0 | 5°C |
| Saint-Romain-des-Iles | 4 | 6 | 45° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Nord du Pont d'Arciat | 4 | 6 | 45° NE | aucun | soleil-couvert | 0.0 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 344° NNO | aucun | soleil | 0.0 | 4°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 3 | 55° NE | aucun | couvert | 0.0 | 4°C |
| Plage d'Excenevex | 2 | 4 | 166° SSE | aucun | couvert | 0.0 | 4°C |
| Plage du Vengeron | 2 | 3 | 174° S | aucun | couvert | 0.0 | 4°C |
| Plage d'Hermance | 2 | 4 | 160° SSE | aucun | couvert | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 2 | 326° NO | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 2 | 360° N | aucun | couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 9 | 169° S | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 6 | 202° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 173° S | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 165° SSE | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 5 | 7 | 15° NNE | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 4 | 339° NNO | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 1 | 4 | 339° NNO | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 1 | 76° ENE | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 2 | 3 | 325° NO | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 1 | 2 | 180° S | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 1 | 2 | 180° S | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 325° NO | aucun | couvert | 0.0 | 6°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 29° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 4 | 7 | 29° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 4 | 7 | 29° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 4 | 7 | 29° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 299° ONO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 280° O | aucun | couvert | 0.0 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 339° NNO | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 4 | 185° S | aucun | couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 21° NNE | aucun | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 342° NNO | aucun | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 4 | 11 | 30° NNE | aucun | couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 48° NE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 3 | 8 | 48° NE | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 55° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 36° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 6 | 61° ENE | aucun | soleil-couvert | 0.3 | 7°C |
| Nord du Pont d'Arciat | 2 | 6 | 61° ENE | aucun | soleil-couvert | 0.3 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 348° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 6° N | aucun | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 4 | 6 | 6° N | aucun | soleil | 0.0 | 6°C |
| Plage du Vengeron | 4 | 6 | 6° N | aucun | soleil | 0.0 | 6°C |
| Plage d'Hermance | 4 | 6 | 6° N | aucun | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 309° NO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 283° ONO | aucun | couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 353° N | aucun | soleil | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 2 | 193° SSO | aucun | soleil | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 178° S | aucun | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 181° S | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 4 | 11 | 196° SSO | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 155° SSE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 9 | 155° SSE | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 171° S | aucun | soleil | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 162° SSE | aucun | soleil | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 7 | 139° SE | aucun | soleil | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 7 | 139° SE | aucun | soleil | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 121° ESE | aucun | soleil | 0.0 | 7°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 356° N | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 3 | 5 | 356° N | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 3 | 5 | 356° N | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 3 | 5 | 356° N | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 301° ONO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 315° NO | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 335° NNO | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 31° NNE | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 178° S | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 165° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 2 | 8 | 197° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 158° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 4 | 11 | 158° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 166° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 163° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 6 | 147° SSE | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 6 | 147° SSE | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 171° S | aucun | soleil | 0.0 | 9°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 14° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 2 | 6 | 43° NE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 3 | 5 | 14° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 3 | 5 | 14° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 288° ONO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 41° NE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 180° S | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 172° S | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 14° NNE | aucun | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 333° NNO | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 4 | 11 | 356° N | aucun | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 32° NNE | aucun | soleil | 0.0 | 7°C |
| Nord du Pont de Chavanay | 3 | 9 | 32° NNE | aucun | soleil | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 29° NNE | aucun | soleil | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 24° NNE | aucun | soleil | 0.0 | 6°C |
| Saint-Romain-des-Iles | 2 | 5 | 83° E | aucun | soleil | 0.0 | 5°C |
| Nord du Pont d'Arciat | 2 | 5 | 83° E | aucun | soleil | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 335° NNO | aucun | soleil-couvert | 0.0 | 5°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 27° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 4 | 8 | 43° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 4 | 8 | 27° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 4 | 8 | 27° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 283° ONO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 236° SO | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 174° S | aucun | soleil | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 167° SSE | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 338° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 6 | 14 | 20° NNE | aucun | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 28° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 4 | 10 | 28° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 32° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 20° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 2 | 7 | 62° ENE | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 2 | 7 | 62° ENE | aucun | soleil-couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 346° NNO | aucun | couvert | 0.0 | 4°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 101° E | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 2 | 4 | 119° ESE | aucun | soleil | 0.0 | 7°C |
| Plage du Vengeron | 2 | 5 | 101° E | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 2 | 5 | 101° E | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 273° O | aucun | soleil | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 270° O | aucun | soleil-couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 207° SSO | aucun | soleil | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 180° S | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 8° N | aucun | soleil | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 342° NNO | aucun | soleil | 0.0 | 4°C |
| Cruas - Nuclear Spot | 8 | 17 | 27° NNE | aucun | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 27° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Nord du Pont de Chavanay | 4 | 11 | 27° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 33° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 19° NNE | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 2 | 6 | 79° E | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 2 | 6 | 79° E | aucun | soleil-couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 4° N | aucun | soleil-couvert | 0.0 | 4°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 11 | 218° SO | aucun | pluie | 0.6 | 11°C |
| Plage d'Excenevex | 9 | 13 | 225° SO | aucun | pluie | 0.5 | 12°C |
| Plage du Vengeron | 9 | 11 | 218° SO | aucun | pluie | 0.6 | 11°C |
| Plage d'Hermance | 9 | 11 | 218° SO | aucun | pluie | 0.6 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 201° SSO | aucun | pluie | 0.6 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 310° NO | aucun | pluie | 0.5 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 152° SSE | aucun | soleil-couvert | 0.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 156° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 1 | 7 | 351° N | aucun | couvert | 0.1 | 7°C |
| La Roche-de-Glun - Base Nautique | 1 | 5 | 180° S | aucun | couvert | 0.1 | 7°C |
| Cruas - Nuclear Spot | 2 | 9 | 360° N | aucun | soleil-couvert | 0.1 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 196° SSO | aucun | couvert | 0.3 | 7°C |
| Nord du Pont de Chavanay | 2 | 6 | 196° SSO | aucun | couvert | 0.3 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 176° S | aucun | pluie | 0.5 | 6°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 174° S | aucun | couvert | 0.4 | 7°C |
| Saint-Romain-des-Iles | 4 | 8 | 184° S | aucun | pluie | 1.1 | 7°C |
| Nord du Pont d'Arciat | 4 | 8 | 184° S | aucun | pluie | 1.1 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 172° S | aucun | pluie | 0.7 | 5°C |

### lun. 07/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 102° ESE | aucun | couvert | 0.6 | 8°C |
| Plage d'Excenevex | 5 | 9 | 72° ENE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 4 | 7 | 102° ESE | aucun | couvert | 0.6 | 8°C |
| Plage d'Hermance | 4 | 7 | 102° ESE | aucun | couvert | 0.6 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 312° NO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 9° N | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 23 | 344° NNO | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 24 | 339° NNO | aucun | couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 33 | 10° N | 08h-20h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 14 | 30 | 358° N | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 15 | 33 | 14° NNE | 08h-20h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 352° N | 10h-15h | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 11 | 24 | 352° N | 10h-15h | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 346° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 348° NNO | 11h-14h | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 7 | 14 | 329° NNO | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 7 | 14 | 329° NNO | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 338° NNO | aucun | couvert | 0.0 | 7°C |

### mar. 08/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 212° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 7 | 12 | 217° SO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 6 | 10 | 212° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 6 | 10 | 212° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 338° NNO | aucun | soleil | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 50° NE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 22 | 353° N | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 347° NNO | aucun | couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 3° N | 08h-20h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 12 | 28 | 358° N | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 15 | 34 | 8° N | 08h-20h | couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 360° N | aucun | soleil-couvert | 0.6 | 8°C |
| Nord du Pont de Chavanay | 10 | 22 | 360° N | aucun | soleil-couvert | 0.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 351° N | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 354° N | aucun | soleil-couvert | 0.6 | 8°C |
| Saint-Romain-des-Iles | 9 | 16 | 351° N | aucun | couvert | 0.6 | 8°C |
| Nord du Pont d'Arciat | 9 | 16 | 351° N | aucun | couvert | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 355° N | aucun | couvert | 0.6 | 9°C |

### mer. 09/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 214° SO | aucun | pluie | 1.5 | 7°C |
| Plage d'Excenevex | 8 | 13 | 221° SO | aucun | pluie | 1.5 | 7°C |
| Plage du Vengeron | 8 | 12 | 214° SO | aucun | pluie | 1.5 | 7°C |
| Plage d'Hermance | 8 | 12 | 214° SO | aucun | pluie | 1.5 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 211° SSO | aucun | couvert | 0.8 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 207° SSO | aucun | couvert | 0.7 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 6° N | aucun | couvert | 0.9 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 348° NNO | aucun | couvert | 0.3 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 25 | 11° N | aucun | couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 2° N | aucun | couvert | 0.1 | 7°C |
| Cruas - Nuclear Spot | 12 | 32 | 15° NNE | 08h-15h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 11 | 39° NE | aucun | couvert | 0.7 | 7°C |
| Nord du Pont de Chavanay | 5 | 11 | 39° NE | aucun | couvert | 0.7 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 62° ENE | aucun | pluie | 1.3 | 6°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 36° NE | aucun | couvert | 0.7 | 6°C |
| Saint-Romain-des-Iles | 4 | 9 | 270° O | aucun | couvert | 0.7 | 8°C |
| Nord du Pont d'Arciat | 4 | 9 | 270° O | aucun | couvert | 0.7 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 285° ONO | aucun | couvert | 0.7 | 5°C |
