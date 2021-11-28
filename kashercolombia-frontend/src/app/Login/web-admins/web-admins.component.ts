import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

declare const Swal:any;
@Component({
  selector: 'app-web-admins',
  templateUrl: './web-admins.component.html',
  styleUrls: ['./web-admins.component.css']
})
export class WebAdminsComponent implements OnInit {  

  admin:any={
    id:"",
    username:"",
    passcode:""
  }

  constructor(private path:Router,  private http:HttpClient){}

  ngOnInit(): void {
  }

  ingresar():void{
    this.http.get(
    "http://localhost:8080/api/web-admins/mostrarPorCriterio/"+this.admin.username+"/"+this.admin.passcode+"", 
    {responseType:"json"}).subscribe((Retrieve:any)=>{
      for(var item of Retrieve){
        if(item.username===this.admin.username && item.passcode===this.admin.passcode){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Acceso exitoso!',
            showConfirmButton: false,
            timer: 1500
          }) 
          this.path.navigate(['/dbManagment']);
        }else if(ResizeObserver.length===0){
          alert("Usuario o contraseña incorrectos");
        }
      }
    });  
  }
}
