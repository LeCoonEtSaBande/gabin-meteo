# Gabin-meteo

Surveillance météo de spots (Rhône-Alpes / Léman) : prévisions Open-Meteo, traitement des courbes, carte web quotidienne.

Carte publique : [lecoonetsabande.github.io/gabin-meteo](https://lecoonetsabande.github.io/gabin-meteo/)

## Branches

Ce dépôt n’est **pas** un historique unique fusionné dans `main`. Chaque branche a son rôle et ses fichiers ; elles partagent seulement le commit d’initialisation.

| Branche | Contenu | README détaillé |
| --- | --- | --- |
| `main` | Workflows GitHub Actions (cron et enchaînement). Pas de données métier. | ce fichier |
| `collecte-api-meteo` | Script Python + CSV bruts Open-Meteo + specs des spots | [README de la branche](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/collecte-api-meteo/README.md) |
| `traitement-donnees` | Assemblage des courbes (AROMEIFS / ICONIFS / ICONGFS) et JSON du panneau quotidien | [README de la branche](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/traitement-donnees/README.md) |
| `affichage-web` | Site GitHub Pages (carte SVG, puces, panneau détail) | [README de la branche](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/affichage-web/README.md) |

Les PR d’interface ciblent `affichage-web`. Les changements de collecte ou de traitement ciblent leur branche. `main` ne reçoit que les workflows et la doc d’ensemble.

## Pipeline (3 fois par jour)

Heures **Europe/Paris** : **7h**, **13h**, **19h** (deux crons UTC sur `main` pour CEST et CET).

```
main : Collecte Open-Meteo
        → checkout collecte-api-meteo, fetch Open-Meteo, push data/raw
main : Traitement et affichage  (après un run de collecte réussi)
        → checkout traitement-donnees + bruts
        → python src/traitement/run.py
        → push data/processed sur traitement-donnees
        → copie quotidien.json + last_update.json sur affichage-web
GitHub Pages  (source : racine de affichage-web)
```

Déclenchement manuel possible : Actions → *Collecte Open-Meteo* (`force` ignore le filtre horaire) ou *Traitement et affichage*.

## Données

- **17 spots** dans **11 zones** (Léman, Annecy, Bourget, Rhône, Saône, Laffrey, Monteynard, Grand Large…).
- **7 modèles** Open-Meteo : AROMEHD, ARPEGE, ICONCH1, ICONCH2, ICON13KM, IFS, GFS.
- Vent et rafales demandés et stockés en **nœuds**.
- Créneaux de vent du panneau quotidien : vent moyen **> 8 nds**, bornes arrondies à l’heure entière.

Jeux de courbes produits par le traitement :

| Jeu | Enchaînement court → long terme |
| --- | --- |
| `AROMEIFS` | AROMEHD → ARPEGE → IFS |
| `ICONIFS` | ICONCH1 → ICONCH2 → ICON13KM → IFS |
| `ICONGFS` | ICONCH1 → ICONCH2 → ICON13KM → GFS |

La carte quotidienne utilise le jeu du modèle court terme du spot (`AROMEIFS` ou `ICONIFS`). Le graphique du panneau détail compare `AROMEIFS` et `ICONGFS`.

## Site

- Coque HTML (onglets, date, puces) autour d’une **carte SVG seule**.
- Vue *Tendances journalières* : icône, vent max, créneau, température 15h.
- Panneau détail : specs, liens, graphiques (1 / 3 / 5 jours, tooltip, plein écran).
- Onglet *Balises temps réel* : pas encore branché.

## Lancer en local

Collecte et traitement se lancent depuis le checkout de **leur** branche, pas depuis `main` :

```bash
git switch collecte-api-meteo
pip install -r requirements.txt
python src/collecte/run.py --force

git switch traitement-donnees
python src/traitement/run.py
```

Pour la carte : checkout `affichage-web` et servir la racine (Pages, ou un serveur HTTP local).
