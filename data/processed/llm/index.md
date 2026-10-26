# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 26/10/2026 22:42 (Europe/Paris)
- Fichiers générés le : 2026-10-26T22:45:58+01:00
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

### lun. 26/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 203° SSO | aucun | couvert | 0.0 | 11°C |
| Plage d'Excenevex | 4 | 6 | 225° SO | aucun | couvert | 0.0 | 11°C |
| Plage du Vengeron | 3 | 5 | 24° NNE | aucun | couvert | 0.0 | 12°C |
| Plage d'Hermance | 5 | 6 | 194° SSO | aucun | couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 7 | 350° N | aucun | couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 5 | 148° SSE | aucun | soleil | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 15 | 9° N | aucun | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 334° NNO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 16 | 358° N | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 5 | 10 | 304° NO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 11 | 22 | 16° NNE | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 4 | 281° O | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 3 | 5 | 133° SE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 6 | 121° ESE | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 3 | 7 | 43° NE | aucun | soleil-couvert | 0.0 | 15°C |
| Saint-Romain-des-Iles | 4 | 9 | 175° S | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 5 | 8 | 171° S | aucun | soleil-couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 75° ENE | aucun | soleil-couvert | 0.0 | 12°C |

### mar. 27/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 218° SO | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 2 | 3 | 149° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 3 | 4 | 313° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 3 | 4 | 172° S | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 356° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 117° ESE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 347° NNO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 8 | 307° NO | aucun | soleil-couvert | 0.0 | 17°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 19 | 195° SSO | 12h-16h | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 158° SSE | aucun | soleil | 0.0 | 19°C |
| Cruas - Nuclear Spot | 8 | 15 | 192° SSO | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 165° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 3 | 5 | 184° S | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 13 | 122° ESE | aucun | soleil | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 7 | 16 | 227° SO | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 5 | 10 | 199° SSO | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 7 | 11 | 204° SSO | aucun | soleil | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 12 | 174° S | aucun | soleil | 0.0 | 16°C |

### mer. 28/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 21 | 32° NNE | 14h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Excenevex | 18 | 24 | 25° NNE | 13h-20h | soleil-couvert | 0.0 | 15°C |
| Plage du Vengeron | 14 | 19 | 28° NNE | 14h-20h | soleil-couvert | 0.0 | 15°C |
| Plage d'Hermance | 12 | 19 | 36° NE | 15h-20h | soleil-couvert | 0.0 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 13 | 311° NO | aucun | soleil-couvert | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 11 | 14 | 358° N | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 10 | 19 | 15° NNE | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 348° NNO | aucun | couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 19 | 30 | 2° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 17 | 27 | 355° N | 11h-18h | couvert | 0.0 | 16°C |
| Cruas - Nuclear Spot | 18 | 36 | 18° NNE | 08h-20h | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 24 | 352° N | 09h-20h | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 12 | 22 | 353° N | 10h-17h | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 19 | 352° N | aucun | soleil | 0.0 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 19 | 352° N | aucun | soleil | 0.0 | 15°C |
| Saint-Romain-des-Iles | 11 | 18 | 21° NNE | 13h-16h | soleil | 0.0 | 14°C |
| Nord du Pont d'Arciat | 11 | 17 | 20° NNE | 12h-17h | soleil | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 21 | 351° N | 10h-17h | soleil | 0.0 | 14°C |

### jeu. 29/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 16 | 22 | 39° NE | 08h-13h | couvert | 0.0 | 12°C |
| Plage d'Excenevex | 16 | 22 | 29° NNE | 08h-13h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 12 | 17 | 44° NE | 08h-12h | couvert | 0.0 | 12°C |
| Plage d'Hermance | 12 | 18 | 49° NE | 08h-12h | couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 309° NO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 7 | 16 | 46° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 7 | 360° N | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 350° N | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 17 | 358° N | aucun | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 8 | 13 | 346° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Cruas - Nuclear Spot | 11 | 23 | 19° NNE | 08h-13h | soleil | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 30° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 7 | 15 | 30° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 12° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 6 | 12 | 12° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 7 | 12 | 52° NE | aucun | couvert | 0.0 | 12°C |
| Nord du Pont d'Arciat | 7 | 12 | 52° NE | aucun | couvert | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 9 | 23° NNE | aucun | soleil-couvert | 0.0 | 12°C |

