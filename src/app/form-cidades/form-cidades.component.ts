import { CityService } from '../city.service';
import { Cidades } from './../cidade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cidades',
  templateUrl: './form-cidades.component.html',
  styleUrl: './form-cidades.component.css'
})
export class FormCidadesComponent implements OnInit{
  cidades: Cidades[] = [];
  constructor(private service: CityService) { }
  ngOnInit(): void {
    this.loadCities();
  }
  loadCities(){
    this.service.getCity().subscribe({
      next: data => this.cidades = data
    });
  }
}
