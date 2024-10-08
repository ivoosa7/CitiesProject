import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableCidadesComponent } from './table-cidades/table-cidades.component';
import { FormCidadesComponent } from './form-cidades/form-cidades.component';

@NgModule({
  declarations: [
    AppComponent,
    TableCidadesComponent,
    FormCidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
