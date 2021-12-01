export class Personne {
  public prenom: string;
  public nom: string;
  public dateNaissance: Date;
  public nomComplet: string;

  constructor(prenom: string, nom: string, dateNaissance: Date) {
    this.prenom = prenom;
    this.nom = nom;
    this.dateNaissance = dateNaissance;
    this.nomComplet = `${prenom} - ${nom}`;
  }
}
