import { ActivatedRoute, Router } from '@angular/router';
import {  } from './../cidade';
import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-form-cidades',
  templateUrl: './form-cidades.component.html',
  styleUrl: './form-cidades.component.css'
})
export class FormCidadesComponent implements OnInit{
  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private service: CityService
  ){}

  ngOnInit() {
    const id = Number(this.activeRouter.snapshot.paramMap.get("id"));
    this.loadId(id);
  }

  loadId(id:number){
    this.service.getCitiesById(id).subscribe({
      next: data => alert(data.city)
    });
  }


}
