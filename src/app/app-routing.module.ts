import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCidadesComponent } from './form-cidades/form-cidades.component';
import { TableCidadesComponent } from './table-cidades/table-cidades.component';

const routes: Routes = [
  {path: '', redirectTo:'/cidades', pathMatch:'full'},
  {path: 'cidades', component: TableCidadesComponent},
  {path: 'cidade/:id', component: FormCidadesComponent},
  {path: 'cidade', component: FormCidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
