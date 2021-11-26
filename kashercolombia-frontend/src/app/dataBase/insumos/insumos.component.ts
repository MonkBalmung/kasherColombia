import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
declare const Swal:any;
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
  

  constructor(private path:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },500) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/insumos/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbInsumos=Retrieve});
  }

  eliminar(id:any, element:any):void{    
    this.http.delete("http://localhost:8080/api/insumos/remover/"+id).
    subscribe((Retrieve:any)=>{});   
    Swal.fire({
      title: '¿Realmente deseas eliminar éste ítem?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `No`,
    }).then((Retrieve:any) => {
      /* Read more about isConfirmed, isDenied below */
      if (Retrieve.isConfirmed) {
        Swal.fire(element+' ha sido eliminado!', '', 'success')
      } else if (Retrieve.isDenied) {
        Swal.fire('Nada ha cambiado, tranquilo.', '', 'info')
      }
    });
    this.listar();
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/insumos/insertar", this.jsonInsumos).
    subscribe((Retrieve:any)=>{});
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Guardado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    });
    this.listar();
  }

  formActualizar(id:any):void{
    this.path.navigate(["/editar-insumos", id]);
  }

}
