import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare const Swal:any;
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
  
    this.http.get("http://kashercolbackend.jelastic.saveincloud.net/api/marcas/mostrar/"+this.jsonMarcas.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonMarcas.id_marca=Retrieve.id_marca;
      this.jsonMarcas.marca=Retrieve.marca;
    });

  }

  actualizar(){
    this.http.put("http://kashercolbackend.jelastic.saveincloud.net/api/marcas/actualizar/"+this.jsonMarcas.id, this.jsonMarcas).
    subscribe((Retrieve:any)=>{});
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Ítem actualizado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    });
    this.guardar();
    this.path.navigate(["/marcas"]);
  }
  guardar():void{
    this.http.post("http://kashercolbackend.jelastic.saveincloud.net/api/marcas/insertar", this.jsonMarcas).
    subscribe((Retrieve:any)=>{});        
  }

}
