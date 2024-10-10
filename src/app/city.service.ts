import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from './cidade';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private http:HttpClient){ }

  url = 'http://localhost:3000/cidades'
  getCities(): Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.url);
  }

  deleteCities(cidade: Cidade): Observable<void>{
    return this.http.delete<void>(`${this.url}/${cidade.id}`);
  }

}
