import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SellosRoutingModule } from './sellos-routing.module';
import { SellosComponent } from './sellos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SellosComponent
  ],
  imports: [
    CommonModule,
    SellosRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SellosModule { }
