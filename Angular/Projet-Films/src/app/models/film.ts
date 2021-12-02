export class Film {
    public nom: string;
    public anneeSortie: number;
    public genres : string[];
    public realisateur: string;
    public duree: number;
    public image : URL;

    constructor(nom: string, anneeSortie: number, genres: string[], realisateur: string, duree: number, image: URL = new URL("./defaultImage.png")) {
        this.nom = nom;
        this.anneeSortie = anneeSortie;
        this.genres = genres;
        this.realisateur = realisateur;
        this.duree = duree;
        this.image = image;
    }
}
