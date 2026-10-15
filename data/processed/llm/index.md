# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 15/10/2026 22:25 (Europe/Paris)
- Fichiers générés le : 2026-10-15T22:29:53+02:00
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

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 68° ENE | aucun | couvert | 0.0 | 18°C |
| Plage d'Excenevex | 4 | 6 | 29° NNE | aucun | couvert | 0.0 | 17°C |
| Plage du Vengeron | 7 | 9 | 31° NNE | aucun | couvert | 0.0 | 18°C |
| Plage d'Hermance | 7 | 9 | 57° ENE | aucun | couvert | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 6 | 346° NNO | aucun | couvert | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 27° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 10° N | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 344° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 7 | 187° S | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 2 | 6 | 159° SSE | aucun | soleil-couvert | 0.0 | 21°C |
| Cruas - Nuclear Spot | 5 | 7 | 216° SO | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 6 | 184° S | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 3 | 6 | 187° S | aucun | soleil-couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 113° ESE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 3 | 6 | 219° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 3 | 5 | 11° N | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 4 | 7 | 180° S | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 3 | 23° NNE | aucun | soleil-couvert | 0.0 | 18°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 50° NE | aucun | couvert | 0.0 | 17°C |
| Plage d'Excenevex | 4 | 6 | 166° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 5 | 7 | 22° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage d'Hermance | 5 | 7 | 18° NNE | aucun | couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 297° ONO | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 3 | 3 | 21° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 7° N | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 17 | 349° N | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 7 | 348° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 121° ESE | aucun | soleil-couvert | 0.0 | 21°C |
| Cruas - Nuclear Spot | 3 | 6 | 72° ENE | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 9 | 8° N | aucun | soleil-couvert | 0.0 | 22°C |
| Nord du Pont de Chavanay | 4 | 9 | 16° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 128° SE | aucun | soleil | 0.0 | 23°C |
| Saint-Cyr-sur-le-Rhône | 5 | 10 | 225° SO | aucun | soleil-couvert | 0.0 | 23°C |
| Saint-Romain-des-Iles | 3 | 7 | 20° NNE | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont d'Arciat | 6 | 9 | 336° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 27° NNE | aucun | soleil | 0.0 | 20°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 25 | 51° NE | aucun | orage | 20.3 | 16°C |
| Plage d'Excenevex | 17 | 24 | 29° NNE | 16h-20h | pluie | 5.4 | 16°C |
| Plage du Vengeron | 18 | 24 | 41° NE | aucun | orage | 22.6 | 16°C |
| Plage d'Hermance | 16 | 23 | 50° NE | aucun | orage | 25.2 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 14 | 303° ONO | aucun | orage | 8.9 | 15°C |
| Lac du Bourget - Cap des Séselets | 9 | 12 | 6° N | aucun | couvert | 0.5 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 18 | 32° NNE | aucun | couvert | 0.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 359° N | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 29 | 6° N | 08h-20h | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 26 | 350° N | 11h-19h | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 18 | 35 | 19° NNE | 08h-20h | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 26 | 351° N | 10h-20h | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 13 | 25 | 358° N | 11h-20h | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 20 | 342° NNO | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 9 | 21 | 9° N | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 11 | 18 | 10° N | 12h-15h | pluie | 1.4 | 12°C |
| Nord du Pont d'Arciat | 12 | 19 | 5° N | 11h-15h | pluie | 1.3 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 23 | 359° N | 11h-20h | couvert | 0.0 | 13°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 22 | 31 | 33° NNE | 08h-14h | pluie | 1.1 | 11°C |
| Plage d'Excenevex | 21 | 30 | 22° NNE | 08h-14h | pluie | 1.5 | 11°C |
| Plage du Vengeron | 16 | 25 | 31° NNE | 08h-13h | pluie | 1.1 | 11°C |
| Plage d'Hermance | 17 | 26 | 39° NE | 08h-13h | couvert | 0.9 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 2° N | aucun | pluie | 3.5 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 41° NE | aucun | pluie | 2.8 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 11° N | aucun | couvert | 0.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 4° N | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 25 | 16° NNE | 08h-20h | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 11° N | 08h-19h | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 16 | 32 | 9° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 21 | 13° NNE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 11 | 21 | 13° NNE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 18 | 343° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 18 | 343° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 10 | 19 | 23° NNE | 14h-17h | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 10 | 19 | 23° NNE | 14h-17h | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 18 | 340° NNO | aucun | soleil-couvert | 0.1 | 13°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 18 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 16 | 22 | 25° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 13 | 16 | 27° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 12 | 18 | 31° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 9 | 292° ONO | aucun | soleil | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 41° NE | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 249° OSO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 350° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 18 | 4° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 8 | 15 | 351° N | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 10 | 20 | 13° NNE | 08h-11h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 14 | 14° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 14 | 14° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 7° N | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 7° N | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 6 | 12 | 27° NNE | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 6 | 12 | 27° NNE | aucun | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 351° N | aucun | soleil-couvert | 0.0 | 14°C |

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 51° NE | aucun | couvert | 0.9 | 13°C |
| Plage d'Excenevex | 10 | 13 | 44° NE | aucun | couvert | 0.9 | 13°C |
| Plage du Vengeron | 9 | 11 | 28° NNE | aucun | couvert | 0.9 | 13°C |
| Plage d'Hermance | 9 | 14 | 49° NE | aucun | couvert | 0.9 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 4 | 279° O | aucun | pluie | 5.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 28° NNE | aucun | couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 8 | 188° S | aucun | orage | 16.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 352° N | aucun | orage | 19.8 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 214° SO | aucun | pluie | 6.4 | 17°C |
| La Roche-de-Glun - Base Nautique | 4 | 13 | 174° S | aucun | pluie | 4.2 | 18°C |
| Cruas - Nuclear Spot | 5 | 18 | 217° SO | aucun | pluie | 12.8 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 119° ESE | aucun | couvert | 0.9 | 17°C |
| Nord du Pont de Chavanay | 3 | 9 | 119° ESE | aucun | couvert | 0.9 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 98° E | aucun | pluie | 1.2 | 18°C |
| Saint-Cyr-sur-le-Rhône | 3 | 11 | 113° ESE | aucun | pluie | 1.5 | 17°C |
| Saint-Romain-des-Iles | 3 | 8 | 127° SE | aucun | pluie | 1.2 | 16°C |
| Nord du Pont d'Arciat | 3 | 8 | 127° SE | aucun | pluie | 1.2 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 142° SE | aucun | couvert | 0.0 | 18°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 264° O | aucun | pluie | 0.6 | 15°C |
| Plage d'Excenevex | 5 | 8 | 264° O | aucun | pluie | 0.6 | 15°C |
| Plage du Vengeron | 5 | 8 | 264° O | aucun | pluie | 0.6 | 15°C |
| Plage d'Hermance | 5 | 8 | 264° O | aucun | pluie | 0.6 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 290° ONO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 198° SSO | aucun | pluie | 2.7 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 19 | 330° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 18 | 358° N | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 21° NNE | aucun | pluie | 1.3 | 18°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 24° NNE | aucun | pluie | 1.3 | 17°C |
| Cruas - Nuclear Spot | 8 | 18 | 32° NNE | aucun | soleil-couvert | 0.2 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 27° NNE | aucun | pluie | 3.5 | 17°C |
| Nord du Pont de Chavanay | 5 | 12 | 27° NNE | aucun | pluie | 3.5 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 353° N | aucun | pluie | 4.9 | 16°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 13° NNE | aucun | pluie | 3.7 | 16°C |
| Saint-Romain-des-Iles | 6 | 10 | 304° NO | aucun | pluie | 0.5 | 15°C |
| Nord du Pont d'Arciat | 6 | 10 | 304° NO | aucun | pluie | 0.5 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 297° ONO | aucun | pluie | 4.2 | 15°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 54° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 7 | 11 | 54° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 7 | 11 | 54° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 7 | 11 | 54° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 315° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 42° NE | aucun | pluie | 1.2 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 328° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 7° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 31 | 360° N | 08h-20h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 352° N | 08h-20h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 13 | 32 | 13° NNE | 08h-20h | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 347° NNO | aucun | couvert | 0.1 | 14°C |
| Nord du Pont de Chavanay | 10 | 23 | 347° NNO | aucun | couvert | 0.1 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 342° NNO | aucun | couvert | 0.2 | 13°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 343° NNO | aucun | couvert | 0.1 | 14°C |
| Saint-Romain-des-Iles | 8 | 16 | 359° N | aucun | soleil-couvert | 0.1 | 13°C |
| Nord du Pont d'Arciat | 8 | 16 | 359° N | aucun | soleil-couvert | 0.1 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 347° NNO | aucun | couvert | 0.0 | 13°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 20 | 23° NNE | 08h-11h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 11 | 18 | 14° NNE | 08h-11h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 12 | 20 | 23° NNE | 08h-11h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 12 | 20 | 23° NNE | 08h-11h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 335° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 54° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 11 | 6° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 9 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 7° N | 11h-16h | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 9 | 20 | 4° N | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 12 | 27 | 19° NNE | 08h-17h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 4° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 16 | 4° N | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 14 | 1° N | aucun | soleil | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 358° N | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 5 | 12 | 320° NO | aucun | soleil | 0.0 | 13°C |
| Nord du Pont d'Arciat | 5 | 12 | 320° NO | aucun | soleil | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 13 | 321° NO | aucun | soleil | 0.0 | 13°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 171° S | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 3 | 10 | 28° NNE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 6 | 9 | 171° S | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 6 | 9 | 171° S | aucun | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 10 | 241° OSO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 27° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 4° N | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 6° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 10° N | aucun | couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 15 | 359° N | aucun | couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 8 | 19 | 355° N | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 52° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 3 | 10 | 52° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 74° ENE | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 44° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 4 | 8 | 312° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 4 | 8 | 312° NO | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 327° NNO | aucun | couvert | 0.0 | 13°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 38° NE | 10h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 13 | 18 | 24° NNE | 10h-20h | couvert | 0.0 | 13°C |
| Plage du Vengeron | 12 | 18 | 38° NE | 10h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 12 | 18 | 38° NE | 10h-20h | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 357° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 6 | 16 | 30° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 13 | 12° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 345° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 30 | 2° N | 08h-17h | couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 27 | 356° N | 08h-16h | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 14 | 31 | 16° NNE | 08h-18h | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 354° N | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 9 | 21 | 354° N | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 355° N | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 350° N | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Romain-des-Iles | 9 | 16 | 1° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 9 | 16 | 1° N | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 359° N | aucun | soleil-couvert | 0.0 | 12°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 208° SSO | aucun | couvert | 0.0 | 15°C |
| Plage d'Excenevex | 5 | 10 | 238° OSO | aucun | couvert | 0.0 | 15°C |
| Plage du Vengeron | 7 | 10 | 208° SSO | aucun | couvert | 0.0 | 15°C |
| Plage d'Hermance | 7 | 10 | 208° SSO | aucun | couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 10 | 227° SO | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 4 | 9 | 19° NNE | aucun | couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 19 | 189° S | aucun | couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 195° SSO | aucun | couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 200° SSO | aucun | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 197° SSO | 11h-16h | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 7 | 17 | 200° SSO | aucun | couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 26 | 172° S | 12h-16h | couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 12 | 26 | 172° S | 12h-16h | couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 26 | 171° S | 11h-18h | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 170° S | 11h-17h | couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 4 | 10 | 174° S | aucun | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 4 | 10 | 174° S | aucun | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 24 | 192° SSO | aucun | couvert | 0.0 | 17°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 9 | 226° SO | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 4 | 7 | 198° SSO | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 5 | 9 | 226° SO | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 5 | 9 | 226° SO | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 266° O | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 22° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 156° SSE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 191° S | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 190° S | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 183° S | aucun | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 4 | 10 | 195° SSO | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 190° S | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 4 | 11 | 190° S | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 170° S | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 185° S | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 3 | 8 | 150° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 8 | 150° SSE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 142° SE | aucun | soleil | 0.0 | 19°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 3 | 7 | 41° NE | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 2 | 5 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 2 | 5 | 11° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 138° SE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 26° NNE | aucun | couvert | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 187° S | aucun | pluie | 1.2 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 215° SO | aucun | couvert | 0.6 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 188° S | aucun | pluie | 1.3 | 18°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 190° S | aucun | couvert | 0.6 | 18°C |
| Cruas - Nuclear Spot | 6 | 14 | 203° SSO | aucun | pluie | 8.6 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 179° S | aucun | couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 10 | 22 | 179° S | aucun | couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 178° S | aucun | couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 179° S | aucun | couvert | 0.0 | 19°C |
| Saint-Romain-des-Iles | 8 | 19 | 180° S | aucun | couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 8 | 19 | 180° S | aucun | couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 20 | 190° S | aucun | couvert | 0.0 | 19°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 286° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 2 | 5 | 339° NNO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 2 | 5 | 286° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 2 | 5 | 286° ONO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 258° OSO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 223° SO | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 6 | 148° SSE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 175° S | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 189° S | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 191° S | aucun | soleil-couvert | 0.0 | 17°C |
| Cruas - Nuclear Spot | 4 | 11 | 198° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 173° S | aucun | soleil-couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 3 | 10 | 173° S | aucun | soleil-couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 197° SSO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 169° S | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 9 | 152° SSE | aucun | soleil-couvert | 0.6 | 17°C |
| Nord du Pont d'Arciat | 4 | 9 | 152° SSE | aucun | soleil-couvert | 0.6 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 177° S | aucun | soleil-couvert | 0.0 | 17°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 315° NO | aucun | pluie | 2.7 | 15°C |
| Plage d'Excenevex | 3 | 6 | 326° NO | aucun | soleil-couvert | 0.7 | 14°C |
| Plage du Vengeron | 3 | 6 | 315° NO | aucun | pluie | 2.7 | 15°C |
| Plage d'Hermance | 3 | 6 | 315° NO | aucun | pluie | 2.7 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 252° OSO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 213° SSO | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 182° S | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 175° S | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 6 | 341° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 2 | 5 | 334° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Cruas - Nuclear Spot | 3 | 10 | 61° ENE | aucun | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 70° ENE | aucun | soleil-couvert | 0.1 | 16°C |
| Nord du Pont de Chavanay | 3 | 10 | 70° ENE | aucun | soleil-couvert | 0.1 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 74° ENE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 62° ENE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 4 | 8 | 149° SSE | aucun | couvert | 0.4 | 16°C |
| Nord du Pont d'Arciat | 4 | 8 | 149° SSE | aucun | couvert | 0.4 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 140° SE | aucun | soleil-couvert | 0.3 | 16°C |
