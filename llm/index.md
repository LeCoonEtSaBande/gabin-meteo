# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 13/11/2026 14:15 (Europe/Paris)
- Fichiers générés le : 2026-11-13T14:21:46+01:00
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

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 26 | 37 | 37° NE | 08h-20h | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 23 | 34 | 29° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 24 | 35 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 22 | 32 | 36° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 19 | 26 | 326° NO | 08h-19h | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 18 | 24 | 4° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 32 | 356° N | 08h-19h | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 18 | 32 | 354° N | 08h-17h | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 33 | 7° N | 08h-20h | soleil-couvert | 0.3 | 10°C |
| La Roche-de-Glun - Base Nautique | 13 | 30 | 357° N | 08h-15h | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 18 | 36 | 20° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 4° N | 08h-20h | soleil-couvert | 0.1 | 10°C |
| Nord du Pont de Chavanay | 12 | 21 | 6° N | 10h-17h | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 335° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 351° N | aucun | soleil-couvert | 0.1 | 9°C |
| Saint-Romain-des-Iles | 13 | 22 | 3° N | 08h-20h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 15 | 22 | 7° N | 08h-20h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 26 | 343° NNO | 12h-15h | soleil | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 20 | 36° NE | 08h-11h | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 14 | 20 | 32° NNE | 08h-11h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 12 | 16 | 48° NE | aucun | pluie | 0.5 | 8°C |
| Plage d'Hermance | 12 | 16 | 50° NE | aucun | pluie | 0.6 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 339° NNO | aucun | soleil-couvert | 0.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 6 | 7 | 350° N | aucun | soleil-couvert | 0.2 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 20 | 195° SSO | 12h-15h | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 11 | 185° S | aucun | pluie | 1.5 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 11 | 189° S | aucun | pluie | 5.5 | 10°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 20° NNE | aucun | pluie | 2.6 | 10°C |
| Cruas - Nuclear Spot | 9 | 18 | 21° NNE | aucun | orage | 14.5 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 166° SSE | aucun | pluie | 3.2 | 10°C |
| Nord du Pont de Chavanay | 5 | 12 | 189° S | aucun | pluie | 3.4 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 159° SSE | aucun | pluie | 2.3 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 228° SO | aucun | pluie | 1.9 | 10°C |
| Saint-Romain-des-Iles | 4 | 4 | 135° SE | aucun | pluie | 0.8 | 8°C |
| Nord du Pont d'Arciat | 5 | 9 | 194° SSO | aucun | pluie | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 119° ESE | aucun | pluie | 2.0 | 12°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 22 | 216° SO | 12h-20h | couvert | 0.3 | 14°C |
| Plage d'Excenevex | 11 | 15 | 228° SO | 13h-16h | couvert | 0.0 | 14°C |
| Plage du Vengeron | 16 | 21 | 214° SO | 12h-16h | couvert | 0.0 | 14°C |
| Plage d'Hermance | 15 | 23 | 219° SO | 12h-18h | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 149° SSE | aucun | couvert | 0.5 | 15°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 180° S | aucun | soleil-couvert | 0.3 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 28 | 176° S | 09h-20h | pluie | 1.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 17 | 166° SSE | aucun | pluie | 0.5 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 193° SSO | 13h-20h | pluie | 1.5 | 12°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 203° SSO | 14h-20h | pluie | 0.8 | 13°C |
| Cruas - Nuclear Spot | 9 | 16 | 200° SSO | aucun | pluie | 3.8 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 28 | 170° S | 11h-20h | pluie | 2.0 | 13°C |
| Nord du Pont de Chavanay | 15 | 28 | 170° S | 11h-20h | pluie | 2.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 32 | 187° S | 08h-20h | pluie | 1.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 15 | 32 | 187° S | 12h-20h | pluie | 1.2 | 12°C |
| Saint-Romain-des-Iles | 17 | 27 | 183° S | 13h-20h | couvert | 0.6 | 14°C |
| Nord du Pont d'Arciat | 17 | 27 | 183° S | 13h-20h | couvert | 0.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 20 | 35 | 189° S | 08h-18h | soleil-couvert | 0.0 | 13°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 22 | 212° SSO | 08h-17h | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 15 | 21 | 215° SO | 08h-17h | couvert | 0.1 | 13°C |
| Plage du Vengeron | 15 | 20 | 207° SSO | 08h-17h | couvert | 0.0 | 14°C |
| Plage d'Hermance | 14 | 21 | 212° SSO | 09h-16h | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 12 | 143° SE | aucun | couvert | 0.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 192° SSO | aucun | pluie | 0.6 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 171° S | 17h-20h | couvert | 0.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 187° S | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 23 | 193° SSO | aucun | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 15 | 25 | 187° S | 17h-20h | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 9 | 15 | 168° SSE | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 21 | 170° S | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 13 | 21 | 170° S | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 28 | 185° S | 17h-20h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 15 | 28 | 185° S | 17h-20h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 14 | 21 | 187° S | 17h-20h | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 14 | 21 | 187° S | 17h-20h | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 28 | 181° S | aucun | couvert | 0.7 | 14°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 28 | 41 | 207° SSO | 08h-20h | pluie | 6.1 | 15°C |
| Plage d'Excenevex | 22 | 31 | 206° SSO | 08h-20h | pluie | 6.3 | 15°C |
| Plage du Vengeron | 22 | 31 | 200° SSO | 08h-20h | pluie | 1.2 | 16°C |
| Plage d'Hermance | 23 | 36 | 207° SSO | 08h-20h | pluie | 4.1 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 16 | 213° SSO | aucun | pluie | 3.1 | 16°C |
| Lac du Bourget - Cap des Séselets | 16 | 22 | 158° SSE | 08h-12h | orage | 6.3 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 34 | 161° SSE | 08h-12h | pluie | 2.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 24 | 142° SE | aucun | soleil-couvert | 0.1 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 19 | 205° SSO | 11h-18h | pluie | 3.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 14 | 26 | 203° SSO | 08h-18h | pluie | 5.4 | 15°C |
| Cruas - Nuclear Spot | 10 | 27 | 194° SSO | aucun | pluie | 3.6 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 30 | 186° S | 08h-16h | pluie | 2.5 | 15°C |
| Nord du Pont de Chavanay | 16 | 30 | 186° S | 08h-16h | pluie | 2.5 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 34 | 192° SSO | 08h-17h | pluie | 1.5 | 16°C |
| Saint-Cyr-sur-le-Rhône | 17 | 34 | 192° SSO | 08h-16h | pluie | 2.1 | 15°C |
| Saint-Romain-des-Iles | 15 | 23 | 196° SSO | 08h-11h | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 15 | 23 | 196° SSO | 08h-11h | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 23 | 41 | 194° SSO | 08h-18h | soleil-couvert | 0.2 | 15°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 27 | 224° SO | 08h-20h | pluie | 9.0 | 11°C |
| Plage d'Excenevex | 15 | 27 | 224° SO | 08h-20h | pluie | 9.0 | 11°C |
| Plage du Vengeron | 15 | 27 | 224° SO | 08h-20h | pluie | 9.0 | 11°C |
| Plage d'Hermance | 15 | 27 | 224° SO | 08h-20h | pluie | 9.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 18 | 188° S | aucun | pluie | 6.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 20 | 196° SSO | aucun | pluie | 10.4 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 20 | 162° SSE | aucun | pluie | 4.4 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 15 | 190° S | aucun | pluie | 3.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 19 | 153° SSE | aucun | pluie | 4.2 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 17 | 156° SSE | aucun | soleil | 0.6 | 14°C |
| Cruas - Nuclear Spot | 6 | 18 | 197° SSO | aucun | soleil-couvert | 0.3 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 166° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 8 | 15 | 166° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 23 | 242° OSO | aucun | soleil-couvert | 0.3 | 15°C |
| Saint-Cyr-sur-le-Rhône | 7 | 22 | 230° SO | aucun | pluie | 1.2 | 15°C |
| Saint-Romain-des-Iles | 13 | 22 | 250° OSO | 11h-16h | soleil | 0.3 | 14°C |
| Nord du Pont d'Arciat | 13 | 22 | 250° OSO | 11h-16h | soleil | 0.3 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 26 | 240° OSO | aucun | soleil | 0.3 | 15°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 29 | 219° SO | 08h-20h | pluie | 6.2 | 12°C |
| Plage d'Excenevex | 17 | 29 | 219° SO | 08h-20h | pluie | 6.2 | 12°C |
| Plage du Vengeron | 17 | 29 | 219° SO | 08h-20h | pluie | 6.2 | 12°C |
| Plage d'Hermance | 17 | 29 | 219° SO | 08h-20h | pluie | 6.2 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 19 | 175° S | aucun | pluie | 4.5 | 9°C |
| Lac du Bourget - Cap des Séselets | 7 | 21 | 207° SSO | aucun | pluie | 5.4 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 160° SSE | aucun | pluie | 3.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 180° S | aucun | pluie | 1.3 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 179° S | aucun | pluie | 6.1 | 11°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 195° SSO | 17h-20h | couvert | 0.4 | 11°C |
| Cruas - Nuclear Spot | 5 | 13 | 224° SO | aucun | pluie | 6.7 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 24 | 174° S | 17h-20h | soleil-couvert | 0.9 | 11°C |
| Nord du Pont de Chavanay | 12 | 24 | 174° S | 17h-20h | soleil-couvert | 0.9 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 25 | 177° S | 17h-20h | pluie | 2.3 | 11°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 170° S | 17h-20h | soleil-couvert | 0.9 | 11°C |
| Saint-Romain-des-Iles | 5 | 9 | 184° S | aucun | pluie | 9.0 | 10°C |
| Nord du Pont d'Arciat | 5 | 9 | 184° S | aucun | pluie | 9.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 179° S | aucun | pluie | 7.4 | 11°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 27 | 220° SO | 08h-16h | pluie | 4.5 | 11°C |
| Plage d'Excenevex | 17 | 27 | 220° SO | 08h-20h | pluie | 4.3 | 11°C |
| Plage du Vengeron | 17 | 27 | 220° SO | 08h-16h | pluie | 4.5 | 11°C |
| Plage d'Hermance | 17 | 27 | 220° SO | 08h-16h | pluie | 4.5 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 18 | 196° SSO | aucun | pluie | 4.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 8 | 20 | 218° SO | aucun | pluie | 6.2 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 22 | 166° SSE | aucun | pluie | 3.7 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 19 | 187° S | aucun | pluie | 1.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 7 | 108° ESE | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 115° ESE | aucun | soleil-couvert | 0.6 | 13°C |
| Cruas - Nuclear Spot | 2 | 10 | 315° NO | aucun | soleil-couvert | 0.6 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 126° SE | aucun | pluie | 3.8 | 13°C |
| Nord du Pont de Chavanay | 3 | 9 | 126° SE | aucun | pluie | 3.8 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 155° SSE | aucun | soleil | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 141° SE | aucun | pluie | 1.2 | 12°C |
| Saint-Romain-des-Iles | 8 | 18 | 189° S | aucun | pluie | 2.4 | 12°C |
| Nord du Pont d'Arciat | 8 | 18 | 189° S | aucun | pluie | 2.4 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 182° S | aucun | soleil | 0.6 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 15 | 213° SSO | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 9 | 17 | 228° SO | aucun | soleil | 0.0 | 11°C |
| Plage du Vengeron | 7 | 15 | 213° SSO | aucun | soleil | 0.0 | 11°C |
| Plage d'Hermance | 7 | 15 | 213° SSO | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 292° ONO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 34° NE | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 358° N | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 352° N | aucun | soleil | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 4° N | aucun | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 1° N | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 10 | 22 | 14° NNE | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 25° NNE | aucun | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 6 | 13 | 25° NNE | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 43° NE | aucun | soleil | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 24° NNE | aucun | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 3 | 7 | 129° SE | aucun | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 7 | 129° SE | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 359° N | aucun | soleil-couvert | 0.0 | 10°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 9 | 10° N | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 4 | 7 | 32° NNE | aucun | soleil | 0.0 | 10°C |
| Plage du Vengeron | 3 | 9 | 10° N | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 3 | 9 | 10° N | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 241° OSO | aucun | soleil | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 18° NNE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 182° S | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 188° S | aucun | soleil | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 192° SSO | aucun | soleil | 0.1 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 192° SSO | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 4 | 10 | 193° SSO | aucun | soleil | 0.1 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 192° SSO | aucun | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 19 | 192° SSO | aucun | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 179° S | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 181° S | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 5 | 10 | 168° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 10 | 168° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 159° SSE | aucun | soleil-couvert | 0.0 | 12°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 198° SSO | aucun | pluie | 18.8 | 11°C |
| Plage d'Excenevex | 3 | 7 | 33° NNE | aucun | orage | 18.7 | 11°C |
| Plage du Vengeron | 4 | 6 | 198° SSO | aucun | pluie | 18.8 | 11°C |
| Plage d'Hermance | 4 | 6 | 198° SSO | aucun | pluie | 18.8 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 176° S | aucun | orage | 13.2 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 33° NNE | aucun | orage | 10.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 17 | 187° S | aucun | pluie | 4.7 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 17 | 176° S | aucun | pluie | 5.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 209° SSO | aucun | pluie | 9.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 200° SSO | 08h-15h | pluie | 4.0 | 12°C |
| Cruas - Nuclear Spot | 11 | 25 | 174° S | 08h-11h | pluie | 2.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 28 | 184° S | 08h-15h | pluie | 4.4 | 12°C |
| Nord du Pont de Chavanay | 13 | 28 | 184° S | 08h-15h | pluie | 4.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 32 | 178° S | 08h-15h | pluie | 3.4 | 12°C |
| Saint-Cyr-sur-le-Rhône | 16 | 33 | 177° S | 08h-15h | pluie | 3.4 | 11°C |
| Saint-Romain-des-Iles | 13 | 25 | 308° NO | 17h-20h | pluie | 5.2 | 13°C |
| Nord du Pont d'Arciat | 13 | 25 | 308° NO | 17h-20h | pluie | 5.2 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 22 | 310° NO | aucun | pluie | 8.0 | 12°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 15 | 222° SO | aucun | pluie | 1.4 | 8°C |
| Plage d'Excenevex | 11 | 17 | 229° SO | aucun | couvert | 0.7 | 8°C |
| Plage du Vengeron | 9 | 15 | 222° SO | aucun | pluie | 1.4 | 8°C |
| Plage d'Hermance | 9 | 15 | 222° SO | aucun | pluie | 1.4 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 246° OSO | aucun | soleil-couvert | 0.9 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 206° SSO | aucun | pluie | 1.2 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 348° NNO | aucun | soleil-couvert | 0.9 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 25 | 339° NNO | aucun | couvert | 0.8 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 18 | 30° NNE | aucun | soleil | 0.6 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 17 | 360° N | aucun | soleil | 0.1 | 9°C |
| Cruas - Nuclear Spot | 8 | 22 | 4° N | aucun | soleil-couvert | 0.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 110° ESE | aucun | soleil-couvert | 0.8 | 8°C |
| Nord du Pont de Chavanay | 3 | 9 | 110° ESE | aucun | soleil-couvert | 0.8 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 112° ESE | aucun | soleil-couvert | 0.8 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 116° ESE | aucun | soleil-couvert | 0.8 | 8°C |
| Saint-Romain-des-Iles | 7 | 14 | 167° SSE | aucun | pluie | 1.4 | 8°C |
| Nord du Pont d'Arciat | 7 | 14 | 167° SSE | aucun | pluie | 1.4 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 168° SSE | aucun | pluie | 2.0 | 8°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 16 | 235° SO | aucun | pluie | 2.2 | 9°C |
| Plage d'Excenevex | 5 | 17 | 219° SO | aucun | pluie | 1.5 | 8°C |
| Plage du Vengeron | 7 | 16 | 235° SO | aucun | pluie | 2.2 | 9°C |
| Plage d'Hermance | 7 | 16 | 235° SO | aucun | pluie | 2.2 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 14 | 134° SE | aucun | pluie | 3.3 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 247° OSO | aucun | pluie | 4.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 165° SSE | aucun | pluie | 1.6 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 146° SE | aucun | pluie | 2.2 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 187° S | aucun | pluie | 2.2 | 8°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 197° SSO | 16h-20h | pluie | 1.3 | 8°C |
| Cruas - Nuclear Spot | 5 | 11 | 241° OSO | aucun | pluie | 1.9 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 179° S | 16h-20h | pluie | 2.6 | 8°C |
| Nord du Pont de Chavanay | 12 | 27 | 179° S | 16h-20h | pluie | 2.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 32 | 171° S | 15h-20h | pluie | 3.3 | 8°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 172° S | 15h-20h | pluie | 3.3 | 7°C |
| Saint-Romain-des-Iles | 12 | 21 | 180° S | 16h-20h | pluie | 3.2 | 7°C |
| Nord du Pont d'Arciat | 12 | 21 | 180° S | 16h-20h | pluie | 3.2 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 26 | 175° S | 16h-20h | pluie | 1.9 | 9°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 212° SSO | aucun | pluie | 2.5 | 11°C |
| Plage d'Excenevex | 10 | 15 | 229° SO | aucun | pluie | 1.2 | 10°C |
| Plage du Vengeron | 8 | 14 | 212° SSO | aucun | pluie | 2.5 | 11°C |
| Plage d'Hermance | 8 | 14 | 212° SSO | aucun | pluie | 2.5 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 316° NO | aucun | pluie | 3.6 | 6°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 360° N | aucun | soleil-couvert | 0.6 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 26 | 343° NNO | aucun | pluie | 6.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 29 | 342° NNO | aucun | pluie | 4.2 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 7° N | 11h-20h | soleil | 0.3 | 10°C |
| La Roche-de-Glun - Base Nautique | 16 | 30 | 4° N | 11h-20h | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 16 | 36 | 10° N | 11h-20h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 353° N | 12h-15h | soleil-couvert | 0.2 | 9°C |
| Nord du Pont de Chavanay | 11 | 25 | 353° N | 12h-15h | soleil-couvert | 0.2 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 340° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 346° NNO | aucun | soleil-couvert | 0.6 | 9°C |
| Saint-Romain-des-Iles | 12 | 20 | 331° NNO | 08h-12h | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 12 | 20 | 331° NNO | 08h-12h | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 22 | 333° NNO | aucun | soleil-couvert | 0.6 | 9°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 11 | 43° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 10 | 44° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 5 | 11 | 43° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 5 | 11 | 43° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 6 | 312° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 13° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 162° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 180° S | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 19 | 17° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 198° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 6 | 22 | 18° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 187° S | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 3 | 9 | 187° S | aucun | soleil-couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 225° SO | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 187° S | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 4 | 9 | 172° S | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 4 | 9 | 172° S | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 159° SSE | aucun | soleil-couvert | 0.0 | 6°C |
