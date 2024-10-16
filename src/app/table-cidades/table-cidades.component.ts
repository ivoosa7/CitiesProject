import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { CityService } from '../city.service';

@Component({
  selector: 'app-table-cidades',
  templateUrl: './table-cidades.component.html',
  styleUrl: './table-cidades.component.css'
})
export class TableCidadesComponent implements OnInit{
  cidades:Cidade [] = [];
  constructor(private service:CityService,
              private router: Router){ }

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(){
    this.service.getCities().subscribe({
      next: data => this.cidades = data
    });
  }

  delete(cidade:Cidade){
      this.service.deleteCities(cidade).subscribe({
        next: () => this.loadCities()
      })
  }

}
