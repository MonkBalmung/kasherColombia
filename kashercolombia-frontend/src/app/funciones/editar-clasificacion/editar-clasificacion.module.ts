import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarClasificacionRoutingModule } from './editar-clasificacion-routing.module';
import { EditarClasificacionComponent } from './editar-clasificacion.component';


@NgModule({
  declarations: [
    EditarClasificacionComponent
  ],
  imports: [
    CommonModule,
    EditarClasificacionRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditarClasificacionModule { }
