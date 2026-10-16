# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 16/10/2026 11:57 (Europe/Paris)
- Fichiers générés le : 2026-10-16T12:02:49+02:00
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

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 51° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 4 | 5 | 164° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 6 | 8 | 23° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 6 | 8 | 21° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 277° O | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 197° SSO | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 4° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 17 | 350° N | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 9 | 14° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 320° NO | aucun | soleil | 0.0 | 22°C |
| Cruas - Nuclear Spot | 5 | 10 | 32° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 9 | 22° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 5 | 10 | 28° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 31° NNE | aucun | soleil | 0.0 | 23°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 227° SO | aucun | soleil-couvert | 0.0 | 24°C |
| Saint-Romain-des-Iles | 3 | 7 | 33° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont d'Arciat | 3 | 6 | 70° ENE | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 28° NNE | aucun | soleil | 0.0 | 20°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 22 | 51° NE | aucun | orage | 17.4 | 15°C |
| Plage d'Excenevex | 18 | 25 | 34° NE | aucun | orage | 17.7 | 16°C |
| Plage du Vengeron | 16 | 22 | 44° NE | aucun | pluie | 8.8 | 15°C |
| Plage d'Hermance | 14 | 22 | 50° NE | aucun | orage | 12.1 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 17 | 319° NO | aucun | pluie | 2.3 | 15°C |
| Lac du Bourget - Cap des Séselets | 7 | 10 | 118° ESE | aucun | couvert | 0.1 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 1° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 19 | 359° N | 13h-17h | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 30 | 6° N | 10h-20h | couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 344° NNO | 14h-19h | couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 17 | 34 | 19° NNE | 11h-20h | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 23 | 354° N | 12h-20h | couvert | 0.2 | 15°C |
| Nord du Pont de Chavanay | 12 | 22 | 360° N | 13h-20h | couvert | 0.3 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 329° NNO | aucun | couvert | 0.3 | 14°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 7° N | aucun | couvert | 0.2 | 14°C |
| Saint-Romain-des-Iles | 12 | 20 | 9° N | 11h-18h | couvert | 0.9 | 12°C |
| Nord du Pont d'Arciat | 12 | 18 | 3° N | 11h-18h | couvert | 0.7 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 22 | 355° N | 13h-20h | couvert | 0.2 | 13°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 25 | 48° NE | 08h-20h | couvert | 0.1 | 11°C |
| Plage d'Excenevex | 20 | 29 | 30° NNE | 08h-20h | couvert | 0.3 | 11°C |
| Plage du Vengeron | 17 | 24 | 32° NNE | 08h-20h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 15 | 24 | 36° NE | 08h-14h | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 307° NO | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 41° NE | aucun | pluie | 3.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 358° N | aucun | couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 354° N | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 23 | 28° NNE | 08h-20h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 19 | 35° NE | 13h-18h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 15 | 30 | 9° N | 08h-20h | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 19 | 34° NE | aucun | soleil-couvert | 0.1 | 14°C |
| Nord du Pont de Chavanay | 10 | 19 | 34° NE | aucun | soleil-couvert | 0.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 346° NNO | aucun | soleil-couvert | 0.4 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 346° NNO | aucun | soleil-couvert | 0.3 | 13°C |
| Saint-Romain-des-Iles | 9 | 15 | 336° NNO | aucun | couvert | 0.5 | 12°C |
| Nord du Pont d'Arciat | 9 | 15 | 336° NNO | aucun | couvert | 0.7 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 340° NNO | aucun | soleil-couvert | 0.4 | 12°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 52° NE | 08h-20h | couvert | 0.1 | 14°C |
| Plage d'Excenevex | 16 | 21 | 24° NNE | 14h-20h | couvert | 0.0 | 13°C |
| Plage du Vengeron | 11 | 15 | 42° NE | 08h-12h | couvert | 0.3 | 14°C |
| Plage d'Hermance | 12 | 18 | 49° NE | 15h-18h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 289° ONO | aucun | couvert | 0.1 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 41° NE | aucun | couvert | 0.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 235° SO | aucun | pluie | 2.9 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 348° NNO | aucun | pluie | 5.5 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 357° N | 08h-14h | pluie | 7.6 | 10°C |
| La Roche-de-Glun - Base Nautique | 9 | 16 | 347° NNO | aucun | pluie | 10.6 | 10°C |
| Cruas - Nuclear Spot | 11 | 23 | 10° N | 08h-13h | pluie | 5.7 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 7° N | aucun | pluie | 7.5 | 10°C |
| Nord du Pont de Chavanay | 8 | 13 | 7° N | aucun | pluie | 7.5 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 347° NNO | aucun | pluie | 6.9 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 347° NNO | aucun | pluie | 6.9 | 9°C |
| Saint-Romain-des-Iles | 5 | 9 | 358° N | aucun | pluie | 5.7 | 10°C |
| Nord du Pont d'Arciat | 5 | 9 | 358° N | aucun | pluie | 5.7 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 342° NNO | aucun | pluie | 4.6 | 10°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 39° NE | aucun | pluie | 1.1 | 15°C |
| Plage d'Excenevex | 7 | 9 | 40° NE | aucun | pluie | 0.9 | 14°C |
| Plage du Vengeron | 5 | 7 | 25° NNE | aucun | pluie | 1.0 | 15°C |
| Plage d'Hermance | 5 | 8 | 34° NE | aucun | pluie | 1.1 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 357° N | aucun | pluie | 1.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 242° OSO | aucun | pluie | 2.8 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 29 | 169° S | 08h-19h | pluie | 1.2 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 185° S | aucun | pluie | 0.9 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 185° S | aucun | orage | 44.8 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 23 | 170° S | aucun | orage | 26.1 | 15°C |
| Cruas - Nuclear Spot | 6 | 29 | 7° N | aucun | orage | 28.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 179° S | aucun | pluie | 8.2 | 18°C |
| Nord du Pont de Chavanay | 10 | 22 | 179° S | aucun | pluie | 8.2 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 169° S | aucun | orage | 11.1 | 18°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 174° S | aucun | orage | 10.8 | 18°C |
| Saint-Romain-des-Iles | 9 | 14 | 306° NO | aucun | pluie | 14.6 | 14°C |
| Nord du Pont d'Arciat | 9 | 14 | 306° NO | aucun | pluie | 14.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 168° SSE | aucun | pluie | 12.0 | 17°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 240° OSO | 14h-20h | pluie | 7.7 | 14°C |
| Plage d'Excenevex | 12 | 18 | 240° OSO | 14h-20h | pluie | 7.7 | 14°C |
| Plage du Vengeron | 12 | 18 | 240° OSO | 14h-20h | pluie | 7.7 | 14°C |
| Plage d'Hermance | 12 | 18 | 240° OSO | 14h-20h | pluie | 7.7 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 263° O | aucun | pluie | 12.9 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 16 | 212° SSO | aucun | soleil-couvert | 0.3 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 16 | 317° NO | aucun | pluie | 5.4 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 18 | 342° NNO | aucun | orage | 13.8 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 185° S | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 189° S | aucun | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 7 | 16 | 173° S | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 163° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 10 | 23 | 163° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 162° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 164° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 10 | 18 | 177° S | aucun | soleil-couvert | 0.9 | 15°C |
| Nord du Pont d'Arciat | 10 | 18 | 177° S | aucun | soleil-couvert | 0.9 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 191° S | aucun | soleil-couvert | 0.0 | 15°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 253° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 4 | 8 | 253° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 4 | 8 | 253° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 4 | 8 | 253° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 331° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 44° NE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 328° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 351° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 355° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 348° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 9 | 22 | 9° N | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 11° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 6 | 14 | 11° N | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 3° N | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 359° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 9 | 141° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 3 | 9 | 141° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 4° N | aucun | couvert | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 26 | 238° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 16 | 26 | 238° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 16 | 26 | 238° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 16 | 26 | 238° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 16 | 240° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 12 | 360° N | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 15 | 224° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 224° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 182° S | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 183° S | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 4 | 11 | 195° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 21 | 193° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 8 | 21 | 193° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 179° S | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 22 | 179° S | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 7 | 14 | 168° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 7 | 14 | 168° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 151° SSE | aucun | soleil-couvert | 0.0 | 15°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 211° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 7 | 11 | 39° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 6 | 10 | 211° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 6 | 10 | 211° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 124° SE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 146° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 346° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 17 | 347° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 29 | 12° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 8 | 27 | 7° N | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 11 | 26 | 16° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 19 | 350° N | aucun | soleil-couvert | 0.6 | 17°C |
| Nord du Pont de Chavanay | 9 | 19 | 350° N | aucun | soleil-couvert | 0.6 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 350° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 349° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 8 | 15 | 318° NO | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 8 | 15 | 318° NO | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 338° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 26° NNE | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 7 | 13 | 17° NNE | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 6 | 10 | 26° NNE | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 6 | 10 | 26° NNE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 304° NO | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 218° SO | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 7° N | aucun | couvert | 0.7 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 344° NNO | aucun | couvert | 0.6 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 10° N | 09h-16h | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 6° N | aucun | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 26 | 20° NNE | 08h-17h | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 360° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 16 | 360° N | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 355° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 354° N | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 11 | 9° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 4 | 11 | 9° N | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 14 | 338° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 208° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 8 | 10 | 236° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 9 | 12 | 208° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 9 | 12 | 208° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 254° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 9° N | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 158° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 173° S | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 186° S | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 188° S | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 4 | 11 | 192° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 157° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 9 | 157° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 201° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 162° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 3 | 9 | 162° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 3 | 9 | 162° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 184° S | aucun | soleil-couvert | 0.0 | 16°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 208° SSO | 08h-20h | pluie | 3.7 | 15°C |
| Plage d'Excenevex | 17 | 25 | 220° SO | 08h-20h | pluie | 2.5 | 15°C |
| Plage du Vengeron | 13 | 19 | 208° SSO | 08h-20h | pluie | 3.7 | 15°C |
| Plage d'Hermance | 13 | 19 | 208° SSO | 08h-20h | pluie | 3.7 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 15 | 187° S | aucun | pluie | 9.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 197° SSO | aucun | pluie | 8.6 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 159° SSE | aucun | pluie | 1.8 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 156° SSE | aucun | pluie | 1.2 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 189° S | aucun | soleil-couvert | 0.7 | 17°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 193° SSO | 11h-14h | pluie | 2.0 | 16°C |
| Cruas - Nuclear Spot | 5 | 16 | 192° SSO | aucun | soleil-couvert | 0.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 16 | 172° S | aucun | pluie | 1.5 | 16°C |
| Nord du Pont de Chavanay | 8 | 16 | 172° S | aucun | pluie | 1.5 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 17 | 173° S | aucun | soleil-couvert | 0.8 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 161° SSE | aucun | pluie | 1.4 | 16°C |
| Saint-Romain-des-Iles | 5 | 17 | 283° ONO | aucun | pluie | 1.3 | 16°C |
| Nord du Pont d'Arciat | 5 | 17 | 283° ONO | aucun | pluie | 1.3 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 176° S | aucun | pluie | 11.0 | 16°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 15 | 213° SSO | aucun | soleil-couvert | 0.2 | 12°C |
| Plage d'Excenevex | 7 | 17 | 230° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 6 | 15 | 213° SSO | aucun | soleil-couvert | 0.2 | 12°C |
| Plage d'Hermance | 6 | 15 | 213° SSO | aucun | soleil-couvert | 0.2 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 302° ONO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 54° NE | aucun | soleil-couvert | 0.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 23 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 24 | 354° N | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 32 | 0° N | 08h-19h | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 357° N | 10h-17h | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 13 | 30 | 7° N | 08h-19h | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 357° N | aucun | soleil | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 19 | 357° N | aucun | soleil | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 349° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 352° N | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 4 | 9 | 330° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 9 | 330° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 340° NNO | aucun | soleil-couvert | 0.0 | 12°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 229° SO | 09h-20h | pluie | 1.2 | 12°C |
| Plage d'Excenevex | 16 | 22 | 223° SO | 08h-20h | couvert | 0.6 | 13°C |
| Plage du Vengeron | 12 | 18 | 229° SO | 09h-20h | pluie | 1.2 | 12°C |
| Plage d'Hermance | 12 | 18 | 229° SO | 09h-20h | pluie | 1.2 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 237° OSO | aucun | pluie | 3.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 264° O | aucun | couvert | 0.6 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 19 | 11° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 19 | 6° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 70° ENE | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 99° E | aucun | soleil-couvert | 0.6 | 16°C |
| Cruas - Nuclear Spot | 5 | 13 | 40° NE | aucun | couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 13 | 150° SSE | aucun | couvert | 0.6 | 16°C |
| Nord du Pont de Chavanay | 4 | 13 | 150° SSE | aucun | couvert | 0.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 165° SSE | aucun | soleil-couvert | 0.6 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 168° SSE | aucun | soleil-couvert | 0.6 | 15°C |
| Saint-Romain-des-Iles | 6 | 11 | 179° S | aucun | pluie | 2.4 | 13°C |
| Nord du Pont d'Arciat | 6 | 11 | 179° S | aucun | pluie | 2.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 157° SSE | aucun | pluie | 1.8 | 14°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 207° SSO | 08h-16h | soleil-couvert | 0.8 | 10°C |
| Plage d'Excenevex | 14 | 21 | 222° SO | 08h-20h | pluie | 1.4 | 10°C |
| Plage du Vengeron | 11 | 18 | 207° SSO | 08h-16h | soleil-couvert | 0.8 | 10°C |
| Plage d'Hermance | 11 | 18 | 207° SSO | 08h-16h | soleil-couvert | 0.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 116° ESE | aucun | soleil-couvert | 0.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 195° SSO | aucun | pluie | 2.5 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 31 | 353° N | aucun | soleil-couvert | 0.1 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 32 | 351° N | aucun | soleil-couvert | 0.1 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 27 | 5° N | 10h-17h | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 23 | 11° N | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 12 | 28 | 17° NNE | 11h-17h | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 3° N | aucun | soleil-couvert | 0.6 | 12°C |
| Nord du Pont de Chavanay | 8 | 20 | 3° N | aucun | soleil-couvert | 0.6 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 350° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 359° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 9 | 19 | 300° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 9 | 19 | 300° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 329° NNO | aucun | soleil-couvert | 0.6 | 11°C |
