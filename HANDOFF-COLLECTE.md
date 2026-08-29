# Reprise : collecte GitHub Actions (gabin-meteo)

Document à coller dans un autre chat. Dépôt : `LeCoonEtSaBande/gabin-meteo`.
Les workflows vivent sur **`main`**. Le Python et le CSV des spots vivent sur **`collecte-api-meteo`**.

## Pourquoi le cron de ce matin (29/08/2026) n’a pas tourné

Heure actuelle du diagnostic : **09h26 Europe/Paris** (07h26 UTC).

Le cron unique est `15 5,11,17 * * *` (UTC) → **7h15 / 13h15 / 19h15** en été.

- Aucun run `schedule` ce matin. Dernier run = **manuel** (`workflow_dispatch`) le 28/08 à 23h58 UTC (01h58 Paris le 29).
- La carte est donc restée sur `29/08/2026 01:58`.
- Le fichier `.github/workflows/collecte.yml` a été **modifié le 28/08 à 23h54 UTC**. GitHub réenregistre le cron après un push ; le créneau suivant (05h15 UTC / 7h15 Paris) a été **sauté**.
- GitHub **ne garantit pas** l’heure des `schedule` : retard fréquent, parfois **aucun run**. Ce n’est pas un filtre Python (sinon on verrait un job vert de 10 s avec « créneau déjà collecté »).

Contournement : Actions → *Collecte Open-Meteo* → `force`.

## Architecture

| Branche | Rôle |
| --- | --- |
| `main` | YAML Actions seulement |
| `collecte-api-meteo` | Python collecte + `data/raw` + CSV spots **parents** |
| `traitement-donnees` | Courbes / JSON |
| `affichage-web` | GitHub Pages |

Le cron ne part **que** depuis `main`. Le job fait `checkout` de `collecte-api-meteo`, écrit, puis `git push` vers cette branche.

---

## Changements définitifs — YAML (`main`)

Fichiers : `.github/workflows/collecte.yml` et `.github/workflows/traitement.yml`.

### 1. Un seul cron, à `:15`

```yaml
"on":
  schedule:
    - cron: "15 5,11,17 * * *"
```

- Été : 7h15 / 13h15 / 19h15 Paris.
- Hiver : 6h15 / 12h15 / 18h15 (décalage d’une heure accepté).
- **Supprimer** le second cron `15 6,12,18` (run fantôme en été).
- `:15` pour éviter le pic GitHub à l’heure pile.

### 2. Clé `"on":` quotée

Dans les **deux** YAML. En YAML 1.1, `on` = `true` ; ça affiche souvent un « ! » dans l’éditeur GitHub. **Ce n’est pas un échec d’Actions** si les runs sont verts.

### 3. Actions Node 24

Partout :

- `actions/checkout@v7` (plus `@v4` / `@v5`)
- `actions/setup-python@v7` (plus `@v5` / `@v6`)

Ça retire l’annotation « Node.js 20 deprecated ». Un « ! » peut rester côté éditeur : ignorer tant que les jobs sont verts.

### 4. Logs Python en temps réel (collecte seulement)

```yaml
jobs:
  fetch:
    runs-on: ubuntu-latest
    env:
      PYTHONUNBUFFERED: "1"
```

Lancer `python -u src/collecte/run.py` (ajouter `--force` si `workflow_dispatch` et `inputs.force == true`).

Sans `-u`, stdout est bufferisé : un job de plusieurs minutes n’affiche rien et on le croit bloqué.

---

## Changements définitifs — Python (`collecte-api-meteo`)

### Filtre horaire = créneau, pas l’heure pile

Ne plus faire `now.hour in (7, 13, 19)` : GitHub en retard (ex. 18h01, 20h51) **sortait sans appeler l’API**, job vert, pas de données.

Logique actuelle (`src/collecte/schedule.py`) :

- Créneaux ouverts : **6h15, 7h15, 12h15, 13h15, 18h15, 19h15** Europe/Paris (été + hiver).
- Si `last_update.json` a déjà un `last_update_at` ≥ ce créneau → skip (sauf `--force`).
- Un cron tardif collecte encore le créneau ouvert.

Fichiers : `schedule.py`, `run.py`, `store.py` (`read_last_update`), tests `test_schedule.py`.

### Client Open-Meteo : JSON tronqué + lots

Ne pas laisser `json.loads` crasher le job. Encapsuler en erreur métier, **retenter**, puis **repli**.

- Lots de **4** cellules (un gros lot de 17 se faisait tronquer).
- 2 essais sur un lot, **1** essai en repli unitaire.
- Timeout **30 s**.
- `Accept-Encoding: identity`.
- Logs flushés (`lot de N cellules en échec → repli unitaire`).

Fichiers : `client.py`, `config.py` (`API_TIMEOUT_S = 30`), `test_client.py`.

### CSV spots : guillemets si `;` dans un texte

À Roche-de-Glun, `display_spot_infos` contenait un `;` **sans guillemets** → colonnes décalées → **altitude envoyée comme latitude** (`HTTP 400 : Given: 116.0`) → tout le lot tombait en repli → run long + beaucoup de `failed`.

Règle : tout champ avec `;` doit être entre `"..."`.

`load_spots` doit **refuser** :

- trop de colonnes (`row.get(None)`),
- lat hors `[-90, 90]` ou lon hors `[-180, 180]`.

Sinon on martèle l’API pendant des minutes.

---

## Comportement observé (fin août 2026)

| Run | Résultat |
| --- | --- |
| Forcé après fix CSV (27/08 ~20h48) | ~3 min, 0 échec, Roche-de-Glun ok |
| Schedule 28/08 19h24 | ~4 min, 0 échec |
| Doublon cron hiver 20h36 | skip « déjà collecté » (voulu) |
| Forcé 29/08 01h58 | ~3 min, 0 échec, pipeline Pages ok |
| Schedule 29/08 7h15 | **absent** (GitHub n’a pas créé de run) |

Les 7h15 / 13h15 peuvent manquer même avec un YAML correct. Le filtre Python n’y est pour rien s’il n’y a **aucun** job dans l’onglet Actions.

## Checklist projet jumeau

1. YAML `main` : un cron `:15`, `"on":`, `@v7`, `PYTHONUNBUFFERED` + `python -u`.
2. Python : skip si créneau déjà dans `last_update.json`, pas l’heure pile.
3. Client : retry JSON tronqué, lots de 4, timeout 30 s.
4. CSV : quote les `;` ; valider lat/lon à la lecture.
5. Ne pas s’inquiéter du « ! » éditeur si les runs sont verts.
6. Après **toute** modif du YAML `schedule`, le **prochain** cron peut être sauté : lancer une fois à la main si besoin.
