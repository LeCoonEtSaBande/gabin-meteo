# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 29/10/2026 12:37 (Europe/Paris)
- Fichiers générés le : 2026-10-29T12:40:04+01:00
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

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 24 | 37° NE | 08h-20h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 16 | 24 | 24° NNE | 08h-20h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 15 | 20 | 40° NE | 08h-20h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 15 | 20 | 39° NE | 08h-20h | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 12 | 318° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 3° N | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 10° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 350° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 4° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 354° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 12 | 24 | 23° NNE | 08h-12h | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 14 | 36° NE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 8 | 15 | 44° NE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 18° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 29° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 6 | 12 | 46° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 7 | 12 | 53° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 342° NNO | aucun | soleil-couvert | 0.0 | 11°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 19 | 31° NNE | 08h-20h | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 15 | 20 | 26° NNE | 08h-20h | couvert | 0.0 | 11°C |
| Plage du Vengeron | 13 | 18 | 40° NE | 08h-18h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 14 | 18 | 42° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 13 | 320° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 11 | 15 | 359° N | 09h-13h | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 6° N | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 341° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 11 | 17° NNE | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 353° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 15 | 25° NNE | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 11° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 9 | 28° NNE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 352° N | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 10° N | aucun | soleil | 0.0 | 13°C |
| Saint-Romain-des-Iles | 4 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 5 | 8 | 40° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 6 | 2° N | aucun | soleil-couvert | 0.0 | 12°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 24 | 39° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 20 | 27 | 37° NE | 17h-20h | soleil | 0.0 | 11°C |
| Plage du Vengeron | 14 | 19 | 40° NE | 08h-13h | couvert | 0.0 | 11°C |
| Plage d'Hermance | 15 | 22 | 44° NE | 08h-14h | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 302° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 8 | 19 | 50° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 21° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 355° N | 14h-20h | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 15 | 352° N | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 10 | 20 | 5° N | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 14 | 23° NNE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 8 | 14 | 23° NNE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 14° NNE | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 14° NNE | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 7 | 10 | 350° N | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 7 | 10 | 350° N | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 358° N | aucun | soleil | 0.0 | 13°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 25 | 35 | 25° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 27 | 38 | 25° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Plage du Vengeron | 26 | 36 | 29° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Plage d'Hermance | 21 | 32 | 30° NNE | 08h-20h | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 15 | 24 | 344° NNO | 13h-17h | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 10 | 27 | 35° NE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 18° NNE | 13h-17h | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 24 | 357° N | 11h-18h | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 23 | 36 | 19° NNE | 08h-20h | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 18 | 29 | 359° N | 08h-20h | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 22 | 44 | 14° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 27 | 351° N | 08h-20h | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 15 | 27 | 351° N | 08h-20h | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 25 | 354° N | 13h-20h | soleil | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 13 | 25 | 354° N | 13h-20h | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 18 | 29 | 10° N | 08h-20h | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 18 | 29 | 10° N | 08h-20h | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 30 | 355° N | 13h-20h | soleil | 0.0 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 30 | 35° NE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 19 | 26 | 29° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 18 | 24 | 28° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 16 | 24 | 34° NE | 08h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 305° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 36° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 17° NNE | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 351° N | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 9° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 7° N | 09h-17h | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 14 | 31 | 22° NNE | 08h-20h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 350° N | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 9 | 20 | 350° N | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 358° N | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 342° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 11 | 20 | 18° NNE | 10h-17h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 11 | 20 | 18° NNE | 10h-17h | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 344° NNO | aucun | soleil-couvert | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 27 | 37° NE | 12h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 17 | 27 | 37° NE | 12h-20h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 17 | 27 | 37° NE | 12h-20h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 17 | 27 | 37° NE | 12h-20h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 15 | 351° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 27° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 23 | 330° NNO | aucun | pluie | 2.5 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 22 | 358° N | aucun | pluie | 1.4 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 7° N | 10h-18h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 6° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 13 | 29 | 19° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 8 | 17 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 343° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 350° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 7 | 12 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 7 | 12 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 340° NNO | aucun | soleil-couvert | 0.0 | 10°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 19 | 35° NE | 08h-14h | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 12 | 19 | 35° NE | 08h-14h | couvert | 0.0 | 6°C |
| Plage du Vengeron | 12 | 19 | 35° NE | 08h-14h | couvert | 0.0 | 6°C |
| Plage d'Hermance | 12 | 19 | 35° NE | 08h-14h | couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 344° NNO | aucun | couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 40° NE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 342° NNO | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 19° NNE | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 10° N | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 349° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 6 | 16 | 36° NE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 324° NO | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 10 | 324° NO | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 39° NE | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 32° NNE | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 8 | 86° E | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 8 | 86° E | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 358° N | aucun | soleil | 0.0 | 9°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 10 | 16 | 35° NE | aucun | couvert | 0.6 | 8°C |
| Plage du Vengeron | 10 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 10 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 347° NNO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 33° NNE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 324° NO | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 6° N | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 8 | 351° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 4 | 10 | 15° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 351° N | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 2 | 9 | 351° N | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 22° NNE | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 9° N | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 7 | 153° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 7 | 153° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 342° NNO | aucun | soleil | 0.0 | 9°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 35° NE | aucun | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 7 | 11 | 26° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 7 | 11 | 35° NE | aucun | soleil | 0.0 | 9°C |
| Plage d'Hermance | 7 | 11 | 35° NE | aucun | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 326° NO | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 32° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 24° NNE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 39° NE | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 20° NNE | aucun | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 319° NO | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 3 | 7 | 24° NNE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 341° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 7 | 341° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 4° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 328° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 8 | 129° SE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 8 | 129° SE | aucun | couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 353° N | aucun | soleil | 0.0 | 9°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 42° NE | aucun | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 7 | 12 | 42° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 6 | 11 | 42° NE | aucun | soleil | 0.0 | 9°C |
| Plage d'Hermance | 6 | 11 | 42° NE | aucun | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 325° NO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 35° NE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 135° SE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 47° NE | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 6° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 9 | 324° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 4 | 10 | 350° N | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 342° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 3 | 9 | 342° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 299° ONO | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 328° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 7 | 140° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 7 | 140° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 342° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 6 | 10 | 21° NNE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 6 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 6 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 304° NO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 217° SO | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 5° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 349° N | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 3° N | aucun | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 350° N | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 9 | 23 | 24° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 29° NNE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 6 | 15 | 29° NNE | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 18° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 17° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 10 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 4 | 10 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 351° N | aucun | soleil-couvert | 0.0 | 7°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 13 | 49° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 8 | 13 | 36° NE | aucun | couvert | 0.0 | 6°C |
| Plage du Vengeron | 6 | 13 | 49° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 6 | 13 | 49° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 318° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 26° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 198° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 208° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 35° NE | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 5 | 14 | 339° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 7 | 20 | 48° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 36° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 4 | 12 | 36° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 36° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 29° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 8 | 103° ESE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 4 | 8 | 103° ESE | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 10 | 5° N | aucun | soleil-couvert | 0.0 | 6°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 24° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 4 | 7 | 32° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 4 | 7 | 24° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 4 | 7 | 24° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 288° ONO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 30° NNE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 6° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 21° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 1° N | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 331° NNO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 3 | 8 | 336° NNO | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 343° NNO | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 8 | 343° NNO | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 55° NE | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 330° NNO | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 7 | 98° E | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 7 | 98° E | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 344° NNO | aucun | couvert | 0.0 | 9°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 64° ENE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 6 | 9 | 35° NE | aucun | soleil | 0.0 | 10°C |
| Plage du Vengeron | 6 | 10 | 64° ENE | aucun | soleil | 0.0 | 11°C |
| Plage d'Hermance | 6 | 10 | 64° ENE | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 324° NO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 1 | 8 | 51° NE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 75° ENE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 180° S | aucun | soleil | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 10° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 344° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 5 | 14 | 52° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 36° NE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 4 | 11 | 36° NE | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 27° NNE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 3 | 8 | 16° NNE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 3 | 8 | 16° NNE | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 11° N | aucun | soleil-couvert | 0.0 | 9°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 30° NNE | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 4 | 9 | 47° NE | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 9 | 30° NNE | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 4 | 9 | 30° NNE | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 6 | 72° ENE | aucun | couvert | 0.4 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 27° NNE | aucun | pluie | 0.7 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 187° S | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 208° SSO | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 202° SSO | aucun | couvert | 0.6 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 205° SSO | aucun | couvert | 0.7 | 13°C |
| Cruas - Nuclear Spot | 3 | 9 | 227° SO | aucun | pluie | 2.5 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 163° SSE | aucun | couvert | 0.6 | 13°C |
| Nord du Pont de Chavanay | 7 | 18 | 163° SSE | aucun | couvert | 0.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 179° S | aucun | couvert | 0.7 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 159° SSE | aucun | couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 4 | 10 | 177° S | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 10 | 177° S | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 123° ESE | aucun | couvert | 0.0 | 13°C |
