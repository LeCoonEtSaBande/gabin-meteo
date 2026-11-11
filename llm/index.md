# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 11/11/2026 13:50 (Europe/Paris)
- Fichiers générés le : 2026-11-11T13:53:28+01:00
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

### mer. 11/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 12 | 217° SO | aucun | pluie | 4.5 | 15°C |
| Plage d'Excenevex | 9 | 13 | 210° SSO | aucun | pluie | 1.9 | 16°C |
| Plage du Vengeron | 10 | 13 | 216° SO | aucun | pluie | 3.2 | 16°C |
| Plage d'Hermance | 9 | 12 | 203° SSO | aucun | pluie | 2.5 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 15 | 6° N | aucun | pluie | 2.1 | 15°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 220° SO | aucun | pluie | 2.4 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 22 | 201° SSO | aucun | pluie | 1.6 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 201° SSO | aucun | pluie | 1.2 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 12 | 190° S | aucun | pluie | 1.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 170° S | aucun | couvert | 0.3 | 18°C |
| Cruas - Nuclear Spot | 3 | 6 | 165° SSE | aucun | soleil-couvert | 0.3 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 15 | 156° SSE | aucun | pluie | 1.0 | 18°C |
| Nord du Pont de Chavanay | 7 | 13 | 158° SSE | aucun | pluie | 0.9 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 188° S | aucun | pluie | 1.1 | 18°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 218° SO | aucun | pluie | 2.7 | 18°C |
| Saint-Romain-des-Iles | 6 | 11 | 196° SSO | aucun | pluie | 2.2 | 18°C |
| Nord du Pont d'Arciat | 5 | 8 | 216° SO | aucun | pluie | 3.3 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 16 | 197° SSO | aucun | pluie | 3.7 | 18°C |

### jeu. 12/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 14 | 50° NE | aucun | pluie | 10.1 | 13°C |
| Plage d'Excenevex | 12 | 16 | 29° NNE | aucun | pluie | 9.6 | 13°C |
| Plage du Vengeron | 8 | 10 | 50° NE | aucun | pluie | 12.4 | 13°C |
| Plage d'Hermance | 8 | 11 | 61° ENE | aucun | pluie | 10.9 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 9° N | aucun | orage | 21.2 | 13°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 328° NNO | aucun | orage | 29.4 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 13 | 226° SO | aucun | orage | 27.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 242° OSO | aucun | orage | 22.9 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 360° N | aucun | pluie | 10.5 | 16°C |
| La Roche-de-Glun - Base Nautique | 4 | 6 | 357° N | aucun | pluie | 6.9 | 16°C |
| Cruas - Nuclear Spot | 4 | 7 | 29° NNE | aucun | orage | 13.2 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 356° N | aucun | orage | 14.4 | 15°C |
| Nord du Pont de Chavanay | 6 | 12 | 4° N | aucun | orage | 13.8 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 10 | 307° NO | aucun | orage | 13.1 | 15°C |
| Saint-Cyr-sur-le-Rhône | 4 | 13 | 360° N | aucun | orage | 9.7 | 15°C |
| Saint-Romain-des-Iles | 13 | 22 | 6° N | aucun | orage | 9.8 | 13°C |
| Nord du Pont d'Arciat | 14 | 21 | 360° N | aucun | pluie | 10.2 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 14 | 7° N | aucun | orage | 11.2 | 14°C |

### ven. 13/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 27 | 38 | 37° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 28 | 40 | 29° NNE | 08h-20h | couvert | 0.1 | 9°C |
| Plage du Vengeron | 26 | 37 | 32° NNE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 22 | 35 | 34° NE | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 302° ONO | aucun | couvert | 0.1 | 10°C |
| Lac du Bourget - Cap des Séselets | 16 | 21 | 3° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 23 | 20° NNE | 12h-18h | couvert | 0.0 | 3°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 24 | 355° N | 11h-16h | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 22 | 34 | 2° N | 08h-20h | soleil-couvert | 0.4 | 9°C |
| La Roche-de-Glun - Base Nautique | 19 | 30 | 352° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 20 | 42 | 9° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 27 | 352° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 14 | 26 | 352° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 23 | 349° N | 08h-17h | couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 12 | 23 | 349° N | 10h-17h | couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 17 | 27 | 7° N | 08h-20h | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 17 | 27 | 7° N | 08h-20h | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 26 | 348° NNO | 08h-20h | soleil | 0.0 | 9°C |

