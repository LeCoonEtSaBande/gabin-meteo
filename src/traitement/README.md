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

Créneau exploitable (écrit dans `quotidien.json`, même règle que les puces) :

- fenêtre **7 h–22 h** uniquement (vent et rafales hors de cette plage ignorés) ;
- plage où le **vent moyen interpolé > 8 nds** ; s’il n’y en a pas de **≥ 3 h**, plage où les **rafales interpolées > 15 nds** ;
- si plusieurs créneaux ≥ 3 h : celui **le plus proche de l’heure du max de vent moyen** de la journée ;
- bornes interpolées au franchissement du seuil, puis heure entière la plus proche (17h53 → 18h) ;
- sinon `slot_start_h` / `slot_end_h` restent `null` et `slot_label` est vide.

Icône météo : max de nébulosité perçue (`cloud_cover_display_pct`) et de pluie sur l'heure du vent max, l'heure d'avant et l'heure d'après.
Température affichée : valeur à **15 h**.

Nébulosité affichée (`cloud_cover_display_pct`) : total prioritaire, sinon `max(basse, moyenne, haute × 0,25)`. Cas AROME HD avec seulement des nuages hauts : bas/moy forcés à 0, pas de repli sur ARPEGE pour ce créneau.

Les spots `short_term_model = AROMEHD` utilisent `AROMEIFS` pour les puces. Les spots `ICONCH1` utilisent `ICONIFS`. Le graphique du site charge `AROMEIFS` et `ICONGFS` (pas `ICONIFS`).

## Lancer

Les bruts et les specs sont lus dans l’arbre local s’ils sont présents (copie CI), sinon via `git show collecte-api-meteo:…`. Ne pas committer `data/raw/` ni `assets/spots_specs/` sur cette branche.

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
