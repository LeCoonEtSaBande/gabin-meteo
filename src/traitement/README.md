# Traitement des données

Assemble les prévisions brutes de `collecte-api-meteo` en courbes splicées, puis calcule les indicateurs du panneau quotidien.

## Courbes

| Jeu | Enchaînement |
| --- | --- |
| `AROMEIFS` | AROMEHD → ARPEGE → IFS |
| `ICONIFS` | ICONCH1 → ICONCH2 → ICON13KM → IFS |
| `ICONGFS` | ICONCH1 → ICONCH2 → ICON13KM → GFS |

Vent moyen et rafales sont déjà en **nœuds** dans les bruts (`wind_speed_10m_kn`, `wind_gusts_10m_kn`) : pas de conversion km/h.

Bornes du créneau > 8 nds : heure entière la plus proche (17h53 → 18h).
Icône météo : max de nébulosité et de pluie sur l'heure du vent max, l'heure d'avant et l'heure d'après.

Les spots `short_term_model = AROMEHD` utilisent `AROMEIFS` pour l'affichage. Les spots `ICONCH1` / `ICONIFS` utilisent `ICONIFS`. `ICONGFS` est produit pour plus tard.

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
```
