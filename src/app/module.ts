import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
    declarations: [AppComponent, EmployeeFormComponent],
    imports: [
        BrowserModule,
        FormsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
