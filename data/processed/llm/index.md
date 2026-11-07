# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 07/11/2026 12:49 (Europe/Paris)
- Fichiers générés le : 2026-11-07T12:53:58+01:00
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

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 220° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 6 | 9 | 224° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 5 | 232° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 6 | 8 | 226° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 352° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 9 | 44° NE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 182° S | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 12 | 358° N | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 17° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 352° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 7 | 15 | 31° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 27° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 4 | 9 | 41° NE | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 333° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 10° N | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 3 | 6 | 225° SO | aucun | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 3 | 5 | 62° ENE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 7 | 285° ONO | aucun | soleil-couvert | 0.0 | 8°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 79° E | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 3 | 5 | 60° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 7 | 215° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 4 | 5 | 43° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 186° S | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 3 | 133° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 188° S | 11h-15h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 203° SSO | aucun | couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 11 | 197° SSO | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 197° SSO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 3 | 6 | 149° SSE | aucun | couvert | 0.2 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 16 | 159° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 9 | 16 | 163° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 171° S | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 196° SSO | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 6 | 34° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 5 | 6 | 36° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 13 | 177° S | aucun | soleil-couvert | 0.0 | 11°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 50° NE | aucun | couvert | 0.6 | 12°C |
| Plage d'Excenevex | 3 | 6 | 101° E | aucun | couvert | 0.6 | 12°C |
| Plage du Vengeron | 3 | 4 | 40° NE | aucun | couvert | 0.3 | 13°C |
| Plage d'Hermance | 3 | 5 | 79° E | aucun | couvert | 0.2 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 137° SE | aucun | couvert | 0.1 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 14° NNE | aucun | couvert | 0.6 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 34 | 173° S | 08h-20h | pluie | 2.7 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 21 | 155° SSE | 13h-17h | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 21 | 214° SO | 10h-20h | pluie | 1.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 14 | 25 | 202° SSO | 10h-20h | couvert | 0.7 | 15°C |
| Cruas - Nuclear Spot | 8 | 14 | 183° S | aucun | pluie | 3.4 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 28 | 181° S | 10h-20h | pluie | 1.0 | 16°C |
| Nord du Pont de Chavanay | 15 | 28 | 181° S | 10h-20h | pluie | 1.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 32 | 193° SSO | 08h-20h | couvert | 0.3 | 15°C |
| Saint-Cyr-sur-le-Rhône | 16 | 32 | 193° SSO | 08h-20h | couvert | 0.3 | 15°C |
| Saint-Romain-des-Iles | 17 | 27 | 178° S | 14h-20h | couvert | 0.5 | 16°C |
| Nord du Pont d'Arciat | 17 | 27 | 178° S | 14h-20h | couvert | 0.5 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 24 | 188° S | 09h-20h | couvert | 0.5 | 16°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 11 | 216° SO | aucun | couvert | 0.0 | 17°C |
| Plage d'Excenevex | 4 | 6 | 60° ENE | aucun | couvert | 0.0 | 18°C |
| Plage du Vengeron | 8 | 10 | 221° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 8 | 12 | 230° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 57° ENE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 49° NE | aucun | pluie | 4.7 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 21 | 183° S | aucun | pluie | 0.8 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 200° SSO | aucun | pluie | 1.6 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 12 | 204° SSO | aucun | couvert | 0.4 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 14 | 208° SSO | aucun | couvert | 0.1 | 17°C |
| Cruas - Nuclear Spot | 3 | 3 | 67° ENE | aucun | pluie | 4.4 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 162° SSE | aucun | soleil-couvert | 0.3 | 18°C |
| Nord du Pont de Chavanay | 9 | 16 | 162° SSE | aucun | soleil-couvert | 0.3 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 198° SSO | aucun | soleil-couvert | 0.8 | 17°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 198° SSO | aucun | soleil-couvert | 0.8 | 17°C |
| Saint-Romain-des-Iles | 7 | 10 | 192° SSO | aucun | pluie | 2.3 | 15°C |
| Nord du Pont d'Arciat | 7 | 10 | 192° SSO | aucun | pluie | 2.3 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 11 | 163° SSE | aucun | pluie | 2.3 | 16°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 203° SSO | aucun | pluie | 2.7 | 15°C |
| Plage d'Excenevex | 3 | 4 | 60° ENE | aucun | pluie | 3.1 | 14°C |
| Plage du Vengeron | 4 | 6 | 183° S | aucun | pluie | 2.0 | 16°C |
| Plage d'Hermance | 6 | 8 | 174° S | aucun | pluie | 2.8 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 58° ENE | aucun | pluie | 4.2 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 12 | 28° NNE | aucun | pluie | 6.3 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 28 | 178° S | 08h-20h | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 170° S | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 213° SSO | aucun | pluie | 2.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 10 | 17 | 206° SSO | 10h-13h | couvert | 0.1 | 16°C |
| Cruas - Nuclear Spot | 8 | 18 | 186° S | aucun | pluie | 8.5 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 19 | 174° S | 10h-13h | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 11 | 19 | 174° S | 10h-13h | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 194° SSO | 08h-16h | pluie | 3.2 | 15°C |
| Saint-Cyr-sur-le-Rhône | 12 | 24 | 194° SSO | 08h-14h | pluie | 1.2 | 15°C |
| Saint-Romain-des-Iles | 8 | 13 | 184° S | aucun | pluie | 4.1 | 15°C |
| Nord du Pont d'Arciat | 8 | 13 | 184° S | aucun | pluie | 4.1 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 26 | 194° SSO | 09h-14h | pluie | 1.7 | 15°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 8 | 315° NO | aucun | soleil-couvert | 0.3 | 16°C |
| Plage d'Excenevex | 3 | 8 | 315° NO | aucun | soleil-couvert | 0.3 | 16°C |
| Plage du Vengeron | 3 | 8 | 315° NO | aucun | soleil-couvert | 0.3 | 16°C |
| Plage d'Hermance | 3 | 8 | 315° NO | aucun | soleil-couvert | 0.3 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 109° ESE | aucun | pluie | 1.8 | 15°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 27° NNE | aucun | pluie | 14.9 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 15 | 191° S | aucun | pluie | 3.6 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 183° S | aucun | soleil-couvert | 0.3 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 17 | 1° N | aucun | pluie | 13.9 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 342° NNO | aucun | pluie | 13.9 | 14°C |
| Cruas - Nuclear Spot | 9 | 18 | 7° N | aucun | pluie | 12.3 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 328° NNO | aucun | pluie | 4.4 | 14°C |
| Nord du Pont de Chavanay | 4 | 9 | 328° NNO | aucun | pluie | 4.4 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 322° NO | aucun | pluie | 2.9 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 333° NNO | aucun | pluie | 4.1 | 14°C |
| Saint-Romain-des-Iles | 3 | 4 | 299° ONO | aucun | couvert | 0.3 | 15°C |
| Nord du Pont d'Arciat | 3 | 4 | 299° ONO | aucun | couvert | 0.3 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 323° NO | aucun | pluie | 1.9 | 14°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 10° N | aucun | couvert | 0.6 | 15°C |
| Plage d'Excenevex | 4 | 8 | 10° N | aucun | couvert | 0.6 | 15°C |
| Plage du Vengeron | 4 | 8 | 10° N | aucun | couvert | 0.6 | 15°C |
| Plage d'Hermance | 4 | 8 | 10° N | aucun | couvert | 0.6 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 299° ONO | aucun | pluie | 4.7 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 216° SO | aucun | pluie | 10.7 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 335° NNO | aucun | pluie | 3.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 7° N | aucun | couvert | 0.9 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 355° N | aucun | pluie | 3.1 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 347° NNO | aucun | pluie | 2.4 | 15°C |
| Cruas - Nuclear Spot | 2 | 14 | 358° N | aucun | pluie | 3.7 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 20 | 353° N | aucun | pluie | 12.7 | 13°C |
| Nord du Pont de Chavanay | 10 | 20 | 353° N | aucun | pluie | 12.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 329° NNO | aucun | pluie | 15.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 11 | 23 | 345° NNO | aucun | pluie | 13.9 | 13°C |
| Saint-Romain-des-Iles | 12 | 22 | 345° NNO | aucun | pluie | 10.8 | 11°C |
| Nord du Pont d'Arciat | 12 | 22 | 345° NNO | aucun | pluie | 10.8 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 342° NNO | aucun | pluie | 9.7 | 12°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 22 | 24° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 15 | 24 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 15 | 22 | 24° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 15 | 22 | 24° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 18 | 1° N | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 7 | 18 | 34° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 18 | 354° N | aucun | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 344° NNO | aucun | couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 33 | 6° N | 08h-20h | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 14 | 27 | 358° N | 08h-20h | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 16 | 35 | 16° NNE | 08h-20h | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 349° N | 08h-15h | couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 11 | 26 | 349° N | 08h-15h | couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 24 | 336° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 337° NNO | 08h-14h | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 10 | 21 | 344° NNO | aucun | soleil | 0.0 | 7°C |
| Nord du Pont d'Arciat | 10 | 21 | 344° NNO | aucun | soleil | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 24 | 337° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 14 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 8 | 14 | 35° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 7 | 14 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 7 | 14 | 34° NE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 331° NNO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 22° NNE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 171° S | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 5 | 163° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 16° NNE | aucun | soleil | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 202° SSO | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 6 | 19 | 35° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 193° SSO | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 4 | 9 | 193° SSO | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 216° SO | aucun | soleil | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 189° S | aucun | soleil | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 8 | 133° SE | aucun | soleil | 0.0 | 5°C |
| Nord du Pont d'Arciat | 2 | 8 | 133° SE | aucun | soleil | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 172° S | aucun | soleil | 0.0 | 7°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 16° NNE | aucun | pluie | 0.5 | 10°C |
| Plage d'Excenevex | 5 | 9 | 34° NE | aucun | soleil-couvert | 0.4 | 10°C |
| Plage du Vengeron | 5 | 9 | 16° NNE | aucun | pluie | 0.5 | 10°C |
| Plage d'Hermance | 5 | 9 | 16° NNE | aucun | pluie | 0.5 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 120° ESE | aucun | pluie | 0.5 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 15° NNE | aucun | soleil-couvert | 0.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 31 | 161° SSE | aucun | pluie | 0.8 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 30 | 159° SSE | aucun | pluie | 0.9 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 29 | 177° S | 15h-20h | pluie | 1.5 | 12°C |
| La Roche-de-Glun - Base Nautique | 12 | 29 | 196° SSO | 12h-20h | pluie | 0.7 | 12°C |
| Cruas - Nuclear Spot | 14 | 32 | 182° S | 15h-20h | pluie | 2.2 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 32 | 193° SSO | 10h-20h | couvert | 0.4 | 12°C |
| Nord du Pont de Chavanay | 14 | 32 | 193° SSO | 10h-20h | couvert | 0.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 41 | 178° S | 08h-20h | soleil-couvert | 0.3 | 13°C |
| Saint-Cyr-sur-le-Rhône | 16 | 35 | 181° S | 08h-20h | couvert | 0.4 | 12°C |
| Saint-Romain-des-Iles | 13 | 25 | 165° SSE | 11h-20h | couvert | 0.1 | 13°C |
| Nord du Pont d'Arciat | 13 | 25 | 165° SSE | 11h-20h | couvert | 0.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 26 | 182° S | 14h-20h | pluie | 0.6 | 14°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 209° SSO | 10h-20h | pluie | 3.3 | 11°C |
| Plage d'Excenevex | 16 | 21 | 219° SO | 10h-20h | pluie | 2.3 | 12°C |
| Plage du Vengeron | 14 | 18 | 209° SSO | 10h-20h | pluie | 3.3 | 11°C |
| Plage d'Hermance | 14 | 18 | 209° SSO | 10h-20h | pluie | 3.3 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 176° S | aucun | pluie | 5.3 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 209° SSO | aucun | pluie | 3.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 7° N | aucun | pluie | 1.3 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 15° NNE | aucun | pluie | 1.2 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 17 | 175° S | aucun | soleil-couvert | 0.6 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 20 | 194° SSO | aucun | soleil-couvert | 0.6 | 14°C |
| Cruas - Nuclear Spot | 3 | 9 | 206° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 20 | 163° SSE | aucun | soleil-couvert | 0.7 | 14°C |
| Nord du Pont de Chavanay | 4 | 20 | 163° SSE | aucun | soleil-couvert | 0.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 30 | 167° SSE | aucun | soleil-couvert | 0.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 4 | 13 | 191° S | aucun | soleil-couvert | 0.1 | 13°C |
| Saint-Romain-des-Iles | 7 | 18 | 210° SSO | aucun | pluie | 1.8 | 12°C |
| Nord du Pont d'Arciat | 7 | 18 | 210° SSO | aucun | pluie | 1.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 194° SSO | aucun | soleil-couvert | 0.7 | 12°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 16 | 201° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 12 | 17 | 232° SO | 08h-16h | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 16 | 201° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 9 | 16 | 201° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 266° O | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 205° SSO | aucun | soleil-couvert | 0.6 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 20 | 355° N | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 354° N | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 5° N | aucun | soleil-couvert | 0.2 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 6° N | aucun | soleil-couvert | 0.3 | 9°C |
| Cruas - Nuclear Spot | 10 | 23 | 15° NNE | 08h-12h | couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 16° NNE | aucun | soleil-couvert | 0.3 | 9°C |
| Nord du Pont de Chavanay | 6 | 14 | 16° NNE | aucun | soleil-couvert | 0.3 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 354° N | aucun | couvert | 0.2 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 360° N | aucun | soleil-couvert | 0.2 | 8°C |
| Saint-Romain-des-Iles | 6 | 12 | 290° ONO | aucun | soleil-couvert | 0.2 | 8°C |
| Nord du Pont d'Arciat | 6 | 12 | 290° ONO | aucun | soleil-couvert | 0.2 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 320° NO | aucun | soleil-couvert | 0.2 | 8°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 238° OSO | aucun | pluie | 9.5 | 8°C |
| Plage d'Excenevex | 8 | 13 | 256° OSO | aucun | pluie | 7.0 | 9°C |
| Plage du Vengeron | 8 | 14 | 238° OSO | aucun | pluie | 9.5 | 8°C |
| Plage d'Hermance | 8 | 14 | 238° OSO | aucun | pluie | 9.5 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 16 | 123° ESE | aucun | pluie | 8.4 | 6°C |
| Lac du Bourget - Cap des Séselets | 1 | 10 | 281° O | aucun | pluie | 9.3 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 170° S | aucun | pluie | 7.4 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 162° SSE | aucun | pluie | 5.2 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 20 | 185° S | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 195° SSO | 08h-16h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 11 | 197° SSO | aucun | couvert | 0.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 163° SSE | 08h-14h | pluie | 1.9 | 10°C |
| Nord du Pont de Chavanay | 12 | 26 | 163° SSE | 08h-14h | pluie | 1.9 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 28 | 167° SSE | 08h-19h | pluie | 1.8 | 10°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 166° SSE | 08h-15h | pluie | 2.6 | 10°C |
| Saint-Romain-des-Iles | 5 | 13 | 173° S | aucun | pluie | 16.9 | 9°C |
| Nord du Pont d'Arciat | 5 | 13 | 173° S | aucun | pluie | 16.9 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 23 | 192° SSO | aucun | pluie | 13.2 | 10°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 214° SO | aucun | pluie | 4.8 | 8°C |
| Plage d'Excenevex | 13 | 19 | 230° SO | 08h-13h | pluie | 2.4 | 9°C |
| Plage du Vengeron | 10 | 16 | 214° SO | aucun | pluie | 4.8 | 8°C |
| Plage d'Hermance | 10 | 16 | 214° SO | aucun | pluie | 4.8 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 193° SSO | aucun | pluie | 2.4 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 244° OSO | aucun | soleil-couvert | 0.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 9 | 298° ONO | aucun | pluie | 3.6 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 325° NO | aucun | pluie | 1.8 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 175° S | aucun | couvert | 0.7 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 14 | 179° S | aucun | pluie | 1.3 | 11°C |
| Cruas - Nuclear Spot | 1 | 10 | 315° NO | aucun | pluie | 4.4 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 11 | 97° E | aucun | pluie | 4.9 | 11°C |
| Nord du Pont de Chavanay | 3 | 11 | 97° E | aucun | pluie | 4.9 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 158° SSE | aucun | pluie | 2.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 97° E | aucun | pluie | 6.5 | 10°C |
| Saint-Romain-des-Iles | 3 | 9 | 230° SO | aucun | pluie | 1.9 | 10°C |
| Nord du Pont d'Arciat | 3 | 9 | 230° SO | aucun | pluie | 1.9 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 14 | 131° SE | aucun | pluie | 1.2 | 10°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 32° NNE | aucun | pluie | 12.9 | 6°C |
| Plage d'Excenevex | 8 | 13 | 26° NNE | aucun | pluie | 9.5 | 7°C |
| Plage du Vengeron | 7 | 12 | 32° NNE | aucun | pluie | 12.9 | 6°C |
| Plage d'Hermance | 7 | 12 | 32° NNE | aucun | pluie | 12.9 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 331° NNO | aucun | pluie | 6.7 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 30° NNE | aucun | pluie | 5.6 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 351° N | aucun | pluie | 4.7 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 354° N | aucun | pluie | 3.9 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 22 | 12° NNE | 17h-20h | pluie | 1.2 | 8°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 6° N | aucun | pluie | 6.6 | 7°C |
| Cruas - Nuclear Spot | 9 | 22 | 13° NNE | aucun | pluie | 1.8 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 351° N | aucun | pluie | 8.5 | 7°C |
| Nord du Pont de Chavanay | 8 | 18 | 351° N | aucun | pluie | 8.5 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 346° NNO | aucun | pluie | 8.4 | 6°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 343° NNO | aucun | pluie | 9.1 | 6°C |
| Saint-Romain-des-Iles | 10 | 17 | 344° NNO | aucun | pluie | 2.5 | 6°C |
| Nord du Pont d'Arciat | 10 | 17 | 344° NNO | aucun | pluie | 2.5 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 341° NNO | aucun | pluie | 3.0 | 6°C |
