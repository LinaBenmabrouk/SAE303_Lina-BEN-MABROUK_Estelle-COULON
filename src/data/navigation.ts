export const rubriques = [
  {
    url: "/climat/",
    titre: "Le climat",
    description: "Les incendies de 2022 et les jours de forte chaleur depuis 1950, dans trois stations météo.",
  },
  {
    url: "/ilots/",
    titre: "Îlots de chaleur",
    description: "Où la ville chauffe le plus, d'après les températures de surface relevées en 2022.",
  },
  {
    url: "/habitants/",
    titre: "Les habitants",
    description: "Combien d'habitants vivent dans un îlot de chaleur, et le niveau de vie change-t-il quelque chose ?",
  },
  {
    url: "/ma-commune/",
    titre: "Ma commune",
    description: "Choisissez votre commune et comparez-la aux 27 autres de la métropole.",
  },
  {
    url: "/methode/",
    titre: "Méthode",
    description: "Sources, licences, traitements et limites de nos données.",
  },
];

export const memeChemin = (a: string, b: string) =>
  a.replace(/\/$/, "") === b.replace(/\/$/, "");
