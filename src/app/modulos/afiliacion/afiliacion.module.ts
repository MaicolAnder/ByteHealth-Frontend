import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionRoutingModule } from './afiliacion-routing.module';
import { ConsultarAfiliadoComponent } from './buscar-afiliado/componentes/consultar-afiliado/consultar-afiliado.component';
import { AntDesingModule } from 'src/app/ant-desing/ant-desing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoAfiliadoComponent } from './registrar-afiliado/componentes/nuevo-afiliado/nuevo-afiliado.component';


@NgModule({
  declarations: [
    ConsultarAfiliadoComponent,
    NuevoAfiliadoComponent
  ],
  imports: [
    CommonModule,
    AfiliacionRoutingModule,
    AntDesingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AfiliacionModule { }
