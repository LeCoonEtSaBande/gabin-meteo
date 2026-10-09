# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 09/10/2026 23:49 (Europe/Paris)
- Fichiers générés le : 2026-10-09T23:52:37+02:00
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

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 15 | 34° NE | aucun | soleil-couvert | 0.3 | 15°C |
| Plage d'Excenevex | 13 | 18 | 22° NNE | 08h-11h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 11 | 14 | 32° NNE | aucun | soleil-couvert | 0.2 | 16°C |
| Plage d'Hermance | 12 | 16 | 39° NE | aucun | soleil-couvert | 0.3 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 14 | 323° NO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 9 | 14 | 338° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 357° N | 08h-15h | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 357° N | 11h-16h | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 31 | 15° NNE | 08h-19h | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 352° N | 08h-15h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 22 | 337° NNO | 09h-14h | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 10 | 20 | 332° NNO | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 341° NNO | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 8 | 20 | 4° N | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 8 | 14 | 328° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 8 | 14 | 330° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 18 | 347° NNO | aucun | soleil-couvert | 0.0 | 15°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 17 | 212° SSO | 08h-14h | couvert | 0.4 | 16°C |
| Plage d'Excenevex | 9 | 14 | 228° SO | aucun | soleil-couvert | 0.3 | 16°C |
| Plage du Vengeron | 9 | 13 | 207° SSO | aucun | soleil-couvert | 0.9 | 16°C |
| Plage d'Hermance | 11 | 14 | 190° S | aucun | soleil-couvert | 0.3 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 171° S | aucun | pluie | 2.7 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 9 | 194° SSO | aucun | pluie | 2.2 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 20 | 5° N | aucun | soleil-couvert | 0.5 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 354° N | 13h-16h | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 355° N | aucun | pluie | 1.1 | 19°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 349° N | aucun | pluie | 1.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 21° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 8 | 16 | 16° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 343° NNO | aucun | soleil-couvert | 0.2 | 18°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 14° NNE | aucun | soleil-couvert | 0.2 | 17°C |
| Saint-Romain-des-Iles | 7 | 18 | 305° NO | aucun | soleil-couvert | 0.4 | 15°C |
| Nord du Pont d'Arciat | 6 | 12 | 296° ONO | aucun | pluie | 1.9 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 348° NNO | aucun | soleil-couvert | 0.4 | 16°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 332° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 10 | 15 | 18° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 7 | 10 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 8 | 341° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 285° ONO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 9 | 11 | 14° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 21° NNE | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 348° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 26 | 6° N | 09h-19h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 11° N | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 17 | 360° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 8 | 16 | 5° N | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 10° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 20° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 6 | 12 | 2° N | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 7 | 12 | 336° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 13 | 1° N | aucun | soleil-couvert | 0.0 | 16°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 52° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 12 | 16 | 42° NE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 10 | 13 | 35° NE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 9 | 13 | 54° NE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 289° ONO | aucun | soleil | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 38° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 15 | 18° NNE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 335° NNO | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 21 | 7° N | 09h-19h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 10 | 18 | 4° N | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 17 | 4° N | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 9 | 17 | 4° N | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 360° N | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 360° N | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 6 | 11 | 40° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 6 | 11 | 40° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 21° NNE | aucun | soleil-couvert | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 257° OSO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 2 | 3 | 146° SE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 2 | 3 | 29° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 4 | 5 | 109° ESE | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 303° ONO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 223° SO | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 47° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 13 | 338° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 3° N | 16h-19h | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 8 | 15 | 12° NNE | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 15 | 29° NNE | aucun | soleil | 0.0 | 22°C |
| Nord du Pont de Chavanay | 8 | 15 | 29° NNE | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 24° NNE | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 24° NNE | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 5 | 11 | 57° ENE | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 5 | 11 | 57° ENE | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 20° NNE | aucun | soleil | 0.0 | 20°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 72° ENE | aucun | soleil | 0.0 | 21°C |
| Plage d'Excenevex | 9 | 12 | 59° ENE | aucun | soleil | 0.0 | 21°C |
| Plage du Vengeron | 8 | 10 | 35° NE | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 8 | 13 | 52° NE | aucun | soleil | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 301° ONO | aucun | soleil | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 180° S | aucun | soleil-couvert | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 70° ENE | aucun | soleil | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 225° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 18 | 1° N | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 357° N | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 17° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 5 | 13 | 17° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 350° N | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 4 | 12 | 18° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 3 | 10 | 20° NNE | aucun | soleil | 0.0 | 21°C |
| Nord du Pont d'Arciat | 3 | 10 | 20° NNE | aucun | soleil | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 6° N | aucun | soleil-couvert | 0.0 | 21°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 347° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Excenevex | 4 | 7 | 347° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 4 | 7 | 347° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 4 | 7 | 347° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 101° E | aucun | soleil | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 13° NNE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 119° ESE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 5 | 210° SSO | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 14 | 178° S | aucun | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 175° S | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 169° S | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 6 | 16 | 169° S | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 15 | 167° SSE | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 174° S | aucun | soleil | 0.0 | 20°C |
| Saint-Romain-des-Iles | 6 | 12 | 149° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 6 | 12 | 149° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 144° SE | aucun | soleil | 0.0 | 21°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 12 | 58° ENE | aucun | couvert | 0.0 | 20°C |
| Plage d'Excenevex | 7 | 12 | 58° ENE | aucun | couvert | 0.0 | 20°C |
| Plage du Vengeron | 7 | 12 | 58° ENE | aucun | couvert | 0.0 | 20°C |
| Plage d'Hermance | 7 | 12 | 58° ENE | aucun | couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 313° NO | aucun | couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 9° N | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 324° NO | aucun | couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 10° N | aucun | couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 172° S | aucun | soleil | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 182° S | aucun | soleil | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 156° SSE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 3 | 10 | 156° SSE | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 11 | 220° SO | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 3 | 13 | 198° SSO | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 2 | 7 | 117° ESE | aucun | soleil | 0.0 | 21°C |
| Nord du Pont d'Arciat | 2 | 7 | 117° ESE | aucun | soleil | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 144° SE | aucun | soleil | 0.0 | 21°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 38° NE | 17h-20h | couvert | 0.0 | 18°C |
| Plage d'Excenevex | 16 | 22 | 26° NNE | 16h-20h | couvert | 0.0 | 18°C |
| Plage du Vengeron | 13 | 19 | 38° NE | 17h-20h | couvert | 0.0 | 18°C |
| Plage d'Hermance | 13 | 19 | 38° NE | 17h-20h | couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 14° NNE | aucun | couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 346° NNO | aucun | couvert | 0.6 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 3° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 19 | 356° N | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 30 | 359° N | 10h-20h | couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 14 | 28 | 355° N | 11h-20h | couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 356° N | aucun | couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 10 | 22 | 356° N | aucun | couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 353° N | 15h-18h | couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 354° N | 14h-17h | couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 12 | 20 | 2° N | 14h-20h | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 12 | 20 | 2° N | 14h-20h | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 24 | 350° N | 14h-20h | couvert | 0.0 | 18°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 23 | 26° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 14 | 22 | 20° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 14 | 23 | 26° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 14 | 23 | 26° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 357° N | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 43° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 358° N | aucun | couvert | 0.7 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 349° N | aucun | couvert | 0.7 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 12° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 9° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 359° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 10 | 23 | 359° N | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 354° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 12 | 21 | 0° N | 10h-17h | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 12 | 21 | 0° N | 10h-17h | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 23 | 348° NNO | aucun | soleil-couvert | 0.0 | 15°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 30° NNE | 08h-11h | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 10 | 17 | 31° NNE | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 11 | 18 | 30° NNE | 08h-11h | soleil | 0.0 | 14°C |
| Plage d'Hermance | 11 | 18 | 30° NNE | 08h-11h | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 317° NO | aucun | soleil | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 206° SSO | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 17 | 10° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 360° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 34 | 10° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 14 | 29 | 5° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 353° N | 12h-16h | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 11 | 25 | 353° N | 12h-16h | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 347° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 25 | 347° NNO | 12h-15h | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 10 | 19 | 351° N | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 10 | 19 | 351° N | aucun | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 22 | 343° NNO | aucun | soleil | 0.0 | 14°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 207° SSO | 14h-17h | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 12 | 18 | 220° SO | 15h-20h | couvert | 0.0 | 15°C |
| Plage du Vengeron | 10 | 15 | 207° SSO | 14h-17h | couvert | 0.0 | 15°C |
| Plage d'Hermance | 10 | 15 | 207° SSO | 14h-17h | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 248° OSO | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 207° SSO | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 26 | 347° NNO | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 24 | 341° NNO | aucun | couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 33 | 12° NNE | 08h-20h | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 15° NNE | 12h-20h | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 22 | 5° N | aucun | couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 8 | 22 | 5° N | aucun | couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 18 | 360° N | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 8 | 21 | 358° N | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 10 | 18 | 306° NO | aucun | couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 10 | 18 | 306° NO | aucun | couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 15 | 337° NNO | aucun | couvert | 0.0 | 15°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 21 | 31° NNE | 10h-20h | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 18 | 24 | 31° NNE | 08h-20h | soleil | 0.1 | 13°C |
| Plage du Vengeron | 15 | 21 | 31° NNE | 10h-20h | soleil | 0.0 | 13°C |
| Plage d'Hermance | 15 | 21 | 31° NNE | 10h-20h | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 26 | 7° N | 13h-16h | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 8 | 22 | 33° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 32 | 345° NNO | aucun | soleil-couvert | 0.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 32 | 343° NNO | aucun | soleil-couvert | 0.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 36 | 356° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 357° N | 08h-20h | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 28 | 349° N | 08h-20h | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 13 | 28 | 349° N | 08h-20h | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 350° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 349° N | 08h-20h | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 12 | 22 | 8° N | 11h-18h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 12 | 22 | 8° N | 11h-18h | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 27 | 355° N | 10h-20h | soleil | 0.0 | 14°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 24 | 16° NNE | 08h-14h | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 11 | 21 | 9° N | 08h-11h | soleil | 0.0 | 12°C |
| Plage du Vengeron | 13 | 24 | 16° NNE | 08h-14h | soleil | 0.0 | 12°C |
| Plage d'Hermance | 13 | 24 | 16° NNE | 08h-14h | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 339° NNO | aucun | soleil | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 28° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 29° NNE | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 9 | 320° NO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 7° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 354° N | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 14° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 14 | 14° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 11 | 21° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 5° N | aucun | soleil | 0.0 | 13°C |
| Saint-Romain-des-Iles | 4 | 14 | 331° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 4 | 14 | 331° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 13 | 326° NO | aucun | soleil-couvert | 0.0 | 13°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 28° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 9 | 14 | 15° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 10 | 15 | 28° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 10 | 15 | 28° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 337° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 30° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 163° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 165° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 10° N | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 3 | 6 | 333° NNO | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 318° NO | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 2 | 8 | 318° NO | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 31° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 2 | 10 | 31° NNE | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 2 | 8 | 93° E | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 2 | 8 | 93° E | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 19° NNE | aucun | soleil | 0.0 | 15°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 30° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 6 | 11 | 40° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 11 | 30° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 6 | 11 | 30° NNE | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 329° NNO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 30° NNE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 18 | 183° S | aucun | couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 180° S | aucun | couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 235° SO | aucun | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 221° SO | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 174° S | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 4 | 12 | 174° S | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 161° SSE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 167° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 8 | 16 | 154° SSE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 8 | 16 | 154° SSE | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 149° SSE | aucun | soleil | 0.0 | 17°C |
