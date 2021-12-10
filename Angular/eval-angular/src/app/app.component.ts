import { Component, EventEmitter, Output } from '@angular/core';
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public monService: StatistiqueService) {}
  // @Output() maSuppression = new EventEmitter();

  // suppStat() {
  //   this.Suppression.emit();
  //   console.log('coucou');
  // }

  // deleteStat(uneStat: Statistique) {
  //   let index = this.monService.tabStat.indexOf(uneStat);
  //   this.monService.tabStat.splice(index, 1);
  // }
  title = 'eval-angular';
}
