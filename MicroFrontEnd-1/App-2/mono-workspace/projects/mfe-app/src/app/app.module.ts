import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';
import { RegisterFormComponentComponent } from './register-form-component/register-form-component.component';
import { FormsModule } from '@angular/forms';
import { Todo2ListModule } from 'projects/mfe2-app/src/app/todo2-list/todo2-list.module';
import { StateModule, employeeReducer } from 'projects/state/src/public-api';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    //RegisterFormComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    StoreModule.forRoot(employeeReducer),
    EffectsModule.forRoot([]), 
    StateModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
