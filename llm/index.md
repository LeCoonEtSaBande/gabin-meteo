# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 20/10/2026 12:12 (Europe/Paris)
- Fichiers générés le : 2026-10-20T12:15:18+02:00
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

### mar. 20/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 5 | 243° OSO | aucun | pluie | 4.7 | 14°C |
| Plage d'Excenevex | 5 | 7 | 53° NE | aucun | pluie | 3.5 | 14°C |
| Plage du Vengeron | 3 | 4 | 324° NO | aucun | pluie | 5.7 | 14°C |
| Plage d'Hermance | 3 | 5 | 103° ESE | aucun | pluie | 5.1 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 13 | 339° NNO | aucun | pluie | 7.1 | 15°C |
| Lac du Bourget - Cap des Séselets | 8 | 12 | 24° NNE | aucun | pluie | 4.3 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 28 | 208° SSO | 08h-13h | orage | 16.9 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 16 | 223° SO | aucun | orage | 37.9 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 21 | 12° NNE | aucun | orage | 24.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 12 | 346° NNO | aucun | orage | 26.1 | 16°C |
| Cruas - Nuclear Spot | 6 | 12 | 27° NNE | aucun | orage | 30.9 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 14 | 20° NNE | aucun | orage | 19.4 | 15°C |
| Nord du Pont de Chavanay | 6 | 11 | 29° NNE | aucun | orage | 20.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 353° N | aucun | orage | 18.8 | 14°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 13° NNE | aucun | pluie | 19.8 | 14°C |
| Saint-Romain-des-Iles | 9 | 16 | 308° NO | aucun | pluie | 17.8 | 14°C |
| Nord du Pont d'Arciat | 11 | 18 | 314° NO | aucun | pluie | 17.3 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 11 | 344° NNO | aucun | pluie | 17.7 | 13°C |

### mer. 21/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 27 | 222° SO | 08h-20h | pluie | 3.8 | 15°C |
| Plage d'Excenevex | 14 | 22 | 234° SO | 13h-17h | pluie | 1.2 | 14°C |
| Plage du Vengeron | 16 | 23 | 238° OSO | 12h-18h | pluie | 3.1 | 14°C |
| Plage d'Hermance | 18 | 24 | 227° SO | 11h-18h | pluie | 2.2 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 13 | 17 | 265° O | aucun | orage | 10.1 | 14°C |
| Lac du Bourget - Cap des Séselets | 6 | 14 | 191° S | aucun | orage | 8.1 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 22 | 28° NNE | aucun | pluie | 4.2 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 13° NNE | aucun | pluie | 3.3 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 197° SSO | aucun | pluie | 0.9 | 14°C |
| La Roche-de-Glun - Base Nautique | 6 | 13 | 155° SSE | aucun | pluie | 1.9 | 14°C |
| Cruas - Nuclear Spot | 5 | 14 | 15° NNE | aucun | pluie | 1.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 13 | 154° SSE | aucun | pluie | 3.4 | 13°C |
| Nord du Pont de Chavanay | 5 | 11 | 162° SSE | aucun | pluie | 3.9 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 166° SSE | aucun | pluie | 4.8 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 13 | 196° SSO | aucun | orage | 6.5 | 12°C |
| Saint-Romain-des-Iles | 9 | 14 | 188° S | aucun | pluie | 3.0 | 12°C |
| Nord du Pont d'Arciat | 9 | 14 | 192° SSO | aucun | pluie | 5.2 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 14 | 221° SO | aucun | pluie | 6.0 | 12°C |

### jeu. 22/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 10 | 211° SSO | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 8 | 10 | 257° OSO | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 4 | 5 | 194° SSO | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 6 | 9 | 214° SO | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 77° ENE | aucun | soleil | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 51° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 20 | 28° NNE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 351° N | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 15 | 358° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 13 | 348° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Cruas - Nuclear Spot | 10 | 19 | 6° N | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 7 | 118° ESE | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 3 | 7 | 118° ESE | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 6 | 108° ESE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 2 | 6 | 9° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 13 | 184° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 8 | 13 | 184° S | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 174° S | aucun | soleil-couvert | 0.0 | 14°C |

