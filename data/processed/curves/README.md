# Courbes horaires

**Ne pas éditer ces CSV ici.** Parent : `traitement-donnees/data/processed/curves/`.

| Fichier | Enchaînement | Usage dans le panneau détail |
| --- | --- | --- |
| `AROMEIFS.csv` | AROMEHD → ARPEGE → IFS | courbe affichée par défaut pour les spots AROME HD, seconde courbe pour les autres |
| `ICONGFS.csv` | ICONCH1 → ICONCH2 → ICON13KM → GFS | courbe affichée par défaut pour les spots ICON-CH1, seconde courbe pour les autres |

Seuls ces deux fichiers sont publiés. `ICONIFS.csv` (courbe des puces ICON) reste sur la branche de traitement. Le workflow *Traitement et affichage* les écrase à chaque run.
