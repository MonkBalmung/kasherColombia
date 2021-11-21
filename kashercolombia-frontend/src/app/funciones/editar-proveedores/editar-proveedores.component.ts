import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css']
})
export class EditarProveedoresComponent implements OnInit {

  jsonProveedores:any={
    id:"",
    id_proveedor: "",
    nombre: "",
    nit: "",
    direccion: "",
    ciudad: "",
    telefonos: ""
  }

  constructor(private path:Router, private dbValue:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.jsonProveedores.id=this.dbValue.snapshot.params["id"];

    this.http.get("http://localhost:8080/api/proveedores/mostrar/"+this.jsonProveedores.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonProveedores.id_proveedor=Retrieve.id_proveedor;
      this.jsonProveedores.nombre=Retrieve.nombre;
      this.jsonProveedores.nit=Retrieve.nit;
      this.jsonProveedores.direccion=Retrieve.direccion;
      this.jsonProveedores.ciudad=Retrieve.ciudad;
      this.jsonProveedores.telefonos=Retrieve.telefonos;
    });
  }

  actualizar(){
    this.http.put("http://localhost:8080/api/proveedores/actualizar/"+this.jsonProveedores.id, this.jsonProveedores).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem actualizado exitosamente!");
    this.guardar();
    this.path.navigate(["/proveedores"]);
  }
  guardar():void{
    this.http.post("http://localhost:8080/api/proveedores/insertar", this.jsonProveedores).
    subscribe((Retrieve:any)=>{});        
  }

}
