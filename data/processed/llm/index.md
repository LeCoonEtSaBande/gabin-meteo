# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 02/10/2026 18:45 (Europe/Paris)
- Fichiers générés le : 2026-10-02T18:49:21+02:00
- Mise à jour 3 fois par jour (vers 7h15, 13h15 et 19h15, une heure plus tôt en hiver).
- Carte : https://lecoonetsabande.github.io/gabin-meteo/
- Archive des prévisions de la veille à 23 h (AROME HD et ICON-CH1 bruts) : https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/archive-previsions/index.md

Pour le détail heure par heure d'un spot (vent moyen, rafales, direction, pluie, nuages des courbes AROMEIFS et ICONGFS), lire son fichier dans la liste ci-dessous.

> Unités : vent moyen et rafales en nœuds (nds), direction = d'où vient le vent (degrés et rose des vents), pluie en mm tombés pendant l'heure qui précède, nuages en % (nébulosité perçue), heures en Europe/Paris.
> Créneau navigable : au moins 3 h de vent moyen > 10 nds entre 7 h et 22 h ; s'il y en a plusieurs, le plus proche du pic de vent moyen.
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

### ven. 02/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 48° NE | 08h-11h | couvert | 0.0 | 19°C |
| Plage d'Excenevex | 13 | 18 | 41° NE | 07h-10h | couvert | 0.0 | 19°C |
| Plage du Vengeron | 6 | 7 | 51° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage d'Hermance | 10 | 14 | 50° NE | aucun | couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 7 | 333° NNO | aucun | couvert | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 11 | 13 | 17° NNE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 9° N | aucun | couvert | 0.1 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 358° N | aucun | couvert | 0.2 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 20 | 13° NNE | 09h-13h | soleil | 0.0 | 24°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 348° NNO | aucun | soleil | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 6° N | aucun | soleil | 0.0 | 23°C |
| Nord du Pont de Chavanay | 8 | 16 | 20° NNE | aucun | soleil | 0.0 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 334° NNO | aucun | soleil | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 11° N | aucun | soleil | 0.0 | 22°C |
| Saint-Romain-des-Iles | 8 | 13 | 9° N | aucun | soleil | 0.0 | 21°C |
| Nord du Pont d'Arciat | 9 | 13 | 3° N | aucun | soleil | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 9 | 350° N | aucun | soleil-couvert | 0.0 | 20°C |

### sam. 03/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 227° SO | aucun | couvert | 0.0 | 19°C |
| Plage d'Excenevex | 5 | 7 | 83° E | aucun | couvert | 0.0 | 20°C |
| Plage du Vengeron | 4 | 5 | 292° ONO | aucun | couvert | 0.0 | 19°C |
| Plage d'Hermance | 4 | 6 | 214° SO | aucun | couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 336° NNO | aucun | pluie | 1.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 4 | 7 | 355° N | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 231° SO | aucun | orage | 5.4 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 355° N | aucun | pluie | 1.5 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 214° SO | aucun | couvert | 0.0 | 23°C |
| La Roche-de-Glun - Base Nautique | 4 | 7 | 261° O | aucun | couvert | 0.0 | 24°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont de Chavanay | 4 | 8 | 32° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 342° NNO | aucun | couvert | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 18° NNE | aucun | couvert | 0.0 | 22°C |
| Saint-Romain-des-Iles | 2 | 4 | 225° SO | aucun | pluie | 1.2 | 20°C |
| Nord du Pont d'Arciat | 4 | 6 | 202° SSO | aucun | couvert | 0.4 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 53° NE | aucun | pluie | 1.1 | 20°C |

### dim. 04/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 347° NNO | aucun | couvert | 0.0 | 21°C |
| Plage d'Excenevex | 8 | 10 | 330° NNO | aucun | couvert | 0.0 | 20°C |
| Plage du Vengeron | 8 | 10 | 23° NNE | aucun | couvert | 0.0 | 21°C |
| Plage d'Hermance | 7 | 10 | 12° NNE | aucun | couvert | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 304° NO | aucun | couvert | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 5 | 10 | 40° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 177° S | aucun | couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 352° N | aucun | soleil-couvert | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 207° SSO | aucun | soleil-couvert | 0.0 | 26°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 145° SE | aucun | soleil-couvert | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 11 | 142° SE | aucun | soleil-couvert | 0.0 | 26°C |
| Nord du Pont de Chavanay | 5 | 11 | 152° SSE | aucun | soleil-couvert | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 9 | 131° SE | aucun | soleil-couvert | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 216° SO | aucun | soleil-couvert | 0.0 | 26°C |
| Saint-Romain-des-Iles | 5 | 9 | 53° NE | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont d'Arciat | 5 | 9 | 53° NE | aucun | soleil-couvert | 0.0 | 24°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 35° NE | aucun | soleil-couvert | 0.0 | 22°C |

