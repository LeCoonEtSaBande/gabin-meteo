# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 12/11/2026 00:31 (Europe/Paris)
- Fichiers générés le : 2026-11-12T00:35:38+01:00
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

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 61° ENE | aucun | pluie | 12.1 | 13°C |
| Plage d'Excenevex | 10 | 15 | 47° NE | aucun | pluie | 11.5 | 13°C |
| Plage du Vengeron | 8 | 12 | 51° NE | aucun | pluie | 11.6 | 13°C |
| Plage d'Hermance | 9 | 12 | 54° NE | aucun | pluie | 12.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 332° NNO | aucun | pluie | 14.5 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 29° NNE | aucun | orage | 21.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 12 | 218° SO | aucun | orage | 20.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 6 | 347° NNO | aucun | orage | 20.9 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 11 | 12° NNE | aucun | orage | 27.6 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 335° NNO | aucun | orage | 19.7 | 15°C |
| Cruas - Nuclear Spot | 6 | 12 | 13° NNE | aucun | orage | 34.8 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 343° NNO | aucun | orage | 13.2 | 15°C |
| Nord du Pont de Chavanay | 8 | 16 | 344° NNO | aucun | orage | 12.3 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 325° NO | aucun | pluie | 14.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 353° N | aucun | orage | 11.3 | 14°C |
| Saint-Romain-des-Iles | 15 | 24 | 359° N | 17h-20h | pluie | 1.3 | 13°C |
| Nord du Pont d'Arciat | 16 | 24 | 356° N | 16h-20h | pluie | 1.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 351° N | aucun | orage | 19.6 | 14°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 25 | 36 | 39° NE | 08h-20h | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 26 | 36 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 24 | 33 | 33° NNE | 08h-20h | soleil | 0.0 | 9°C |
| Plage d'Hermance | 21 | 32 | 39° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 297° ONO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 14 | 19 | 355° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 22° NNE | 08h-18h | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 24 | 356° N | 08h-15h | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 20 | 34 | 11° N | 08h-20h | pluie | 0.7 | 10°C |
| La Roche-de-Glun - Base Nautique | 12 | 27 | 351° N | 08h-20h | soleil-couvert | 0.2 | 10°C |
| Cruas - Nuclear Spot | 18 | 36 | 20° NNE | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 27 | 3° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 14 | 24 | 4° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 22 | 333° NNO | 08h-15h | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 356° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 15 | 24 | 11° N | 08h-20h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 17 | 25 | 3° N | 08h-20h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 24 | 350° N | 11h-20h | soleil-couvert | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 40° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 15 | 21 | 29° NNE | 08h-11h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 11 | 15 | 49° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 11 | 16 | 54° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 345° NNO | aucun | soleil-couvert | 0.4 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 360° N | aucun | soleil-couvert | 0.5 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 30 | 169° S | 09h-20h | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 15 | 177° S | aucun | soleil-couvert | 0.1 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 16 | 187° S | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 176° S | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 9 | 17 | 25° NNE | aucun | soleil-couvert | 0.3 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 14 | 146° SE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 9 | 14 | 146° SE | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 22 | 177° S | aucun | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 12 | 22 | 177° S | aucun | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 8 | 196° SSO | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 4 | 8 | 196° SSO | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 152° SSE | aucun | soleil | 0.0 | 9°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 67° ENE | aucun | pluie | 3.9 | 10°C |
| Plage d'Excenevex | 3 | 4 | 156° SSE | aucun | pluie | 2.7 | 10°C |
| Plage du Vengeron | 7 | 9 | 204° SSO | aucun | pluie | 3.1 | 11°C |
| Plage d'Hermance | 6 | 9 | 209° SSO | aucun | pluie | 3.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 342° NNO | aucun | pluie | 1.9 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 56° NE | aucun | soleil-couvert | 0.6 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 20 | 38 | 172° S | 08h-20h | soleil-couvert | 0.2 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 179° S | 13h-16h | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 14 | 181° S | aucun | pluie | 2.9 | 11°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 179° S | aucun | pluie | 3.2 | 12°C |
| Cruas - Nuclear Spot | 4 | 5 | 85° E | aucun | couvert | 0.2 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 26 | 166° SSE | 11h-20h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 15 | 26 | 166° SSE | 11h-20h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 29 | 185° S | 08h-20h | soleil-couvert | 0.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 15 | 29 | 185° S | 08h-20h | soleil-couvert | 0.1 | 13°C |
| Saint-Romain-des-Iles | 16 | 24 | 174° S | 12h-20h | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 16 | 24 | 174° S | 12h-20h | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 29 | 185° S | 11h-20h | soleil-couvert | 0.5 | 13°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 24 | 175° S | 08h-20h | orage | 9.1 | 11°C |
| Plage d'Excenevex | 18 | 23 | 309° NO | 08h-17h | orage | 13.5 | 11°C |
| Plage du Vengeron | 15 | 21 | 291° ONO | 08h-16h | orage | 13.4 | 9°C |
| Plage d'Hermance | 18 | 28 | 289° ONO | 08h-16h | orage | 12.2 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 15 | 23 | 180° S | aucun | orage | 30.7 | 12°C |
| Lac du Bourget - Cap des Séselets | 12 | 18 | 162° SSE | aucun | orage | 21.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 21 | 40 | 171° S | aucun | orage | 10.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 23 | 138° SE | aucun | orage | 7.7 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 168° SSE | aucun | pluie | 7.2 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 171° S | aucun | pluie | 8.7 | 15°C |
| Cruas - Nuclear Spot | 7 | 16 | 197° SSO | aucun | pluie | 7.5 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 259° O | aucun | pluie | 4.2 | 14°C |
| Nord du Pont de Chavanay | 7 | 17 | 259° O | aucun | pluie | 4.2 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 21 | 245° OSO | aucun | pluie | 2.7 | 13°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 244° OSO | aucun | pluie | 3.9 | 13°C |
| Saint-Romain-des-Iles | 10 | 20 | 265° O | aucun | pluie | 2.7 | 10°C |
| Nord du Pont d'Arciat | 10 | 20 | 265° O | aucun | pluie | 2.7 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 18 | 214° SO | aucun | pluie | 3.9 | 11°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 14 | 244° OSO | aucun | orage | 15.8 | 14°C |
| Plage d'Excenevex | 8 | 14 | 244° OSO | aucun | orage | 15.8 | 14°C |
| Plage du Vengeron | 8 | 14 | 244° OSO | aucun | orage | 15.8 | 14°C |
| Plage d'Hermance | 8 | 14 | 244° OSO | aucun | orage | 15.8 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 15 | 121° ESE | aucun | orage | 16.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 128° SE | aucun | orage | 13.6 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 38 | 161° SSE | 11h-20h | pluie | 9.1 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 29 | 168° SSE | 13h-18h | pluie | 7.8 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 182° S | 14h-18h | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 14 | 30 | 196° SSO | 13h-20h | pluie | 0.6 | 11°C |
| Cruas - Nuclear Spot | 7 | 16 | 199° SSO | aucun | pluie | 0.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 30 | 179° S | 14h-20h | couvert | 0.2 | 11°C |
| Nord du Pont de Chavanay | 12 | 30 | 179° S | 14h-20h | couvert | 0.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 35 | 171° S | 13h-20h | couvert | 0.1 | 10°C |
| Saint-Cyr-sur-le-Rhône | 14 | 32 | 176° S | 13h-20h | couvert | 0.3 | 10°C |
| Saint-Romain-des-Iles | 13 | 21 | 174° S | 14h-20h | couvert | 0.9 | 9°C |
| Nord du Pont d'Arciat | 13 | 21 | 174° S | 14h-20h | couvert | 0.9 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 34 | 189° S | 15h-20h | pluie | 1.8 | 10°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 26 | 226° SO | 08h-20h | pluie | 4.1 | 14°C |
| Plage d'Excenevex | 16 | 26 | 226° SO | 08h-20h | pluie | 4.1 | 14°C |
| Plage du Vengeron | 16 | 26 | 226° SO | 08h-20h | pluie | 4.1 | 14°C |
| Plage d'Hermance | 16 | 26 | 226° SO | 08h-20h | pluie | 4.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 17 | 206° SSO | aucun | pluie | 4.9 | 11°C |
| Lac du Bourget - Cap des Séselets | 10 | 19 | 220° SO | aucun | pluie | 4.5 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 20 | 164° SSE | aucun | pluie | 2.1 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 180° S | aucun | pluie | 3.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 187° S | 10h-16h | couvert | 0.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 14 | 27 | 188° S | 09h-19h | couvert | 0.6 | 14°C |
| Cruas - Nuclear Spot | 8 | 19 | 193° SSO | aucun | soleil-couvert | 0.7 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 25 | 150° SSE | 11h-16h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 12 | 25 | 150° SSE | 11h-16h | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 156° SSE | 10h-15h | soleil-couvert | 0.4 | 13°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 149° SSE | 12h-15h | soleil-couvert | 0.2 | 13°C |
| Saint-Romain-des-Iles | 10 | 27 | 216° SO | aucun | pluie | 3.7 | 13°C |
| Nord du Pont d'Arciat | 10 | 27 | 216° SO | aucun | pluie | 3.7 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 23 | 193° SSO | 12h-15h | soleil-couvert | 0.8 | 13°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 23 | 206° SSO | 08h-20h | pluie | 11.8 | 10°C |
| Plage d'Excenevex | 21 | 31 | 215° SO | 08h-20h | pluie | 5.7 | 11°C |
| Plage du Vengeron | 18 | 23 | 206° SSO | 08h-20h | pluie | 11.8 | 10°C |
| Plage d'Hermance | 18 | 23 | 206° SSO | 08h-20h | pluie | 11.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 22 | 161° SSE | aucun | pluie | 6.6 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 21 | 184° S | aucun | pluie | 11.8 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 17 | 149° SSE | aucun | pluie | 6.7 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 16 | 132° SE | aucun | pluie | 4.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 193° SSO | 11h-17h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 191° S | 11h-20h | soleil-couvert | 0.3 | 13°C |
| Cruas - Nuclear Spot | 9 | 19 | 196° SSO | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 27 | 204° SSO | aucun | soleil-couvert | 0.6 | 14°C |
| Nord du Pont de Chavanay | 9 | 27 | 204° SSO | aucun | soleil-couvert | 0.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 219° SO | 11h-16h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 10 | 27 | 209° SSO | aucun | soleil-couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 12 | 26 | 214° SO | 12h-19h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 12 | 26 | 214° SO | 12h-19h | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 27 | 203° SSO | 12h-15h | soleil-couvert | 0.0 | 13°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 22 | 206° SSO | 08h-18h | pluie | 6.0 | 8°C |
| Plage d'Excenevex | 16 | 22 | 214° SO | 08h-20h | pluie | 3.7 | 9°C |
| Plage du Vengeron | 13 | 22 | 206° SSO | 08h-18h | pluie | 6.0 | 8°C |
| Plage d'Hermance | 13 | 22 | 206° SSO | 08h-18h | pluie | 6.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 14 | 156° SSE | aucun | pluie | 7.9 | 5°C |
| Lac du Bourget - Cap des Séselets | 7 | 19 | 206° SSO | aucun | pluie | 11.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 17 | 138° SE | aucun | pluie | 6.7 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 16 | 144° SE | aucun | pluie | 5.5 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 197° SSO | aucun | pluie | 1.2 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 24 | 203° SSO | aucun | pluie | 1.2 | 12°C |
| Cruas - Nuclear Spot | 6 | 17 | 211° SSO | aucun | soleil-couvert | 0.6 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 22 | 189° S | aucun | pluie | 1.2 | 13°C |
| Nord du Pont de Chavanay | 6 | 22 | 189° S | aucun | pluie | 1.2 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 22 | 174° S | aucun | pluie | 3.6 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 20 | 204° SSO | aucun | pluie | 4.8 | 12°C |
| Saint-Romain-des-Iles | 8 | 14 | 256° OSO | aucun | pluie | 2.4 | 10°C |
| Nord du Pont d'Arciat | 8 | 14 | 256° OSO | aucun | pluie | 2.4 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 22 | 218° SO | aucun | pluie | 4.2 | 10°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 251° OSO | aucun | pluie | 1.1 | 10°C |
| Plage d'Excenevex | 5 | 8 | 230° SO | aucun | pluie | 1.0 | 10°C |
| Plage du Vengeron | 7 | 10 | 251° OSO | aucun | pluie | 1.1 | 10°C |
| Plage d'Hermance | 7 | 10 | 251° OSO | aucun | pluie | 1.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 124° SE | aucun | pluie | 0.9 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 8° N | aucun | pluie | 1.1 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 171° S | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 172° S | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 176° S | aucun | soleil | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 18 | 185° S | aucun | soleil | 0.0 | 13°C |
| Cruas - Nuclear Spot | 4 | 12 | 174° S | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 157° SSE | aucun | soleil-couvert | 0.3 | 12°C |
| Nord du Pont de Chavanay | 7 | 16 | 157° SSE | aucun | soleil-couvert | 0.3 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 159° SSE | aucun | soleil-couvert | 0.3 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 160° SSE | aucun | soleil-couvert | 0.2 | 12°C |
| Saint-Romain-des-Iles | 5 | 11 | 152° SSE | aucun | pluie | 1.8 | 11°C |
| Nord du Pont d'Arciat | 5 | 11 | 152° SSE | aucun | pluie | 1.8 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 15 | 202° SSO | aucun | soleil-couvert | 0.0 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 13 | 243° OSO | aucun | pluie | 1.8 | 11°C |
| Plage d'Excenevex | 2 | 7 | 31° NNE | aucun | soleil-couvert | 0.6 | 11°C |
| Plage du Vengeron | 5 | 13 | 243° OSO | aucun | pluie | 1.8 | 11°C |
| Plage d'Hermance | 5 | 13 | 243° OSO | aucun | pluie | 1.8 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 158° SSE | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 336° NNO | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 171° S | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 177° S | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 193° SSO | aucun | couvert | 0.1 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 195° SSO | aucun | soleil-couvert | 0.7 | 13°C |
| Cruas - Nuclear Spot | 6 | 16 | 206° SSO | aucun | pluie | 1.1 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 186° S | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 22 | 186° S | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 27 | 179° S | 15h-20h | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 176° S | 17h-20h | soleil | 0.0 | 13°C |
| Saint-Romain-des-Iles | 7 | 12 | 183° S | aucun | soleil-couvert | 0.6 | 12°C |
| Nord du Pont d'Arciat | 7 | 12 | 183° S | aucun | soleil-couvert | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 172° S | aucun | pluie | 7.8 | 14°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 33° NNE | aucun | couvert | 0.3 | 10°C |
| Plage d'Excenevex | 6 | 9 | 9° N | aucun | pluie | 0.8 | 10°C |
| Plage du Vengeron | 4 | 9 | 33° NNE | aucun | couvert | 0.3 | 10°C |
| Plage d'Hermance | 4 | 9 | 33° NNE | aucun | couvert | 0.3 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 70° ENE | aucun | pluie | 0.7 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 22° NNE | aucun | pluie | 2.1 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 27 | 165° SSE | aucun | pluie | 2.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 26 | 160° SSE | aucun | pluie | 2.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 21 | 211° SSO | aucun | pluie | 18.1 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 198° SSO | aucun | pluie | 16.7 | 10°C |
| Cruas - Nuclear Spot | 8 | 20 | 181° S | aucun | pluie | 24.9 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 28 | 180° S | aucun | pluie | 16.9 | 10°C |
| Nord du Pont de Chavanay | 10 | 28 | 180° S | aucun | pluie | 16.9 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 174° S | aucun | pluie | 15.1 | 11°C |
| Saint-Cyr-sur-le-Rhône | 11 | 29 | 173° S | 11h-14h | pluie | 4.8 | 10°C |
| Saint-Romain-des-Iles | 4 | 15 | 185° S | aucun | orage | 33.4 | 8°C |
| Nord du Pont d'Arciat | 4 | 15 | 185° S | aucun | orage | 33.4 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 19 | 85° E | aucun | pluie | 17.5 | 8°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 225° SO | aucun | pluie | 4.2 | 8°C |
| Plage d'Excenevex | 2 | 6 | 308° NO | aucun | pluie | 6.6 | 8°C |
| Plage du Vengeron | 2 | 5 | 225° SO | aucun | pluie | 4.2 | 8°C |
| Plage d'Hermance | 2 | 5 | 225° SO | aucun | pluie | 4.2 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 218° SO | aucun | pluie | 3.1 | 7°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 26° NNE | aucun | couvert | 0.7 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 13 | 356° N | aucun | pluie | 4.8 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 14 | 324° NO | aucun | pluie | 3.1 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 19° NNE | aucun | soleil-couvert | 0.6 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 12° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 7 | 16 | 358° N | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 11 | 351° N | aucun | pluie | 1.3 | 9°C |
| Nord du Pont de Chavanay | 5 | 11 | 351° N | aucun | pluie | 1.3 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 319° NO | aucun | couvert | 0.7 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 333° NNO | aucun | pluie | 1.3 | 9°C |
| Saint-Romain-des-Iles | 6 | 12 | 298° ONO | aucun | pluie | 6.1 | 8°C |
| Nord du Pont d'Arciat | 6 | 12 | 298° ONO | aucun | pluie | 6.1 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 277° O | aucun | pluie | 1.3 | 8°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 215° SO | aucun | pluie | 11.3 | 6°C |
| Plage d'Excenevex | 4 | 10 | 244° OSO | aucun | pluie | 6.4 | 7°C |
| Plage du Vengeron | 4 | 9 | 215° SO | aucun | pluie | 11.3 | 6°C |
| Plage d'Hermance | 4 | 9 | 215° SO | aucun | pluie | 11.3 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 296° ONO | aucun | pluie | 2.8 | 2°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 219° SO | aucun | pluie | 4.9 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 23 | 351° N | aucun | pluie | 2.7 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 25 | 345° NNO | aucun | pluie | 2.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 31 | 8° N | 08h-20h | pluie | 1.2 | 7°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 360° N | 08h-20h | pluie | 1.3 | 7°C |
| Cruas - Nuclear Spot | 13 | 30 | 10° N | 08h-20h | couvert | 0.4 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 337° NNO | 10h-15h | couvert | 0.8 | 6°C |
| Nord du Pont de Chavanay | 11 | 24 | 337° NNO | 10h-15h | couvert | 0.8 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 333° NNO | 09h-15h | pluie | 1.1 | 6°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 331° NNO | 09h-15h | couvert | 0.9 | 6°C |
| Saint-Romain-des-Iles | 12 | 21 | 316° NO | 08h-16h | pluie | 1.8 | 5°C |
| Nord du Pont d'Arciat | 12 | 21 | 316° NO | 08h-16h | pluie | 1.8 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 21 | 336° NNO | aucun | pluie | 3.0 | 5°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 10 | 183° S | aucun | pluie | 5.4 |  |
| Plage d'Excenevex | 3 | 10 | 227° SO | aucun | pluie | 2.4 |  |
| Plage du Vengeron | 3 | 10 | 183° S | aucun | pluie | 5.4 |  |
| Plage d'Hermance | 3 | 10 | 183° S | aucun | pluie | 5.4 |  |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 302° ONO | aucun | pluie | 2.4 |  |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 187° S | aucun | pluie | 3.6 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 351° N | aucun | pluie | 1.2 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 20 | 345° NNO | aucun | couvert | 0.6 |  |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 10° N | 08h-13h | couvert | 0.6 |  |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 1° N | 08h-13h | pluie | 1.2 |  |
| Cruas - Nuclear Spot | 13 | 31 | 14° NNE | 08h-13h | couvert | 0.6 |  |
| Centrale de Saint-Alban-du-Rhône | 9 | 20 | 352° N | aucun | pluie | 1.8 |  |
| Nord du Pont de Chavanay | 9 | 20 | 352° N | aucun | pluie | 1.8 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 345° NNO | aucun | pluie | 1.8 |  |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 346° NNO | aucun | pluie | 1.8 |  |
| Saint-Romain-des-Iles | 10 | 19 | 340° NNO | 10h-13h | pluie | 1.6 |  |
| Nord du Pont d'Arciat | 10 | 19 | 340° NNO | 10h-13h | pluie | 1.6 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 342° NNO | aucun | pluie | 1.8 |  |
