import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PasteService } from '../pasta.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  routeObs: Observable<ParamMap>;
  pastaServiceObs:Observable<any>
  item:any;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: PasteService ) { }
    
    ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
    }
    getRouterParam = (params: ParamMap) =>
    {
      let itemId = params.get('id'); //Ottengo l'id dai parametri
      console.log (itemId); //Stampo su console
      //spotifyServiceObs va dichiarato
      if (itemId){      this.pastaServiceObs = this.service.searchProduct(itemId) ;
        this.pastaServiceObs.subscribe((data)=>this.item = data)}

    }
}
