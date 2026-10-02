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

- fenêtre **7 h–22 h** uniquement (vent hors de cette plage ignoré) ;
- plage où le **vent moyen interpolé > 10 nds** pendant **≥ 3 h** (pas de repli sur les rafales) ;
- si plusieurs créneaux ≥ 3 h : celui **le plus proche de l’heure du max de vent moyen** de la journée ;
- bornes interpolées au franchissement du seuil, puis heure entière la plus proche (17h53 → 18h) ;
- sinon `slot_start_h` / `slot_end_h` restent `null` et `slot_label` est vide.

Vent max affiché (`mean_max_kt`, rafale au même moment) : pic du vent moyen entre **7 h et 22 h**.

Icône météo, sur le **créneau** retenu, sinon sur **7 h–22 h** (pluie = mm tombés dans l’heure) :

| Condition | Icône |
| --- | --- |
| une heure ≥ 3 mm | `orage` |
| cumul ≥ 1 mm ou une heure ≥ 0,5 mm | `pluie` |
| nébulosité moyenne ≥ 80 % | `couvert` |
| nébulosité moyenne ≥ 30 % | `soleil-couvert` |
| sinon | `soleil` |

`precip_mm` = cumul sur cette fenêtre, `precip_max_mm_h` = heure la plus pluvieuse, `cloud_cover_pct` = nébulosité moyenne.

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
  creneaux.json
  last_update.json
  llm/index.md
  llm/spots/<spot_key>.md
```

`creneaux.json` : pour `AROMEIFS` et `ICONGFS` (les courbes du graphique web), par spot et par jour, le créneau et les pics 7 h–22 h (`mean_max_kt` / `mean_max_at`, `gust_max_kt` / `gust_max_at`). Le site le lit pour tracer les bornes du créneau et les pics.

`llm/` : Markdown léger pour un assistant (Claude) — `index.md` (spots, liens, tendances des puces) et un fichier par spot avec les courbes AROMEIFS et ICONGFS heure par heure. Publié sur le site : `https://lecoonetsabande.github.io/gabin-meteo/llm/index.md`.
