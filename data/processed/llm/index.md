# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 02/10/2026 13:14 (Europe/Paris)
- Fichiers générés le : 2026-10-02T18:42:08+02:00
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
| Plage du Vengeron | 7 | 9 | 35° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 10 | 14 | 50° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 7 | 333° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac du Bourget - Cap des Séselets | 11 | 13 | 17° NNE | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 16 | 6° N | aucun | couvert | 0.2 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 22 | 356° N | aucun | pluie | 0.8 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 20 | 14° NNE | 09h-12h | soleil | 0.0 | 24°C |
| La Roche-de-Glun - Base Nautique | 7 | 16 | 350° N | aucun | soleil | 0.0 | 24°C |
| Centrale de Saint-Alban-du-Rhône | 9 | 17 | 2° N | aucun | soleil | 0.0 | 22°C |
| Nord du Pont de Chavanay | 8 | 16 | 5° N | aucun | soleil | 0.0 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 12 | 334° NNO | aucun | soleil | 0.0 | 22°C |
| Saint-Cyr-sur-le-Rhône | 6 | 13 | 6° N | aucun | soleil | 0.0 | 22°C |
| Saint-Romain-des-Iles | 8 | 14 | 25° NNE | aucun | soleil | 0.0 | 22°C |
| Nord du Pont d'Arciat | 9 | 13 | 3° N | aucun | soleil | 0.0 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 10 | 2° N | aucun | soleil | 0.0 | 20°C |

### sam. 03/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 262° O | aucun | couvert | 0.0 | 20°C |
| Plage d'Excenevex | 4 | 7 | 83° E | aucun | couvert | 0.0 | 19°C |
| Plage du Vengeron | 3 | 4 | 266° O | aucun | couvert | 0.0 | 20°C |
| Plage d'Hermance | 3 | 4 | 79° E | aucun | couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 9 | 342° NNO | aucun | couvert | 0.4 | 20°C |
| Lac du Bourget - Cap des Séselets | 4 | 8 | 350° N | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 7 | 183° S | aucun | pluie | 1.2 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 345° NNO | aucun | couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 208° SSO | aucun | couvert | 0.0 | 23°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 265° O | aucun | couvert | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 10 | 242° OSO | aucun | soleil-couvert | 0.1 | 23°C |
| Nord du Pont de Chavanay | 5 | 9 | 239° OSO | aucun | soleil-couvert | 0.3 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 31° NNE | aucun | couvert | 0.5 | 22°C |
| Saint-Cyr-sur-le-Rhône | 3 | 9 | 28° NNE | aucun | couvert | 0.3 | 23°C |
| Saint-Romain-des-Iles | 3 | 4 | 27° NNE | aucun | pluie | 6.1 | 21°C |
| Nord du Pont d'Arciat | 3 | 3 | 48° NE | aucun | pluie | 3.2 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 2 | 6 | 45° NE | aucun | pluie | 2.3 | 20°C |

### dim. 04/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 35° NE | aucun | couvert | 0.2 | 20°C |
| Plage d'Excenevex | 5 | 7 | 261° O | aucun | couvert | 0.2 | 20°C |
| Plage du Vengeron | 8 | 12 | 348° NNO | aucun | couvert | 0.1 | 22°C |
| Plage d'Hermance | 6 | 10 | 15° NNE | aucun | couvert | 0.1 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 309° NO | aucun | soleil-couvert | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 8 | 176° S | aucun | soleil-couvert | 0.0 | 23°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 7° N | aucun | soleil-couvert | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 352° N | aucun | soleil-couvert | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 15 | 203° SSO | aucun | couvert | 0.0 | 26°C |
| La Roche-de-Glun - Base Nautique | 8 | 16 | 184° S | aucun | couvert | 0.0 | 26°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 182° S | aucun | couvert | 0.0 | 26°C |
| Nord du Pont de Chavanay | 6 | 12 | 182° S | aucun | couvert | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 191° S | aucun | couvert | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 5 | 13 | 191° S | aucun | couvert | 0.0 | 25°C |
| Saint-Romain-des-Iles | 5 | 10 | 175° S | aucun | couvert | 0.0 | 25°C |
| Nord du Pont d'Arciat | 5 | 10 | 175° S | aucun | couvert | 0.0 | 25°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 6 | 13 | 183° S | aucun | couvert | 0.0 | 25°C |

### lun. 05/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 4 | 6 | 54° NE | aucun | soleil | 0.0 | 21°C |
| Plage d'Excenevex | 4 | 5 | 65° ENE | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 6 | 8 | 12° NNE | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 6 | 9 | 31° NNE | aucun | soleil | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 72° ENE | aucun | soleil | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 32° NNE | aucun | soleil | 0.0 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 10 | 9° N | aucun | soleil | 0.0 | 19°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 15 | 350° N | aucun | soleil | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 4 | 10 | 19° NNE | aucun | soleil-couvert | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 329° NNO | aucun | soleil | 0.0 | 28°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 8 | 19° NNE | aucun | soleil | 0.0 | 26°C |
| Nord du Pont de Chavanay | 4 | 8 | 19° NNE | aucun | soleil | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 11° N | aucun | soleil | 0.0 | 26°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 11° N | aucun | soleil | 0.0 | 26°C |
| Saint-Romain-des-Iles | 5 | 9 | 22° NNE | aucun | soleil | 0.0 | 25°C |
| Nord du Pont d'Arciat | 5 | 9 | 22° NNE | aucun | soleil | 0.0 | 25°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 9 | 2° N | aucun | soleil | 0.0 | 25°C |

### mar. 06/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 63° ENE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 4 | 6 | 56° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 4 | 6 | 15° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Hermance | 4 | 6 | 41° NE | aucun | soleil-couvert | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 73° ENE | aucun | soleil-couvert | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 14° NNE | aucun | soleil | 0.0 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 220° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 7 | 13 | 189° S | aucun | soleil-couvert | 0.0 | 27°C |
| Portes-lès-Valence - Parking des Surfeurs | 7 | 16 | 181° S | aucun | soleil-couvert | 0.0 | 25°C |
| La Roche-de-Glun - Base Nautique | 8 | 17 | 187° S | aucun | soleil-couvert | 0.0 | 25°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 15 | 164° SSE | aucun | soleil | 0.0 | 24°C |
| Nord du Pont de Chavanay | 6 | 15 | 164° SSE | aucun | soleil | 0.0 | 24°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 13 | 162° SSE | aucun | soleil | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 6 | 14 | 164° SSE | aucun | soleil | 0.0 | 24°C |
| Saint-Romain-des-Iles | 5 | 12 | 156° SSE | aucun | soleil | 0.0 | 24°C |
| Nord du Pont d'Arciat | 5 | 12 | 156° SSE | aucun | soleil | 0.0 | 24°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 140° SE | aucun | soleil | 0.0 | 24°C |

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 6 | 9 | 341° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 6 | 9 | 341° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 6 | 9 | 341° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Hermance | 6 | 9 | 341° NNO | aucun | soleil-couvert | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 8 | 298° ONO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 263° O | aucun | pluie | 2.9 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 12 | 326° NO | aucun | couvert | 0.0 | 17°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 10 | 358° N | aucun | couvert | 0.0 | 19°C |
| Portes-lès-Valence - Parking des Surfeurs | 9 | 22 | 202° SSO | aucun | soleil-couvert | 0.6 | 24°C |
| La Roche-de-Glun - Base Nautique | 10 | 22 | 199° SSO | aucun | soleil-couvert | 0.2 | 25°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 25 | 174° S | aucun | soleil-couvert | 0.0 | 25°C |
| Nord du Pont de Chavanay | 10 | 25 | 174° S | aucun | soleil-couvert | 0.0 | 25°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 21 | 173° S | aucun | soleil-couvert | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 10 | 24 | 173° S | aucun | soleil-couvert | 0.0 | 25°C |
| Saint-Romain-des-Iles | 7 | 15 | 163° SSE | aucun | orage | 12.8 | 23°C |
| Nord du Pont d'Arciat | 7 | 15 | 163° SSE | aucun | orage | 12.8 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 20 | 190° S | aucun | soleil-couvert | 0.0 | 25°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 13 | 22 | 31° NNE | 18h-22h | couvert | 0.5 | 13°C |
| Plage d'Excenevex | 13 | 22 | 31° NNE | 18h-22h | couvert | 0.5 | 13°C |
| Plage du Vengeron | 13 | 22 | 31° NNE | 18h-22h | couvert | 0.5 | 13°C |
| Plage d'Hermance | 13 | 22 | 31° NNE | 18h-22h | couvert | 0.5 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 20 | 352° N | aucun | orage | 16.9 | 9°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 351° N | aucun | pluie | 5.6 | 19°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 14 | 37 | 342° NNO | 16h-22h | pluie | 3.0 | 6°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 15 | 35 | 352° N | 14h-22h | pluie | 1.4 | 8°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 29 | 6° N | 18h-22h | couvert | 0.6 | 20°C |
| La Roche-de-Glun - Base Nautique | 12 | 28 | 352° N | aucun | pluie | 4.6 | 20°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 336° NNO | aucun | pluie | 8.4 | 19°C |
| Nord du Pont de Chavanay | 10 | 23 | 336° NNO | aucun | pluie | 8.4 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 24 | 333° NNO | aucun | pluie | 3.2 | 19°C |
| Saint-Cyr-sur-le-Rhône | 10 | 22 | 331° NNO | aucun | pluie | 7.0 | 19°C |
| Saint-Romain-des-Iles | 9 | 16 | 340° NNO | aucun | pluie | 7.8 | 16°C |
| Nord du Pont d'Arciat | 9 | 16 | 340° NNO | aucun | pluie | 7.8 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 8 | 22 | 339° NNO | aucun | pluie | 3.6 | 17°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 7h-22h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 26 | 43 | 38° NE | 07h-16h | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 26 | 43 | 38° NE | 07h-18h | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 26 | 43 | 38° NE | 07h-16h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 26 | 43 | 38° NE | 07h-16h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 10 | 22 | 358° N | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 6 | 17 | 32° NNE | aucun | soleil-couvert | 0.0 | 15°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 29 | 338° NNO | aucun | soleil-couvert | 0.5 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 12 | 35 | 349° N | 07h-11h | couvert | 0.5 | 10°C |
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
