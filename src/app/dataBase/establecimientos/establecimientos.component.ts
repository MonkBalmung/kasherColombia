import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.css']
})
export class EstablecimientosComponent implements OnInit {

  dbEstablecimientos:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
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

}
