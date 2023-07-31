import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenFoodFactsService {
  private apiUrl = ;

  constructor(private http: HttpClient) { }

  searchProduct(searchTerm: string): Observable<any> {
    const url = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true'

    return this.http.get<any>(this.apiUrl, { params });
  }
}