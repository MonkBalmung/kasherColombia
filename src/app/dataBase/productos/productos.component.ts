import { Router } from '@angular/router';
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
  

  constructor(private path:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },300) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/productos/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbProductos=Retrieve});
  }

  eliminar(id:any, element:any):void{    
    this.http.delete("http://localhost:8080/api/productos/remover/"+id).
    subscribe((Retrieve:any)=>{ 
      alert(" El elemento "+element+" ha sido eliminado exitosamente.");
      this.listar();      
    });    
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/productos/insertar", this.jsonProductos).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem registrado exitosamente!");
    this.listar();
  }

  formActualizar(id:any):void{
    this.path.navigate(["/editar-productos", id]);
  }

}
