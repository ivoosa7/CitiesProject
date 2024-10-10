import { ActivatedRoute, Router } from '@angular/router';
import {  } from './../cidade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cidades',
  templateUrl: './form-cidades.component.html',
  styleUrl: './form-cidades.component.css'
})
export class FormCidadesComponent implements OnInit{
  constructor(private router: Router,
              private activeRouter: ActivatedRoute
  ){}

  ngOnInit() {
      const id = Number(this.activeRouter.snapshot.paramMap.get("id"));
  }
}
