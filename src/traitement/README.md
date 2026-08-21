# Traitement des données

Assemble les prévisions brutes de `collecte-api-meteo` en courbes splicées, puis calcule les indicateurs du panneau quotidien.

## Courbes

À un instant *t*, on ne garde que le modèle le plus court encore disponible.

| Jeu | Enchaînement |
| --- | --- |
| `AROMEIFS` | AROMEHD → ARPEGE → IFS |
| `ICONIFS` | ICONCH1 → ICONCH2 → ICON13KM → IFS |
| `ICONGFS` | ICONCH1 → ICONCH2 → ICON13KM → GFS |

Vent moyen et rafales sont déjà en **nœuds** dans les bruts (`wind_speed_10m_kn`, `wind_gusts_10m_kn`) : pas de conversion km/h.

Bornes du créneau > 8 nds : heure entière la plus proche (17h53 → 18h).
Icône météo : max de nébulosité et de pluie sur l'heure du vent max, l'heure d'avant et l'heure d'après.
Température affichée : valeur à **15 h**.

Les spots `short_term_model = AROMEHD` utilisent `AROMEIFS` pour les puces. Les spots `ICONCH1` utilisent `ICONIFS`. Le graphique du site charge `AROMEIFS` et `ICONGFS` (pas `ICONIFS`).

## Lancer

Les bruts sont lus dans `data/raw/` s'ils sont présents, sinon via `git show collecte-api-meteo:…`.

```bash
python src/traitement/run.py
```

Fichiers produits :

```
data/processed/
  curves/AROMEIFS.csv
  curves/ICONIFS.csv
  curves/ICONGFS.csv
  quotidien.json
  last_update.json
```
