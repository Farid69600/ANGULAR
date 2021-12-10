import { Component } from '@angular/core';
import { Statistique } from 'models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tabStat: Statistique[] = [
    new Statistique('fa1f5f40', 'Film Statistique', '100ID'),
    new Statistique('fa1f5f41', 'Jeu Statistique', '101ID'),
  ];

  constructor() {
    setTimeout(() => {
      let stat3 = new Statistique('fa1f5f42', 'Cours Angular', '101IE');
      this.tabStat.push(stat3);
    }, 5000);
  }

  title = 'eval-angular';
}
