import { createReducer, on } from '@ngrx/store';
import { addEmployee, loadEmployeesSuccess } from './employee.action';
import { Employee } from './employee.model';

export interface EmployeeState {
    employees: Employee[];
}

export const initialState: EmployeeState = {
    employees: []
};

export const employeeReducer = createReducer(initialState,
    on(addEmployee, (state, { employee }) => ({
        ...state,
        employees: [...state.employees, employee]
    })),
    on(loadEmployeesSuccess, (state, { employees }) => ({
        ...state,
        employees: employees
    }))
);