import { Router } from '@angular/router';
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
  

  constructor(private path:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },100) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/marcas/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbMarcas=Retrieve});
  }

  eliminar(id:any, element:any):void{    
    this.http.delete("http://localhost:8080/api/marcas/remover/"+id).
    subscribe((Retrieve:any)=>{ 
      alert(" El elemento "+element+" ha sido eliminado exitosamente.");
      this.listar();      
    });    
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/marcas/insertar", this.jsonMarcas).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem registrado exitosamente!");
    this.listar();
  }

  formActualizar(id:any):void{
    this.path.navigate(["/editar-marcas", id]);
  }

}
