export class Jeu {
  public id: number;
  public nom: string;
  public genre: string;
  public editeur: string;
  public pegi: number;
  public anneeSortie: number;
  public multijoueur: string;
  public enLigne: string;
  public image: URL;

  constructor(
    unId: number,
    unNom: string,
    unGenre: string,
    unEditeur: string,
    unPegi: number,
    uneAnneeSortie: number,
    unMultijoueur: string,
    estEnLigne: string,
    uneImage: URL
  ) {
    this.id = unId;
    this.nom = unNom;
    this.genre = unGenre;
    this.editeur = unEditeur;
    this.pegi = unPegi;
    this.anneeSortie = uneAnneeSortie;
    this.multijoueur = unMultijoueur;
    this.enLigne = estEnLigne;
    this.image = uneImage;
  }
}
