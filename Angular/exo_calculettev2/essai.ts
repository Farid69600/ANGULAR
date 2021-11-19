let tarif1: HTMLInputElement = document.querySelector("#montant1");
let tarif2: HTMLInputElement = document.querySelector("#montant1");

function addition(e) {
  e.preventDefault();
  let montantTotal: number = parseInt(tarif1.value) + parseInt(tarif2.value);
  alert("Le total est de : " + montantTotal);
}

document.querySelector("form").addEventListener("submit", addition);
