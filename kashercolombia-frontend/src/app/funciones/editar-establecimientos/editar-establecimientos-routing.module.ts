import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEstablecimientosComponent } from './editar-establecimientos.component';

const routes: Routes = [{ path: '', component: EditarEstablecimientosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarEstablecimientosRoutingModule { }
