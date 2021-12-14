import { NzMessageService } from 'ng-zorro-antd/message';
import { AfiliadoService } from './../../../services/afiliado.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar-afiliado',
  templateUrl: './consultar-afiliado.component.html',
  styleUrls: ['./consultar-afiliado.component.css']
})
export class ConsultarAfiliadoComponent implements OnInit {
  public validateForm! :   FormGroup;
  public listadoTipDoc: any;
  public listadoAfiliados: any;
  public registroEncontrado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afiliadoService: AfiliadoService,
    private message: NzMessageService
  ) {
    this.getTipoDocumento_all();
   }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      documento: ['', Validators.required],
      tipo_documento: ['', Validators.required]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    console.log('submitForm()');
    this.getAfiliadoBy_DocTiDoc(this.validateForm.value.documento, this.validateForm.value.tipo_documento);
  }

  createMessage(type: string, input: string): void {
    this.message.create(type, input);
  }

  borrarBusqueda(){
    this.listadoAfiliados = null;
    this.registroEncontrado = false;
    this.validateForm = this.fb.group({
      documento: ['', Validators.required],
      tipo_documento: ['', Validators.required]
    });
    this.createMessage('warning', 'Realizar nueva busqueda')
  }

  private getAfiliadoBy_DocTiDoc(documento: string, tipoDocumento: number) {
    this.afiliadoService.getAfiliadoBy_DocTiDoc(documento, tipoDocumento).subscribe(
      data => {
        let total = Object.keys(data).length;
        if(total > 0){
          this.listadoAfiliados = data;
          this.registroEncontrado = false;
          this.createMessage('success', 'Se han encontrado '+total+' registros')
        } else {
          this.listadoAfiliados = null;
          this.createMessage('error', 'No se ha encontrado datos');
          this.registroEncontrado = true;
        }
      },
      error => this.createMessage('error', 'Error ' + error)
    );
  }

  private getTipoDocumento_all() {
    this.afiliadoService.getTipoDocumento_all().subscribe(
      data => {
        if(data){
          this.listadoTipDoc = data;
          this.createMessage('success', 'Preparado para busqueda')
        } else {
          this.createMessage('error', 'No se ha encontrado datos')
        }
      },
      error => this.createMessage('error', 'Error ' + error)
    );
  }
}
