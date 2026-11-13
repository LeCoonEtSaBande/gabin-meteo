# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 13/11/2026 23:43 (Europe/Paris)
- Fichiers générés le : 2026-11-13T23:44:25+01:00
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
| Plage de la pointe - Messery | 26 | 37 | 37° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 23 | 34 | 29° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 24 | 35 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 22 | 32 | 36° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 19 | 26 | 326° NO | 08h-19h | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 18 | 24 | 4° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 32 | 356° N | 08h-18h | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 18 | 32 | 354° N | 08h-16h | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 33 | 7° N | 08h-20h | soleil-couvert | 0.3 | 9°C |
| La Roche-de-Glun - Base Nautique | 13 | 30 | 357° N | 08h-14h | couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 18 | 36 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 2° N | 14h-18h | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 12 | 22 | 4° N | aucun | soleil-couvert | 0.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 335° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 351° N | aucun | soleil-couvert | 0.1 | 9°C |
| Saint-Romain-des-Iles | 14 | 22 | 13° NNE | 08h-17h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 15 | 22 | 7° N | 08h-17h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 26 | 343° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 39° NE | 08h-11h | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 14 | 20 | 32° NNE | 08h-11h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 11 | 15 | 48° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 12 | 16 | 53° NE | 08h-11h | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 339° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 7 | 9 | 360° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 21 | 203° SSO | 11h-15h | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 188° S | aucun | pluie | 2.3 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 10 | 185° S | aucun | pluie | 4.5 | 10°C |
| La Roche-de-Glun - Base Nautique | 3 | 8 | 166° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 8 | 17 | 22° NNE | aucun | orage | 12.4 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 168° SSE | aucun | soleil-couvert | 0.1 | 10°C |
| Nord du Pont de Chavanay | 4 | 8 | 194° SSO | aucun | soleil-couvert | 0.3 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 128° SE | aucun | soleil-couvert | 0.2 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 241° OSO | aucun | soleil-couvert | 0.2 | 11°C |
| Saint-Romain-des-Iles | 4 | 5 | 180° S | aucun | pluie | 0.5 | 8°C |
| Nord du Pont d'Arciat | 5 | 8 | 189° S | aucun | soleil-couvert | 0.3 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 5 | 145° SE | aucun | soleil-couvert | 0.4 | 10°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 217° SO | 16h-20h | pluie | 1.3 | 12°C |
| Plage d'Excenevex | 10 | 14 | 232° SO | aucun | pluie | 6.8 | 10°C |
| Plage du Vengeron | 12 | 16 | 214° SO | 15h-19h | couvert | 0.1 | 14°C |
| Plage d'Hermance | 14 | 20 | 215° SO | 16h-20h | pluie | 1.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 146° SE | aucun | pluie | 6.7 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 7 | 131° SE | aucun | pluie | 7.6 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 29 | 174° S | 08h-20h | pluie | 2.6 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 155° SSE | aucun | soleil-couvert | 0.8 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 198° SSO | 12h-16h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 230° SO | aucun | pluie | 2.6 | 14°C |
| Cruas - Nuclear Spot | 7 | 14 | 192° SSO | aucun | pluie | 2.2 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 24 | 179° S | 11h-18h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 14 | 24 | 165° SSE | 11h-19h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 176° S | 11h-20h | pluie | 0.8 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 189° S | 12h-18h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 14 | 23 | 180° S | 13h-19h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 17 | 26 | 189° S | 13h-20h | soleil-couvert | 0.4 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 28 | 189° S | 08h-20h | pluie | 1.1 | 14°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 26 | 205° SSO | 08h-15h | pluie | 5.9 | 11°C |
| Plage d'Excenevex | 16 | 21 | 213° SSO | 08h-15h | pluie | 4.7 | 11°C |
| Plage du Vengeron | 14 | 18 | 204° SSO | 08h-14h | pluie | 4.2 | 11°C |
| Plage d'Hermance | 13 | 23 | 201° SSO | 10h-15h | pluie | 3.9 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 124° SE | aucun | pluie | 3.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 6 | 9 | 177° S | aucun | pluie | 4.2 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 9 | 159° SSE | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 168° SSE | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 14 | 207° SSO | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 19 | 191° S | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 8 | 170° S | aucun | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 18 | 161° SSE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 18 | 161° SSE | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 182° S | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 13 | 26 | 182° S | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 11 | 16 | 183° S | aucun | pluie | 1.3 | 12°C |
| Nord du Pont d'Arciat | 11 | 16 | 183° S | aucun | pluie | 1.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 22 | 185° S | aucun | pluie | 1.0 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 30 | 208° SSO | 08h-20h | pluie | 4.9 | 13°C |
| Plage d'Excenevex | 20 | 27 | 208° SSO | 08h-20h | pluie | 5.1 | 14°C |
| Plage du Vengeron | 17 | 22 | 210° SSO | 13h-20h | pluie | 6.0 | 14°C |
| Plage d'Hermance | 18 | 27 | 214° SO | 08h-20h | pluie | 6.5 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 15 | 161° SSE | aucun | orage | 8.1 | 14°C |
| Lac du Bourget - Cap des Séselets | 13 | 21 | 194° SSO | 08h-12h | couvert | 0.2 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 29 | 162° SSE | 08h-16h | couvert | 0.7 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 132° SE | aucun | pluie | 1.9 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 22 | 207° SSO | 08h-18h | pluie | 7.4 | 14°C |
| La Roche-de-Glun - Base Nautique | 17 | 29 | 202° SSO | 08h-20h | pluie | 6.2 | 14°C |
| Cruas - Nuclear Spot | 7 | 11 | 250° OSO | aucun | pluie | 9.6 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 17 | 35 | 181° S | 08h-18h | pluie | 6.0 | 14°C |
| Nord du Pont de Chavanay | 17 | 35 | 181° S | 08h-18h | pluie | 6.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 36 | 195° SSO | 08h-20h | pluie | 7.7 | 14°C |
| Saint-Cyr-sur-le-Rhône | 18 | 36 | 195° SSO | 08h-20h | pluie | 7.7 | 14°C |
| Saint-Romain-des-Iles | 18 | 32 | 192° SSO | 08h-14h | pluie | 2.7 | 16°C |
| Nord du Pont d'Arciat | 18 | 32 | 192° SSO | 08h-14h | pluie | 2.7 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 22 | 37 | 194° SSO | 08h-20h | pluie | 3.6 | 15°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 28 | 221° SO | 08h-20h | couvert | 0.6 | 13°C |
| Plage d'Excenevex | 14 | 20 | 212° SSO | 08h-20h | couvert | 0.4 | 14°C |
| Plage du Vengeron | 18 | 25 | 210° SSO | 08h-20h | couvert | 0.4 | 14°C |
| Plage d'Hermance | 14 | 26 | 216° SO | 08h-18h | couvert | 0.1 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 14 | 155° SSE | aucun | pluie | 1.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 14 | 23 | 179° S | 14h-18h | pluie | 0.8 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 152° SSE | aucun | pluie | 3.5 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 135° SE | aucun | pluie | 3.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 179° S | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 180° S | 14h-19h | couvert | 0.3 | 13°C |
| Cruas - Nuclear Spot | 5 | 12 | 203° SSO | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 178° S | aucun | couvert | 0.3 | 14°C |
| Nord du Pont de Chavanay | 10 | 22 | 178° S | aucun | couvert | 0.3 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 168° SSE | aucun | soleil-couvert | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 173° S | aucun | couvert | 0.3 | 13°C |
| Saint-Romain-des-Iles | 9 | 16 | 204° SSO | aucun | soleil-couvert | 0.3 | 14°C |
| Nord du Pont d'Arciat | 9 | 16 | 204° SSO | aucun | soleil-couvert | 0.3 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 21 | 185° S | aucun | soleil-couvert | 0.6 | 13°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 33 | 224° SO | 08h-20h | pluie | 9.6 | 13°C |
| Plage d'Excenevex | 18 | 33 | 224° SO | 08h-20h | pluie | 9.6 | 13°C |
| Plage du Vengeron | 18 | 33 | 224° SO | 08h-20h | pluie | 9.6 | 13°C |
| Plage d'Hermance | 18 | 33 | 224° SO | 08h-20h | pluie | 9.6 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 18 | 191° S | aucun | pluie | 3.7 | 11°C |
| Lac du Bourget - Cap des Séselets | 8 | 20 | 195° SSO | aucun | pluie | 4.5 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 20 | 155° SSE | aucun | pluie | 7.1 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 174° S | aucun | pluie | 4.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 26 | 182° S | 12h-16h | soleil-couvert | 0.2 | 13°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 181° S | 11h-17h | soleil-couvert | 0.7 | 13°C |
| Cruas - Nuclear Spot | 9 | 20 | 179° S | aucun | soleil-couvert | 0.3 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 28 | 171° S | aucun | pluie | 1.8 | 12°C |
| Nord du Pont de Chavanay | 9 | 28 | 171° S | aucun | pluie | 1.8 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 178° S | aucun | pluie | 1.8 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 26 | 183° S | aucun | pluie | 6.6 | 11°C |
| Saint-Romain-des-Iles | 12 | 25 | 222° SO | 11h-15h | soleil-couvert | 0.3 | 13°C |
| Nord du Pont d'Arciat | 12 | 25 | 222° SO | 11h-15h | soleil-couvert | 0.3 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 198° SSO | 12h-19h | soleil-couvert | 0.0 | 12°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 25 | 222° SO | 08h-18h | pluie | 8.7 | 11°C |
| Plage d'Excenevex | 16 | 25 | 222° SO | 08h-18h | pluie | 8.7 | 11°C |
| Plage du Vengeron | 16 | 25 | 222° SO | 08h-18h | pluie | 8.7 | 11°C |
| Plage d'Hermance | 16 | 25 | 222° SO | 08h-18h | pluie | 8.7 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 14 | 188° S | aucun | pluie | 8.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 18 | 215° SO | aucun | pluie | 7.2 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 17 | 145° SE | aucun | pluie | 4.4 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 207° SSO | aucun | pluie | 1.6 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 17 | 187° S | aucun | pluie | 3.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 181° S | aucun | pluie | 4.2 | 11°C |
| Cruas - Nuclear Spot | 4 | 11 | 238° OSO | aucun | soleil-couvert | 0.6 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 17 | 140° SE | aucun | pluie | 1.8 | 11°C |
| Nord du Pont de Chavanay | 5 | 17 | 140° SE | aucun | pluie | 1.8 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 175° S | aucun | pluie | 1.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 16 | 149° SSE | aucun | pluie | 1.8 | 10°C |
| Saint-Romain-des-Iles | 10 | 20 | 263° O | aucun | pluie | 1.8 | 10°C |
| Nord du Pont d'Arciat | 10 | 20 | 263° O | aucun | pluie | 1.8 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 22 | 193° SSO | aucun | pluie | 1.8 | 12°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 9 | 36° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 6 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 6 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 331° NNO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 35° NE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 174° S | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 182° S | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 6° N | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 348° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 12 | 37° NE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 11° N | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 9 | 11° N | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 21° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 18° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 1 | 5 | 250° OSO | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 1 | 5 | 250° OSO | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 352° N | aucun | soleil-couvert | 0.0 | 9°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 199° SSO | aucun | pluie | 10.9 | 10°C |
| Plage d'Excenevex | 14 | 18 | 209° SSO | 16h-20h | pluie | 1.6 | 10°C |
| Plage du Vengeron | 10 | 14 | 199° SSO | aucun | pluie | 10.9 | 10°C |
| Plage d'Hermance | 10 | 14 | 199° SSO | aucun | pluie | 10.9 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 140° SE | aucun | pluie | 4.2 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 360° N | aucun | pluie | 7.3 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 160° SSE | aucun | pluie | 3.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 158° SSE | aucun | pluie | 2.7 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 179° S | aucun | pluie | 1.2 | 10°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 193° SSO | aucun | soleil-couvert | 0.6 | 10°C |
| Cruas - Nuclear Spot | 2 | 9 | 317° NO | aucun | pluie | 1.8 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 168° SSE | aucun | pluie | 1.2 | 11°C |
| Nord du Pont de Chavanay | 6 | 14 | 168° SSE | aucun | pluie | 1.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 16 | 161° SSE | aucun | pluie | 2.4 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 161° SSE | aucun | soleil-couvert | 0.6 | 11°C |
| Saint-Romain-des-Iles | 6 | 14 | 201° SSO | aucun | pluie | 7.8 | 11°C |
| Nord du Pont d'Arciat | 6 | 14 | 201° SSO | aucun | pluie | 7.8 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 167° SSE | aucun | pluie | 6.6 | 11°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 196° SSO | aucun | pluie | 1.2 | 8°C |
| Plage d'Excenevex | 9 | 16 | 225° SO | aucun | couvert | 0.6 | 9°C |
| Plage du Vengeron | 7 | 10 | 196° SSO | aucun | pluie | 1.2 | 8°C |
| Plage d'Hermance | 7 | 10 | 196° SSO | aucun | pluie | 1.2 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 149° SSE | aucun | pluie | 1.9 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 43° NE | aucun | couvert | 0.7 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 350° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 342° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 20 | 15° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 19 | 20° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 7 | 21 | 3° N | aucun | soleil-couvert | 0.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 36° NE | aucun | soleil-couvert | 0.6 | 10°C |
| Nord du Pont de Chavanay | 3 | 8 | 36° NE | aucun | soleil-couvert | 0.6 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 10 | 13° NNE | aucun | pluie | 1.2 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 31° NNE | aucun | pluie | 1.2 | 9°C |
| Saint-Romain-des-Iles | 6 | 12 | 297° ONO | aucun | pluie | 1.8 | 9°C |
| Nord du Pont d'Arciat | 6 | 12 | 297° ONO | aucun | pluie | 1.8 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 339° NNO | aucun | couvert | 0.6 | 8°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 209° SSO | 08h-14h | pluie | 4.9 | 5°C |
| Plage d'Excenevex | 13 | 17 | 223° SO | 08h-15h | pluie | 6.2 | 6°C |
| Plage du Vengeron | 12 | 17 | 209° SSO | 08h-14h | pluie | 4.9 | 5°C |
| Plage d'Hermance | 12 | 17 | 209° SSO | 08h-14h | pluie | 4.9 | 5°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 146° SE | aucun | pluie | 6.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 220° SO | aucun | pluie | 4.5 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 15 | 36° NE | aucun | pluie | 5.4 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 15 | 29° NNE | aucun | pluie | 4.2 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 349° N | aucun | pluie | 1.2 | 7°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 97° E | aucun | pluie | 1.2 | 6°C |
| Cruas - Nuclear Spot | 6 | 21 | 352° N | aucun | pluie | 1.8 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 16 | 61° ENE | aucun | pluie | 3.6 | 6°C |
| Nord du Pont de Chavanay | 3 | 16 | 61° ENE | aucun | pluie | 3.6 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 13 | 310° NO | aucun | pluie | 6.6 | 6°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 218° SO | aucun | pluie | 5.4 | 6°C |
| Saint-Romain-des-Iles | 7 | 17 | 317° NO | aucun | pluie | 4.2 | 6°C |
| Nord du Pont d'Arciat | 7 | 17 | 317° NO | aucun | pluie | 4.2 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 284° ONO | aucun | pluie | 4.8 | 6°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 249° OSO | aucun | pluie | 2.0 | 4°C |
| Plage d'Excenevex | 5 | 10 | 14° NNE | aucun | pluie | 1.3 | 4°C |
| Plage du Vengeron | 6 | 10 | 249° OSO | aucun | pluie | 2.0 | 4°C |
| Plage d'Hermance | 6 | 10 | 249° OSO | aucun | pluie | 2.0 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 153° SSE | aucun | pluie | 2.2 | 2°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 28° NNE | aucun | pluie | 3.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 178° S | aucun | pluie | 2.1 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 177° S | aucun | pluie | 2.1 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 199° SSO | aucun | pluie | 2.5 | 6°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 204° SSO | aucun | pluie | 3.6 | 5°C |
| Cruas - Nuclear Spot | 4 | 10 | 237° OSO | aucun | pluie | 3.0 | 5°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 24 | 185° S | aucun | pluie | 2.5 | 5°C |
| Nord du Pont de Chavanay | 9 | 24 | 185° S | aucun | pluie | 2.5 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 27 | 176° S | 17h-20h | pluie | 1.3 | 5°C |
| Saint-Cyr-sur-le-Rhône | 9 | 25 | 176° S | aucun | pluie | 2.4 | 5°C |
| Saint-Romain-des-Iles | 5 | 14 | 174° S | aucun | pluie | 2.9 | 3°C |
| Nord du Pont d'Arciat | 5 | 14 | 174° S | aucun | pluie | 2.9 | 3°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 25 | 169° S | aucun | pluie | 2.7 | 5°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 219° SO | aucun | soleil-couvert | 0.3 | 8°C |
| Plage d'Excenevex | 12 | 15 | 238° OSO | 09h-14h | soleil | 0.0 | 8°C |
| Plage du Vengeron | 10 | 14 | 219° SO | aucun | soleil-couvert | 0.3 | 8°C |
| Plage d'Hermance | 10 | 14 | 219° SO | aucun | soleil-couvert | 0.3 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 135° SE | aucun | pluie | 1.3 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 231° SO | aucun | pluie | 1.7 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 187° S | aucun | pluie | 0.8 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 193° SSO | aucun | pluie | 1.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 187° S | aucun | couvert | 0.7 | 9°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 187° S | aucun | soleil-couvert | 0.2 | 9°C |
| Cruas - Nuclear Spot | 5 | 12 | 212° SSO | aucun | couvert | 0.6 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 159° SSE | aucun | pluie | 1.3 | 9°C |
| Nord du Pont de Chavanay | 8 | 19 | 159° SSE | aucun | pluie | 1.3 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 169° S | aucun | pluie | 1.1 | 9°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 162° SSE | aucun | pluie | 1.4 | 8°C |
| Saint-Romain-des-Iles | 6 | 12 | 167° SSE | aucun | pluie | 4.0 | 8°C |
| Nord du Pont d'Arciat | 6 | 12 | 167° SSE | aucun | pluie | 4.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 189° S | aucun | pluie | 0.8 | 9°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 17 | 212° SSO | aucun | soleil-couvert | 0.6 | 7°C |
| Plage d'Excenevex | 14 | 21 | 225° SO | 08h-13h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 10 | 17 | 212° SSO | aucun | soleil-couvert | 0.6 | 7°C |
| Plage d'Hermance | 10 | 17 | 212° SSO | aucun | soleil-couvert | 0.6 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 12 | 152° SSE | aucun | soleil-couvert | 0.0 | 3°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 50° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 11 | 360° N | aucun | soleil | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 12 | 360° N | aucun | soleil-couvert | 0.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 358° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 313° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 4 | 10 | 330° NNO | aucun | soleil | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 177° S | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 2 | 8 | 177° S | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 171° S | aucun | couvert | 0.6 | 7°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 175° S | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 5 | 10 | 195° SSO | aucun | couvert | 0.6 | 6°C |
| Nord du Pont d'Arciat | 5 | 10 | 195° SSO | aucun | couvert | 0.6 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 180° S | aucun | couvert | 0.0 | 8°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 7 | 45° NE | aucun | couvert | 0.0 |  |
| Plage d'Excenevex | 4 | 8 | 47° NE | aucun | couvert | 0.0 |  |
| Plage du Vengeron | 2 | 7 | 45° NE | aucun | couvert | 0.0 |  |
| Plage d'Hermance | 2 | 7 | 45° NE | aucun | couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 101° E | aucun | couvert | 0.0 |  |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 15° NNE | aucun | couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 16 | 175° S | aucun | couvert | 0.0 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 15 | 180° S | aucun | couvert | 0.0 |  |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 191° S | aucun | couvert | 0.0 |  |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 193° SSO | aucun | couvert | 0.0 |  |
| Cruas - Nuclear Spot | 6 | 16 | 205° SSO | aucun | soleil-couvert | 0.0 |  |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 164° SSE | aucun | couvert | 0.0 |  |
| Nord du Pont de Chavanay | 9 | 21 | 164° SSE | aucun | couvert | 0.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 154° SSE | aucun | couvert | 0.0 |  |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 158° SSE | aucun | couvert | 0.0 |  |
| Saint-Romain-des-Iles | 7 | 14 | 172° S | aucun | couvert | 0.0 |  |
| Nord du Pont d'Arciat | 7 | 14 | 172° S | aucun | couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 141° SE | aucun | couvert | 0.0 |  |
