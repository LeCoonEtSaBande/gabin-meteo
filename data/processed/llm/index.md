# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 04/11/2026 14:07 (Europe/Paris)
- Fichiers générés le : 2026-11-04T14:10:21+01:00
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
| Plage de la pointe - Messery | 16 | 21 | 45° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 15 | 22 | 29° NNE | 08h-14h | couvert | 0.0 | 10°C |
| Plage du Vengeron | 14 | 19 | 44° NE | 08h-19h | couvert | 0.0 | 10°C |
| Plage d'Hermance | 15 | 21 | 46° NE | 08h-20h | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 12 | 318° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 342° NNO | 12h-16h | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 196° SSO | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 338° NNO | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 21 | 12° NNE | aucun | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 351° N | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 11 | 23 | 20° NNE | aucun | couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 23° NNE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 7 | 13 | 33° NNE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 333° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 21° NNE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 5 | 9 | 42° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 6 | 11 | 33° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 56° NE | aucun | soleil-couvert | 0.0 | 9°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 30° NNE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 9 | 13 | 53° NE | aucun | soleil | 0.0 | 11°C |
| Plage du Vengeron | 7 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 8 | 10 | 80° E | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 319° NO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 25° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 217° SO | aucun | soleil-couvert | 0.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 12 | 349° N | aucun | couvert | 0.2 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 10 | 7° N | aucun | orage | 10.6 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 3° N | aucun | orage | 8.8 | 12°C |
| Cruas - Nuclear Spot | 9 | 16 | 25° NNE | aucun | orage | 16.4 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 9 | 337° NNO | aucun | pluie | 2.9 | 12°C |
| Nord du Pont de Chavanay | 4 | 7 | 36° NE | aucun | pluie | 2.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 292° ONO | aucun | pluie | 1.4 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 32° NNE | aucun | pluie | 1.6 | 12°C |
| Saint-Romain-des-Iles | 4 | 8 | 34° NE | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 5 | 7 | 36° NE | aucun | couvert | 0.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 332° NNO | aucun | couvert | 0.3 | 11°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 236° SO | aucun | pluie | 1.4 | 10°C |
| Plage d'Excenevex | 4 | 5 | 112° ESE | aucun | pluie | 1.7 | 10°C |
| Plage du Vengeron | 4 | 5 | 28° NNE | aucun | pluie | 0.7 | 11°C |
| Plage d'Hermance | 4 | 6 | 247° OSO | aucun | pluie | 1.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 331° NNO | aucun | pluie | 2.9 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 25° NNE | aucun | pluie | 1.5 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 197° SSO | aucun | pluie | 3.3 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 354° N | aucun | pluie | 2.5 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 13 | 344° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 332° NNO | aucun | soleil-couvert | 0.1 | 11°C |
| Cruas - Nuclear Spot | 9 | 16 | 1° N | aucun | pluie | 0.6 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 5 | 9 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 45° NE | aucun | couvert | 0.1 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 39° NE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 4 | 5 | 351° N | aucun | couvert | 0.6 | 9°C |
| Nord du Pont d'Arciat | 3 | 5 | 98° E | aucun | couvert | 0.9 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 82° E | aucun | pluie | 0.8 | 9°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 3 | 337° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 4 | 5 | 37° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 4 | 25° NNE | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 3 | 5 | 152° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 299° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 237° OSO | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 187° S | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 351° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 357° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 19 | 15° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 11 | 50° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 11 | 50° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 45° NE | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 45° NE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 3 | 7 | 59° ENE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 3 | 7 | 59° ENE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 2 | 270° O | aucun | couvert | 0.0 | 8°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 213° SSO | aucun | couvert | 0.6 | 10°C |
| Plage d'Excenevex | 3 | 4 | 180° S | aucun | couvert | 0.8 | 10°C |
| Plage du Vengeron | 3 | 4 | 196° SSO | aucun | couvert | 0.9 | 10°C |
| Plage d'Hermance | 3 | 5 | 207° SSO | aucun | couvert | 0.9 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 332° NNO | aucun | pluie | 1.1 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 47° NE | aucun | soleil-couvert | 0.4 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 175° S | 12h-20h | couvert | 0.1 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 153° SSE | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 21 | 214° SO | aucun | couvert | 0.9 | 11°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 203° SSO | aucun | couvert | 0.4 | 11°C |
| Cruas - Nuclear Spot | 4 | 10 | 237° OSO | aucun | pluie | 2.5 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 26 | 174° S | 11h-14h | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 15 | 26 | 174° S | 11h-14h | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 30 | 188° S | 11h-14h | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 15 | 30 | 188° S | 11h-14h | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 8 | 13 | 190° S | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 8 | 13 | 190° S | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 22 | 176° S | aucun | soleil-couvert | 0.0 | 13°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 16 | 243° OSO | aucun | pluie | 4.2 | 16°C |
| Plage d'Excenevex | 6 | 16 | 243° OSO | aucun | pluie | 4.2 | 16°C |
| Plage du Vengeron | 6 | 16 | 243° OSO | aucun | pluie | 4.2 | 16°C |
| Plage d'Hermance | 6 | 16 | 243° OSO | aucun | pluie | 4.2 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 13 | 134° SE | aucun | pluie | 4.5 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 301° ONO | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 172° S | aucun | pluie | 2.4 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 166° SSE | aucun | pluie | 3.9 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 195° SSO | 14h-19h | couvert | 0.3 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 201° SSO | 08h-20h | couvert | 0.3 | 15°C |
| Cruas - Nuclear Spot | 10 | 22 | 181° S | aucun | pluie | 2.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 32 | 185° S | 08h-20h | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 14 | 32 | 185° S | 08h-20h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 35 | 178° S | 08h-20h | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 16 | 36 | 176° S | 08h-20h | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 12 | 23 | 166° SSE | 09h-16h | couvert | 0.3 | 15°C |
| Nord du Pont d'Arciat | 12 | 23 | 166° SSE | 09h-16h | couvert | 0.3 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 19 | 196° SSO | aucun | couvert | 0.0 | 15°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 49° NE | aucun | orage | 9.0 | 18°C |
| Plage d'Excenevex | 4 | 7 | 49° NE | aucun | orage | 9.0 | 18°C |
| Plage du Vengeron | 4 | 7 | 49° NE | aucun | orage | 9.0 | 18°C |
| Plage d'Hermance | 4 | 7 | 49° NE | aucun | orage | 9.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 115° ESE | aucun | pluie | 9.6 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 6° N | aucun | couvert | 0.1 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 28 | 171° S | aucun | pluie | 1.6 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 17 | 175° S | aucun | couvert | 0.6 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 194° SSO | aucun | couvert | 0.7 | 17°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 193° SSO | 14h-20h | couvert | 0.1 | 17°C |
| Cruas - Nuclear Spot | 8 | 22 | 195° SSO | aucun | pluie | 1.5 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 179° S | 08h-20h | pluie | 1.8 | 17°C |
| Nord du Pont de Chavanay | 12 | 28 | 179° S | 08h-20h | pluie | 1.8 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 31 | 172° S | 08h-20h | pluie | 2.4 | 16°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 170° S | 08h-20h | pluie | 5.4 | 16°C |
| Saint-Romain-des-Iles | 11 | 21 | 166° SSE | 10h-17h | soleil-couvert | 0.4 | 17°C |
| Nord du Pont d'Arciat | 11 | 21 | 166° SSE | 10h-17h | soleil-couvert | 0.4 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 136° SE | aucun | pluie | 1.2 | 17°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 246° OSO | aucun | pluie | 3.6 | 14°C |
| Plage d'Excenevex | 6 | 9 | 246° OSO | aucun | pluie | 2.9 | 14°C |
| Plage du Vengeron | 6 | 9 | 246° OSO | aucun | pluie | 3.6 | 14°C |
| Plage d'Hermance | 6 | 9 | 246° OSO | aucun | pluie | 3.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 12 | 107° ESE | aucun | pluie | 4.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 15 | 17° NNE | aucun | pluie | 2.1 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 27 | 153° SSE | aucun | pluie | 7.7 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 26 | 143° SE | aucun | pluie | 7.3 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 181° S | aucun | pluie | 8.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 23 | 188° S | 09h-14h | pluie | 3.4 | 16°C |
| Cruas - Nuclear Spot | 12 | 28 | 166° SSE | 10h-17h | pluie | 4.8 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 195° SSO | 08h-13h | pluie | 2.4 | 16°C |
| Nord du Pont de Chavanay | 11 | 26 | 195° SSO | 08h-13h | pluie | 2.4 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 28 | 178° S | 08h-16h | orage | 12.9 | 16°C |
| Saint-Cyr-sur-le-Rhône | 13 | 30 | 179° S | 08h-14h | orage | 6.3 | 16°C |
| Saint-Romain-des-Iles | 9 | 21 | 163° SSE | aucun | pluie | 5.5 | 17°C |
| Nord du Pont d'Arciat | 9 | 21 | 163° SSE | aucun | pluie | 5.5 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 193° SSO | 12h-15h | pluie | 3.0 | 16°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 28° NNE | aucun | pluie | 2.4 | 14°C |
| Plage d'Excenevex | 5 | 8 | 18° NNE | aucun | couvert | 0.6 | 14°C |
| Plage du Vengeron | 5 | 9 | 28° NNE | aucun | pluie | 2.4 | 14°C |
| Plage d'Hermance | 5 | 9 | 28° NNE | aucun | pluie | 2.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 328° NNO | aucun | couvert | 0.6 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 10° N | aucun | couvert | 0.6 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 23 | 162° SSE | aucun | pluie | 2.5 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 27 | 157° SSE | aucun | pluie | 1.3 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 19 | 225° SO | aucun | pluie | 30.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 22 | 190° S | aucun | pluie | 14.0 | 16°C |
| Cruas - Nuclear Spot | 10 | 23 | 193° SSO | aucun | pluie | 22.4 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 185° S | aucun | pluie | 4.5 | 16°C |
| Nord du Pont de Chavanay | 10 | 24 | 185° S | aucun | pluie | 4.5 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 29 | 179° S | aucun | pluie | 2.3 | 16°C |
| Saint-Cyr-sur-le-Rhône | 11 | 27 | 176° S | 15h-20h | pluie | 1.8 | 16°C |
| Saint-Romain-des-Iles | 8 | 19 | 152° SSE | aucun | pluie | 4.4 | 16°C |
| Nord du Pont d'Arciat | 8 | 19 | 152° SSE | aucun | pluie | 4.4 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 121° ESE | aucun | pluie | 2.0 | 15°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 236° SO | aucun | pluie | 1.8 | 14°C |
| Plage d'Excenevex | 3 | 6 | 342° NNO | aucun | couvert | 0.8 | 14°C |
| Plage du Vengeron | 3 | 5 | 236° SO | aucun | pluie | 1.8 | 14°C |
| Plage d'Hermance | 3 | 5 | 236° SO | aucun | pluie | 1.8 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 117° ESE | aucun | pluie | 2.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 32° NNE | aucun | pluie | 3.5 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 9 | 221° SO | aucun | pluie | 9.7 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 10 | 180° S | aucun | pluie | 6.7 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 155° SSE | aucun | pluie | 7.3 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 151° SSE | aucun | pluie | 3.1 | 15°C |
| Cruas - Nuclear Spot | 2 | 8 | 206° SSO | aucun | pluie | 6.2 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 163° SSE | aucun | pluie | 5.6 | 15°C |
| Nord du Pont de Chavanay | 5 | 12 | 163° SSE | aucun | pluie | 5.6 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 183° S | aucun | pluie | 10.4 | 15°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 180° S | aucun | pluie | 5.2 | 15°C |
| Saint-Romain-des-Iles | 3 | 10 | 229° SO | aucun | pluie | 1.3 | 15°C |
| Nord du Pont d'Arciat | 3 | 10 | 229° SO | aucun | pluie | 1.3 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 137° SE | aucun | pluie | 6.7 | 15°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 61° ENE | aucun | pluie | 1.3 | 8°C |
| Plage d'Excenevex | 12 | 18 | 42° NE | aucun | pluie | 1.2 | 8°C |
| Plage du Vengeron | 8 | 11 | 61° ENE | aucun | pluie | 1.3 | 8°C |
| Plage d'Hermance | 8 | 11 | 61° ENE | aucun | pluie | 1.3 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 17 | 345° NNO | aucun | pluie | 1.2 | 4°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 4° N | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 348° NNO | aucun | soleil-couvert | 0.6 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 24 | 345° NNO | aucun | soleil-couvert | 0.6 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 37 | 4° N | 08h-20h | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 358° N | 08h-20h | soleil | 0.0 | 7°C |
| Cruas - Nuclear Spot | 17 | 38 | 10° N | 08h-20h | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 28 | 355° N | 08h-19h | soleil | 0.0 | 7°C |
| Nord du Pont de Chavanay | 13 | 28 | 355° N | 08h-19h | soleil | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 349° N | 08h-13h | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 351° N | 08h-18h | soleil | 0.0 | 7°C |
| Saint-Romain-des-Iles | 11 | 20 | 340° NNO | 08h-11h | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 11 | 20 | 340° NNO | 08h-11h | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 26 | 345° NNO | 08h-11h | soleil-couvert | 0.0 | 7°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 44° NE | aucun | pluie | 3.6 | 5°C |
| Plage d'Excenevex | 11 | 17 | 24° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 7 | 11 | 44° NE | aucun | pluie | 3.6 | 5°C |
| Plage d'Hermance | 7 | 11 | 44° NE | aucun | pluie | 3.6 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 348° NNO | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 25° NNE | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 27 | 347° NNO | aucun | soleil | 0.0 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 28 | 348° NNO | aucun | soleil | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 8° N | 08h-20h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 4° N | 08h-20h | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 19 | 42 | 13° NNE | 08h-20h | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 0° N | 11h-19h | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 12 | 27 | 0° N | 11h-19h | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 354° N | 12h-16h | couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 358° N | 11h-18h | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 9 | 16 | 338° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 9 | 16 | 338° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 351° N | aucun | soleil-couvert | 0.0 | 6°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 55° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 9 | 13 | 33° NNE | aucun | soleil | 0.0 | 7°C |
| Plage du Vengeron | 9 | 14 | 55° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 9 | 14 | 55° NE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 15 | 344° NNO | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 52° NE | aucun | soleil | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 7° N | aucun | soleil | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 15 | 7° N | aucun | soleil | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 31 | 6° N | 08h-20h | soleil | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 0° N | 08h-19h | soleil | 0.0 | 7°C |
| Cruas - Nuclear Spot | 15 | 34 | 15° NNE | 08h-20h | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 347° NNO | aucun | soleil | 0.0 | 7°C |
| Nord du Pont de Chavanay | 10 | 24 | 347° NNO | aucun | soleil | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 340° NNO | aucun | soleil | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 340° NNO | aucun | soleil | 0.0 | 6°C |
| Saint-Romain-des-Iles | 8 | 15 | 353° N | aucun | soleil | 0.0 | 6°C |
| Nord du Pont d'Arciat | 8 | 15 | 353° N | aucun | soleil | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 19 | 341° NNO | aucun | soleil | 0.0 | 6°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 15° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 8 | 12 | 8° N | aucun | soleil | 0.0 | 7°C |
| Plage du Vengeron | 10 | 14 | 15° NNE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 10 | 14 | 15° NNE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 309° NO | aucun | soleil | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 207° SSO | aucun | soleil | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 24° NNE | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 32° NNE | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 9° N | aucun | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 358° N | aucun | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 10 | 22 | 25° NNE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 9° N | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 6 | 15 | 9° N | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 337° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 359° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 5 | 11 | 30° NNE | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 5 | 11 | 30° NNE | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 324° NO | aucun | soleil-couvert | 0.0 | 6°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 14 | 30° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 6 | 12 | 19° NNE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 7 | 14 | 30° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 7 | 14 | 30° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 321° NO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 166° SSE | aucun | soleil | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 324° NO | aucun | soleil | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 10° N | aucun | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 307° NO | aucun | soleil | 0.0 | 6°C |
| Cruas - Nuclear Spot | 5 | 14 | 16° NNE | aucun | soleil | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 63° ENE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 2 | 7 | 63° ENE | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 75° ENE | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 66° ENE | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 2 | 7 | 140° SE | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 2 | 7 | 140° SE | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 150° SSE | aucun | soleil-couvert | 0.0 | 4°C |
