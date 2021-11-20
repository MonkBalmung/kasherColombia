import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarSellosComponent } from './editar-sellos.component';

const routes: Routes = [{ path: '', component: EditarSellosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarSellosRoutingModule { }
