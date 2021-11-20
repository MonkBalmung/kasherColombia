import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarMarcasRoutingModule } from './editar-marcas-routing.module';
import { EditarMarcasComponent } from './editar-marcas.component';


@NgModule({
  declarations: [
    EditarMarcasComponent
  ],
  imports: [
    CommonModule,
    EditarMarcasRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditarMarcasModule { }
