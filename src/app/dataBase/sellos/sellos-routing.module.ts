import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellosComponent } from './sellos.component';

const routes: Routes = [{ path: '', component: SellosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellosRoutingModule { }
