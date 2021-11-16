import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
@Component({
  selector: 'app-sellos',
  templateUrl: './sellos.component.html',
  styleUrls: ['./sellos.component.css']
})
export class SellosComponent implements OnInit {

  dbSellos:any;
  jsonSellos:any={
    id_sello: "",
    sello: "",
    abreviatura: ""
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },20) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/sellos/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbSellos=Retrieve});
  }

  eliminar(id:any, data:any):void{
    this.http.delete("http://localhost:8080/api/sellos/remover"+id).
    subscribe((Retrieve:any)=>{this.dbSellos=Retrieve});
    alert("El elemento"+data+"ha sido eliminado exitosamente.");
    this.listar();
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/sellos/insertar", this.jsonSellos).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem registrado exitosamente!");
    this.listar();
  }

}
