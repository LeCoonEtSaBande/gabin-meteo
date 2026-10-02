# Gabin-meteo — traitement

Branche `traitement-donnees` : assemble les bruts Open-Meteo en courbes continues (un modèle court terme relayé par des modèles plus longs), en JSON pour les puces et le graphique, et en Markdown pour Claude.

Vue d’ensemble : [README de `main`](https://github.com/LeCoonEtSaBande/gabin-meteo/blob/main/README.md).
Détail du code : [`src/traitement/README.md`](src/traitement/README.md).

Les **spécifications de spots** et les **bruts** ne sont pas versionnés ici. Parent : `collecte-api-meteo`. En local, `src/traitement/io_raw.py` les lit via `git show` s’ils ne sont pas déjà dans l’arbre. En CI : checkout de `collecte-api-meteo` (copie de travail, non commitée).

## Pipeline

Le workflow *Traitement et affichage* (sur `main`), après une collecte réussie :

1. checkout de cette branche ;
2. copie locale de `data/raw` et `assets/spots_specs` depuis `collecte-api-meteo` (non versionnée ici) ;
3. `python src/traitement/run.py` ;
4. push de `data/processed` sur `traitement-donnees` ;
5. copie vers `affichage-web` : specs, `quotidien.json`, `creneaux.json`, `last_update.json`, `AROMEIFS.csv`, `ICONGFS.csv`, et `llm/` (Markdown pour Claude).

## Jeux de courbes

| Jeu | Enchaînement | Où c’est lu |
| --- | --- | --- |
| `AROMEIFS` | AROMEHD → ARPEGE → IFS | puces (spots AROME) + graphique web |
| `ICONIFS` | ICONCH1 → ICONCH2 → ICON13KM → IFS | puces (spots ICON) |
| `ICONGFS` | ICONCH1 → ICONCH2 → ICON13KM → GFS | seconde courbe du graphique web |

Vent et rafales sont déjà en **nœuds**. Créneau quotidien : **≥ 3 h** de vent moyen **> 10 nds** entre 7 h et 22 h, sans repli sur les rafales. L'icône se calcule sur la pluie et les nuages du créneau, ou de 7 h–22 h s'il n'y a pas de créneau. Détail des règles : [`src/traitement/README.md`](src/traitement/README.md).

Nébulosité perçue : `cloud_cover_display_pct` dans les CSV de courbes. La nébulosité totale est prioritaire, sinon `max(basse, moyenne, haute × 0,25)`. Pour AROME HD avec seulement des nuages hauts, basses et moyennes sont mises à 0, sans repli ARPEGE. Courbes, icônes et puces s’appuient sur ce champ.

## Lancer en local

```bash
git switch traitement-donnees
pip install -r requirements.txt
python src/traitement/run.py
```

Fichiers produits (seuls ceux-ci sont commités sur cette branche) : `data/processed/curves/*.csv`, `quotidien.json`, `creneaux.json`, `last_update.json`, `llm/`.
