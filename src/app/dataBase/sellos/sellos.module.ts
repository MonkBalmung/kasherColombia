import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SellosRoutingModule } from './sellos-routing.module';
import { SellosComponent } from './sellos.component';


@NgModule({
  declarations: [
    SellosComponent
  ],
  imports: [
    CommonModule,
    SellosRoutingModule,
    HttpClientModule
  ]
})
export class SellosModule { }
