import { Component, OnInit } from '@angular/core';
import { Cidades } from '../cidade';
import { CityService } from '../city.service';

@Component({
  selector: 'app-table-cidades',
  templateUrl: './table-cidades.component.html',
  styleUrl: './table-cidades.component.css'
})
export class TableCidadesComponent implements OnInit{
  cidades:Cidades [] = [];
  constructor(private service:CityService){ }

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(){
    this.service.getCidades().subscribe({
      next: data => this.cidades = data
    });
  }
}
