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

  //1º Serviço
  getCities(): Observable<Cidade[]>{
    return this.http.get<Cidade[]>(this.url);
  }

  //2º Serviço
  deleteCities(cidade: Cidade): Observable<void>{
    return this.http.delete<void>(`${this.url}/${cidade.id}`);
  }

  //3º Serviço
  getCitiesById(id:number): Observable<Cidade>{
    return this.http.get<Cidade>(`${this.url}/${id}`);
  }

  //4º Serviço
  updateCity(cidade: Cidade): Observable<Cidade>{
    return this.http.put<Cidade>(`${this.url}/${cidade.id}`, cidade);
  }
}
