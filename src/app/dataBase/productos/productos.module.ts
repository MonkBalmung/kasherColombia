import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    HttpClientModule
  ]
})
export class ProductosModule { }
