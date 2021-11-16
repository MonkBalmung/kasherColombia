import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InsumosRoutingModule } from './insumos-routing.module';
import { InsumosComponent } from './insumos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InsumosComponent
  ],
  imports: [
    CommonModule,
    InsumosRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class InsumosModule { }
