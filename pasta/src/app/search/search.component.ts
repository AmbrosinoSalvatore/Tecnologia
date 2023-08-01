import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PasteService } from '../pasta.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string="";
  title = 'paste';
  obsTrack: Observable<Object>;
  results: any;


  constructor(public Paste: PasteService) {


  }
  submit(query: HTMLInputElement): void {


    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.Paste.search(this.query);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }
}
