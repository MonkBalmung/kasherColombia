import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarCategoriasRoutingModule } from './editar-categorias-routing.module';
import { EditarCategoriasComponent } from './editar-categorias.component';


@NgModule({
  declarations: [
    EditarCategoriasComponent
  ],
  imports: [
    CommonModule,
    EditarCategoriasRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditarCategoriasModule { }
