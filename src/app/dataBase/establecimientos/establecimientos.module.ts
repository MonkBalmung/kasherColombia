import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EstablecimientosRoutingModule } from './establecimientos-routing.module';
import { EstablecimientosComponent } from './establecimientos.component';


@NgModule({
  declarations: [
    EstablecimientosComponent
  ],
  imports: [
    CommonModule,
    EstablecimientosRoutingModule,
    HttpClientModule
  ]
})
export class EstablecimientosModule { }
