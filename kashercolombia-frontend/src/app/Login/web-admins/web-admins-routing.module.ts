import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebAdminsComponent } from './web-admins.component';

const routes: Routes = [{ path: '', component: WebAdminsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAdminsRoutingModule { }
