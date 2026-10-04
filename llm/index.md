# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 04/10/2026 22:22 (Europe/Paris)
- Fichiers générés le : 2026-10-04T22:26:59+02:00
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

### dim. 04/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 7 | 73° ENE | aucun | couvert | 0.0 | 21°C |
| Plage d'Excenevex | 7 | 10 | 45° NE | aucun | couvert | 0.0 | 20°C |
| Plage du Vengeron | 7 | 9 | 22° NNE | aucun | couvert | 0.1 | 21°C |
| Plage d'Hermance | 7 | 10 | 14° NNE | aucun | couvert | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 12 | 300° ONO | aucun | couvert | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 6 | 8 | 26° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 6° N | aucun | couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 19 | 360° N | aucun | couvert | 0.0 | 23°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 9 | 198° SSO | aucun | soleil-couvert | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 3 | 11 | 108° ESE | aucun | soleil | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 12 | 49° NE | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont de Chavanay | 7 | 12 | 36° NE | aucun | soleil-couvert | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 8 | 74° ENE | aucun | soleil-couvert | 0.1 | 25°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 31° NNE | aucun | soleil-couvert | 0.3 | 26°C |
| Saint-Romain-des-Iles | 5 | 11 | 206° SSO | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont d'Arciat | 5 | 6 | 36° NE | aucun | soleil-couvert | 0.0 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 7 | 15° NNE | aucun | soleil-couvert | 0.0 | 22°C |

### lun. 05/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 12 | 351° N | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Excenevex | 6 | 8 | 340° NNO | aucun | soleil-couvert | 0.0 | 21°C |
| Plage du Vengeron | 6 | 8 | 42° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Hermance | 5 | 7 | 6° N | aucun | soleil-couvert | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 281° O | aucun | soleil | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 155° SSE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 12° NNE | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 19 | 4° N | aucun | soleil-couvert | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 69° ENE | aucun | soleil | 0.0 | 28°C |
| La Roche-de-Glun - Base Nautique | 3 | 9 | 322° NO | aucun | soleil | 0.0 | 28°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 12 | 29° NNE | aucun | soleil | 0.0 | 26°C |
| Nord du Pont de Chavanay | 6 | 12 | 28° NNE | aucun | soleil | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 18° NNE | aucun | soleil | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 4 | 9 | 43° NE | aucun | soleil | 0.0 | 26°C |
| Saint-Romain-des-Iles | 5 | 9 | 18° NNE | aucun | soleil | 0.0 | 25°C |
| Nord du Pont d'Arciat | 7 | 10 | 29° NNE | aucun | soleil | 0.0 | 24°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 7 | 23° NNE | aucun | soleil | 0.0 | 23°C |

### mar. 06/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 8 | 49° NE | aucun | soleil | 0.0 | 20°C |
| Plage d'Excenevex | 5 | 6 | 62° ENE | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 6 | 8 | 22° NNE | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 5 | 8 | 36° NE | aucun | soleil | 0.0 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 313° NO | aucun | soleil | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 4 | 5 | 167° SSE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 358° N | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 17 | 354° N | aucun | pluie | 1.3 | 23°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 20 | 210° SSO | aucun | soleil | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 163° SSE | aucun | soleil | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 17 | 170° S | aucun | soleil | 0.0 | 26°C |
| Nord du Pont de Chavanay | 10 | 17 | 168° SSE | aucun | soleil | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 167° SSE | aucun | soleil | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 184° S | aucun | soleil | 0.0 | 26°C |
| Saint-Romain-des-Iles | 5 | 8 | 147° SSE | aucun | soleil | 0.0 | 25°C |
| Nord du Pont d'Arciat | 4 | 7 | 149° SSE | aucun | soleil | 0.0 | 24°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 10 | 154° SSE | aucun | soleil | 0.0 | 23°C |

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 7 | 228° SO | aucun | pluie | 2.0 | 18°C |
| Plage d'Excenevex | 4 | 5 | 208° SSO | aucun | pluie | 1.9 | 18°C |
| Plage du Vengeron | 3 | 4 | 168° SSE | aucun | pluie | 2.9 | 18°C |
| Plage d'Hermance | 3 | 5 | 191° S | aucun | pluie | 2.3 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 6 | 112° ESE | aucun | pluie | 7.4 | 18°C |
| Lac du Bourget - Cap des Séselets | 5 | 12 | 241° OSO | aucun | couvert | 0.1 | 23°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 13 | 28 | 175° S | 15h-20h | orage | 23.1 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 14 | 144° SE | aucun | orage | 39.8 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 24 | 209° SSO | 13h-17h | couvert | 0.5 | 23°C |
| La Roche-de-Glun - Base Nautique | 11 | 21 | 197° SSO | 13h-17h | couvert | 0.3 | 24°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 23 | 185° S | 11h-15h | couvert | 0.0 | 24°C |
| Nord du Pont de Chavanay | 12 | 23 | 185° S | 11h-15h | couvert | 0.0 | 24°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 25 | 190° S | 12h-16h | couvert | 0.1 | 24°C |
| Saint-Cyr-sur-le-Rhône | 12 | 25 | 190° S | 12h-16h | couvert | 0.1 | 24°C |
| Saint-Romain-des-Iles | 16 | 28 | 177° S | 14h-18h | pluie | 0.6 | 26°C |
| Nord du Pont d'Arciat | 16 | 28 | 177° S | 14h-18h | pluie | 0.6 | 26°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 12 | 22 | 191° S | 12h-16h | couvert | 0.1 | 24°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 24 | 217° SO | aucun | orage | 8.7 | 15°C |
| Plage d'Excenevex | 14 | 19 | 227° SO | 08h-11h | orage | 9.7 | 15°C |
| Plage du Vengeron | 13 | 18 | 202° SSO | aucun | orage | 14.8 | 15°C |
| Plage d'Hermance | 12 | 19 | 217° SO | aucun | orage | 12.2 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 16 | 298° ONO | aucun | orage | 17.7 | 14°C |
| Lac du Bourget - Cap des Séselets | 9 | 22 | 309° NO | aucun | pluie | 10.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 27 | 355° N | 14h-20h | orage | 8.1 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 11 | 20 | 3° N | aucun | pluie | 3.1 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 22 | 11° N | 16h-20h | pluie | 2.4 | 19°C |
| La Roche-de-Glun - Base Nautique | 12 | 21 | 359° N | 15h-20h | orage | 4.7 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 14 | 27 | 332° NNO | 14h-18h | pluie | 1.0 | 16°C |
| Nord du Pont de Chavanay | 14 | 27 | 332° NNO | 14h-18h | pluie | 1.0 | 16°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 21 | 326° NO | aucun | pluie | 4.1 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 326° NO | aucun | pluie | 4.1 | 15°C |
| Saint-Romain-des-Iles | 15 | 25 | 343° NNO | 13h-16h | orage | 6.3 | 14°C |
| Nord du Pont d'Arciat | 15 | 25 | 343° NNO | 13h-16h | orage | 6.3 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 14 | 25 | 347° NNO | 14h-18h | pluie | 2.8 | 15°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 17 | 227° SO | aucun | pluie | 1.8 | 13°C |
| Plage d'Excenevex | 10 | 17 | 227° SO | aucun | pluie | 1.8 | 13°C |
| Plage du Vengeron | 10 | 17 | 227° SO | aucun | pluie | 1.8 | 13°C |
| Plage d'Hermance | 10 | 17 | 227° SO | aucun | pluie | 1.8 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 5 | 281° O | aucun | couvert | 0.0 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 17 | 31° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 24 | 20° NNE | 09h-15h | couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 13 | 23 | 351° N | 11h-14h | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 16 | 38 | 9° N | 08h-20h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 15 | 31 | 348° NNO | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 26 | 354° N | 10h-17h | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 11 | 26 | 354° N | 10h-17h | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 335° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 11 | 26 | 354° N | 11h-16h | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 8 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 8 | 14 | 347° NNO | aucun | soleil-couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 338° NNO | aucun | soleil-couvert | 0.0 | 14°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 243° OSO | aucun | pluie | 4.2 | 15°C |
| Plage d'Excenevex | 10 | 16 | 243° OSO | aucun | pluie | 4.2 | 15°C |
| Plage du Vengeron | 10 | 16 | 243° OSO | aucun | pluie | 4.2 | 15°C |
| Plage d'Hermance | 10 | 16 | 243° OSO | aucun | pluie | 4.2 | 15°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 7 | 196° SSO | aucun | pluie | 7.2 | 12°C |
| Lac du Bourget - Cap des Séselets | 3 | 10 | 187° S | aucun | soleil | 0.0 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 13 | 334° NNO | aucun | pluie | 1.5 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 7° N | aucun | couvert | 0.6 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 27 | 5° N | 11h-19h | soleil | 0.0 | 17°C |
| La Roche-de-Glun - Base Nautique | 11 | 22 | 4° N | aucun | soleil | 0.0 | 17°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont de Chavanay | 7 | 16 | 7° N | aucun | soleil-couvert | 0.0 | 17°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 13 | 24° NNE | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Cyr-sur-le-Rhône | 6 | 16 | 5° N | aucun | soleil-couvert | 0.0 | 16°C |
| Saint-Romain-des-Iles | 6 | 12 | 302° ONO | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 6 | 12 | 302° ONO | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 10 | 22° NNE | aucun | soleil-couvert | 0.0 | 16°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 276° O | aucun | soleil-couvert | 0.1 | 16°C |
| Plage d'Excenevex | 10 | 16 | 276° O | aucun | soleil-couvert | 0.1 | 16°C |
| Plage du Vengeron | 10 | 16 | 276° O | aucun | soleil-couvert | 0.1 | 16°C |
| Plage d'Hermance | 10 | 16 | 276° O | aucun | soleil-couvert | 0.1 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 10 | 302° ONO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 1 | 7 | 16° NNE | aucun | soleil-couvert | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 18 | 322° NO | aucun | soleil-couvert | 0.0 | 11°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 17 | 353° N | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 18 | 4° N | aucun | soleil-couvert | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 5 | 15 | 348° NNO | aucun | soleil-couvert | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 12 | 41° NE | aucun | couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 3 | 12 | 41° NE | aucun | couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 53° NE | aucun | couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 22° NNE | aucun | couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 4 | 9 | 139° SE | aucun | soleil-couvert | 0.0 | 17°C |
| Nord du Pont d'Arciat | 4 | 9 | 139° SE | aucun | soleil-couvert | 0.0 | 17°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 165° SSE | aucun | couvert | 0.0 | 18°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 10 | 217° SO | aucun | couvert | 0.0 | 20°C |
| Plage d'Excenevex | 5 | 9 | 211° SSO | aucun | couvert | 0.0 | 19°C |
| Plage du Vengeron | 6 | 10 | 217° SO | aucun | couvert | 0.0 | 20°C |
| Plage d'Hermance | 6 | 10 | 217° SO | aucun | couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 262° O | aucun | couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 245° OSO | aucun | couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 8 | 171° S | aucun | couvert | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 7 | 172° S | aucun | couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 183° S | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 9 | 19 | 186° S | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 13 | 166° SSE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 5 | 13 | 166° SSE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 162° SSE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 171° S | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 3 | 9 | 140° SE | aucun | couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 3 | 9 | 140° SE | aucun | couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 12 | 181° S | aucun | soleil-couvert | 0.0 | 21°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 170° S | aucun | couvert | 0.0 | 20°C |
| Plage d'Excenevex | 2 | 5 | 40° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 2 | 5 | 170° S | aucun | couvert | 0.0 | 20°C |
| Plage d'Hermance | 2 | 5 | 170° S | aucun | couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 252° OSO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 3 | 9 | 231° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 5 | 180° S | aucun | soleil-couvert | 0.0 | 22°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 5 | 180° S | aucun | soleil-couvert | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 20 | 188° S | aucun | soleil-couvert | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 10 | 21 | 186° S | aucun | soleil-couvert | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 17 | 171° S | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont de Chavanay | 7 | 17 | 171° S | aucun | soleil-couvert | 0.0 | 20°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 15 | 173° S | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 177° S | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Romain-des-Iles | 5 | 11 | 164° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Nord du Pont d'Arciat | 5 | 11 | 164° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 15 | 178° S | aucun | couvert | 0.0 | 21°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 5 | 254° OSO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 3 | 6 | 256° OSO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 3 | 5 | 254° OSO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 3 | 5 | 254° OSO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 318° NO | aucun | soleil | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 33° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 16° NNE | aucun | soleil | 0.0 | 22°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 354° N | aucun | soleil | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 2 | 7 | 3° N | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 1 | 7 | 323° NO | aucun | soleil-couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 7 | 67° ENE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 2 | 7 | 67° ENE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 28° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 2 | 8 | 39° NE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 2 | 7 | 105° ESE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont d'Arciat | 2 | 7 | 105° ESE | aucun | soleil | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 5 | 169° S | aucun | soleil-couvert | 0.0 | 19°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 7 | 22° NNE | aucun | soleil | 0.0 | 20°C |
| Plage d'Excenevex | 6 | 9 | 27° NNE | aucun | soleil | 0.0 | 19°C |
| Plage du Vengeron | 4 | 7 | 22° NNE | aucun | soleil | 0.0 | 20°C |
| Plage d'Hermance | 4 | 7 | 22° NNE | aucun | soleil | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 265° O | aucun | soleil | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 191° S | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 15 | 1° N | aucun | soleil | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 14 | 3° N | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 26 | 6° N | 13h-20h | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 9 | 21 | 2° N | aucun | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 18 | 7° N | aucun | soleil | 0.0 | 22°C |
| Nord du Pont de Chavanay | 7 | 18 | 7° N | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 14 | 13° NNE | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 1° N | aucun | soleil | 0.0 | 22°C |
| Saint-Romain-des-Iles | 7 | 13 | 326° NO | aucun | soleil | 0.0 | 20°C |
| Nord du Pont d'Arciat | 7 | 13 | 326° NO | aucun | soleil | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 16 | 338° NNO | aucun | soleil-couvert | 0.0 | 20°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 12 | 18 | 44° NE | 11h-20h | soleil | 0.0 | 18°C |
| Plage d'Excenevex | 13 | 18 | 25° NNE | 08h-20h | soleil | 0.0 | 19°C |
| Plage du Vengeron | 12 | 18 | 44° NE | 11h-20h | soleil | 0.0 | 18°C |
| Plage d'Hermance | 12 | 18 | 44° NE | 11h-20h | soleil | 0.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 358° N | aucun | soleil-couvert | 0.0 | 17°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 18° NNE | aucun | soleil | 0.0 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 15 | 360° N | aucun | couvert | 0.0 | 14°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 14 | 347° NNO | aucun | couvert | 0.0 | 14°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 33 | 7° N | 08h-20h | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 5° N | 08h-20h | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 24 | 354° N | 12h-16h | couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 10 | 24 | 354° N | 12h-16h | couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 10 | 22 | 358° N | aucun | couvert | 0.0 | 18°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 352° N | 12h-15h | couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 10 | 19 | 9° N | aucun | soleil-couvert | 0.0 | 19°C |
| Nord du Pont d'Arciat | 10 | 19 | 9° N | aucun | soleil-couvert | 0.0 | 19°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 10 | 24 | 359° N | aucun | soleil-couvert | 0.0 | 18°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 14 | 19 | 13° NNE | 08h-20h | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 13 | 20 | 15° NNE | 08h-20h | soleil-couvert | 0.0 | 17°C |
| Plage du Vengeron | 14 | 19 | 13° NNE | 08h-20h | soleil | 0.0 | 17°C |
| Plage d'Hermance | 14 | 19 | 13° NNE | 08h-20h | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 341° NNO | aucun | soleil | 0.0 | 16°C |
| Lac du Bourget - Cap des Séselets | 5 | 16 | 30° NNE | aucun | soleil | 0.0 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 14° NNE | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 7° N | aucun | soleil | 0.0 | 18°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 24 | 4° N | aucun | soleil | 0.0 | 18°C |
| La Roche-de-Glun - Base Nautique | 8 | 19 | 357° N | aucun | soleil | 0.0 | 18°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 16 | 20° NNE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont de Chavanay | 6 | 16 | 20° NNE | aucun | soleil | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 12 | 15° NNE | aucun | soleil | 0.0 | 17°C |
| Saint-Cyr-sur-le-Rhône | 6 | 15 | 9° N | aucun | soleil | 0.0 | 18°C |
| Saint-Romain-des-Iles | 5 | 12 | 15° NNE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 5 | 12 | 15° NNE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 12 | 339° NNO | aucun | soleil | 0.0 | 17°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 16 | 32° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 9 | 14 | 26° NNE | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 10 | 16 | 32° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 10 | 16 | 32° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 8 | 303° ONO | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 5 | 13 | 32° NNE | aucun | soleil | 0.0 | 18°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 12 | 206° SSO | aucun | soleil | 0.0 | 22°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 12 | 208° SSO | aucun | soleil | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 18 | 169° S | aucun | soleil | 0.0 | 20°C |
| La Roche-de-Glun - Base Nautique | 6 | 19 | 177° S | aucun | soleil | 0.0 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 11 | 202° SSO | aucun | soleil | 0.0 | 19°C |
| Nord du Pont de Chavanay | 3 | 11 | 202° SSO | aucun | soleil | 0.0 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 0 | 7 | 79° E | aucun | soleil | 0.0 | 19°C |
| Saint-Cyr-sur-le-Rhône | 2 | 10 | 216° SO | aucun | soleil | 0.0 | 19°C |
| Saint-Romain-des-Iles | 4 | 10 | 161° SSE | aucun | soleil | 0.0 | 18°C |
| Nord du Pont d'Arciat | 4 | 10 | 161° SSE | aucun | soleil | 0.0 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 9 | 68° ENE | aucun | soleil | 0.0 | 18°C |

### lun. 19/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 5 | 118° ESE | aucun | soleil | 0.0 | 17°C |
| Plage d'Excenevex | 4 | 7 | 28° NNE | aucun | soleil | 0.0 | 17°C |
| Plage du Vengeron | 2 | 5 | 118° ESE | aucun | soleil | 0.0 | 17°C |
| Plage d'Hermance | 2 | 5 | 118° ESE | aucun | soleil | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 9 | 266° O | aucun | soleil | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 3 | 6 | 18° NNE | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 1 | 7 | 75° ENE | aucun | soleil | 0.0 | 20°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 1 | 4 | 158° SSE | aucun | soleil | 0.0 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 21 | 195° SSO | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 188° S | aucun | soleil-couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 18 | 168° SSE | aucun | soleil | 0.0 | 22°C |
| Nord du Pont de Chavanay | 8 | 18 | 168° SSE | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 175° S | aucun | soleil | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 7 | 17 | 175° S | aucun | soleil | 0.0 | 21°C |
| Saint-Romain-des-Iles | 4 | 10 | 150° SSE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont d'Arciat | 4 | 10 | 150° SSE | aucun | soleil | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 14 | 183° S | aucun | soleil | 0.0 | 21°C |
