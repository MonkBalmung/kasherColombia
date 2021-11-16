import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProveedoresComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProveedoresModule { }
