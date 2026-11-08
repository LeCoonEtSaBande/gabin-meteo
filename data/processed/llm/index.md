# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 08/11/2026 13:01 (Europe/Paris)
- Fichiers générés le : 2026-11-08T13:04:45+01:00
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

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 207° SSO | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 3 | 5 | 237° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 5 | 47° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 4 | 5 | 39° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 340° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 7 | 135° SE | aucun | pluie | 1.1 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 201° SSO | 14h-17h | couvert | 0.1 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 16 | 200° SSO | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 11 | 203° SSO | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 151° SSE | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 4 | 8 | 192° SSO | aucun | couvert | 0.4 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 18 | 161° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 10 | 19 | 168° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 171° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 189° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 5 | 7 | 34° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 5 | 6 | 36° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 193° SSO | aucun | soleil-couvert | 0.0 | 12°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 67° ENE | aucun | couvert | 0.2 | 12°C |
| Plage d'Excenevex | 4 | 7 | 85° E | aucun | couvert | 0.3 | 12°C |
| Plage du Vengeron | 4 | 5 | 15° NNE | aucun | couvert | 0.2 | 12°C |
| Plage d'Hermance | 4 | 7 | 79° E | aucun | couvert | 0.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 342° NNO | aucun | couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 13 | 18 | 227° SO | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 33 | 191° S | 08h-20h | couvert | 0.5 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 22 | 183° S | 08h-14h | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 208° SSO | 09h-19h | pluie | 2.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 11 | 27 | 181° S | 11h-14h | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 7 | 14 | 212° SSO | aucun | pluie | 3.9 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 25 | 184° S | 09h-19h | couvert | 0.2 | 16°C |
| Nord du Pont de Chavanay | 14 | 25 | 183° S | 09h-20h | couvert | 0.4 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 40 | 181° S | 08h-20h | couvert | 0.1 | 16°C |
| Saint-Cyr-sur-le-Rhône | 16 | 34 | 199° SSO | 08h-20h | couvert | 0.3 | 16°C |
| Saint-Romain-des-Iles | 14 | 23 | 174° S | 13h-18h | couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 16 | 24 | 181° S | 13h-20h | couvert | 0.2 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 28 | 194° SSO | 10h-20h | couvert | 0.0 | 15°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 245° OSO | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 3 | 4 | 159° SSE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 8 | 248° OSO | aucun | couvert | 0.0 | 17°C |
| Plage d'Hermance | 4 | 6 | 28° NNE | aucun | couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 142° SE | aucun | soleil-couvert | 0.3 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 9 | 178° S | aucun | soleil-couvert | 0.9 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 167° SSE | aucun | orage | 26.5 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 201° SSO | aucun | orage | 21.5 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 12 | 208° SSO | aucun | soleil-couvert | 0.3 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 14 | 199° SSO | aucun | soleil-couvert | 0.1 | 16°C |
| Cruas - Nuclear Spot | 3 | 4 | 86° E | aucun | orage | 3.4 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 158° SSE | aucun | pluie | 1.5 | 18°C |
| Nord du Pont de Chavanay | 8 | 15 | 158° SSE | aucun | pluie | 1.5 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 181° S | aucun | pluie | 1.3 | 17°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 181° S | aucun | pluie | 1.3 | 17°C |
| Saint-Romain-des-Iles | 6 | 10 | 207° SSO | aucun | pluie | 1.0 | 15°C |
| Nord du Pont d'Arciat | 6 | 11 | 193° SSO | aucun | pluie | 1.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 11 | 172° S | aucun | soleil-couvert | 0.0 | 16°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 225° SO | aucun | couvert | 0.8 | 16°C |
| Plage d'Excenevex | 4 | 7 | 257° OSO | aucun | pluie | 2.0 | 14°C |
| Plage du Vengeron | 4 | 6 | 188° S | aucun | pluie | 1.1 | 17°C |
| Plage d'Hermance | 6 | 9 | 201° SSO | aucun | pluie | 1.1 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 124° SE | aucun | pluie | 6.5 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 45° NE | aucun | couvert | 0.5 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 181° S | 09h-20h | pluie | 3.8 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 186° S | aucun | couvert | 0.2 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 187° S | 10h-16h | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 14 | 23 | 179° S | 10h-17h | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 5 | 10 | 210° SSO | aucun | couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 161° SSE | aucun | soleil-couvert | 0.1 | 18°C |
| Nord du Pont de Chavanay | 10 | 17 | 161° SSE | aucun | soleil-couvert | 0.1 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 190° S | aucun | couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 190° S | aucun | couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 12 | 200° SSO | aucun | pluie | 1.3 | 18°C |
| Nord du Pont d'Arciat | 6 | 12 | 200° SSO | aucun | pluie | 1.3 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 198° SSO | aucun | couvert | 0.1 | 17°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 51° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 8 | 10 | 41° NE | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 5 | 7 | 34° NE | aucun | couvert | 0.0 | 15°C |
| Plage d'Hermance | 5 | 10 | 63° ENE | aucun | couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 62° ENE | aucun | couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 47° NE | aucun | couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 20 | 188° S | aucun | pluie | 1.5 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 346° NNO | aucun | pluie | 3.8 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 8 | 189° S | aucun | pluie | 2.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 5 | 9 | 167° SSE | aucun | pluie | 1.7 | 17°C |
| Cruas - Nuclear Spot | 3 | 8 | 349° N | aucun | pluie | 4.1 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 18 | 167° SSE | aucun | couvert | 0.5 | 18°C |
| Nord du Pont de Chavanay | 6 | 18 | 167° SSE | aucun | couvert | 0.5 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 17 | 163° SSE | aucun | couvert | 0.8 | 17°C |
| Saint-Cyr-sur-le-Rhône | 6 | 17 | 162° SSE | aucun | couvert | 0.9 | 17°C |
| Saint-Romain-des-Iles | 4 | 9 | 141° SE | aucun | pluie | 1.7 | 17°C |
| Nord du Pont d'Arciat | 4 | 9 | 141° SE | aucun | pluie | 1.7 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 155° SSE | aucun | pluie | 1.3 | 18°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 27 | 36° NE | 14h-20h | pluie | 3.0 | 11°C |
| Plage d'Excenevex | 17 | 27 | 36° NE | 14h-20h | pluie | 3.0 | 11°C |
| Plage du Vengeron | 17 | 27 | 36° NE | 14h-20h | pluie | 3.0 | 11°C |
| Plage d'Hermance | 17 | 27 | 36° NE | 14h-20h | pluie | 3.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 315° NO | aucun | orage | 22.5 | 10°C |
| Lac du Bourget - Cap des Séselets | 7 | 19 | 27° NNE | aucun | couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 15 | 327° NNO | aucun | pluie | 18.8 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 350° N | aucun | pluie | 8.7 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 26 | 3° N | 13h-20h | pluie | 8.6 | 11°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 352° N | 12h-20h | pluie | 12.6 | 10°C |
| Cruas - Nuclear Spot | 11 | 23 | 17° NNE | aucun | pluie | 9.7 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 23 | 340° NNO | 17h-20h | pluie | 2.5 | 10°C |
| Nord du Pont de Chavanay | 11 | 23 | 340° NNO | 17h-20h | pluie | 2.5 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 22 | 332° NNO | 14h-20h | pluie | 8.7 | 9°C |
| Saint-Cyr-sur-le-Rhône | 12 | 24 | 333° NNO | 14h-20h | pluie | 8.8 | 10°C |
| Saint-Romain-des-Iles | 12 | 22 | 344° NNO | 08h-20h | pluie | 9.6 | 9°C |
| Nord du Pont d'Arciat | 12 | 22 | 344° NNO | 08h-20h | pluie | 9.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 23 | 335° NNO | 14h-20h | pluie | 2.7 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 32 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 20 | 32 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 20 | 32 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 20 | 32 | 33° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 337° NNO | aucun | couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 329° NNO | aucun | couvert | 0.4 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 17 | 358° N | aucun | couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 26 | 11° N | aucun | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 23 | 2° N | aucun | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 12 | 26 | 17° NNE | 08h-12h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 38° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 5 | 14 | 38° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 16 | 311° NO | aucun | soleil | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 17° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 6 | 16 | 337° NNO | aucun | soleil | 0.0 | 6°C |
| Nord du Pont d'Arciat | 6 | 16 | 337° NNO | aucun | soleil | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 16 | 315° NO | aucun | soleil-couvert | 0.0 | 8°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 6 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 6 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 6 | 9 | 33° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 328° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 23° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 174° S | aucun | couvert | 0.3 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 19 | 172° S | aucun | couvert | 0.9 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 205° SSO | aucun | couvert | 0.1 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 201° SSO | aucun | couvert | 0.1 | 14°C |
| Cruas - Nuclear Spot | 5 | 16 | 255° OSO | aucun | couvert | 0.2 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 179° S | 11h-17h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 11 | 25 | 179° S | 11h-17h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 167° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 173° S | 11h-19h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 14 | 168° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 8 | 14 | 168° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 147° SSE | aucun | soleil-couvert | 0.0 | 14°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 18° NNE | aucun | couvert | 0.1 | 12°C |
| Plage d'Excenevex | 5 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 6 | 10 | 18° NNE | aucun | couvert | 0.1 | 12°C |
| Plage d'Hermance | 6 | 10 | 18° NNE | aucun | couvert | 0.1 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 93° E | aucun | couvert | 0.1 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 17° NNE | aucun | pluie | 0.5 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 23 | 177° S | aucun | couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 22 | 163° SSE | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 214° SO | 12h-16h | couvert | 0.3 | 15°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 200° SSO | 12h-20h | pluie | 0.6 | 15°C |
| Cruas - Nuclear Spot | 10 | 23 | 186° S | aucun | pluie | 1.3 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 32 | 189° S | 10h-20h | soleil-couvert | 0.4 | 16°C |
| Nord du Pont de Chavanay | 13 | 32 | 189° S | 10h-20h | soleil-couvert | 0.4 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 35 | 178° S | 13h-20h | soleil-couvert | 0.3 | 16°C |
| Saint-Cyr-sur-le-Rhône | 15 | 34 | 182° S | 11h-20h | soleil-couvert | 0.4 | 16°C |
| Saint-Romain-des-Iles | 10 | 19 | 164° SSE | aucun | soleil-couvert | 0.1 | 15°C |
| Nord du Pont d'Arciat | 10 | 19 | 164° SSE | aucun | soleil-couvert | 0.1 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 27 | 187° S | 17h-20h | couvert | 0.1 | 14°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 192° SSO | aucun | pluie | 21.8 | 8°C |
| Plage d'Excenevex | 6 | 12 | 244° OSO | aucun | pluie | 20.9 | 9°C |
| Plage du Vengeron | 5 | 9 | 192° SSO | aucun | pluie | 21.8 | 8°C |
| Plage d'Hermance | 5 | 9 | 192° SSO | aucun | pluie | 21.8 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 320° NO | aucun | pluie | 25.1 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 76° ENE | aucun | pluie | 23.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 26 | 342° NNO | aucun | orage | 28.4 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 28 | 342° NNO | aucun | pluie | 26.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 17° NNE | 16h-20h | couvert | 0.4 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 17° NNE | aucun | pluie | 13.2 | 10°C |
| Cruas - Nuclear Spot | 8 | 21 | 10° N | aucun | pluie | 15.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 338° NNO | aucun | pluie | 9.1 | 9°C |
| Nord du Pont de Chavanay | 9 | 18 | 338° NNO | aucun | pluie | 9.1 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 325° NO | aucun | pluie | 7.2 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 332° NNO | aucun | pluie | 8.5 | 9°C |
| Saint-Romain-des-Iles | 12 | 21 | 309° NO | 11h-15h | pluie | 1.5 | 9°C |
| Nord du Pont d'Arciat | 12 | 21 | 309° NO | 11h-15h | pluie | 1.5 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 17 | 321° NO | aucun | pluie | 9.1 | 9°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 90° E | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 3 | 7 | 34° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 4 | 7 | 90° E | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 4 | 7 | 90° E | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 108° ESE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 14° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 24 | 350° N | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 25 | 348° NNO | aucun | couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 15° NNE | aucun | soleil-couvert | 0.2 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 8° N | aucun | soleil-couvert | 0.3 | 9°C |
| Cruas - Nuclear Spot | 10 | 23 | 17° NNE | aucun | soleil-couvert | 0.3 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 3° N | aucun | soleil-couvert | 0.3 | 9°C |
| Nord du Pont de Chavanay | 5 | 14 | 3° N | aucun | soleil-couvert | 0.3 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 179° S | aucun | soleil-couvert | 0.3 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 353° N | aucun | soleil-couvert | 0.3 | 8°C |
| Saint-Romain-des-Iles | 5 | 12 | 185° S | aucun | soleil-couvert | 0.1 | 8°C |
| Nord du Pont d'Arciat | 5 | 12 | 185° S | aucun | soleil-couvert | 0.1 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 158° SSE | aucun | soleil-couvert | 0.1 | 8°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 224° SO | aucun | soleil-couvert | 0.6 | 10°C |
| Plage d'Excenevex | 7 | 15 | 205° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 9 | 12 | 224° SO | aucun | soleil-couvert | 0.6 | 10°C |
| Plage d'Hermance | 9 | 12 | 224° SO | aucun | soleil-couvert | 0.6 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 140° SE | aucun | pluie | 2.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 28° NNE | aucun | pluie | 2.8 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 194° SSO | aucun | soleil-couvert | 0.7 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 197° SSO | aucun | soleil-couvert | 0.6 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 183° S | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 183° S | 11h-15h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 6 | 15 | 205° SSO | aucun | couvert | 0.1 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 156° SSE | aucun | soleil-couvert | 0.6 | 11°C |
| Nord du Pont de Chavanay | 10 | 22 | 156° SSE | aucun | soleil-couvert | 0.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 27 | 157° SSE | 10h-20h | pluie | 0.5 | 10°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 153° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 8 | 15 | 166° SSE | aucun | pluie | 7.4 | 11°C |
| Nord du Pont d'Arciat | 8 | 15 | 166° SSE | aucun | pluie | 7.4 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 182° S | 13h-18h | soleil-couvert | 0.7 | 11°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 204° SSO | 08h-17h | pluie | 1.0 | 9°C |
| Plage d'Excenevex | 13 | 19 | 220° SO | 08h-20h | soleil-couvert | 0.7 | 10°C |
| Plage du Vengeron | 11 | 17 | 204° SSO | 08h-17h | pluie | 1.0 | 9°C |
| Plage d'Hermance | 11 | 17 | 204° SSO | 08h-17h | pluie | 1.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 141° SE | aucun | pluie | 4.5 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 196° SSO | aucun | pluie | 4.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 8° N | aucun | pluie | 1.9 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 1° N | aucun | pluie | 1.9 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 45° NE | aucun | soleil | 0.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 63° ENE | aucun | soleil | 0.6 | 12°C |
| Cruas - Nuclear Spot | 4 | 11 | 328° NNO | aucun | pluie | 1.2 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 11 | 113° ESE | aucun | pluie | 3.6 | 11°C |
| Nord du Pont de Chavanay | 1 | 11 | 113° ESE | aucun | pluie | 3.6 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 11 | 329° NNO | aucun | pluie | 3.6 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 10 | 231° SO | aucun | pluie | 3.0 | 11°C |
| Saint-Romain-des-Iles | 6 | 14 | 268° O | aucun | soleil-couvert | 0.6 | 10°C |
| Nord du Pont d'Arciat | 6 | 14 | 268° O | aucun | soleil-couvert | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 13 | 224° SO | aucun | soleil | 0.6 | 10°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 214° SO | aucun | pluie | 1.1 | 8°C |
| Plage d'Excenevex | 10 | 15 | 226° SO | aucun | couvert | 0.2 | 9°C |
| Plage du Vengeron | 9 | 13 | 214° SO | aucun | pluie | 1.1 | 8°C |
| Plage d'Hermance | 9 | 13 | 214° SO | aucun | pluie | 1.1 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 207° SSO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 233° SO | aucun | pluie | 1.2 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 358° N | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 19 | 357° N | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 23° NNE | aucun | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 14° NNE | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 7 | 16 | 47° NE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 111° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 2 | 8 | 111° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 144° SE | aucun | soleil-couvert | 0.6 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 123° ESE | aucun | soleil-couvert | 0.6 | 9°C |
| Saint-Romain-des-Iles | 4 | 12 | 179° S | aucun | pluie | 1.2 | 9°C |
| Nord du Pont d'Arciat | 4 | 12 | 179° S | aucun | pluie | 1.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 178° S | aucun | soleil-couvert | 0.6 | 9°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 11 | 56° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 5 | 8 | 28° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 5 | 11 | 56° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 5 | 11 | 56° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 81° E | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 18° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 184° S | aucun | soleil-couvert | 0.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 188° S | aucun | soleil-couvert | 0.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 184° S | aucun | soleil-couvert | 0.1 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 196° SSO | aucun | soleil-couvert | 0.1 | 10°C |
| Cruas - Nuclear Spot | 3 | 8 | 239° OSO | aucun | pluie | 0.5 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 184° S | aucun | couvert | 0.1 | 9°C |
| Nord du Pont de Chavanay | 4 | 11 | 184° S | aucun | couvert | 0.1 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 194° SSO | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 179° S | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 4 | 9 | 220° SO | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 4 | 9 | 220° SO | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 143° SE | aucun | couvert | 0.0 | 8°C |
