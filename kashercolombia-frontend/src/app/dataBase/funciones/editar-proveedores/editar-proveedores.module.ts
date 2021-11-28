import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarProveedoresRoutingModule } from './editar-proveedores-routing.module';
import { EditarProveedoresComponent } from './editar-proveedores.component';


@NgModule({
  declarations: [
    EditarProveedoresComponent
  ],
  imports: [
    CommonModule,
    EditarProveedoresRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EditarProveedoresModule { }
