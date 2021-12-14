import { SecurityService } from './../share/services/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {
  public actionMenu: string = 'close';
  public usuario: string = 'Miguel A Tunubalá';
  public user: any;

  constructor(
    private securityService: SecurityService
  ) {
    this.securityService.validateSesion();
  }

  ngOnInit(): void {
    this.onShowMenu();
    this.user = this.securityService.userData();
    console.log(this.user);
  }

  onShowMenu(){
    if(this.actionMenu == 'close'){
      this.actionMenu = 'showMenu';
    } else {
      this.actionMenu = 'close';
    }
  }

  closeSession(){
    this.securityService.logout();
    console.log('See you soon');
  }

}
