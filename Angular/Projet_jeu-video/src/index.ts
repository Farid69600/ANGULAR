import { Jeu } from "./jeu";
import "./style.css";

let compteurIdentifiants = 0;

let tabJeux: Jeu[] = [
  new Jeu(
    ++compteurIdentifiants,
    "assassins Creed",
    "Aventure",
    "Ubisoft",
    18,
    2007,
    "oui",
    "oui",
    new URL(
      "https://images-na.ssl-images-amazon.com/images/I/513gesNIxRL._SX307_BO1,204,203,200_.jpg"
    )
  ),

  new Jeu(
    ++compteurIdentifiants,
    "Tomb Raider",
    "Aventure",
    "Eidos Interactive",
    18,
    2015,
    "oui",
    "oui",
    new URL("https://m.media-amazon.com/images/I/610CYEwFtTS._AC_SL1000_.jpg")
  ),

  new Jeu(
    ++compteurIdentifiants,
    "Super Mario",
    "Aventure",
    "Interactive",
    18,
    2017,
    "oui",
    "oui",
    new URL(
      "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperMario3DWorldAndBowsersFury_image800w.jpg"
    )
  ),

  new Jeu(
    ++compteurIdentifiants,
    "Age of Empires",
    "Aventure",
    "Microsoft",
    18,
    2020,
    "oui",
    "oui",
    new URL(
      "https://s3.gaming-cdn.com/images/products/4820/271x377/age-of-empires-ii-definitive-edition-steam-edition-pc-jeu-steam-cover.jpg"
    )
  ),
];

/************************
 ********* FUNCTIONS
 *************************/

//  * Affiche les jeux

function mesJeux() {
  tabJeux.forEach((jeu) => {
    ajouterJeu(jeu);
  });
}

// supprime 1 jeu au clic
function supprimerJeu(e: Event) {
  let idJeu = (e.target as HTMLButtonElement).dataset.id;
  (document.getElementById(`divMonJeu-${idJeu}`) as HTMLDivElement).remove();

  recupeValForm();
}

// contenu du jeu que l'on rajoutera à l'affichage de tout les jeux
function ajouterJeu(jeu: Jeu) {
  document.querySelector("#lesJeux")!.insertAdjacentHTML(
    "beforeend",
    `
       <div id="divMonJeu-${jeu.id}">
        <div class="jeux">
            <div class="blocImage">
                <img src="${jeu.image}"
                    alt="">
            </div>
            <div class="blocTexte">
                <p>Nom : ${jeu.nom}</p>
                <p>Genre : ${jeu.genre}</p>
                <p>Editeur : ${jeu.editeur}</p>
                <p>pegi :${jeu.pegi}</p>
                <p>Annee Sortie : ${jeu.anneeSortie}</p>
                <p>multijoueur : ${jeu.multijoueur}</p>
                <p>En ligne : ${jeu.enLigne}</p>
                <button class="supprimer" data-id="${jeu.id}">Supprimer</button>
            </div>
        </div>
      `
  );

  document
    .querySelector(`button[data-id="${jeu.id}"]`)!
    .addEventListener("click", supprimerJeu);
}

// ajoute 1 jeu par le formulaire
function recupeValForm() {
  let newJeu: Jeu = {
    id: ++compteurIdentifiants,
    image: new URL((document.querySelector("#url") as HTMLInputElement).value),
    nom: (document.querySelector("#nom") as HTMLInputElement).value,
    genre: (document.querySelector("#genre") as HTMLInputElement).value,
    editeur: (document.querySelector("#editeur") as HTMLInputElement).value,
    pegi: (document.querySelector("#pegi") as HTMLInputElement).valueAsNumber,
    anneeSortie: (document.querySelector("#annee") as HTMLInputElement)
      .valueAsNumber,
    multijoueur: (document.querySelector("#multi") as HTMLInputElement).value,
    enLigne: (document.querySelector("#ligne") as HTMLInputElement).value,
  };
  tabJeux.push(newJeu);

  ajouterJeu(newJeu);
}

/******************
 * CODE PRINCIPAL
 ******************/
newFunction();
function newFunction() {
  document.addEventListener("DOMContentLoaded", function () {
    mesJeux();

    document.querySelector("form")!.addEventListener("submit", function (e) {
      e.preventDefault();
      recupeValForm();
    });

    //gestionnaire d'événement au clic sur le bouton Supprimé
    document.querySelectorAll(".supprimer").forEach(function (btn) {
      btn.addEventListener("click", supprimerJeu);
    });
  });
}
