import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Film } from '../models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  @Input() unFilm!: Film;
  @Output() demandeSuppression = new EventEmitter();
  @Output() demandeModification = new EventEmitter();

  constructor(private routeur: Router) {}

  ngOnInit(): void {}

  reagirAuClick() {
    this.demandeSuppression.emit();
  }

  reagirModifier() {
    this.routeur.navigate(['/creation', this.unFilm.identifiant]);
  }
}
