import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTipiComponent } from './lista-tipi/lista-tipi.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
const routes: Routes = [
  { path: '', redirectTo: 'tipi', pathMatch: 'full' },
  { path: 'tipi', component: ListaTipiComponent },
  { path: 'lista-pokemon/:id', component: ListaPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appoutingModule { }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
