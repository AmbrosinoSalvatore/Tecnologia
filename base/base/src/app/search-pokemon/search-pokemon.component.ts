import { Component, OnInit } from '@angular/core';
import { PokemonApiManegerService } from '../pokemon-api-maneger.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {
  data: any = {}
  constructor(private api: PokemonApiManegerService) {

  }
  ngOnInit(): void {

  }
  searchPokemon(event: any) {
    const id = event.target.value;
     
      this.api.getPokemon(id).subscribe((data) => {
        console.log(data)
        this.data = data
      })
    

  }
}
