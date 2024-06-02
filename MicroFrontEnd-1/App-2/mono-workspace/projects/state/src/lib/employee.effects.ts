import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { addEmployee, deleteEmployee, deleteEmployeeSuccess, loadEmployees, loadEmployeesSuccess } from './employee.action';
import { StorageService } from './session-local-storage/dist/storage-service';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private storageService: StorageService
    ) { }

    loadEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadEmployees),
            mergeMap(() => {
                const employees = this.storageService.getItem('employees'); // Synchronous call
                return of(employees).pipe(
                    map(employees => loadEmployeesSuccess({ employees })),
                    catchError(() => of({ type: '[Employee] Load Employees Failed' }))
                );
            })
        )
    );

    addEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addEmployee),
            tap(action => {
                const employees = this.storageService.getItem('employees') || [];
                // Check if employee already exists before adding
                if (!employees.some((emp: Employee) => emp.emailId === action.employee.emailId)) {
                    employees.push(action.employee);
                    this.storageService.setItem('employees', employees);
                }
            })
        ), { dispatch: false }
    );

    syncEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadEmployeesSuccess),
            tap(action => {
                this.storageService.setItem('employees', action.employees);
            })
        ), { dispatch: false }
    );

    deleteEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteEmployee),
            tap(action => {
                const employees: Employee[] = this.storageService.getItem('employees') || [];
                const updatedEmployees = employees.filter(employee => employee.emailId !== action.emailId);
                this.storageService.setItem('employees', updatedEmployees);
            }),
            map(action => deleteEmployeeSuccess({ emailId: action.emailId }))
        )
    );

}
