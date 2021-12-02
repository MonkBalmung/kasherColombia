import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare const $:any;
declare const Swal:any;
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  dbCategoria:any;

  jsonCategorias:any={
      id:"",
      id_categoria: "",
      categoria: "",
  }

  constructor(private path:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();    

    setTimeout(function(){
      $('#table').DataTable();
    },100)    
  }

  listar():void{
    this.http.get("http://localhost:8080/api/categorias/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbCategoria=Retrieve});
  }

  eliminar(id:any, element:any):void{    
    Swal.fire({
      title: '¿Realmente deseas eliminar éste ítem?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `No`,
    }).then((Retrieve:any) => {
      if (Retrieve.isConfirmed) {
        this.http.delete("http://localhost:8080/api/categorias/remover/"+id).
        subscribe((Retrieve:any)=>{});
        Swal.fire(element+' ha sido eliminado!', '', 'success');
        this.listar();
      } else if (Retrieve.isDenied) {
        Swal.fire('Nada ha cambiado, tranquilo.', '', 'info')
      }
    });        
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/categorias/insertar", this.jsonCategorias).
    subscribe((Retrieve:any)=>{});   
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Guardado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    });
    this.listar()
  }

  formActualizar(id:any):void{
    this.path.navigate(["/editar-categorias", id]);
  }

}
