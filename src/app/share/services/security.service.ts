import { Users } from './../../modulos/web/models/users';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private url: string = environment.api_route;
  private userSubject: BehaviorSubject<Users>;
  public user: Observable<Users>;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) {
    this.userSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
   }

  public userData(): Users {
    return this.userSubject.value;
  }

  /**
   * Llamado de webservice para petición de login
   * @param {string} Usuario_Usu
   * @param {string} Contrasena_Usu
   * @returns token o mensaje de error
   * @memberof DataService
   */
  public login(Usuario_Usu: string, Contrasena_Usu: string) {
    return this.httpClient.post<Users>(this.url + 'login' , {Usuario_Usu, Contrasena_Usu })
      .pipe(
        map(login => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(login));
          this.userSubject.next(login);
          return login;
        })
      );
  }

  /**
   * getToken
   */
  public getToken() {
    return this.userData().access_token;
  }

  /**
   * getMetodAutentication
   */
  public getTokenType() {
    return this.userData().token_type;
  }

  /**
   * Close sessión and remove local storage
   * @memberof SecurityService
   */
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  /**
   * Validate if sessión is active, else go to login
   * @memberof SecurityService
   */
  validateSesion(){
    console.log('Validate session()');
    if(this.userData() == null){
      this.router.navigate(['/login']);
    }
  }
}
