# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 21/10/2026 12:20 (Europe/Paris)
- Fichiers générés le : 2026-10-21T12:24:38+02:00
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

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 29 | 208° SSO | 08h-20h | pluie | 7.4 | 12°C |
| Plage d'Excenevex | 13 | 19 | 196° SSO | 14h-17h | pluie | 3.5 | 11°C |
| Plage du Vengeron | 15 | 20 | 204° SSO | 13h-17h | pluie | 2.6 | 12°C |
| Plage d'Hermance | 18 | 25 | 209° SSO | 12h-20h | pluie | 4.4 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 15 | 141° SE | aucun | pluie | 3.3 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 11° N | aucun | orage | 9.3 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 14 | 353° N | aucun | pluie | 5.2 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 16 | 12° NNE | aucun | pluie | 1.3 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 11 | 331° NNO | aucun | soleil-couvert | 0.2 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 157° SSE | aucun | pluie | 0.8 | 14°C |
| Cruas - Nuclear Spot | 7 | 18 | 20° NNE | aucun | soleil-couvert | 0.1 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 170° S | aucun | pluie | 2.9 | 13°C |
| Nord du Pont de Chavanay | 5 | 10 | 180° S | aucun | pluie | 1.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 159° SSE | aucun | orage | 5.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 218° SO | aucun | pluie | 4.5 | 13°C |
| Saint-Romain-des-Iles | 9 | 14 | 179° S | aucun | pluie | 2.0 | 13°C |
| Nord du Pont d'Arciat | 10 | 15 | 183° S | aucun | pluie | 2.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 187° S | aucun | pluie | 2.2 | 13°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 212° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 8 | 12 | 232° SO | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 6 | 8 | 207° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 8 | 11 | 210° SSO | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 6 | 185° S | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 137° SE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 1° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 344° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 14° NNE | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 3° N | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 7 | 15 | 27° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 4 | 185° S | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 3 | 5 | 193° SSO | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 169° S | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 227° SO | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 7 | 12 | 180° S | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 8 | 13 | 185° S | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 145° SE | aucun | soleil | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 26 | 37 | 203° SSO | 09h-20h | pluie | 3.3 | 15°C |
| Plage d'Excenevex | 23 | 32 | 199° SSO | 11h-20h | orage | 4.1 | 15°C |
| Plage du Vengeron | 24 | 35 | 209° SSO | 11h-20h | pluie | 6.0 | 16°C |
| Plage d'Hermance | 21 | 32 | 214° SO | 13h-20h | pluie | 1.2 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 19 | 226° SO | aucun | orage | 7.4 | 15°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 153° SSE | aucun | orage | 12.6 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 29 | 175° S | 08h-12h | orage | 3.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 17 | 153° SSE | aucun | pluie | 4.4 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 18 | 160° SSE | aucun | orage | 7.1 | 15°C |
| La Roche-de-Glun - Base Nautique | 11 | 18 | 168° SSE | aucun | orage | 5.2 | 16°C |
| Cruas - Nuclear Spot | 5 | 9 | 83° E | aucun | orage | 8.2 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 22 | 185° S | aucun | pluie | 1.2 | 16°C |
| Nord du Pont de Chavanay | 12 | 22 | 185° S | aucun | pluie | 1.2 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 30 | 167° SSE | aucun | pluie | 2.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 185° S | aucun | pluie | 2.0 | 15°C |
| Saint-Romain-des-Iles | 13 | 25 | 247° OSO | 12h-18h | soleil-couvert | 0.1 | 16°C |
| Nord du Pont d'Arciat | 13 | 25 | 247° OSO | 12h-18h | soleil-couvert | 0.1 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 20 | 34 | 190° S | 08h-12h | pluie | 2.0 | 15°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 221° SO | 14h-18h | couvert | 0.2 | 10°C |
| Plage d'Excenevex | 11 | 14 | 236° SO | aucun | couvert | 0.8 | 10°C |
| Plage du Vengeron | 9 | 12 | 215° SO | aucun | pluie | 1.2 | 10°C |
| Plage d'Hermance | 9 | 14 | 218° SO | aucun | pluie | 1.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 171° S | aucun | pluie | 2.7 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 225° SO | aucun | pluie | 1.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 18° NNE | aucun | soleil-couvert | 0.1 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 356° N | 13h-16h | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 27° NNE | aucun | couvert | 0.2 | 13°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 31° NNE | aucun | couvert | 0.2 | 14°C |
| Cruas - Nuclear Spot | 7 | 12 | 19° NNE | aucun | couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 143° SE | aucun | pluie | 3.2 | 13°C |
| Nord du Pont de Chavanay | 4 | 12 | 143° SE | aucun | pluie | 3.2 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 302° ONO | aucun | couvert | 0.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 302° ONO | aucun | couvert | 0.2 | 13°C |
| Saint-Romain-des-Iles | 7 | 10 | 167° SSE | aucun | pluie | 1.8 | 13°C |
| Nord du Pont d'Arciat | 7 | 10 | 167° SSE | aucun | pluie | 1.8 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 180° S | aucun | couvert | 0.6 | 12°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 28 | 216° SO | 08h-19h | orage | 22.6 | 14°C |
| Plage d'Excenevex | 19 | 26 | 208° SSO | 08h-18h | orage | 13.0 | 14°C |
| Plage du Vengeron | 18 | 25 | 208° SSO | 12h-18h | orage | 9.9 | 14°C |
| Plage d'Hermance | 14 | 22 | 209° SSO | 08h-18h | orage | 17.7 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 11 | 136° SE | aucun | pluie | 11.4 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 226° SO | aucun | orage | 19.2 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 50° NE | aucun | orage | 14.8 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 192° SSO | aucun | pluie | 6.9 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 215° SO | aucun | pluie | 3.1 | 15°C |
| La Roche-de-Glun - Base Nautique | 15 | 24 | 199° SSO | aucun | pluie | 4.3 | 14°C |
| Cruas - Nuclear Spot | 6 | 15 | 178° S | aucun | pluie | 2.3 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 21 | 169° S | aucun | pluie | 5.3 | 12°C |
| Nord du Pont de Chavanay | 11 | 21 | 169° S | aucun | pluie | 5.3 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 29 | 189° S | 08h-16h | pluie | 3.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 14 | 29 | 189° S | 12h-15h | couvert | 0.7 | 12°C |
| Saint-Romain-des-Iles | 12 | 21 | 187° S | aucun | pluie | 10.8 | 13°C |
| Nord du Pont d'Arciat | 12 | 21 | 187° S | aucun | pluie | 10.8 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 22 | 181° S | 11h-14h | pluie | 1.6 | 12°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 17° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 5 | 8 | 17° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 5 | 8 | 17° NNE | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 5 | 8 | 17° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 307° NO | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 11° N | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 36° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 356° N | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 4° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 357° N | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 10 | 26 | 19° NNE | 11h-14h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 40° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 4 | 12 | 40° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 43° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 34° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 7 | 148° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 3 | 7 | 148° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 358° N | aucun | soleil-couvert | 0.0 | 13°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 5° N | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 5 | 7 | 5° N | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 5 | 7 | 5° N | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 5 | 7 | 5° N | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 120° ESE | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 230° SO | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 145° SE | aucun | soleil | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 214° SO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 181° S | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 188° S | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 6 | 15 | 181° S | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 155° SSE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 4 | 12 | 155° SSE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 160° SSE | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 162° SSE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 3 | 5 | 225° SO | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 3 | 5 | 225° SO | aucun | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 164° SSE | aucun | soleil | 0.0 | 16°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 20° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 9 | 14 | 16° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 8 | 12 | 20° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 8 | 12 | 20° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 101° E | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 157° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 356° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 348° NNO | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 5° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 12 | 27 | 1° N | 10h-18h | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 14 | 31 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 358° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 9 | 22 | 358° N | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 360° N | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 355° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 13 | 358° N | aucun | couvert | 0.1 | 15°C |
| Nord du Pont d'Arciat | 7 | 13 | 358° N | aucun | couvert | 0.1 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 352° N | aucun | couvert | 0.0 | 14°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 7 | 12 | 25° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 8 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 8 | 14 | 28° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 326° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 28° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 172° S | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 248° OSO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 6° N | aucun | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 333° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 7 | 20 | 25° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 325° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 2 | 7 | 325° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 321° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 331° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 2 | 7 | 302° ONO | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 7 | 302° ONO | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 348° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 33° NNE | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 6 | 10 | 43° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 10 | 33° NNE | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 6 | 10 | 33° NNE | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 300° ONO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 31° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 28° NNE | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 19° NNE | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 156° SSE | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 157° SSE | aucun | soleil | 0.0 | 17°C |
| Cruas - Nuclear Spot | 2 | 7 | 186° S | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 158° SSE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 3 | 10 | 158° SSE | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 216° SO | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 159° SSE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 10 | 156° SSE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 4 | 10 | 156° SSE | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 124° SE | aucun | soleil | 0.0 | 16°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 26° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 4 | 8 | 54° NE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 5 | 8 | 26° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 5 | 8 | 26° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 310° NO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 38° NE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 5 | 174° S | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 30° NNE | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 360° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 336° NNO | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 3 | 9 | 42° NE | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 26° NNE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 2 | 8 | 26° NNE | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 23° NNE | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 23° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 2 | 7 | 99° E | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 7 | 99° E | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 347° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 10 | 32° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 10 | 24° NNE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 5 | 10 | 32° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Hermance | 5 | 10 | 32° NNE | aucun | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 309° NO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 25° NNE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 9° N | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 12° NNE | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 2° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 351° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 9 | 21 | 26° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 33° NNE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 6 | 14 | 33° NNE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 17° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 21° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 5 | 11 | 2° N | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 5 | 11 | 2° N | aucun | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 344° NNO | aucun | soleil | 0.0 | 14°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 35° NE | aucun | soleil | 0.0 | 11°C |
| Plage d'Excenevex | 9 | 13 | 25° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 10 | 14 | 35° NE | aucun | soleil | 0.0 | 11°C |
| Plage d'Hermance | 10 | 14 | 35° NE | aucun | soleil | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 325° NO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 35° NE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 31° NNE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 357° N | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 6° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 337° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 8 | 19 | 29° NNE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 27° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 6 | 13 | 27° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 17° NNE | aucun | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 17° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 8 | 10° N | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 8 | 10° N | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 328° NNO | aucun | couvert | 0.0 | 9°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 13 | 32° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Excenevex | 6 | 13 | 39° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 6 | 13 | 32° NNE | aucun | soleil | 0.0 | 10°C |
| Plage d'Hermance | 6 | 13 | 32° NNE | aucun | soleil | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 317° NO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 25° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 193° SSO | aucun | soleil | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 207° SSO | aucun | soleil | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 11 | 178° S | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 3 | 12 | 182° S | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 12 | 20° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 194° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 10 | 194° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 144° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 195° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 3 | 8 | 155° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 3 | 8 | 155° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 118° ESE | aucun | soleil | 0.0 | 12°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 5 | 9 | 19° NNE | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 5 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 5 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 326° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 28° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 20 | 182° S | aucun | couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 183° S | aucun | couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 195° SSO | aucun | couvert | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 192° SSO | 13h-16h | couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 6 | 15 | 192° SSO | aucun | pluie | 1.8 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 170° S | aucun | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 10 | 23 | 170° S | aucun | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 165° SSE | aucun | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 163° SSE | aucun | couvert | 0.6 | 16°C |
| Saint-Romain-des-Iles | 6 | 13 | 159° SSE | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 6 | 13 | 159° SSE | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 139° SE | aucun | couvert | 0.0 | 16°C |
