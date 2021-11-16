import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  dbMarcas:any;

  jsonMarcas:any={
      id_marca: "",
      marca: ""
  }
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },20) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/marcas/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbMarcas=Retrieve});
  }

  eliminar(id:any, data:any):void{
    this.http.delete("http://localhost:8080/api/marcas/remover"+id).
    subscribe((Retrieve:any)=>{this.dbMarcas=Retrieve});
    alert("El elemento"+data+"ha sido eliminado exitosamente.");
    this.listar();
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/marcas/insertar", this.jsonMarcas).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem registrado exitosamente!");
    this.listar();
  }

}
