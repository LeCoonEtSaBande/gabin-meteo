# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 22/11/2026 14:28 (Europe/Paris)
- Fichiers générés le : 2026-11-22T14:29:13+01:00
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

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 30 | 208° SSO | 12h-20h | pluie | 18.1 | 10°C |
| Plage d'Excenevex | 19 | 28 | 203° SSO | 14h-20h | pluie | 9.2 | 10°C |
| Plage du Vengeron | 16 | 21 | 210° SSO | 13h-20h | pluie | 13.7 | 11°C |
| Plage d'Hermance | 21 | 30 | 211° SSO | 13h-20h | pluie | 14.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 17 | 24 | 249° OSO | aucun | orage | 45.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 7 | 12 | 197° SSO | aucun | orage | 39.5 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 24 | 204° SSO | aucun | pluie | 15.9 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 48° NE | aucun | pluie | 9.4 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 15 | 212° SSO | aucun | couvert | 0.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 151° SSE | aucun | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 5 | 8 | 223° SO | aucun | couvert | 0.1 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 7 | 197° SSO | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 4 | 16 | 293° ONO | aucun | couvert | 0.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 23 | 298° ONO | aucun | pluie | 1.1 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 215° SO | aucun | pluie | 0.8 | 14°C |
| Saint-Romain-des-Iles | 16 | 29 | 260° O | 12h-20h | pluie | 3.1 | 12°C |
| Nord du Pont d'Arciat | 17 | 29 | 278° O | 11h-18h | pluie | 5.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 27 | 281° O | 14h-18h | couvert | 0.2 | 13°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 21 | 30 | 206° SSO | 08h-19h | pluie | 3.5 | 8°C |
| Plage d'Excenevex | 15 | 23 | 198° SSO | 08h-15h | pluie | 2.5 | 8°C |
| Plage du Vengeron | 16 | 22 | 205° SSO | 08h-16h | pluie | 5.0 | 8°C |
| Plage d'Hermance | 18 | 24 | 200° SSO | 08h-16h | pluie | 2.4 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 10 | 143° SE | aucun | pluie | 3.3 | 8°C |
| Lac du Bourget - Cap des Séselets | 12 | 16 | 151° SSE | 11h-14h | pluie | 2.3 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 22 | 357° N | 16h-20h | pluie | 1.4 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 2° N | aucun | pluie | 1.7 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 16 | 358° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 9 | 338° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 9 | 19 | 8° N | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 343° NNO | aucun | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 7 | 14 | 342° NNO | aucun | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 308° NO | aucun | couvert | 0.2 | 10°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 5° N | aucun | couvert | 0.4 | 10°C |
| Saint-Romain-des-Iles | 11 | 20 | 314° NO | aucun | couvert | 0.4 | 9°C |
| Nord du Pont d'Arciat | 14 | 23 | 314° NO | 10h-15h | soleil-couvert | 0.3 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 18 | 287° ONO | aucun | pluie | 2.0 | 9°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 64° ENE | aucun | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 12 | 16 | 21° NNE | 08h-11h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 9 | 12 | 62° ENE | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 8 | 12 | 63° ENE | aucun | couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 339° NNO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 10 | 4° N | aucun | couvert | 0.1 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 183° S | 14h-18h | couvert | 0.1 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 198° SSO | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 226° SO | aucun | couvert | 0.1 | 8°C |
| La Roche-de-Glun - Base Nautique | 10 | 16 | 197° SSO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 6 | 13 | 30° NNE | aucun | couvert | 0.4 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 191° S | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 8 | 15 | 191° S | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 14 | 189° S | aucun | couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 8 | 14 | 189° S | aucun | couvert | 0.0 | 7°C |
| Saint-Romain-des-Iles | 3 | 7 | 103° ESE | aucun | couvert | 0.2 | 6°C |
| Nord du Pont d'Arciat | 3 | 7 | 103° ESE | aucun | couvert | 0.2 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 147° SSE | aucun | couvert | 0.0 | 6°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 203° SSO | aucun | pluie | 11.9 | 7°C |
| Plage d'Excenevex | 7 | 9 | 205° SSO | aucun | pluie | 13.7 | 7°C |
| Plage du Vengeron | 9 | 12 | 143° SE | aucun | pluie | 10.6 | 8°C |
| Plage d'Hermance | 6 | 9 | 161° SSE | aucun | pluie | 12.7 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 141° SE | aucun | orage | 20.8 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 184° S | aucun | orage | 17.5 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 19 | 183° S | aucun | pluie | 6.7 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 8 | 85° E | aucun | orage | 8.2 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 8 | 333° NNO | aucun | pluie | 5.5 | 9°C |
| La Roche-de-Glun - Base Nautique | 3 | 5 | 324° NO | aucun | pluie | 4.8 | 9°C |
| Cruas - Nuclear Spot | 4 | 6 | 349° N | aucun | pluie | 3.6 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 192° SSO | aucun | pluie | 5.7 | 9°C |
| Nord du Pont de Chavanay | 3 | 4 | 192° SSO | aucun | pluie | 5.7 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 6 | 200° SSO | aucun | pluie | 4.5 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 6 | 200° SSO | aucun | pluie | 4.5 | 8°C |
| Saint-Romain-des-Iles | 4 | 5 | 167° SSE | aucun | pluie | 4.7 | 8°C |
| Nord du Pont d'Arciat | 4 | 5 | 167° SSE | aucun | pluie | 4.7 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 126° SE | aucun | pluie | 4.8 | 8°C |

