import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  dbCategoria:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }

  listar():void{
    this.http.get("http://localhost:8080/api/categorias/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbCategoria=Retrieve});
  }

  eliminar(id:any, data:any):void{
    this.http.delete("http://localhost:8080/api/categorias/remover"+id).
    subscribe((Retrieve:any)=>{this.dbCategoria=Retrieve});
    alert("El elemento"+data+"ha sido eliminado exitosamente.");
    this.listar();
  }

}
