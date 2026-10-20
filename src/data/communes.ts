import exposition from "../assets/exposition-communes.json";

export { exposition };

export const listeCommunes = exposition
  .map((c) => c.nom)
  .sort((a, b) => a.localeCompare(b, "fr"));

const totalHabitants = exposition.reduce((total, c) => total + c.habitants, 0);
const totalExposes = exposition.reduce((total, c) => total + c.exposes, 0);
export const moyenneMetropole = (totalExposes / totalHabitants) * 100;

const classement = [...exposition].sort((a, b) => b.part - a.part).map((c) => c.nom);

export const plusExposee = exposition.find((c) => c.nom === classement[0])!;
export const moinsExposee = exposition.find((c) => c.nom === classement[classement.length - 1])!;

export function infosCommune(nom: string) {
  const commune = exposition.find((c) => c.nom === nom) ?? exposition[0];
  return {
    ...commune,
    rang: classement.indexOf(commune.nom) + 1,
    ecart: commune.part - moyenneMetropole,
  };
}

export const formatPart = (x: number) => x.toFixed(1).replace(".", ",");
export const formatNombre = (x: number) => x.toLocaleString("fr-FR");

export function phraseEcart(ecart: number) {
  const points = Math.abs(Math.round(ecart));
  if (points === 0) return "Dans la moyenne de la métropole";
  const sens = ecart > 0 ? "au-dessus" : "en dessous";
  return `${points} point${points > 1 ? "s" : ""} ${sens} de la moyenne de la métropole (${formatPart(moyenneMetropole)} %)`;
}
