import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = environment.api_route;

  constructor(
    private httpClient:HttpClient,
    private security:SecurityService
  ) { }

  private requestConfig(body: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.security.getTokenType() +' '+this.security.getToken(),
    });
    return {params: body, headers: headers };

  }

  /**
   * Peticion de tipo get solicitada a la API remota
   * @param {*} api_route_name ruta de o nombre de la API a consumir
   * @param {*} params  Objeto con los parametros de la consulta
   * @returns Respuesta enviada desde la API error/json
   * @memberof DataService
   */
  public get(api_route_name: string, params: any = null): Observable<Object> {
    let options = this.requestConfig(params);
    return this.httpClient.get(this.url + api_route_name, options);
  }
}
