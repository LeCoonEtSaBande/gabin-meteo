# Worker `gabin-meteo`

Relais des balises temps réel pour l'onglet *Balises* de la carte. Un seul appel
renvoie les mesures du jour de **toutes** les balises, suisses et françaises.

- URL : `https://gabin-meteo.garinlu-subs.workers.dev/balises`
- Appelé **uniquement par l'appli, à la demande** (ouverture de l'onglet, bouton ↻,
  retour sur l'appli si les mesures ont plus de 10 min). Aucune tâche planifiée.
- **Une balise = un appel à sa source**, et la journée arrive d'un coup.

## Pourquoi un Worker

MétéoSuisse publie ses fichiers 10 min en accès libre : le navigateur peut les lire
directement. Météo-France demande une clé, qui n'a rien à faire dans une page
publique. Le Worker garde la clé, interroge les deux sources, convertit tout en
nœuds et renvoie un seul JSON.

## Sources

| Source | Service | Contenu d'un appel | Clé |
| --- | --- | --- | --- |
| `MeteoSuisse` | `data.geo.admin.ch/ch.meteoschweiz.ogd-smn/<id>/ogd-smn_<id>_t_now.csv` | jour UTC entier, pas de 10 min | non |
| `MeteoFrance` | `DPPaquetObs/v1/paquet/infrahoraire-6m?id_station=<id>` | **24 h glissantes, pas de 6 min** | oui |
| `MeteoFrance` (repli) | `DPObs/v2/station/infrahoraire-6m?id_station=<id>` | une seule mesure, la dernière | oui |

Champs lus :

| Grandeur | MétéoSuisse | Météo-France |
| --- | --- | --- |
| Vent moyen 10 min | `fu3010z0` (km/h) | `ff` (m/s) |
| Rafale | `fu3010z1`, pointe 1 s (km/h) | `raf10`, maxi sur 10 min (m/s) |
| Provenance | `dkl010z0` (°) | `dd` (°), `ddraf10` en secours |

Côté Météo-France, `dd` suit la convention OMM : **360 = plein nord, 0 = calme**.
Au calme, la provenance du vent moyen n'existe pas ; le Worker reprend alors celle
de la rafale, et renvoie `dir_deg: null` si la station n'en relève pas.

Le fichier du jour de MétéoSuisse couvre une journée **UTC** : sa fin tombe déjà le
lendemain à Paris, et le début de la journée parisienne était dans le fichier de la
veille. Entre minuit et 2 h à Paris, la courbe suisse est donc vide et la vignette
affiche la dernière mesure connue.

## Pas de temps

Le Worker ne renvoie pas toutes les mesures qu'il lit : il les ramène sur une
grille avant de les envoyer au navigateur.

**30 minutes est le pas commun** (`COARSE_STEP_MIN`), et ce n'est pas un chiffre
rond choisi au hasard : c'est le seul pas qui tombe juste à la fois sur les
6 minutes de Météo-France et les 10 minutes de MétéoSuisse. Décimer ne déplace donc
aucune mesure. Une grille à 10 minutes, elle, ne coïnciderait avec la française
qu'à `:00` et `:30` et donnerait une courbe aux intervalles réels inégaux.

**Une balise peut demander mieux** sur une plage d'heures, via les colonnes
`pas_fin_min`, `pas_fin_debut_h` et `pas_fin_fin_h` de la fiche. Reventin et Étoile
portent `6;11;19` : les deux balises de vol passent au pas de 6 minutes entre 11 h
et 19 h, heure de Paris. Le Worker ne tient pas cette liste, il la lit.

**La dernière mesure du fichier est toujours conservée**, même hors grille : sans
elle la vignette traînerait jusqu'à une demi-heure de retard alors que la donnée
fraîche est là.

Cette décimation se fait **pendant** la lecture du CSV, pas après : une ligne
écartée n'est jamais construite en objet. Sur onze balises, le parsing passe de
4,5 ms à 2,9 ms et la réponse de 159 Ko à 45 Ko — le plan gratuit ne laisse que
10 ms de CPU par requête.

## Réponse

`GET /balises` → JSON, vent **en nœuds**, direction **en provenance**, mesures du
**jour en cours à Paris**, triées par horodatage croissant.

```json
{
  "generated_at": "2026-10-11T20:31:12Z",
  "day": "2026-10-11",
  "unit": "kt",
  "direction": "provenance",
  "step_min": 30,
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
restent servies. Un champ `degraded` apparaît quand une balise française a dû
passer par le repli. `GET /health` dit si la clé est posée et quelles API elle
porte, jamais sa valeur.

## Repli sans le paquet

Si l'appel au paquet échoue — typiquement `403` quand la clé ne porte pas
l'abonnement — le Worker retombe sur `DPObs/v2` pour la **seule dernière mesure**
de la balise : la vignette reste vivante, la courbe reste vide, et `degraded` le
signale.

C'est volontairement minimal. Reconstituer la journée sur DPObs demandait un appel
par point, un cache de 26 h et un budget d'appels par requête, soit la mécanique la
plus fragile du Worker pour un cas qui ne doit pas durer. `GET /health` dit en une
ligne si la clé porte `DonneesPubliquesPaquetObservation`.

## Liste des balises

Le Worker ne tient **pas** sa propre table : il relit
`assets/balises_specs/balises_specifications.csv` sur la branche `affichage-web`
(variable `SPECS_URL`), gardé dix minutes en cache. Ajouter une balise ou changer
son pas fin = éditer ce CSV, rien d'autre. Les identifiants sont filtrés sur leur
forme (3 lettres pour MétéoSuisse, 8 chiffres pour Météo-France) et plafonnés à 40,
pour que le Worker ne puisse pas servir de relais vers autre chose.

## Sobriété et plafonds

Une requête `/balises` dépense **une quinzaine de sous-requêtes** : deux lectures de
cache, la fiche et sa mise en cache, une lecture par balise, l'écriture de la
réponse. Cloudflare en autorise **50 par invocation sur le plan gratuit**, et les
appels au cache partagent ce quota — la reconstitution heure par heure d'avant en
frôlait le plafond.

Côté Météo-France, le quota est de **100 requêtes par minute** (et non par jour) :
onze appels par ouverture d'onglet laissent toute la marge, là où un appel par
point la consommait presque entièrement.

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
npx wrangler secret put METEOFRANCE_API_KEY   # à chaque rotation de la clé
npx wrangler deploy
```

`CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID` dans l'environnement, ou
`npx wrangler login`. La clé Météo-France est un **secret du Worker** : elle n'est
ni dans `wrangler.toml`, ni dans le dépôt.

### Clé Météo-France : deux abonnements dans un seul jeton

Sur [portail-api.meteofrance.fr](https://portail-api.meteofrance.fr), la clé doit
porter **les deux** API :

| API | Sert à |
| --- | --- |
| `DonneesPubliquesPaquetObservation` | le paquet de 24 h, donc la courbe |
| `DonneesPubliquesObservation` | le repli, donc la vignette quand le paquet tombe |

**Les abonnements sont encodés dans le jeton** : il faut s'abonner aux deux *avant*
de le régénérer, et surtout ne pas se désabonner de `DonneesPubliquesObservation`
en ajoutant l'autre, sinon le repli disparaît avec. Une API absente répond
`403 Resource forbidden`.

La clé est un JWT en **trois parties séparées par des points**, plusieurs centaines
de caractères. Un double-clic n'en sélectionne que le premier morceau : copier le
champ entier.

La même clé va à **deux endroits**, et les deux doivent être mis à jour ensemble :

| Où | Comment |
| --- | --- |
| Worker | `npx wrangler secret put METEOFRANCE_API_KEY` |
| GitHub Actions | *Settings → Secrets and variables → Actions*, secret `METEOFRANCE_API_KEY` (archive des balises) |

Vérification, sans dépenser d'appel : `GET /health` renvoie `meteofrance_paquet` et
la liste `meteofrance_apis`, lues dans le jeton lui-même. En ligne de commande :

```bash
python3 -c "import base64,json,os,sys; p=os.environ['METEOFRANCE_API_KEY'].split('.')[1]; \
print(json.dumps(json.loads(base64.urlsafe_b64decode(p + '='*(-len(p)%4)))['subscribedAPIs'], indent=2, ensure_ascii=False))"
```

## Tests

```bash
cd worker
node --test test/*.test.js
```

Sans dépendance ni réseau : `fetch` et `caches.default` sont doublés, et la
doublure compte les sous-requêtes comme le fait Cloudflare.
