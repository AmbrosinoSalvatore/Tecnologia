import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GiocatoriService {
  constructor(private http: HttpClient) { }
  search() {
    let url = `https://www.balldontlie.io/api/v1/players`;
    let obsGiocatori = this.http.get(url);
    return obsGiocatori;
  }


  searchGiocatore(id: string) {
    let url = `https://www.balldontlie.io/api/v1/players/${id}`;

    let obsGiocatore = this.http.get(url);
    return obsGiocatore;
  }
}