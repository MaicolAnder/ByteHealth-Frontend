import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosRoutingModule } from './modulos-routing.module';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { ModulosComponent } from './modulos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntDesingModule } from '../ant-desing/ant-desing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ModulosComponent
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AntDesingModule
  ],

})
export class ModulosModule { }
