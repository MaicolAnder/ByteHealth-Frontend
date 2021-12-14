import { DataService } from './../../../share/services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  constructor(private dataservice: DataService) { }

  getTipoDocumento_all(){
    return this.dataservice.get('tipoDocumento_all');
  }

  getAfiliadoBy_DocTiDoc(Identificacion_Per, Id_PerTipId){
    return this.dataservice.get('buscar_afiliado', {Identificacion_Per, Id_PerTipId});
  }
}
