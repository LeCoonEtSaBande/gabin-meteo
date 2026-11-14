# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 14/11/2026 22:36 (Europe/Paris)
- Fichiers générés le : 2026-11-14T22:42:53+01:00
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

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 39° NE | 08h-12h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 14 | 22 | 25° NNE | 08h-12h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 13 | 18 | 47° NE | 08h-11h | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 13 | 18 | 47° NE | 08h-11h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 338° NNO | aucun | soleil-couvert | 0.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 17° NNE | aucun | soleil-couvert | 0.1 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 201° SSO | 10h-16h | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 17 | 195° SSO | aucun | couvert | 0.5 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 11 | 212° SSO | aucun | pluie | 3.6 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 6 | 152° SSE | aucun | couvert | 0.4 | 11°C |
| Cruas - Nuclear Spot | 8 | 16 | 23° NNE | aucun | orage | 11.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 6 | 159° SSE | aucun | pluie | 0.8 | 11°C |
| Nord du Pont de Chavanay | 6 | 2 | 170° S | aucun | pluie | 0.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 5 | 115° ESE | aucun | soleil-couvert | 0.1 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 246° OSO | aucun | soleil | 0.3 | 12°C |
| Saint-Romain-des-Iles | 3 | 4 | 169° S | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 4 | 9 | 198° SSO | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 146° SE | aucun | soleil | 0.2 | 10°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 229° SO | 16h-20h | couvert | 0.1 | 12°C |
| Plage d'Excenevex | 9 | 12 | 227° SO | aucun | pluie | 2.8 | 13°C |
| Plage du Vengeron | 13 | 18 | 213° SSO | aucun | pluie | 2.6 | 13°C |
| Plage d'Hermance | 18 | 24 | 229° SO | 15h-19h | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 142° SE | aucun | pluie | 2.1 | 13°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 198° SSO | aucun | pluie | 2.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 26 | 193° SSO | 12h-20h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 155° SSE | aucun | pluie | 1.9 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 197° SSO | 11h-17h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 176° S | aucun | soleil-couvert | 0.1 | 14°C |
| Cruas - Nuclear Spot | 8 | 15 | 207° SSO | aucun | orage | 4.9 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 24 | 175° S | 12h-18h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 13 | 24 | 178° S | 12h-18h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 31 | 178° S | 12h-20h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 191° S | 13h-19h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 13 | 21 | 173° S | 13h-20h | pluie | 0.6 | 15°C |
| Nord du Pont d'Arciat | 15 | 22 | 179° S | 13h-19h | soleil-couvert | 0.1 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 30 | 185° S | 10h-20h | soleil-couvert | 0.0 | 13°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 201° SSO | 08h-20h | pluie | 3.7 | 12°C |
| Plage d'Excenevex | 16 | 21 | 212° SSO | 08h-19h | pluie | 2.9 | 12°C |
| Plage du Vengeron | 16 | 20 | 205° SSO | 08h-17h | couvert | 0.7 | 13°C |
| Plage d'Hermance | 15 | 23 | 212° SSO | 08h-18h | couvert | 0.7 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 144° SE | aucun | pluie | 1.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 196° SSO | aucun | couvert | 0.9 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 60° ENE | aucun | pluie | 2.2 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 28° NNE | aucun | soleil-couvert | 0.1 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 13 | 212° SSO | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 17 | 196° SSO | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 5 | 10 | 208° SSO | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 14 | 157° SSE | aucun | couvert | 0.1 | 13°C |
| Nord du Pont de Chavanay | 9 | 14 | 157° SSE | aucun | couvert | 0.2 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 181° S | aucun | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 20 | 181° S | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 13 | 184° S | aucun | couvert | 0.6 | 13°C |
| Nord du Pont d'Arciat | 10 | 14 | 201° SSO | aucun | couvert | 0.4 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 180° S | aucun | couvert | 0.1 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 29 | 220° SO | 08h-20h | pluie | 4.6 | 14°C |
| Plage d'Excenevex | 18 | 24 | 205° SSO | 08h-20h | pluie | 6.2 | 14°C |
| Plage du Vengeron | 17 | 23 | 204° SSO | 09h-20h | pluie | 7.3 | 14°C |
| Plage d'Hermance | 16 | 25 | 209° SSO | 08h-20h | pluie | 5.8 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 117° ESE | aucun | pluie | 11.7 | 14°C |
| Lac du Bourget - Cap des Séselets | 8 | 11 | 153° SSE | aucun | pluie | 14.7 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 29 | 159° SSE | 08h-15h | pluie | 3.6 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 142° SE | aucun | pluie | 3.3 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 23 | 214° SO | 08h-13h | pluie | 3.1 | 14°C |
| La Roche-de-Glun - Base Nautique | 15 | 26 | 205° SSO | 08h-20h | pluie | 2.6 | 15°C |
| Cruas - Nuclear Spot | 8 | 14 | 195° SSO | aucun | pluie | 2.6 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 18 | 31 | 181° S | 08h-16h | pluie | 2.6 | 15°C |
| Nord du Pont de Chavanay | 18 | 31 | 181° S | 08h-16h | pluie | 2.6 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 33 | 194° SSO | 08h-18h | pluie | 3.8 | 15°C |
| Saint-Cyr-sur-le-Rhône | 17 | 33 | 194° SSO | 08h-18h | pluie | 3.8 | 15°C |
| Saint-Romain-des-Iles | 16 | 29 | 185° S | 08h-13h | pluie | 2.9 | 17°C |
| Nord du Pont d'Arciat | 16 | 29 | 185° S | 08h-13h | pluie | 2.9 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 21 | 36 | 188° S | 08h-20h | pluie | 3.3 | 15°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 28 | 208° SSO | 08h-20h | pluie | 1.8 | 12°C |
| Plage d'Excenevex | 19 | 25 | 201° SSO | 08h-20h | pluie | 1.5 | 12°C |
| Plage du Vengeron | 18 | 23 | 197° SSO | 08h-20h | pluie | 2.9 | 13°C |
| Plage d'Hermance | 16 | 24 | 207° SSO | 08h-19h | pluie | 2.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 14 | 125° SE | aucun | pluie | 5.1 | 12°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 174° S | aucun | pluie | 5.9 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 153° SSE | aucun | orage | 14.4 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 129° SE | aucun | pluie | 8.2 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 198° SSO | aucun | pluie | 3.1 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 20 | 195° SSO | aucun | pluie | 1.4 | 14°C |
| Cruas - Nuclear Spot | 3 | 5 | 120° ESE | aucun | pluie | 3.4 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 19 | 161° SSE | aucun | pluie | 1.1 | 14°C |
| Nord du Pont de Chavanay | 12 | 19 | 161° SSE | aucun | pluie | 1.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 180° S | aucun | pluie | 1.8 | 13°C |
| Saint-Cyr-sur-le-Rhône | 12 | 24 | 180° S | aucun | pluie | 1.8 | 13°C |
| Saint-Romain-des-Iles | 10 | 17 | 235° SO | aucun | soleil-couvert | 0.1 | 13°C |
| Nord du Pont d'Arciat | 10 | 17 | 235° SO | aucun | soleil-couvert | 0.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 19 | 205° SSO | aucun | pluie | 1.1 | 13°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 25 | 36 | 211° SSO | 08h-20h | pluie | 3.8 | 12°C |
| Plage d'Excenevex | 21 | 29 | 205° SSO | 08h-20h | pluie | 3.2 | 12°C |
| Plage du Vengeron | 21 | 29 | 203° SSO | 08h-20h | pluie | 2.4 | 13°C |
| Plage d'Hermance | 20 | 31 | 209° SSO | 08h-20h | pluie | 2.3 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 16 | 187° S | aucun | pluie | 1.7 | 12°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 170° S | 10h-19h | couvert | 0.5 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 159° SSE | aucun | pluie | 0.7 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 18 | 128° SE | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 193° SSO | 12h-18h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 188° S | 11h-18h | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 10 | 20 | 179° S | aucun | soleil-couvert | 0.3 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 23 | 170° S | aucun | pluie | 1.8 | 14°C |
| Nord du Pont de Chavanay | 11 | 23 | 170° S | aucun | pluie | 1.8 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 179° S | 08h-13h | soleil-couvert | 0.3 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 182° S | 10h-13h | soleil-couvert | 0.6 | 14°C |
| Saint-Romain-des-Iles | 12 | 23 | 233° SO | 09h-18h | soleil-couvert | 0.3 | 14°C |
| Nord du Pont d'Arciat | 12 | 23 | 233° SO | 09h-18h | soleil-couvert | 0.3 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 29 | 184° S | 10h-15h | soleil-couvert | 0.4 | 13°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 28 | 224° SO | 08h-19h | pluie | 8.7 | 12°C |
| Plage d'Excenevex | 16 | 28 | 224° SO | 08h-19h | pluie | 8.7 | 12°C |
| Plage du Vengeron | 16 | 28 | 224° SO | 08h-19h | pluie | 8.7 | 12°C |
| Plage d'Hermance | 16 | 28 | 224° SO | 08h-19h | pluie | 8.7 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 153° SSE | aucun | pluie | 6.7 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 17 | 180° S | aucun | pluie | 11.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 17 | 139° SE | aucun | pluie | 6.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 6 | 163° SSE | aucun | pluie | 3.5 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 176° S | aucun | pluie | 2.1 | 12°C |
| La Roche-de-Glun - Base Nautique | 9 | 21 | 183° S | aucun | pluie | 2.1 | 12°C |
| Cruas - Nuclear Spot | 5 | 16 | 200° SSO | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 169° S | aucun | pluie | 12.2 | 11°C |
| Nord du Pont de Chavanay | 7 | 18 | 169° S | aucun | pluie | 12.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 21 | 178° S | aucun | pluie | 5.8 | 11°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 174° S | aucun | pluie | 8.5 | 11°C |
| Saint-Romain-des-Iles | 7 | 12 | 243° OSO | aucun | pluie | 5.1 | 10°C |
| Nord du Pont d'Arciat | 7 | 12 | 243° OSO | aucun | pluie | 5.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 19 | 210° SSO | aucun | pluie | 12.8 | 10°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 218° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 8 | 13 | 218° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 8 | 13 | 218° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 8 | 13 | 218° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 162° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 7 | 72° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 15 | 328° NNO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 353° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 8° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 358° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 8 | 19 | 22° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 17° NNE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 4 | 12 | 17° NNE | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 12° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 6 | 121° ESE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 2 | 6 | 121° ESE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 25° NNE | aucun | soleil-couvert | 0.0 | 9°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 216° SO | aucun | pluie | 2.6 | 10°C |
| Plage d'Excenevex | 9 | 11 | 232° SO | aucun | pluie | 1.9 | 11°C |
| Plage du Vengeron | 9 | 13 | 216° SO | aucun | pluie | 2.6 | 10°C |
| Plage d'Hermance | 9 | 13 | 216° SO | aucun | pluie | 2.6 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 130° SE | aucun | pluie | 3.1 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 218° SO | aucun | pluie | 8.5 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 16 | 137° SE | aucun | pluie | 1.8 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 15 | 111° ESE | aucun | pluie | 2.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 157° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 171° S | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 3 | 9 | 196° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 166° SSE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 16 | 166° SSE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 15 | 173° S | aucun | soleil-couvert | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 160° SSE | aucun | pluie | 2.4 | 12°C |
| Saint-Romain-des-Iles | 7 | 16 | 194° SSO | aucun | pluie | 1.8 | 12°C |
| Nord du Pont d'Arciat | 7 | 16 | 194° SSO | aucun | pluie | 1.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 137° SE | aucun | soleil-couvert | 0.0 | 13°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 2 | 5 | 12° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 4 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 10 | 126° SE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 32° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 139° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 186° S | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 6 | 187° S | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 200° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 3 | 8 | 231° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 202° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 2 | 8 | 202° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 228° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 195° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 2 | 6 | 125° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 2 | 6 | 125° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 105° ESE | aucun | soleil-couvert | 0.0 | 11°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 17° NNE | aucun | pluie | 1.6 | 9°C |
| Plage d'Excenevex | 7 | 11 | 11° N | aucun | couvert | 0.8 | 9°C |
| Plage du Vengeron | 8 | 11 | 17° NNE | aucun | pluie | 1.6 | 9°C |
| Plage d'Hermance | 8 | 11 | 17° NNE | aucun | pluie | 1.6 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 15 | 34° NE | aucun | pluie | 2.6 | 7°C |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 42° NE | aucun | pluie | 5.8 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 332° NNO | aucun | pluie | 6.2 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 325° NO | aucun | pluie | 6.8 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 2° N | aucun | pluie | 17.7 | 9°C |
| La Roche-de-Glun - Base Nautique | 7 | 22 | 324° NO | aucun | pluie | 17.5 | 9°C |
| Cruas - Nuclear Spot | 8 | 25 | 29° NNE | aucun | orage | 21.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 13 | 326° NO | aucun | pluie | 20.7 | 9°C |
| Nord du Pont de Chavanay | 3 | 13 | 326° NO | aucun | pluie | 20.7 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 304° NO | aucun | pluie | 20.5 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 325° NO | aucun | pluie | 21.2 | 8°C |
| Saint-Romain-des-Iles | 6 | 11 | 349° N | aucun | pluie | 19.2 | 8°C |
| Nord du Pont d'Arciat | 6 | 11 | 349° N | aucun | pluie | 19.2 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 114° ESE | aucun | pluie | 16.7 | 8°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 40° NE | aucun | pluie | 3.6 | 9°C |
| Plage d'Excenevex | 4 | 7 | 24° NNE | aucun | pluie | 6.0 | 9°C |
| Plage du Vengeron | 4 | 6 | 40° NE | aucun | pluie | 3.6 | 9°C |
| Plage d'Hermance | 4 | 6 | 40° NE | aucun | pluie | 3.6 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 7 | 48° NE | aucun | pluie | 7.3 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 9° N | aucun | pluie | 13.8 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 20 | 317° NO | aucun | pluie | 21.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 20 | 312° NO | aucun | pluie | 21.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 12 | 3° N | aucun | pluie | 11.9 | 10°C |
| La Roche-de-Glun - Base Nautique | 3 | 4 | 306° NO | aucun | pluie | 12.2 | 10°C |
| Cruas - Nuclear Spot | 4 | 10 | 17° NNE | aucun | pluie | 7.7 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 315° NO | aucun | pluie | 6.3 | 10°C |
| Nord du Pont de Chavanay | 2 | 6 | 315° NO | aucun | pluie | 6.3 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 4 | 270° O | aucun | pluie | 5.1 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 321° NO | aucun | pluie | 4.3 | 10°C |
| Saint-Romain-des-Iles | 2 | 4 | 167° SSE | aucun | pluie | 1.4 | 9°C |
| Nord du Pont d'Arciat | 2 | 4 | 167° SSE | aucun | pluie | 1.4 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 128° SE | aucun | pluie | 7.7 | 9°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 41° NE | aucun | couvert | 0.6 | 11°C |
| Plage d'Excenevex | 7 | 13 | 19° NNE | aucun | couvert | 0.6 | 10°C |
| Plage du Vengeron | 8 | 14 | 41° NE | aucun | couvert | 0.6 | 11°C |
| Plage d'Hermance | 8 | 14 | 41° NE | aucun | couvert | 0.6 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 325° NO | aucun | couvert | 0.4 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 25° NNE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 17 | 157° SSE | aucun | pluie | 2.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 15 | 158° SSE | aucun | pluie | 3.8 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 9° N | aucun | pluie | 14.8 | 9°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 344° NNO | aucun | pluie | 10.0 | 9°C |
| Cruas - Nuclear Spot | 9 | 24 | 23° NNE | aucun | orage | 32.7 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 32° NNE | aucun | pluie | 3.7 | 8°C |
| Nord du Pont de Chavanay | 3 | 8 | 32° NNE | aucun | pluie | 3.7 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 159° SSE | aucun | pluie | 3.1 | 8°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 25° NNE | aucun | pluie | 2.5 | 8°C |
| Saint-Romain-des-Iles | 3 | 5 | 316° NO | aucun | couvert | 0.1 | 8°C |
| Nord du Pont d'Arciat | 3 | 5 | 316° NO | aucun | couvert | 0.1 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 327° NNO | aucun | couvert | 0.7 | 8°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 210° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 9 | 12 | 238° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 9 | 13 | 210° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 9 | 13 | 210° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 206° SSO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 249° OSO | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 181° S | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 185° S | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 195° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 195° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 12 | 200° SSO | aucun | soleil | 0.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 164° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 8 | 19 | 164° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 164° SSE | aucun | soleil-couvert | 0.6 | 11°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 161° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 10 | 166° SSE | aucun | pluie | 1.8 | 10°C |
| Nord du Pont d'Arciat | 4 | 10 | 166° SSE | aucun | pluie | 1.8 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 186° S | aucun | soleil-couvert | 0.6 | 11°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 11 | 15 | 24° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 8 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 8 | 11 | 34° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 360° N | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 356° N | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 20 | 360° N | aucun | couvert | 0.1 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 19 | 359° N | aucun | couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 31 | 360° N | 09h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 353° N | 11h-20h | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 15 | 33 | 10° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 348° NNO | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 10 | 23 | 348° NNO | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 346° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 345° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 8 | 15 | 348° NNO | aucun | pluie | 1.3 | 7°C |
| Nord du Pont d'Arciat | 8 | 15 | 348° NNO | aucun | pluie | 1.3 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 349° N | aucun | couvert | 0.0 | 8°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 25 | 28° NNE | 08h-13h | couvert | 0.0 |  |
| Plage d'Excenevex | 18 | 26 | 24° NNE | 08h-13h | couvert | 0.0 |  |
| Plage du Vengeron | 17 | 25 | 28° NNE | 08h-13h | couvert | 0.0 |  |
| Plage d'Hermance | 17 | 25 | 28° NNE | 08h-13h | couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 8° N | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 7 | 21 | 15° NNE | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 357° N | aucun | couvert | 0.6 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 17 | 342° NNO | aucun | couvert | 0.6 |  |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 34 | 358° N | 08h-13h | couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 14 | 30 | 352° N | 08h-13h | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 16 | 38 | 10° N | 08h-13h | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 342° NNO | 08h-13h | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 11 | 26 | 342° NNO | 08h-13h | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 352° N | 08h-13h | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 338° NNO | 08h-13h | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 13 | 23 | 2° N | 08h-13h | soleil-couvert | 0.0 |  |
| Nord du Pont d'Arciat | 13 | 23 | 2° N | 08h-13h | soleil-couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 343° NNO | 08h-13h | couvert | 0.0 |  |
