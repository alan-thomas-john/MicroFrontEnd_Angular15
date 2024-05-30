import { Component } from '@angular/core';

@Component({
  selector: 'app-todo2-list',
  templateUrl: './todo2-list.component.html',
  styleUrls: ['./todo2-list.component.css']
})
export class Todo2ListComponent {
  employees = [
    { name: 'Alan Thomas', position: 'Developer' },
    { name: 'Gopika', position: 'Designer' }
  ];
}
