import { Component, createPlatform } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Intro } from './models/characters.model'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'prep_ver';
  obsCh!: Observable<Intro>
  data!: Intro
  constructor(public http: HttpClient) { }

  NgOninit(): void {
    this.obsCh = this.http.get<Intro>('https://hp-api.onrender.com/api/characters')
    this.obsCh.subscribe(this.risultato)
  }
  risultato = (data: Intro) => {
    this.data = data;
    console.log(data.Root)
  }
}
