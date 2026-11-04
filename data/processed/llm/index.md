# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 04/11/2026 23:42 (Europe/Paris)
- Fichiers générés le : 2026-11-04T23:46:07+01:00
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

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 45° NE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 15 | 22 | 29° NNE | 08h-20h | couvert | 0.1 | 8°C |
| Plage du Vengeron | 14 | 19 | 44° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 15 | 21 | 46° NE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 12 | 322° NO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 13 | 15 | 345° NNO | 13h-17h | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 196° SSO | aucun | couvert | 0.4 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 333° NNO | aucun | couvert | 0.1 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 14° NNE | aucun | couvert | 0.3 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 350° N | aucun | couvert | 0.4 | 9°C |
| Cruas - Nuclear Spot | 11 | 22 | 22° NNE | aucun | pluie | 0.9 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 28° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 8 | 15 | 34° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 337° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 26° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 5 | 196° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 6 | 12 | 54° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 30° NNE | aucun | soleil-couvert | 0.0 | 6°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 63° ENE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 8 | 14 | 27° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 7 | 9 | 15° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 6 | 9 | 70° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 7 | 8 | 345° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 18 | 216° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 10 | 348° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 7° N | aucun | orage | 11.9 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 333° NNO | aucun | orage | 12.5 | 12°C |
| Cruas - Nuclear Spot | 8 | 15 | 37° NE | aucun | orage | 18.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 13° NNE | aucun | orage | 10.8 | 11°C |
| Nord du Pont de Chavanay | 4 | 5 | 231° SO | aucun | orage | 11.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 285° ONO | aucun | orage | 10.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 6° N | aucun | orage | 10.3 | 12°C |
| Saint-Romain-des-Iles | 6 | 8 | 128° SE | aucun | pluie | 2.9 | 11°C |
| Nord du Pont d'Arciat | 6 | 10 | 224° SO | aucun | pluie | 1.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 7 | 328° NNO | aucun | pluie | 5.1 | 9°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 252° OSO | aucun | pluie | 1.5 | 10°C |
| Plage d'Excenevex | 2 | 4 | 246° OSO | aucun | pluie | 1.7 | 10°C |
| Plage du Vengeron | 3 | 4 | 270° O | aucun | pluie | 1.8 | 11°C |
| Plage d'Hermance | 4 | 6 | 251° OSO | aucun | pluie | 1.6 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 119° ESE | aucun | pluie | 2.1 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 48° NE | aucun | couvert | 0.8 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 35° NE | aucun | pluie | 1.5 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 351° N | aucun | pluie | 2.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 16 | 8° N | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 332° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 9 | 18 | 15° NNE | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 10° N | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 10 | 10° N | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 23° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 57° ENE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 5 | 8 | 356° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 6 | 8 | 358° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 7 | 24° NNE | aucun | soleil-couvert | 0.0 | 10°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 66° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 9 | 12 | 25° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 5 | 6 | 22° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 5 | 7 | 27° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 297° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 242° OSO | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 17° NNE | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 358° N | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 18 | 351° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 14 | 332° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 8 | 16 | 11° N | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 62° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 10 | 62° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 38° NE | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 38° NE | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 8 | 80° E | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 8 | 80° E | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 317° NO | aucun | couvert | 0.0 | 8°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 74° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 5 | 53° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 4 | 6 | 43° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 4 | 6 | 53° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 325° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 43° NE | aucun | couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 199° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 166° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 18 | 200° SSO | 12h-20h | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 199° SSO | 12h-20h | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 3 | 3 | 72° ENE | aucun | couvert | 0.2 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 24 | 176° S | 11h-20h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 13 | 24 | 176° S | 11h-20h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 196° SSO | 11h-20h | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 14 | 29 | 196° SSO | 11h-20h | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 13 | 20 | 179° S | 15h-20h | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 13 | 20 | 179° S | 15h-20h | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 186° S | 13h-17h | couvert | 0.0 | 13°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 3° N | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 6 | 3° N | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 4 | 6 | 3° N | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 4 | 6 | 3° N | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 327° NNO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 336° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 183° S | 08h-19h | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 153° SSE | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 210° SSO | aucun | couvert | 0.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 206° SSO | 13h-17h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 6 | 15 | 211° SSO | aucun | pluie | 2.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 181° S | 08h-20h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 12 | 27 | 181° S | 08h-20h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 27 | 179° S | 10h-20h | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 30 | 176° S | 08h-20h | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 11 | 20 | 165° SSE | 11h-16h | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 11 | 20 | 165° SSE | 11h-16h | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 189° S | aucun | couvert | 0.0 | 14°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 15° NNE | aucun | couvert | 0.6 | 14°C |
| Plage d'Excenevex | 5 | 8 | 15° NNE | aucun | couvert | 0.6 | 14°C |
| Plage du Vengeron | 5 | 8 | 15° NNE | aucun | couvert | 0.6 | 14°C |
| Plage d'Hermance | 5 | 8 | 15° NNE | aucun | couvert | 0.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 93° E | aucun | pluie | 1.5 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 10 | 15° NNE | aucun | pluie | 2.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 19 | 159° SSE | aucun | couvert | 0.6 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 16 | 176° S | aucun | pluie | 1.2 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 207° SSO | aucun | pluie | 2.5 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 210° SSO | aucun | pluie | 1.2 | 15°C |
| Cruas - Nuclear Spot | 5 | 12 | 235° SO | aucun | pluie | 12.8 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 29 | 186° S | 13h-20h | pluie | 3.7 | 14°C |
| Nord du Pont de Chavanay | 11 | 29 | 186° S | 13h-20h | pluie | 3.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 177° S | 12h-20h | pluie | 2.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 172° S | 10h-20h | pluie | 2.2 | 14°C |
| Saint-Romain-des-Iles | 9 | 16 | 169° S | aucun | pluie | 12.6 | 13°C |
| Nord du Pont d'Arciat | 9 | 16 | 169° S | aucun | pluie | 12.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 165° SSE | aucun | pluie | 6.3 | 13°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 350° N | aucun | couvert | 0.6 | 14°C |
| Plage d'Excenevex | 5 | 8 | 350° N | aucun | couvert | 0.6 | 14°C |
| Plage du Vengeron | 5 | 8 | 350° N | aucun | couvert | 0.6 | 14°C |
| Plage d'Hermance | 5 | 8 | 350° N | aucun | couvert | 0.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 90° E | aucun | couvert | 0.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 14 | 23° NNE | aucun | pluie | 4.6 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 15 | 149° SSE | aucun | pluie | 2.2 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 180° S | aucun | pluie | 2.4 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 182° S | aucun | pluie | 9.8 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 188° S | 16h-20h | pluie | 5.3 | 16°C |
| Cruas - Nuclear Spot | 10 | 26 | 180° S | aucun | pluie | 22.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 25 | 189° S | aucun | pluie | 3.6 | 16°C |
| Nord du Pont de Chavanay | 10 | 25 | 189° S | aucun | pluie | 3.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 177° S | 08h-17h | pluie | 2.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 180° S | 08h-20h | pluie | 3.5 | 16°C |
| Saint-Romain-des-Iles | 10 | 18 | 165° SSE | aucun | pluie | 12.8 | 17°C |
| Nord du Pont d'Arciat | 10 | 18 | 165° SSE | aucun | pluie | 12.8 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 171° S | aucun | pluie | 6.7 | 17°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 7 | 297° ONO | aucun | pluie | 1.4 | 15°C |
| Plage d'Excenevex | 1 | 6 | 24° NNE | aucun | soleil-couvert | 0.2 | 15°C |
| Plage du Vengeron | 2 | 7 | 297° ONO | aucun | pluie | 1.4 | 15°C |
| Plage d'Hermance | 2 | 7 | 297° ONO | aucun | pluie | 1.4 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 80° E | aucun | pluie | 3.1 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 13° NNE | aucun | couvert | 0.6 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 173° S | aucun | pluie | 4.9 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 168° SSE | aucun | pluie | 4.3 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 15 | 235° SO | aucun | pluie | 12.7 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 229° SO | aucun | pluie | 14.5 | 16°C |
| Cruas - Nuclear Spot | 2 | 21 | 231° SO | aucun | orage | 34.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 186° S | aucun | pluie | 3.8 | 17°C |
| Nord du Pont de Chavanay | 8 | 20 | 186° S | aucun | pluie | 3.8 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 174° S | aucun | pluie | 1.8 | 18°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 181° S | aucun | pluie | 2.7 | 17°C |
| Saint-Romain-des-Iles | 6 | 12 | 156° SSE | aucun | pluie | 1.3 | 16°C |
| Nord du Pont d'Arciat | 6 | 12 | 156° SSE | aucun | pluie | 1.3 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 18 | 116° ESE | aucun | orage | 33.4 | 16°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 250° OSO | aucun | pluie | 4.1 | 14°C |
| Plage d'Excenevex | 7 | 10 | 256° OSO | aucun | pluie | 2.2 | 15°C |
| Plage du Vengeron | 8 | 12 | 250° OSO | aucun | pluie | 4.1 | 14°C |
| Plage d'Hermance | 8 | 12 | 250° OSO | aucun | pluie | 4.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 16 | 108° ESE | aucun | pluie | 1.6 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 236° SO | aucun | pluie | 0.8 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 186° S | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 192° SSO | aucun | soleil | 0.6 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 186° S | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 188° S | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 6 | 15 | 194° SSO | aucun | soleil-couvert | 0.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 156° SSE | aucun | pluie | 1.3 | 16°C |
| Nord du Pont de Chavanay | 7 | 17 | 156° SSE | aucun | pluie | 1.3 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 21 | 177° S | aucun | soleil | 0.1 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 20 | 160° SSE | aucun | soleil-couvert | 0.6 | 16°C |
| Saint-Romain-des-Iles | 5 | 11 | 174° S | aucun | soleil | 0.8 | 14°C |
| Nord du Pont d'Arciat | 5 | 11 | 174° S | aucun | soleil | 0.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 195° SSO | aucun | soleil | 0.1 | 16°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 208° SSO | aucun | couvert | 0.1 | 13°C |
| Plage d'Excenevex | 12 | 18 | 229° SO | 08h-13h | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 10 | 14 | 208° SSO | aucun | couvert | 0.1 | 13°C |
| Plage d'Hermance | 10 | 14 | 208° SSO | aucun | couvert | 0.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 16 | 134° SE | aucun | soleil-couvert | 0.6 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 207° SSO | aucun | soleil | 0.6 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 358° N | aucun | pluie | 1.2 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 13° NNE | aucun | pluie | 1.2 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 359° N | aucun | soleil | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 351° N | aucun | soleil-couvert | 0.6 | 15°C |
| Cruas - Nuclear Spot | 6 | 13 | 350° N | aucun | soleil-couvert | 0.6 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 12 | 328° NNO | aucun | pluie | 1.8 | 14°C |
| Nord du Pont de Chavanay | 3 | 12 | 328° NNO | aucun | pluie | 1.8 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 14 | 171° S | aucun | pluie | 6.7 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 11 | 308° NO | aucun | pluie | 2.4 | 14°C |
| Saint-Romain-des-Iles | 6 | 11 | 281° O | aucun | soleil-couvert | 0.6 | 14°C |
| Nord du Pont d'Arciat | 6 | 11 | 281° O | aucun | soleil-couvert | 0.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 335° NNO | aucun | soleil-couvert | 0.6 | 14°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 6 | 54° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 6 | 12° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 2 | 6 | 54° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 2 | 6 | 54° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 272° O | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 209° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 2° N | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 350° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 8° N | aucun | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 353° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 10 | 22 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 4 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 41° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 38° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 2 | 6 | 310° NO | aucun | soleil-couvert | 0.6 | 11°C |
| Nord du Pont d'Arciat | 2 | 6 | 310° NO | aucun | soleil-couvert | 0.6 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 12°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 227° SO | aucun | couvert | 0.2 | 11°C |
| Plage d'Excenevex | 11 | 15 | 230° SO | aucun | couvert | 0.2 | 11°C |
| Plage du Vengeron | 9 | 13 | 227° SO | aucun | couvert | 0.2 | 11°C |
| Plage d'Hermance | 9 | 13 | 227° SO | aucun | couvert | 0.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 152° SSE | aucun | couvert | 0.4 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 342° NNO | aucun | couvert | 0.4 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 190° S | aucun | soleil-couvert | 0.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 185° S | aucun | soleil-couvert | 0.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 176° S | aucun | couvert | 0.1 | 12°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 186° S | aucun | couvert | 0.4 | 12°C |
| Cruas - Nuclear Spot | 3 | 9 | 200° SSO | aucun | couvert | 0.9 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 168° SSE | aucun | couvert | 0.7 | 11°C |
| Nord du Pont de Chavanay | 6 | 14 | 168° SSE | aucun | couvert | 0.7 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 165° SSE | aucun | pluie | 1.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 165° SSE | aucun | couvert | 0.7 | 11°C |
| Saint-Romain-des-Iles | 8 | 13 | 176° S | aucun | pluie | 1.3 | 11°C |
| Nord du Pont d'Arciat | 8 | 13 | 176° S | aucun | pluie | 1.3 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 192° SSO | aucun | couvert | 0.9 | 10°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 217° SO | 08h-15h | pluie | 2.6 | 11°C |
| Plage d'Excenevex | 14 | 19 | 224° SO | 08h-15h | pluie | 2.6 | 11°C |
| Plage du Vengeron | 11 | 15 | 217° SO | 08h-15h | pluie | 2.6 | 11°C |
| Plage d'Hermance | 11 | 15 | 217° SO | 08h-15h | pluie | 2.6 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 22 | 141° SE | aucun | pluie | 7.8 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 245° OSO | aucun | pluie | 8.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 168° SSE | aucun | pluie | 9.5 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 140° SE | aucun | pluie | 9.4 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 22 | 179° S | aucun | pluie | 3.7 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 26 | 198° SSO | aucun | pluie | 3.6 | 10°C |
| Cruas - Nuclear Spot | 4 | 10 | 202° SSO | aucun | pluie | 5.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 157° SSE | 17h-20h | pluie | 3.4 | 10°C |
| Nord du Pont de Chavanay | 11 | 25 | 157° SSE | 17h-20h | pluie | 3.4 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 32 | 172° S | 15h-20h | pluie | 5.7 | 9°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 166° SSE | 17h-20h | pluie | 3.1 | 9°C |
| Saint-Romain-des-Iles | 8 | 19 | 169° S | aucun | pluie | 9.5 | 9°C |
| Nord du Pont d'Arciat | 8 | 19 | 169° S | aucun | pluie | 9.5 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 187° S | 16h-20h | pluie | 4.9 | 10°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 18 | 142° SE | aucun | pluie | 4.8 | 10°C |
| Plage d'Excenevex | 5 | 10 | 51° NE | aucun | pluie | 1.2 | 10°C |
| Plage du Vengeron | 5 | 18 | 142° SE | aucun | pluie | 4.8 | 10°C |
| Plage d'Hermance | 5 | 18 | 142° SE | aucun | pluie | 4.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 18 | 312° NO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 8° N | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 29 | 345° NNO | aucun | pluie | 2.4 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 32 | 340° NNO | aucun | pluie | 2.4 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 30 | 0° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 1° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 15 | 34 | 9° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 341° NNO | 08h-14h | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 12 | 28 | 341° NNO | 08h-14h | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 329° NNO | 08h-12h | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 335° NNO | 08h-14h | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 13 | 28 | 318° NO | 08h-13h | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 13 | 28 | 318° NO | 08h-13h | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 26 | 329° NNO | aucun | soleil-couvert | 0.0 | 11°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 172° S | aucun | couvert | 0.0 |  |
| Plage d'Excenevex | 3 | 9 | 29° NNE | aucun | couvert | 0.0 |  |
| Plage du Vengeron | 4 | 7 | 172° S | aucun | couvert | 0.0 |  |
| Plage d'Hermance | 4 | 7 | 172° S | aucun | couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 1 | 7 | 221° SO | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 27° NNE | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 11 | 27° NNE | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 8° N | aucun | soleil-couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 346° NNO | aucun | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 9 | 24 | 17° NNE | aucun | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 49° NE | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 2 | 9 | 49° NE | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 81° E | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 54° NE | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 3 | 8 | 144° SE | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 3 | 8 | 144° SE | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 9 | 43° NE | aucun | couvert | 0.0 |  |
