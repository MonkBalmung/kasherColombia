import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarEstablecimientosRoutingModule } from './editar-establecimientos-routing.module';
import { EditarEstablecimientosComponent } from './editar-establecimientos.component';


@NgModule({
  declarations: [
    EditarEstablecimientosComponent
  ],
  imports: [
    CommonModule,
    EditarEstablecimientosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditarEstablecimientosModule { }
