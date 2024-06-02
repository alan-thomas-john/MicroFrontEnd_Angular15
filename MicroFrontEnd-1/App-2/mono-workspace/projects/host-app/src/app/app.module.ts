import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routeCompArr } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateModule } from 'projects/state/src/public-api';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer } from 'projects/state/src/lib/employee.reducer';
//import { RegisterFormComponentComponent } from './register-form-component/register-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    routeCompArr,
    //RegisterFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    StoreModule.forRoot(employeeReducer),
    EffectsModule.forRoot([]),
    StateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
