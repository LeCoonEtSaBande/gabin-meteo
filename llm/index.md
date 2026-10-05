# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 05/10/2026 12:21 (Europe/Paris)
- Fichiers générés le : 2026-10-05T12:24:43+02:00
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

### lun. 05/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 204° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 3 | 5 | 166° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 4 | 6 | 352° N | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Hermance | 6 | 7 | 342° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 303° ONO | aucun | soleil | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 4 | 6 | 183° S | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 13° NNE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 20 | 1° N | 14h-17h | soleil | 0.0 | 23°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 22° NNE | aucun | soleil | 0.0 | 25°C |
| La Roche-de-Glun - Base Nautique | 5 | 11 | 334° NNO | aucun | soleil | 0.0 | 26°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 14 | 27° NNE | aucun | soleil | 0.0 | 25°C |
| Nord du Pont de Chavanay | 7 | 13 | 32° NNE | aucun | soleil | 0.0 | 25°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 346° NNO | aucun | soleil | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 53° NE | aucun | soleil | 0.0 | 25°C |
| Saint-Romain-des-Iles | 7 | 12 | 38° NE | aucun | soleil | 0.0 | 25°C |
| Nord du Pont d'Arciat | 8 | 13 | 37° NE | aucun | soleil | 0.0 | 24°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 30° NNE | aucun | soleil | 0.0 | 22°C |

### mar. 06/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 61° ENE | aucun | soleil | 0.0 | 20°C |
| Plage d'Excenevex | 5 | 8 | 36° NE | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 4 | 6 | 18° NNE | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 4 | 6 | 39° NE | aucun | soleil | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 10 | 5° N | aucun | soleil | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 13° NNE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 15 | 183° S | aucun | orage | 5.3 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 359° N | aucun | soleil-couvert | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 20 | 205° SSO | aucun | soleil | 0.0 | 25°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 170° S | aucun | soleil | 0.0 | 25°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 19 | 168° SSE | 16h-19h | soleil | 0.0 | 26°C |
| Nord du Pont de Chavanay | 11 | 19 | 166° SSE | aucun | soleil | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 170° S | aucun | soleil | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 190° S | aucun | soleil | 0.0 | 26°C |
| Saint-Romain-des-Iles | 7 | 13 | 175° S | aucun | soleil | 0.0 | 25°C |
| Nord du Pont d'Arciat | 7 | 12 | 185° S | aucun | soleil | 0.0 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 14 | 155° SSE | aucun | soleil | 0.0 | 22°C |

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 243° OSO | aucun | couvert | 0.5 | 18°C |
| Plage d'Excenevex | 5 | 6 | 207° SSO | aucun | couvert | 0.6 | 18°C |
| Plage du Vengeron | 4 | 6 | 173° S | aucun | orage | 4.1 | 18°C |
| Plage d'Hermance | 5 | 8 | 213° SSO | aucun | pluie | 1.1 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 104° ESE | aucun | pluie | 3.6 | 19°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 157° SSE | aucun | pluie | 1.7 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 27 | 159° SSE | 10h-13h | orage | 22.2 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 17 | 189° S | aucun | orage | 38.6 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 219° SO | aucun | pluie | 15.6 | 18°C |
| La Roche-de-Glun - Base Nautique | 8 | 21 | 203° SSO | aucun | pluie | 15.5 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 18 | 195° SSO | aucun | pluie | 14.0 | 18°C |
| Nord du Pont de Chavanay | 9 | 18 | 195° SSO | aucun | pluie | 14.1 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 191° S | aucun | orage | 7.6 | 17°C |
| Saint-Cyr-sur-le-Rhône | 10 | 19 | 191° S | aucun | orage | 7.6 | 17°C |
| Saint-Romain-des-Iles | 16 | 26 | 176° S | 12h-17h | pluie | 1.9 | 18°C |
| Nord du Pont d'Arciat | 16 | 26 | 176° S | 12h-17h | pluie | 1.9 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 22 | 184° S | aucun | orage | 15.4 | 17°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 19 | 247° OSO | aucun | orage | 15.1 | 15°C |
| Plage d'Excenevex | 13 | 18 | 221° SO | aucun | orage | 18.7 | 14°C |
| Plage du Vengeron | 10 | 18 | 235° SO | aucun | orage | 12.5 | 14°C |
| Plage d'Hermance | 10 | 19 | 28° NNE | aucun | orage | 13.6 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 16 | 307° NO | aucun | orage | 35.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 7 | 15 | 291° ONO | aucun | orage | 13.6 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 28 | 2° N | 11h-20h | orage | 32.9 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 24 | 11° N | 16h-20h | pluie | 3.4 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 28 | 6° N | 13h-20h | pluie | 3.2 | 15°C |
| La Roche-de-Glun - Base Nautique | 14 | 24 | 359° N | 15h-20h | pluie | 1.8 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 30 | 324° NO | 11h-20h | pluie | 3.6 | 14°C |
| Nord du Pont de Chavanay | 16 | 30 | 324° NO | 11h-20h | pluie | 3.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 21 | 319° NO | aucun | pluie | 12.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 11 | 21 | 319° NO | aucun | pluie | 12.0 | 13°C |
| Saint-Romain-des-Iles | 16 | 26 | 338° NNO | 10h-18h | orage | 8.9 | 14°C |
| Nord du Pont d'Arciat | 16 | 26 | 338° NNO | 10h-18h | orage | 8.9 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 22 | 333° NNO | 13h-20h | pluie | 3.0 | 14°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 23 | 51° NE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 18 | 24 | 29° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 18 | 24 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 15 | 23 | 43° NE | 08h-19h | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 14 | 22 | 339° NNO | 12h-18h | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 6 | 19 | 55° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 26 | 8° N | 08h-19h | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 17 | 30 | 359° N | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 30 | 11° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 15 | 34 | 3° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 360° N | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 12 | 28 | 360° N | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 24 | 358° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 358° N | 14h-17h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 10 | 18 | 360° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 10 | 18 | 360° N | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 20 | 350° N | aucun | soleil-couvert | 0.0 | 14°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 235° SO | aucun | soleil-couvert | 0.3 | 16°C |
| Plage d'Excenevex | 10 | 16 | 235° SO | aucun | couvert | 0.3 | 16°C |
| Plage du Vengeron | 10 | 16 | 235° SO | aucun | soleil-couvert | 0.3 | 16°C |
| Plage d'Hermance | 10 | 16 | 235° SO | aucun | soleil-couvert | 0.3 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 153° SSE | aucun | soleil-couvert | 0.3 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 217° SO | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 21 | 328° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 21 | 352° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 22 | 7° N | aucun | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 360° N | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 25° NNE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont de Chavanay | 6 | 15 | 25° NNE | aucun | soleil | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 49° NE | aucun | soleil | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 24° NNE | aucun | soleil | 0.0 | 16°C |
| Saint-Romain-des-Iles | 6 | 12 | 322° NO | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 6 | 12 | 322° NO | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 342° NNO | aucun | soleil | 0.0 | 16°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 45° NE | aucun | couvert | 0.0 | 16°C |
| Plage d'Excenevex | 6 | 9 | 45° NE | aucun | couvert | 0.0 | 16°C |
| Plage du Vengeron | 6 | 9 | 45° NE | aucun | couvert | 0.0 | 16°C |
| Plage d'Hermance | 6 | 9 | 45° NE | aucun | couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 317° NO | aucun | couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 159° SSE | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 17 | 320° NO | aucun | couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 16 | 351° N | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 24 | 3° N | 10h-16h | couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 358° N | aucun | couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 11° N | aucun | couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 7 | 17 | 11° N | aucun | couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 13 | 27° NNE | aucun | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 11° N | aucun | couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 6 | 11 | 329° NNO | aucun | couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 11 | 329° NNO | aucun | couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 340° NNO | aucun | couvert | 0.0 | 17°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 7° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Excenevex | 5 | 8 | 7° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage du Vengeron | 5 | 8 | 7° N | aucun | soleil-couvert | 0.0 | 16°C |
| Plage d'Hermance | 5 | 8 | 7° N | aucun | soleil-couvert | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 301° ONO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 18° NNE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 325° NO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 11 | 23° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 13 | 8° N | aucun | soleil | 0.1 | 19°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 3° N | aucun | soleil | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 53° NE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 3 | 10 | 53° NE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 9 | 56° NE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 41° NE | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 3 | 8 | 131° SE | aucun | soleil | 0.0 | 17°C |
| Nord du Pont d'Arciat | 3 | 8 | 131° SE | aucun | soleil | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 345° NNO | aucun | soleil-couvert | 0.0 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 6 | 131° SE | aucun | soleil | 0.0 | 19°C |
| Plage d'Excenevex | 2 | 4 | 4° N | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 3 | 6 | 131° SE | aucun | soleil | 0.0 | 19°C |
| Plage d'Hermance | 3 | 6 | 131° SE | aucun | soleil | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 277° O | aucun | soleil | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 15° NNE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 13° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 27° NNE | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 348° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 333° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 33° NNE | aucun | soleil | 0.0 | 21°C |
| Nord du Pont de Chavanay | 2 | 9 | 33° NNE | aucun | soleil | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 6 | 205° SSO | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 19° NNE | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 3 | 8 | 102° ESE | aucun | soleil | 0.0 | 21°C |
| Nord du Pont d'Arciat | 3 | 8 | 102° ESE | aucun | soleil | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 4 | 153° SSE | aucun | soleil | 0.0 | 20°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 8 | 17° NNE | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 3 | 7 | 15° NNE | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 4 | 8 | 17° NNE | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 4 | 8 | 17° NNE | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 297° ONO | aucun | soleil | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 27° NNE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 190° S | aucun | soleil | 0.0 | 22°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 230° SO | aucun | soleil | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 9 | 163° SSE | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 3 | 10 | 192° SSO | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 216° SO | aucun | soleil | 0.0 | 22°C |
| Nord du Pont de Chavanay | 2 | 8 | 216° SO | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 171° S | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 204° SSO | aucun | soleil | 0.0 | 22°C |
| Saint-Romain-des-Iles | 3 | 8 | 126° SE | aucun | soleil | 0.0 | 21°C |
| Nord du Pont d'Arciat | 3 | 8 | 126° SE | aucun | soleil | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 77° ENE | aucun | soleil | 0.0 | 21°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 143° SE | aucun | pluie | 1.2 | 20°C |
| Plage d'Excenevex | 2 | 6 | 350° N | aucun | soleil | 0.0 | 19°C |
| Plage du Vengeron | 4 | 7 | 143° SE | aucun | pluie | 1.2 | 20°C |
| Plage d'Hermance | 4 | 7 | 143° SE | aucun | pluie | 1.2 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 250° OSO | aucun | soleil | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 197° SSO | aucun | soleil | 0.0 | 22°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 4° N | aucun | soleil | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 7° N | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 19 | 360° N | aucun | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 347° NNO | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 17° NNE | aucun | soleil | 0.6 | 23°C |
| Nord du Pont de Chavanay | 5 | 14 | 17° NNE | aucun | soleil | 0.6 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 18° NNE | aucun | soleil | 0.6 | 22°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 14° NNE | aucun | soleil | 0.6 | 22°C |
| Saint-Romain-des-Iles | 6 | 15 | 333° NNO | aucun | soleil-couvert | 0.6 | 22°C |
| Nord du Pont d'Arciat | 6 | 15 | 333° NNO | aucun | soleil-couvert | 0.6 | 22°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 337° NNO | aucun | soleil | 0.6 | 22°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 28 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 20 | 28 | 22° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 20 | 28 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 20 | 28 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 21 | 18° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 8 | 22 | 33° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 16 | 6° N | aucun | soleil-couvert | 0.1 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 16 | 345° NNO | aucun | couvert | 0.7 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 36 | 358° N | 08h-19h | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 13 | 31 | 349° N | 08h-16h | soleil-couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 29 | 342° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 11 | 29 | 342° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 25 | 334° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 335° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 11 | 22 | 345° NNO | 08h-12h | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 11 | 22 | 345° NNO | 08h-12h | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 27 | 340° NNO | aucun | soleil-couvert | 0.0 | 17°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 16 | 36° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 9 | 16 | 31° NNE | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 9 | 16 | 36° NE | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 9 | 16 | 36° NE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 327° NNO | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 17 | 34° NE | aucun | couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 9 | 4° N | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 330° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 14° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 353° N | aucun | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 9 | 340° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 3 | 9 | 340° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 15° NNE | aucun | couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 340° NNO | aucun | couvert | 0.0 | 17°C |
| Saint-Romain-des-Iles | 2 | 7 | 105° ESE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 2 | 7 | 105° ESE | aucun | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 10° N | aucun | couvert | 0.0 | 17°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 30° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 6 | 12 | 42° NE | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 6 | 10 | 30° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 6 | 10 | 30° NNE | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 311° NO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 31° NNE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 14° NNE | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 18° NNE | aucun | soleil | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 8 | 173° S | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 2 | 8 | 288° ONO | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 317° NO | aucun | soleil | 0.0 | 20°C |
| Nord du Pont de Chavanay | 2 | 8 | 317° NO | aucun | soleil | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 3 | 274° O | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 315° NO | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 3 | 9 | 124° SE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 3 | 9 | 124° SE | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 141° SE | aucun | soleil-couvert | 0.0 | 18°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 41° NE | aucun | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 6 | 10 | 20° NNE | aucun | soleil | 0.0 | 12°C |
| Plage du Vengeron | 6 | 10 | 41° NE | aucun | soleil | 0.0 | 12°C |
| Plage d'Hermance | 6 | 10 | 41° NE | aucun | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 282° ONO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 38° NE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 21° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 23° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 7 | 335° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 6 | 11 | 336° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 328° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 3 | 10 | 328° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 317° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 319° NO | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 2 | 8 | 339° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 2 | 8 | 339° NNO | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 1° N | aucun | soleil-couvert | 0.0 | 16°C |
