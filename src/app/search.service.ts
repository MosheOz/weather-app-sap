import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from './types/city.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchEntries(term: string): Observable<ICity> {
    return this.http.get<ICity>(
      environment.baseUrl + environment.queryUrl + term
    );
  }
}
