export class Statistique {
  unIdentifiant: string;
  unTitre: string;
  uneValeur: string;

  constructor(id: string, titre: string, valeur: string) {
    this.unIdentifiant = id;
    this.unTitre = titre;
    this.uneValeur = valeur;
  }
}
