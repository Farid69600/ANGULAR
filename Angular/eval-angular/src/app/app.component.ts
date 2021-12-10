import { Component } from '@angular/core';
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public monService: StatistiqueService) {}

  title = 'eval-angular';
}
