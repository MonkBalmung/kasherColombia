import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-marcas',
  templateUrl: './editar-marcas.component.html',
  styleUrls: ['./editar-marcas.component.css']
})
export class EditarMarcasComponent implements OnInit {

  jsonMarcas:any={
    id:"",
    id_marca:"",
    marca:""
  }

  constructor(private path:Router, private dbValue:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.jsonMarcas.id=this.dbValue.snapshot.params["id"];
  
    this.http.get("http://localhost:8080/api/marcas/mostrar/"+this.jsonMarcas.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonMarcas.id_marca=Retrieve.id_marca;
      this.jsonMarcas.marca=Retrieve.marca;
    });

  }

  actualizar(){
    this.http.put("http://localhost:8080/api/marcas/actualizar/"+this.jsonMarcas.id, this.jsonMarcas).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem actualizado exitosamente!");
    this.guardar();
    this.path.navigate(["/marcas"]);
  }
  guardar():void{
    this.http.post("http://localhost:8080/api/marcas/insertar", this.jsonMarcas).
    subscribe((Retrieve:any)=>{});        
  }

}
