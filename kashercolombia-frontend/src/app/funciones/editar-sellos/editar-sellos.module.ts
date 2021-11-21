import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarSellosRoutingModule } from './editar-sellos-routing.module';
import { EditarSellosComponent } from './editar-sellos.component';


@NgModule({
  declarations: [
    EditarSellosComponent
  ],
  imports: [
    CommonModule,
    EditarSellosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditarSellosModule { }
