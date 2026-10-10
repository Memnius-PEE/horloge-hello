# Index du registre — Horloge Hello

_Généré par `memnius.py index` à partir des cartes de `registre/` et du journal `registre/decisions/`. Ne pas éditer : modifier ou ajouter une carte, puis relancer l'outil._

3 cartes : 2 décisions, 1 code, 0 données, 0 source.

## Décisions

| Carte | Résumé | Décidé par | Date |
|---|---|---|---|
| [0001 — Adopter le socle commun Memnius v2](decisions/0001-adopter-le-socle.md) | Le projet suit les règles et les gardes A1–A7 du socle v2, ainsi que les options déclarées dans `memnius.yaml` (`socle.options`). | @Pwouette | 2026-10-11 |
| [0002 — Page statique sans dépendance](decisions/0002-page-statique-sans-dependance.md) | La page est un simple fichier HTML et un script JavaScript, sans bibliothèque ni étape de construction : elle s'ouvre directement dans un navigateur et sert à éprouver le kit Memnius de bout en bout. | @Pwouette | 2026-10-11 |

## Code

| Carte | Résumé | Qui | Où | Date |
|---|---|---|---|---|
| [Page horloge et Hello world](code/page-horloge.md) (à relire) | Page web statique qui affiche l'heure locale, mise à jour chaque seconde, et écrit « Hello world » quand on clique sur le bouton. | @Pwouette | [`site/index.html`](../site/index.html), [`site/horloge.js`](../site/horloge.js) | 2026-10-11 |

## Données

_Aucune carte pour l'instant._

## Sources

_Aucune carte pour l'instant._

## Qui a fait quoi

- **@Pwouette** : décisions [0001](decisions/0001-adopter-le-socle.md), [0002](decisions/0002-page-statique-sans-dependance.md) ; code [page-horloge](code/page-horloge.md)
