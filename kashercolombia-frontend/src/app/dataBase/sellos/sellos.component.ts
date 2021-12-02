import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
declare const Swal:any;
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

  constructor(private path:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },100) 
  }

  listar():void{
    this.http.get("http://localhost:8080/api/sellos/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbSellos=Retrieve});
  }

  eliminar(id:any, element:any):void{    
    Swal.fire({
      title: '¿Realmente deseas eliminar éste ítem?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `No`,
    }).then((Retrieve:any) => {
      /* Read more about isConfirmed, isDenied below */
      if (Retrieve.isConfirmed) {
        this.http.delete("http://localhost:8080/api/sellos/remover/"+id).
        subscribe((Retrieve:any)=>{});
        Swal.fire(element+' ha sido eliminado!', '', 'success');
        this.listar();
      } else if (Retrieve.isDenied) {
        Swal.fire('Nada ha cambiado, tranquilo.', '', 'info')
      }
    });        
  }

  guardar():void{
    this.http.post("http://localhost:8080/api/sellos/insertar", this.jsonSellos).
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
    this.path.navigate(["/editar-sellos", id]);
  }

}
