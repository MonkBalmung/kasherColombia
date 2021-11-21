import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarMarcasComponent } from './editar-marcas.component';

const routes: Routes = [{ path: '', component: EditarMarcasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarMarcasRoutingModule { }
