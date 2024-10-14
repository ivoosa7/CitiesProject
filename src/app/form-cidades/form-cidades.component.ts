import { ActivatedRoute, Router } from '@angular/router';
import {  } from './../cidade';
import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-cidades',
  templateUrl: './form-cidades.component.html',
  styleUrl: './form-cidades.component.css'
})
export class FormCidadesComponent implements OnInit{

  formGroupCidade: FormGroup;
  isEditMode: boolean = false;

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private service: CityService,
              private formBuilder: FormBuilder
  ){
    this.formGroupCidade = formBuilder.group({
      id        : [''],
      city      : [''],
      country   : [''],
      population: [''],
      language  : [''],
      turism    : ['']
    });
  }

  ngOnInit() {
    const id = Number(this.activeRouter.snapshot.paramMap.get("id"));
    this.isEditMode = id !== 0;
    if(id != 0){
      this.loadId(id);
    }

  }

  loadId(id:number){
    this.service.getCitiesById(id).subscribe({
      next: data => this.formGroupCidade.setValue(data)
    });
  }


  updateCity(){
    this.service.updateCity(this.formGroupCidade.value).subscribe({
      next: () => this.router.navigate(['cidades'])
    });
  }

  saveCity(){
    this.service.saveCity(this.formGroupCidade.value).subscribe({
      next: () => this.router.navigate(['cidades'])
    });
  }

}
