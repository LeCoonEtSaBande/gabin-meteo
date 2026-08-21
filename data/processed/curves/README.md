# Courbes horaires

CSV `;` produits par `traitement-donnees` (`src/traitement/run.py`) :

| Fichier | Enchaînement | Usage sur cette branche |
| --- | --- | --- |
| `AROMEIFS.csv` | AROMEHD → ARPEGE → IFS | graphique du panneau détail |
| `ICONGFS.csv` | ICONCH1 → ICONCH2 → ICON13KM → GFS | seconde courbe du panneau détail |

`ICONIFS` est calculé sur `traitement-donnees` mais **n’est pas** chargé par le site.

Le workflow *Traitement et affichage* met à jour `quotidien.json` et `last_update.json` sur `affichage-web`. Les CSV de ce dossier sont versionnés ici pour le graphique ; un nouveau jeu de courbes se publie en recopiant les fichiers depuis `traitement-donnees` (`data/processed/curves/`).
