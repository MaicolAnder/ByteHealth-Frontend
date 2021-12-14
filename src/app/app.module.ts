import { AntDesingModule } from './ant-desing/ant-desing.module';
import { DataService } from './share/services/data.service';
import { LoginComponent } from './modulos/web/login/login.component';
import { ModulosModule } from './modulos/modulos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityService } from './share/services/security.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AntDesingModule,
    ModulosModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService,
    SecurityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
