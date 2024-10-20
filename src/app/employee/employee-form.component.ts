import { Component } from '@angular/core';
import { Employee, EmployeeService } from './employee.service';

@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
    employee: Employee = { name: '', position: '', department: '' };
    employees: Employee[] = [];
    employeeListVisible = false;

    constructor(private employeeService: EmployeeService) { }

    addEmployee() {
        this.employeeService.addEmployee(this.employee).then(() => {
            console.log('Employee added!');
            this.employee = { name: '', position: '', department: '' }; // Reset form
        });
    }

    showEmployeeList() {
        this.employeeListVisible = true;
        this.employeeService.getEmployees().subscribe((data) => {
            this.employees = data;
        });
    }
}
