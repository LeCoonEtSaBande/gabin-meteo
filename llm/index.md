# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 21/11/2026 23:14 (Europe/Paris)
- Fichiers générés le : 2026-11-21T23:15:18+01:00
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

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 228° SO | aucun | soleil-couvert | 0.3 | 10°C |
| Plage d'Excenevex | 6 | 9 | 215° SO | aucun | soleil-couvert | 0.3 | 11°C |
| Plage du Vengeron | 5 | 8 | 55° NE | aucun | soleil-couvert | 0.3 | 11°C |
| Plage d'Hermance | 6 | 9 | 197° SSO | aucun | pluie | 0.5 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 31° NNE | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 252° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 10 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 180° S | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 5 | 217° SO | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 4 | 4 | 3° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 5 | 5 | 35° NE | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 132° SE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 3 | 7 | 135° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 128° SE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 7 | 229° SO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 8 | 162° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 4 | 7 | 158° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 77° ENE | aucun | soleil-couvert | 0.4 | 12°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 32 | 205° SSO | 12h-20h | orage | 26.7 | 10°C |
| Plage d'Excenevex | 19 | 29 | 203° SSO | 13h-20h | pluie | 13.1 | 10°C |
| Plage du Vengeron | 17 | 22 | 202° SSO | 12h-20h | orage | 20.3 | 10°C |
| Plage d'Hermance | 20 | 28 | 210° SSO | 12h-20h | orage | 24.8 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 25 | 249° OSO | aucun | orage | 55.2 | 11°C |
| Lac du Bourget - Cap des Séselets | 7 | 9 | 173° S | aucun | orage | 49.3 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 26 | 217° SO | aucun | orage | 17.3 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 34° NE | aucun | orage | 10.6 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 13 | 198° SSO | aucun | couvert | 0.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 184° S | aucun | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 6 | 12 | 187° S | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 153° SSE | aucun | couvert | 0.3 | 14°C |
| Nord du Pont de Chavanay | 8 | 19 | 266° O | aucun | couvert | 0.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 21 | 179° S | aucun | couvert | 0.7 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 232° SO | aucun | couvert | 0.7 | 13°C |
| Saint-Romain-des-Iles | 14 | 26 | 254° OSO | 10h-20h | pluie | 5.1 | 12°C |
| Nord du Pont d'Arciat | 16 | 26 | 252° OSO | 10h-20h | pluie | 5.7 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 22 | 269° O | 14h-20h | couvert | 0.1 | 13°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 206° SSO | 08h-18h | pluie | 2.8 | 9°C |
| Plage d'Excenevex | 15 | 20 | 205° SSO | 08h-17h | pluie | 2.0 | 8°C |
| Plage du Vengeron | 16 | 22 | 198° SSO | 08h-17h | pluie | 2.9 | 9°C |
| Plage d'Hermance | 14 | 22 | 202° SSO | 08h-16h | pluie | 1.8 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 117° ESE | aucun | pluie | 1.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 7 | 9 | 152° SSE | aucun | pluie | 1.3 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 20° NNE | 08h-11h | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 18 | 5° N | aucun | soleil-couvert | 0.6 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 13 | 343° NNO | aucun | soleil-couvert | 0.1 | 11°C |
| La Roche-de-Glun - Base Nautique | 6 | 9 | 328° NNO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 9 | 18 | 13° NNE | aucun | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 354° N | aucun | couvert | 0.3 | 11°C |
| Nord du Pont de Chavanay | 8 | 15 | 354° N | aucun | couvert | 0.3 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 323° NO | aucun | couvert | 0.4 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 6° N | aucun | couvert | 0.2 | 11°C |
| Saint-Romain-des-Iles | 10 | 18 | 307° NO | aucun | couvert | 0.1 | 9°C |
| Nord du Pont d'Arciat | 12 | 19 | 307° NO | 13h-16h | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 17 | 275° O | aucun | soleil-couvert | 0.6 | 9°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 15 | 58° ENE | aucun | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 14 | 19 | 24° NNE | 08h-20h | couvert | 0.0 | 6°C |
| Plage du Vengeron | 10 | 13 | 49° NE | aucun | couvert | 0.0 | 7°C |
| Plage d'Hermance | 10 | 15 | 56° NE | aucun | couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 336° NNO | aucun | couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 354° N | aucun | couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 24 | 175° S | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 207° SSO | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 18 | 204° SSO | 17h-20h | couvert | 0.0 | 7°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 198° SSO | aucun | couvert | 0.0 | 7°C |
| Cruas - Nuclear Spot | 9 | 20 | 10° N | aucun | couvert | 0.3 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 22 | 183° S | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 13 | 22 | 183° S | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 182° S | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 182° S | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 6 | 10 | 49° NE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 6 | 10 | 49° NE | aucun | couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 4 | 75° ENE | aucun | couvert | 0.0 | 6°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 92° E | aucun | pluie | 11.7 | 7°C |
| Plage d'Excenevex | 11 | 14 | 54° NE | aucun | pluie | 8.3 | 6°C |
| Plage du Vengeron | 7 | 12 | 54° NE | aucun | pluie | 12.5 | 7°C |
| Plage d'Hermance | 6 | 12 | 70° ENE | aucun | pluie | 11.6 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 335° NNO | aucun | pluie | 13.2 | 8°C |
| Lac du Bourget - Cap des Séselets | 8 | 10 | 197° SSO | aucun | orage | 19.7 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 26 | 193° SSO | aucun | orage | 18.3 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 11 | 10° N | aucun | orage | 20.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 14 | 172° S | aucun | pluie | 2.8 | 10°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 169° S | aucun | pluie | 1.0 | 10°C |
| Cruas - Nuclear Spot | 6 | 10 | 182° S | aucun | pluie | 2.4 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 13 | 162° SSE | aucun | pluie | 1.3 | 10°C |
| Nord du Pont de Chavanay | 7 | 13 | 162° SSE | aucun | pluie | 1.3 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 188° S | aucun | pluie | 1.9 | 10°C |
| Saint-Cyr-sur-le-Rhône | 8 | 16 | 188° S | aucun | pluie | 1.2 | 10°C |
| Saint-Romain-des-Iles | 5 | 9 | 199° SSO | aucun | pluie | 1.1 | 10°C |
| Nord du Pont d'Arciat | 5 | 9 | 199° SSO | aucun | pluie | 1.1 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 211° SSO | aucun | couvert | 0.5 | 10°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 207° SSO | aucun | couvert | 0.0 | 8°C |
| Plage d'Excenevex | 6 | 10 | 40° NE | aucun | couvert | 0.9 | 8°C |
| Plage du Vengeron | 7 | 8 | 214° SO | aucun | couvert | 0.0 | 9°C |
| Plage d'Hermance | 6 | 10 | 40° NE | aucun | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 8 | 301° ONO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 283° ONO | aucun | couvert | 0.7 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 17 | 15° NNE | aucun | pluie | 5.7 | 1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 352° N | aucun | pluie | 1.6 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 14° NNE | aucun | couvert | 0.9 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 7° N | aucun | pluie | 1.8 | 9°C |
| Cruas - Nuclear Spot | 8 | 17 | 358° N | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 10° N | aucun | pluie | 2.1 | 8°C |
| Nord du Pont de Chavanay | 5 | 12 | 10° N | aucun | pluie | 2.1 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 31° NNE | aucun | pluie | 1.8 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 4° N | aucun | pluie | 2.8 | 8°C |
| Saint-Romain-des-Iles | 5 | 9 | 319° NO | aucun | soleil-couvert | 0.9 | 7°C |
| Nord du Pont d'Arciat | 5 | 9 | 319° NO | aucun | soleil-couvert | 0.9 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 11° N | aucun | couvert | 0.9 | 8°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 22 | 32° NNE | 09h-20h | couvert | 0.0 | 2°C |
| Plage d'Excenevex | 14 | 22 | 32° NNE | 09h-20h | couvert | 0.0 | 2°C |
| Plage du Vengeron | 14 | 22 | 32° NNE | 09h-20h | couvert | 0.0 | 2°C |
| Plage d'Hermance | 14 | 22 | 32° NNE | 09h-20h | couvert | 0.0 | 2°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 343° NNO | aucun | couvert | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 346° NNO | aucun | couvert | 0.0 | 0°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 335° NNO | aucun | couvert | 0.0 | -2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 11 | 17° NNE | aucun | couvert | 0.0 | -1°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 7 | 16 | 17° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 36° NE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 3 | 8 | 36° NE | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 68° ENE | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 34° NE | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 2 | 5 | 187° S | aucun | couvert | 0.9 | 6°C |
| Nord du Pont d'Arciat | 2 | 5 | 187° S | aucun | couvert | 0.9 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 83° E | aucun | couvert | 0.0 | 7°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 21 | 33° NNE | 08h-20h | couvert | 0.0 | 1°C |
| Plage d'Excenevex | 13 | 21 | 33° NNE | 08h-20h | couvert | 0.0 | 1°C |
| Plage du Vengeron | 13 | 21 | 33° NNE | 08h-20h | couvert | 0.0 | 1°C |
| Plage d'Hermance | 13 | 21 | 33° NNE | 08h-20h | couvert | 0.0 | 1°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 343° NNO | aucun | soleil-couvert | 0.0 | 1°C |
| Lac du Bourget - Cap des Séselets | 5 | 11 | 4° N | aucun | soleil-couvert | 0.0 | 1°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 344° NNO | aucun | soleil-couvert | 0.0 | -1°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 7 | 30° NNE | aucun | soleil-couvert | 0.0 | 1°C |
| Portes-lès-Valence - Parking des Surfeurs | 1 | 5 | 21° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 1 | 6 | 180° S | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 2 | 6 | 342° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 112° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 2 | 8 | 112° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 111° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 110° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 4 | 8 | 196° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 4 | 8 | 196° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 122° ESE | aucun | soleil-couvert | 0.0 | 9°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 240° OSO | aucun | pluie | 6.0 | 11°C |
| Plage d'Excenevex | 11 | 15 | 241° OSO | 12h-20h | pluie | 3.4 | 12°C |
| Plage du Vengeron | 10 | 14 | 240° OSO | aucun | pluie | 6.0 | 11°C |
| Plage d'Hermance | 10 | 14 | 240° OSO | aucun | pluie | 6.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 12 | 163° SSE | aucun | pluie | 4.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 10 | 230° SO | aucun | pluie | 2.5 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 162° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 144° SE | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 169° S | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 187° S | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 2 | 7 | 184° S | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 143° SE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 4 | 10 | 143° SE | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 174° S | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 151° SSE | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 10 | 202° SSO | aucun | pluie | 4.6 | 13°C |
| Nord du Pont d'Arciat | 6 | 10 | 202° SSO | aucun | pluie | 4.6 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 178° S | aucun | pluie | 1.9 | 12°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 238° OSO | 17h-20h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 10 | 13 | 235° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 11 | 14 | 238° OSO | 17h-20h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 11 | 14 | 238° OSO | 17h-20h | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 181° S | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 255° OSO | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 176° S | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 176° S | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 186° S | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 189° S | 13h-20h | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 6 | 15 | 190° S | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 184° S | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 24 | 184° S | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 27 | 178° S | 13h-20h | couvert | 0.1 | 13°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 179° S | 13h-20h | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 8 | 17 | 183° S | aucun | pluie | 0.5 | 13°C |
| Nord du Pont d'Arciat | 8 | 17 | 183° S | aucun | pluie | 0.5 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 26 | 193° SSO | 15h-20h | couvert | 0.2 | 14°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 234° SO | 08h-20h | pluie | 5.7 | 11°C |
| Plage d'Excenevex | 12 | 20 | 233° SO | 08h-20h | pluie | 2.0 | 11°C |
| Plage du Vengeron | 13 | 18 | 234° SO | 08h-20h | pluie | 5.7 | 11°C |
| Plage d'Hermance | 13 | 18 | 234° SO | 08h-20h | pluie | 5.7 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 16 | 143° SE | aucun | pluie | 1.6 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 184° S | aucun | pluie | 2.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 145° SE | aucun | pluie | 1.3 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 129° SE | aucun | couvert | 0.7 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 181° S | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 193° SSO | 11h-16h | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 6 | 13 | 196° SSO | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 154° SSE | 13h-16h | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 22 | 154° SSE | 13h-16h | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 32 | 171° S | 08h-20h | couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 28 | 174° S | 08h-16h | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 7 | 16 | 188° S | aucun | pluie | 3.0 | 13°C |
| Nord du Pont d'Arciat | 7 | 16 | 188° S | aucun | pluie | 3.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 29 | 193° SSO | 17h-20h | couvert | 0.0 | 13°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 14 | 231° SO | 10h-20h | pluie | 4.8 | 13°C |
| Plage d'Excenevex | 8 | 9 | 237° OSO | aucun | pluie | 4.0 | 13°C |
| Plage du Vengeron | 12 | 14 | 231° SO | 10h-20h | pluie | 4.8 | 13°C |
| Plage d'Hermance | 12 | 14 | 231° SO | 10h-20h | pluie | 4.8 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 115° ESE | aucun | pluie | 8.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 28° NNE | aucun | pluie | 8.4 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 169° S | aucun | pluie | 9.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 151° SSE | aucun | pluie | 10.3 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 170° S | aucun | pluie | 5.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 191° S | 14h-20h | pluie | 4.3 | 12°C |
| Cruas - Nuclear Spot | 4 | 10 | 230° SO | aucun | pluie | 2.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 25 | 169° S | 16h-20h | pluie | 4.8 | 12°C |
| Nord du Pont de Chavanay | 12 | 25 | 169° S | 16h-20h | pluie | 4.8 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 172° S | 12h-20h | pluie | 4.7 | 11°C |
| Saint-Cyr-sur-le-Rhône | 12 | 25 | 172° S | 15h-20h | pluie | 3.5 | 11°C |
| Saint-Romain-des-Iles | 9 | 17 | 181° S | aucun | pluie | 8.0 | 12°C |
| Nord du Pont d'Arciat | 9 | 17 | 181° S | aucun | pluie | 8.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 23 | 180° S | 11h-20h | pluie | 7.1 | 12°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 243° OSO | 08h-14h | pluie | 2.6 | 13°C |
| Plage d'Excenevex | 12 | 19 | 244° OSO | 09h-17h | pluie | 6.9 | 14°C |
| Plage du Vengeron | 11 | 16 | 243° OSO | 08h-14h | pluie | 2.6 | 13°C |
| Plage d'Hermance | 11 | 16 | 243° OSO | 08h-14h | pluie | 2.6 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 15 | 138° SE | aucun | pluie | 9.7 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 270° O | aucun | pluie | 6.7 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 346° NNO | aucun | couvert | 0.7 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 170° S | aucun | couvert | 0.7 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 19° NNE | aucun | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 194° SSO | aucun | couvert | 0.6 | 16°C |
| Cruas - Nuclear Spot | 4 | 10 | 329° NNO | aucun | couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 167° SSE | aucun | pluie | 1.3 | 16°C |
| Nord du Pont de Chavanay | 6 | 16 | 167° SSE | aucun | pluie | 1.3 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 162° SSE | aucun | pluie | 4.8 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 160° SSE | aucun | pluie | 2.5 | 15°C |
| Saint-Romain-des-Iles | 5 | 16 | 188° S | aucun | pluie | 3.6 | 14°C |
| Nord du Pont d'Arciat | 5 | 16 | 188° S | aucun | pluie | 3.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 192° SSO | aucun | pluie | 4.8 | 15°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 10 | 205° SSO | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 8 | 10 | 225° SO | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 9 | 10 | 205° SSO | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 9 | 10 | 205° SSO | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 220° SO | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 287° ONO | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 11 | 63° ENE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 180° S | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 23° NNE | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 211° SSO | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 4 | 12 | 340° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 135° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 3 | 9 | 135° SE | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 192° SSO | aucun | couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 128° SE | aucun | couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 3 | 7 | 224° SO | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 3 | 7 | 224° SO | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 164° SSE | aucun | couvert | 0.0 | 11°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 199° SSO | 11h-20h | pluie | 7.4 | 11°C |
| Plage d'Excenevex | 19 | 26 | 211° SSO | 11h-20h | pluie | 6.6 | 11°C |
| Plage du Vengeron | 14 | 19 | 199° SSO | 11h-20h | pluie | 7.4 | 11°C |
| Plage d'Hermance | 14 | 19 | 199° SSO | 11h-20h | pluie | 7.4 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 21 | 189° S | aucun | pluie | 17.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 17 | 192° SSO | aucun | pluie | 20.5 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 16 | 333° NNO | aucun | pluie | 1.3 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 15 | 302° ONO | aucun | pluie | 1.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 182° S | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 198° SSO | 08h-12h | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 5 | 14 | 294° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 23 | 168° SSE | aucun | pluie | 4.9 | 11°C |
| Nord du Pont de Chavanay | 8 | 23 | 168° SSE | aucun | pluie | 4.9 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 30 | 189° S | aucun | pluie | 4.2 | 12°C |
| Saint-Cyr-sur-le-Rhône | 8 | 26 | 172° S | aucun | pluie | 3.1 | 11°C |
| Saint-Romain-des-Iles | 9 | 18 | 264° O | aucun | pluie | 3.7 | 11°C |
| Nord du Pont d'Arciat | 9 | 18 | 264° O | aucun | pluie | 3.7 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 28 | 184° S | aucun | pluie | 5.1 | 11°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 14 | 61° ENE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Excenevex | 7 | 15 | 26° NNE | aucun | pluie | 2.4 |  |
| Plage du Vengeron | 6 | 14 | 61° ENE | aucun | soleil-couvert | 0.0 |  |
| Plage d'Hermance | 6 | 14 | 61° ENE | aucun | soleil-couvert | 0.0 |  |
| Lac d'Annecy - Plage de Sévrier | 7 | 21 | 348° NNO | aucun | pluie | 1.2 |  |
| Lac du Bourget - Cap des Séselets | 7 | 22 | 6° N | aucun | soleil-couvert | 0.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 31 | 352° N | aucun | pluie | 1.8 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 30 | 351° N | aucun | pluie | 1.8 |  |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 40 | 357° N | 09h-13h | pluie | 1.0 |  |
| La Roche-de-Glun - Base Nautique | 18 | 37 | 353° N | 08h-13h | pluie | 1.8 |  |
| Cruas - Nuclear Spot | 16 | 37 | 4° N | 10h-13h | soleil | 0.4 |  |
| Centrale de Saint-Alban-du-Rhône | 14 | 31 | 348° NNO | 08h-13h | pluie | 1.8 |  |
| Nord du Pont de Chavanay | 14 | 31 | 348° NNO | 08h-13h | pluie | 1.8 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 347° NNO | 08h-13h | couvert | 0.6 |  |
| Saint-Cyr-sur-le-Rhône | 13 | 30 | 345° NNO | 08h-13h | pluie | 1.2 |  |
| Saint-Romain-des-Iles | 12 | 24 | 340° NNO | 08h-13h | soleil-couvert | 0.0 |  |
| Nord du Pont d'Arciat | 12 | 24 | 340° NNO | 08h-13h | soleil-couvert | 0.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 24 | 353° N | 08h-13h | couvert | 0.6 |  |
