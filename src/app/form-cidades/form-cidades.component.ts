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
  turismOptions: String[] = [];
  cityId: number | undefined;

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

    //Para poder separar as opções cadastradas de tursimo
    this.cityId = +this.activeRouter.snapshot.paramMap.get('id')!;

    if (this.cityId) {
      this.service.getCitiesById(this.cityId).subscribe(cidade => {
        this.turismOptions = cidade.turism.split(',').map(item => item.trim());
      })
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
