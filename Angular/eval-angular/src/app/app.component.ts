import { Component } from '@angular/core';
import { Statistique } from 'models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  statFilm = new Statistique('fa1f5f40', 'Film Statistique', '100ID');
  statJeu = new Statistique('fa1f5f41', 'Jeu Statistique', '101ID');

  title = 'eval-angular';
}
