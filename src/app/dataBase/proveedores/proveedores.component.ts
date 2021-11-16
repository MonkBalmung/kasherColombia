import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  dbProveedores:any;

  jsonProveedores:any={
      id_proveedor: "",
      nombre: "",
      nit: "",
      direccion: "",
      ciudad: "",
      telefonos: ""
  }
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },20) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/proveedores/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbProveedores=Retrieve});
  }

  eliminar(id:any, data:any):void{
    this.http.delete("http://localhost:8080/api/proveedores/remover"+id).
    subscribe((Retrieve:any)=>{this.dbProveedores=Retrieve});
    alert("El elemento"+data+"ha sido eliminado exitosamente.");
    this.listar();
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/proveedores/insertar", this.jsonProveedores).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem registrado exitosamente!");
    this.listar();
  }

}