### jeu. 26/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 212° SSO | aucun | couvert | 0.3 | 8°C |
| Plage d'Excenevex | 7 | 9 | 220° SO | aucun | couvert | 0.6 | 8°C |
| Plage du Vengeron | 5 | 8 | 170° S | aucun | couvert | 0.0 | 8°C |
| Plage d'Hermance | 7 | 10 | 198° SSO | aucun | couvert | 0.1 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 313° NO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 341° NNO | aucun | couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 1° N | aucun | couvert | 0.3 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 18 | 353° N | aucun | soleil-couvert | 0.2 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 20 | 20° NNE | 11h-16h | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 10 | 23 | 5° N | aucun | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 12 | 26 | 16° NNE | 12h-16h | soleil | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 360° N | aucun | soleil-couvert | 0.6 | 8°C |
| Nord du Pont de Chavanay | 8 | 15 | 360° N | aucun | soleil-couvert | 0.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 355° N | aucun | soleil-couvert | 0.3 | 8°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 354° N | aucun | soleil-couvert | 0.6 | 8°C |
| Saint-Romain-des-Iles | 7 | 13 | 315° NO | aucun | couvert | 0.1 | 8°C |
| Nord du Pont d'Arciat | 7 | 13 | 315° NO | aucun | couvert | 0.1 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 353° N | aucun | couvert | 0.4 | 8°C |

### ven. 27/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Excenevex | 4 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 6°C |
| Plage du Vengeron | 4 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 6°C |
| Plage d'Hermance | 4 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 113° ESE | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 103° ESE | aucun | soleil-couvert | 0.0 | 4°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 330° NNO | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 20° NNE | aucun | soleil | 0.0 | 4°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 27 | 11° N | 08h-18h | soleil-couvert | 0.0 | 6°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 10° N | 11h-16h | soleil-couvert | 0.0 | 6°C |
| Cruas - Nuclear Spot | 13 | 29 | 16° NNE | 08h-20h | soleil-couvert | 0.0 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 6° N | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont de Chavanay | 8 | 18 | 6° N | aucun | soleil-couvert | 0.0 | 6°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 7° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 8° N | aucun | soleil-couvert | 0.0 | 5°C |
| Saint-Romain-des-Iles | 5 | 11 | 340° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Nord du Pont d'Arciat | 5 | 11 | 340° NNO | aucun | soleil-couvert | 0.0 | 5°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 351° N | aucun | soleil-couvert | 0.0 | 5°C |

### sam. 28/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 5 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 5 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 104° ESE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 98° E | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 17 | 153° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 13 | 209° SSO | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 6° N | 11h-15h | soleil | 0.0 | 4°C |
| La Roche-de-Glun - Base Nautique | 9 | 21 | 352° N | aucun | soleil | 0.0 | 4°C |
| Cruas - Nuclear Spot | 10 | 25 | 25° NNE | 09h-15h | soleil | 0.0 | 6°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 22° NNE | aucun | soleil | 0.0 | 4°C |
| Nord du Pont de Chavanay | 6 | 15 | 22° NNE | aucun | soleil | 0.0 | 4°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 3° N | aucun | soleil-couvert | 0.0 | 3°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 13° NNE | aucun | soleil | 0.0 | 3°C |
| Saint-Romain-des-Iles | 4 | 9 | 9° N | aucun | soleil-couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 4 | 9 | 9° N | aucun | soleil-couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 339° NNO | aucun | soleil-couvert | 0.0 | 3°C |

### dim. 29/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 11 | 51° NE | aucun | couvert | 0.6 | 4°C |
| Plage d'Excenevex | 5 | 11 | 42° NE | aucun | couvert | 0.6 | 3°C |
| Plage du Vengeron | 4 | 11 | 51° NE | aucun | couvert | 0.6 | 4°C |
| Plage d'Hermance | 4 | 11 | 51° NE | aucun | couvert | 0.6 | 4°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 108° ESE | aucun | couvert | 0.9 | 4°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 17° NNE | aucun | pluie | 1.2 | 5°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 18 | 148° SSE | aucun | pluie | 1.8 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 183° S | aucun | pluie | 2.7 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 175° S | aucun | couvert | 0.1 | 6°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 188° S | aucun | couvert | 0.1 | 6°C |
| Cruas - Nuclear Spot | 3 | 11 | 5° N | aucun | couvert | 0.1 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 153° SSE | aucun | couvert | 0.0 | 5°C |
| Nord du Pont de Chavanay | 3 | 10 | 153° SSE | aucun | couvert | 0.0 | 5°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 172° S | aucun | couvert | 0.0 | 4°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 152° SSE | aucun | couvert | 0.0 | 4°C |
| Saint-Romain-des-Iles | 4 | 8 | 183° S | aucun | couvert | 0.0 | 2°C |
| Nord du Pont d'Arciat | 4 | 8 | 183° S | aucun | couvert | 0.0 | 2°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 150° SSE | aucun | couvert | 0.0 | 4°C |

### lun. 30/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 28° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 3 | 6 | 10° N | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 4 | 6 | 28° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 4 | 6 | 28° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 260° O | aucun | soleil-couvert | 0.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 174° S | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 12° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 14° NNE | aucun | soleil-couvert | 0.0 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 359° N | aucun | soleil-couvert | 0.0 | 8°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 342° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Cruas - Nuclear Spot | 6 | 16 | 24° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 16° NNE | aucun | couvert | 0.0 | 7°C |
| Nord du Pont de Chavanay | 5 | 12 | 16° NNE | aucun | couvert | 0.0 | 7°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 7° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 11° N | aucun | soleil-couvert | 0.0 | 6°C |
| Saint-Romain-des-Iles | 3 | 7 | 328° NNO | aucun | couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 3 | 7 | 328° NNO | aucun | couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 357° N | aucun | soleil-couvert | 0.0 | 7°C |

### mar. 01/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 30° NNE | aucun | couvert | 0.1 | 6°C |
| Plage d'Excenevex | 5 | 9 | 39° NE | aucun | couvert | 0.0 | 6°C |
| Plage du Vengeron | 4 | 9 | 30° NNE | aucun | couvert | 0.1 | 6°C |
| Plage d'Hermance | 4 | 9 | 30° NNE | aucun | couvert | 0.1 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 90° E | aucun | couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 20° NNE | aucun | couvert | 0.0 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 173° S | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 170° S | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 197° SSO | aucun | pluie | 1.3 | 8°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 193° SSO | aucun | couvert | 0.9 | 8°C |
| Cruas - Nuclear Spot | 3 | 8 | 360° N | aucun | pluie | 2.5 | 7°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 17 | 155° SSE | aucun | soleil-couvert | 0.1 | 8°C |
| Nord du Pont de Chavanay | 6 | 17 | 155° SSE | aucun | soleil-couvert | 0.1 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 167° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 158° SSE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 6 | 11 | 168° SSE | aucun | couvert | 0.0 | 4°C |
| Nord du Pont d'Arciat | 6 | 11 | 168° SSE | aucun | couvert | 0.0 | 4°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 15 | 151° SSE | aucun | soleil-couvert | 0.1 | 8°C |

