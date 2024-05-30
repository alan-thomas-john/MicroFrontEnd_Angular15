import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todo2ListModule } from './todo2-list/todo2-list.module';
//import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
  declarations: [
    AppComponent,
   // EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Todo2ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
