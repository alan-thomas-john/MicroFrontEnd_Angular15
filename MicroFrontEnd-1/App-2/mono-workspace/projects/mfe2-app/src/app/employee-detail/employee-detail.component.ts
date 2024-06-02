import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Employee } from 'projects/state/src/lib/employee.model';
import { EmployeeState, deleteEmployee } from 'projects/state/src/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent{
  @Input() employee!: Employee;


  constructor(private store: Store<{employees: EmployeeState}>) {}

  deleteEmployee(emailId: string): void {
    this.store.dispatch(deleteEmployee({ emailId }));
  }
}


