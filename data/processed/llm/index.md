# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 25/10/2026 10:56 (Europe/Paris)
- Fichiers générés le : 2026-10-25T11:00:44+01:00
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

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 26 | 36 | 213° SSO | 08h-19h | pluie | 8.8 | 14°C |
| Plage d'Excenevex | 19 | 29 | 206° SSO | 08h-17h | pluie | 9.4 | 14°C |
| Plage du Vengeron | 19 | 27 | 211° SSO | 08h-17h | pluie | 8.3 | 14°C |
| Plage d'Hermance | 25 | 34 | 209° SSO | 08h-18h | pluie | 6.5 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 20 | 145° SE | 08h-11h | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 16 | 24 | 207° SSO | 08h-15h | pluie | 4.1 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 22 | 6° N | aucun | pluie | 2.1 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 343° NNO | aucun | pluie | 1.3 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 19 | 185° S | 11h-15h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 170° S | aucun | couvert | 0.1 | 14°C |
| Cruas - Nuclear Spot | 7 | 14 | 207° SSO | aucun | couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 23 | 154° SSE | 10h-16h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 12 | 22 | 166° SSE | aucun | couvert | 0.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 29 | 174° S | 08h-15h | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 24 | 216° SO | aucun | couvert | 0.2 | 14°C |
| Saint-Romain-des-Iles | 15 | 23 | 184° S | 08h-14h | pluie | 2.1 | 14°C |
| Nord du Pont d'Arciat | 17 | 26 | 194° SSO | 08h-14h | pluie | 1.5 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 27 | 189° S | 08h-17h | pluie | 1.5 | 13°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 201° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 5 | 36° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 5 | 8 | 28° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 4 | 7 | 49° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 7 | 356° N | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 2 | 2 | 337° NNO | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 14° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 12 | 343° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 10° N | 10h-16h | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 346° NNO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 23 | 21° NNE | 11h-16h | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 43° NE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 5 | 9 | 68° ENE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 23° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 41° NE | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 3 | 3 | 177° S | aucun | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 4 | 4 | 180° S | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 3 | 355° N | aucun | soleil-couvert | 0.0 | 12°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 205° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 3 | 5 | 163° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 2 | 3 | 52° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 2 | 4 | 66° ENE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 319° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 43° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 51° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 9 | 345° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 20 | 188° S | 12h-16h | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 13 | 21 | 180° S | 12h-17h | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 7 | 12 | 188° S | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 158° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 7 | 12 | 158° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 193° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 193° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 7 | 12 | 188° S | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 7 | 12 | 188° S | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 184° S | aucun | soleil-couvert | 0.0 | 18°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 37° NE | 13h-20h | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 17 | 24 | 29° NNE | 12h-20h | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 16 | 21 | 32° NNE | 13h-20h | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 13 | 20 | 38° NE | 13h-20h | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 307° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 40° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 15° NNE | aucun | couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 354° N | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 18 | 28 | 6° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 15 | 25 | 2° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 18 | 37 | 8° N | 08h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 24 | 352° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 13 | 24 | 352° N | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 22 | 350° N | 11h-18h | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 11 | 22 | 350° N | 11h-18h | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 12 | 20 | 13° NNE | 11h-18h | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 12 | 20 | 13° NNE | 11h-18h | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 22 | 353° N | 11h-20h | soleil-couvert | 0.0 | 16°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 50° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 14 | 18 | 32° NNE | 08h-11h | couvert | 0.0 | 14°C |
| Plage du Vengeron | 10 | 14 | 47° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 11 | 16 | 53° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 287° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 29° NNE | aucun | soleil | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 4 | 153° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 346° NNO | aucun | soleil | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 13° NNE | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 343° NNO | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 7 | 17 | 24° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 31° NNE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 2 | 8 | 31° NNE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 59° ENE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 14° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 2 | 7 | 117° ESE | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 2 | 7 | 117° ESE | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 9 | 137° SE | aucun | soleil | 0.0 | 14°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 15 | 43° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 9 | 15 | 43° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 9 | 15 | 43° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 9 | 15 | 43° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 338° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 25° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 330° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 27° NNE | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 360° N | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 3 | 8 | 344° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 5° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 3 | 8 | 5° N | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 23° NNE | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 7° N | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 3 | 8 | 31° NNE | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 3 | 8 | 31° NNE | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 345° NNO | aucun | couvert | 0.0 | 15°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 22 | 42° NE | 08h-18h | soleil-couvert | 0.0 | 10°C |
| Plage d'Excenevex | 14 | 22 | 42° NE | 08h-18h | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 14 | 22 | 42° NE | 08h-18h | soleil-couvert | 0.0 | 10°C |
| Plage d'Hermance | 14 | 22 | 42° NE | 08h-18h | soleil-couvert | 0.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 9 | 339° NNO | aucun | couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 194° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 351° N | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 29° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 15° NNE | 10h-16h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 14° NNE | aucun | soleil-couvert | 0.1 | 13°C |
| Cruas - Nuclear Spot | 10 | 23 | 14° NNE | 17h-20h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 6° N | aucun | couvert | 0.3 | 14°C |
| Nord du Pont de Chavanay | 7 | 18 | 6° N | aucun | couvert | 0.3 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 19° NNE | aucun | couvert | 0.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 7 | 18 | 359° N | aucun | couvert | 0.3 | 14°C |
| Saint-Romain-des-Iles | 5 | 11 | 332° NNO | aucun | soleil-couvert | 0.2 | 14°C |
| Nord du Pont d'Arciat | 5 | 11 | 332° NNO | aucun | soleil-couvert | 0.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 349° N | aucun | couvert | 0.3 | 12°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 38° NE | aucun | pluie | 1.8 | 11°C |
| Plage d'Excenevex | 8 | 13 | 38° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 8 | 13 | 38° NE | aucun | pluie | 1.8 | 11°C |
| Plage d'Hermance | 8 | 13 | 38° NE | aucun | pluie | 1.8 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 10 | 345° NNO | aucun | soleil-couvert | 0.6 | 9°C |
| Lac du Bourget - Cap des Séselets | 1 | 5 | 135° SE | aucun | pluie | 3.6 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 20 | 342° NNO | aucun | soleil-couvert | 0.7 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 23 | 342° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 24 | 13° NNE | aucun | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 10 | 19 | 360° N | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 11 | 26 | 16° NNE | 11h-17h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 341° NNO | aucun | couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 9 | 21 | 341° NNO | aucun | couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 338° NNO | aucun | couvert | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 337° NNO | aucun | couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 9 | 19 | 311° NO | aucun | pluie | 1.2 | 11°C |
| Nord du Pont d'Arciat | 9 | 19 | 311° NO | aucun | pluie | 1.2 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 16 | 320° NO | aucun | soleil-couvert | 0.6 | 12°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 15 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 9 | 15 | 15° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 15 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 9 | 15 | 31° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 321° NO | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 47° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 23° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 9° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 2° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 11 | 26 | 24° NNE | 11h-16h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 359° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 6 | 15 | 359° N | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 358° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 355° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 5 | 11 | 354° N | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 11 | 354° N | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 13 | 340° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 35° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 9 | 15 | 18° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 9 | 14 | 35° NE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 9 | 14 | 35° NE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 331° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 29° NNE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 187° S | aucun | soleil-couvert | 0.6 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 223° SO | aucun | pluie | 1.2 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 359° N | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 317° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 4 | 13 | 15° NNE | aucun | couvert | 0.1 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 8 | 328° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 3 | 8 | 328° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 322° NO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 328° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 2 | 8 | 74° ENE | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 8 | 74° ENE | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 352° N | aucun | soleil-couvert | 0.0 | 9°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 33° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 8 | 13 | 18° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 9 | 13 | 33° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 9 | 13 | 33° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 335° NNO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 32° NNE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 41° NE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 30° NNE | aucun | soleil | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 8 | 20° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 317° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 4 | 9 | 31° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 348° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 2 | 6 | 348° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 294° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 339° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 2 | 7 | 339° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 2 | 7 | 339° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 357° N | aucun | soleil-couvert | 0.0 | 11°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 25° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Excenevex | 9 | 14 | 15° NNE | aucun | soleil | 0.0 | 8°C |
| Plage du Vengeron | 10 | 16 | 25° NNE | aucun | soleil | 0.0 | 8°C |
| Plage d'Hermance | 10 | 16 | 25° NNE | aucun | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 328° NNO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 35° NE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 188° S | aucun | soleil | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 12° NNE | aucun | soleil | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 7° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 354° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 7 | 17 | 33° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 28° NNE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 4 | 11 | 28° NNE | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 333° NNO | aucun | soleil | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 23° NNE | aucun | soleil | 0.0 | 9°C |
| Saint-Romain-des-Iles | 3 | 8 | 50° NE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 8 | 50° NE | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 353° N | aucun | soleil | 0.0 | 10°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 29° NNE | 17h-20h | soleil | 0.0 | 6°C |
| Plage d'Excenevex | 12 | 17 | 20° NNE | 17h-20h | soleil | 0.0 | 7°C |
| Plage du Vengeron | 12 | 18 | 29° NNE | 17h-20h | soleil | 0.0 | 6°C |
| Plage d'Hermance | 12 | 18 | 29° NNE | 17h-20h | soleil | 0.0 | 6°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 326° NO | aucun | soleil | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 32° NNE | aucun | soleil | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 150° SSE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 9° N | aucun | soleil | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 16° NNE | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 327° NNO | aucun | soleil | 0.0 | 9°C |
| Cruas - Nuclear Spot | 6 | 13 | 27° NNE | aucun | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 21° NNE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 3 | 10 | 21° NNE | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 30° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 17° NNE | aucun | soleil | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 8 | 90° E | aucun | soleil | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 8 | 90° E | aucun | soleil | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 7°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 16 | 39° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Excenevex | 10 | 16 | 35° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 9 | 16 | 39° NE | aucun | soleil | 0.0 | 7°C |
| Plage d'Hermance | 9 | 16 | 39° NE | aucun | soleil | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 342° NNO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 32° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 10 | 16° NNE | aucun | soleil-couvert | 0.2 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 324° NO | aucun | soleil-couvert | 0.3 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 351° N | aucun | pluie | 2.5 | 10°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 355° N | aucun | pluie | 1.8 | 10°C |
| Cruas - Nuclear Spot | 4 | 10 | 18° NNE | aucun | pluie | 3.3 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 3° N | aucun | pluie | 1.0 | 10°C |
| Nord du Pont de Chavanay | 2 | 6 | 3° N | aucun | pluie | 1.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 8° N | aucun | couvert | 0.3 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 5 | 332° NNO | aucun | couvert | 0.4 | 9°C |
| Saint-Romain-des-Iles | 3 | 9 | 136° SE | aucun | soleil-couvert | 0.3 | 7°C |
| Nord du Pont d'Arciat | 3 | 9 | 136° SE | aucun | soleil-couvert | 0.3 | 7°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 354° N | aucun | soleil-couvert | 0.2 | 9°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 1 | 7 | 225° SO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 2 | 6 | 332° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 1 | 7 | 225° SO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 1 | 7 | 225° SO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 5 | 144° SE | aucun | soleil-couvert | 0.6 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 360° N | aucun | soleil-couvert | 0.6 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 218° SO | aucun | pluie | 1.2 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 247° OSO | aucun | pluie | 1.2 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 359° N | aucun | couvert | 0.6 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 343° NNO | aucun | pluie | 1.2 | 11°C |
| Cruas - Nuclear Spot | 2 | 9 | 352° N | aucun | soleil-couvert | 0.6 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 227° SO | aucun | pluie | 1.8 | 10°C |
| Nord du Pont de Chavanay | 2 | 6 | 227° SO | aucun | pluie | 1.8 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 162° SSE | aucun | pluie | 2.4 | 10°C |
| Saint-Cyr-sur-le-Rhône | 1 | 6 | 138° SE | aucun | pluie | 2.4 | 10°C |
| Saint-Romain-des-Iles | 6 | 12 | 174° S | aucun | pluie | 2.4 | 9°C |
| Nord du Pont d'Arciat | 6 | 12 | 174° S | aucun | pluie | 2.4 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 143° SE | aucun | pluie | 2.4 | 10°C |