### ven. 30/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 18 | 35° NE | 13h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 16 | 22 | 19° NNE | 08h-20h | couvert | 0.0 | 12°C |
| Plage du Vengeron | 11 | 14 | 37° NE | 14h-20h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 11 | 16 | 41° NE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 298° ONO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 7 | 13 | 55° NE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 13 | 27° NNE | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 12 | 340° NNO | aucun | soleil | 0.0 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 8 | 32° NNE | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 321° NO | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 5 | 8 | 21° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 8 | 10° N | aucun | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 5 | 8 | 10° N | aucun | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 8 | 8° N | aucun | soleil | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 4 | 8 | 8° N | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 5 | 10 | 50° NE | aucun | soleil | 0.0 | 12°C |
| Nord du Pont d'Arciat | 5 | 10 | 50° NE | aucun | soleil | 0.0 | 12°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 8 | 7° N | aucun | soleil | 0.0 | 14°C |

### sam. 31/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 15 | 31° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 9 | 12 | 27° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 9 | 15 | 31° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 9 | 15 | 31° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 4 | 283° ONO | aucun | soleil-couvert | 0.0 | 14°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 30° NNE | aucun | soleil | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 6 | 183° S | aucun | soleil | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 344° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 3 | 10 | 14° NNE | aucun | soleil | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 9° N | aucun | soleil | 0.0 | 15°C |
| Cruas - Nuclear Spot | 4 | 10 | 24° NNE | aucun | soleil | 0.0 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 47° NE | aucun | soleil | 0.0 | 14°C |
| Nord du Pont de Chavanay | 2 | 8 | 47° NE | aucun | soleil | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 29° NNE | aucun | soleil-couvert | 0.0 | 13°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 28° NNE | aucun | soleil | 0.0 | 14°C |
| Saint-Romain-des-Iles | 3 | 8 | 148° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 3 | 8 | 148° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 354° N | aucun | soleil-couvert | 0.0 | 14°C |

### dim. 01/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 19 | 43° NE | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Plage d'Excenevex | 12 | 19 | 43° NE | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Plage du Vengeron | 12 | 19 | 43° NE | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Plage d'Hermance | 12 | 19 | 43° NE | 08h-18h | soleil-couvert | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 342° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 3 | 7 | 29° NNE | aucun | soleil | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 6 | 328° NNO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 6 | 27° NNE | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 17 | 356° N | aucun | soleil | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 342° NNO | aucun | soleil | 0.0 | 14°C |
| Cruas - Nuclear Spot | 8 | 18 | 3° N | aucun | soleil | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 355° N | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 5 | 12 | 355° N | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 341° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 348° NNO | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 4 | 9 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 4 | 9 | 43° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 355° N | aucun | couvert | 0.0 | 11°C |

### lun. 02/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 23 | 38° NE | 10h-20h | soleil | 0.0 | 12°C |
| Plage d'Excenevex | 14 | 23 | 38° NE | 10h-20h | soleil | 0.0 | 12°C |
| Plage du Vengeron | 14 | 23 | 38° NE | 10h-20h | soleil | 0.0 | 12°C |
| Plage d'Hermance | 14 | 23 | 38° NE | 10h-20h | soleil | 0.0 | 12°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 340° NNO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 39° NE | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 9 | 337° NNO | aucun | couvert | 0.0 | 7°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 8 | 25° NNE | aucun | couvert | 0.0 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 10° N | 09h-14h | soleil-couvert | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 3° N | aucun | soleil-couvert | 0.0 | 10°C |
| Cruas - Nuclear Spot | 11 | 26 | 24° NNE | 09h-16h | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 15 | 13° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 7 | 15 | 13° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 351° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 7 | 15 | 3° N | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 7 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont d'Arciat | 7 | 14 | 360° N | aucun | soleil-couvert | 0.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 13 | 337° NNO | aucun | couvert | 0.0 | 9°C |

