import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PokemonApiManegerService } from 'src/services/pokemon-api-maneger.service';

@Component({
  selector: 'app-item-pokemon',
  templateUrl: './item-pokemon.component.html',
  styleUrls: ['./item-pokemon.component.css']
})
export class ItemPokemonComponent implements OnInit {
  // Ottiene le informazioni passatogli dal richiamo del componente
  @Input() data: any = {};
  id: string | undefined = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: PokemonApiManegerService
  ) {

  }
  ngOnInit(): void {
    // Ottiene informazioni sui parametri dell'URL
    this.route.paramMap.subscribe((params: ParamMap) => {
      // Assegna l'ID dato se presente
      this.id = params.get('id')?.toString();

      // Reindirizza alla home se l'ID non e' presente
      if (!this.id) this.router.navigate(['/']);
      else {
        // Processa l'ID se presente
        this.api.getPokemon(this.id).subscribe((data) => { this.data = data })
      }
    });
  }


}
