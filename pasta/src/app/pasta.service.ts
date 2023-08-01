import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class PasteService {
    constructor(private http: HttpClient) { }
    search(query: string) {
        let url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`;
       
        let obsTracks = this.http.get(url);
        return obsTracks;
      }
      searchProduct(id:string){
        let url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
        
        let obsTracks = this.http.get(url);
        return obsTracks;
      }
        
      
}
