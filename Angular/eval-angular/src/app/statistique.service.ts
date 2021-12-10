import { Injectable } from '@angular/core';
import { Statistique } from 'models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  public tabStat: Statistique[] = [
    new Statistique('fa1f5f40', 'Film Statistique', '100ID'),
    new Statistique('fa1f5f41', 'Jeu Statistique', '101ID'),
  ];

  constructor() {
    setTimeout(() => {
      let stat3 = new Statistique('fa1f5f42', 'Cours Angular', '101IE');
      this.tabStat.push(stat3);
    }, 2000);
  }
}
