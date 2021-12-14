import { NuevoAfiliadoComponent } from './registrar-afiliado/componentes/nuevo-afiliado/nuevo-afiliado.component';
import { ConsultarAfiliadoComponent } from './buscar-afiliado/componentes/consultar-afiliado/consultar-afiliado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'consultar-afiliado',
    component: ConsultarAfiliadoComponent
  },
  {
    path: 'registrar-afiliado',
    component: NuevoAfiliadoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliacionRoutingModule { }
