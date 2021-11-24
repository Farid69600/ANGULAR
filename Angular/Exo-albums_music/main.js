"use strict";

/**********
 * TABLEAU
 **********/

const ALBUMS = [
  {
    id: 1,
    image: "img/fleetwood-mac.jpg",
    nom: "Fleetwood-Mac",
    artiste: "Fleetwood-Mac",
    label: "Sony",
    anneeParution: 1975,
    genre: "Soul",
    duréeTotale: "180 minutes",
  },
  {
    id: 2,
    image: "img/bob_dylan.jpg",
    nom: "Bob Dylan",
    artiste: "Bob Dylan",
    label: "LG",
    anneeParution: 1980,
    genre: "Country",
    duréeTotale: "200 minutes",
  },
  {
    id: 3,
    image: "img/bob_marley.jpg",
    nom: "Bob Marley",
    artiste: "Bob Marley",
    label: "Fnac",
    anneeParution: 1978,
    genre: "Reggae",
    duréeTotale: "200 minutes",
  },
  {
    id: 4,
    image: "img/JJ_Goldman.jpg",
    nom: "Jean-Jacques Goldman",
    artiste: "Jean-Jacques Goldman",
    label: "Carrefour",
    anneeParution: 2000,
    genre: "Variété",
    duréeTotale: "250 minutes",
  },
  {
    id: 5,
    image: "img/David_Bowie.jpg",
    nom: "Ziggy Stardust",
    artiste: "David Bowie",
    label: "Sony",
    anneeParution: 1975,
    genre: "Variété",
    dureeTotale: "180 minutes",
  },
];

/************************
 ********* FUNCTIONS
 *************************/

//  * Affiche les photos et descriptif des albums

function mesAlbums() {
  ALBUMS.forEach((album) => {
    ajouterAlbum(album);
  });
}

// supprime 1 album au clic
function supprimerAlbum(e) {
  document.getElementById(`divAlbum-${e.target.dataset.id}`).remove();
}

function ajouterAlbum(album) {
  document.querySelector("#groupes").insertAdjacentHTML(
    "beforeend",
    `
       <div class="albums" id="divAlbum-${album.id}">
            <div class="blocImage">
                <img src="${album.image}" alt="">
            </div>
            <div class="blocTexte">
                <p>Nom : ${album.nom}</p>
                <p>Artiste : ${album.artiste}</p>
                <p>label : ${album.label}</p>
                <p>Annee Parution : ${album.anneeParution}</p>
                <p>Genre : ${album.genre}</p>
                <p>Durée Totale : ${album.dureeTotale}</p>
                <button class="supprimer" data-id="${album.id}">Supprimer</button>
            </div>
        </div>
      `
  );
}

// ajoute 1 album par le formulaire
function editAlbum() {
  let album = {};
  album.image = document.querySelector("#url").value;
  album.nom = document.querySelector("#Name").value;
  album.artiste = document.querySelector("#Artiste").value;
  album.label = document.querySelector("#Label").value;
  album.anneeParution = document.querySelector("#Annee").value;
  album.genre = document.querySelector("#Genre").value;
  album.dureeTotale = document.querySelector("#Duree").value;
  ALBUMS.push(album);

  ajouterAlbum(album);
}

/******************
 * CODE PRINCIPAL
 ******************/
document.addEventListener("DOMContentLoaded", function () {
  mesAlbums();

  //gestionnaire d'événement au clic sur le bouton Supprimé
  document.querySelectorAll(".supprimer").forEach(function (btn) {
    btn.addEventListener("click", supprimerAlbum);
  });

  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    editAlbum();
  });
});
