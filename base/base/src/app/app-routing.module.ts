import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPokemonComponent

  }
  , {
    path: 'pokemon/:id',
    component: ItemPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
