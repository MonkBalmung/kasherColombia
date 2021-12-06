import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare const Swal:any;
@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent implements OnInit {

  //dbCategoria:any;

  jsonCategorias:any={
    id:"",
    id_categoria: "",
    categoria: "",
  }

  constructor(private path:Router, private dbValue:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.jsonCategorias.id=this.dbValue.snapshot.params["id"];

    this.http.get("http://kashercolbackend.jelastic.saveincloud.net/api/categorias/mostrar/"+this.jsonCategorias.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonCategorias.id_categoria=Retrieve.id_categoria;
      this.jsonCategorias.categoria=Retrieve.categoria;
    });
  }

  actualizar(){
    this.http.put("http://kashercolbackend.jelastic.saveincloud.net/api/categorias/actualizar/"+this.jsonCategorias.id, this.jsonCategorias).
    subscribe((Retrieve:any)=>{});
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Ítem actualizado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    });
    this.guardar();
    this.path.navigate(["/categorias"]);
  }
  guardar():void{
    this.http.post("http://kashercolbackend.jelastic.saveincloud.net/api/categorias/insertar", this.jsonCategorias).
    subscribe((Retrieve:any)=>{});        
  }
}
