import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-form-component',
  templateUrl: './register-form-component.component.html',
  styleUrls: ['./register-form-component.component.css']
})
export class RegisterFormComponentComponent {
  @Input() employee: any;
  @Output() register = new EventEmitter<any>();

  onSubmit() {
    this.register.emit(this.employee);
  }
}
