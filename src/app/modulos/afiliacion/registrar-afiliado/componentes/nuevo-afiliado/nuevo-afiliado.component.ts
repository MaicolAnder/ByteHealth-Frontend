import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-nuevo-afiliado',
  templateUrl: './nuevo-afiliado.component.html',
  styleUrls: ['./nuevo-afiliado.component.css']
})
export class NuevoAfiliadoComponent implements OnInit {
  position: NzTabPosition = 'left';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('onSubmit');

  }

}
