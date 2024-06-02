import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addEmployee, deleteEmployee, loadEmployees } from 'projects/state/src/lib/employee.action';
import { Employee } from 'projects/state/src/lib/employee.model';
import { EmployeeState, StorageService } from 'projects/state/src/public-api';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  employee = { name: '', emailId: '', position: '' };
  employees$: Observable<Employee[]>;

  constructor(private store: Store<{ employees: EmployeeState }>) {
    this.employees$ = this.store.pipe(select('employees', 'employees'));
    this.store.dispatch(loadEmployees()); // Load employees on component initialization
  }
  handleRegister(employeeData: Employee) {
    // console.log('Employee Registered:', employeeData);
    // // Code that need to send data to the backend or shared state
    // this.storageService.setItem('employee',employeeData,'local');

    this.store.dispatch(addEmployee({ employee: employeeData }));
  }

  handleDelete(emailId: string) {
    this.store.dispatch(deleteEmployee({ emailId }));
  }
}