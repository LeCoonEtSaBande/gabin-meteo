# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 03/11/2026 00:56 (Europe/Paris)
- Fichiers générés le : 2026-11-03T00:59:24+01:00
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

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 24 | 29° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 17 | 25 | 23° NNE | 08h-20h | couvert | 0.2 | 9°C |
| Plage du Vengeron | 15 | 21 | 28° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 17 | 23 | 30° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 14 | 327° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 1° N | 17h-20h | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 12° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 348° NNO | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 20 | 10° N | 09h-16h | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 347° NNO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 12 | 24 | 25° NNE | 08h-17h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 16 | 30° NNE | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 8 | 14 | 31° NNE | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 335° NNO | aucun | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 15° NNE | aucun | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 7 | 11 | 2° N | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 7 | 11 | 352° N | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 332° NNO | aucun | soleil | 0.0 | 8°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 50° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 17 | 23 | 28° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 13 | 18 | 42° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 13 | 20 | 47° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 293° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 11 | 16 | 7° N | 08h-11h | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 6 | 193° SSO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 345° NNO | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 10° N | aucun | pluie | 1.5 | 8°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 317° NO | aucun | pluie | 1.4 | 8°C |
| Cruas - Nuclear Spot | 11 | 22 | 23° NNE | 14h-18h | couvert | 0.5 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 73° ENE | aucun | pluie | 0.6 | 9°C |
| Nord du Pont de Chavanay | 6 | 12 | 79° E | aucun | pluie | 0.5 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 10 | 348° NNO | aucun | couvert | 0.1 | 8°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 11° N | aucun | couvert | 0.1 | 8°C |
| Saint-Romain-des-Iles | 5 | 9 | 24° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 6 | 8 | 358° N | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 3 | 13° NNE | aucun | soleil-couvert | 0.0 | 7°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 66° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 13 | 17 | 44° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 8 | 10 | 25° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 8 | 12 | 80° E | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 331° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 13 | 49° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 201° SSO | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 347° NNO | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 11 | 29° NNE | aucun | soleil-couvert | 0.5 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 17° NNE | aucun | soleil-couvert | 0.3 | 12°C |
| Cruas - Nuclear Spot | 6 | 12 | 18° NNE | aucun | pluie | 2.7 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 33° NNE | aucun | soleil-couvert | 0.1 | 12°C |
| Nord du Pont de Chavanay | 5 | 10 | 33° NNE | aucun | soleil-couvert | 0.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 13° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 13° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 3 | 7 | 50° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 3 | 7 | 50° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 252° OSO | aucun | soleil-couvert | 0.0 | 12°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 72° ENE | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 4 | 5 | 146° SE | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 6 | 19° NNE | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 4 | 6 | 61° ENE | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 14° NNE | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 51° NE | aucun | pluie | 3.7 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 192° SSO | aucun | orage | 14.7 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 351° N | aucun | orage | 19.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 29° NNE | aucun | pluie | 3.4 | 12°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 39° NE | aucun | pluie | 2.6 | 12°C |
| Cruas - Nuclear Spot | 5 | 18 | 35° NE | aucun | pluie | 6.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 7 | 358° N | aucun | pluie | 2.5 | 10°C |
| Nord du Pont de Chavanay | 4 | 7 | 358° N | aucun | pluie | 2.5 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 6 | 344° NNO | aucun | pluie | 2.5 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 6 | 344° NNO | aucun | pluie | 2.5 | 10°C |
| Saint-Romain-des-Iles | 3 | 7 | 135° SE | aucun | pluie | 1.2 | 8°C |
| Nord du Pont d'Arciat | 3 | 7 | 135° SE | aucun | pluie | 1.2 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 300° ONO | aucun | pluie | 1.8 | 9°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 207° SSO | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 4 | 3° N | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 4 | 65° ENE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 3 | 5 | 230° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 317° NO | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 184° S | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 22° NNE | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 8° N | 12h-16h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 9° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 11 | 25 | 20° NNE | 10h-13h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 12° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 7 | 17 | 12° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 357° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 357° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 5 | 10 | 342° NNO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 5 | 10 | 342° NNO | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 343° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 2° N | aucun | pluie | 4.5 | 11°C |
| Plage d'Excenevex | 6 | 9 | 2° N | aucun | pluie | 4.5 | 11°C |
| Plage du Vengeron | 6 | 9 | 2° N | aucun | pluie | 4.5 | 11°C |
| Plage d'Hermance | 6 | 9 | 2° N | aucun | pluie | 4.5 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 108° ESE | aucun | pluie | 6.8 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 24 | 157° SSE | aucun | pluie | 3.1 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 167° SSE | aucun | pluie | 2.2 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 14 | 181° S | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 193° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 191° S | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 11 | 191° S | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 212° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 187° S | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 7 | 140° SE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 7 | 140° SE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 118° ESE | aucun | soleil-couvert | 0.0 | 8°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 18° NNE | aucun | orage | 27.4 | 12°C |
| Plage d'Excenevex | 4 | 6 | 18° NNE | aucun | orage | 27.4 | 12°C |
| Plage du Vengeron | 4 | 6 | 18° NNE | aucun | orage | 27.4 | 12°C |
| Plage d'Hermance | 4 | 6 | 18° NNE | aucun | orage | 27.4 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 116° ESE | aucun | pluie | 14.5 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 18° NNE | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 24 | 159° SSE | aucun | pluie | 7.2 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 178° S | aucun | pluie | 7.8 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 14 | 212° SSO | aucun | pluie | 1.2 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 207° SSO | aucun | couvert | 0.6 | 12°C |
| Cruas - Nuclear Spot | 6 | 14 | 193° SSO | aucun | pluie | 3.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 25 | 177° S | 15h-19h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 10 | 25 | 177° S | 15h-19h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 169° S | 10h-18h | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 167° SSE | 09h-20h | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 9 | 15 | 170° S | aucun | couvert | 0.1 | 14°C |
| Nord du Pont d'Arciat | 9 | 15 | 170° S | aucun | couvert | 0.1 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 183° S | aucun | couvert | 0.2 | 14°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 30° NNE | aucun | pluie | 4.8 | 12°C |
| Plage d'Excenevex | 6 | 10 | 31° NNE | aucun | pluie | 2.4 | 12°C |
| Plage du Vengeron | 6 | 10 | 30° NNE | aucun | pluie | 4.8 | 12°C |
| Plage d'Hermance | 6 | 10 | 30° NNE | aucun | pluie | 4.8 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 11 | 104° ESE | aucun | soleil-couvert | 0.1 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 23° NNE | aucun | pluie | 6.1 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 180° S | aucun | pluie | 16.8 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 165° SSE | aucun | pluie | 4.8 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 218° SO | aucun | couvert | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 178° S | aucun | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 2 | 5 | 256° OSO | aucun | pluie | 8.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 172° S | aucun | couvert | 0.1 | 16°C |
| Nord du Pont de Chavanay | 6 | 16 | 172° S | aucun | couvert | 0.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 161° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 164° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 5 | 10 | 162° SSE | aucun | soleil-couvert | 0.6 | 15°C |
| Nord du Pont d'Arciat | 5 | 10 | 162° SSE | aucun | soleil-couvert | 0.6 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 155° SSE | aucun | soleil-couvert | 0.0 | 17°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 36° NE | aucun | pluie | 1.8 | 12°C |
| Plage d'Excenevex | 6 | 11 | 33° NNE | aucun | soleil-couvert | 0.6 | 11°C |
| Plage du Vengeron | 6 | 11 | 36° NE | aucun | pluie | 1.8 | 12°C |
| Plage d'Hermance | 6 | 11 | 36° NE | aucun | pluie | 1.8 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 197° SSO | aucun | pluie | 6.6 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 29° NNE | aucun | pluie | 9.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 160° SSE | aucun | pluie | 5.5 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 16 | 154° SSE | aucun | pluie | 5.6 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 159° SSE | aucun | pluie | 7.1 | 16°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 167° SSE | aucun | pluie | 14.7 | 16°C |
| Cruas - Nuclear Spot | 2 | 13 | 228° SO | aucun | pluie | 16.4 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 158° SSE | aucun | couvert | 0.2 | 16°C |
| Nord du Pont de Chavanay | 9 | 20 | 158° SSE | aucun | couvert | 0.2 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 170° S | aucun | pluie | 4.2 | 16°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 156° SSE | aucun | couvert | 0.6 | 16°C |
| Saint-Romain-des-Iles | 3 | 9 | 142° SE | aucun | pluie | 2.4 | 15°C |
| Nord du Pont d'Arciat | 3 | 9 | 142° SE | aucun | pluie | 2.4 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 121° ESE | aucun | pluie | 4.2 | 16°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 30° NNE | aucun | pluie | 5.5 | 11°C |
| Plage d'Excenevex | 7 | 10 | 19° NNE | aucun | pluie | 4.2 | 11°C |
| Plage du Vengeron | 7 | 10 | 30° NNE | aucun | pluie | 5.5 | 11°C |
| Plage d'Hermance | 7 | 10 | 30° NNE | aucun | pluie | 5.5 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 33° NNE | aucun | pluie | 10.9 | 9°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 26° NNE | aucun | pluie | 9.6 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 11 | 194° SSO | aucun | pluie | 16.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 14 | 293° ONO | aucun | pluie | 17.7 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 9 | 11° N | aucun | pluie | 18.1 | 13°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 342° NNO | aucun | pluie | 16.3 | 13°C |
| Cruas - Nuclear Spot | 4 | 13 | 35° NE | aucun | pluie | 23.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 340° NNO | aucun | pluie | 11.5 | 12°C |
| Nord du Pont de Chavanay | 5 | 9 | 340° NNO | aucun | pluie | 11.5 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 342° NNO | aucun | pluie | 15.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 341° NNO | aucun | pluie | 12.1 | 12°C |
| Saint-Romain-des-Iles | 3 | 5 | 333° NNO | aucun | pluie | 9.6 | 11°C |
| Nord du Pont d'Arciat | 3 | 5 | 333° NNO | aucun | pluie | 9.6 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 333° NNO | aucun | pluie | 14.4 | 12°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 51° NE | aucun | couvert | 0.0 | 10°C |
| Plage d'Excenevex | 10 | 14 | 23° NNE | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 8 | 12 | 51° NE | aucun | couvert | 0.0 | 10°C |
| Plage d'Hermance | 8 | 12 | 51° NE | aucun | couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 320° NO | aucun | couvert | 0.1 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 27° NNE | aucun | couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 20° NNE | aucun | couvert | 0.6 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 27° NNE | aucun | couvert | 0.6 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 5° N | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 357° N | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 9 | 21 | 15° NNE | aucun | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 6° N | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 14 | 6° N | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 13 | 342° NNO | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 359° N | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 12 | 346° NNO | aucun | couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 12 | 346° NNO | aucun | couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 336° NNO | aucun | couvert | 0.0 | 12°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 33° NNE | aucun | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 10 | 14 | 17° NNE | aucun | couvert | 0.0 | 10°C |
| Plage du Vengeron | 8 | 12 | 33° NNE | aucun | couvert | 0.0 | 9°C |
| Plage d'Hermance | 8 | 12 | 33° NNE | aucun | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 335° NNO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 42° NE | aucun | couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 360° N | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 350° N | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 5° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 354° N | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 22 | 26° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 18° NNE | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 15 | 18° NNE | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 2° N | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 12° NNE | aucun | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 6 | 13 | 353° N | aucun | couvert | 0.6 | 9°C |
| Nord du Pont d'Arciat | 6 | 13 | 353° N | aucun | couvert | 0.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 329° NNO | aucun | couvert | 0.0 | 9°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 25 | 24° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 18 | 25 | 24° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage du Vengeron | 17 | 25 | 24° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 17 | 25 | 24° NNE | 08h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 16 | 357° N | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 44° NE | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 354° N | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 342° NNO | aucun | couvert | 0.7 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 3° N | 08h-20h | couvert | 0.1 | 10°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 355° N | 08h-20h | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 13 | 28 | 14° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 349° N | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 9 | 21 | 349° N | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 341° NNO | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 10 | 20 | 343° NNO | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 10 | 19 | 347° NNO | 15h-20h | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 10 | 19 | 347° NNO | 15h-20h | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 338° NNO | aucun | couvert | 0.0 | 9°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 33° NNE | 08h-20h | couvert | 0.0 | 6°C |
| Plage d'Excenevex | 12 | 18 | 23° NNE | 08h-20h | couvert | 0.0 | 6°C |
| Plage du Vengeron | 13 | 18 | 33° NNE | 08h-20h | couvert | 0.0 | 6°C |
| Plage d'Hermance | 13 | 18 | 33° NNE | 08h-20h | couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 350° N | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 47° NE | aucun | couvert | 0.6 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 308° NO | aucun | pluie | 3.3 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 231° SO | aucun | pluie | 4.6 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 357° N | aucun | pluie | 16.3 | 6°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 344° NNO | aucun | pluie | 13.3 | 6°C |
| Cruas - Nuclear Spot | 12 | 25 | 13° NNE | 08h-20h | pluie | 14.2 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 15 | 27° NNE | aucun | pluie | 8.2 | 6°C |
| Nord du Pont de Chavanay | 5 | 15 | 27° NNE | aucun | pluie | 8.2 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 348° NNO | aucun | pluie | 5.7 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 16 | 7° N | aucun | pluie | 7.0 | 6°C |
| Saint-Romain-des-Iles | 4 | 9 | 315° NO | aucun | pluie | 1.8 | 7°C |
| Nord du Pont d'Arciat | 4 | 9 | 315° NO | aucun | pluie | 1.8 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 321° NO | aucun | pluie | 2.4 | 6°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 13 | 40° NE | aucun | couvert | 0.0 |  |
| Plage d'Excenevex | 6 | 13 | 44° NE | aucun | couvert | 0.0 |  |
| Plage du Vengeron | 6 | 13 | 40° NE | aucun | couvert | 0.0 |  |
| Plage d'Hermance | 6 | 13 | 40° NE | aucun | couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 318° NO | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 27° NNE | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 235° SO | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 8 | 253° OSO | aucun | couvert | 0.6 |  |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 1° N | aucun | couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 341° NNO | aucun | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 11 | 28 | 15° NNE | aucun | couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 48° NE | aucun | couvert | 0.6 |  |
| Nord du Pont de Chavanay | 4 | 11 | 48° NE | aucun | couvert | 0.6 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 6° N | aucun | couvert | 0.6 |  |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 11° N | aucun | couvert | 0.6 |  |
| Saint-Romain-des-Iles | 2 | 7 | 58° ENE | aucun | couvert | 0.6 |  |
| Nord du Pont d'Arciat | 2 | 7 | 58° ENE | aucun | couvert | 0.6 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 31° NNE | aucun | couvert | 0.0 |  |
