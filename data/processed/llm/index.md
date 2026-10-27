# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 27/10/2026 11:42 (Europe/Paris)
- Fichiers générés le : 2026-10-27T11:46:38+01:00
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

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 196° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 5 | 209° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 3 | 4 | 318° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 4 | 6 | 171° S | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 353° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 24° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 360° N | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 9 | 306° NO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 191° S | 12h-16h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 157° SSE | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 8 | 15 | 188° S | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 159° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 4 | 8 | 172° S | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 131° SE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 230° SO | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 6 | 10 | 202° SSO | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 7 | 11 | 203° SSO | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 177° S | aucun | soleil | 0.0 | 15°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 28° NNE | 13h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 17 | 22 | 28° NNE | 14h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 13 | 18 | 28° NNE | 14h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 12 | 15 | 46° NE | 12h-15h | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 18 | 333° NNO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 11 | 13 | 2° N | aucun | couvert | 0.1 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 359° N | 08h-16h | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 354° N | 10h-16h | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 29 | 13° NNE | 08h-20h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 346° NNO | 08h-11h | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 18 | 35 | 16° NNE | 08h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 355° N | 09h-20h | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 12 | 22 | 359° N | 10h-17h | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 353° N | aucun | soleil-couvert | 0.1 | 15°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 6° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 11 | 18 | 23° NNE | 13h-16h | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 12 | 18 | 23° NNE | 12h-16h | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 19 | 356° N | 10h-17h | soleil-couvert | 0.0 | 13°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 23 | 37° NE | 08h-20h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 17 | 22 | 18° NNE | 08h-20h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 13 | 18 | 46° NE | 08h-12h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 13 | 19 | 28° NNE | 17h-20h | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 308° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 8 | 18 | 47° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 3° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 351° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 13° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 13 | 359° N | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 11 | 22 | 20° NNE | 09h-13h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 23° NNE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 12 | 23° NNE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 24° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 24° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 12 | 55° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 6 | 12 | 55° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 41° NE | aucun | soleil-couvert | 0.0 | 12°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 20° NNE | 14h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 15 | 20 | 19° NNE | 08h-20h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 11 | 15 | 36° NE | 15h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 10 | 16 | 36° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 304° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 7 | 15 | 56° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 18° NNE | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 349° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 9 | 28° NNE | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 355° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 5 | 10 | 17° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 6 | 360° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 6 | 360° N | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 11 | 44° NE | aucun | soleil | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 11 | 44° NE | aucun | soleil | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 27° NNE | aucun | soleil | 0.0 | 14°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 15 | 30° NNE | 16h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 16 | 21 | 24° NNE | 16h-20h | couvert | 0.0 | 11°C |
| Plage du Vengeron | 11 | 14 | 41° NE | 17h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 10 | 15 | 40° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 301° ONO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 13 | 58° ENE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 11° N | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 348° NNO | aucun | soleil | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 21° NNE | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 6 | 11 | 360° N | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 5 | 7 | 9° N | aucun | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 13 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 14° NNE | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 14° NNE | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 8 | 33° NNE | aucun | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 8 | 33° NNE | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 355° N | aucun | soleil | 0.0 | 12°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 23 | 40° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 14 | 23 | 40° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 14 | 23 | 40° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 14 | 23 | 40° NE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 342° NNO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 39° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 333° NNO | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 14° NNE | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 5° N | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 353° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 10 | 22 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 16° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 15 | 16° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 24° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 5 | 11 | 7° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 5 | 11 | 7° N | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 359° N | aucun | soleil-couvert | 0.0 | 11°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 28 | 37° NE | 08h-20h | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 17 | 28 | 37° NE | 08h-20h | soleil | 0.0 | 12°C |
| Plage du Vengeron | 17 | 28 | 37° NE | 08h-20h | soleil | 0.0 | 12°C |
| Plage d'Hermance | 17 | 28 | 37° NE | 08h-20h | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 342° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 15° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 325° NO | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 2° N | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 29 | 11° N | 11h-20h | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 8° N | 14h-20h | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 13 | 29 | 15° NNE | 12h-20h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 5° N | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 8 | 19 | 5° N | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 323° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 338° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 9 | 17 | 344° NNO | aucun | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 9 | 17 | 344° NNO | aucun | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 336° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 35 | 37° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 21 | 35 | 37° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 21 | 35 | 37° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 21 | 35 | 37° NE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 14 | 348° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 11 | 27° NNE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 17 | 320° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 16 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 26 | 10° N | 15h-20h | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 3° N | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 12 | 27 | 14° NNE | 16h-20h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 21° NNE | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 15 | 21° NNE | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 311° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 333° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 8 | 14 | 343° NNO | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 8 | 14 | 343° NNO | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 325° NO | aucun | soleil-couvert | 0.0 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 27 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 19 | 26 | 27° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 19 | 27 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 19 | 27 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 19 | 359° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 5° N | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 23° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 8° N | aucun | soleil-couvert | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 32 | 7° N | 08h-16h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 2° N | 08h-12h | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 13 | 30 | 19° NNE | 08h-18h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 22 | 1° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 8 | 22 | 1° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 19 | 350° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 8 | 22 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 12 | 21 | 6° N | 10h-16h | soleil | 0.0 | 10°C |
| Nord du Pont d'Arciat | 12 | 21 | 6° N | 10h-16h | soleil | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 8° N | aucun | soleil-couvert | 0.0 | 11°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 15 | 37° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 7 | 13 | 27° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 7 | 15 | 37° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 7 | 15 | 37° NE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 336° NNO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 30° NNE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 58° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 77° ENE | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 11° N | aucun | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 323° NO | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 4 | 12 | 19° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 333° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 2 | 6 | 333° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 347° NNO | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 1 | 4 | 309° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 7 | 120° ESE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 7 | 120° ESE | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 360° N | aucun | soleil | 0.0 | 9°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 10 | 47° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 10 | 30° NNE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 4 | 10 | 47° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 4 | 10 | 47° NE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 321° NO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 29° NNE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 38° NE | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 49° NE | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 20° NNE | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 358° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 3 | 8 | 5° N | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 329° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 2 | 9 | 329° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 354° N | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 7 | 126° SE | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 2 | 7 | 126° SE | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 5° N | aucun | soleil | 0.0 | 9°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 21° NNE | 16h-20h | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 12 | 17 | 16° NNE | 15h-20h | soleil | 0.0 | 7°C |
| Plage du Vengeron | 12 | 18 | 21° NNE | 16h-20h | soleil | 0.0 | 7°C |
| Plage d'Hermance | 12 | 18 | 21° NNE | 16h-20h | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 331° NNO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 25° NNE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 2° N | aucun | soleil | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 357° N | aucun | soleil-couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 5° N | 12h-17h | soleil | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 10 | 22 | 19° NNE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 6 | 15 | 5° N | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 21° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 359° N | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 6 | 12 | 3° N | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 6 | 12 | 3° N | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 338° NNO | aucun | soleil-couvert | 0.0 | 6°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 24° NNE | 17h-20h | soleil | 0.0 | 5°C |
| Plage d'Excenevex | 11 | 17 | 17° NNE | 17h-20h | soleil | 0.0 | 5°C |
| Plage du Vengeron | 12 | 17 | 24° NNE | 17h-20h | soleil | 0.0 | 5°C |
| Plage d'Hermance | 12 | 17 | 24° NNE | 17h-20h | soleil | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 321° NO | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 175° S | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 189° S | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 1° N | aucun | soleil-couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 339° NNO | aucun | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 8 | 18 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 30° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 4 | 12 | 30° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 343° NNO | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 1° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 3 | 6 | 334° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 3 | 6 | 334° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 334° NNO | aucun | soleil-couvert | 0.0 | 4°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 26° NNE | 15h-20h | soleil | 0.0 | 4°C |
| Plage d'Excenevex | 12 | 18 | 17° NNE | 13h-20h | soleil-couvert | 0.0 | 4°C |
| Plage du Vengeron | 12 | 18 | 26° NNE | 15h-20h | soleil | 0.0 | 4°C |
| Plage d'Hermance | 12 | 18 | 26° NNE | 15h-20h | soleil | 0.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 340° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 35° NE | aucun | soleil-couvert | 0.0 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 22° NNE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 10° N | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 360° N | 15h-20h | soleil | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 10 | 19 | 348° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Cruas - Nuclear Spot | 12 | 26 | 10° N | 15h-20h | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 16° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 6 | 16 | 16° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 8° N | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 9° N | aucun | soleil-couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 6 | 12 | 339° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 6 | 12 | 339° NNO | aucun | soleil-couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 14 | 320° NO | aucun | soleil-couvert | 0.0 | 3°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 23 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Plage d'Excenevex | 19 | 26 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Plage du Vengeron | 16 | 23 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Plage d'Hermance | 16 | 23 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 19 | 7° N | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 27° NNE | aucun | soleil-couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 354° N | aucun | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 356° N | aucun | couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 11° N | 08h-20h | soleil-couvert | 0.0 | 5°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 6° N | 08h-20h | soleil-couvert | 0.0 | 4°C |
| Cruas - Nuclear Spot | 14 | 32 | 15° NNE | 08h-20h | soleil | 0.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 345° NNO | aucun | couvert | 0.0 | 4°C |
| Nord du Pont de Chavanay | 9 | 22 | 345° NNO | aucun | couvert | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 335° NNO | aucun | couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 340° NNO | aucun | couvert | 0.0 | 3°C |
| Saint-Romain-des-Iles | 10 | 19 | 14° NNE | 11h-16h | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 10 | 19 | 14° NNE | 11h-16h | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 352° N | aucun | soleil-couvert | 0.0 | 4°C |
