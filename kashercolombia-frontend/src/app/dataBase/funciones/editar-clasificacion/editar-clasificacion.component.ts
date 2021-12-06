import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare const Swal:any;
@Component({
  selector: 'app-editar-clasificacion',
  templateUrl: './editar-clasificacion.component.html',
  styleUrls: ['./editar-clasificacion.component.css']
})
export class EditarClasificacionComponent implements OnInit {

  jsonClasificacion:any={
    id:"",
    id_clasificacion: "",
    clasificacion: ""
  }

  constructor(private path:Router, private dbValue:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.jsonClasificacion.id=this.dbValue.snapshot.params["id"];

    this.http.get("http://kashercolbackend.jelastic.saveincloud.net/api/clasificacion/mostrar/"+this.jsonClasificacion.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonClasificacion.id_clasificacion=Retrieve.id_clasificacion;
      this.jsonClasificacion.clasificacion=Retrieve.clasificacion;
    });
  }

  actualizar(){
    this.http.put("http://kashercolbackend.jelastic.saveincloud.net/api/clasificacion/actualizar/"+this.jsonClasificacion.id, this.jsonClasificacion).
    subscribe((Retrieve:any)=>{});
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Ítem actualizado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    });
    this.guardar();
    this.path.navigate(["/clasificacion"]);
  }
  guardar():void{
    this.http.post("http://kashercolbackend.jelastic.saveincloud.net/api/clasificacion/insertar", this.jsonClasificacion).
    subscribe((Retrieve:any)=>{});        
  }

}
