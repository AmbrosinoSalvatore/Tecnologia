import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PokemonApiManegerService } from '../pokemon-api-maneger.service';

@Component({
  selector: 'app-item-pokemon',
  templateUrl: './item-pokemon.component.html',
  styleUrls: ['./item-pokemon.component.css']
})
export class ItemPokemonComponent implements OnInit {
@Input() data:any={}
id:string|undefined=''
constructor(private router:Router,private route:ActivatedRoute,private api:PokemonApiManegerService){

}
ngOnInit(): void {
  this.route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id')?.toString();

    if (!this.id) this.router.navigate(['/']);
    else {
this.api.getPokemon(this.id).subscribe((data)=>{this.data=data})
    }
  });
}


}
