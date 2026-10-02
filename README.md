# Gabin-meteo

Surveillance météo de spots (Rhône-Alpes / Léman) : prévisions Open-Meteo, traitement des courbes, carte web quotidienne.

Carte publique : [lecoonetsabande.github.io/gabin-meteo](https://lecoonetsabande.github.io/gabin-meteo/)

## Branches

Ce dépôt n’est **pas** un historique unique fusionné dans `main`. Chaque branche a son rôle ; elles partagent seulement le commit d’initialisation.

| Branche | Contenu | README détaillé |
| --- | --- | --- |
| `main` | Workflows GitHub Actions (cron et enchaînement). Pas de données métier. | ce fichier |
| `collecte-api-meteo` | Script Python, CSV bruts Open-Meteo, **specs parentes** des spots | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/collecte-api-meteo/README.md) |
| `traitement-donnees` | Courbes splicées et JSON quotidien (**parent** de `data/processed`) | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/traitement-donnees/README.md) |
| `affichage-web` | Site GitHub Pages (copies publiées + front) | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/affichage-web/README.md) |
| `archive-previsions` | Prévision AROME HD / ICON-CH1 du lendemain figée chaque soir à 23 h | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/archive-previsions/README.md) |

Les PR d’interface ciblent `affichage-web`. Collecte et traitement ciblent leur branche. `main` ne reçoit que les workflows et la doc d’ensemble.

## Source unique des données

Chaque jeu a **un seul fichier parent**. Les autres branches ne l’éditent pas : elles le lisent, ou le workflow le recopie.

| Donnée | Parent (à éditer) | Transit |
| --- | --- | --- |
| Spots et zones (`assets/spots_specs/*.csv`) | `collecte-api-meteo` | Lues par le traitement (checkout / `git show`). Recopiées vers `affichage-web` à chaque run |
| Prévisions brutes (`data/raw/`) | `collecte-api-meteo` | Lues par le traitement, jamais versionnées ailleurs |
| Courbes et JSON quotidien (`data/processed/`) | `traitement-donnees` | Recopiés vers `affichage-web` (`quotidien.json`, `creneaux.json`, `last_update.json`, `AROMEIFS.csv`, `ICONGFS.csv`, `llm/`) |
| Archive de 23 h (`data/archive/`) | `archive-previsions` | Lue par Claude via `raw.githubusercontent.com` |

Sur `affichage-web`, `assets/spots_specs/` et `data/processed/` sont des **copies publiées** pour GitHub Pages. Ne pas les modifier à la main. `traitement-donnees` ne versionne pas les specs ni les bruts.

## Pipeline (3 fois par jour)

Heures **Europe/Paris** : **7h15 / 13h15 / 19h15** en été (cron UTC `28 5,11,17`, à `:28` pour éviter le pic de charge). En hiver le même cron tombe à **6h15 / 12h15 / 18h15** : un décalage d’une heure est accepté. Un cron en retard collecte encore le créneau ouvert ; un doublon est ignoré si la collecte a déjà réussi.

```
main : Collecte Open-Meteo
        → checkout collecte-api-meteo, fetch Open-Meteo, push data/raw
main : Traitement et affichage  (après un run de collecte réussi)
        → checkout traitement-donnees + bruts/specs (sans les committer)
        → python src/traitement/run.py
        → push data/processed sur traitement-donnees
        → copie specs, JSON, courbes AROMEIFS/ICONGFS et llm/ sur affichage-web
GitHub Pages  (source : racine de affichage-web)
main : Archive des prévisions de 23 h  (cron 23h05 Paris)
        → lit l'historique de collecte-api-meteo (sans appel API)
        → push data/archive sur archive-previsions
```

Déclenchement manuel : Actions → *Collecte Open-Meteo* (`force` ignore le filtre de créneau), *Traitement et affichage*, ou *Archive des prévisions de 23 h* (`day`, `force`).

Liste des changements workflows / collecte pour un autre dépôt : [HANDOFF-COLLECTE.md](HANDOFF-COLLECTE.md).

## Données

- **17 spots** dans **11 zones** (Léman, Annecy, Bourget, Rhône, Saône, Laffrey, Monteynard, Grand Large…).
- **7 modèles** Open-Meteo : AROMEHD, ARPEGE, ICONCH1, ICONCH2, ICON13KM, IFS, GFS.
- Vent et rafales demandés et stockés en **nœuds**.
- Chaque modèle est demandé sur **tout son horizon** (AROME HD 51 h, ICON-CH1 33 h, IFS 15 jours…).
- Créneaux de vent du panneau quotidien : **≥ 3 h** de vent moyen **> 10 nds** entre 7 h et 22 h, bornes arrondies à l’heure entière. Pas de repli sur les rafales.

| Jeu | Enchaînement court → long terme | Usage |
| --- | --- | --- |
| `AROMEIFS` | AROMEHD → ARPEGE → IFS | puces (spots AROME) + graphique |
| `ICONIFS` | ICONCH1 → ICONCH2 → ICON13KM → IFS | puces (spots ICON) |
| `ICONGFS` | ICONCH1 → ICONCH2 → ICON13KM → GFS | seconde courbe du graphique |

## Site

- Coque HTML (onglets, date, puces) autour d’une **carte SVG seule**.
- Vue *Tendances journalières* : icône, vent max, créneau, température 15 h.
- Panneau détail : specs, liens, graphiques (1 / 3 / 5 jours, tooltip, plein écran).
- Onglet *Balises temps réel* : pas encore branché.

## Lecture par Claude (appli téléphone ou PC)

Le dépôt est public : Claude lit ces fichiers Markdown avec sa recherche / lecture web, sans connecteur.

- Prévisions actuelles (courbes AROMEIFS et ICONGFS heure par heure, tous les spots) : `https://lecoonetsabande.github.io/gabin-meteo/llm/index.md`
- Archive de 23 h (AROME HD / ICON-CH1 bruts) : `https://raw.githubusercontent.com/LeCoonEtSaBande/gabin-meteo/archive-previsions/index.md`

Conseil : un Projet Claude dont les instructions donnent ces deux adresses.

## Lancer en local

Collecte et traitement se lancent depuis le checkout de **leur** branche, pas depuis `main` :

```bash
git switch collecte-api-meteo
pip install -r requirements.txt
python src/collecte/run.py --force

git switch traitement-donnees
python src/traitement/run.py
```

Pour la carte : checkout `affichage-web` et servir la racine (`python -m http.server 8080`).
