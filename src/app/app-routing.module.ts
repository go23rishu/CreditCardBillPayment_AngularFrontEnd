import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { ViewAllComponent } from './view-all/view-all.component';


const routes: Routes = [
  { path: 'view-all', component: ViewAllComponent },
  { path: 'addaccount', component: AddaccountComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
