import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  dbProductos:any;

  jsonProductos:any={
      id_producto: "",
      clasificacion: "",
      categoria: "",
      producto: "",
      marca: "",
      proveedor: "",
      presentacion: ""
  }
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },100) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/productos/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbProductos=Retrieve});
  }

  eliminar(id:any, data:any):void{
    this.http.delete("http://localhost:8080/api/productos/remover"+id).
    subscribe((Retrieve:any)=>{this.dbProductos=Retrieve});
    alert("El elemento"+data+"ha sido eliminado exitosamente.");
    this.listar();
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/productos/insertar", this.jsonProductos).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem registrado exitosamente!");
    this.listar();
  }

}
