import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from './types/city.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private queryUrl: string =
    '?appid=531aceebe209a418304c7a8a53e7c378&units=imperial&q=';

  constructor(private http: HttpClient) {}

  searchEntries(term: string): Observable<ICity> {
    return this.http.get<ICity>(this.baseUrl + this.queryUrl + term);
  }
}