### sam. 14/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 46° NE | 08h-12h | couvert | 0.0 | 7°C |
| Plage d'Excenevex | 17 | 24 | 30° NNE | 08h-12h | couvert | 0.0 | 7°C |
| Plage du Vengeron | 13 | 18 | 50° NE | 08h-11h | couvert | 0.0 | 8°C |
| Plage d'Hermance | 12 | 19 | 54° NE | 08h-11h | couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 338° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 6 | 12° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 18 | 34 | 170° S | 11h-17h | soleil-couvert | 0.3 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 23 | 187° S | aucun | soleil-couvert | 0.3 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 18 | 188° S | 16h-20h | couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 12 | 19 | 182° S | 17h-20h | couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 8 | 16 | 27° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 22 | 179° S | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 13 | 22 | 179° S | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 22 | 183° S | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 12 | 22 | 183° S | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 4 | 4 | 196° SSO | aucun | soleil | 0.0 | 9°C |
| Nord du Pont d'Arciat | 4 | 4 | 196° SSO | aucun | soleil | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 141° SE | aucun | soleil | 0.0 | 9°C |

### dim. 15/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 47° NE | aucun | pluie | 3.6 | 10°C |
| Plage d'Excenevex | 3 | 5 | 77° ENE | aucun | pluie | 3.3 | 10°C |
| Plage du Vengeron | 3 | 5 | 45° NE | aucun | pluie | 2.3 | 11°C |
| Plage d'Hermance | 4 | 5 | 51° NE | aucun | pluie | 2.4 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 10 | 159° SSE | aucun | pluie | 1.7 | 14°C |
| Lac du Bourget - Cap des Séselets | 13 | 18 | 206° SSO | aucun | pluie | 1.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 16 | 30 | 174° S | 08h-20h | pluie | 7.1 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 168° SSE | aucun | pluie | 5.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 17 | 186° S | aucun | pluie | 4.1 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 18 | 183° S | aucun | pluie | 3.5 | 13°C |
| Cruas - Nuclear Spot | 5 | 10 | 213° SSO | aucun | pluie | 10.1 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 23 | 175° S | 11h-18h | couvert | 0.2 | 15°C |
| Nord du Pont de Chavanay | 13 | 23 | 175° S | 11h-18h | couvert | 0.2 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 15 | 31 | 167° SSE | 10h-20h | couvert | 0.4 | 15°C |
| Saint-Cyr-sur-le-Rhône | 13 | 26 | 190° S | 10h-20h | pluie | 1.0 | 14°C |
| Saint-Romain-des-Iles | 13 | 21 | 183° S | aucun | soleil-couvert | 0.8 | 14°C |
| Nord du Pont d'Arciat | 13 | 21 | 183° S | aucun | soleil-couvert | 0.8 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 27 | 193° SSO | 11h-20h | pluie | 1.0 | 15°C |

### lun. 16/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 26 | 235° SO | 12h-19h | pluie | 12.4 | 12°C |
| Plage d'Excenevex | 15 | 26 | 235° SO | 12h-19h | pluie | 12.4 | 12°C |
| Plage du Vengeron | 15 | 26 | 235° SO | 12h-19h | pluie | 12.4 | 12°C |
| Plage d'Hermance | 15 | 26 | 235° SO | 12h-19h | pluie | 12.4 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 238° OSO | aucun | pluie | 11.5 | 9°C |
| Lac du Bourget - Cap des Séselets | 9 | 26 | 237° OSO | aucun | orage | 19.4 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 22 | 170° S | aucun | pluie | 8.4 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 18 | 173° S | aucun | pluie | 6.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 175° S | aucun | pluie | 1.2 | 16°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 191° S | aucun | soleil | 0.6 | 16°C |
| Cruas - Nuclear Spot | 3 | 11 | 187° S | aucun | pluie | 3.6 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 15 | 170° S | aucun | pluie | 6.3 | 13°C |
| Nord du Pont de Chavanay | 5 | 15 | 170° S | aucun | pluie | 6.3 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 13 | 178° S | aucun | pluie | 1.3 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 171° S | aucun | pluie | 2.1 | 13°C |
| Saint-Romain-des-Iles | 2 | 10 | 278° O | aucun | soleil | 0.9 | 13°C |
| Nord du Pont d'Arciat | 2 | 10 | 278° O | aucun | soleil | 0.9 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 15 | 300° ONO | aucun | pluie | 2.4 | 13°C |

### mar. 17/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 22 | 239° OSO | 16h-20h | pluie | 5.3 | 11°C |
| Plage d'Excenevex | 12 | 22 | 239° OSO | 16h-20h | pluie | 5.3 | 11°C |
| Plage du Vengeron | 12 | 22 | 239° OSO | 16h-20h | pluie | 5.3 | 11°C |
| Plage d'Hermance | 12 | 22 | 239° OSO | 16h-20h | pluie | 5.3 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 17 | 139° SE | aucun | pluie | 9.3 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 11 | 119° ESE | aucun | pluie | 13.3 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 25 | 149° SSE | aucun | pluie | 10.7 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 16 | 193° SSO | aucun | pluie | 11.8 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 188° S | 12h-15h | pluie | 2.4 | 12°C |
| La Roche-de-Glun - Base Nautique | 14 | 32 | 191° S | 09h-20h | pluie | 5.4 | 12°C |
| Cruas - Nuclear Spot | 6 | 16 | 218° SO | aucun | pluie | 2.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 13 | 33 | 172° S | 10h-20h | pluie | 6.2 | 12°C |
| Nord du Pont de Chavanay | 13 | 33 | 172° S | 10h-20h | pluie | 6.2 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 14 | 36 | 169° S | 08h-20h | pluie | 6.7 | 12°C |
| Saint-Cyr-sur-le-Rhône | 13 | 34 | 167° SSE | 10h-19h | pluie | 4.2 | 12°C |
| Saint-Romain-des-Iles | 11 | 26 | 180° S | 11h-15h | pluie | 4.7 | 11°C |
| Nord du Pont d'Arciat | 11 | 26 | 180° S | 11h-15h | pluie | 4.7 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 32 | 182° S | 08h-20h | pluie | 16.9 | 12°C |

### mer. 18/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 206° SSO | 09h-20h | pluie | 6.5 | 10°C |
| Plage d'Excenevex | 19 | 26 | 214° SO | 09h-20h | pluie | 3.2 | 11°C |
| Plage du Vengeron | 16 | 22 | 206° SSO | 09h-20h | pluie | 6.5 | 10°C |
| Plage d'Hermance | 16 | 22 | 206° SSO | 09h-20h | pluie | 6.5 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 18 | 182° S | aucun | pluie | 7.9 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 14 | 169° S | aucun | pluie | 10.4 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 183° S | aucun | pluie | 3.7 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 17 | 117° ESE | aucun | pluie | 3.1 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 164° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 181° S | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 7 | 15 | 159° SSE | aucun | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 16 | 179° S | aucun | pluie | 1.2 | 14°C |
| Nord du Pont de Chavanay | 4 | 16 | 179° S | aucun | pluie | 1.2 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 20 | 237° OSO | aucun | soleil-couvert | 0.6 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 19 | 217° SO | aucun | pluie | 2.4 | 13°C |
| Saint-Romain-des-Iles | 12 | 22 | 257° OSO | 15h-20h | soleil-couvert | 0.5 | 13°C |
| Nord du Pont d'Arciat | 12 | 22 | 257° OSO | 15h-20h | soleil-couvert | 0.5 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 23 | 235° SO | aucun | soleil | 0.6 | 14°C |

### jeu. 19/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 26 | 201° SSO | 15h-20h | pluie | 5.5 | 10°C |
| Plage d'Excenevex | 21 | 32 | 208° SSO | 14h-20h | pluie | 5.7 | 11°C |
| Plage du Vengeron | 17 | 26 | 201° SSO | 15h-20h | pluie | 5.5 | 10°C |
| Plage d'Hermance | 17 | 26 | 201° SSO | 15h-20h | pluie | 5.5 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 30 | 214° SO | aucun | pluie | 26.4 | 7°C |
| Lac du Bourget - Cap des Séselets | 7 | 26 | 190° S | aucun | pluie | 21.6 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 14 | 153° SSE | aucun | pluie | 7.5 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 139° SE | aucun | pluie | 8.8 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 18 | 168° SSE | aucun | pluie | 2.4 | 13°C |
| La Roche-de-Glun - Base Nautique | 13 | 24 | 192° SSO | 08h-14h | pluie | 1.8 | 12°C |
| Cruas - Nuclear Spot | 4 | 11 | 205° SSO | aucun | pluie | 1.8 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 21 | 163° SSE | aucun | pluie | 2.4 | 13°C |
| Nord du Pont de Chavanay | 9 | 21 | 163° SSE | aucun | pluie | 2.4 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 20 | 173° S | 08h-12h | pluie | 2.5 | 13°C |
| Saint-Cyr-sur-le-Rhône | 9 | 20 | 167° SSE | aucun | pluie | 3.0 | 13°C |
| Saint-Romain-des-Iles | 12 | 32 | 287° ONO | aucun | pluie | 11.5 | 11°C |
| Nord du Pont d'Arciat | 12 | 32 | 287° ONO | aucun | pluie | 11.5 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 22 | 187° S | 08h-12h | pluie | 3.5 | 12°C |

