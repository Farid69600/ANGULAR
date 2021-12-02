import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input() unFilm!: Film;
  @Output() demandeSuppression = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  reagirAuClick() {
    this.demandeSuppression.emit();
  }

}