### ven. 23/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 28 | 40 | 209° SSO | 10h-20h | orage | 10.8 | 14°C |
| Plage d'Excenevex | 22 | 30 | 211° SSO | 11h-20h | orage | 7.4 | 13°C |
| Plage du Vengeron | 20 | 30 | 206° SSO | 11h-19h | pluie | 2.4 | 15°C |
| Plage d'Hermance | 22 | 34 | 211° SSO | 12h-19h | pluie | 1.5 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 11 | 17 | 214° SO | aucun | pluie | 3.6 | 15°C |
| Lac du Bourget - Cap des Séselets | 8 | 18 | 239° OSO | aucun | pluie | 8.4 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 178° S | 08h-13h | soleil-couvert | 0.2 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 16 | 161° SSE | aucun | pluie | 1.6 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 15 | 173° S | aucun | pluie | 4.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 11 | 18 | 187° S | aucun | pluie | 2.2 | 15°C |
| Cruas - Nuclear Spot | 6 | 11 | 115° ESE | aucun | pluie | 3.5 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 20 | 175° S | aucun | soleil-couvert | 0.6 | 16°C |
| Nord du Pont de Chavanay | 12 | 20 | 175° S | aucun | soleil-couvert | 0.6 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 13 | 25 | 183° S | aucun | soleil-couvert | 0.5 | 15°C |
| Saint-Cyr-sur-le-Rhône | 13 | 25 | 183° S | aucun | soleil-couvert | 0.5 | 15°C |
| Saint-Romain-des-Iles | 13 | 20 | 191° S | 12h-18h | soleil-couvert | 0.3 | 16°C |
| Nord du Pont d'Arciat | 13 | 20 | 191° S | 12h-18h | soleil-couvert | 0.3 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 17 | 30 | 189° S | 08h-12h | couvert | 0.0 | 15°C |

### sam. 24/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 224° SO | 08h-17h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 12 | 16 | 230° SO | 10h-17h | couvert | 0.0 | 11°C |
| Plage du Vengeron | 12 | 16 | 205° SSO | 08h-16h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 12 | 18 | 228° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 279° O | aucun | soleil-couvert | 0.2 | 11°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 201° SSO | aucun | pluie | 2.3 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 16° NNE | aucun | pluie | 3.0 | 4°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 21 | 360° N | aucun | orage | 7.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 18 | 10° N | aucun | soleil-couvert | 0.9 | 12°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 44° NE | aucun | soleil-couvert | 0.9 | 11°C |
| Cruas - Nuclear Spot | 7 | 21 | 41° NE | aucun | pluie | 1.8 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 12° NNE | aucun | pluie | 1.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 15 | 12° NNE | aucun | pluie | 1.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 328° NNO | aucun | soleil-couvert | 0.6 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 16 | 349° N | aucun | soleil-couvert | 0.6 | 11°C |
| Saint-Romain-des-Iles | 7 | 16 | 283° ONO | aucun | soleil-couvert | 0.6 | 12°C |
| Nord du Pont d'Arciat | 7 | 16 | 283° ONO | aucun | soleil-couvert | 0.6 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 117° ESE | aucun | soleil-couvert | 0.3 | 12°C |

