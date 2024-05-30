import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  employee = { name: '', position: '' };
  handleRegister(employeeData: any) {
    console.log('Employee Registered:', employeeData);
    // Code that need to send data to the backend or shared state
  }
}
