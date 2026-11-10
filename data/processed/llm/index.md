# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 10/11/2026 14:38 (Europe/Paris)
- Fichiers générés le : 2026-11-10T14:43:17+01:00
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

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 236° SO | aucun | couvert | 0.4 | 12°C |
| Plage d'Excenevex | 3 | 4 | 171° S | aucun | couvert | 0.4 | 12°C |
| Plage du Vengeron | 3 | 4 | 52° NE | aucun | couvert | 0.2 | 12°C |
| Plage d'Hermance | 3 | 4 | 67° ENE | aucun | couvert | 0.3 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 24° NNE | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 180° S | aucun | couvert | 0.3 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 213° SSO | aucun | couvert | 0.1 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 203° SSO | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 199° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 156° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Cruas - Nuclear Spot | 6 | 11 | 196° SSO | aucun | soleil-couvert | 0.1 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 155° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 6 | 10 | 168° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 176° S | aucun | soleil | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 206° SSO | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 6 | 9 | 163° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 6 | 10 | 208° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 189° S | aucun | soleil | 0.0 | 17°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 222° SO | aucun | pluie | 2.2 | 14°C |
| Plage d'Excenevex | 4 | 7 | 236° SO | aucun | pluie | 2.6 | 16°C |
| Plage du Vengeron | 10 | 14 | 204° SSO | aucun | pluie | 2.2 | 16°C |
| Plage d'Hermance | 8 | 10 | 205° SSO | aucun | pluie | 2.7 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 327° NNO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 148° SSE | aucun | soleil-couvert | 0.2 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 20 | 190° S | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 205° SSO | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 218° SO | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 182° S | aucun | soleil-couvert | 0.0 | 19°C |
| Cruas - Nuclear Spot | 5 | 10 | 184° S | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 16 | 158° SSE | aucun | soleil-couvert | 0.1 | 18°C |
| Nord du Pont de Chavanay | 9 | 15 | 160° SSE | aucun | soleil-couvert | 0.2 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 174° S | aucun | pluie | 1.1 | 18°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 200° SSO | aucun | pluie | 2.8 | 18°C |
| Saint-Romain-des-Iles | 7 | 12 | 192° SSO | aucun | soleil-couvert | 0.7 | 19°C |
| Nord du Pont d'Arciat | 7 | 12 | 198° SSO | aucun | pluie | 2.5 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 16 | 186° S | aucun | soleil-couvert | 0.8 | 17°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 35° NE | 09h-20h | pluie | 1.4 | 14°C |
| Plage d'Excenevex | 19 | 25 | 27° NNE | 08h-20h | pluie | 1.7 | 14°C |
| Plage du Vengeron | 13 | 17 | 45° NE | 11h-20h | pluie | 2.2 | 14°C |
| Plage d'Hermance | 14 | 23 | 42° NE | 08h-19h | pluie | 1.3 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 349° N | aucun | pluie | 3.6 | 16°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 343° NNO | aucun | couvert | 0.5 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 21 | 39 | 172° S | 08h-20h | pluie | 2.5 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 24 | 181° S | 15h-18h | couvert | 0.3 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 200° SSO | aucun | orage | 33.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 6 | 8 | 340° NNO | aucun | orage | 42.1 | 14°C |
| Cruas - Nuclear Spot | 11 | 22 | 185° S | aucun | pluie | 17.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 13 | 344° NNO | aucun | orage | 42.4 | 13°C |
| Nord du Pont de Chavanay | 8 | 13 | 344° NNO | aucun | orage | 42.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 11 | 326° NO | aucun | orage | 39.8 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 11 | 326° NO | aucun | orage | 39.7 | 13°C |
| Saint-Romain-des-Iles | 15 | 24 | 3° N | aucun | orage | 42.9 | 12°C |
| Nord du Pont d'Arciat | 15 | 24 | 3° N | aucun | orage | 41.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 338° NNO | aucun | orage | 34.7 | 13°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 28 | 41 | 36° NE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 28 | 40 | 31° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage du Vengeron | 26 | 37 | 33° NNE | 08h-20h | couvert | 0.0 | 9°C |
| Plage d'Hermance | 24 | 38 | 37° NE | 08h-20h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 270° O | aucun | couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 17 | 22 | 2° N | 08h-20h | couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 24° NNE | 10h-18h | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 345° NNO | 10h-16h | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 21 | 34 | 7° N | 08h-20h | couvert | 0.1 | 9°C |
| La Roche-de-Glun - Base Nautique | 18 | 31 | 2° N | 08h-20h | soleil-couvert | 0.1 | 9°C |
| Cruas - Nuclear Spot | 19 | 39 | 5° N | 08h-20h | couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 354° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 14 | 24 | 354° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 350° N | 08h-17h | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 11 | 23 | 350° N | 08h-17h | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 16 | 24 | 6° N | 08h-20h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 16 | 24 | 6° N | 08h-20h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 26 | 345° NNO | 08h-20h | soleil-couvert | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 25 | 41° NE | 08h-13h | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 19 | 26 | 25° NNE | 08h-13h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 14 | 19 | 47° NE | 08h-12h | couvert | 0.0 | 7°C |
| Plage d'Hermance | 14 | 22 | 46° NE | 08h-12h | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 337° NNO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 7 | 16° NNE | aucun | couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 177° S | 11h-16h | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 177° S | aucun | pluie | 1.1 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 8 | 24° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 349° N | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 7 | 15 | 27° NNE | aucun | soleil-couvert | 0.3 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 179° S | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont de Chavanay | 7 | 16 | 179° S | aucun | soleil-couvert | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 183° S | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 172° S | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 3 | 8 | 190° S | aucun | soleil-couvert | 0.0 | 7°C |
| Nord du Pont d'Arciat | 3 | 8 | 190° S | aucun | soleil-couvert | 0.0 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 148° SSE | aucun | soleil-couvert | 0.0 | 8°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 5 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 5 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 5 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 109° ESE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 97° E | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 131° SE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 194° SSO | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 157° SSE | aucun | couvert | 0.9 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 192° SSO | aucun | pluie | 3.4 | 12°C |
| Cruas - Nuclear Spot | 3 | 10 | 253° OSO | aucun | pluie | 12.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 169° S | aucun | pluie | 10.2 | 11°C |
| Nord du Pont de Chavanay | 8 | 18 | 169° S | aucun | pluie | 10.2 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 167° SSE | aucun | pluie | 13.5 | 10°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 184° S | aucun | pluie | 16.5 | 10°C |
| Saint-Romain-des-Iles | 6 | 12 | 167° SSE | aucun | couvert | 0.3 | 12°C |
| Nord du Pont d'Arciat | 6 | 12 | 167° SSE | aucun | couvert | 0.3 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 185° S | aucun | couvert | 0.0 | 12°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 20 | 198° SSO | aucun | orage | 13.1 | 11°C |
| Plage d'Excenevex | 13 | 20 | 198° SSO | aucun | orage | 13.1 | 11°C |
| Plage du Vengeron | 13 | 20 | 198° SSO | aucun | orage | 13.1 | 11°C |
| Plage d'Hermance | 13 | 20 | 198° SSO | aucun | orage | 13.1 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 24 | 166° SSE | aucun | orage | 21.5 | 11°C |
| Lac du Bourget - Cap des Séselets | 7 | 26 | 220° SO | aucun | orage | 18.6 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 34 | 157° SSE | 10h-17h | pluie | 5.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 26 | 167° SSE | aucun | orage | 17.2 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 10 | 208° SSO | aucun | soleil | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 301° ONO | aucun | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 2 | 7 | 309° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 103° ESE | aucun | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 2 | 8 | 103° ESE | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 117° ESE | aucun | soleil | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 100° E | aucun | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 2 | 7 | 150° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 2 | 7 | 150° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 11 | 135° SE | aucun | soleil | 0.0 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 16 | 250° OSO | 14h-20h | couvert | 0.8 | 14°C |
| Plage d'Excenevex | 12 | 15 | 253° OSO | 16h-20h | pluie | 2.2 | 14°C |
| Plage du Vengeron | 13 | 16 | 250° OSO | 14h-20h | couvert | 0.8 | 14°C |
| Plage d'Hermance | 13 | 16 | 250° OSO | 14h-20h | couvert | 0.8 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 162° SSE | aucun | couvert | 0.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 270° O | aucun | pluie | 1.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 174° S | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 178° S | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 190° S | 13h-19h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 192° SSO | 11h-20h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 7 | 17 | 200° SSO | aucun | couvert | 0.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 32 | 183° S | 12h-20h | couvert | 0.6 | 14°C |
| Nord du Pont de Chavanay | 13 | 32 | 183° S | 12h-20h | couvert | 0.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 33 | 177° S | 11h-20h | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 32 | 182° S | 11h-20h | couvert | 0.6 | 14°C |
| Saint-Romain-des-Iles | 9 | 19 | 179° S | aucun | pluie | 9.0 | 13°C |
| Nord du Pont d'Arciat | 9 | 19 | 179° S | aucun | pluie | 9.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 31 | 186° S | 12h-20h | pluie | 2.1 | 14°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 200° SSO | 16h-20h | pluie | 7.4 | 14°C |
| Plage d'Excenevex | 16 | 21 | 213° SSO | 16h-20h | pluie | 5.6 | 14°C |
| Plage du Vengeron | 12 | 18 | 200° SSO | 16h-20h | pluie | 7.4 | 14°C |
| Plage d'Hermance | 12 | 18 | 200° SSO | 16h-20h | pluie | 7.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 19 | 133° SE | aucun | pluie | 5.5 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 322° NO | aucun | pluie | 5.5 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 172° S | aucun | couvert | 0.4 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 163° SSE | aucun | couvert | 0.3 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 209° SSO | aucun | couvert | 0.8 | 17°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 201° SSO | aucun | couvert | 0.9 | 17°C |
| Cruas - Nuclear Spot | 4 | 13 | 251° OSO | aucun | pluie | 3.5 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 178° S | 08h-15h | couvert | 0.2 | 17°C |
| Nord du Pont de Chavanay | 12 | 26 | 178° S | 08h-15h | couvert | 0.2 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 33 | 170° S | 08h-18h | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 12 | 28 | 170° S | 08h-15h | couvert | 0.2 | 17°C |
| Saint-Romain-des-Iles | 10 | 20 | 181° S | aucun | pluie | 7.5 | 14°C |
| Nord du Pont d'Arciat | 10 | 20 | 181° S | aucun | pluie | 7.5 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 31 | 188° S | 08h-14h | couvert | 0.4 | 16°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 16 | 235° SO | aucun | couvert | 0.6 | 13°C |
| Plage d'Excenevex | 6 | 16 | 275° O | aucun | pluie | 1.2 | 14°C |
| Plage du Vengeron | 5 | 16 | 235° SO | aucun | couvert | 0.6 | 13°C |
| Plage d'Hermance | 5 | 16 | 235° SO | aucun | couvert | 0.6 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 227° SO | aucun | pluie | 1.2 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 322° NO | aucun | pluie | 1.2 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 343° NNO | aucun | pluie | 4.2 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 331° NNO | aucun | pluie | 4.2 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 8° N | aucun | couvert | 0.6 | 14°C |
| La Roche-de-Glun - Base Nautique | 3 | 6 | 347° NNO | aucun | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 4 | 9 | 347° NNO | aucun | pluie | 1.2 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 5 | 180° S | aucun | couvert | 0.6 | 14°C |
| Nord du Pont de Chavanay | 1 | 5 | 180° S | aucun | couvert | 0.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 11 | 188° S | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 198° SSO | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 2 | 6 | 292° ONO | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 6 | 292° ONO | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 23° NNE | aucun | couvert | 0.0 | 14°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 118° ESE | aucun | pluie | 1.1 | 10°C |
| Plage d'Excenevex | 4 | 7 | 48° NE | aucun | couvert | 0.7 | 11°C |
| Plage du Vengeron | 4 | 7 | 118° ESE | aucun | pluie | 1.1 | 10°C |
| Plage d'Hermance | 4 | 7 | 118° ESE | aucun | pluie | 1.1 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 341° NNO | aucun | couvert | 0.1 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 146° SE | aucun | soleil-couvert | 0.7 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 26 | 350° N | aucun | pluie | 1.3 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 28 | 347° NNO | aucun | pluie | 1.3 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 33 | 3° N | 08h-18h | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 357° N | 08h-16h | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 14 | 31 | 5° N | 08h-16h | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 350° N | aucun | pluie | 1.1 | 12°C |
| Nord du Pont de Chavanay | 10 | 23 | 350° N | aucun | pluie | 1.1 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 345° NNO | aucun | soleil-couvert | 0.4 | 11°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 346° NNO | aucun | pluie | 0.7 | 11°C |
| Saint-Romain-des-Iles | 8 | 16 | 323° NO | aucun | couvert | 0.6 | 11°C |
| Nord du Pont d'Arciat | 8 | 16 | 323° NO | aucun | couvert | 0.6 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 20 | 341° NNO | aucun | soleil-couvert | 0.7 | 11°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 205° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 4 | 8 | 214° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 4 | 8 | 205° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 4 | 8 | 205° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 264° O | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 18° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 3° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 18 | 356° N | aucun | couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 23 | 9° N | 11h-14h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 7° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 11 | 26 | 13° NNE | 11h-15h | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 17° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 6 | 13 | 17° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 24° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 16° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 6 | 124° SE | aucun | pluie | 1.8 | 9°C |
| Nord du Pont d'Arciat | 2 | 6 | 124° SE | aucun | pluie | 1.8 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 9° N | aucun | soleil-couvert | 0.6 | 10°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 221° SO | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 6 | 9 | 228° SO | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 6 | 9 | 221° SO | aucun | couvert | 0.0 | 11°C |
| Plage d'Hermance | 6 | 9 | 221° SO | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 108° ESE | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 10° N | aucun | couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 11 | 18° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 171° S | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 359° N | aucun | soleil-couvert | 0.6 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 325° NO | aucun | soleil-couvert | 0.6 | 11°C |
| Cruas - Nuclear Spot | 4 | 11 | 349° N | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 127° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 8 | 127° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 147° SSE | aucun | pluie | 1.2 | 10°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 136° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 8 | 191° S | aucun | soleil-couvert | 0.6 | 10°C |
| Nord du Pont d'Arciat | 4 | 8 | 191° S | aucun | soleil-couvert | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 130° SE | aucun | soleil-couvert | 0.0 | 11°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 231° SO | 14h-20h | pluie | 4.5 | 12°C |
| Plage d'Excenevex | 19 | 29 | 227° SO | 15h-20h | pluie | 3.2 | 12°C |
| Plage du Vengeron | 14 | 21 | 231° SO | 14h-20h | pluie | 4.5 | 12°C |
| Plage d'Hermance | 14 | 21 | 231° SO | 14h-20h | pluie | 4.5 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 24 | 228° SO | aucun | pluie | 6.6 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 20 | 207° SSO | aucun | pluie | 7.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 25 | 159° SSE | aucun | pluie | 4.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 155° SSE | aucun | pluie | 8.1 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 16 | 211° SSO | aucun | pluie | 3.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 207° SSO | 09h-13h | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 10 | 238° OSO | aucun | pluie | 4.8 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 24 | 179° S | 10h-13h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 11 | 24 | 179° S | 10h-13h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 27 | 174° S | 09h-17h | soleil-couvert | 0.4 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 26 | 173° S | 09h-15h | couvert | 0.2 | 13°C |
| Saint-Romain-des-Iles | 15 | 28 | 261° O | 17h-20h | soleil | 0.6 | 14°C |
| Nord du Pont d'Arciat | 15 | 28 | 261° O | 17h-20h | soleil | 0.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 25 | 185° S | aucun | pluie | 3.6 | 14°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 16 | 203° SSO | aucun | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 8 | 20 | 224° SO | aucun | soleil | 0.0 | 9°C |
| Plage du Vengeron | 6 | 16 | 203° SSO | aucun | soleil | 0.0 | 9°C |
| Plage d'Hermance | 6 | 16 | 203° SSO | aucun | soleil | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 305° NO | aucun | soleil | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 41° NE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 24 | 351° N | aucun | soleil | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 25 | 348° NNO | aucun | soleil | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 3° N | 10h-17h | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 1° N | 12h-15h | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 12 | 28 | 15° NNE | 10h-19h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 357° N | aucun | soleil | 0.0 | 10°C |
| Nord du Pont de Chavanay | 7 | 16 | 357° N | aucun | soleil | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 345° NNO | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 351° N | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 8 | 279° O | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 2 | 8 | 279° O | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 314° NO | aucun | soleil | 0.0 | 10°C |
