import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare const Swal:any;
@Component({
  selector: 'app-editar-insumos',
  templateUrl: './editar-insumos.component.html',
  styleUrls: ['./editar-insumos.component.css']
})
export class EditarInsumosComponent implements OnInit {

  jsonInsumos:any={
    id:"",
    id_insumo: "",
    clasificacion: "",
    categoria: "",
    producto: "",
    marca: "",
    proveedor: "",
    presentacion: ""
}

constructor(private path:Router, private dbValue:ActivatedRoute, private http: HttpClient){}

ngOnInit(): void {
  this.jsonInsumos.id=this.dbValue.snapshot.params["id"];

  this.http.get("http://kashercolbackend.jelastic.saveincloud.net/api/insumos/mostrar/"+this.jsonInsumos.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonInsumos.id_insumo=Retrieve.id_insumo;
      this.jsonInsumos.clasificacion=Retrieve.clasificacion;
      this.jsonInsumos.categoria=Retrieve.categoria;
      this.jsonInsumos.producto=Retrieve.producto;
      this.jsonInsumos.marca=Retrieve.marca;
      this.jsonInsumos.proveedor=Retrieve.proveedor;
      this.jsonInsumos.presentacion=Retrieve.presentacion;      
  });
}

actualizar(){
  this.http.put("http://kashercolbackend.jelastic.saveincloud.net/api/insumos/actualizar/"+this.jsonInsumos.id, this.jsonInsumos).
  subscribe((Retrieve:any)=>{});
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '¡Ítem actualizado exitosamente!',
    showConfirmButton: false,
    timer: 1500
  });
  this.guardar();
  this.path.navigate(["/insumos"]);
}
guardar():void{
  this.http.post("http://kashercolbackend.jelastic.saveincloud.net/api/insumos/insertar", this.jsonInsumos).
  subscribe((Retrieve:any)=>{});        
}

}
