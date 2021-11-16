import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MarcasRoutingModule } from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MarcasComponent
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class MarcasModule { }
