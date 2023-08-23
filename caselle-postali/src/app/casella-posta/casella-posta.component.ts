import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  templateUrl: './casella-posta.component.html',
  styleUrls: ['./casella-posta.component.css']
})
export class CasellaPostaComponent {
  @Input() nomePersona: string | undefined;
}
export class lettera { lettere: string[] = [
  'lettera1',
  'lettera2',
  'lettera3'
]
  
}
