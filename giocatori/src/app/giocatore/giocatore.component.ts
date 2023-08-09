import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GiocatoriService } from '../giocatori.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-giocatore',
  templateUrl: './giocatore.component.html',
  styleUrls: ['./giocatore.component.css']
})
export class GiocatoreComponent {
  routeObs: Observable<ParamMap>;
  giocatoreObs: Observable<any>
  item: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GiocatoriService) { }

  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
    let itemId = params.get('id'); //Ottengo l'id dai parametri
    console.log(itemId); //Stampo su console
    //spotifyServiceObs va dichiarato
    if (itemId) {
      this.giocatoreObs = this.service.searchGiocatore(itemId);
      this.giocatoreObs.subscribe((data) => this.item = data)
    }

  }

}
