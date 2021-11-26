import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare const Swal:any;
@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {

  jsonProductos:any={
    id:"",
    id_producto: "",
    clasificacion: "",
    categoria: "",
    producto: "",
    marca: "",
    proveedor: "",
    presentacion: ""
  }

  constructor(private path:Router, private dbValue:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.jsonProductos.id=this.dbValue.snapshot.params["id"];

    this.http.get("http://localhost:8080/api/productos/mostrar/"+this.jsonProductos.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonProductos.id_producto=Retrieve.id_producto;
      this.jsonProductos.clasificacion=Retrieve.clasificacion;
      this.jsonProductos.categoria=Retrieve.categoria;
      this.jsonProductos.producto=Retrieve.producto;
      this.jsonProductos.marca=Retrieve.marca;
      this.jsonProductos.proveedor=Retrieve.proveedor;
      this.jsonProductos.presentacion=Retrieve.presentacion;      
    });
  }

  actualizar(){
    this.http.put("http://localhost:8080/api/productos/actualizar/"+this.jsonProductos.id, this.jsonProductos).
    subscribe((Retrieve:any)=>{});
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Ítem actualizado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    });
    this.guardar();
    this.path.navigate(["/productos"]);
  }
  guardar():void{
    this.http.post("http://localhost:8080/api/productos/insertar", this.jsonProductos).
    subscribe((Retrieve:any)=>{});        
  }

}
