import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routeCompArr } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RegisterFormComponentComponent } from './register-form-component/register-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    routeCompArr,
    //RegisterFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
