import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  public tabFilms: Film[] = [];

  constructor() {
    let gladiator: Film = new Film(
      'Gladiator',
      2000,
      ['Action', 'Drame'],
      'Ridley Scott',
      200,
      new URL(
        'https://www.fnacspectacles.com/static/0/visuel/600/475/GLADIATOR_4750796281506268794.jpg'
      )
    );
    let matrix: Film = new Film(
      'Matrix',
      1999,
      ['Action', 'Drame'],
      'Don Davis',
      200,
      new URL(
        'https://static.wixstatic.com/media/12156e_323fdf03ed9f4c64a24ff156c259dd95~mv2.jpg/v1/fill/w_311,h_474,al_c,q_80,usm_0.66_1.00_0.01/12156e_323fdf03ed9f4c64a24ff156c259dd95~mv2.webp'
      )
    );
    let grantorino: Film = new Film(
      'Grantorino',
      2010,
      ['Action', 'Drame'],
      ' Clint Eastwood',
      112,
      new URL(
        'https://static.wixstatic.com/media/12156e_99eeb4aaf47941f99f19c64df84af568~mv2.jpg/v1/fill/w_311,h_474,al_c,q_80,usm_0.66_1.00_0.01/12156e_99eeb4aaf47941f99f19c64df84af568~mv2.webp'
      )
    );

    let parrain: Film = new Film(
      'Le Parrain',
      1972,
      ['Action', 'Drame'],
      ' Francis Coppola',
      200,
      new URL(
        'https://fr.web.img4.acsta.net/medias/nmedia/18/35/57/73/18660716.jpg'
      )
    );

    let mohicans: Film = new Film(
      'Le dernier des Mohicans',
      1992,
      ['Action', 'Drame'],
      'Michael Mann',
      180,
      new URL(
        'https://fr.web.img6.acsta.net/medias/nmedia/00/02/51/07/dernier.jpg'
      )
    );

    this.tabFilms.push(gladiator, matrix, grantorino, mohicans, parrain);
  }
}
