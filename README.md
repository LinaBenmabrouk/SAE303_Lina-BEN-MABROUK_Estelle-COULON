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

Les étapes sont définies dans [src/data/navigation.ts](src/data/navigation.ts) et affichées en haut de chaque page du récit (« Étape 1 sur 4 · Contexte »).

## Routes d'export

| Visualisation | Page | Route | Pourquoi |
|---|---|---|---|
| V1 · Distribution des écarts de température | Îlots de chaleur | A | L'histogramme est dessiné une fois au moment de la construction du site. Il n'a pas besoin de bouger chez le lecteur, puisqu'il montre toujours la même chose et ne dépend d'aucun choix de sa part. |
| V2 · Carte de la part des habitants en îlot de chaleur | Les habitants | A | La carte est fixe et ne dépend d'aucun choix du lecteur. Sur le site, la carte est dessinée une seule fois au moment de la construction. Le survol d'une commune affiche quand même son nom et sa part, grâce à l'infobulle du navigateur, qui ne demande aucun JavaScript. |
| V3 · Jours à 30 °C ou plus depuis 1950 | Le climat | A | L'évolution des jours chauds ne change pas selon le lecteur. On réutilise la fonction graphiqueJoursChauds au moment de la construction du site, avec le fichier jours-chauds.json. |
| V4 · Comparaison de ma commune | Ma commune | B | Nous utilisons les données JSON des communes pour permettre aux visiteurs de sélectionner leur commune et de voir son classement concernant l'exposition à la chaleur. |
| V5 · Surfaces brûlées en Gironde | Le climat | A | Les surfaces brûlées par année sont un graphique fixe, rien n'y bouge selon le lecteur. |
| V6 · Exposition selon le niveau de vie | Les habitants | A | La comparaison entre les cinq groupes de niveau de vie est fixe et ne dépend d'aucun choix du lecteur. |

## Graphiques

- [src/components/PlotFigure.astro](src/components/PlotFigure.astro) · dessine un graphique Plot au build avec JSDOM. L'option `optionsMobile` génère une deuxième version pour les téléphones, le CSS affiche la bonne.
- [src/graphiques/joursChauds.ts](src/graphiques/joursChauds.ts) · recette de V3 reprise du notebook. La fonction reçoit ses données en paramètre et renvoie les options de Plot.
- [src/data/palette.ts](src/data/palette.ts) · palette des données, distincte de la charte du site. Couleurs reprises des fiches du notebook (ColorBrewer et palette par défaut d'Observable Plot), testées pour les trois formes de daltonisme.

## Interaction

- [src/pages/ma-commune.astro](src/pages/ma-commune.astro) · graphique calculé dans le navigateur (route B). Le select, le clic sur une barre et l'adresse de la page (`#Talence`) changent la commune affichée. La fiche résultat est annoncée aux lecteurs d'écran avec `aria-live`.

## Navigation

- [src/components/Header.astro](src/components/Header.astro) · menu burger sur mobile avec `aria-expanded`, fermeture par Échap ou clic à l'extérieur, page active signalée par `aria-current`.
- [src/components/Footer.astro](src/components/Footer.astro) · liens vers les rubriques, le notebook et le dépôt GitHub.

## Accessibilité

- [src/components/Figure.astro](src/components/Figure.astro) · `<figure>` et `<figcaption>` autour de chaque graphique, avec titre, sous-titre, note et source. Le texte alternatif en 4 temps est sur le svg (`ariaLabel` et `ariaDescription`).
- [src/layouts/Layout.astro](src/layouts/Layout.astro) · `lang="fr"`, lien d'évitement « Aller au contenu », description et balises de partage pour chaque page.

## Responsive

- Graphiques en deux versions (ordinateur et mobile), menu burger, grilles qui passent de 3 à 1 colonne, sources en cartes sur mobile dans la page Méthode.

## Données

- [src/assets/](src/assets/) · six fichiers JSON exportés du notebook et préfiltrés (colonnes utiles, dénominateur gardé, deux décimales). Ils sont téléchargeables depuis la page Méthode.
