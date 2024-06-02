import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todo2ListModule } from './todo2-list/todo2-list.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateModule, employeeReducer } from 'projects/state/src/public-api';
//import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
//import { StorageService } from 'projects/state/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
   // EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Todo2ListModule,
    StoreModule.forRoot(employeeReducer), 
    EffectsModule.forRoot([]), 
    StateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
