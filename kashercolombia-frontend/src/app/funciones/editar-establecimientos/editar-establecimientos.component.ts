import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare const Swal:any;
@Component({
  selector: 'app-editar-establecimientos',
  templateUrl: './editar-establecimientos.component.html',
  styleUrls: ['./editar-establecimientos.component.css']
})
export class EditarEstablecimientosComponent implements OnInit {

  jsonEstablecimientos:any={
    id:"",
    id_establecimiento: "",
    actividad: "",
    nombre: "",
    direccion: "",
    ciudad: "",
    telefonos: ""
}

constructor(private path:Router, private dbValue:ActivatedRoute, private http: HttpClient){}

ngOnInit(): void {
  this.jsonEstablecimientos.id=this.dbValue.snapshot.params["id"];

  this.http.get("http://kashercolbackend.jelastic.saveincloud.net/api/establecimientos/mostrar/"+this.jsonEstablecimientos.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonEstablecimientos.id_establecimiento=Retrieve.id_establecimiento;
      this.jsonEstablecimientos.actividad=Retrieve.actividad;
      this.jsonEstablecimientos.nombre=Retrieve.nombre;
      this.jsonEstablecimientos.direccion=Retrieve.direccion;
      this.jsonEstablecimientos.ciudad=Retrieve.ciudad;
      this.jsonEstablecimientos.telefonos=Retrieve.telefonos;
  });
}

actualizar(){
  this.http.put("http://kashercolbackend.jelastic.saveincloud.net/api/establecimientos/actualizar/"+this.jsonEstablecimientos.id, this.jsonEstablecimientos).
  subscribe((Retrieve:any)=>{});
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '¡Ítem actualizado exitosamente!',
    showConfirmButton: false,
    timer: 1500
  });
  this.guardar();
  this.path.navigate(["/establecimientos"]);
}
guardar():void{
  this.http.post("http://kashercolbackend.jelastic.saveincloud.net/api/establecimientos/insertar", this.jsonEstablecimientos).
  subscribe((Retrieve:any)=>{});        
}
}