### mer. 02/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 206° SSO | aucun | pluie | 1.2 | 8°C |
| Plage d'Excenevex | 2 | 5 | 115° ESE | aucun | pluie | 1.2 | 8°C |
| Plage du Vengeron | 4 | 7 | 206° SSO | aucun | pluie | 1.2 | 8°C |
| Plage d'Hermance | 4 | 7 | 206° SSO | aucun | pluie | 1.2 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 153° SSE | aucun | pluie | 1.8 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 355° N | aucun | couvert | 0.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 169° S | aucun | pluie | 1.2 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 168° SSE | aucun | pluie | 1.2 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 188° S | aucun | couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 191° S | aucun | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 5 | 12 | 209° SSO | aucun | couvert | 0.7 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 11 | 170° S | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 11 | 170° S | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 182° S | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 3 | 11 | 165° SSE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 6 | 171° S | aucun | couvert | 0.6 | 7°C |
| Nord du Pont d'Arciat | 2 | 6 | 171° S | aucun | couvert | 0.6 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 101° E | aucun | couvert | 0.0 | 9°C |

### jeu. 03/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 24° NNE | aucun | pluie | 7.9 | 7°C |
| Plage d'Excenevex | 7 | 10 | 18° NNE | aucun | pluie | 6.2 | 6°C |
| Plage du Vengeron | 7 | 10 | 24° NNE | aucun | pluie | 7.9 | 7°C |
| Plage d'Hermance | 7 | 10 | 24° NNE | aucun | pluie | 7.9 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 47° NE | aucun | pluie | 5.6 | 5°C |
| Lac du Bourget - Cap des Séselets | 5 | 9 | 25° NNE | aucun | pluie | 3.7 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 167° SSE | aucun | pluie | 3.7 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 155° SSE | aucun | pluie | 4.9 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 18 | 202° SSO | aucun | pluie | 3.9 | 9°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 207° SSO | 11h-17h | pluie | 2.1 | 10°C |
| Cruas - Nuclear Spot | 5 | 12 | 238° OSO | aucun | pluie | 8.8 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 184° S | 10h-20h | pluie | 4.5 | 11°C |
| Nord du Pont de Chavanay | 12 | 28 | 184° S | 10h-20h | pluie | 4.5 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 16 | 34 | 181° S | 08h-20h | pluie | 3.1 | 10°C |
| Saint-Cyr-sur-le-Rhône | 15 | 33 | 174° S | 08h-20h | pluie | 3.7 | 10°C |
| Saint-Romain-des-Iles | 11 | 20 | 174° S | 14h-20h | pluie | 2.4 | 8°C |
| Nord du Pont d'Arciat | 11 | 20 | 174° S | 14h-20h | pluie | 2.4 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 139° SE | aucun | pluie | 3.0 | 9°C |

### ven. 04/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 256° OSO | aucun | pluie | 3.9 | 10°C |
| Plage d'Excenevex | 4 | 9 | 272° O | aucun | pluie | 1.9 | 10°C |
| Plage du Vengeron | 7 | 12 | 256° OSO | aucun | pluie | 3.9 | 10°C |
| Plage d'Hermance | 7 | 12 | 256° OSO | aucun | pluie | 3.9 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 122° ESE | aucun | pluie | 6.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 1 | 9 | 243° OSO | aucun | pluie | 10.7 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 14 | 134° SE | aucun | pluie | 15.7 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 114° ESE | aucun | pluie | 11.9 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 22 | 177° S | 14h-20h | pluie | 2.3 | 11°C |
| La Roche-de-Glun - Base Nautique | 13 | 25 | 193° SSO | 10h-20h | pluie | 4.2 | 10°C |
| Cruas - Nuclear Spot | 8 | 21 | 174° S | aucun | pluie | 5.1 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 23 | 169° S | 13h-20h | pluie | 2.2 | 10°C |
| Nord du Pont de Chavanay | 11 | 23 | 169° S | 13h-20h | pluie | 2.2 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 172° S | 09h-20h | pluie | 4.5 | 10°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 168° SSE | 12h-19h | pluie | 2.6 | 10°C |
| Saint-Romain-des-Iles | 10 | 18 | 174° S | aucun | pluie | 4.7 | 11°C |
| Nord du Pont d'Arciat | 10 | 18 | 174° S | aucun | pluie | 4.7 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 28 | 186° S | 10h-20h | pluie | 3.1 | 10°C |

