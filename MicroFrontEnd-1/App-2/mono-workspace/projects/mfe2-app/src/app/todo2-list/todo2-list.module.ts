import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo2ListComponent } from './todo2-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';





@NgModule({
  declarations: [
    Todo2ListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,BrowserModule,RouterModule.forChild([
      {
        path: '',
        component:Todo2ListComponent
      }
    ])
  ]
})
export class Todo2ListModule { }