### mar. 03/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 19 | 23° NNE | 17h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Excenevex | 12 | 18 | 19° NNE | 16h-20h | soleil-couvert | 0.0 | 9°C |
| Plage du Vengeron | 13 | 19 | 23° NNE | 17h-20h | soleil-couvert | 0.0 | 9°C |
| Plage d'Hermance | 13 | 19 | 23° NNE | 17h-20h | soleil-couvert | 0.0 | 9°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 331° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 37° NE | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 12 | 3° N | aucun | soleil | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 358° N | aucun | soleil | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 23 | 3° N | aucun | soleil | 0.0 | 11°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 355° N | aucun | soleil | 0.0 | 11°C |
| Cruas - Nuclear Spot | 10 | 23 | 15° NNE | aucun | soleil | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 18° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Nord du Pont de Chavanay | 5 | 14 | 18° NNE | aucun | soleil-couvert | 0.0 | 10°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 12 | 314° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 11° N | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Romain-des-Iles | 5 | 11 | 320° NO | aucun | couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 5 | 11 | 320° NO | aucun | couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 12 | 327° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### mer. 04/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 18 | 26 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 17 | 24 | 25° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 18 | 26 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 18 | 26 | 21° NNE | 08h-20h | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 16 | 349° N | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 11 | 16° NNE | aucun | soleil-couvert | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 10 | 2° N | aucun | soleil-couvert | 0.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 345° NNO | aucun | couvert | 0.0 | 6°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 7° N | 08h-20h | soleil-couvert | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 3° N | 10h-15h | soleil-couvert | 0.0 | 9°C |
| Cruas - Nuclear Spot | 12 | 29 | 21° NNE | 08h-20h | soleil | 0.0 | 10°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 22 | 353° N | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 9 | 22 | 353° N | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 342° NNO | aucun | soleil-couvert | 0.0 | 9°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 344° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Romain-des-Iles | 12 | 21 | 2° N | 12h-20h | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 12 | 21 | 2° N | 12h-20h | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 341° NNO | aucun | soleil-couvert | 0.0 | 9°C |

### jeu. 05/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 22 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 10 | 19 | 20° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 12 | 22 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 12 | 22 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 11 | 328° NNO | aucun | soleil | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 12 | 22° NNE | aucun | soleil | 0.0 | 9°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 11 | 21° NNE | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 17° NNE | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 18 | 359° N | aucun | soleil | 0.0 | 10°C |
| La Roche-de-Glun - Base Nautique | 5 | 13 | 330° NNO | aucun | soleil | 0.0 | 10°C |
| Cruas - Nuclear Spot | 7 | 23 | 24° NNE | aucun | soleil | 0.0 | 11°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Nord du Pont de Chavanay | 4 | 11 | 28° NNE | aucun | soleil | 0.0 | 8°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 9 | 38° NE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 4 | 11 | 26° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 9 | 320° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Nord du Pont d'Arciat | 2 | 9 | 320° NO | aucun | soleil-couvert | 0.0 | 8°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 328° NNO | aucun | soleil-couvert | 0.0 | 8°C |

### ven. 06/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 43° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Excenevex | 7 | 13 | 35° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage du Vengeron | 7 | 11 | 43° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Plage d'Hermance | 7 | 11 | 43° NE | aucun | soleil-couvert | 0.0 | 7°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 318° NO | aucun | soleil | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 27° NNE | aucun | soleil | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 9 | 4° N | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 10 | 8° N | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 6 | 2° N | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 2 | 4 | 320° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Cruas - Nuclear Spot | 2 | 9 | 9° N | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 51° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont de Chavanay | 2 | 8 | 51° NE | aucun | soleil-couvert | 0.0 | 9°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 1 | 7 | 14° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 23° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Saint-Romain-des-Iles | 2 | 8 | 122° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Nord du Pont d'Arciat | 2 | 8 | 122° ESE | aucun | soleil-couvert | 0.0 | 6°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 7 | 349° N | aucun | soleil-couvert | 0.0 | 8°C |

### sam. 07/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 10 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Excenevex | 5 | 11 | 29° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage du Vengeron | 3 | 10 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Plage d'Hermance | 3 | 10 | 31° NNE | aucun | soleil-couvert | 0.0 | 8°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 293° ONO | aucun | soleil-couvert | 0.0 | 8°C |
| Lac du Bourget - Cap des Séselets | 4 | 11 | 11° N | aucun | soleil-couvert | 0.0 | 10°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 150° SSE | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 138° SE | aucun | soleil-couvert | 0.0 | 10°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 181° S | aucun | soleil-couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 177° S | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 11 | 197° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 173° S | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont de Chavanay | 5 | 12 | 173° S | aucun | soleil-couvert | 0.0 | 11°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 11 | 177° S | aucun | soleil-couvert | 0.0 | 10°C |
| Saint-Cyr-sur-le-Rhône | 5 | 12 | 175° S | aucun | soleil-couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 5 | 10 | 164° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Nord du Pont d'Arciat | 5 | 10 | 164° SSE | aucun | soleil-couvert | 0.0 | 9°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 11 | 169° S | aucun | soleil-couvert | 0.0 | 11°C |

### dim. 08/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 10 | 192° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Excenevex | 8 | 12 | 209° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage du Vengeron | 7 | 10 | 192° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Plage d'Hermance | 7 | 10 | 192° SSO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 248° OSO | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 355° N | aucun | soleil-couvert | 0.0 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 143° SE | aucun | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 6 | 146° SE | aucun | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 16 | 182° S | aucun | soleil-couvert | 0.0 | 13°C |
| La Roche-de-Glun - Base Nautique | 7 | 17 | 184° S | aucun | soleil-couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 4 | 10 | 203° SSO | aucun | soleil-couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 14 | 168° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 5 | 14 | 168° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 180° S | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Cyr-sur-le-Rhône | 5 | 14 | 168° SSE | aucun | soleil-couvert | 0.0 | 12°C |
| Saint-Romain-des-Iles | 5 | 10 | 158° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Nord du Pont d'Arciat | 5 | 10 | 158° SSE | aucun | soleil-couvert | 0.0 | 11°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 185° S | aucun | soleil-couvert | 0.0 | 12°C |

### lun. 09/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 17 | 208° SSO | 08h-20h | pluie | 4.5 | 11°C |
| Plage d'Excenevex | 15 | 19 | 212° SSO | 08h-20h | pluie | 2.8 | 11°C |
| Plage du Vengeron | 12 | 17 | 208° SSO | 08h-20h | pluie | 4.5 | 11°C |
| Plage d'Hermance | 12 | 17 | 208° SSO | 08h-20h | pluie | 4.5 | 11°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 13 | 129° SE | aucun | pluie | 2.5 | 8°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 225° SO | aucun | pluie | 2.5 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 184° S | aucun | couvert | 0.1 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 6 | 167° SSE | aucun | couvert | 0.1 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 12 | 184° S | aucun | couvert | 0.0 | 12°C |
| La Roche-de-Glun - Base Nautique | 7 | 14 | 186° S | aucun | couvert | 0.0 | 12°C |
| Cruas - Nuclear Spot | 3 | 8 | 198° SSO | aucun | couvert | 0.0 | 12°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 180° S | aucun | couvert | 0.0 | 12°C |
| Nord du Pont de Chavanay | 6 | 15 | 180° S | aucun | couvert | 0.0 | 12°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 16 | 167° SSE | aucun | couvert | 0.0 | 11°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 180° S | aucun | couvert | 0.0 | 11°C |
| Saint-Romain-des-Iles | 5 | 12 | 186° S | aucun | pluie | 2.0 | 10°C |
| Nord du Pont d'Arciat | 5 | 12 | 186° S | aucun | pluie | 2.0 | 10°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 15 | 193° SSO | aucun | couvert | 0.2 | 11°C |

### mar. 10/11/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 20 | 198° SSO | aucun | pluie | 13.8 |  |
| Plage d'Excenevex | 16 | 24 | 207° SSO | aucun | pluie | 10.2 |  |
| Plage du Vengeron | 14 | 20 | 198° SSO | aucun | pluie | 13.8 |  |
| Plage d'Hermance | 14 | 20 | 198° SSO | aucun | pluie | 13.8 |  |
| Lac d'Annecy - Plage de Sévrier | 8 | 22 | 305° NO | aucun | pluie | 9.6 |  |
| Lac du Bourget - Cap des Séselets | 6 | 18 | 304° NO | aucun | pluie | 6.0 |  |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 103° ESE | aucun | pluie | 7.8 |  |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 7 | 102° ESE | aucun | pluie | 7.8 |  |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 191° S | aucun | pluie | 1.8 |  |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 198° SSO | aucun | pluie | 2.4 |  |
| Cruas - Nuclear Spot | 3 | 8 | 207° SSO | aucun | pluie | 3.0 |  |
| Centrale de Saint-Alban-du-Rhône | 9 | 19 | 348° NNO | aucun | pluie | 3.0 |  |
| Nord du Pont de Chavanay | 9 | 19 | 348° NNO | aucun | pluie | 3.0 |  |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 23 | 335° NNO | aucun | pluie | 1.2 |  |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 338° NNO | aucun | pluie | 2.4 |  |
| Saint-Romain-des-Iles | 8 | 21 | 321° NO | aucun | pluie | 3.6 |  |
| Nord du Pont d'Arciat | 8 | 21 | 321° NO | aucun | pluie | 3.6 |  |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 25 | 334° NNO | aucun | pluie | 3.6 |  |
