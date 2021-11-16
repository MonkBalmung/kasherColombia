import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.css']
})
export class EstablecimientosComponent implements OnInit {

  dbEstablecimientos:any;

  jsonEstablecimientos:any={
      id_establecimiento: "",
      actividad: "",
      nombre: "",
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
    this.http.get("http://localhost:8080/api/establecimientos/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbEstablecimientos=Retrieve});
  }
  eliminar(id:any, data:any):void{
    this.http.delete("http://localhost:8080/api/establecimientos/remover"+id).
    subscribe((Retrieve:any)=>{this.dbEstablecimientos=Retrieve});
    alert("El elemento"+data+"ha sido eliminado exitosamente.");
    this.listar();
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/establecimientos/insertar", this.jsonEstablecimientos).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem registrado exitosamente!");
    this.listar();
  }

}
