import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';


@NgModule({
  declarations: [
    ProveedoresComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    HttpClientModule
  ]
})
export class ProveedoresModule { }
