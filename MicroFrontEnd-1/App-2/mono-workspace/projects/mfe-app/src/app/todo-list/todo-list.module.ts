import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegisterFormComponentComponent } from '../register-form-component/register-form-component.component';
import { FormsModule } from '@angular/forms';
import { StateModule } from 'projects/state/src/public-api';



@NgModule({
  declarations: [
    TodoListComponent,
    RegisterFormComponentComponent
  ],
  imports: [
    FormsModule,
    CommonModule, BrowserModule, RouterModule.forChild([
      {
        path: '',
        component: TodoListComponent
      }

    ]),
    StateModule,
  ],
  bootstrap: [TodoListComponent],
  //exports:[CommonModule]
  
})
export class TodoListModule { }
