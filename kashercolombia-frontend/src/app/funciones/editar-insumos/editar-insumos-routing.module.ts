import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarInsumosComponent } from './editar-insumos.component';

const routes: Routes = [{ path: '', component: EditarInsumosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarInsumosRoutingModule { }
