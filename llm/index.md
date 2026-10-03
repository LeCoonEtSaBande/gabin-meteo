# Gabin-meteo — prévisions de vent des spots (Rhône-Alpes / Léman)

- Prévisions collectées le : 03/10/2026 22:05 (Europe/Paris)
- Fichiers générés le : 2026-10-03T22:08:44+02:00
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
| Plage de la pointe - Messery | 3 | 4 | 57° ENE | aucun | couvert | 0.0 | 19°C |
| Plage d'Excenevex | 5 | 8 | 53° NE | aucun | couvert | 0.0 | 19°C |
| Plage du Vengeron | 4 | 5 | 43° NE | aucun | couvert | 0.0 | 19°C |
| Plage d'Hermance | 3 | 4 | 47° NE | aucun | couvert | 0.0 | 19°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 7 | 339° NNO | aucun | couvert | 0.0 | 21°C |
| Lac du Bourget - Cap des Séselets | 4 | 4 | 27° NNE | aucun | pluie | 5.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 11 | 192° SSO | aucun | couvert | 0.3 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 6 | 11 | 353° N | aucun | couvert | 0.1 | 20°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 10 | 197° SSO | aucun | soleil-couvert | 0.0 | 24°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 143° SE | aucun | soleil-couvert | 0.0 | 24°C |
| Centrale de Saint-Alban-du-Rhône | 5 | 10 | 156° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Nord du Pont de Chavanay | 4 | 9 | 168° SSE | aucun | soleil-couvert | 0.0 | 23°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 4 | 10 | 153° SSE | aucun | pluie | 1.5 | 23°C |
| Saint-Cyr-sur-le-Rhône | 5 | 11 | 192° SSO | aucun | soleil-couvert | 0.8 | 24°C |
| Saint-Romain-des-Iles | 3 | 8 | 176° S | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont d'Arciat | 4 | 8 | 174° S | aucun | soleil | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 82° E | aucun | soleil-couvert | 0.0 | 20°C |

### dim. 04/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 16 | 308° NO | aucun | pluie | 1.1 | 21°C |
| Plage d'Excenevex | 5 | 7 | 302° ONO | aucun | couvert | 0.6 | 20°C |
| Plage du Vengeron | 8 | 12 | 345° NNO | aucun | couvert | 0.0 | 22°C |
| Plage d'Hermance | 11 | 14 | 340° NNO | aucun | pluie | 1.6 | 21°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 8 | 291° ONO | aucun | couvert | 0.0 | 22°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 8° N | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 7 | 14 | 13° NNE | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 9 | 16 | 360° N | aucun | couvert | 0.0 | 23°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 7 | 345° NNO | aucun | soleil | 0.0 | 26°C |
| La Roche-de-Glun - Base Nautique | 3 | 5 | 270° O | aucun | soleil | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 6 | 39° NE | aucun | soleil | 0.0 | 25°C |
| Nord du Pont de Chavanay | 4 | 8 | 11° N | aucun | soleil | 0.0 | 25°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 4 | 124° SE | aucun | soleil | 0.0 | 25°C |
| Saint-Cyr-sur-le-Rhône | 3 | 8 | 7° N | aucun | soleil | 0.0 | 26°C |
| Saint-Romain-des-Iles | 3 | 7 | 43° NE | aucun | soleil-couvert | 0.0 | 24°C |
| Nord du Pont d'Arciat | 3 | 7 | 69° ENE | aucun | soleil-couvert | 0.0 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 38° NE | aucun | soleil | 0.0 | 22°C |

### lun. 05/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 3 | 4 | 40° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage d'Excenevex | 4 | 5 | 161° SSE | aucun | soleil-couvert | 0.0 | 20°C |
| Plage du Vengeron | 5 | 7 | 23° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Plage d'Hermance | 5 | 8 | 353° N | aucun | soleil | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 7 | 278° O | aucun | soleil | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 2 | 3 | 169° S | aucun | soleil | 0.0 | 21°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 12 | 10° N | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 10 | 18 | 350° N | aucun | soleil | 0.0 | 24°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 12 | 57° ENE | aucun | soleil | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 323° NO | aucun | soleil | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 6 | 12 | 33° NNE | aucun | soleil | 0.0 | 26°C |
| Nord du Pont de Chavanay | 6 | 12 | 23° NNE | aucun | soleil | 0.0 | 26°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 3 | 7 | 16° NNE | aucun | soleil | 0.0 | 24°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 22° NNE | aucun | soleil | 0.0 | 26°C |
| Saint-Romain-des-Iles | 5 | 8 | 25° NNE | aucun | soleil | 0.0 | 25°C |
| Nord du Pont d'Arciat | 6 | 9 | 29° NNE | aucun | soleil | 0.0 | 23°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 8 | 17° NNE | aucun | soleil | 0.0 | 22°C |

### mar. 06/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 6 | 50° NE | aucun | soleil | 0.0 | 20°C |
| Plage d'Excenevex | 4 | 6 | 82° E | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 4 | 5 | 52° NE | aucun | soleil | 0.0 | 21°C |
| Plage d'Hermance | 4 | 5 | 47° NE | aucun | soleil | 0.0 | 22°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 8 | 302° ONO | aucun | soleil | 0.0 | 23°C |
| Lac du Bourget - Cap des Séselets | 3 | 4 | 63° ENE | aucun | soleil-couvert | 0.0 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 17 | 175° S | aucun | soleil | 0.0 | 18°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 10 | 4° N | aucun | soleil-couvert | 0.0 | 22°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 21 | 207° SSO | 15h-19h | soleil-couvert | 0.0 | 27°C |
| La Roche-de-Glun - Base Nautique | 11 | 21 | 194° SSO | 15h-18h | soleil-couvert | 0.0 | 27°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 18 | 192° SSO | aucun | soleil-couvert | 0.0 | 27°C |
| Nord du Pont de Chavanay | 10 | 18 | 192° SSO | aucun | soleil-couvert | 0.0 | 27°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 198° SSO | aucun | soleil-couvert | 0.0 | 27°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 198° SSO | aucun | soleil-couvert | 0.0 | 27°C |
| Saint-Romain-des-Iles | 4 | 12 | 185° S | aucun | soleil-couvert | 0.0 | 26°C |
| Nord du Pont d'Arciat | 4 | 12 | 185° S | aucun | soleil-couvert | 0.0 | 26°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 15 | 179° S | aucun | soleil-couvert | 0.0 | 27°C |

### mer. 07/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 9 | 249° OSO | aucun | pluie | 3.7 | 19°C |
| Plage d'Excenevex | 8 | 10 | 246° OSO | aucun | pluie | 2.8 | 19°C |
| Plage du Vengeron | 5 | 8 | 219° SO | aucun | pluie | 4.9 | 19°C |
| Plage d'Hermance | 6 | 10 | 240° OSO | aucun | pluie | 4.0 | 18°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 6 | 128° SE | aucun | pluie | 5.1 | 18°C |
| Lac du Bourget - Cap des Séselets | 6 | 12 | 250° OSO | aucun | soleil-couvert | 0.2 | 24°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 11 | 22 | 188° S | aucun | orage | 15.4 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 9 | 190° S | aucun | pluie | 17.9 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 14 | 26 | 222° SO | 11h-18h | pluie | 2.2 | 22°C |
| La Roche-de-Glun - Base Nautique | 12 | 23 | 206° SSO | 11h-17h | couvert | 0.0 | 23°C |
| Centrale de Saint-Alban-du-Rhône | 15 | 28 | 201° SSO | 11h-16h | couvert | 0.2 | 22°C |
| Nord du Pont de Chavanay | 15 | 28 | 201° SSO | 11h-16h | couvert | 0.2 | 22°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 26 | 197° SSO | 12h-15h | couvert | 0.0 | 23°C |
| Saint-Cyr-sur-le-Rhône | 12 | 26 | 197° SSO | 12h-15h | couvert | 0.0 | 23°C |
| Saint-Romain-des-Iles | 17 | 28 | 183° S | 13h-19h | couvert | 0.6 | 26°C |
| Nord du Pont d'Arciat | 17 | 28 | 183° S | 13h-19h | couvert | 0.6 | 26°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 22 | 214° SO | aucun | pluie | 3.4 | 24°C |

### jeu. 08/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 14 | 356° N | aucun | pluie | 2.5 | 13°C |
| Plage d'Excenevex | 10 | 16 | 296° ONO | aucun | pluie | 2.1 | 13°C |
| Plage du Vengeron | 10 | 13 | 323° NO | aucun | pluie | 1.3 | 13°C |
| Plage d'Hermance | 9 | 14 | 356° N | aucun | pluie | 4.8 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 9 | 27 | 308° NO | aucun | orage | 21.9 | 11°C |
| Lac du Bourget - Cap des Séselets | 6 | 19 | 208° SSO | aucun | orage | 16.7 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 12 | 32 | 341° NNO | aucun | orage | 22.5 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 14 | 30 | 349° N | aucun | orage | 7.3 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 28 | 356° N | 13h-18h | soleil | 0.6 | 16°C |
| La Roche-de-Glun - Base Nautique | 13 | 28 | 349° N | 13h-18h | pluie | 1.8 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 28 | 330° NNO | 12h-17h | soleil | 0.0 | 15°C |
| Nord du Pont de Chavanay | 11 | 28 | 330° NNO | 12h-17h | soleil | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 11 | 25 | 317° NO | 11h-17h | soleil | 0.7 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 29 | 324° NO | 11h-20h | soleil | 0.4 | 14°C |
| Saint-Romain-des-Iles | 14 | 26 | 304° NO | 08h-17h | pluie | 1.4 | 13°C |
| Nord du Pont d'Arciat | 14 | 26 | 304° NO | 08h-17h | pluie | 1.4 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 11 | 26 | 307° NO | 10h-14h | soleil | 0.6 | 14°C |

### ven. 09/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 15 | 23 | 47° NE | 09h-19h | soleil-couvert | 0.0 | 14°C |
| Plage d'Excenevex | 15 | 23 | 47° NE | 09h-19h | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 15 | 23 | 47° NE | 09h-19h | soleil-couvert | 0.0 | 14°C |
| Plage d'Hermance | 15 | 23 | 47° NE | 09h-19h | soleil-couvert | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 12 | 26 | 355° N | 13h-18h | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 180° S | aucun | pluie | 1.4 | 11°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 15 | 40 | 339° NNO | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 17 | 39 | 352° N | 08h-20h | soleil-couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 13 | 27 | 9° N | 09h-17h | soleil-couvert | 0.0 | 14°C |
| La Roche-de-Glun - Base Nautique | 12 | 24 | 6° N | 10h-16h | soleil-couvert | 0.0 | 13°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 356° N | aucun | pluie | 1.8 | 13°C |
| Nord du Pont de Chavanay | 8 | 19 | 356° N | aucun | pluie | 1.8 | 13°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 18 | 345° NNO | aucun | soleil-couvert | 0.3 | 13°C |
| Saint-Cyr-sur-le-Rhône | 8 | 19 | 352° N | aucun | couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 8 | 16 | 305° NO | aucun | soleil-couvert | 0.3 | 13°C |
| Nord du Pont d'Arciat | 8 | 16 | 305° NO | aucun | soleil-couvert | 0.3 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 16 | 326° NO | aucun | couvert | 0.6 | 13°C |

### sam. 10/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 5 | 8 | 222° SO | aucun | couvert | 0.3 | 14°C |
| Plage d'Excenevex | 5 | 8 | 222° SO | aucun | couvert | 0.3 | 14°C |
| Plage du Vengeron | 5 | 8 | 222° SO | aucun | couvert | 0.3 | 14°C |
| Plage d'Hermance | 5 | 8 | 222° SO | aucun | couvert | 0.3 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 5 | 139° SE | aucun | soleil-couvert | 0.1 | 12°C |
| Lac du Bourget - Cap des Séselets | 2 | 6 | 237° OSO | aucun | pluie | 2.2 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 21 | 329° NNO | aucun | soleil-couvert | 0.0 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 23 | 345° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 46° NE | aucun | soleil-couvert | 0.0 | 19°C |
| La Roche-de-Glun - Base Nautique | 4 | 10 | 72° ENE | aucun | soleil-couvert | 0.0 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 131° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Nord du Pont de Chavanay | 4 | 11 | 131° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 11 | 143° SE | aucun | couvert | 0.6 | 17°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 138° SE | aucun | soleil-couvert | 0.0 | 18°C |
| Saint-Romain-des-Iles | 5 | 11 | 186° S | aucun | pluie | 3.4 | 16°C |
| Nord du Pont d'Arciat | 5 | 11 | 186° S | aucun | pluie | 3.4 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 10 | 134° SE | aucun | pluie | 1.4 | 15°C |

### dim. 11/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 209° SSO | aucun | soleil-couvert | 0.2 | 16°C |
| Plage d'Excenevex | 6 | 9 | 200° SSO | aucun | soleil-couvert | 0.1 | 15°C |
| Plage du Vengeron | 7 | 11 | 209° SSO | aucun | soleil-couvert | 0.2 | 16°C |
| Plage d'Hermance | 7 | 11 | 209° SSO | aucun | soleil-couvert | 0.2 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 5 | 14 | 256° OSO | aucun | soleil-couvert | 0.0 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 233° SO | aucun | soleil-couvert | 0.1 | 17°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 16 | 355° N | aucun | soleil-couvert | 0.1 | 15°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 16 | 347° NNO | aucun | soleil-couvert | 0.1 | 15°C |
| Portes-lès-Valence - Parking des Surfeurs | 8 | 19 | 1° N | aucun | soleil-couvert | 0.1 | 20°C |
| La Roche-de-Glun - Base Nautique | 7 | 15 | 344° NNO | aucun | soleil-couvert | 0.1 | 19°C |
| Centrale de Saint-Alban-du-Rhône | 4 | 11 | 41° NE | aucun | couvert | 0.3 | 18°C |
| Nord du Pont de Chavanay | 4 | 11 | 41° NE | aucun | couvert | 0.3 | 18°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 7 | 58° ENE | aucun | pluie | 0.5 | 17°C |
| Saint-Cyr-sur-le-Rhône | 4 | 10 | 38° NE | aucun | couvert | 0.4 | 17°C |
| Saint-Romain-des-Iles | 5 | 10 | 138° SE | aucun | couvert | 0.0 | 16°C |
| Nord du Pont d'Arciat | 5 | 10 | 138° SE | aucun | couvert | 0.0 | 16°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 8 | 21° NNE | aucun | couvert | 0.1 | 17°C |

### lun. 12/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 7 | 11 | 214° SO | aucun | pluie | 1.0 | 16°C |
| Plage d'Excenevex | 6 | 10 | 222° SO | aucun | soleil-couvert | 0.9 | 16°C |
| Plage du Vengeron | 7 | 11 | 214° SO | aucun | pluie | 1.0 | 16°C |
| Plage d'Hermance | 7 | 11 | 214° SO | aucun | pluie | 1.0 | 16°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 7 | 263° O | aucun | pluie | 2.1 | 15°C |
| Lac du Bourget - Cap des Séselets | 2 | 7 | 353° N | aucun | pluie | 1.9 | 16°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 3 | 11 | 7° N | aucun | soleil-couvert | 0.6 | 16°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 9° N | aucun | soleil-couvert | 0.0 | 16°C |
| Portes-lès-Valence - Parking des Surfeurs | 5 | 14 | 18° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| La Roche-de-Glun - Base Nautique | 4 | 11 | 12° NNE | aucun | couvert | 0.0 | 21°C |
| Centrale de Saint-Alban-du-Rhône | 2 | 8 | 99° E | aucun | soleil-couvert | 0.6 | 19°C |
| Nord du Pont de Chavanay | 2 | 8 | 99° E | aucun | soleil-couvert | 0.6 | 19°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 5 | 162° SSE | aucun | pluie | 1.3 | 18°C |
| Saint-Cyr-sur-le-Rhône | 2 | 7 | 122° ESE | aucun | soleil-couvert | 0.6 | 19°C |
| Saint-Romain-des-Iles | 3 | 8 | 174° S | aucun | pluie | 1.6 | 18°C |
| Nord du Pont d'Arciat | 3 | 8 | 174° S | aucun | pluie | 1.6 | 18°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 6 | 130° SE | aucun | pluie | 1.9 | 17°C |

### mar. 13/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 2 | 7 | 34° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Excenevex | 2 | 7 | 51° NE | aucun | soleil-couvert | 0.0 | 18°C |
| Plage du Vengeron | 2 | 7 | 34° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Plage d'Hermance | 2 | 7 | 34° NE | aucun | soleil-couvert | 0.0 | 17°C |
| Lac d'Annecy - Plage de Sévrier | 2 | 9 | 298° ONO | aucun | soleil-couvert | 0.0 | 18°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 45° NE | aucun | soleil-couvert | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 8 | 234° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 9 | 236° SO | aucun | soleil-couvert | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 6 | 14 | 8° N | aucun | soleil-couvert | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 5 | 12 | 354° N | aucun | soleil-couvert | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 3 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Nord du Pont de Chavanay | 3 | 10 | 27° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 2 | 8 | 17° NNE | aucun | soleil-couvert | 0.0 | 20°C |
| Saint-Cyr-sur-le-Rhône | 3 | 10 | 13° NNE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 2 | 7 | 131° SE | aucun | soleil | 0.0 | 20°C |
| Nord du Pont d'Arciat | 2 | 7 | 131° SE | aucun | soleil | 0.0 | 20°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 3 | 5 | 152° SSE | aucun | soleil | 0.0 | 21°C |

### mer. 14/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 8 | 12 | 196° SSO | aucun | soleil | 0.0 | 20°C |
| Plage d'Excenevex | 8 | 15 | 230° SO | aucun | soleil | 0.0 | 20°C |
| Plage du Vengeron | 8 | 12 | 196° SSO | aucun | soleil | 0.0 | 20°C |
| Plage d'Hermance | 8 | 12 | 196° SSO | aucun | soleil | 0.0 | 20°C |
| Lac d'Annecy - Plage de Sévrier | 3 | 10 | 250° OSO | aucun | soleil | 0.0 | 19°C |
| Lac du Bourget - Cap des Séselets | 2 | 9 | 220° SO | aucun | soleil | 0.0 | 20°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 6 | 16 | 203° SSO | aucun | soleil | 0.0 | 21°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 5 | 15 | 206° SSO | aucun | soleil | 0.0 | 21°C |
| Portes-lès-Valence - Parking des Surfeurs | 11 | 24 | 190° S | 13h-16h | soleil | 0.0 | 22°C |
| La Roche-de-Glun - Base Nautique | 12 | 25 | 186° S | 10h-20h | soleil | 0.0 | 22°C |
| Centrale de Saint-Alban-du-Rhône | 10 | 23 | 164° SSE | aucun | soleil | 0.0 | 21°C |
| Nord du Pont de Chavanay | 10 | 23 | 164° SSE | aucun | soleil | 0.0 | 21°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 9 | 20 | 169° S | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Cyr-sur-le-Rhône | 10 | 21 | 167° SSE | aucun | soleil-couvert | 0.0 | 21°C |
| Saint-Romain-des-Iles | 6 | 12 | 159° SSE | aucun | pluie | 8.4 | 21°C |
| Nord du Pont d'Arciat | 6 | 12 | 159° SSE | aucun | pluie | 8.4 | 21°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 7 | 17 | 189° S | aucun | soleil | 0.0 | 21°C |

### jeu. 15/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 9 | 15 | 32° NNE | aucun | soleil | 0.9 | 14°C |
| Plage d'Excenevex | 11 | 17 | 32° NNE | aucun | soleil | 0.8 | 14°C |
| Plage du Vengeron | 9 | 15 | 32° NNE | aucun | soleil | 0.9 | 14°C |
| Plage d'Hermance | 9 | 15 | 32° NNE | aucun | soleil | 0.9 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 7 | 18 | 6° N | aucun | pluie | 2.1 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 13 | 10° N | aucun | pluie | 10.3 | 12°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 8 | 24 | 1° N | aucun | pluie | 1.7 | 10°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 8 | 26 | 358° N | aucun | pluie | 1.6 | 11°C |
| Portes-lès-Valence - Parking des Surfeurs | 15 | 31 | 355° N | 12h-20h | soleil | 0.9 | 16°C |
| La Roche-de-Glun - Base Nautique | 15 | 29 | 348° NNO | 12h-20h | soleil | 0.9 | 16°C |
| Centrale de Saint-Alban-du-Rhône | 11 | 25 | 343° NNO | aucun | pluie | 3.4 | 15°C |
| Nord du Pont de Chavanay | 11 | 25 | 343° NNO | aucun | pluie | 3.4 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 8 | 22 | 332° NNO | aucun | pluie | 1.8 | 15°C |
| Saint-Cyr-sur-le-Rhône | 10 | 23 | 335° NNO | aucun | pluie | 3.3 | 15°C |
| Saint-Romain-des-Iles | 8 | 18 | 343° NNO | aucun | pluie | 1.2 | 14°C |
| Nord du Pont d'Arciat | 8 | 18 | 343° NNO | aucun | pluie | 1.2 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 9 | 21 | 343° NNO | aucun | pluie | 1.2 | 15°C |

### ven. 16/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 20 | 29 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 22 | 30 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 14°C |
| Plage du Vengeron | 20 | 29 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 20 | 29 | 30° NNE | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 8 | 19 | 6° N | aucun | soleil-couvert | 0.1 | 12°C |
| Lac du Bourget - Cap des Séselets | 9 | 23 | 34° NE | aucun | soleil-couvert | 0.0 | 13°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 5 | 14 | 348° NNO | aucun | couvert | 0.0 | 8°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 4 | 15 | 349° N | aucun | couvert | 0.0 | 9°C |
| Portes-lès-Valence - Parking des Surfeurs | 17 | 39 | 1° N | 08h-20h | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 15 | 34 | 352° N | 08h-20h | soleil-couvert | 0.1 | 14°C |
| Centrale de Saint-Alban-du-Rhône | 12 | 32 | 348° NNO | 08h-17h | couvert | 0.6 | 14°C |
| Nord du Pont de Chavanay | 12 | 32 | 348° NNO | 08h-17h | couvert | 0.6 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 12 | 28 | 352° N | 08h-18h | couvert | 0.6 | 14°C |
| Saint-Cyr-sur-le-Rhône | 12 | 30 | 347° NNO | 08h-17h | couvert | 0.6 | 13°C |
| Saint-Romain-des-Iles | 16 | 29 | 17° NNE | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Nord du Pont d'Arciat | 16 | 29 | 17° NNE | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 13 | 29 | 359° N | 08h-17h | soleil-couvert | 0.0 | 14°C |

### sam. 17/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 11 | 16 | 18° NNE | 17h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Excenevex | 11 | 16 | 14° NNE | 08h-20h | soleil-couvert | 0.0 | 13°C |
| Plage du Vengeron | 11 | 16 | 18° NNE | 17h-20h | soleil-couvert | 0.0 | 13°C |
| Plage d'Hermance | 11 | 16 | 18° NNE | 17h-20h | soleil-couvert | 0.0 | 13°C |
| Lac d'Annecy - Plage de Sévrier | 6 | 15 | 344° NNO | aucun | soleil-couvert | 0.0 | 12°C |
| Lac du Bourget - Cap des Séselets | 4 | 10 | 31° NNE | aucun | couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 4 | 13 | 11° N | aucun | couvert | 0.0 | 12°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 3 | 12 | 9° N | aucun | couvert | 0.0 | 12°C |
| Portes-lès-Valence - Parking des Surfeurs | 12 | 28 | 9° N | 09h-20h | couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 11 | 23 | 9° N | 12h-19h | couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 8 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 14°C |
| Nord du Pont de Chavanay | 8 | 19 | 351° N | aucun | soleil-couvert | 0.0 | 14°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 6 | 14 | 348° NNO | aucun | couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 8 | 18 | 343° NNO | aucun | couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 14 | 11° N | aucun | couvert | 0.0 | 14°C |
| Nord du Pont d'Arciat | 7 | 14 | 11° N | aucun | couvert | 0.0 | 14°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 5 | 15 | 330° NNO | aucun | couvert | 0.0 | 14°C |

### dim. 18/10/2026

| Spot | Moy. max | Raf. | Dir. | Créneau | Icône | Pluie sur le créneau, sinon 8h-20h (mm) | T° 15h |
|---|---|---|---|---|---|---|---|
| Plage de la pointe - Messery | 10 | 18 | 24° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Excenevex | 10 | 17 | 29° NNE | aucun | soleil | 0.0 | 14°C |
| Plage du Vengeron | 10 | 18 | 24° NNE | aucun | soleil | 0.0 | 14°C |
| Plage d'Hermance | 10 | 18 | 24° NNE | aucun | soleil | 0.0 | 14°C |
| Lac d'Annecy - Plage de Sévrier | 4 | 13 | 323° NO | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Bourget - Cap des Séselets | 2 | 8 | 18° NNE | aucun | soleil-couvert | 0.0 | 14°C |
| Grand Lac de Laffrey - Parking du pré de la rencontre | 2 | 7 | 191° S | aucun | soleil-couvert | 0.0 | 13°C |
| Lac du Monteynard - Treffort - Parking du camping de la Plage | 2 | 8 | 203° SSO | aucun | soleil-couvert | 0.0 | 13°C |
| Portes-lès-Valence - Parking des Surfeurs | 10 | 27 | 4° N | aucun | soleil-couvert | 0.0 | 15°C |
| La Roche-de-Glun - Base Nautique | 9 | 22 | 2° N | aucun | soleil-couvert | 0.0 | 15°C |
| Centrale de Saint-Alban-du-Rhône | 7 | 20 | 5° N | aucun | soleil-couvert | 0.0 | 15°C |
| Nord du Pont de Chavanay | 7 | 20 | 5° N | aucun | soleil-couvert | 0.0 | 15°C |
| Loire-sur-Rhône / Chasse-sur-Rhône | 5 | 16 | 358° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Cyr-sur-le-Rhône | 7 | 19 | 358° N | aucun | soleil-couvert | 0.0 | 14°C |
| Saint-Romain-des-Iles | 7 | 14 | 2° N | aucun | soleil | 0.0 | 15°C |
| Nord du Pont d'Arciat | 7 | 14 | 2° N | aucun | soleil | 0.0 | 15°C |
| Réservoir du Grand Large - Windfoil Windsurf Meyzieu | 4 | 14 | 331° NNO | aucun | soleil | 0.0 | 14°C |
