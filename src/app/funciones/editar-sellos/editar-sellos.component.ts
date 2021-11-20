import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-sellos',
  templateUrl: './editar-sellos.component.html',
  styleUrls: ['./editar-sellos.component.css']
})
export class EditarSellosComponent implements OnInit {

  jsonSellos:any={
    id:"",
    id_sello:"",
    sello:"",
    abreviatura:""
  }

  constructor(private path:Router, private dbValue:ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    this.jsonSellos.id=this.dbValue.snapshot.params["id"];

    this.http.get("http://localhost:8080/api/sellos/mostrar/"+this.jsonSellos.id,{responseType:"json"}).
    subscribe((Retrieve:any)=>{      
      this.jsonSellos.id_sello=Retrieve.id_sello;
      this.jsonSellos.sello=Retrieve.sello;
      this.jsonSellos.abreviatura=Retrieve.abreviatura;
    });
  }

  actualizar(){
    this.http.put("http://localhost:8080/api/sellos/actualizar/"+this.jsonSellos.id, this.jsonSellos).
    subscribe((Retrieve:any)=>{});
    alert("¡Ítem actualizado exitosamente!");
    this.guardar();
    this.path.navigate(["/sellos"]);
  }
  guardar():void{
    this.http.post("http://localhost:8080/api/sellos/insertar", this.jsonSellos).
    subscribe((Retrieve:any)=>{});        
  }

}
