import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  templateUrl: './casella-posta.component.html',
  styleUrls: ['./casella-posta.component.css']
})
export class CasellaPostaComponent implements OnInit {
  @Input() utente: string | undefined;
  lettere: string[] = ["lettera1", "lettera2", "lettera3"];

  constructor() { }

  ngOnInit(): void {
  }
}

