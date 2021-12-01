import { Component } from '@angular/core';
import { Personne } from './models/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  roger = new Personne('Roger ', 'Moore', new Date('2000/05/23 '));
  jean = new Personne('Jean ', 'Carlos', new Date('2005/05/14'));
  amina = new Personne('Amina ', 'Aminaaaa', new Date('2005/05/14'));
  thomas = new Personne('Thomas ', 'Carlosssss', new Date('2005/05/14'));

  tabPersonne: Personne[] = [];
  constructor() {
    this.tabPersonne.push(this.roger, this.jean, this.amina, this.thomas);
  }

  suppPersonne(personne: Personne) {
    let index = this.tabPersonne.indexOf(personne);
    this.tabPersonne.splice(index, 1);
  }
}

// / let nbSecondes = 0;
// for (const prenom of this.tabPrenoms) {
//   setTimeout(() => {
//     this.prenomAffiche = prenom;
//   }, (nbSecondes += 2000));
// }
