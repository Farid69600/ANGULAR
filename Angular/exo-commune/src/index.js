"use strict";
exports.__esModule = true;
require("./style.css");
/************************
 ********* FUNCTIONS
 *************************/
/******************
 * CODE PRINCIPAL
 ******************/
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    // On complète le champ "nonCommune" et au click sur le bouton rechercher, affiche le contenu dans la console
    (_a = document
        .querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
        e.preventDefault();
        var communeRecherchee = document.querySelector("input[name=nomCommune]").value;
        console.log(communeRecherchee);
    });
});
