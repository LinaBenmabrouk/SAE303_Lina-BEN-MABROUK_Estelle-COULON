// Rubriques du site, dans l'ordre du menu.
// Le menu et les cartes de l'accueil sont fabriqués à partir de cette liste.
// Les URL finissent par « / » pour fonctionner avec Netlify (TP3).
// « description » s'affiche sur les cartes de l'accueil (texte à écrire).
export const rubriques = [
  { url: "/climat/", titre: "Le climat", description: "…" },
  { url: "/ilots/", titre: "Îlots de chaleur", description: "…" },
  { url: "/habitants/", titre: "Les habitants", description: "…" },
  { url: "/ma-commune/", titre: "Ma commune", description: "…" },
  { url: "/methode/", titre: "Méthode", description: "…" },
];

// Compare deux chemins sans tenir compte du « / » final
export const memeChemin = (a: string, b: string) =>
  a.replace(/\/$/, "") === b.replace(/\/$/, "");
