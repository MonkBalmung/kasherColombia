import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $:any;
declare const Swal:any;
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
  

  constructor(private path:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
    setTimeout(function(){
      $('#table').DataTable();
    },100) 
  }

  listar():void{
    this.http.get("http://kashercolbackend.jelastic.saveincloud.net/api/establecimientos/mostrar", {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbEstablecimientos=Retrieve});
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
        this.http.delete("http://kashercolbackend.jelastic.saveincloud.net/api/establecimientos/remover/"+id).
        subscribe((Retrieve:any)=>{});
        Swal.fire(element+' ha sido eliminado!', '', 'success');
        this.listar();
      } else if (Retrieve.isDenied) {
        Swal.fire('Nada ha cambiado, tranquilo.', '', 'info')
      }
    });    
  }

  guardar():void{
    this.http.post("http://kashercolbackend.jelastic.saveincloud.net/api/establecimientos/insertar", this.jsonEstablecimientos).
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
    this.path.navigate(["/editar-establecimientos", id]);
  }

}
