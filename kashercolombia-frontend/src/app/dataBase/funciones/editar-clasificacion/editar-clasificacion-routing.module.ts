import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarClasificacionComponent } from './editar-clasificacion.component';

const routes: Routes = [{ path: '', component: EditarClasificacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarClasificacionRoutingModule { }
