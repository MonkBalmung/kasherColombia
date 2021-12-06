import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dbProductos:any;
  dbEstablecimientos:any;

  jsonProductos:any={
    clasificacion: "",
    categoria: "",
    producto: "",
    marca: "",
    proveedor: "",
    presentacion: ""
}

jsonEstablecimientos:any={
  actividad: "",
  nombre: "",
  direccion: "",
  ciudad: "",
  telefonos: ""
}

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  listarProductos():void{
    this.http.get("http://kashercolbackend.jelastic.saveincloud.net/api/productos/mostrarPorCriterio/"+this.jsonProductos.producto, {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbProductos=Retrieve});
  }

  listarEstablecimientos():void{
    this.http.get("http://kashercolbackend.jelastic.saveincloud.net/api/establecimientos/mostrarPorCriterio/"+this.jsonEstablecimientos.ciudad, {responseType:"json"}).
    subscribe((Retrieve:any)=>{this.dbEstablecimientos=Retrieve});
  }

}
