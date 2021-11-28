import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAdminsRoutingModule } from './web-admins-routing.module';
import { WebAdminsComponent } from './web-admins.component';


@NgModule({
  declarations: [
    WebAdminsComponent
  ],
  imports: [
    CommonModule,
    WebAdminsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class WebAdminsModule { }
