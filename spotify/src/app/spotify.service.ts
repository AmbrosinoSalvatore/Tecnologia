import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCpy4oqOzKApOH9BlcNJdP1NmjiG7Bl3Bf8V-OHwY3z8nyjFT_qzikWzH38CcQbVbwCLZ50xr8o7FmHAsh2dH2L_Y_-EOC1URPIsNES2l0u68iZqZdTwlcihgDt900_Zjy6OPXcbdY3lEbuxZwnwdQqkebeVk2CES01FYe7zNcr4pwnjjeg5Wa-YC0aCJ0ooxPOJoQ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCpy4oqOzKApOH9BlcNJdP1NmjiG7Bl3Bf8V-OHwY3z8nyjFT_qzikWzH38CcQbVbwCLZ50xr8o7FmHAsh2dH2L_Y_-EOC1URPIsNES2l0u68iZqZdTwlcihgDt900_Zjy6OPXcbdY3lEbuxZwnwdQqkebeVk2CES01FYe7zNcr4pwnjjeg5Wa-YC0aCJ0ooxPOJoQ'
    });
    
    return this.http.get(url, { headers });
  }
}