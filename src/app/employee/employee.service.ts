import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Employee {
    id?: string;
    name: string;
    position: string;
    department: string;
}

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private firestore: Firestore = inject(Firestore);

    addEmployee(employee: Employee): Promise<void> {
        const employeesCollection = collection(this.firestore, 'employees');
        return addDoc(employeesCollection, employee);
    }

    getEmployees(): Observable<Employee[]> {
        const employeesCollection = collection(this.firestore, 'employees');
        return collectionData(employeesCollection, { idField: 'id' }) as Observable<Employee[]>;
    }
}
