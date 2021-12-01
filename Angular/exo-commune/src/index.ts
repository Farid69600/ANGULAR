import "./style.css";
import { Commune } from "./commune";

type CommuneServeur = {
  nom: string;
  code: string;
  codeDepartement: string;
  codeRegion: string;
  codesPostaux: string[];
  population: number;
  _score: number;
};

/************************
 ********* FUNCTIONS
 *************************/

function recupererCommune(communeRecherchee: string): Promise<Commune[]> {
  return fetch("http://geo.api.gouv.fr/communes?nom=" + communeRecherchee).then(
    function (res: Response) {
      return res.json().then(function (data) {
        let tabVilleRecuperee: Commune[] = [];
        for (const infoRecuperee of data as CommuneServeur[]) {
          tabVilleRecuperee.push(
            new Commune(
              infoRecuperee.nom,
              infoRecuperee.code,
              infoRecuperee.codeDepartement,
              infoRecuperee.codeRegion,
              infoRecuperee.codesPostaux,
              infoRecuperee.population,
              infoRecuperee._score
            )
          );
        }
        return tabVilleRecuperee;
      });
    }
  );
}

/******************
 * CODE PRINCIPAL
 ******************/
// On complète le champ "nonCommune" et au click sur le bouton rechercher, injecte le contenu

document.querySelector("form")?.addEventListener("submit", function (e: Event) {
  e.preventDefault();

  let communeRecherchee = (
    document.querySelector("input[name=nomCommune]") as HTMLInputElement
  ).value;

  recupererCommune(communeRecherchee).then((communes) => {
    communes.forEach((infos) => {
      (
        document.querySelector("#infoRecherche") as HTMLInputElement
      ).innerHTML += `<ul>
          <li>${infos.nom}</li>
          <li>${infos.code}</li>
          <li>${infos.codeDepartement}</li>
          <li>${infos.codeRegion}</li>
          <li>${infos.codesPostaux}</li>
          <li>${infos.population}</li>
          <li>${infos._score}</li>
          </ul>`;
    });
  });
});
