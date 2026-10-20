export const rubriques = [
  {
    url: "/climat/",
    etape: "Contexte",
    titre: "Le climat",
    description: "Les incendies de 2022 et les jours de forte chaleur depuis 1950, dans trois stations météo.",
  },
  {
    url: "/ilots/",
    etape: "Exploration",
    titre: "Îlots de chaleur",
    description: "Où la ville chauffe le plus, d'après les températures de surface relevées en 2022.",
  },
  {
    url: "/habitants/",
    etape: "Révélation",
    titre: "Les habitants",
    description: "Combien d'habitants vivent dans un îlot de chaleur, et le niveau de vie change-t-il quelque chose ?",
  },
  {
    url: "/ma-commune/",
    etape: "Conclusion",
    titre: "Ma commune",
    description: "Choisissez votre commune et comparez-la aux 27 autres de la métropole.",
  },
  {
    url: "/methode/",
    titre: "Méthode",
    description: "Sources, licences, traitements et limites de nos données.",
  },
];

const etapes = rubriques.filter((r) => r.etape);

export const etapeDe = (url: string) => {
  const i = etapes.findIndex((r) => r.url === url);
  return `Étape ${i + 1} sur ${etapes.length} · ${etapes[i].etape}`;
};

export const memeChemin = (a: string, b: string) =>
  a.replace(/\/$/, "") === b.replace(/\/$/, "");
