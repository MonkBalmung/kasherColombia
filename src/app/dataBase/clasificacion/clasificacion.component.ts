import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {

  dbClasificacion:any;

  jsonClasificacion:any={
      id_clasificacion: "",
      clasificacion: ""
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },20) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/clasificacion/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbClasificacion=Retrieve});
  }
  eliminar(id:any, data:any):void{
    this.http.delete("http://localhost:8080/api/clasificacion/remover"+id).
    subscribe((Retrieve:any)=>{this.dbClasificacion=Retrieve});
    alert("El elemento"+data+"ha sido eliminado exitosamente.");
    this.listar();
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/clasificacion/insertar", this.jsonClasificacion).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem registrado exitosamente!");
    this.listar();
  }

}
