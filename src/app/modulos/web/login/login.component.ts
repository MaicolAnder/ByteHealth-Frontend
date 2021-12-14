import { SecurityService } from './../../../share/services/security.service';
import { DataService } from './../../../share/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:   FormGroup;
  public status_user: boolean = false;
  public status_pass: boolean = false;
  public submitted:   boolean = false;
  public tipoMensaje: string = '';
  public mensaje:     string = '';
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: SecurityService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    if (this.authService.userData() != null ) {
      this.router.navigate(['/app/inicio']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      // this.status_user = true;
      // this.status_pass = true;
      return;
    }
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(

        data => {
          this.mensaje = data.message;
          if(!data.error) {
            this.tipoMensaje = 'success';
            //this.router.navigate(['/start']);
            console.log(this.user_data());
            this.router.navigate(['/app/inicio']);
          } else {
            this.tipoMensaje = 'warning';
          }
        },
        error => {
          if(error.error.error) {
            this.mensaje = error.error.message;
            this.tipoMensaje = 'warning';
          } else {
            this.mensaje = 'Error al comunicarse con el servidor ';
            this.tipoMensaje = 'danger';
          }
        }

      );

      setTimeout(function(){
        this.mensaje = '';
        console.log('time out starting');
      }, 3000);
  }

  get f() { return this.loginForm.controls; }

  private user_data() {
    return localStorage.getItem('user');
  }

}
