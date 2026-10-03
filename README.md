# Gabin-meteo

Surveillance météo de spots (Rhône-Alpes / Léman) : prévisions Open-Meteo, traitement des courbes, carte web quotidienne.

Carte publique : [lecoonetsabande.github.io/gabin-meteo](https://lecoonetsabande.github.io/gabin-meteo/)

## Branches

Ce dépôt n’est **pas** un historique unique fusionné dans `main`. Chaque branche a son rôle ; elles partagent seulement le commit d’initialisation.

| Branche | Contenu | README détaillé |
| --- | --- | --- |
| `main` | Workflows GitHub Actions (cron et enchaînement). Pas de données métier. | ce fichier |
| `collecte-api-meteo` | Script Python, CSV bruts Open-Meteo, **specs parentes** des spots | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/collecte-api-meteo/README.md) |
| `traitement-donnees` | Courbes assemblées, JSON des puces et du graphique, Markdown pour Claude (**parent** de `data/processed`) | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/traitement-donnees/README.md) |
| `affichage-web` | Site GitHub Pages (copies publiées + front) | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/affichage-web/README.md) |
| `archive-previsions` | Prévision AROME HD / ICON-CH1 du lendemain figée chaque soir à 23 h | [README](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/archive-previsions/README.md) |

Les changements d’interface vont sur `affichage-web`, ceux de collecte, de traitement et d’archive sur leur branche. `main` ne reçoit que les workflows et la doc d’ensemble.

Ne jamais réécrire l’historique de `collecte-api-meteo` (force push, squash) : l’archive de 23 h relit les collectes passées dans cet historique.

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

Créneaux **Europe/Paris** : **7h15 / 13h15 / 19h15** en été, **6h15 / 12h15 / 18h15** en hiver (même cron UTC, un décalage d’une heure est accepté). Le cron `28 5,11,17 * * *` UTC part au plus tôt à :28 (7h28 / 13h28 / 19h28 en été), et GitHub le retarde souvent, parfois de plusieurs heures. Un cron en retard collecte encore le créneau ouvert ; un doublon est ignoré si la collecte a déjà réussi. L’heure réelle de collecte est affichée sur la carte (« MAJ ») et dans les fichiers pour Claude.

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
        → checkout archive-previsions + historique de collecte-api-meteo
        → python src/archive/run.py (sans appel API)
        → push data/archive et index.md sur archive-previsions
```

Déclenchement manuel : Actions → *Collecte Open-Meteo* (`force` ignore le filtre de créneau), *Traitement et affichage*, ou *Archive des prévisions de 23 h* (`day`, `force`).

## Données

- **17 spots** dans **11 zones** (Léman, Annecy, Bourget, Rhône, Saône, Laffrey, Monteynard, Grand Large…).
- **7 modèles** Open-Meteo : AROMEHD, ARPEGE, ICONCH1, ICONCH2, ICON13KM, IFS, GFS.
- Vent et rafales demandés et stockés en **nœuds**.
- Chaque modèle est demandé sur **tout son horizon** (AROME HD 51 h, ICON-CH1 33 h, IFS 15 jours…).
- Créneaux de vent du panneau quotidien : **≥ 3 h** de vent moyen **> 10 nds** entre 8 h et 20 h, bornes arrondies à l’heure entière. Pas de repli sur les rafales.

| Jeu | Enchaînement court → long terme | Usage |
| --- | --- | --- |
| `AROMEIFS` | AROMEHD → ARPEGE → IFS | puces (spots AROME) + graphique (courbe par défaut des spots AROME) |
| `ICONIFS` | ICONCH1 → ICONCH2 → ICON13KM → IFS | puces (spots ICON) |
| `ICONGFS` | ICONCH1 → ICONCH2 → ICON13KM → GFS | graphique (courbe par défaut des spots ICON) |

Une courbe garde le modèle le plus court terme jusqu’à sa dernière échéance, puis le modèle suivant prend le relais.

## Site

- Coque HTML (onglets, date, puces) autour d’une **carte SVG seule**.
- Vue *Tendances journalières* : une puce par zone avec icône météo, vent max 8 h–20 h, créneau, température à 15 h.
- Panneau détail : specs, liens, graphiques `AROMEIFS` / `ICONGFS` (1 / 3 / 5 jours, tooltip, plein écran). Sur le graphique : trait pointillé à 10 nds, zone colorée là où le vent moyen dépasse 10 nds, valeurs des pics de vent moyen et de rafales (nombre seul), et bornes du créneau de chaque courbe sous l’axe des heures.
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

Pour l’archive : voir le [README de `archive-previsions`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/archive-previsions/README.md#lancer-en-local) (il faut un checkout de `collecte-api-meteo` avec son historique).
