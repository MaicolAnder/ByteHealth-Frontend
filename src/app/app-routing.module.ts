import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modulos/web/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      // { path: 'not-auth', component: NotAuthorizedComponent },
      {
        path: 'app', loadChildren: () => import("./modulos/modulos.module").then(m => m.ModulosModule),
        //canActivate: [GuardService],
        data: {
          expectedRoles: null
        }
      },
      //{ path: '**', component: NotFoundComponent }
    ]
  },
  // { path: '**', component: NotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
