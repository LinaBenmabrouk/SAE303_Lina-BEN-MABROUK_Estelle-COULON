- URL site WEB :
- URL Notebook Observable : https://observablehq.com/@mmi-montbeliard/sae-303-gr-15
- Nom : BEN MABROUK
- Prénom : Lina
- Nom binome : COULON
- Prénom binome : Estelle

# Remarques :

## Récit en 4 temps

| Étape | Page |
|---|---|
| 1 · Contexte | [src/pages/climat.astro](src/pages/climat.astro) |
| 2 · Exploration | [src/pages/ilots.astro](src/pages/ilots.astro) |
| 3 · Révélation | [src/pages/habitants.astro](src/pages/habitants.astro) |
| 4 · Conclusion | [src/pages/ma-commune.astro](src/pages/ma-commune.astro) |

Les étapes sont définies dans [src/data/navigation.ts](src/data/navigation.ts) · …

## Routes d'export

| Visualisation | Page | Route | Pourquoi |
|---|---|---|---|
| V1 · Distribution des écarts de température | Îlots de chaleur | A | … |
| V2 · Carte de la part des habitants en îlot de chaleur | Les habitants | A | … |
| V3 · Jours à 30 °C ou plus depuis 1950 | Le climat | A | … |
| V4 · Comparaison de ma commune | Ma commune | B | … |
| V5 · Surfaces brûlées en Gironde | Le climat | A | … |
| V6 · Exposition selon le niveau de vie | Les habitants | A | … |

## Graphiques

- [src/components/PlotFigure.astro](src/components/PlotFigure.astro) · …
- [src/graphiques/joursChauds.ts](src/graphiques/joursChauds.ts) · …
- [src/data/palette.ts](src/data/palette.ts) · …

## Interaction

- [src/pages/ma-commune.astro](src/pages/ma-commune.astro) · …

## Navigation

- [src/components/Header.astro](src/components/Header.astro) · …
- [src/components/Footer.astro](src/components/Footer.astro) · …

## Accessibilité

- [src/components/Figure.astro](src/components/Figure.astro) · …
- [src/layouts/Layout.astro](src/layouts/Layout.astro) · …

## Responsive

- …

## Données

- [src/assets/](src/assets/) · …
