# Index du registre — Horloge Hello

_Généré par `memnius.py index` à partir des cartes de `registre/` et du journal `registre/decisions/`. Ne pas éditer : modifier ou ajouter une carte, puis relancer l'outil._

5 cartes : 3 décisions, 1 code, 0 données, 0 source, 1 document.

## Décisions

| Carte | Résumé | Décidé par | Date |
|---|---|---|---|
| [0001 — Adopter le socle commun Memnius v2](decisions/0001-adopter-le-socle.md) | Le projet suit les règles et les gardes A1–A7 du socle v2, ainsi que les options déclarées dans `memnius.yaml` (`socle.options`). | @Pwouette | 2026-10-11 |
| [0002 — Page statique sans dépendance](decisions/0002-page-statique-sans-dependance.md) | La page est un simple fichier HTML et un script JavaScript, sans bibliothèque ni étape de construction : elle s'ouvre directement dans un navigateur et sert à éprouver le kit Memnius de bout en bout. | @Pwouette | 2026-10-11 |
| [0003 — Publier la page avec GitHub Pages](decisions/0003-publier-avec-github-pages.md) | Le dossier `site/` est publié sur GitHub Pages par le workflow `.github/workflows/pages.yml`, à chaque fusion dans `main` qui le touche : <https://memnius-pee.github.io/horloge-hello/>. Le projet passe aussi au workflow des gardes de la décision 0019 du socle (index poussé par la clé de déploiement… | @Pwouette | 2026-10-11 |

## Code

| Carte | Résumé | Qui | Où | Date |
|---|---|---|---|---|
| [Page horloge et Hello world](code/page-horloge.md) (à relire) | Page web statique qui affiche l'heure locale, mise à jour chaque seconde, et écrit « Hello world » quand on clique sur le bouton. | @Pwouette | [`site/index.html`](../site/index.html), [`site/horloge.js`](../site/horloge.js), [memnius-pee.github.io](https://memnius-pee.github.io/horloge-hello/) | 2026-10-11 |

## Données

_Aucune carte pour l'instant._

## Sources

_Aucune carte pour l'instant._

## Documents

| Carte | Résumé | Qui | Où | Date |
|---|---|---|---|---|
| [Mode d'emploi de la page](documents/mode-d-emploi.md) (à relire) | Explique en trois étapes comment ouvrir la page et ce qu'elle fait, pour quelqu'un qui découvre le projet. | @Pwouette | [`docs/mode-d-emploi.md`](../docs/mode-d-emploi.md) | 2026-10-12 |

## Qui a fait quoi

- **@Pwouette** : décisions [0001](decisions/0001-adopter-le-socle.md), [0002](decisions/0002-page-statique-sans-dependance.md), [0003](decisions/0003-publier-avec-github-pages.md) ; code [page-horloge](code/page-horloge.md) ; documents [mode-d-emploi](documents/mode-d-emploi.md)
