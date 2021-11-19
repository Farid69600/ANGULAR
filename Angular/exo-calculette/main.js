let tarif1 = document.querySelector("#montant1");
let tarif2 = document.querySelector("#montant2");

// Calcul des 2 montants aditionnés.
function addition(e) {
  e.preventDefault();
  let montantTotal = parseInt(tarif1.value) + parseInt(tarif2.value);
  alert("Le total est de : " + montantTotal);
}

document.querySelector("form").addEventListener("submit", addition);
