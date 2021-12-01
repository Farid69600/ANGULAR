export class Commune {
  public nom: string;
  public code: string;
  public codeDepartement: string;
  public codeRegion: string;
  public codesPostaux: string[];
  public population: number;
  public _score: number;

  constructor(
    nom: string,
    code: string,
    codeDepartement: string,
    codeRegion: string,
    codesPostaux: string[],
    population: number,
    _score: number
  ) {
    this.nom = nom;
    this.code = code;
    this.codeDepartement = codeDepartement;
    this.codeRegion = codeRegion;
    this.codesPostaux = codesPostaux;
    this.population = population;
    this._score = _score;
  }
}
