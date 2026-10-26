# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 26/10/2026 12:18 (Europe/Paris)
- Fichiers générés le : 2026-10-26T12:21:25+01:00
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

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 203° SSO | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 4 | 6 | 225° SO | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 4 | 202° SSO | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 5 | 6 | 194° SSO | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 347° NNO | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 13° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 14 | 3° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 12 | 345° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 7° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 333° NNO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 10 | 21 | 22° NNE | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 5 | 298° ONO | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 3 | 5 | 322° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 7 | 117° ESE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 43° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 4 | 10 | 190° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 5 | 9 | 202° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 67° ENE | aucun | soleil-couvert | 0.0 | 12°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 207° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 3 | 5 | 222° SO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 2 | 3 | 360° N | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 4 | 5 | 183° S | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 57° ENE | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 108° ESE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 9 | 347° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 337° NNO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 191° S | 12h-16h | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 156° SSE | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 8 | 15 | 196° SSO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 157° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 6 | 11 | 166° SSE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 159° SSE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 203° SSO | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 11 | 196° SSO | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 8 | 13 | 197° SSO | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 175° S | aucun | soleil | 0.0 | 15°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 32° NNE | 15h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 16 | 22 | 26° NNE | 15h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 13 | 17 | 27° NNE | 16h-20h | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 11 | 16 | 39° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 13 | 306° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 6 | 7 | 18° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 16° NNE | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 347° NNO | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 30 | 16° NNE | 08h-20h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 16 | 27 | 8° N | 10h-20h | couvert | 0.1 | 14°C |
| Cruas - Nuclear Spot | 18 | 37 | 15° NNE | 08h-20h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 25 | 353° N | 08h-18h | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 14 | 25 | 353° N | 10h-18h | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 358° N | 11h-18h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 23 | 358° N | 11h-18h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 12 | 20 | 17° NNE | 10h-18h | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 12 | 20 | 17° NNE | 10h-18h | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 23 | 356° N | 09h-20h | soleil-couvert | 0.0 | 14°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 42° NE | 08h-12h | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 14 | 20 | 33° NNE | 08h-11h | couvert | 0.0 | 13°C |
| Plage du Vengeron | 10 | 14 | 50° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 10 | 16 | 55° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 295° ONO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 7 | 15 | 46° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 5 | 201° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 351° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 12° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 14 | 7° N | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 11 | 21 | 19° NNE | 08h-11h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 14° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 14° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 11 | 61° ENE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 6 | 11 | 61° ENE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 4° N | aucun | couvert | 0.0 | 12°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 50° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 13 | 16 | 23° NNE | 17h-20h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 7 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 6 | 10 | 44° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 302° ONO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 7 | 14 | 58° ENE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 340° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 359° N | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 337° NNO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 7 | 16 | 19° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 22° NNE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 12 | 22° NNE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 25° NNE | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 20° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 8 | 54° NE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 3 | 8 | 54° NE | aucun | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 341° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 20 | 42° NE | 10h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 12 | 20 | 42° NE | 10h-20h | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 12 | 20 | 42° NE | 10h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 12 | 20 | 42° NE | 10h-20h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 321° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 32° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 333° NNO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 15° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 5° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 354° N | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 8 | 19 | 34° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 34° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 5 | 13 | 34° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 24° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 29° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 5 | 10 | 34° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 5 | 10 | 34° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 2° N | aucun | soleil-couvert | 0.0 | 12°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 19 | 40° NE | 08h-16h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 12 | 19 | 40° NE | 08h-16h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 12 | 19 | 40° NE | 08h-16h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 12 | 19 | 40° NE | 08h-16h | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 323° NO | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 217° SO | aucun | soleil | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 351° N | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 28° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 7° N | 12h-20h | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 360° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 24 | 17° NNE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 30° NNE | aucun | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 6 | 16 | 30° NNE | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 30° NNE | aucun | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 21° NNE | aucun | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 6 | 12 | 1° N | aucun | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 12 | 1° N | aucun | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 341° NNO | aucun | soleil-couvert | 0.0 | 10°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 39° NE | 09h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 11 | 17 | 39° NE | 09h-20h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 12 | 18 | 39° NE | 09h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 12 | 18 | 39° NE | 09h-20h | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 333° NNO | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 209° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 325° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 15° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 13° NNE | 08h-15h | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 11° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 26 | 27° NNE | 09h-14h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 359° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 19 | 359° N | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 17 | 351° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 9 | 18 | 348° NNO | aucun | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 9 | 18 | 348° NNO | aucun | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 336° NNO | aucun | soleil | 0.0 | 11°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 24° NNE | aucun | pluie | 1.9 | 9°C |
| Plage d'Excenevex | 11 | 16 | 12° NNE | aucun | pluie | 1.3 | 8°C |
| Plage du Vengeron | 10 | 15 | 24° NNE | aucun | pluie | 1.9 | 9°C |
| Plage d'Hermance | 10 | 15 | 24° NNE | aucun | pluie | 1.9 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 4° N | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 60° ENE | aucun | pluie | 2.4 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 2° N | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 7° N | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 9° N | 10h-20h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 7° N | 13h-18h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 13 | 29 | 18° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 17 | 359° N | aucun | couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 8 | 17 | 359° N | aucun | couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 345° NNO | aucun | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 353° N | aucun | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 8 | 14 | 3° N | aucun | couvert | 0.6 | 8°C |
| Nord du Pont d'Arciat | 8 | 14 | 3° N | aucun | couvert | 0.6 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 353° N | aucun | soleil-couvert | 0.0 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 14 | 22 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 14 | 21 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 14 | 21 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 328° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 43° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 352° N | aucun | soleil | 0.1 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 351° N | aucun | soleil-couvert | 0.7 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 6° N | aucun | soleil-couvert | 0.3 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 355° N | aucun | soleil-couvert | 0.1 | 8°C |
| Cruas - Nuclear Spot | 11 | 24 | 15° NNE | 08h-14h | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 8° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 5 | 14 | 8° N | aucun | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 330° NNO | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 353° N | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 7 | 13 | 355° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 7 | 13 | 355° N | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 331° NNO | aucun | couvert | 0.0 | 8°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 15 | 34° NE | aucun | soleil-couvert | 0.6 | 6°C |
| Plage d'Excenevex | 9 | 16 | 14° NNE | aucun | couvert | 0.6 | 6°C |
| Plage du Vengeron | 8 | 15 | 34° NE | aucun | soleil-couvert | 0.6 | 6°C |
| Plage d'Hermance | 8 | 15 | 34° NE | aucun | soleil-couvert | 0.6 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 6° N | aucun | pluie | 1.8 | 4°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 38° NE | aucun | pluie | 1.8 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 320° NO | aucun | pluie | 4.5 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 298° ONO | aucun | pluie | 5.7 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 10° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 356° N | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 7 | 18 | 23° NNE | aucun | pluie | 0.5 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 29° NNE | aucun | soleil-couvert | 0.6 | 7°C |
| Nord du Pont de Chavanay | 4 | 10 | 29° NNE | aucun | soleil-couvert | 0.6 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 16° NNE | aucun | soleil-couvert | 0.6 | 6°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 21° NNE | aucun | soleil-couvert | 0.6 | 6°C |
| Saint-Romain-des-Iles | 3 | 7 | 304° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 7 | 304° NO | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 12° NNE | aucun | soleil-couvert | 0.6 | 6°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 22° NNE | aucun | pluie | 1.8 | 8°C |
| Plage d'Excenevex | 7 | 11 | 32° NNE | aucun | soleil-couvert | 0.6 | 8°C |
| Plage du Vengeron | 8 | 12 | 22° NNE | aucun | pluie | 1.8 | 8°C |
| Plage d'Hermance | 8 | 12 | 22° NNE | aucun | pluie | 1.8 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 341° NNO | aucun | pluie | 3.6 | 7°C |
| Lac du Bourget - Cap des Séselets | 6 | 15 | 31° NNE | aucun | pluie | 1.8 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 180° S | aucun | pluie | 1.2 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 175° S | aucun | soleil-couvert | 0.6 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 344° NNO | aucun | pluie | 1.2 | 8°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 316° NO | aucun | pluie | 1.8 | 8°C |
| Cruas - Nuclear Spot | 4 | 10 | 9° N | aucun | pluie | 6.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 339° NNO | aucun | pluie | 2.4 | 8°C |
| Nord du Pont de Chavanay | 2 | 6 | 339° NNO | aucun | pluie | 2.4 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 4 | 356° N | aucun | couvert | 0.7 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 5 | 346° NNO | aucun | pluie | 1.8 | 8°C |
| Saint-Romain-des-Iles | 2 | 7 | 105° ESE | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 7 | 105° ESE | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 10° N | aucun | soleil-couvert | 0.0 | 8°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 27° NNE | aucun | couvert | 0.1 | 11°C |
| Plage d'Excenevex | 7 | 12 | 21° NNE | aucun | couvert | 0.6 | 10°C |
| Plage du Vengeron | 8 | 12 | 27° NNE | aucun | couvert | 0.1 | 11°C |
| Plage d'Hermance | 8 | 12 | 27° NNE | aucun | couvert | 0.1 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 40° NE | aucun | pluie | 6.1 | 9°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 27° NNE | aucun | pluie | 1.3 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 16 | 197° SSO | aucun | pluie | 4.3 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 16 | 193° SSO | aucun | pluie | 5.5 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 14° NNE | aucun | pluie | 3.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 360° N | aucun | pluie | 2.9 | 10°C |
| Cruas - Nuclear Spot | 3 | 10 | 32° NNE | aucun | pluie | 17.2 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 325° NO | aucun | pluie | 2.8 | 10°C |
| Nord du Pont de Chavanay | 2 | 7 | 325° NO | aucun | pluie | 2.8 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 117° ESE | aucun | pluie | 11.4 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 125° SE | aucun | pluie | 2.9 | 9°C |
| Saint-Romain-des-Iles | 5 | 11 | 172° S | aucun | pluie | 6.1 | 9°C |
| Nord du Pont d'Arciat | 5 | 11 | 172° S | aucun | pluie | 6.1 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 150° SSE | aucun | pluie | 5.4 | 10°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 22° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 7 | 9 | 24° NNE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 8 | 10 | 22° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 8 | 10 | 22° NNE | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 53° NE | aucun | couvert | 0.6 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 13° NNE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 21 | 155° SSE | aucun | pluie | 1.2 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 23 | 142° SE | aucun | pluie | 1.2 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 216° SO | aucun | pluie | 3.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 216° SO | aucun | pluie | 3.6 | 16°C |
| Cruas - Nuclear Spot | 3 | 16 | 282° ONO | aucun | pluie | 10.2 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 171° S | aucun | pluie | 1.2 | 16°C |
| Nord du Pont de Chavanay | 8 | 20 | 171° S | aucun | pluie | 1.2 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 17 | 137° SE | aucun | pluie | 3.7 | 16°C |
| Saint-Cyr-sur-le-Rhône | 8 | 22 | 157° SSE | aucun | pluie | 1.2 | 16°C |
| Saint-Romain-des-Iles | 6 | 12 | 168° SSE | aucun | pluie | 3.0 | 16°C |
| Nord du Pont d'Arciat | 6 | 12 | 168° SSE | aucun | pluie | 3.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 136° SE | aucun | couvert | 0.6 | 17°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 7° N | aucun | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 3 | 6 | 3° N | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 6 | 7 | 7° N | aucun | soleil | 0.0 | 15°C |
| Plage d'Hermance | 6 | 7 | 7° N | aucun | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 10 | 305° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 6 | 13 | 11° N | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 174° S | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 19 | 162° SSE | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 168° SSE | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 140° SE | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 6 | 13 | 259° O | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 122° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 3 | 9 | 122° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 127° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 117° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 4 | 9 | 198° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 4 | 9 | 198° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 140° SE | aucun | soleil-couvert | 0.0 | 18°C |
