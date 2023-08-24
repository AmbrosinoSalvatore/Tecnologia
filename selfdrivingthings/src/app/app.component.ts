import { Component } from '@angular/core';
import { DrivingModel } from './driving.model';
import { RentModel } from './rent.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Driving List</h1>
    <ul>
      <li *ngFor="let driving of drivingList">
        {{ driving.tipo }} - {{ driving.descrizione }} - {{ driving.tariffa }} - {{ driving.valutazionemedia }}
        <button (click)="noleggiaMezzo(driving.tipo)">Noleggia</button>
      </li>
    </ul>

    <h2>Rented</h2>
    <ul>
      <li *ngFor="let rented of rentedList">
        {{ rented.veicolo }} - {{ rented.numeroNoleggi }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  drivingList: DrivingModel[];
  rentedList: RentModel[] = [];

  constructor() {
    // Simulazione del caricamento dei dati all'avvio dell'applicazione
    this.drivingList = [
      {
        tipo: "auto buzz",
        descrizione: "un vero schianto",
        tariffa: "10 soldi al minuto",
        valutazionemedia: "3"
      },
      {
        tipo: "moto buzz ",
        descrizione: "una vera bomba",
        tariffa: "5 soldi al minuto",
        valutazionemedia: "3.5"
      },
      {
        tipo: "deltaplano buzz",
        descrizione: "se non abiti sopra il 5° piano non va ...",
        tariffa: "3 soldi al minuto",
        valutazionemedia: "1"
      }
    ];
  }

  noleggiaMezzo(veicolo: string) {
    console.log("Mezzo noleggiato:", veicolo);
    const rentIndex = this.rentedList.findIndex((rent) => rent.veicolo === veicolo);

    if (rentIndex === -1) {
      this.rentedList.push(new RentModel(veicolo, 1));
    } else {
      this.rentedList[rentIndex].numeroNoleggi++;
    }
  }
}