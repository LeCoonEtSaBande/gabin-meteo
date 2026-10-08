# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 08/10/2026 14:10 (Europe/Paris)
- Fichiers générés le : 2026-10-08T14:15:19+02:00
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
| Centrale de Saint-Alban-du-Rhône (`st_alban_du_rhone`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_alban_du_rhone.md |
| Nord du Pont de Chavanay (`pont_de_chavanay`) | Saint-Alban-du-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_de_chavanay.md |
| Loire-sur-Rhône / Chasse-sur-Rhône (`loire_sur_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/loire_sur_rhone.md |
| Saint-Cyr-sur-le-Rhône (`st_cyr_sur_le_rhone`) | Chasse-sur-Rhône | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_cyr_sur_le_rhone.md |
| Saint-Romain-des-Iles (`st_romain_des_iles`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/st_romain_des_iles.md |
| Nord du Pont d'Arciat (`pont_darciat`) | Saône - Nord de Villefranche | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/pont_darciat.md |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu (`wwmeyzieu`) | Réservoir du Grand Large - Meyzieu | AROMEHD | https://lecoonetsabande.github.io/gabin-meteo/llm/spots/wwmeyzieu.md |

## Tendances journalières (données des puces de la carte)

Courbe des puces : AROMEIFS pour les spots AROME HD, ICONIFS (ICON-CH1 → ICON-CH2 → ICON Global → IFS) pour les spots ICON-CH1. Format : vent moyen max / rafale au même moment, créneau, icône, température à 15 h.

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 24 | 207° SSO | 08h-11h | couvert | 0.5 | 14°C |
| Plage d'Excenevex | 14 | 20 | 44° NE | aucun | pluie | 7.2 | 14°C |
| Plage du Vengeron | 14 | 21 | 213° SSO | aucun | pluie | 4.2 | 14°C |
| Plage d'Hermance | 18 | 24 | 359° N | 08h-11h | couvert | 0.4 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 18 | 313° NO | 17h-20h | pluie | 2.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 15 | 21 | 320° NO | 14h-20h | orage | 7.3 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 32 | 351° N | 10h-20h | orage | 24.7 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 16 | 28 | 360° N | 11h-20h | pluie | 3.8 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 29 | 10° N | 11h-20h | pluie | 1.2 | 15°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 341° NNO | aucun | pluie | 5.3 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 25 | 334° NNO | 11h-20h | couvert | 0.5 | 14°C |
| Nord du Pont de Chavanay | 12 | 23 | 326° NO | 11h-17h | pluie | 1.7 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 322° NO | aucun | pluie | 7.1 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 343° NNO | aucun | pluie | 8.7 | 14°C |
| Saint-Romain-des-Iles | 14 | 24 | 310° NO | 09h-14h | couvert | 0.4 | 15°C |
| Nord du Pont d'Arciat | 14 | 23 | 315° NO | 08h-19h | pluie | 2.3 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 21 | 326° NO | 10h-15h | couvert | 0.4 | 14°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 47° NE | 09h-14h | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 14 | 20 | 36° NE | 08h-12h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 11 | 15 | 49° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 13 | 17 | 41° NE | 09h-13h | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 14 | 297° ONO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 10 | 13 | 13° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 355° N | 08h-14h | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 20 | 358° N | 11h-16h | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 33 | 11° N | 08h-20h | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 354° N | 08h-16h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 22 | 358° N | 09h-18h | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 11 | 20 | 3° N | 11h-16h | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 17 | 339° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 360° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 8 | 14 | 335° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 9 | 16 | 332° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 18 | 348° NNO | aucun | soleil-couvert | 0.0 | 15°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 16 | 206° SSO | 09h-18h | soleil-couvert | 0.2 | 15°C |
| Plage d'Excenevex | 12 | 15 | 251° OSO | aucun | pluie | 0.8 | 15°C |
| Plage du Vengeron | 7 | 9 | 166° SSE | aucun | soleil-couvert | 0.6 | 15°C |
| Plage d'Hermance | 9 | 14 | 190° S | aucun | couvert | 0.7 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 4° N | aucun | pluie | 2.2 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 235° SO | aucun | soleil-couvert | 0.2 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 19 | 22° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 19 | 346° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 16 | 359° N | aucun | soleil-couvert | 0.2 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 349° N | aucun | soleil-couvert | 0.4 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 9 | 358° N | aucun | soleil-couvert | 0.6 | 17°C |
| Nord du Pont de Chavanay | 6 | 9 | 358° N | aucun | soleil-couvert | 0.6 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 8 | 345° NNO | aucun | couvert | 0.8 | 15°C |
| Saint-Cyr-sur-le-Rhône | 5 | 8 | 345° NNO | aucun | couvert | 0.8 | 15°C |
| Saint-Romain-des-Iles | 5 | 8 | 180° S | aucun | pluie | 1.7 | 14°C |
| Nord du Pont d'Arciat | 6 | 8 | 207° SSO | aucun | pluie | 2.6 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 4 | 8° N | aucun | pluie | 1.6 | 13°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 57° ENE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 10 | 13 | 35° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 5 | 6 | 42° NE | aucun | couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 8 | 16° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 292° ONO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 231° SO | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 22° NNE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 350° N | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 24 | 4° N | 08h-20h | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 11 | 20 | 1° N | 13h-18h | couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 16 | 13° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 16 | 13° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 360° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 360° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 6 | 12 | 42° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 6 | 12 | 42° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 353° N | aucun | couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 20 | 48° NE | 09h-19h | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 18 | 24 | 32° NNE | 08h-14h | soleil | 0.0 | 16°C |
| Plage du Vengeron | 12 | 15 | 35° NE | 10h-17h | soleil | 0.0 | 17°C |
| Plage d'Hermance | 12 | 18 | 48° NE | 09h-17h | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 306° NO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 13 | 49° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 28° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 342° NNO | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 30 | 5° N | 10h-18h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 11 | 25 | 0° N | 14h-17h | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 21 | 358° N | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 8 | 21 | 358° N | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 18 | 350° N | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 352° N | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 7 | 14 | 358° N | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 7 | 14 | 358° N | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 346° NNO | aucun | soleil | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 4 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 4 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 4 | 7 | 8° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 306° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 42° NE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 311° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 7 | 213° SSO | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 1° N | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 353° N | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 28° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 5 | 13 | 28° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 30° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 21° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 4 | 8 | 38° NE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 4 | 8 | 38° NE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 353° N | aucun | soleil | 0.0 | 18°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 335° NNO | aucun | couvert | 0.0 | 20°C |
| Plage d'Excenevex | 3 | 5 | 335° NNO | aucun | couvert | 0.0 | 20°C |
| Plage du Vengeron | 3 | 5 | 335° NNO | aucun | couvert | 0.0 | 20°C |
| Plage d'Hermance | 3 | 5 | 335° NNO | aucun | couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 117° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 180° S | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 315° NO | aucun | couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 6° N | aucun | couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 14° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 303° ONO | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 72° ENE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 2 | 8 | 72° ENE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 51° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 61° ENE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 2 | 7 | 69° ENE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 2 | 7 | 69° ENE | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 15° NNE | aucun | soleil-couvert | 0.0 | 19°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 252° OSO | 10h-14h | couvert | 0.3 | 17°C |
| Plage d'Excenevex | 12 | 18 | 252° OSO | 10h-14h | couvert | 0.3 | 16°C |
| Plage du Vengeron | 12 | 18 | 252° OSO | 10h-14h | couvert | 0.3 | 17°C |
| Plage d'Hermance | 12 | 18 | 252° OSO | 10h-14h | couvert | 0.3 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 169° S | aucun | pluie | 1.5 | 17°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 15° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 15 | 324° NO | aucun | couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 14 | 356° N | aucun | couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 173° S | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 181° S | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 166° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 4 | 12 | 166° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 172° S | aucun | pluie | 1.2 | 19°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 172° S | aucun | soleil-couvert | 0.6 | 19°C |
| Saint-Romain-des-Iles | 4 | 9 | 154° SSE | aucun | couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 4 | 9 | 154° SSE | aucun | couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 185° S | aucun | couvert | 0.6 | 18°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 48° NE | aucun | pluie | 12.6 | 15°C |
| Plage d'Excenevex | 10 | 17 | 26° NNE | aucun | pluie | 11.6 | 15°C |
| Plage du Vengeron | 8 | 13 | 48° NE | aucun | pluie | 12.6 | 15°C |
| Plage d'Hermance | 8 | 13 | 48° NE | aucun | pluie | 12.6 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 16 | 341° NNO | aucun | pluie | 10.8 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 1° N | aucun | pluie | 10.5 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 27 | 343° NNO | aucun | pluie | 7.2 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 30 | 337° NNO | aucun | pluie | 3.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 35 | 11° N | 14h-20h | pluie | 2.6 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 32 | 6° N | 16h-20h | soleil-couvert | 0.5 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 24 | 350° N | aucun | pluie | 8.2 | 15°C |
| Nord du Pont de Chavanay | 9 | 24 | 350° N | aucun | pluie | 8.2 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 351° N | aucun | pluie | 8.2 | 16°C |
| Saint-Cyr-sur-le-Rhône | 9 | 25 | 346° NNO | aucun | pluie | 5.6 | 15°C |
| Saint-Romain-des-Iles | 11 | 21 | 335° NNO | 13h-17h | couvert | 0.8 | 12°C |
| Nord du Pont d'Arciat | 11 | 21 | 335° NNO | 13h-17h | couvert | 0.8 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 25 | 342° NNO | 13h-18h | pluie | 1.2 | 14°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 28 | 39° NE | 08h-20h | pluie | 1.2 | 10°C |
| Plage d'Excenevex | 22 | 31 | 38° NE | 08h-20h | pluie | 3.2 | 10°C |
| Plage du Vengeron | 20 | 28 | 39° NE | 08h-20h | pluie | 1.2 | 10°C |
| Plage d'Hermance | 20 | 28 | 39° NE | 08h-20h | pluie | 1.2 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 35 | 9° N | 10h-20h | pluie | 1.1 | 7°C |
| Lac du Bourget - Cap des Séselets | 12 | 31 | 28° NNE | 12h-20h | soleil | 0.3 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 44 | 353° N | 08h-20h | soleil-couvert | 0.6 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 14 | 45 | 351° N | 08h-20h | soleil-couvert | 0.6 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 26 | 55 | 0° N | 08h-20h | pluie | 1.2 | 11°C |
| La Roche-de-Glun - Base Nautique | 23 | 46 | 357° N | 08h-20h | couvert | 0.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 18 | 40 | 351° N | 08h-20h | soleil-couvert | 0.6 | 10°C |
| Nord du Pont de Chavanay | 18 | 40 | 351° N | 08h-20h | soleil-couvert | 0.6 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 37 | 355° N | 08h-20h | soleil-couvert | 0.6 | 10°C |
| Saint-Cyr-sur-le-Rhône | 18 | 39 | 352° N | 08h-20h | soleil-couvert | 0.6 | 10°C |
| Saint-Romain-des-Iles | 15 | 27 | 4° N | 08h-20h | pluie | 1.2 | 10°C |
| Nord du Pont d'Arciat | 15 | 27 | 4° N | 08h-20h | pluie | 1.2 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 16 | 36 | 3° N | 08h-20h | soleil-couvert | 0.0 | 10°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 36 | 29° NNE | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 20 | 35 | 33° NNE | 08h-17h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 22 | 36 | 29° NNE | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 22 | 36 | 29° NNE | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 331° NNO | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 18 | 22° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 346° NNO | aucun | soleil-couvert | 0.1 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 335° NNO | aucun | soleil-couvert | 0.1 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 41 | 5° N | 08h-16h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 34 | 360° N | 08h-15h | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 33 | 337° NNO | aucun | soleil | 0.0 | 13°C |
| Nord du Pont de Chavanay | 10 | 33 | 337° NNO | aucun | soleil | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 30 | 337° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 32 | 335° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 13 | 28 | 4° N | 08h-11h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 13 | 28 | 4° N | 08h-11h | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 30 | 354° N | aucun | soleil | 0.0 | 14°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 25° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 7 | 12 | 16° NNE | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 9 | 14 | 25° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 9 | 14 | 25° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 312° NO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 24° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 19° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 20° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 6° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 345° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 14 | 18° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 6 | 14 | 18° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 11 | 311° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 9° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 11 | 314° NO | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 4 | 11 | 314° NO | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 337° NNO | aucun | soleil-couvert | 0.0 | 16°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 33° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 7 | 11 | 40° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 7 | 10 | 33° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 7 | 10 | 33° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 321° NO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 25° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 185° S | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 351° N | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 360° N | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 2° N | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 36° NE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 2 | 8 | 36° NE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 24° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 20° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 2 | 8 | 92° E | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 2 | 8 | 92° E | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 5 | 66° ENE | aucun | soleil | 0.0 | 16°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 9 | 17° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 4 | 9 | 30° NNE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 3 | 9 | 17° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 3 | 9 | 17° NNE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 303° ONO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 24° NNE | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 177° S | aucun | soleil | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 180° S | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 138° SE | aucun | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 2 | 10 | 126° SE | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 145° SE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 4 | 11 | 145° SE | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 96° E | aucun | soleil | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 139° SE | aucun | soleil | 0.0 | 20°C |
| Saint-Romain-des-Iles | 3 | 8 | 129° SE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 8 | 129° SE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 86° E | aucun | soleil | 0.0 | 19°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 6 | 320° NO | aucun | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 2 | 6 | 339° NNO | aucun | soleil | 0.0 | 17°C |
| Plage du Vengeron | 2 | 6 | 320° NO | aucun | soleil | 0.0 | 17°C |
| Plage d'Hermance | 2 | 6 | 320° NO | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 282° ONO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 24° NNE | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 147° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 231° SO | aucun | soleil-couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 196° SSO | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 4 | 12 | 204° SSO | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 142° SE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 4 | 12 | 142° SE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 157° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 146° SE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 5 | 10 | 162° SSE | aucun | soleil-couvert | 0.6 | 20°C |
| Nord du Pont d'Arciat | 5 | 10 | 162° SSE | aucun | soleil-couvert | 0.6 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 168° SSE | aucun | soleil-couvert | 0.0 | 20°C |
