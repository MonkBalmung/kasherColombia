import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InsumosRoutingModule } from './insumos-routing.module';
import { InsumosComponent } from './insumos.component';


@NgModule({
  declarations: [
    InsumosComponent
  ],
  imports: [
    CommonModule,
    InsumosRoutingModule,
    HttpClientModule
  ]
})
export class InsumosModule { }
