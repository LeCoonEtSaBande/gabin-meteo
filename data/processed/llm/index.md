# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 06/11/2026 14:04 (Europe/Paris)
- Fichiers générés le : 2026-11-06T14:08:07+01:00
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

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 239° OSO | aucun | pluie | 1.6 | 10°C |
| Plage d'Excenevex | 4 | 8 | 238° OSO | aucun | pluie | 2.5 | 10°C |
| Plage du Vengeron | 4 | 5 | 217° SO | aucun | pluie | 1.6 | 10°C |
| Plage d'Hermance | 5 | 7 | 207° SSO | aucun | pluie | 1.4 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 12° NNE | aucun | couvert | 0.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 342° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 194° SSO | aucun | pluie | 4.4 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 351° N | aucun | couvert | 0.7 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 12° NNE | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 355° N | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 8 | 17 | 17° NNE | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 11° N | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 4 | 8 | 6° N | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 333° NNO | aucun | soleil-couvert | 0.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 347° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 8 | 13 | 333° NNO | aucun | couvert | 0.1 | 12°C |
| Nord du Pont d'Arciat | 9 | 13 | 353° N | aucun | couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 11° N | aucun | couvert | 0.3 | 10°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 214° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 4 | 6 | 232° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 4 | 6 | 270° O | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 7 | 209° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 340° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 28° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 167° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 16 | 5° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 352° N | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 10 | 19 | 23° NNE | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 4 | 9 | 59° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 50° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 53° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 3 | 6 | 80° E | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 6 | 76° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 351° N | aucun | soleil-couvert | 0.0 | 8°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 4 | 218° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 5 | 270° O | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 3 | 4 | 212° SSO | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 6 | 216° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 74° ENE | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 123° ESE | aucun | pluie | 1.9 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 175° S | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 164° SSE | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 10 | 199° SSO | aucun | couvert | 0.6 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 12 | 193° SSO | aucun | couvert | 0.4 | 11°C |
| Cruas - Nuclear Spot | 3 | 7 | 184° S | aucun | pluie | 1.6 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 23 | 170° S | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 13 | 23 | 170° S | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 187° S | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 12 | 25 | 187° S | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 6 | 52° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 4 | 6 | 52° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 191° S | aucun | soleil-couvert | 0.3 | 11°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 68° ENE | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 5 | 84° E | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 4 | 5 | 29° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 4 | 5 | 61° ENE | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 333° NNO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 59° ENE | aucun | couvert | 0.1 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 34 | 174° S | 08h-20h | pluie | 0.7 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 159° SSE | 12h-16h | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 215° SO | 08h-20h | pluie | 1.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 13 | 24 | 202° SSO | 08h-20h | couvert | 0.2 | 14°C |
| Cruas - Nuclear Spot | 3 | 5 | 238° OSO | aucun | pluie | 3.6 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 25 | 179° S | 10h-20h | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 14 | 25 | 179° S | 10h-20h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 28 | 189° S | 10h-20h | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 14 | 28 | 189° S | 10h-20h | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 16 | 26 | 182° S | 15h-20h | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 16 | 26 | 182° S | 15h-20h | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 18 | 184° S | aucun | couvert | 0.0 | 15°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 223° SO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 4 | 86° E | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 8 | 10 | 217° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 7 | 10 | 219° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 76° ENE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 45° NE | aucun | pluie | 1.5 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 26 | 168° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 198° SSO | aucun | soleil | 0.1 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 214° SO | aucun | soleil-couvert | 0.2 | 18°C |
| La Roche-de-Glun - Base Nautique | 9 | 16 | 208° SSO | aucun | soleil-couvert | 0.1 | 18°C |
| Cruas - Nuclear Spot | 3 | 6 | 86° E | aucun | pluie | 1.3 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 22 | 188° S | 08h-13h | couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 13 | 22 | 188° S | 08h-13h | couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 25 | 197° SSO | 08h-14h | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 13 | 25 | 197° SSO | 08h-14h | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 13 | 21 | 187° S | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 13 | 21 | 187° S | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 168° SSE | aucun | pluie | 0.6 | 19°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 8° N | aucun | pluie | 11.9 | 14°C |
| Plage d'Excenevex | 5 | 7 | 8° N | aucun | pluie | 11.9 | 14°C |
| Plage du Vengeron | 5 | 7 | 8° N | aucun | pluie | 11.9 | 14°C |
| Plage d'Hermance | 5 | 7 | 8° N | aucun | pluie | 11.9 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 115° ESE | aucun | pluie | 1.8 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 210° SSO | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 18 | 159° SSE | aucun | pluie | 7.7 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 13 | 178° S | aucun | pluie | 1.9 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 196° SSO | aucun | couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 13 | 25 | 195° SSO | 11h-15h | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 7 | 16 | 208° SSO | aucun | couvert | 0.4 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 30 | 184° S | 12h-19h | couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 12 | 30 | 184° S | 12h-19h | couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 28 | 180° S | 10h-20h | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 12 | 29 | 178° S | 11h-20h | couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 9 | 17 | 177° S | aucun | couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 9 | 17 | 177° S | aucun | couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 184° S | aucun | couvert | 0.0 | 17°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 352° N | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 4 | 7 | 352° N | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 4 | 7 | 352° N | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 4 | 7 | 352° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 349° N | aucun | pluie | 1.5 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 15° NNE | aucun | pluie | 11.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 128° SE | aucun | pluie | 2.7 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 172° S | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 18 | 218° SO | aucun | pluie | 20.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 5 | 18 | 223° SO | aucun | pluie | 20.1 | 14°C |
| Cruas - Nuclear Spot | 4 | 16 | 239° OSO | aucun | pluie | 22.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 29 | 185° S | aucun | pluie | 11.1 | 14°C |
| Nord du Pont de Chavanay | 10 | 29 | 185° S | aucun | pluie | 11.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 24 | 175° S | aucun | pluie | 13.8 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 31 | 177° S | aucun | pluie | 12.7 | 14°C |
| Saint-Romain-des-Iles | 10 | 19 | 171° S | aucun | pluie | 2.0 | 16°C |
| Nord du Pont d'Arciat | 10 | 19 | 171° S | aucun | pluie | 2.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 150° SSE | aucun | pluie | 13.8 | 14°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 24° NNE | aucun | pluie | 17.6 | 14°C |
| Plage d'Excenevex | 8 | 12 | 24° NNE | aucun | pluie | 17.5 | 14°C |
| Plage du Vengeron | 8 | 12 | 24° NNE | aucun | pluie | 17.6 | 14°C |
| Plage d'Hermance | 8 | 12 | 24° NNE | aucun | pluie | 17.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 344° NNO | aucun | pluie | 26.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 335° NNO | aucun | pluie | 7.4 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 327° NNO | aucun | pluie | 10.3 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 15° NNE | aucun | pluie | 7.1 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 46° NE | aucun | orage | 36.8 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 108° ESE | aucun | pluie | 17.8 | 13°C |
| Cruas - Nuclear Spot | 4 | 10 | 44° NE | aucun | pluie | 6.8 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 62° ENE | aucun | pluie | 3.8 | 15°C |
| Nord du Pont de Chavanay | 3 | 9 | 62° ENE | aucun | pluie | 3.8 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 21° NNE | aucun | pluie | 2.8 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 51° NE | aucun | pluie | 3.8 | 15°C |
| Saint-Romain-des-Iles | 4 | 7 | 312° NO | aucun | couvert | 0.6 | 15°C |
| Nord du Pont d'Arciat | 4 | 7 | 312° NO | aucun | couvert | 0.6 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 96° E | aucun | pluie | 2.0 | 14°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 29° NNE | 08h-15h | pluie | 2.4 | 9°C |
| Plage d'Excenevex | 12 | 16 | 12° NNE | 08h-16h | couvert | 0.6 | 9°C |
| Plage du Vengeron | 11 | 16 | 29° NNE | 08h-15h | pluie | 2.4 | 9°C |
| Plage d'Hermance | 11 | 16 | 29° NNE | 08h-15h | pluie | 2.4 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 328° NNO | aucun | pluie | 4.8 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 193° SSO | aucun | pluie | 5.4 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 351° N | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 342° NNO | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 15° NNE | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 15° NNE | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 9 | 22 | 19° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 12° NNE | aucun | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 6 | 13 | 12° NNE | aucun | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 1° N | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 2° N | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 7 | 15 | 339° NNO | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 7 | 15 | 339° NNO | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 346° NNO | aucun | couvert | 0.0 | 9°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 163° SSE | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 3 | 10 | 9° N | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 2 | 5 | 163° SSE | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 2 | 5 | 163° SSE | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 261° O | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 185° S | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 349° N | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 342° NNO | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 4° N | aucun | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 351° N | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 8 | 18 | 27° NNE | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 29° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 5 | 12 | 29° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 23° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 5 | 47° NE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 2 | 5 | 47° NE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 11° N | aucun | soleil-couvert | 0.0 | 10°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 282° ONO | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 3 | 7 | 304° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 3 | 7 | 282° ONO | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 3 | 7 | 282° ONO | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 285° ONO | aucun | soleil | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 344° NNO | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 20 | 182° S | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 182° S | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 187° S | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 190° S | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 6 | 16 | 198° SSO | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 185° S | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 11 | 25 | 185° S | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 174° S | 17h-20h | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 178° S | 17h-20h | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 8 | 15 | 189° S | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 8 | 15 | 189° S | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 26 | 181° S | 17h-20h | soleil | 0.0 | 10°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 207° SSO | aucun | pluie | 7.0 | 10°C |
| Plage d'Excenevex | 10 | 15 | 224° SO | aucun | pluie | 7.0 | 10°C |
| Plage du Vengeron | 7 | 12 | 207° SSO | aucun | pluie | 7.0 | 10°C |
| Plage d'Hermance | 7 | 12 | 207° SSO | aucun | pluie | 7.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 266° O | aucun | pluie | 11.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 235° SO | aucun | pluie | 11.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 24 | 158° SSE | aucun | pluie | 13.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 22 | 147° SSE | aucun | pluie | 12.9 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 21 | 197° SSO | aucun | pluie | 8.4 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 193° SSO | 10h-13h | pluie | 2.8 | 11°C |
| Cruas - Nuclear Spot | 9 | 22 | 170° S | aucun | pluie | 10.8 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 31 | 184° S | aucun | pluie | 4.8 | 10°C |
| Nord du Pont de Chavanay | 10 | 31 | 184° S | aucun | pluie | 4.8 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 33 | 177° S | aucun | pluie | 6.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 12 | 34 | 177° S | aucun | pluie | 6.0 | 10°C |
| Saint-Romain-des-Iles | 9 | 23 | 179° S | aucun | pluie | 12.0 | 10°C |
| Nord du Pont d'Arciat | 9 | 23 | 179° S | aucun | pluie | 12.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 194° SSO | aucun | pluie | 6.6 | 10°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 49° NE | 12h-15h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 11 | 16 | 29° NNE | 09h-16h | couvert | 0.5 | 9°C |
| Plage du Vengeron | 10 | 15 | 49° NE | 12h-15h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 10 | 15 | 49° NE | 12h-15h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 17 | 9° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 8 | 19 | 33° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 21 | 342° NNO | aucun | couvert | 0.6 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 337° NNO | aucun | couvert | 0.6 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 8° N | 08h-19h | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 2° N | 08h-18h | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 15 | 32 | 13° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 354° N | 11h-14h | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 10 | 22 | 354° N | 11h-14h | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 358° N | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 355° N | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 7 | 14 | 350° N | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 7 | 14 | 350° N | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 357° N | aucun | soleil | 0.0 | 9°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 267° O | aucun | pluie | 3.2 | 11°C |
| Plage d'Excenevex | 2 | 8 | 201° SSO | aucun | pluie | 2.6 | 11°C |
| Plage du Vengeron | 6 | 10 | 267° O | aucun | pluie | 3.2 | 11°C |
| Plage d'Hermance | 6 | 10 | 267° O | aucun | pluie | 3.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 137° SE | aucun | pluie | 2.8 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 15° NNE | aucun | pluie | 2.8 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 157° SSE | aucun | pluie | 2.1 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 152° SSE | aucun | pluie | 1.4 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 184° S | aucun | pluie | 1.9 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 197° SSO | aucun | pluie | 2.4 | 11°C |
| Cruas - Nuclear Spot | 4 | 10 | 193° SSO | aucun | pluie | 5.4 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 160° SSE | aucun | soleil-couvert | 0.6 | 11°C |
| Nord du Pont de Chavanay | 6 | 15 | 160° SSE | aucun | soleil-couvert | 0.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 170° S | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 157° SSE | aucun | soleil-couvert | 0.6 | 10°C |
| Saint-Romain-des-Iles | 7 | 13 | 176° S | aucun | pluie | 6.0 | 8°C |
| Nord du Pont d'Arciat | 7 | 13 | 176° S | aucun | pluie | 6.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 157° SSE | aucun | pluie | 5.5 | 10°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 232° SO | aucun | pluie | 12.0 | 13°C |
| Plage d'Excenevex | 7 | 10 | 224° SO | aucun | pluie | 3.6 | 13°C |
| Plage du Vengeron | 8 | 11 | 232° SO | aucun | pluie | 12.0 | 13°C |
| Plage d'Hermance | 8 | 11 | 232° SO | aucun | pluie | 12.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 158° SSE | aucun | pluie | 4.2 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 290° ONO | aucun | pluie | 3.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 352° N | aucun | soleil-couvert | 0.6 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 354° N | aucun | soleil-couvert | 0.6 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 124° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 3 | 8 | 332° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 126° SE | aucun | pluie | 1.8 | 15°C |
| Nord du Pont de Chavanay | 3 | 8 | 126° SE | aucun | pluie | 1.8 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 177° S | aucun | soleil-couvert | 0.6 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 189° S | aucun | soleil-couvert | 0.6 | 15°C |
| Saint-Romain-des-Iles | 3 | 9 | 231° SO | aucun | pluie | 1.2 | 13°C |
| Nord du Pont d'Arciat | 3 | 9 | 231° SO | aucun | pluie | 1.2 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 197° SSO | aucun | pluie | 3.6 | 14°C |
