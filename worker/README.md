# Worker `gabin-meteo`

Relais des balises temps réel pour l'onglet *Balises* de la carte. Un seul appel
renvoie les mesures du jour de **toutes** les balises, suisses et françaises.

- URL : `https://gabin-meteo.garinlu-subs.workers.dev/balises`
- Appelé **uniquement par l'appli, à la demande** (ouverture de l'onglet, bouton ↻,
  retour sur l'appli si les mesures ont plus de 10 min). Aucune tâche planifiée.

## Pourquoi un Worker

MétéoSuisse publie ses fichiers 10 min en accès libre : le navigateur peut les lire
directement. Météo-France demande une clé, qui n'a rien à faire dans une page
publique. Le Worker garde la clé, interroge les deux sources, convertit tout en
nœuds et renvoie un seul JSON.

## Sources

| Source | Service | Pas | Rétention | Clé |
| --- | --- | --- | --- | --- |
| `MeteoSuisse` | `data.geo.admin.ch/ch.meteoschweiz.ogd-smn/<id>/ogd-smn_<id>_t_now.csv` | 10 min | jour UTC en cours | non |
| `MeteoFrance` | `public-api.meteofrance.fr/public/DPPaquetObs/v1/paquet/infrahoraire-6m` | 6 min | 24 h glissantes | oui |

Champs lus :

| Grandeur | MétéoSuisse | Météo-France |
| --- | --- | --- |
| Vent moyen 10 min | `fu3010z0` (km/h) | `ff` (m/s) |
| Rafale | `fu3010z1`, pointe 1 s (km/h) | `fxi10`, maxi instantané sur 10 min (m/s) |
| Provenance | `dkl010z0` (°) | `dd` (°), `dxi10` en secours |

## Réponse

`GET /balises` → JSON, vent **en nœuds**, direction **en provenance**, mesures du
**jour en cours à Paris**, triées par horodatage croissant.

```json
{
  "generated_at": "2026-10-11T20:31:12Z",
  "day": "2026-10-11",
  "unit": "kt",
  "direction": "provenance",
  "stations": [
    {
      "station_key": "geneve_cointrin",
      "source": "MeteoSuisse",
      "source_id": "GVE",
      "status": "ok",
      "points": [{ "t": "2026-10-11T20:20:00Z", "mean_kt": 1.19, "gust_kt": 1.94, "dir_deg": 355 }]
    }
  ]
}
```

Une station en panne porte `"status": "error"` et un `error` lisible ; les autres
restent servies. `GET /health` dit seulement si la clé est posée, jamais sa valeur.

## Liste des balises

Le Worker ne tient **pas** sa propre table : il relit
`assets/balises_specs/balises_specifications.csv` sur la branche `affichage-web`
(variable `SPECS_URL`), gardé dix minutes en cache. Ajouter une balise = éditer ce
CSV, rien d'autre. Les identifiants sont filtrés sur leur forme (3 lettres pour
MétéoSuisse, 8 chiffres pour Météo-France) et plafonnés à 40, pour que le Worker
ne puisse pas servir de relais vers autre chose.

## Sobriété

- Cache de bord de **3 min** sur `/balises` (`CACHE_SECONDS`) : une volée de
  visites ne déclenche qu'un jeu d'appels aux API. Une réponse sans aucune mesure
  n'est gardée que 30 s.
- Le navigateur, lui, ne met rien en cache (`max-age=0`) : le bouton ↻ redescend
  toujours jusqu'au Worker.

## CORS

`ALLOWED_ORIGINS` (défaut `https://lecoonetsabande.github.io`), plus
`http://localhost:*` et `http://127.0.0.1:*` pour servir la carte en local. Toute
autre origine reçoit la réponse sans en-tête CORS, donc bloquée par le navigateur.

## Déployer

```bash
cd worker
npm install
npx wrangler secret put METEOFRANCE_API_KEY   # clé DPPaquetObs, une seule fois
npx wrangler deploy
```

`CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID` dans l'environnement, ou
`npx wrangler login`. La clé Météo-France est un **secret du Worker** : elle n'est
ni dans `wrangler.toml`, ni dans le dépôt.

Attention en regénérant la clé sur [portail-api.meteofrance.fr](https://portail-api.meteofrance.fr) :
il faut s'abonner à *DonneesPubliquesPaquetObservation* **avant** de la générer
(l'abonnement est encodé dans le jeton), et la clé est un JWT en trois parties
séparées par des points, qui se termine par `==`. Un double-clic ne sélectionne
que le premier morceau.

## Tests

```bash
cd worker
node --test test/*.test.js
```

Sans dépendance ni réseau : `fetch` et `caches.default` sont doublés.
