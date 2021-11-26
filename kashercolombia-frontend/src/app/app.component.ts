import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kasherColombia';

  admin:any={
    id:"",
    username:"",
    passcode:""
  }

  constructor(private path:Router,  private http:HttpClient){}

  ingresar():void{
    this.http.get(
    "http://localhost:8080/api/web-admins/mostrarPorCriterio/"+this.admin.username+"/"+this.admin.passcode+"", 
    {responseType:"json"}).subscribe((Retrieve:any)=>{
      for(var item of Retrieve){
        if(item.username===this.admin.username && item.passcode===this.admin.passcode){
          alert("Acceso exitoso!");
          this.path.navigate(['/web-admins']);
        }else if(ResizeObserver.length===0){
          alert("Usuario o contraseña incorrectos");
        }
      }
    });  
  }
  
}
