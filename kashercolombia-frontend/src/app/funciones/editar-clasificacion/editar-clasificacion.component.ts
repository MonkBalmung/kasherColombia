import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

    this.http.get("http://localhost:8080/api/clasificacion/mostrar/"+this.jsonClasificacion.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonClasificacion.id_clasificacion=Retrieve.id_clasificacion;
      this.jsonClasificacion.clasificacion=Retrieve.clasificacion;
    });
  }

  actualizar(){
    this.http.put("http://localhost:8080/api/clasificacion/actualizar/"+this.jsonClasificacion.id, this.jsonClasificacion).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem actualizado exitosamente!");
    this.guardar();
    this.path.navigate(["/clasificacion"]);
  }
  guardar():void{
    this.http.post("http://localhost:8080/api/clasificacion/insertar", this.jsonClasificacion).
    subscribe((Retrieve:any)=>{});        
  }

}
