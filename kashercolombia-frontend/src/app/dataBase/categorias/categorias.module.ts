import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CategoriasModule { }
