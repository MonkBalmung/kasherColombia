import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarInsumosRoutingModule } from './editar-insumos-routing.module';
import { EditarInsumosComponent } from './editar-insumos.component';


@NgModule({
  declarations: [
    EditarInsumosComponent
  ],
  imports: [
    CommonModule,
    EditarInsumosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditarInsumosModule { }
