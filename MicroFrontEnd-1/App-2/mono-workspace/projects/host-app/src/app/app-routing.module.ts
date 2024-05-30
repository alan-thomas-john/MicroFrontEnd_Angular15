import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const MFE_APP_URL = "http://localhost:4300/remoteEntry.js";
const MFE2_APP_URL = "http://localhost:4201/remoteEntry2.js";

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'todo-list', 
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MFE_APP_URL,
        remoteName: "mfeApp",
        exposedModule: "./TodoListModule"
      }).then(m => m.TodoListModule).catch(err => console.log(err));
    }
  },
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

export const routeCompArr = [HomeComponent];