### ven. 20/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 17 | 23 | 206° SSO | 08h-20h | pluie | 4.7 | 8°C |
| Plage d'Excenevex | 20 | 26 | 215° SO | 08h-20h | pluie | 2.1 | 9°C |
| Plage du Vengeron | 17 | 23 | 206° SSO | 08h-20h | pluie | 4.7 | 8°C |
| Plage d'Hermance | 17 | 23 | 206° SSO | 08h-20h | pluie | 4.7 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 16 | 168° SSE | aucun | pluie | 5.9 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 178° S | aucun | pluie | 10.1 | 7°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 12 | 42° NE | aucun | pluie | 9.4 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 13 | 20° NNE | aucun | pluie | 6.4 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 17 | 152° SSE | aucun | pluie | 3.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 177° S | aucun | soleil-couvert | 0.6 | 11°C |
| Cruas - Nuclear Spot | 3 | 10 | 188° S | aucun | soleil-couvert | 0.6 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 16 | 134° SE | aucun | pluie | 6.0 | 10°C |
| Nord du Pont de Chavanay | 4 | 16 | 134° SE | aucun | pluie | 6.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 167° SSE | aucun | pluie | 1.8 | 11°C |
| Saint-Cyr-sur-le-Rhône | 4 | 15 | 156° SSE | aucun | pluie | 8.4 | 10°C |
| Saint-Romain-des-Iles | 8 | 16 | 248° OSO | aucun | pluie | 3.1 | 11°C |
| Nord du Pont d'Arciat | 8 | 16 | 248° OSO | aucun | pluie | 3.1 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 197° SSO | aucun | pluie | 2.7 | 11°C |

### sam. 21/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 216° SO | aucun | pluie | 0.7 | 10°C |
| Plage d'Excenevex | 7 | 23 | 224° SO | aucun | pluie | 0.6 | 10°C |
| Plage du Vengeron | 7 | 11 | 216° SO | aucun | pluie | 0.7 | 10°C |
| Plage d'Hermance | 7 | 11 | 216° SO | aucun | pluie | 0.7 | 10°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 207° SSO | aucun | soleil | 0.1 | 7°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 198° SSO | aucun | soleil-couvert | 0.4 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 10° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 11 | 7° N | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 33° NNE | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 4 | 9 | 207° SSO | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 4 | 12 | 32° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 12 | 188° S | aucun | soleil | 0.1 | 10°C |
| Nord du Pont de Chavanay | 4 | 12 | 188° S | aucun | soleil | 0.1 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 14 | 183° S | aucun | soleil | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 184° S | aucun | soleil | 0.0 | 10°C |
| Saint-Romain-des-Iles | 6 | 13 | 177° S | aucun | soleil-couvert | 0.4 | 11°C |
| Nord du Pont d'Arciat | 6 | 13 | 177° S | aucun | soleil-couvert | 0.4 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 11 | 169° S | aucun | pluie | 0.5 | 10°C |

### dim. 22/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 21 | 196° SSO | 08h-16h | soleil-couvert | 0.9 | 8°C |
| Plage d'Excenevex | 18 | 24 | 211° SSO | 08h-19h | soleil | 0.6 | 9°C |
| Plage du Vengeron | 14 | 21 | 196° SSO | 08h-16h | soleil-couvert | 0.9 | 8°C |
| Plage d'Hermance | 14 | 21 | 196° SSO | 08h-16h | soleil-couvert | 0.9 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 202° SSO | aucun | soleil-couvert | 0.7 | 5°C |
| Lac du Bourget - Cap des Séselets | 3 | 14 | 217° SO | aucun | pluie | 1.3 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 9° N | aucun | pluie | 1.2 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 8° N | aucun | pluie | 2.4 | 5°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 15 | 34° NE | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 31° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 5 | 12 | 35° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 1 | 11 | 113° ESE | aucun | pluie | 1.2 | 9°C |
| Nord du Pont de Chavanay | 1 | 11 | 113° ESE | aucun | pluie | 1.2 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 10 | 275° O | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 1 | 10 | 236° SO | aucun | soleil-couvert | 0.6 | 9°C |
| Saint-Romain-des-Iles | 8 | 15 | 263° O | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 8 | 15 | 263° O | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 242° OSO | aucun | soleil-couvert | 0.6 | 10°C |

