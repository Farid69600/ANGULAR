const factures = [
  {
    client: "HumanBooster",
    montant: 150,
  },
  {
    client: "Carrefour",
    montant: 300,
  },
  {
    client: "Auchan",
    montant: 500,
  },
  {
    client: "Intermarché",
    montant: 700,
  },
];

function rechercherIndex(client, montant) {
  let index = 0;
  while (
    client != factures[index].client &&
    montant != factures[index].montant &&
    index < factures.length
  )
    index++;

  return index;
}
console.log(rechercherIndex("Intermarché", 700));
console.log(rechercherIndex("Intkjhgfdsermarché", 700));
