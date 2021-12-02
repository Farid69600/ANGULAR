import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationFilmsComponent } from './creation-films/creation-films.component';
import { ListeFilmsComponent } from './liste-films/liste-films.component';

const routes: Routes = [
  { path: 'liste', component: ListeFilmsComponent},
  { path: 'creation', component: CreationFilmsComponent},
  { path: '**', redirectTo : '/liste'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
