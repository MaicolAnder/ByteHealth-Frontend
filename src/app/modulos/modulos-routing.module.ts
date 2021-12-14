import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulosComponent } from './modulos.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: ModulosComponent,
    children : [
      {
        path: "inicio",
        component : DashboardComponent
      },
      // Rutas de cada módulo creado
      {
        path: "afiliacion",
        loadChildren: () => import("./afiliacion/afiliacion.module").then(m => m.AfiliacionModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
