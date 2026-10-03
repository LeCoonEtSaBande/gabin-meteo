# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 03/10/2026 12:31 (Europe/Paris)
- Fichiers générés le : 2026-10-03T12:38:27+02:00
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

### sam. 03/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 63° ENE | aucun | couvert | 0.0 | 20°C |
| Plage d'Excenevex | 5 | 8 | 53° NE | aucun | couvert | 0.0 | 20°C |
| Plage du Vengeron | 3 | 4 | 40° NE | aucun | couvert | 0.0 | 20°C |
| Plage d'Hermance | 3 | 4 | 349° N | aucun | couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 345° NNO | aucun | couvert | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 63° ENE | aucun | soleil-couvert | 0.6 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 350° N | aucun | couvert | 0.9 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 12 | 3° N | aucun | orage | 5.4 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 203° SSO | aucun | soleil-couvert | 0.2 | 23°C |
| La Roche-de-Glun - Base Nautique | 4 | 8 | 157° SSE | aucun | soleil-couvert | 0.0 | 24°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 147° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont de Chavanay | 6 | 12 | 154° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 156° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 180° S | aucun | soleil-couvert | 0.0 | 23°C |
| Saint-Romain-des-Iles | 4 | 9 | 106° ESE | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont d'Arciat | 4 | 9 | 92° E | aucun | soleil-couvert | 0.0 | 22°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 172° S | aucun | soleil-couvert | 0.0 | 21°C |

### dim. 04/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 15 | 295° ONO | aucun | pluie | 1.0 | 21°C |
| Plage d'Excenevex | 4 | 6 | 247° OSO | aucun | couvert | 0.0 | 21°C |
| Plage du Vengeron | 8 | 11 | 27° NNE | aucun | couvert | 0.0 | 22°C |
| Plage d'Hermance | 6 | 8 | 7° N | aucun | couvert | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 6 | 355° N | aucun | soleil-couvert | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 3 | 163° SSE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 5° N | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 7 | 69° ENE | aucun | soleil-couvert | 0.0 | 25°C |
| La Roche-de-Glun - Base Nautique | 2 | 7 | 41° NE | aucun | soleil-couvert | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 22° NNE | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont de Chavanay | 7 | 12 | 17° NNE | aucun | soleil | 0.0 | 25°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 47° NE | aucun | soleil-couvert | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 22° NNE | aucun | soleil-couvert | 0.0 | 25°C |
| Saint-Romain-des-Iles | 4 | 8 | 25° NNE | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont d'Arciat | 5 | 8 | 29° NNE | aucun | soleil-couvert | 0.0 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 6 | 11° N | aucun | soleil-couvert | 0.0 | 22°C |

### lun. 05/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 45° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Excenevex | 3 | 4 | 145° SE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage du Vengeron | 5 | 6 | 13° NNE | aucun | soleil-couvert | 0.0 | 22°C |
| Plage d'Hermance | 5 | 8 | 349° N | aucun | soleil-couvert | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 273° O | aucun | soleil-couvert | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 35° NE | aucun | soleil-couvert | 0.0 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 12° NNE | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 17 | 351° N | aucun | soleil | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 13 | 12° NNE | aucun | soleil | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 7 | 10 | 333° NNO | aucun | soleil | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 25° NNE | aucun | soleil | 0.0 | 26°C |
| Nord du Pont de Chavanay | 5 | 12 | 25° NNE | aucun | soleil | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 11° N | aucun | soleil | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 11° N | aucun | soleil | 0.0 | 25°C |
| Saint-Romain-des-Iles | 6 | 12 | 24° NNE | aucun | soleil-couvert | 0.0 | 26°C |
| Nord du Pont d'Arciat | 6 | 12 | 24° NNE | aucun | soleil-couvert | 0.0 | 26°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 4° N | aucun | soleil-couvert | 0.0 | 25°C |