### lun. 05/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 37° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Excenevex | 4 | 6 | 142° SE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage du Vengeron | 6 | 9 | 16° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Plage d'Hermance | 6 | 9 | 18° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 74° ENE | aucun | soleil-couvert | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 59° ENE | aucun | soleil | 0.0 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 8° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 353° N | aucun | soleil-couvert | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 30° NNE | aucun | soleil | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 14° NNE | aucun | soleil | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 10 | 24° NNE | aucun | soleil | 0.0 | 26°C |
| Nord du Pont de Chavanay | 4 | 10 | 24° NNE | aucun | soleil | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 3° N | aucun | soleil | 0.0 | 26°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 3° N | aucun | soleil | 0.0 | 26°C |
| Saint-Romain-des-Iles | 5 | 10 | 47° NE | aucun | soleil | 0.0 | 26°C |
| Nord du Pont d'Arciat | 5 | 10 | 47° NE | aucun | soleil | 0.0 | 26°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 34° NE | aucun | soleil | 0.0 | 25°C |

### mar. 06/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 43° NE | aucun | soleil | 0.0 | 21°C |
| Plage d'Excenevex | 5 | 6 | 77° ENE | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 5 | 6 | 12° NNE | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 5 | 8 | 2° N | aucun | soleil | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 292° ONO | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 187° S | aucun | soleil-couvert | 0.0 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 8° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 356° N | aucun | couvert | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 17 | 195° SSO | aucun | soleil-couvert | 0.0 | 28°C |
| La Roche-de-Glun - Base Nautique | 9 | 17 | 185° S | aucun | soleil-couvert | 0.0 | 28°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 14 | 183° S | aucun | soleil-couvert | 0.0 | 28°C |
| Nord du Pont de Chavanay | 8 | 14 | 183° S | aucun | soleil-couvert | 0.0 | 28°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 178° S | aucun | soleil-couvert | 0.0 | 27°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 178° S | aucun | soleil-couvert | 0.0 | 27°C |
| Saint-Romain-des-Iles | 5 | 11 | 165° SSE | aucun | soleil-couvert | 0.0 | 27°C |
| Nord du Pont d'Arciat | 5 | 11 | 165° SSE | aucun | soleil-couvert | 0.0 | 27°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 165° SSE | aucun | soleil-couvert | 0.0 | 26°C |

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 291° ONO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 3 | 4 | 183° S | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 3 | 6 | 291° ONO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 3 | 6 | 291° ONO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 331° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 216° SO | aucun | soleil-couvert | 0.2 | 23°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 323° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 342° NNO | aucun | couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 203° SSO | aucun | soleil-couvert | 0.0 | 23°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 200° SSO | aucun | soleil-couvert | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 176° S | aucun | soleil-couvert | 0.0 | 24°C |
| Nord du Pont de Chavanay | 10 | 24 | 176° S | aucun | soleil-couvert | 0.0 | 24°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 175° S | aucun | soleil-couvert | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 11 | 23 | 173° S | 13h-16h | soleil-couvert | 0.0 | 24°C |
| Saint-Romain-des-Iles | 6 | 13 | 171° S | aucun | pluie | 1.6 | 24°C |
| Nord du Pont d'Arciat | 6 | 13 | 171° S | aucun | pluie | 1.6 | 24°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 183° S | aucun | soleil-couvert | 0.0 | 24°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 334° NNO | aucun | pluie | 3.1 | 14°C |
| Plage d'Excenevex | 10 | 16 | 334° NNO | aucun | pluie | 3.1 | 14°C |
| Plage du Vengeron | 10 | 16 | 334° NNO | aucun | pluie | 3.1 | 14°C |
| Plage d'Hermance | 10 | 16 | 334° NNO | aucun | pluie | 3.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 315° NO | aucun | pluie | 2.7 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 351° N | aucun | pluie | 4.2 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 29 | 346° NNO | 19h-22h | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 28 | 348° NNO | 17h-22h | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 29 | 6° N | 18h-22h | couvert | 0.6 | 20°C |
| La Roche-de-Glun - Base Nautique | 12 | 28 | 352° N | aucun | pluie | 4.2 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 336° NNO | aucun | pluie | 7.8 | 19°C |
| Nord du Pont de Chavanay | 10 | 23 | 336° NNO | aucun | pluie | 7.8 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 24 | 333° NNO | aucun | pluie | 4.4 | 19°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 331° NNO | aucun | pluie | 8.2 | 19°C |
| Saint-Romain-des-Iles | 9 | 16 | 340° NNO | aucun | pluie | 7.6 | 16°C |
| Nord du Pont d'Arciat | 9 | 16 | 340° NNO | aucun | pluie | 7.6 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 22 | 339° NNO | aucun | pluie | 3.6 | 17°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 16 | 224° SO | aucun | soleil-couvert | 0.8 | 13°C |
| Plage d'Excenevex | 8 | 16 | 224° SO | aucun | soleil-couvert | 0.8 | 13°C |
| Plage du Vengeron | 8 | 16 | 224° SO | aucun | soleil-couvert | 0.8 | 13°C |
| Plage d'Hermance | 8 | 16 | 224° SO | aucun | soleil-couvert | 0.8 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 335° NNO | aucun | soleil-couvert | 0.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 17 | 32° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 25 | 341° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 20 | 356° N | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 37 | 1° N | 07h-22h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 354° N | 07h-22h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 28 | 342° NNO | 07h-17h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 13 | 28 | 342° NNO | 07h-17h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 340° NNO | 10h-16h | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 13 | 27 | 339° NNO | 07h-17h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 10 | 19 | 358° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 10 | 19 | 358° N | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 23 | 344° NNO | 12h-15h | soleil-couvert | 0.0 | 14°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 223° SO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 10 | 13 | 222° SO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 8 | 13 | 223° SO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 8 | 13 | 223° SO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 243° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 225° SO | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 29° NNE | aucun | couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 31° NNE | aucun | couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 3° N | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 352° N | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 37° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 4 | 12 | 37° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 254° OSO | aucun | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 12 | 25° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 3 | 9 | 156° SSE | aucun | couvert | 0.2 | 16°C |
| Nord du Pont d'Arciat | 3 | 9 | 156° SSE | aucun | couvert | 0.2 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 131° SE | aucun | couvert | 0.0 | 16°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 18 | 222° SO | aucun | couvert | 0.0 | 18°C |
| Plage d'Excenevex | 12 | 18 | 223° SO | aucun | couvert | 0.0 | 18°C |
| Plage du Vengeron | 9 | 18 | 222° SO | aucun | couvert | 0.0 | 18°C |
| Plage d'Hermance | 9 | 18 | 222° SO | aucun | couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 14 | 146° SE | aucun | couvert | 0.2 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 213° SSO | aucun | couvert | 0.2 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 186° S | aucun | couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 199° SSO | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 176° S | aucun | couvert | 0.2 | 20°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 186° S | aucun | couvert | 0.2 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 177° S | aucun | couvert | 0.4 | 19°C |
| Nord du Pont de Chavanay | 9 | 18 | 177° S | aucun | couvert | 0.4 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 20 | 176° S | aucun | couvert | 0.4 | 20°C |
| Saint-Cyr-sur-le-Rhône | 10 | 19 | 175° S | aucun | couvert | 0.4 | 20°C |
| Saint-Romain-des-Iles | 6 | 14 | 199° SSO | aucun | couvert | 0.2 | 19°C |
| Nord du Pont d'Arciat | 6 | 14 | 199° SSO | aucun | couvert | 0.2 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 187° S | aucun | couvert | 0.4 | 19°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 21 | 247° OSO | 07h-12h | pluie | 3.8 | 18°C |
| Plage d'Excenevex | 13 | 22 | 244° OSO | 07h-16h | pluie | 3.4 | 18°C |
| Plage du Vengeron | 12 | 21 | 247° OSO | 07h-12h | pluie | 3.8 | 18°C |
| Plage d'Hermance | 12 | 21 | 247° OSO | 07h-12h | pluie | 3.8 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 16 | 199° SSO | aucun | pluie | 6.2 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 217° SO | aucun | pluie | 4.6 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 174° S | aucun | pluie | 1.2 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 10 | 347° NNO | aucun | pluie | 1.8 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 1° N | aucun | pluie | 1.6 | 21°C |
| La Roche-de-Glun - Base Nautique | 8 | 21 | 199° SSO | aucun | pluie | 1.6 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 172° S | aucun | pluie | 3.2 | 19°C |
| Nord du Pont de Chavanay | 8 | 19 | 172° S | aucun | pluie | 3.2 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 170° S | aucun | pluie | 1.6 | 18°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 166° SSE | aucun | pluie | 3.2 | 18°C |
| Saint-Romain-des-Iles | 7 | 16 | 310° NO | aucun | pluie | 1.2 | 17°C |
| Nord du Pont d'Arciat | 7 | 16 | 310° NO | aucun | pluie | 1.2 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 22 | 198° SSO | aucun | pluie | 3.8 | 19°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 11 | 226° SO | aucun | couvert | 0.0 | 17°C |
| Plage d'Excenevex | 7 | 10 | 221° SO | aucun | couvert | 0.0 | 17°C |
| Plage du Vengeron | 6 | 11 | 226° SO | aucun | couvert | 0.0 | 17°C |
| Plage d'Hermance | 6 | 11 | 226° SO | aucun | couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 228° SO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 25° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 198° SSO | aucun | soleil-couvert | 0.0 | 22°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 204° SSO | aucun | soleil-couvert | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 183° S | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 185° S | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 152° SSE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 4 | 11 | 152° SSE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 148° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 151° SSE | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 3 | 8 | 132° SE | aucun | soleil-couvert | 0.6 | 18°C |
| Nord du Pont d'Arciat | 3 | 8 | 132° SE | aucun | soleil-couvert | 0.6 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 139° SE | aucun | soleil-couvert | 0.0 | 18°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 8 | 231° SO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 3 | 8 | 207° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 3 | 8 | 231° SO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 3 | 8 | 231° SO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 277° O | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 1 | 4 | 27° NNE | aucun | couvert | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 21° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 42° NE | aucun | couvert | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 284° ONO | aucun | couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 5 | 180° S | aucun | couvert | 0.0 | 22°C |
| Nord du Pont de Chavanay | 1 | 5 | 180° S | aucun | couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 199° SSO | aucun | couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 1 | 6 | 189° S | aucun | couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 3 | 9 | 140° SE | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont d'Arciat | 3 | 9 | 140° SE | aucun | soleil-couvert | 0.0 | 22°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 1 | 7 | 201° SSO | aucun | couvert | 0.0 | 21°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 7 | 26° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 2 | 6 | 61° ENE | aucun | soleil-couvert | 0.0 | 19°C |
| Plage du Vengeron | 3 | 7 | 26° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 3 | 7 | 26° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 272° O | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 2 | 5 | 5° N | aucun | soleil-couvert | 0.0 | 22°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 209° SSO | aucun | soleil | 0.0 | 23°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 219° SO | aucun | soleil | 0.0 | 23°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 198° SSO | aucun | soleil-couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 10 | 24 | 194° SSO | aucun | soleil-couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 170° S | 13h-16h | soleil | 0.0 | 22°C |
| Nord du Pont de Chavanay | 10 | 24 | 170° S | 13h-16h | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 172° S | 13h-17h | soleil-couvert | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 170° S | 13h-16h | soleil-couvert | 0.0 | 22°C |
| Saint-Romain-des-Iles | 9 | 17 | 169° S | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont d'Arciat | 9 | 17 | 169° S | aucun | soleil-couvert | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 169° S | aucun | soleil-couvert | 0.0 | 22°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 229° SO | aucun | soleil | 0.0 | 20°C |
| Plage d'Excenevex | 4 | 7 | 213° SSO | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 5 | 8 | 229° SO | aucun | soleil | 0.0 | 20°C |
| Plage d'Hermance | 5 | 8 | 229° SO | aucun | soleil | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 266° O | aucun | soleil | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 25° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 193° SSO | aucun | soleil | 0.0 | 23°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 189° S | aucun | soleil | 0.0 | 23°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 25 | 203° SSO | 12h-17h | soleil-couvert | 0.0 | 23°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 200° SSO | 12h-18h | soleil-couvert | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 29 | 184° S | 12h-17h | soleil | 0.0 | 23°C |
| Nord du Pont de Chavanay | 12 | 29 | 184° S | 12h-17h | soleil | 0.0 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 183° S | 12h-17h | soleil-couvert | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 13 | 28 | 180° S | 11h-17h | soleil | 0.0 | 23°C |
| Saint-Romain-des-Iles | 10 | 18 | 166° SSE | aucun | soleil | 0.0 | 23°C |
| Nord du Pont d'Arciat | 10 | 18 | 166° SSE | aucun | soleil | 0.0 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 25 | 192° SSO | 13h-17h | soleil | 0.0 | 24°C |
