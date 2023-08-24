import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cassettiera',
  templateUrl: './cassettiera.component.html',
  styleUrls: ['./cassettiera.component.css']
})
export class CassettieraComponent implements OnInit {
  utenti: string[] = ["pino", "mino", "rino", "tino", "lino", "gino", "nino", "vino", "zino", "sino"];

  constructor() { }

  ngOnInit(): void {
  }
}
