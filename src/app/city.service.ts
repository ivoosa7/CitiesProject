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
  getCidades(): Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.url);
  }
}
