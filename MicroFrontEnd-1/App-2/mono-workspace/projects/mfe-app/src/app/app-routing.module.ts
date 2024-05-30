import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE2_APP_URL = "http://localhost:4201/remoteEntry2.js";

const routes: Routes = [
  {path:'', redirectTo: '/todo-list', pathMatch: 'full'},
  {path:'todo-list', component: TodoListComponent},
  {path: 'todo2-list', 
  loadChildren: () => {
    return loadRemoteModule({
      remoteEntry: MFE2_APP_URL,
      remoteName: "mfe2App",
      exposedModule: "./Todo2ListModule"
    }).then(m => m.Todo2ListModule).catch(err => console.log(err));
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
