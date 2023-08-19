import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiManegerService {
private baseUrl:string='https://5000-sasyvelobelo-tecnologia-yrrjuoi5tdo.ws-eu104.gitpod.io/api/'
  constructor(private http:HttpClient) { }


getPokemon(id:string):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}pokemon`,{params:{number:id}})
}
}