### dim. 25/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 19 | 25 | 252° OSO | 08h-19h | pluie | 7.4 | 16°C |
| Plage d'Excenevex | 16 | 30 | 237° OSO | 08h-19h | pluie | 6.3 | 16°C |
| Plage du Vengeron | 16 | 30 | 237° OSO | 08h-19h | orage | 7.5 | 16°C |
| Plage d'Hermance | 16 | 30 | 237° OSO | 08h-19h | pluie | 6.7 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 15 | 166° SSE | aucun | pluie | 3.3 | 14°C |
| Lac du Bourget - Cap des Séselets | 3 | 18 | 282° ONO | aucun | pluie | 15.6 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 18 | 166° SSE | aucun | orage | 10.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 206° SSO | aucun | orage | 9.5 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 25 | 173° S | 08h-15h | pluie | 7.3 | 14°C |
| La Roche-de-Glun - Base Nautique | 15 | 31 | 192° SSO | 08h-15h | pluie | 6.4 | 13°C |
| Cruas - Nuclear Spot | 11 | 23 | 175° S | 11h-14h | pluie | 2.9 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 31 | 167° SSE | 08h-15h | pluie | 9.7 | 13°C |
| Nord du Pont de Chavanay | 14 | 31 | 167° SSE | 08h-15h | pluie | 9.7 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 17 | 34 | 170° S | 08h-13h | pluie | 8.5 | 13°C |
| Saint-Cyr-sur-le-Rhône | 14 | 30 | 160° SSE | 08h-14h | pluie | 10.2 | 13°C |
| Saint-Romain-des-Iles | 16 | 30 | 183° S | 08h-11h | pluie | 5.5 | 13°C |
| Nord du Pont d'Arciat | 16 | 30 | 183° S | 08h-11h | pluie | 5.5 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 15 | 29 | 185° S | 08h-14h | pluie | 10.4 | 12°C |

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 241° OSO | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 10 | 16 | 241° OSO | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 10 | 16 | 241° OSO | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 10 | 16 | 241° OSO | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 146° SE | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 198° SSO | aucun | pluie | 1.9 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 10 | 342° NNO | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 348° NNO | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 15° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 24° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 10 | 24 | 15° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 13 | 6° N | aucun | couvert | 0.6 | 13°C |
| Nord du Pont de Chavanay | 6 | 13 | 6° N | aucun | couvert | 0.6 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 343° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 348° NNO | aucun | couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 7 | 15 | 280° O | aucun | soleil-couvert | 0.1 | 12°C |
| Nord du Pont d'Arciat | 7 | 15 | 280° O | aucun | soleil-couvert | 0.1 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 83° E | aucun | soleil-couvert | 0.9 | 12°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 325° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 4 | 6 | 325° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 4 | 6 | 325° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 4 | 6 | 325° NO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 132° SE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 6° N | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 326° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 13 | 354° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 18 | 3° N | aucun | soleil | 0.0 | 16°C |
| La Roche-de-Glun - Base Nautique | 6 | 14 | 352° N | aucun | soleil | 0.0 | 16°C |
| Cruas - Nuclear Spot | 9 | 21 | 18° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 54° NE | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 2 | 8 | 54° NE | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 84° E | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 47° NE | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 6 | 12 | 167° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 6 | 12 | 167° SSE | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 174° S | aucun | soleil | 0.0 | 15°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 188° S | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 3 | 5 | 198° SSO | aucun | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 4 | 7 | 188° S | aucun | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 4 | 7 | 188° S | aucun | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 6 | 328° NNO | aucun | couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 13° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 20 | 355° N | aucun | soleil | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 20 | 351° N | aucun | soleil-couvert | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 22 | 3° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 10 | 20 | 358° N | aucun | soleil | 0.0 | 18°C |
| Cruas - Nuclear Spot | 10 | 22 | 3° N | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 27° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 7 | 16 | 27° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 31° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 27° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 5 | 12 | 338° NNO | aucun | soleil-couvert | 0.1 | 16°C |
| Nord du Pont d'Arciat | 5 | 12 | 338° NNO | aucun | soleil-couvert | 0.1 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 2° N | aucun | soleil-couvert | 0.0 | 16°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 74° ENE | aucun | couvert | 0.0 | 13°C |
| Plage d'Excenevex | 8 | 13 | 43° NE | aucun | couvert | 0.0 | 13°C |
| Plage du Vengeron | 8 | 12 | 74° ENE | aucun | couvert | 0.0 | 13°C |
| Plage d'Hermance | 8 | 12 | 74° ENE | aucun | couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 15 | 348° NNO | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 12 | 53° NE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 9° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 13 | 360° N | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 32 | 8° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 13 | 27 | 4° N | 11h-19h | couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 15 | 33 | 18° NNE | 08h-20h | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 21 | 355° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 8 | 21 | 355° N | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 17 | 352° N | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 350° N | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 14 | 2° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 7 | 14 | 2° N | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 18 | 354° N | aucun | couvert | 0.0 | 14°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 33° NNE | aucun | couvert | 0.0 | 14°C |
| Plage d'Excenevex | 8 | 12 | 16° NNE | aucun | couvert | 0.0 | 14°C |
| Plage du Vengeron | 9 | 14 | 33° NNE | aucun | couvert | 0.0 | 14°C |
| Plage d'Hermance | 9 | 14 | 33° NNE | aucun | couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 322° NO | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 193° SSO | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 10 | 45° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 11 | 180° S | aucun | couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 27 | 15° NNE | 08h-20h | couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 9 | 22 | 6° N | aucun | couvert | 0.0 | 13°C |
| Cruas - Nuclear Spot | 12 | 27 | 17° NNE | 08h-20h | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 19 | 358° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 19 | 358° N | aucun | couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 7 | 17 | 346° NNO | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 347° NNO | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 15 | 351° N | aucun | couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 8 | 15 | 351° N | aucun | couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 344° NNO | aucun | couvert | 0.0 | 13°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 14 | 29° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Excenevex | 9 | 13 | 21° NNE | aucun | soleil | 0.0 | 13°C |
| Plage du Vengeron | 10 | 14 | 29° NNE | aucun | soleil | 0.0 | 13°C |
| Plage d'Hermance | 10 | 14 | 29° NNE | aucun | soleil | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 288° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 214° SO | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 215° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 214° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 10° N | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 8 | 18 | 358° N | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 10 | 24 | 21° NNE | 08h-14h | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 13°C |
| Nord du Pont de Chavanay | 6 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 356° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 357° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 13 | 3° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 6 | 13 | 3° N | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 330° NNO | aucun | soleil-couvert | 0.0 | 11°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 20° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 8 | 11 | 20° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 6 | 10 | 20° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 6 | 10 | 20° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 284° ONO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 192° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 16 | 3° N | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 28 | 13° NNE | 12h-20h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 11 | 24 | 358° N | 13h-20h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 13 | 29 | 14° NNE | 13h-20h | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 20 | 3° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 8 | 20 | 3° N | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 16 | 5° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 359° N | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 6 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 6 | 13 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 15 | 348° NNO | aucun | soleil-couvert | 0.0 | 10°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 62° ENE | aucun | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 10 | 16 | 27° NNE | aucun | couvert | 0.0 | 12°C |
| Plage du Vengeron | 8 | 12 | 62° ENE | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 8 | 12 | 62° ENE | aucun | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 19 | 5° N | aucun | couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 35° NE | aucun | couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 23 | 348° NNO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 22 | 344° NNO | aucun | couvert | 0.0 | 7°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 37 | 8° N | 08h-20h | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 2° N | 08h-20h | couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 20 | 43 | 13° NNE | 08h-20h | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 28 | 351° N | 09h-20h | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 12 | 28 | 351° N | 09h-20h | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 24 | 349° N | 11h-20h | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 348° NNO | 09h-20h | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 11 | 20 | 354° N | 12h-16h | couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 11 | 20 | 354° N | 12h-16h | couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 24 | 349° N | 12h-18h | couvert | 0.0 | 10°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 38° NE | 11h-19h | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 14 | 19 | 28° NNE | 10h-20h | soleil | 0.0 | 12°C |
| Plage du Vengeron | 12 | 17 | 38° NE | 11h-19h | soleil | 0.0 | 12°C |
| Plage d'Hermance | 12 | 17 | 38° NE | 11h-19h | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 24 | 9° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 9 | 23 | 27° NNE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 9 | 26 | 359° N | aucun | soleil-couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 27 | 357° N | aucun | soleil-couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 40 | 1° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 16 | 33 | 357° N | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 19 | 44 | 8° N | 08h-20h | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 27 | 345° NNO | 08h-19h | couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 12 | 27 | 345° NNO | 08h-19h | couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 23 | 345° NNO | 08h-16h | couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 12 | 27 | 344° NNO | 09h-19h | couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 9 | 17 | 2° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 9 | 17 | 2° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 24 | 349° N | 13h-16h | soleil-couvert | 0.0 | 12°C |
