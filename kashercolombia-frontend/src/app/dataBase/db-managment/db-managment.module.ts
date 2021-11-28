import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbManagmentRoutingModule } from './db-managment-routing.module';
import { DbManagmentComponent } from './db-managment.component';


@NgModule({
  declarations: [
    DbManagmentComponent
  ],
  imports: [
    CommonModule,
    DbManagmentRoutingModule
  ]
})
export class DbManagmentModule { }