### mar. 06/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 58° ENE | aucun | soleil | 0.0 | 20°C |
| Plage d'Excenevex | 3 | 4 | 52° NE | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 6 | 7 | 22° NNE | aucun | soleil | 0.0 | 22°C |
| Plage d'Hermance | 5 | 8 | 28° NNE | aucun | soleil | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 315° NO | aucun | soleil | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 219° SO | aucun | soleil-couvert | 0.0 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 11 | 347° NNO | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 346° NNO | aucun | soleil-couvert | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 22 | 201° SSO | 15h-18h | soleil-couvert | 0.0 | 28°C |
| La Roche-de-Glun - Base Nautique | 12 | 22 | 190° S | 15h-18h | soleil-couvert | 0.0 | 28°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 20 | 204° SSO | aucun | soleil-couvert | 0.0 | 28°C |
| Nord du Pont de Chavanay | 10 | 20 | 204° SSO | aucun | soleil-couvert | 0.0 | 28°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 19 | 211° SSO | aucun | soleil-couvert | 0.0 | 27°C |
| Saint-Cyr-sur-le-Rhône | 9 | 19 | 211° SSO | aucun | soleil-couvert | 0.0 | 27°C |
| Saint-Romain-des-Iles | 7 | 12 | 169° S | aucun | soleil-couvert | 0.0 | 26°C |
| Nord du Pont d'Arciat | 7 | 12 | 169° S | aucun | soleil-couvert | 0.0 | 26°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 16 | 208° SSO | aucun | soleil-couvert | 0.0 | 26°C |

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 220° SO | aucun | pluie | 1.8 | 20°C |
| Plage d'Excenevex | 7 | 9 | 238° OSO | aucun | pluie | 2.1 | 20°C |
| Plage du Vengeron | 6 | 8 | 239° OSO | aucun | pluie | 2.6 | 20°C |
| Plage d'Hermance | 6 | 10 | 220° SO | aucun | pluie | 2.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 324° NO | aucun | pluie | 3.9 | 19°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 234° SO | aucun | pluie | 5.4 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 192° SSO | aucun | pluie | 4.3 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 15 | 167° SSE | aucun | pluie | 3.8 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 22 | 215° SO | 10h-14h | couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 12 | 23 | 207° SSO | 10h-14h | couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 26 | 194° SSO | 10h-14h | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 14 | 26 | 194° SSO | 10h-14h | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 27 | 197° SSO | 11h-14h | couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 13 | 27 | 197° SSO | 11h-14h | couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 16 | 27 | 182° S | 12h-15h | pluie | 1.8 | 16°C |
| Nord du Pont d'Arciat | 16 | 27 | 182° S | 12h-15h | pluie | 1.8 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 19 | 204° SSO | aucun | pluie | 10.5 | 16°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 20 | 220° SO | aucun | pluie | 18.8 | 14°C |
| Plage d'Excenevex | 9 | 15 | 220° SO | aucun | pluie | 19.6 | 14°C |
| Plage du Vengeron | 13 | 18 | 212° SSO | aucun | pluie | 19.4 | 14°C |
| Plage d'Hermance | 10 | 14 | 208° SSO | aucun | pluie | 19.3 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 12 | 322° NO | aucun | pluie | 24.4 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 226° SO | aucun | pluie | 20.9 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 330° NNO | aucun | pluie | 12.3 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 22 | 351° N | aucun | pluie | 5.7 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 25 | 21° NNE | aucun | pluie | 9.9 | 18°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 8° N | 10h-13h | soleil-couvert | 0.8 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 333° NNO | aucun | orage | 14.4 | 16°C |
| Nord du Pont de Chavanay | 11 | 26 | 333° NNO | aucun | orage | 14.4 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 316° NO | 14h-18h | orage | 5.5 | 15°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 325° NO | 15h-19h | pluie | 1.1 | 15°C |
| Saint-Romain-des-Iles | 14 | 26 | 307° NO | 14h-19h | pluie | 4.3 | 13°C |
| Nord du Pont d'Arciat | 14 | 26 | 307° NO | 14h-19h | pluie | 4.3 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 24 | 317° NO | 14h-18h | pluie | 2.9 | 16°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 24 | 36° NE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 15 | 24 | 36° NE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 15 | 24 | 36° NE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 15 | 24 | 36° NE | 08h-18h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 20 | 348° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 5 | 15 | 184° S | aucun | pluie | 12.6 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 37 | 339° NNO | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 16 | 37 | 354° N | 08h-19h | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 30 | 12° NNE | aucun | pluie | 5.4 | 10°C |
| La Roche-de-Glun - Base Nautique | 7 | 19 | 8° N | aucun | pluie | 5.4 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 18 | 337° NNO | aucun | pluie | 8.4 | 10°C |
| Nord du Pont de Chavanay | 6 | 18 | 337° NNO | aucun | pluie | 8.4 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 17 | 325° NO | aucun | pluie | 7.8 | 9°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 329° NNO | aucun | pluie | 8.4 | 9°C |
| Saint-Romain-des-Iles | 10 | 18 | 313° NO | aucun | pluie | 7.8 | 10°C |
| Nord du Pont d'Arciat | 10 | 18 | 313° NO | aucun | pluie | 7.8 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 17 | 328° NNO | aucun | pluie | 9.1 | 10°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 230° SO | aucun | pluie | 1.2 | 11°C |
| Plage d'Excenevex | 5 | 8 | 230° SO | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 5 | 8 | 230° SO | aucun | pluie | 1.2 | 11°C |
| Plage d'Hermance | 5 | 8 | 230° SO | aucun | pluie | 1.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 11 | 257° OSO | aucun | soleil-couvert | 0.6 | 8°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 239° OSO | aucun | pluie | 1.2 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 329° NNO | aucun | pluie | 2.4 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 23 | 359° N | aucun | pluie | 1.2 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 3° N | aucun | pluie | 11.2 | 11°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 351° N | aucun | pluie | 12.3 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 22 | 322° NO | aucun | pluie | 20.7 | 10°C |
| Nord du Pont de Chavanay | 8 | 22 | 322° NO | aucun | pluie | 20.7 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 307° NO | aucun | pluie | 14.5 | 9°C |
| Saint-Cyr-sur-le-Rhône | 9 | 23 | 317° NO | aucun | pluie | 18.2 | 9°C |
| Saint-Romain-des-Iles | 13 | 23 | 300° ONO | 13h-20h | pluie | 7.2 | 9°C |
| Nord du Pont d'Arciat | 13 | 23 | 300° ONO | 13h-20h | pluie | 7.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 326° NO | aucun | pluie | 20.5 | 10°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 24° NNE | aucun | pluie | 3.9 | 12°C |
| Plage d'Excenevex | 7 | 12 | 22° NNE | aucun | pluie | 2.4 | 12°C |
| Plage du Vengeron | 6 | 10 | 24° NNE | aucun | pluie | 3.9 | 12°C |
| Plage d'Hermance | 6 | 10 | 24° NNE | aucun | pluie | 3.9 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 308° NO | aucun | pluie | 2.2 | 10°C |
| Lac du Bourget - Cap des Séselets | 1 | 6 | 42° NE | aucun | pluie | 3.8 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 360° N | aucun | pluie | 1.3 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 19 | 356° N | aucun | pluie | 1.1 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 28 | 5° N | 15h-20h | pluie | 1.8 | 12°C |
| La Roche-de-Glun - Base Nautique | 13 | 26 | 360° N | 16h-20h | pluie | 2.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 346° NNO | aucun | pluie | 19.7 | 12°C |
| Nord du Pont de Chavanay | 10 | 24 | 346° NNO | aucun | pluie | 19.7 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 332° NNO | 11h-20h | pluie | 12.4 | 11°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 343° NNO | aucun | pluie | 20.4 | 11°C |
| Saint-Romain-des-Iles | 14 | 24 | 328° NNO | 08h-20h | pluie | 21.3 | 11°C |
| Nord du Pont d'Arciat | 14 | 24 | 328° NNO | 08h-20h | pluie | 21.3 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 24 | 349° N | aucun | orage | 24.1 | 12°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 26° NNE | 08h-20h | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 12 | 18 | 30° NNE | 08h-19h | soleil | 0.0 | 16°C |
| Plage du Vengeron | 14 | 21 | 26° NNE | 08h-20h | soleil | 0.0 | 15°C |
| Plage d'Hermance | 14 | 21 | 26° NNE | 08h-20h | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 337° NNO | aucun | soleil | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 14 | 23° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 359° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 356° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 28 | 3° N | 08h-20h | couvert | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 356° N | 08h-15h | couvert | 0.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 22 | 1° N | aucun | couvert | 0.6 | 16°C |
| Nord du Pont de Chavanay | 10 | 22 | 1° N | aucun | couvert | 0.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 354° N | aucun | couvert | 0.6 | 16°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 358° N | aucun | couvert | 0.6 | 16°C |
| Saint-Romain-des-Iles | 10 | 20 | 13° NNE | aucun | pluie | 1.2 | 15°C |
| Nord du Pont d'Arciat | 10 | 20 | 13° NNE | aucun | pluie | 1.2 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 6° N | aucun | soleil-couvert | 0.0 | 16°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 12 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 4 | 9 | 35° NE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 4 | 12 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 4 | 12 | 26° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 267° O | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 11 | 210° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 19° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 31° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 7° N | aucun | soleil-couvert | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 360° N | aucun | couvert | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 358° N | aucun | couvert | 0.0 | 16°C |
| Nord du Pont de Chavanay | 6 | 15 | 358° N | aucun | couvert | 0.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 348° NNO | aucun | couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 345° NNO | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 5 | 10 | 351° N | aucun | couvert | 0.6 | 15°C |
| Nord du Pont d'Arciat | 5 | 10 | 351° N | aucun | couvert | 0.6 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 330° NNO | aucun | couvert | 0.0 | 14°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 15 | 21° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Excenevex | 9 | 14 | 12° NNE | aucun | soleil | 0.0 | 15°C |
| Plage du Vengeron | 10 | 15 | 21° NNE | aucun | soleil | 0.0 | 15°C |
| Plage d'Hermance | 10 | 15 | 21° NNE | aucun | soleil | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 12 | 335° NNO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 20° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 20° NNE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 9° N | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 20 | 5° N | aucun | soleil-couvert | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 357° N | aucun | soleil-couvert | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 13 | 23° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 4 | 13 | 23° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 21° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 12° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 3 | 6 | 341° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont d'Arciat | 3 | 6 | 341° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 332° NNO | aucun | soleil-couvert | 0.0 | 15°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 27° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Excenevex | 6 | 10 | 30° NNE | aucun | soleil | 0.0 | 16°C |
| Plage du Vengeron | 6 | 9 | 27° NNE | aucun | soleil | 0.0 | 16°C |
| Plage d'Hermance | 6 | 9 | 27° NNE | aucun | soleil | 0.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 324° NO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 18° NNE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 182° S | aucun | soleil | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 174° S | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 12 | 9° N | aucun | soleil | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 350° N | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 9 | 348° NNO | aucun | soleil | 0.0 | 17°C |
| Nord du Pont de Chavanay | 2 | 9 | 348° NNO | aucun | soleil | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 17° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 2 | 9 | 26° NNE | aucun | soleil | 0.0 | 17°C |
| Saint-Romain-des-Iles | 2 | 9 | 133° SE | aucun | soleil | 0.0 | 16°C |
| Nord du Pont d'Arciat | 2 | 9 | 133° SE | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 352° N | aucun | soleil | 0.0 | 17°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 17° NNE | aucun | soleil | 0.0 | 19°C |
| Plage d'Excenevex | 6 | 9 | 9° N | aucun | soleil | 0.0 | 19°C |
| Plage du Vengeron | 7 | 10 | 17° NNE | aucun | soleil | 0.0 | 19°C |
| Plage d'Hermance | 7 | 10 | 17° NNE | aucun | soleil | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 322° NO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 24° NNE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 8 | 51° NE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 9 | 28° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 9° N | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 347° NNO | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 32° NNE | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 4 | 11 | 32° NNE | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 27° NNE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 18° NNE | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 2 | 7 | 39° NE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 2 | 7 | 39° NE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 338° NNO | aucun | soleil-couvert | 0.0 | 18°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 9 | 33° NNE | aucun | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 4 | 8 | 28° NNE | aucun | soleil | 0.0 | 18°C |
| Plage du Vengeron | 4 | 9 | 33° NNE | aucun | soleil | 0.0 | 18°C |
| Plage d'Hermance | 4 | 9 | 33° NNE | aucun | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 283° ONO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 16° NNE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 31° NNE | aucun | pluie | 1.2 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 168° SSE | aucun | pluie | 2.4 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 9 | 201° SSO | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 161° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 148° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 3 | 10 | 148° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 188° S | aucun | soleil-couvert | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 209° SSO | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 3 | 10 | 143° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont d'Arciat | 3 | 10 | 143° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 163° SSE | aucun | soleil-couvert | 0.0 | 18°C |
