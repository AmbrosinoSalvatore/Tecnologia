import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonType } from '../models/pokemon-type.model';

@Component({
  selector: 'app-lista-tipi',
  templateUrl: './lista-tipi.component.html',
  styleUrls: ['./lista-tipi.component.css']
})
export class ListaTipiComponent implements OnInit {
  types: PokemonType[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getTipo().subscribe((data: any) => {
      this.types = data.results;
    });
  }
}