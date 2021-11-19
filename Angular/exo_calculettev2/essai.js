var tarif1 = document.querySelector("#montant1");
var tarif2 = document.querySelector("#montant1");
function addition(e) {
    e.preventDefault();
    var montantTotal = parseInt(tarif1.value) + parseInt(tarif2.value);
    alert("Le total est de : " + montantTotal);
}
document.querySelector("form").addEventListener("submit", addition);
