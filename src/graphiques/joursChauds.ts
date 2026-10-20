import * as Plot from "@observablehq/plot";
import { palette } from "../data/palette";

type Ligne = { station: string; annee: number; jours30: number };

export function optionsJoursChauds(
  donnees: Ligne[],
  { largeur = 800, anneeAnnotee = 2022, texteAnnotation = "…" } = {},
) {
  return {
    width: largeur,
    x: { label: null, tickFormat: (d: number) => String(d) },
    y: { label: "Jours à 30 °C ou plus par an", grid: true },
    color: { legend: true, domain: palette.stations.domaine, range: palette.stations.couleurs },
    marks: [
      Plot.dot(donnees, { x: "annee", y: "jours30", fill: "station", r: 2, fillOpacity: 0.35 }),
      Plot.lineY(
        donnees,
        Plot.windowY({ k: 10, anchor: "end" }, { x: "annee", y: "jours30", stroke: "station", strokeWidth: 2 }),
      ),
      Plot.text(
        donnees.filter((d) => d.annee === anneeAnnotee && d.station.startsWith("Mérignac")),
        { x: "annee", y: "jours30", text: () => texteAnnotation, dy: -10, textAnchor: "end" },
      ),
      Plot.ruleY([0]),
    ],
  };
}
