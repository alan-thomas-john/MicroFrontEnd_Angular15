import { NgModule } from '@angular/core';
//import { StateComponent } from './state.component';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './employee.effects';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  // declarations: [
  //   StateComponent
  // ],
  imports: [
    // BrowserModule,
    // CommonModule,
    StoreModule.forFeature('employees',employeeReducer),
    EffectsModule.forFeature([EmployeeEffects])
  ],
  // exports: [
  //   StateComponent,
  // ]
})
export class StateModule { }
