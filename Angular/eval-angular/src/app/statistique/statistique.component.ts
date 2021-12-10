import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from 'models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent implements OnInit {
  @Input() uneStat!: Statistique;
  monService: any;
  constructor() {}
  @Output() maSuppression = new EventEmitter();

  suppStat() {
    this.maSuppression.emit();
    console.log('coucou');
  }

  deleteStat(uneStat: Statistique) {
    let index = this.monService.tabStat.indexOf(uneStat);
    this.monService.tabStat.splice(index, 1);
  }

  ngOnInit(): void {}
}
