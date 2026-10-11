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

| Source | Service | Pas | Clé |
| --- | --- | --- | --- |
| `MeteoSuisse` | `data.geo.admin.ch/ch.meteoschweiz.ogd-smn/<id>/ogd-smn_<id>_t_now.csv` | 10 min, jour UTC entier en un fichier | non |
| `MeteoFrance` | `public-api.meteofrance.fr/public/DPObs/v2/station/infrahoraire-6m` | 6 min, **une** mesure par appel (la dernière) | oui |
| `MeteoFrance` | `…/DPObs/v2/station/horaire?date=<heure pleine UTC>` | 1 h, **une** mesure par appel | oui |

Champs lus :

| Grandeur | MétéoSuisse | Météo-France 6 min | Météo-France horaire |
| --- | --- | --- | --- |
| Vent moyen 10 min | `fu3010z0` (km/h) | `ff` (m/s) | `ff` (m/s) |
| Rafale | `fu3010z1`, pointe 1 s (km/h) | `raf10`, maxi sur 10 min (m/s) | `raf`, maxi de l'heure (m/s) |
| Provenance | `dkl010z0` (°) | `dd` (°), `ddraf10` en secours | `dd` (°), `ddraf` en secours |

Côté Météo-France, `dd` suit la convention OMM : **360 = plein nord, 0 = calme**.
Au calme, la provenance du vent moyen n'existe pas ; le Worker reprend alors celle
de la rafale, et renvoie `dir_deg: null` si la station n'en relève pas.

### Courbe du jour des balises françaises

DPObs ne rend qu'**une** mesure par appel : impossible d'obtenir la journée d'une
station en une fois. Le Worker compose donc, pour chaque station française :

- la **dernière mesure au pas de 6 min**, relue à chaque fois — c'est elle que
  portent la vignette et le dernier point de la courbe ;
- les **heures pleines** déjà écoulées de la journée parisienne, relues du plus
  récent au plus ancien et gardées 26 h dans le cache du Worker. Une heure encore
  vide est réessayée au bout de 5 min : Météo-France insère la mesure environ
  2 min 30 après l'heure de validité.

`METEOFRANCE_HOURS_BUDGET` (36) plafonne ces appels horaires par requête, toutes
stations confondues : la limite est de 50 sous-requêtes par requête sur un compte
Workers gratuit, et Météo-France accepte 100 appels par minute. Les heures
laissées de côté sont rattrapées par les lectures suivantes, donc la courbe se
remplit en quelques minutes de consultation et reste ensuite complète.

La courbe française est ainsi **horaire, plus un dernier point à 6 min**, là où la
suisse est à 10 min. Pour repasser à 6 min sur toute la journée en un seul appel
par station, il faut s'abonner à *DonneesPubliquesPaquetObservation* sur le
portail puis regénérer la clé (voir [Déployer](#déployer)).

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
- Les heures pleines françaises déjà lues ne sont jamais redemandées (cache 26 h).
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
npx wrangler secret put METEOFRANCE_API_KEY   # une seule fois
npx wrangler deploy
```

`CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID` dans l'environnement, ou
`npx wrangler login`. La clé Météo-France est un **secret du Worker** : elle n'est
ni dans `wrangler.toml`, ni dans le dépôt.

Attention en regénérant la clé sur [portail-api.meteofrance.fr](https://portail-api.meteofrance.fr) :
**les abonnements sont encodés dans le jeton**, il faut donc s'abonner *avant* de
le générer. La clé actuelle ne porte que *DonneesPubliquesObservation* (DPObs v2) ;
*DonneesPubliquesPaquetObservation* répond `403 Resource forbidden`. Les segments
de l'abonnement sont lisibles dans la charge utile du JWT :

```bash
python3 -c "import base64,json,os,sys; p=os.environ['METEOFRANCE_API_KEY'].split('.')[1]; \
print(json.dumps(json.loads(base64.urlsafe_b64decode(p + '='*(-len(p)%4)))['subscribedAPIs'], indent=2, ensure_ascii=False))"
```

La clé est un JWT en **trois parties séparées par des points**, plusieurs
centaines de caractères, qui se termine par `==`. Un double-clic n'en sélectionne
que le premier morceau (168 caractères) : copier le champ entier.

## Tests

```bash
cd worker
node --test test/*.test.js
```

Sans dépendance ni réseau : `fetch` et `caches.default` sont doublés.
