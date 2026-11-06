# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 06/11/2026 23:12 (Europe/Paris)
- Fichiers générés le : 2026-11-06T23:15:19+01:00
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
| Plage de la pointe - Messery | 6 | 8 | 239° OSO | aucun | couvert | 0.7 | 10°C |
| Plage d'Excenevex | 4 | 8 | 238° OSO | aucun | pluie | 1.0 | 10°C |
| Plage du Vengeron | 4 | 5 | 217° SO | aucun | pluie | 1.4 | 10°C |
| Plage d'Hermance | 5 | 7 | 207° SSO | aucun | pluie | 1.5 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 14° NNE | aucun | couvert | 0.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 12 | 7° N | aucun | pluie | 2.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 323° NO | aucun | couvert | 0.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 11° N | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 18° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 6 | 13 | 28° NNE | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 5 | 325° NO | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 4 | 4 | 306° NO | aucun | soleil-couvert | 0.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 11° N | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 37° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 10 | 345° NNO | aucun | couvert | 0.1 | 12°C |
| Nord du Pont d'Arciat | 8 | 12 | 334° NNO | aucun | couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 5 | 15° NNE | aucun | soleil-couvert | 0.0 | 10°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 218° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 5 | 7 | 228° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 4 | 234° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 5 | 8 | 212° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 340° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 33° NNE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 178° S | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 351° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 14° NNE | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 358° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 9 | 19 | 28° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 35° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 4 | 8 | 51° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 36° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 61° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 7 | 87° E | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 8 | 81° E | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 337° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 219° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 4 | 5 | 245° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 3 | 4 | 38° NE | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 3 | 4 | 202° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 333° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 45° NE | aucun | soleil-couvert | 0.2 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 173° S | 14h-17h | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 197° SSO | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 196° SSO | aucun | pluie | 0.6 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 192° SSO | aucun | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 5 | 8 | 216° SO | aucun | couvert | 0.3 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 152° SSE | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 8 | 15 | 161° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 169° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 201° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 5 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 4 | 6 | 41° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 150° SSE | aucun | soleil-couvert | 0.0 | 11°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 62° ENE | aucun | couvert | 0.9 | 12°C |
| Plage d'Excenevex | 4 | 5 | 47° NE | aucun | pluie | 1.1 | 12°C |
| Plage du Vengeron | 5 | 7 | 27° NNE | aucun | couvert | 0.7 | 12°C |
| Plage d'Hermance | 5 | 7 | 40° NE | aucun | couvert | 0.6 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 90° E | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 57° ENE | aucun | couvert | 0.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 34 | 174° S | 08h-20h | couvert | 0.3 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 156° SSE | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 21 | 209° SSO | 08h-20h | couvert | 0.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 14 | 23 | 200° SSO | 08h-20h | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 4 | 6 | 246° OSO | aucun | pluie | 3.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 26 | 183° S | 10h-20h | couvert | 0.2 | 15°C |
| Nord du Pont de Chavanay | 14 | 26 | 183° S | 10h-20h | couvert | 0.2 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 31 | 191° S | 10h-20h | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 15 | 31 | 191° S | 10h-20h | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 12 | 20 | 178° S | 16h-20h | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 12 | 20 | 178° S | 16h-20h | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 23 | 189° S | 12h-15h | couvert | 0.0 | 16°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 219° SO | aucun | soleil-couvert | 0.1 | 16°C |
| Plage d'Excenevex | 4 | 5 | 229° SO | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 6 | 8 | 207° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 6 | 9 | 189° S | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 79° E | aucun | pluie | 3.8 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 22° NNE | aucun | pluie | 11.6 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 26 | 172° S | aucun | orage | 6.8 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 203° SSO | aucun | orage | 8.8 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 19 | 211° SSO | aucun | pluie | 1.8 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 19 | 205° SSO | aucun | pluie | 3.3 | 17°C |
| Cruas - Nuclear Spot | 4 | 8 | 223° SO | aucun | orage | 8.6 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 19 | 183° S | aucun | pluie | 6.2 | 17°C |
| Nord du Pont de Chavanay | 11 | 19 | 183° S | aucun | pluie | 6.2 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 24 | 197° SSO | 08h-15h | couvert | 0.4 | 17°C |
| Saint-Cyr-sur-le-Rhône | 13 | 24 | 197° SSO | 08h-15h | couvert | 0.4 | 17°C |
| Saint-Romain-des-Iles | 10 | 14 | 194° SSO | aucun | pluie | 4.2 | 17°C |
| Nord du Pont d'Arciat | 10 | 14 | 194° SSO | aucun | pluie | 4.2 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 182° S | aucun | pluie | 3.9 | 16°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 276° O | aucun | couvert | 0.2 | 12°C |
| Plage d'Excenevex | 4 | 10 | 276° O | aucun | couvert | 0.2 | 13°C |
| Plage du Vengeron | 4 | 10 | 276° O | aucun | couvert | 0.2 | 14°C |
| Plage d'Hermance | 4 | 10 | 276° O | aucun | couvert | 0.2 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 110° ESE | aucun | couvert | 0.4 | 17°C |
| Lac du Bourget - Cap des Séselets | 5 | 10 | 12° NNE | aucun | couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 29 | 177° S | 12h-19h | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 171° S | aucun | couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 195° SSO | 13h-16h | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 195° SSO | 12h-17h | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 8 | 17 | 181° S | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 172° S | 14h-18h | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 11 | 24 | 172° S | 14h-18h | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 173° S | 13h-20h | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 12 | 25 | 169° S | 14h-20h | couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 7 | 13 | 183° S | aucun | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 7 | 13 | 183° S | aucun | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 180° S | aucun | couvert | 0.0 | 17°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 264° O | aucun | pluie | 4.5 | 14°C |
| Plage d'Excenevex | 4 | 6 | 264° O | aucun | pluie | 4.5 | 14°C |
| Plage du Vengeron | 4 | 6 | 264° O | aucun | pluie | 4.5 | 14°C |
| Plage d'Hermance | 4 | 6 | 264° O | aucun | pluie | 4.5 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 134° SE | aucun | pluie | 8.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 7 | 16 | 26° NNE | aucun | orage | 7.3 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 22 | 176° S | aucun | pluie | 4.2 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 175° S | aucun | pluie | 1.8 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 9 | 313° NO | aucun | orage | 36.2 | 13°C |
| La Roche-de-Glun - Base Nautique | 5 | 8 | 333° NNO | aucun | orage | 31.2 | 13°C |
| Cruas - Nuclear Spot | 5 | 10 | 311° NO | aucun | orage | 39.9 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 28 | 195° SSO | aucun | pluie | 23.7 | 13°C |
| Nord du Pont de Chavanay | 8 | 28 | 195° SSO | aucun | pluie | 23.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 19 | 150° SSE | aucun | pluie | 17.8 | 12°C |
| Saint-Cyr-sur-le-Rhône | 10 | 29 | 179° S | aucun | pluie | 22.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 16 | 170° S | aucun | pluie | 16.1 | 12°C |
| Nord du Pont d'Arciat | 6 | 16 | 170° S | aucun | pluie | 16.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 132° SE | aucun | pluie | 14.2 | 12°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 27 | 29° NNE | 09h-20h | pluie | 5.5 | 8°C |
| Plage d'Excenevex | 17 | 27 | 29° NNE | 09h-20h | pluie | 5.5 | 8°C |
| Plage du Vengeron | 17 | 27 | 29° NNE | 09h-20h | pluie | 5.5 | 8°C |
| Plage d'Hermance | 17 | 27 | 29° NNE | 09h-20h | pluie | 5.5 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 11 | 12° NNE | aucun | pluie | 5.7 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 169° S | aucun | pluie | 9.1 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 341° NNO | aucun | pluie | 5.1 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 20° NNE | aucun | pluie | 3.3 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 26 | 10° N | 17h-20h | soleil-couvert | 0.3 | 15°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 5° N | aucun | soleil-couvert | 0.6 | 15°C |
| Cruas - Nuclear Spot | 11 | 24 | 11° N | aucun | soleil-couvert | 0.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 356° N | aucun | soleil-couvert | 0.6 | 15°C |
| Nord du Pont de Chavanay | 9 | 22 | 356° N | aucun | soleil-couvert | 0.6 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 356° N | aucun | couvert | 0.6 | 15°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 352° N | aucun | soleil-couvert | 0.6 | 15°C |
| Saint-Romain-des-Iles | 11 | 19 | 8° N | aucun | couvert | 0.6 | 11°C |
| Nord du Pont d'Arciat | 11 | 19 | 8° N | aucun | couvert | 0.6 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 356° N | aucun | couvert | 0.0 | 14°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 26 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 17 | 24 | 26° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 18 | 26 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 18 | 26 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 354° N | aucun | couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 7 | 17 | 38° NE | aucun | couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 348° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 331° NNO | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 11° N | 08h-20h | couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 6° N | 08h-19h | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 14 | 31 | 17° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 350° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 9 | 20 | 350° N | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 329° NNO | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 338° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 9 | 17 | 352° N | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 9 | 17 | 352° N | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 340° NNO | aucun | couvert | 0.0 | 8°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 17 | 41° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 9 | 17 | 32° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 9 | 17 | 41° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 9 | 17 | 41° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 338° NNO | aucun | soleil | 0.1 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 31° NNE | aucun | soleil-couvert | 0.2 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 193° SSO | aucun | pluie | 2.5 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 189° S | aucun | pluie | 2.4 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 14 | 27° NNE | aucun | pluie | 5.2 | 9°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 50° NE | aucun | pluie | 4.2 | 9°C |
| Cruas - Nuclear Spot | 5 | 17 | 29° NNE | aucun | pluie | 5.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 3 | 360° N | aucun | pluie | 6.2 | 8°C |
| Nord du Pont de Chavanay | 1 | 3 | 360° N | aucun | pluie | 6.2 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 4 | 322° NO | aucun | pluie | 3.6 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 3 | 353° N | aucun | pluie | 3.7 | 8°C |
| Saint-Romain-des-Iles | 2 | 7 | 141° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 7 | 141° SE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 94° E | aucun | pluie | 3.6 | 9°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 11 | 34° NE | aucun | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 6 | 11 | 33° NNE | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 5 | 11 | 34° NE | aucun | couvert | 0.0 | 9°C |
| Plage d'Hermance | 5 | 11 | 34° NE | aucun | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 311° NO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 26° NNE | aucun | soleil-couvert | 0.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 201° SSO | aucun | couvert | 0.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 203° SSO | aucun | pluie | 1.2 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 338° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 12 | 17° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 8° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 10 | 8° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 295° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 8° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 5 | 304° NO | aucun | pluie | 1.8 | 8°C |
| Nord du Pont d'Arciat | 2 | 5 | 304° NO | aucun | pluie | 1.8 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 335° NNO | aucun | soleil-couvert | 0.6 | 9°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 23° NNE | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 8 | 16° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 4 | 7 | 23° NNE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 4 | 7 | 23° NNE | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 282° ONO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 51° NE | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 2° N | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 355° N | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 13° NNE | 11h-20h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 12° NNE | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 10 | 24 | 12° NNE | 17h-20h | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 20° NNE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 13 | 20° NNE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 28° NNE | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 12° NNE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 4 | 9 | 16° NNE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 9 | 16° NNE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 343° NNO | aucun | couvert | 0.0 | 9°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 39° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 7 | 12 | 24° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 7 | 11 | 39° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 7 | 11 | 39° NE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 313° NO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 28° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 3° N | aucun | couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 346° NNO | aucun | couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 8° N | 08h-17h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 9° N | 11h-14h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 12 | 30 | 20° NNE | 08h-18h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 19 | 358° N | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 9 | 19 | 358° N | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 354° N | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 351° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 7 | 13 | 351° N | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 7 | 13 | 351° N | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 338° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 6 | 10 | 39° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 5 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 5 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 304° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 19° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 16 | 185° S | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 191° S | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 187° S | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 189° S | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 6 | 13 | 209° SSO | aucun | soleil-couvert | 0.7 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 183° S | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 11 | 24 | 183° S | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 178° S | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 175° S | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 4 | 9 | 162° SSE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 4 | 9 | 162° SSE | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 154° SSE | aucun | couvert | 0.0 | 9°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 8 | 346° NNO | aucun | pluie | 4.2 | 10°C |
| Plage d'Excenevex | 4 | 9 | 3° N | aucun | pluie | 2.4 | 9°C |
| Plage du Vengeron | 3 | 8 | 346° NNO | aucun | pluie | 4.2 | 10°C |
| Plage d'Hermance | 3 | 8 | 346° NNO | aucun | pluie | 4.2 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 144° SE | aucun | pluie | 4.8 | 8°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 12° NNE | aucun | pluie | 3.6 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 149° SSE | aucun | pluie | 9.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 135° SE | aucun | pluie | 9.6 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 171° S | aucun | pluie | 7.8 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 21 | 197° SSO | aucun | pluie | 4.8 | 10°C |
| Cruas - Nuclear Spot | 3 | 8 | 246° OSO | aucun | pluie | 12.2 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 25 | 184° S | aucun | pluie | 3.0 | 11°C |
| Nord du Pont de Chavanay | 9 | 25 | 184° S | aucun | pluie | 3.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 25 | 181° S | aucun | pluie | 1.8 | 11°C |
| Saint-Cyr-sur-le-Rhône | 9 | 26 | 176° S | aucun | pluie | 2.4 | 11°C |
| Saint-Romain-des-Iles | 5 | 12 | 187° S | aucun | pluie | 1.2 | 11°C |
| Nord du Pont d'Arciat | 5 | 12 | 187° S | aucun | pluie | 1.2 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 155° SSE | aucun | pluie | 2.4 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 45° NE | aucun | couvert | 0.0 |  |
| Plage d'Excenevex | 7 | 10 | 24° NNE | aucun | couvert | 0.0 |  |
| Plage du Vengeron | 7 | 12 | 45° NE | aucun | couvert | 0.0 |  |
| Plage d'Hermance | 7 | 12 | 45° NE | aucun | couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 344° NNO | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 30° NNE | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 208° SSO | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 259° O | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 7 | 355° N | aucun | couvert | 0.6 |  |
| La Roche-de-Glun - Base Nautique | 1 | 5 | 339° NNO | aucun | couvert | 0.6 |  |
| Cruas - Nuclear Spot | 3 | 7 | 31° NNE | aucun | pluie | 1.2 |  |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 7° N | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 2 | 6 | 7° N | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 353° N | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 360° N | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 2 | 6 | 338° NNO | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 2 | 6 | 338° NNO | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 305° NO | aucun | couvert | 0.0 |  |
