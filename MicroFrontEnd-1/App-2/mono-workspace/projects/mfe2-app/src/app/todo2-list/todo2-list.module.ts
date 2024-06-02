import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo2ListComponent } from './todo2-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateModule } from 'projects/state/src/public-api';





@NgModule({
  declarations: [
    Todo2ListComponent,
    EmployeeDetailComponent,
    
  ],
  imports: [
    
    CommonModule,BrowserModule,RouterModule.forChild([
      {
        path: '',
        component:Todo2ListComponent
      }
    ]),
    StateModule,
  ],
  bootstrap: [Todo2ListComponent],
})
export class Todo2ListModule { }