### sam. 05/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 20 | 221° SO | aucun | pluie | 5.4 | 2°C |
| Plage d'Excenevex | 19 | 29 | 227° SO | aucun | pluie | 6.0 | 2°C |
| Plage du Vengeron | 13 | 20 | 221° SO | aucun | pluie | 5.4 | 2°C |
| Plage d'Hermance | 13 | 20 | 221° SO | aucun | pluie | 5.4 | 2°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 20 | 219° SO | aucun | pluie | 5.4 | 0°C |
| Lac du Bourget - Cap des Séselets | 6 | 20 | 205° SSO | aucun | pluie | 2.5 | 2°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 344° NNO | aucun | couvert | 0.6 | 0°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 345° NNO | aucun | couvert | 0.6 | 0°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 25 | 19° NNE | 08h-20h | couvert | 0.6 | 4°C |
| La Roche-de-Glun - Base Nautique | 12 | 22 | 22° NNE | 08h-20h | couvert | 0.6 | 3°C |
| Cruas - Nuclear Spot | 13 | 26 | 22° NNE | 08h-20h | couvert | 0.6 | 3°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 16° NNE | aucun | couvert | 0.6 | 2°C |
| Nord du Pont de Chavanay | 9 | 18 | 16° NNE | aucun | couvert | 0.6 | 2°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 344° NNO | aucun | couvert | 0.6 | 1°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 3° N | aucun | couvert | 0.6 | 2°C |
| Saint-Romain-des-Iles | 8 | 28 | 330° NNO | aucun | couvert | 0.0 | 1°C |
| Nord du Pont d'Arciat | 8 | 28 | 330° NNO | aucun | couvert | 0.0 | 1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 20 | 324° NO | aucun | couvert | 0.6 | 1°C |

### dim. 06/12/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 20 | 28° NNE | 08h-12h | couvert | 0.0 | 0°C |
| Plage d'Excenevex | 13 | 20 | 18° NNE | 08h-14h | couvert | 0.0 | 0°C |
| Plage du Vengeron | 13 | 20 | 28° NNE | 08h-12h | couvert | 0.0 | 0°C |
| Plage d'Hermance | 13 | 20 | 28° NNE | 08h-12h | couvert | 0.0 | 0°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 349° N | aucun | couvert | 0.0 | -1°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 39° NE | aucun | couvert | 0.0 | 1°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 360° N | aucun | soleil-couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 349° N | aucun | soleil-couvert | 0.0 | 3°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 7° N | 10h-13h | couvert | 0.0 | 2°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 355° N | aucun | soleil-couvert | 0.0 | 2°C |
| Cruas - Nuclear Spot | 11 | 25 | 11° N | 08h-12h | soleil-couvert | 0.0 | 2°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 8° N | aucun | couvert | 0.0 | 1°C |
| Nord du Pont de Chavanay | 6 | 16 | 8° N | aucun | couvert | 0.0 | 1°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 337° NNO | aucun | couvert | 0.0 | 1°C |
| Saint-Cyr-sur-le-Rhône | 6 | 17 | 348° NNO | aucun | couvert | 0.0 | 1°C |
| Saint-Romain-des-Iles | 6 | 13 | 351° N | aucun | couvert | 0.0 | -1°C |
| Nord du Pont d'Arciat | 6 | 13 | 351° N | aucun | couvert | 0.0 | -1°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 14 | 338° NNO | aucun | couvert | 0.0 | 1°C |
