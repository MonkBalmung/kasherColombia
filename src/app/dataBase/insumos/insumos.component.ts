import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {

  dbInsumos:any;

  jsonInsumos:any={
      id_insumo: "",
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
    },50) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/insumos/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbInsumos=Retrieve});
  }

  eliminar(id:any, data:any):void{
    this.http.delete("http://localhost:8080/api/insumos/remover"+id).
    subscribe((Retrieve:any)=>{this.dbInsumos=Retrieve});
    alert("El elemento"+data+"ha sido eliminado exitosamente.");
    this.listar();
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/insumos/insertar", this.jsonInsumos).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem registrado exitosamente!");
    this.listar();
  }

}
