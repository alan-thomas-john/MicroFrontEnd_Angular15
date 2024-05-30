import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Todo2ListComponent } from './todo2-list/todo2-list.component';

const routes: Routes = [
  {path:'', redirectTo: '/todo2-list', pathMatch: 'full'},
  {path:'todo2-list', component: Todo2ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
