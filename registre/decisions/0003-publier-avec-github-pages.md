# 0003 — Publier la page avec GitHub Pages

- Date : 2026-10-11
- Origine : [choix] « oui » de Romain à la proposition de publier la page en ligne
- Décidé par : @Pwouette
- Options écartées : publier depuis la branche main (GitHub Pages ne sert que la racine ou docs/, pas site/)
- Source : projet Claude « Memnius », message de Romain du 2026-10-11
- Remplace : —

Le dossier `site/` est publié sur GitHub Pages par le workflow `.github/workflows/pages.yml`, à chaque
fusion dans `main` qui le touche : <https://memnius-pee.github.io/horloge-hello/>.
Le projet passe aussi au workflow des gardes de la décision 0019 du socle (index poussé par la clé de
déploiement du projet) et ajoute CONTRIBUTING.md.
