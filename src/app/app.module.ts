import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { EmployeesComponent } from './employees/employees.component';
import { FilterComponent } from './filter/filter.component';
import { EmployeeFilter } from './employees/employee-filter/employee-filter.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { Service } from './app.service';
 
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './employees/form/form.component';
 
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FilterComponent,
    EmployeeFilter,
    EmployeeListComponent,
    HeaderComponent,
    FormComponent,
    EmployeeListComponent
    
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      { path: 'edit/:id', component: FormComponent },
      { path: 'save', component: FormComponent }
    ])
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
