import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClasificacionRoutingModule } from './clasificacion-routing.module';
import { ClasificacionComponent } from './clasificacion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClasificacionComponent
  ],
  imports: [
    CommonModule,
    ClasificacionRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ClasificacionModule { }
