import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

type DonneesLoginServeur = {
  token: string;
  email: string;
  id: string;
  updatedAt: string;
};

type DonneesStatsServeur = {
  recurrence: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private token: string = '';
  private api_url =
    'https://g0lkzlavh1.execute-api.eu-west-3.amazonaws.com/dev/';
  public connecte = false;
  public recurrence!: number;

  constructor(private http: HttpClient) {}

  /* Connexion au serveur : on envoie un email et un password 
    S'ils sont corrects, le serveur renverra un objet contenant le token
  */
  login() {
    this.http
      .post(
        this.api_url + 'login',
        JSON.stringify({
          email: 'test@test.fr',
          password: 'password',
        })
      )
      .toPromise()
      .then(
        (data) => {
          let donneesServeur = data as DonneesLoginServeur;
          this.token = donneesServeur.token;
          this.connecte = true;
        },
        (err) => {
          //Si code status différent de 2XX, on l'aura ici
          //Par exemple, si le login ou le mdp est incorrect, on aura un status 401
          console.log(err.status);
        }
      );
  }

  /*
    Récupération des statistiques, on envoie le token en entête de la requête HTTP 
  */
  getStats() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token, //Le token a été récupéré lors du login
      }),
    };
    this.http
      .get(this.api_url + 'stats/2001-01-01/2004-01-04', httpOptions)
      .toPromise()
      .then(
        (res) => {
          let donneesRecues = res as DonneesStatsServeur;

          this.recurrence = donneesRecues.recurrence;
        },
        (err) => {
          //Si code status différent de 2XX, on l'aura ici
          console.log(err.status);
        }
      );
  }
}
