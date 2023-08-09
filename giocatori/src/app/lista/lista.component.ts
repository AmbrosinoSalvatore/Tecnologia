import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GiocatoriService } from '../giocatori.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  title = 'prova';
  obsGiocatori: Observable<Object>;
  results: any;

  constructor(public Giocatori: GiocatoriService) {



  }
  ngOnInit(){
    this.obsGiocatori = this.Giocatori.search();
    this.obsGiocatori.subscribe((data) => { this.results = data; console.log(this.results) });
  }
}
