import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Film } from '../models/film';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-creation-films',
  templateUrl: './creation-films.component.html',
  styleUrls: ['./creation-films.component.css'],
})
export class CreationFilmsComponent implements OnInit {
  nom!: string;
  anneeSortie!: number;
  genre!: string;
  realisateur!: string;
  duree!: number;
  image!: URL;

  constructor(public singletonFilm: FilmsService) {}

  ngOnInit(): void {}

  validerForm(monForm: NgForm) {
    let monNouveauFilm = new Film(
      this.nom,
      this.anneeSortie,
      [this.genre],
      this.realisateur,
      this.duree,
      this.image
    );
    this.singletonFilm.tabFilms.push(monNouveauFilm);
    monForm.reset();
  }
}
