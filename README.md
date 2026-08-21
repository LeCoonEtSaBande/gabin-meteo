# Gabin-meteo — traitement des données

Branche `traitement-donnees` : assemblage des prévisions brutes en courbes splicées et JSON du panneau quotidien.

Vue d’ensemble du dépôt : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).
Détail du code : [`src/traitement/README.md`](src/traitement/README.md).

## Rôle

Le workflow *Traitement et affichage* (défini sur `main`) se lance après une collecte réussie :

1. checkout de cette branche ;
2. copie de `data/raw` et `assets/spots_specs` depuis `collecte-api-meteo` ;
3. `python src/traitement/run.py` ;
4. push de `data/processed` ici ;
5. copie de `quotidien.json` et `last_update.json` vers `affichage-web`.

## Jeux de courbes

| Jeu | Enchaînement | Où c’est lu |
| --- | --- | --- |
| `AROMEIFS` | AROMEHD → ARPEGE → IFS | puces (spots AROME) + graphique web |
| `ICONIFS` | ICONCH1 → ICONCH2 → ICON13KM → IFS | puces (spots ICON) |
| `ICONGFS` | ICONCH1 → ICONCH2 → ICON13KM → GFS | seconde courbe du graphique web |

Vent / rafales déjà en **nœuds** dans les bruts. Créneau quotidien : vent moyen **> 8 nds**.

## Lancer en local

Les bruts sont lus dans `data/raw/` s’ils sont présents, sinon via `git show collecte-api-meteo:…`.

```bash
git switch traitement-donnees
pip install -r requirements.txt
python src/traitement/run.py
```

Fichiers produits dans `data/processed/` :

- `curves/AROMEIFS.csv`, `ICONIFS.csv`, `ICONGFS.csv`
- `quotidien.json` — jours, spots, indicateurs (vent max, créneau, icône, T15h)
- `last_update.json` — horodatage repris de la collecte