### lun. 23/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 210° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 7 | 11 | 223° SO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 8 | 12 | 210° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 8 | 12 | 210° SSO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 215° SO | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 360° N | aucun | soleil-couvert | 0.0 | 8°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 158° SSE | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 169° S | aucun | soleil-couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 11 | 7° N | aucun | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 3 | 8 | 317° NO | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 6 | 15 | 6° N | aucun | soleil-couvert | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 119° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 2 | 8 | 119° ESE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 132° SE | aucun | couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 123° ESE | aucun | couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 7 | 14 | 174° S | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 7 | 14 | 174° S | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 8 | 154° SSE | aucun | couvert | 0.0 | 9°C |

### mar. 24/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 354° N | aucun | pluie | 0.5 | 9°C |
| Plage d'Excenevex | 4 | 8 | 4° N | aucun | couvert | 0.4 | 8°C |
| Plage du Vengeron | 6 | 8 | 354° N | aucun | pluie | 0.5 | 9°C |
| Plage d'Hermance | 6 | 8 | 354° N | aucun | pluie | 0.5 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 115° ESE | aucun | couvert | 0.3 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 353° N | aucun | couvert | 0.1 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 33 | 165° SSE | aucun | pluie | 0.6 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 29 | 164° SSE | aucun | pluie | 0.6 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 31 | 173° S | 10h-20h | pluie | 2.6 | 12°C |
| La Roche-de-Glun - Base Nautique | 15 | 32 | 181° S | 10h-20h | pluie | 3.8 | 11°C |
| Cruas - Nuclear Spot | 14 | 31 | 167° SSE | 11h-20h | pluie | 6.4 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 16 | 36 | 182° S | 08h-20h | pluie | 2.9 | 11°C |
| Nord du Pont de Chavanay | 16 | 36 | 182° S | 08h-20h | pluie | 2.9 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 40 | 177° S | 08h-20h | pluie | 1.5 | 11°C |
| Saint-Cyr-sur-le-Rhône | 18 | 40 | 177° S | 08h-20h | pluie | 2.2 | 10°C |
| Saint-Romain-des-Iles | 16 | 28 | 180° S | 11h-20h | pluie | 0.5 | 11°C |
| Nord du Pont d'Arciat | 16 | 28 | 180° S | 11h-20h | pluie | 0.5 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 28 | 182° S | 11h-20h | pluie | 0.9 | 12°C |

### mer. 25/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 214° SO | aucun | pluie | 7.8 | 7°C |
| Plage d'Excenevex | 8 | 12 | 238° OSO | aucun | pluie | 9.6 | 8°C |
| Plage du Vengeron | 8 | 12 | 214° SO | aucun | pluie | 7.8 | 7°C |
| Plage d'Hermance | 8 | 12 | 214° SO | aucun | pluie | 7.8 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 75° ENE | aucun | pluie | 12.0 | 4°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 58° ENE | aucun | pluie | 9.6 | 6°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 27 | 353° N | aucun | orage | 18.0 | 2°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 30 | 349° N | aucun | orage | 18.0 | 2°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 4° N | aucun | pluie | 7.8 | 9°C |
| La Roche-de-Glun - Base Nautique | 6 | 16 | 7° N | aucun | pluie | 7.2 | 9°C |
| Cruas - Nuclear Spot | 11 | 24 | 6° N | 12h-16h | pluie | 2.6 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 17 | 9° N | aucun | pluie | 6.6 | 8°C |
| Nord du Pont de Chavanay | 5 | 17 | 9° N | aucun | pluie | 6.6 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 14 | 21° NNE | aucun | pluie | 4.2 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 19 | 5° N | aucun | pluie | 5.4 | 8°C |
| Saint-Romain-des-Iles | 5 | 10 | 306° NO | aucun | soleil-couvert | 0.6 | 9°C |
| Nord du Pont d'Arciat | 5 | 10 | 306° NO | aucun | soleil-couvert | 0.6 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 9 | 94° E | aucun | pluie | 3.6 | 8°C |
