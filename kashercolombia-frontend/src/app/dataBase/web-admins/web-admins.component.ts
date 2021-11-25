import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-web-admins',
  templateUrl: './web-admins.component.html',
  styleUrls: ['./web-admins.component.css']
})
export class WebAdminsComponent implements OnInit {

  dbAdmins:any;

  admins:any={
    username:"",
    passcode:""
  }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  ingresar(user:any, pass:any):void{
    this.admins.username=user;
    this.admins.passcode=pass;
    console.log(this.admins.username, this.admins.passcode);
    //this.http.get(
    //  "http://localhost:8080/api/web-admins/mostrarPorCriterio/"+this.admins.username+"/"+this.admins.passcode+"", 
    //{responseType:"json"}).subscribe((Retrieve:any)=>{this.dbAdmins=Retrieve});          
  }
}
