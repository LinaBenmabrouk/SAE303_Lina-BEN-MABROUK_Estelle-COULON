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
| V1 · Distribution des écarts de température | Îlots de chaleur | A | L'histogramme est créé une seule fois quand le site est construit. Il n'a pas besoin de changer puisque les données restent les mêmes et que le visiteur n'a rien à sélectionner. |
| V2 · Carte de la part des habitants en îlot de chaleur | Les habitants | A | La carte est créée directement avec le site, car les données ne changent pas selon le visiteur. Par contre, quand on passe la souris sur une commune, on peut voir son nom et son pourcentage d'habitants exposés, sans avoir besoin de JavaScript. |
| V3 · Jours à 30 °C ou plus depuis 1950 | Le climat | A | Le graphique montre l'évolution des journées à 30 °C ou plus depuis 1950. Comme les données ne changent pas selon le visiteur, le graphique est créé une seule fois avec la fonction graphiqueJoursChauds et le fichier jours-chauds.json. |
| V4 · Comparaison de ma commune | Ma commune | B | NOn utilise les données JSON des communes pour que le visiteur puisse choisir sa commune. Ensuite, le graphique change pour montrer son pourcentage d'habitants exposés et son classement par rapport aux autres communes. |
| V5 · Surfaces brûlées en Gironde | Le climat | A | Le graphique montre les surfaces brûlées chaque année en Gironde. Il reste toujours le même puisque le visiteur ne peut pas modifier les données ou choisir une année. Il est donc créé directement avec le site. |
| V6 · Exposition selon le niveau de vie | Les habitants | A | Le graphique compare les cinq groupes de niveau de vie pour voir s'il y a des différences d'exposition à la chaleur. Comme le visiteur n'a rien à sélectionner et que les données restent les mêmes, le graphique est créé une seule fois. |

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
