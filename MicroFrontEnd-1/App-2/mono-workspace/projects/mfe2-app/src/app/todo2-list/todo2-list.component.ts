import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { deleteEmployee, loadEmployees } from 'projects/state/src/lib/employee.action';
import { Employee } from 'projects/state/src/lib/employee.model';
import { EmployeeState } from 'projects/state/src/lib/employee.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo2-list',
  templateUrl: './todo2-list.component.html',
  styleUrls: ['./todo2-list.component.css']
})
export class Todo2ListComponent implements OnInit{
  // employees = [
  //   { name: 'Alan Thomas', position: 'Developer' },
  //   { name: 'Gopika', position: 'Designer' }
  // ];

  employees$: Observable<Employee[]>;

  constructor(private store: Store<{employees : EmployeeState}>){
    this.employees$ = store.pipe(select(state => state.employees.employees));
  }

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
  }

  deleteEmployee(emailId: string): void {
    this.store.dispatch(deleteEmployee({ emailId }));
  }
}
