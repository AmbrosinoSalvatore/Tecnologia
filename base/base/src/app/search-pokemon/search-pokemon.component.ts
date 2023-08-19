import { Component } from '@angular/core';
import { PokemonApiManegerService } from 'src/services/pokemon-api-maneger.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {
  data: any = {};

  constructor(
    private api: PokemonApiManegerService
  ) { }


  // Funzione richiamta al cambio dell'input box, sovrascrive la variabile globale con i dati del pokemon, se presenti
  searchPokemon(event: any) {
    // Ottiene l'ID dalla input box
    const id = event.target.value;

    // Il dato viene processato
    this.api.getPokemon(id).subscribe((data) => {
      this.data = data;
    })
  }
}
