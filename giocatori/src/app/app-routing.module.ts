import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { GiocatoreComponent } from './giocatore/giocatore.component';

const routes: Routes = [
  { path: 'lista', component: ListaComponent },
  {path:'giocatore/:id',component:GiocatoreComponent},
  { path: '',   redirectTo: '/lista', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
