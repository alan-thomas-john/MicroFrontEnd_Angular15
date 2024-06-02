import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from 'projects/state/src/lib/employee.model';

@Component({
  selector: 'app-register-form-component',
  templateUrl: './register-form-component.component.html',
  styleUrls: ['./register-form-component.component.css']
})
export class RegisterFormComponentComponent {
  @Input() employee: Employee = {name:'',emailId:'',position:''};
  @Output() register = new EventEmitter<any>();

  onSubmit() {
    this.register.emit(this.employee);
  }
}
