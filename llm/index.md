# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 19/11/2026 00:26 (Europe/Paris)
- Fichiers générés le : 2026-11-19T00:30:27+01:00
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

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 23 | 31 | 212° SSO | 08h-20h | pluie | 5.3 | 11°C |
| Plage d'Excenevex | 18 | 27 | 201° SSO | 08h-20h | pluie | 2.8 | 11°C |
| Plage du Vengeron | 20 | 27 | 200° SSO | 08h-20h | pluie | 5.0 | 11°C |
| Plage d'Hermance | 21 | 40 | 236° SO | 08h-20h | pluie | 2.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 15 | 20 | 252° OSO | 08h-12h | soleil-couvert | 0.6 | 12°C |
| Lac du Bourget - Cap des Séselets | 10 | 12 | 348° NNO | aucun | pluie | 6.9 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 18° NNE | aucun | pluie | 0.8 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 15 | 53° NE | aucun | couvert | 0.3 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 12 | 198° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 173° S | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 6 | 11 | 191° S | aucun | soleil-couvert | 0.1 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 18 | 184° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 8 | 14 | 179° S | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 219° SO | aucun | couvert | 0.1 | 15°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 228° SO | aucun | couvert | 0.1 | 14°C |
| Saint-Romain-des-Iles | 12 | 19 | 252° OSO | aucun | pluie | 0.8 | 12°C |
| Nord du Pont d'Arciat | 13 | 21 | 234° SO | 13h-17h | couvert | 0.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 223° SO | aucun | couvert | 0.1 | 15°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 31 | 195° SSO | 08h-20h | pluie | 1.2 | 11°C |
| Plage d'Excenevex | 18 | 23 | 205° SSO | 08h-20h | soleil-couvert | 0.9 | 11°C |
| Plage du Vengeron | 18 | 23 | 201° SSO | 08h-20h | pluie | 3.6 | 12°C |
| Plage d'Hermance | 16 | 24 | 207° SSO | 08h-20h | pluie | 2.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 141° SE | aucun | pluie | 5.9 | 11°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 147° SSE | aucun | pluie | 4.8 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 147° SSE | aucun | pluie | 1.1 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 133° SE | aucun | couvert | 0.5 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 208° SSO | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 173° S | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 6 | 11 | 207° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 16 | 162° SSE | aucun | pluie | 0.7 | 12°C |
| Nord du Pont de Chavanay | 9 | 16 | 161° SSE | aucun | pluie | 1.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 176° S | aucun | soleil-couvert | 0.3 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 216° SO | aucun | couvert | 0.5 | 12°C |
| Saint-Romain-des-Iles | 11 | 17 | 197° SSO | aucun | soleil-couvert | 0.7 | 11°C |
| Nord du Pont d'Arciat | 11 | 18 | 195° SSO | 11h-14h | pluie | 1.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 20 | 196° SSO | 12h-18h | soleil-couvert | 0.3 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 220° SO | aucun | soleil-couvert | 0.2 | 12°C |
| Plage d'Excenevex | 8 | 11 | 231° SO | aucun | soleil-couvert | 0.2 | 12°C |
| Plage du Vengeron | 8 | 11 | 220° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 7 | 11 | 222° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 79° E | aucun | soleil-couvert | 0.3 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 149° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 40° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 8 | 15° NNE | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 342° NNO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 5 | 10 | 9° N | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 142° SE | aucun | couvert | 0.1 | 13°C |
| Nord du Pont de Chavanay | 3 | 4 | 142° SE | aucun | couvert | 0.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 4 | 345° NNO | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 2 | 4 | 345° NNO | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 3 | 6 | 164° SSE | aucun | couvert | 0.1 | 12°C |
| Nord du Pont d'Arciat | 3 | 6 | 164° SSE | aucun | couvert | 0.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 3 | 62° ENE | aucun | couvert | 0.3 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 29 | 217° SO | 13h-20h | pluie | 9.1 | 12°C |
| Plage d'Excenevex | 19 | 27 | 208° SSO | 14h-20h | pluie | 4.8 | 12°C |
| Plage du Vengeron | 16 | 21 | 220° SO | 14h-20h | pluie | 5.6 | 12°C |
| Plage d'Hermance | 16 | 24 | 207° SSO | 14h-20h | pluie | 4.5 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 15 | 257° OSO | aucun | orage | 29.6 | 10°C |
| Lac du Bourget - Cap des Séselets | 9 | 15 | 204° SSO | aucun | orage | 23.2 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 28 | 168° SSE | aucun | orage | 14.1 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 198° SSO | aucun | orage | 12.3 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 169° S | aucun | pluie | 2.9 | 15°C |
| La Roche-de-Glun - Base Nautique | 12 | 22 | 187° S | aucun | pluie | 1.0 | 15°C |
| Cruas - Nuclear Spot | 9 | 18 | 265° O | aucun | pluie | 1.1 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 18 | 169° S | aucun | couvert | 0.3 | 15°C |
| Nord du Pont de Chavanay | 10 | 18 | 169° S | aucun | couvert | 0.3 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 22 | 186° S | aucun | pluie | 0.7 | 13°C |
| Saint-Cyr-sur-le-Rhône | 12 | 22 | 186° S | aucun | pluie | 0.7 | 13°C |
| Saint-Romain-des-Iles | 16 | 28 | 251° OSO | 12h-20h | pluie | 2.0 | 14°C |
| Nord du Pont d'Arciat | 16 | 28 | 251° OSO | 12h-20h | pluie | 2.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 20 | 268° O | aucun | pluie | 4.5 | 14°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 220° SO | aucun | couvert | 0.4 | 10°C |
| Plage d'Excenevex | 8 | 10 | 223° SO | aucun | couvert | 0.9 | 9°C |
| Plage du Vengeron | 9 | 15 | 218° SO | aucun | couvert | 0.8 | 10°C |
| Plage d'Hermance | 7 | 11 | 189° S | aucun | couvert | 0.9 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 119° ESE | aucun | pluie | 2.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 117° ESE | aucun | pluie | 2.4 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 25° NNE | 08h-11h | pluie | 4.7 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 3° N | aucun | pluie | 2.6 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 9° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 15° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 9 | 20 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 10° N | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 9 | 10° N | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 19 | 323° NO | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 7 | 21 | 327° NNO | aucun | couvert | 0.3 | 10°C |
| Saint-Romain-des-Iles | 7 | 22 | 302° ONO | aucun | pluie | 2.2 | 9°C |
| Nord du Pont d'Arciat | 7 | 22 | 302° ONO | aucun | pluie | 2.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 17 | 322° NO | aucun | pluie | 1.7 | 9°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 8° N | aucun | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 5 | 9 | 8° N | aucun | couvert | 0.0 | 6°C |
| Plage du Vengeron | 5 | 9 | 8° N | aucun | couvert | 0.0 | 6°C |
| Plage d'Hermance | 5 | 9 | 8° N | aucun | couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 9 | 106° ESE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 103° ESE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 16 | 134° SE | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 14 | 196° SSO | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 17° NNE | aucun | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 5° N | aucun | couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 8 | 19 | 26° NNE | aucun | couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 11° N | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 4 | 10 | 11° N | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 16° NNE | aucun | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 7° N | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 7 | 201° SSO | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 2 | 7 | 201° SSO | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 121° ESE | aucun | couvert | 0.0 | 6°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 360° N | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 6 | 10 | 360° N | aucun | couvert | 0.0 | 8°C |
| Plage du Vengeron | 6 | 10 | 360° N | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 6 | 10 | 360° N | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 104° ESE | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 25° NNE | aucun | couvert | 0.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 22 | 167° SSE | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 18 | 173° S | aucun | couvert | 0.3 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 21° NNE | aucun | pluie | 10.9 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 17° NNE | aucun | pluie | 12.6 | 9°C |
| Cruas - Nuclear Spot | 4 | 12 | 319° NO | aucun | pluie | 9.1 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 351° N | aucun | pluie | 7.8 | 9°C |
| Nord du Pont de Chavanay | 6 | 13 | 351° N | aucun | pluie | 7.8 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 325° NO | aucun | pluie | 6.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 340° NNO | aucun | pluie | 7.2 | 9°C |
| Saint-Romain-des-Iles | 11 | 19 | 306° NO | aucun | pluie | 4.2 | 9°C |
| Nord du Pont d'Arciat | 11 | 19 | 306° NO | aucun | pluie | 4.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 308° NO | aucun | pluie | 6.6 | 8°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 10 | 188° S | aucun | pluie | 1.8 | 7°C |
| Plage d'Excenevex | 4 | 11 | 189° S | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 5 | 10 | 188° S | aucun | pluie | 1.8 | 7°C |
| Plage d'Hermance | 5 | 10 | 188° S | aucun | pluie | 1.8 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 279° O | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 188° S | aucun | pluie | 1.8 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 21 | 351° N | aucun | soleil-couvert | 0.6 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 23 | 348° NNO | aucun | soleil-couvert | 0.6 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 16° NNE | 10h-15h | pluie | 1.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 19° NNE | aucun | pluie | 3.6 | 7°C |
| Cruas - Nuclear Spot | 12 | 26 | 15° NNE | 11h-16h | couvert | 0.3 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 11 | 36° NE | aucun | pluie | 8.5 | 7°C |
| Nord du Pont de Chavanay | 5 | 11 | 36° NE | aucun | pluie | 8.5 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 43° NE | aucun | pluie | 7.3 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 36° NE | aucun | pluie | 8.5 | 6°C |
| Saint-Romain-des-Iles | 2 | 12 | 319° NO | aucun | pluie | 9.1 | 7°C |
| Nord du Pont d'Arciat | 2 | 12 | 319° NO | aucun | pluie | 9.1 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 50° NE | aucun | pluie | 5.5 | 7°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 38° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 9 | 42° NE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 5 | 9 | 38° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 5 | 9 | 38° NE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 336° NNO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 36° NE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 25° NNE | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 11 | 9° N | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 356° N | 08h-16h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 352° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 14 | 31 | 10° N | 08h-17h | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 14 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 325° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 341° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 7 | 330° NNO | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 2 | 7 | 330° NNO | aucun | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 360° N | aucun | soleil-couvert | 0.0 | 9°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 226° SO | aucun | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 4 | 6 | 190° S | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 5 | 8 | 226° SO | aucun | soleil | 0.0 | 9°C |
| Plage d'Hermance | 5 | 8 | 226° SO | aucun | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 218° SO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 2° N | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 184° S | aucun | soleil | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 192° SSO | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 186° S | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 183° S | 12h-15h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 12 | 210° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 166° SSE | 11h-16h | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 11 | 25 | 166° SSE | 11h-16h | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 173° S | 12h-16h | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 167° SSE | 11h-16h | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 8 | 15 | 175° S | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 8 | 15 | 175° S | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 170° S | aucun | soleil-couvert | 0.0 | 11°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 226° SO | aucun | pluie | 3.7 | 9°C |
| Plage d'Excenevex | 3 | 6 | 154° SSE | aucun | pluie | 1.8 | 9°C |
| Plage du Vengeron | 5 | 9 | 226° SO | aucun | pluie | 3.7 | 9°C |
| Plage d'Hermance | 5 | 9 | 226° SO | aucun | pluie | 3.7 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 112° ESE | aucun | couvert | 0.1 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 10° N | aucun | couvert | 0.7 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 164° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 162° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 7 | 203° SSO | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 2 | 9 | 230° SO | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 1 | 4 | 315° NO | aucun | couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 133° SE | aucun | couvert | 0.6 | 11°C |
| Nord du Pont de Chavanay | 3 | 9 | 133° SE | aucun | couvert | 0.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 164° SSE | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 134° SE | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 6 | 171° S | aucun | pluie | 4.1 | 8°C |
| Nord du Pont d'Arciat | 3 | 6 | 171° S | aucun | pluie | 4.1 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 152° SSE | aucun | pluie | 1.5 | 9°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 187° S | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 4 | 7 | 176° S | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 3 | 6 | 187° S | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 3 | 6 | 187° S | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 107° ESE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 34° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 127° SE | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 7 | 4° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 6 | 320° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 3 | 7 | 354° N | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 118° ESE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 2 | 7 | 118° ESE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 188° S | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 103° ESE | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 7 | 230° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 7 | 230° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 3 | 198° SSO | aucun | couvert | 0.0 | 9°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 250° OSO | 16h-20h | pluie | 1.7 | 12°C |
| Plage d'Excenevex | 9 | 12 | 247° OSO | aucun | pluie | 1.4 | 12°C |
| Plage du Vengeron | 14 | 18 | 250° OSO | 16h-20h | pluie | 1.7 | 12°C |
| Plage d'Hermance | 14 | 18 | 250° OSO | 16h-20h | pluie | 1.7 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 16 | 143° SE | aucun | pluie | 1.3 | 10°C |
| Lac du Bourget - Cap des Séselets | 6 | 20 | 230° SO | aucun | pluie | 1.6 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 27 | 169° S | aucun | pluie | 0.6 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 26 | 166° SSE | aucun | pluie | 0.6 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 21 | 177° S | 15h-19h | pluie | 1.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 192° SSO | 08h-20h | pluie | 3.6 | 12°C |
| Cruas - Nuclear Spot | 10 | 23 | 170° S | aucun | pluie | 5.7 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 33 | 183° S | 09h-20h | pluie | 1.8 | 13°C |
| Nord du Pont de Chavanay | 13 | 33 | 183° S | 09h-20h | pluie | 1.8 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 19 | 40 | 172° S | 08h-20h | pluie | 1.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 15 | 36 | 174° S | 08h-20h | pluie | 1.7 | 12°C |
| Saint-Romain-des-Iles | 15 | 27 | 177° S | 09h-20h | pluie | 4.1 | 12°C |
| Nord du Pont d'Arciat | 15 | 27 | 177° S | 09h-20h | pluie | 4.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 36 | 180° S | 08h-20h | pluie | 1.6 | 13°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 214° SO | 09h-20h | pluie | 7.8 | 7°C |
| Plage d'Excenevex | 21 | 30 | 216° SO | 08h-20h | pluie | 6.2 | 8°C |
| Plage du Vengeron | 18 | 25 | 214° SO | 09h-20h | pluie | 7.8 | 7°C |
| Plage d'Hermance | 18 | 25 | 214° SO | 09h-20h | pluie | 7.8 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 24 | 202° SSO | aucun | pluie | 9.9 | 4°C |
| Lac du Bourget - Cap des Séselets | 9 | 26 | 212° SSO | aucun | pluie | 8.6 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 168° SSE | aucun | pluie | 4.3 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 180° S | aucun | pluie | 4.1 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 188° S | aucun | soleil | 0.6 | 11°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 193° SSO | 11h-15h | soleil-couvert | 0.6 | 10°C |
| Cruas - Nuclear Spot | 10 | 24 | 203° SSO | aucun | soleil | 0.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 23 | 195° SSO | aucun | pluie | 1.2 | 10°C |
| Nord du Pont de Chavanay | 9 | 23 | 195° SSO | aucun | pluie | 1.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 26 | 207° SSO | aucun | pluie | 1.3 | 10°C |
| Saint-Cyr-sur-le-Rhône | 9 | 26 | 193° SSO | aucun | pluie | 1.8 | 9°C |
| Saint-Romain-des-Iles | 11 | 24 | 236° SO | aucun | pluie | 2.4 | 8°C |
| Nord du Pont d'Arciat | 11 | 24 | 236° SO | aucun | pluie | 2.4 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 26 | 199° SSO | aucun | pluie | 2.2 | 9°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 200° SSO | aucun | pluie | 3.0 |  |
| Plage d'Excenevex | 10 | 16 | 216° SO | aucun | pluie | 2.4 |  |
| Plage du Vengeron | 8 | 14 | 200° SSO | aucun | pluie | 3.0 |  |
| Plage d'Hermance | 8 | 14 | 200° SSO | aucun | pluie | 3.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 255° OSO | aucun | couvert | 0.6 |  |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 197° SSO | aucun | pluie | 1.2 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 24 | 353° N | aucun | couvert | 0.6 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 26 | 352° N | aucun | couvert | 0.6 |  |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 24 | 13° NNE | aucun | soleil-couvert | 0.6 |  |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 9° N | aucun | soleil | 0.6 |  |
| Cruas - Nuclear Spot | 11 | 24 | 18° NNE | aucun | soleil | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 348° NNO | aucun | soleil-couvert | 0.6 |  |
| Nord du Pont de Chavanay | 9 | 20 | 348° NNO | aucun | soleil-couvert | 0.6 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 337° NNO | aucun | soleil-couvert | 0.6 |  |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 343° NNO | aucun | soleil-couvert | 0.6 |  |
| Saint-Romain-des-Iles | 10 | 17 | 318° NO | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 10 | 17 | 318° NO | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 328° NNO | aucun | soleil-couvert | 0.6 |  |
