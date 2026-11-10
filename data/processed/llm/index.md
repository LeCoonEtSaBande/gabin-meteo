# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 10/11/2026 23:25 (Europe/Paris)
- Fichiers générés le : 2026-11-10T23:29:32+01:00
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
| Plage de la pointe - Messery | 5 | 7 | 19° NNE | aucun | couvert | 0.4 | 12°C |
| Plage d'Excenevex | 4 | 5 | 348° NNO | aucun | couvert | 0.4 | 12°C |
| Plage du Vengeron | 5 | 7 | 360° N | aucun | couvert | 0.2 | 13°C |
| Plage d'Hermance | 6 | 7 | 12° NNE | aucun | couvert | 0.2 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 7 | 4° N | aucun | couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 180° S | aucun | couvert | 0.3 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 213° SSO | aucun | couvert | 0.1 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 203° SSO | aucun | couvert | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 194° SSO | 13h-16h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 8 | 15 | 156° SSE | aucun | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 6 | 13 | 200° SSO | aucun | soleil-couvert | 0.1 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 10 | 149° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont de Chavanay | 7 | 7 | 156° SSE | aucun | soleil-couvert | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 176° S | aucun | soleil | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 8 | 17 | 206° SSO | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 5 | 9 | 208° SSO | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 6 | 10 | 208° SSO | aucun | soleil-couvert | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 182° S | aucun | soleil-couvert | 0.0 | 18°C |

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 13 | 217° SO | aucun | pluie | 1.0 | 15°C |
| Plage d'Excenevex | 8 | 12 | 219° SO | aucun | pluie | 1.0 | 16°C |
| Plage du Vengeron | 11 | 15 | 209° SSO | aucun | pluie | 1.5 | 16°C |
| Plage d'Hermance | 8 | 11 | 210° SSO | aucun | pluie | 1.1 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 6 | 195° SSO | aucun | couvert | 0.7 | 15°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 203° SSO | aucun | pluie | 2.5 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 16 | 208° SSO | aucun | pluie | 5.6 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 212° SSO | aucun | pluie | 3.5 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 14 | 200° SSO | aucun | soleil-couvert | 0.1 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 182° S | aucun | soleil-couvert | 0.1 | 19°C |
| Cruas - Nuclear Spot | 4 | 8 | 199° SSO | aucun | soleil-couvert | 0.1 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 19 | 171° S | aucun | soleil-couvert | 0.2 | 19°C |
| Nord du Pont de Chavanay | 10 | 17 | 174° S | aucun | soleil-couvert | 0.2 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 172° S | aucun | pluie | 1.1 | 18°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 196° SSO | aucun | pluie | 1.8 | 18°C |
| Saint-Romain-des-Iles | 4 | 8 | 170° S | aucun | pluie | 1.6 | 17°C |
| Nord du Pont d'Arciat | 6 | 9 | 225° SO | aucun | pluie | 2.6 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 19 | 191° S | 13h-16h | soleil-couvert | 0.4 | 18°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 26 | 30° NNE | 13h-20h | orage | 17.3 | 13°C |
| Plage d'Excenevex | 18 | 24 | 26° NNE | 13h-20h | orage | 18.1 | 13°C |
| Plage du Vengeron | 15 | 21 | 26° NNE | 13h-20h | orage | 20.7 | 13°C |
| Plage d'Hermance | 15 | 22 | 32° NNE | 13h-20h | orage | 18.7 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 283° ONO | aucun | orage | 24.3 | 12°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 343° NNO | 14h-18h | orage | 11.4 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 19 | 191° S | aucun | orage | 31.9 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 18 | 354° N | aucun | orage | 29.4 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 15 | 188° S | aucun | orage | 48.5 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 5 | 318° NO | aucun | orage | 32.0 | 15°C |
| Cruas - Nuclear Spot | 4 | 7 | 27° NNE | aucun | orage | 44.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 10° N | aucun | orage | 21.8 | 15°C |
| Nord du Pont de Chavanay | 4 | 9 | 345° NNO | aucun | orage | 20.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 104° ESE | aucun | orage | 19.5 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 351° N | aucun | orage | 20.0 | 15°C |
| Saint-Romain-des-Iles | 12 | 18 | 359° N | aucun | orage | 31.7 | 14°C |
| Nord du Pont d'Arciat | 13 | 20 | 4° N | aucun | orage | 29.7 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 13 | 344° NNO | aucun | orage | 21.2 | 14°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 26 | 38 | 37° NE | 08h-20h | soleil | 0.0 | 9°C |
| Plage d'Excenevex | 27 | 39 | 29° NNE | 08h-20h | soleil | 0.0 | 9°C |
| Plage du Vengeron | 24 | 36 | 28° NNE | 08h-20h | soleil | 0.0 | 9°C |
| Plage d'Hermance | 23 | 35 | 38° NE | 08h-20h | soleil | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 279° O | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 16 | 23 | 358° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 16° NNE | 11h-18h | couvert | 0.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 14 | 25 | 356° N | 08h-16h | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 22 | 35 | 360° N | 08h-20h | couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 18 | 29 | 352° N | 08h-20h | soleil-couvert | 0.4 | 9°C |
| Cruas - Nuclear Spot | 19 | 38 | 7° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 25 | 349° N | 08h-20h | soleil-couvert | 0.1 | 9°C |
| Nord du Pont de Chavanay | 14 | 25 | 349° N | 08h-20h | soleil-couvert | 0.1 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 350° N | 08h-18h | soleil-couvert | 0.4 | 8°C |
| Saint-Cyr-sur-le-Rhône | 12 | 23 | 350° N | 08h-18h | soleil-couvert | 0.4 | 8°C |
| Saint-Romain-des-Iles | 17 | 27 | 7° N | 08h-20h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 17 | 27 | 7° N | 08h-20h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 26 | 350° N | 08h-20h | soleil | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 22 | 41° NE | 08h-12h | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 15 | 20 | 32° NNE | 08h-11h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 12 | 16 | 47° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 11 | 18 | 52° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 336° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 350° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 184° S | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 18 | 183° S | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 12 | 10° N | aucun | soleil-couvert | 0.0 | 9°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 190° S | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 9 | 16 | 24° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 168° SSE | aucun | soleil | 0.0 | 9°C |
| Nord du Pont de Chavanay | 8 | 18 | 168° SSE | aucun | soleil | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 183° S | aucun | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 161° SSE | aucun | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 3 | 6 | 203° SSO | aucun | soleil | 0.0 | 8°C |
| Nord du Pont d'Arciat | 3 | 6 | 203° SSO | aucun | soleil | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 131° SE | aucun | soleil | 0.0 | 8°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 257° OSO | aucun | pluie | 5.0 | 9°C |
| Plage d'Excenevex | 4 | 6 | 106° ESE | aucun | pluie | 6.2 | 8°C |
| Plage du Vengeron | 4 | 6 | 285° ONO | aucun | pluie | 7.0 | 8°C |
| Plage d'Hermance | 5 | 8 | 270° O | aucun | pluie | 6.1 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 135° SE | aucun | orage | 11.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 16 | 21 | 206° SSO | 15h-18h | orage | 3.7 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 170° S | aucun | orage | 11.3 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 115° ESE | aucun | pluie | 6.9 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 173° S | aucun | pluie | 2.7 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 20 | 175° S | aucun | pluie | 3.0 | 11°C |
| Cruas - Nuclear Spot | 3 | 14 | 224° SO | aucun | pluie | 4.2 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 21 | 173° S | aucun | pluie | 2.4 | 12°C |
| Nord du Pont de Chavanay | 10 | 21 | 173° S | aucun | pluie | 2.4 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 24 | 165° SSE | 11h-15h | couvert | 0.6 | 11°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 167° SSE | aucun | pluie | 2.1 | 11°C |
| Saint-Romain-des-Iles | 7 | 14 | 181° S | aucun | pluie | 7.8 | 11°C |
| Nord du Pont d'Arciat | 7 | 14 | 181° S | aucun | pluie | 7.8 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 15 | 141° SE | aucun | pluie | 5.4 | 11°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 22 | 255° OSO | 13h-20h | pluie | 5.8 | 14°C |
| Plage d'Excenevex | 13 | 22 | 255° OSO | 13h-20h | pluie | 5.8 | 14°C |
| Plage du Vengeron | 13 | 22 | 255° OSO | 13h-20h | pluie | 5.8 | 14°C |
| Plage d'Hermance | 13 | 22 | 255° OSO | 13h-20h | pluie | 5.8 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 11 | 160° SSE | aucun | pluie | 6.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 124° SE | aucun | pluie | 6.9 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 22 | 164° SSE | aucun | pluie | 1.6 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 15 | 176° S | aucun | pluie | 1.7 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 13 | 193° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 191° S | aucun | soleil-couvert | 0.9 | 12°C |
| Cruas - Nuclear Spot | 3 | 10 | 190° S | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 147° SSE | aucun | soleil | 0.6 | 13°C |
| Nord du Pont de Chavanay | 5 | 12 | 147° SSE | aucun | soleil | 0.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 157° SSE | aucun | soleil-couvert | 0.6 | 13°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 156° SSE | aucun | soleil | 0.0 | 12°C |
| Saint-Romain-des-Iles | 5 | 9 | 183° S | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 5 | 9 | 183° S | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 10 | 181° S | aucun | soleil-couvert | 0.9 | 12°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 17 | 234° SO | aucun | orage | 30.5 | 14°C |
| Plage d'Excenevex | 11 | 17 | 234° SO | aucun | orage | 30.5 | 14°C |
| Plage du Vengeron | 11 | 17 | 234° SO | aucun | orage | 30.5 | 14°C |
| Plage d'Hermance | 11 | 17 | 234° SO | aucun | orage | 30.5 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 13 | 134° SE | aucun | orage | 34.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 8 | 26 | 239° OSO | aucun | orage | 23.3 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 17 | 44 | 158° SSE | 08h-15h | pluie | 6.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 33 | 171° S | 09h-14h | orage | 9.3 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 22 | 205° SSO | 12h-15h | pluie | 1.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 15 | 31 | 202° SSO | 10h-20h | pluie | 5.5 | 12°C |
| Cruas - Nuclear Spot | 6 | 16 | 227° SO | aucun | pluie | 6.9 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 32 | 177° S | 10h-20h | pluie | 6.0 | 12°C |
| Nord du Pont de Chavanay | 14 | 32 | 177° S | 10h-20h | pluie | 6.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 18 | 37 | 172° S | 09h-20h | pluie | 8.9 | 12°C |
| Saint-Cyr-sur-le-Rhône | 16 | 35 | 172° S | 10h-20h | pluie | 6.0 | 12°C |
| Saint-Romain-des-Iles | 14 | 24 | 179° S | 10h-20h | orage | 20.9 | 12°C |
| Nord du Pont d'Arciat | 14 | 24 | 179° S | 10h-20h | orage | 20.9 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 18 | 38 | 187° S | 10h-20h | pluie | 11.5 | 13°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 208° SSO | 08h-20h | pluie | 10.6 | 11°C |
| Plage d'Excenevex | 18 | 23 | 217° SO | 08h-20h | pluie | 6.3 | 12°C |
| Plage du Vengeron | 14 | 19 | 208° SSO | 08h-20h | pluie | 10.6 | 11°C |
| Plage d'Hermance | 14 | 19 | 208° SSO | 08h-20h | pluie | 10.6 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 158° SSE | aucun | pluie | 10.8 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 20 | 188° S | aucun | pluie | 16.5 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 12 | 101° E | aucun | pluie | 12.4 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 12 | 113° ESE | aucun | pluie | 18.2 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 192° SSO | aucun | pluie | 1.2 | 14°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 190° S | aucun | soleil-couvert | 0.6 | 13°C |
| Cruas - Nuclear Spot | 6 | 14 | 197° SSO | aucun | pluie | 1.8 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 22 | 175° S | aucun | pluie | 2.4 | 15°C |
| Nord du Pont de Chavanay | 7 | 22 | 175° S | aucun | pluie | 2.4 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 15 | 166° SSE | aucun | pluie | 1.2 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 20 | 181° S | aucun | pluie | 6.0 | 13°C |
| Saint-Romain-des-Iles | 10 | 19 | 220° SO | aucun | pluie | 1.2 | 14°C |
| Nord du Pont d'Arciat | 10 | 19 | 220° SO | aucun | pluie | 1.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 194° SSO | aucun | soleil-couvert | 0.6 | 14°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 17 | 200° SSO | aucun | soleil-couvert | 0.2 | 11°C |
| Plage d'Excenevex | 13 | 20 | 209° SSO | 08h-11h | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 10 | 17 | 200° SSO | aucun | soleil-couvert | 0.2 | 11°C |
| Plage d'Hermance | 10 | 17 | 200° SSO | aucun | soleil-couvert | 0.2 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 199° SSO | aucun | soleil-couvert | 0.1 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 251° OSO | aucun | soleil-couvert | 0.4 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 320° NO | aucun | soleil-couvert | 0.2 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 323° NO | aucun | soleil-couvert | 0.1 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 183° S | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 197° SSO | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 3 | 10 | 334° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 159° SSE | aucun | soleil-couvert | 0.1 | 13°C |
| Nord du Pont de Chavanay | 6 | 13 | 159° SSE | aucun | soleil-couvert | 0.1 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 16 | 161° SSE | aucun | soleil-couvert | 0.4 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 161° SSE | aucun | soleil-couvert | 0.2 | 13°C |
| Saint-Romain-des-Iles | 8 | 14 | 177° S | aucun | pluie | 0.7 | 12°C |
| Nord du Pont d'Arciat | 8 | 14 | 177° S | aucun | pluie | 0.7 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 12 | 163° SSE | aucun | pluie | 0.5 | 12°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 13 | 231° SO | aucun | pluie | 1.2 | 13°C |
| Plage d'Excenevex | 7 | 11 | 249° OSO | aucun | couvert | 0.6 | 13°C |
| Plage du Vengeron | 8 | 13 | 231° SO | aucun | pluie | 1.2 | 13°C |
| Plage d'Hermance | 8 | 13 | 231° SO | aucun | pluie | 1.2 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 131° SE | aucun | couvert | 0.6 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 275° O | aucun | pluie | 1.8 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 283° ONO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 277° O | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 11 | 164° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 161° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 2 | 8 | 173° S | aucun | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 156° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 4 | 12 | 156° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 17 | 161° SSE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 163° SSE | aucun | couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 4 | 13 | 164° SSE | aucun | pluie | 1.2 | 14°C |
| Nord du Pont d'Arciat | 4 | 13 | 164° SSE | aucun | pluie | 1.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 17 | 186° S | aucun | soleil-couvert | 0.0 | 14°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 14° NNE | aucun | pluie | 5.0 | 10°C |
| Plage d'Excenevex | 3 | 6 | 26° NNE | aucun | pluie | 4.3 | 11°C |
| Plage du Vengeron | 4 | 7 | 14° NNE | aucun | pluie | 5.0 | 10°C |
| Plage d'Hermance | 4 | 7 | 14° NNE | aucun | pluie | 5.0 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 114° ESE | aucun | pluie | 8.1 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 4 | 27° NNE | aucun | pluie | 7.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 357° N | aucun | pluie | 7.3 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 320° NO | aucun | pluie | 7.8 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 9 | 9° N | aucun | pluie | 7.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 3 | 5 | 352° N | aucun | pluie | 5.8 | 11°C |
| Cruas - Nuclear Spot | 4 | 10 | 4° N | aucun | pluie | 5.9 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 4 | 6° N | aucun | pluie | 5.5 | 11°C |
| Nord du Pont de Chavanay | 2 | 4 | 6° N | aucun | pluie | 5.5 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 182° S | aucun | pluie | 4.9 | 11°C |
| Saint-Cyr-sur-le-Rhône | 2 | 4 | 351° N | aucun | pluie | 5.5 | 11°C |
| Saint-Romain-des-Iles | 3 | 7 | 186° S | aucun | pluie | 3.7 | 11°C |
| Nord du Pont d'Arciat | 3 | 7 | 186° S | aucun | pluie | 3.7 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 116° ESE | aucun | pluie | 4.3 | 11°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 5° N | aucun | pluie | 2.4 | 10°C |
| Plage d'Excenevex | 2 | 4 | 220° SO | aucun | soleil-couvert | 0.0 | 10°C |
| Plage du Vengeron | 2 | 5 | 5° N | aucun | pluie | 2.4 | 10°C |
| Plage d'Hermance | 2 | 5 | 5° N | aucun | pluie | 2.4 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 1 | 5 | 85° E | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 68° ENE | aucun | soleil-couvert | 0.6 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 18 | 347° NNO | aucun | couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 19 | 345° NNO | aucun | couvert | 0.6 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 27 | 8° N | 09h-16h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 4° N | 11h-14h | soleil | 0.0 | 12°C |
| Cruas - Nuclear Spot | 13 | 29 | 12° NNE | 09h-18h | soleil | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 7° N | aucun | soleil | 0.0 | 11°C |
| Nord du Pont de Chavanay | 6 | 15 | 7° N | aucun | soleil | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 353° N | aucun | soleil | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 359° N | aucun | soleil | 0.0 | 11°C |
| Saint-Romain-des-Iles | 4 | 9 | 327° NNO | aucun | soleil-couvert | 0.6 | 10°C |
| Nord du Pont d'Arciat | 4 | 9 | 327° NNO | aucun | soleil-couvert | 0.6 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 11 | 355° N | aucun | soleil-couvert | 0.6 | 11°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 4 | 151° SSE | aucun | couvert | 0.0 | 9°C |
| Plage d'Excenevex | 1 | 5 | 81° E | aucun | couvert | 0.0 | 9°C |
| Plage du Vengeron | 2 | 4 | 151° SSE | aucun | couvert | 0.0 | 9°C |
| Plage d'Hermance | 2 | 4 | 151° SSE | aucun | couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 292° ONO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 19° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 205° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 220° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 24° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 3 | 7 | 339° NNO | aucun | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 5 | 17 | 16° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 6 | 217° SO | aucun | couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 2 | 6 | 217° SO | aucun | couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 208° SSO | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 211° SSO | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 4 | 8 | 150° SSE | aucun | couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 8 | 150° SSE | aucun | couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 168° SSE | aucun | couvert | 0.0 | 9°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 13 | 204° SSO | aucun | pluie | 2.5 | 9°C |
| Plage d'Excenevex | 12 | 16 | 214° SO | 11h-20h | couvert | 0.3 | 10°C |
| Plage du Vengeron | 9 | 13 | 204° SSO | aucun | pluie | 2.5 | 9°C |
| Plage d'Hermance | 9 | 13 | 204° SSO | aucun | pluie | 2.5 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 175° S | aucun | pluie | 7.7 | 6°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 182° S | aucun | pluie | 5.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 357° N | aucun | pluie | 2.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 347° NNO | aucun | pluie | 1.6 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 18° NNE | aucun | pluie | 1.9 | 11°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 26° NNE | aucun | soleil-couvert | 0.1 | 10°C |
| Cruas - Nuclear Spot | 3 | 8 | 327° NNO | aucun | pluie | 3.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 6 | 51° NE | aucun | pluie | 1.8 | 9°C |
| Nord du Pont de Chavanay | 1 | 6 | 51° NE | aucun | pluie | 1.8 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 170° S | aucun | pluie | 2.5 | 9°C |
| Saint-Cyr-sur-le-Rhône | 1 | 8 | 309° NO | aucun | pluie | 2.5 | 9°C |
| Saint-Romain-des-Iles | 4 | 8 | 272° O | aucun | pluie | 1.2 | 9°C |
| Nord du Pont d'Arciat | 4 | 8 | 272° O | aucun | pluie | 1.2 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 156° SSE | aucun | pluie | 3.6 | 8°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 18 | 196° SSO | aucun | pluie | 2.4 |  |
| Plage d'Excenevex | 14 | 22 | 212° SSO | 08h-11h | pluie | 1.2 |  |
| Plage du Vengeron | 11 | 18 | 196° SSO | aucun | pluie | 2.4 |  |
| Plage d'Hermance | 11 | 18 | 196° SSO | aucun | pluie | 2.4 |  |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 267° O | aucun | pluie | 3.0 |  |
| Lac du Bourget - Cap des Séselets | 3 | 13 | 189° S | aucun | pluie | 4.2 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 22 | 1° N | aucun | pluie | 7.2 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 24 | 353° N | aucun | pluie | 5.4 |  |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 18 | 24° NNE | aucun | pluie | 1.8 |  |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 19° NNE | aucun | pluie | 1.8 |  |
| Cruas - Nuclear Spot | 8 | 24 | 25° NNE | aucun | pluie | 1.2 |  |
| Centrale de Saint-Alban-du-Rhône | 10 | 25 | 339° NNO | aucun | pluie | 5.4 |  |
| Nord du Pont de Chavanay | 10 | 25 | 339° NNO | aucun | pluie | 5.4 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 338° NNO | aucun | pluie | 3.0 |  |
| Saint-Cyr-sur-le-Rhône | 10 | 26 | 334° NNO | aucun | pluie | 5.4 |  |
| Saint-Romain-des-Iles | 12 | 24 | 328° NNO | aucun | pluie | 3.0 |  |
| Nord du Pont d'Arciat | 12 | 24 | 328° NNO | aucun | pluie | 3.0 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 22 | 340° NNO | aucun | pluie | 2.4 |  |
