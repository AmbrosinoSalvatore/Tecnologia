import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getTipo(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/type');
  }
  constructor(private http: HttpClient) {
    
   }
}
