import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbManagmentComponent } from './db-managment.component';

const routes: Routes = [{ path: '', component: DbManagmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbManagmentRoutingModule { }
