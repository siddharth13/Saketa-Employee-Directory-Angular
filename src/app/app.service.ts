 
import { Injectable } from '@angular/core';
 
import { offices } from './data/offices';
import { departments } from './data/departments';
import { jobTitles } from './data/jobTitles';
@Injectable({
  providedIn: 'root'
})
export class Service {
  
  getEmployees() {
    var employees = JSON.parse(localStorage.getItem("employees"));
    if (!employees) {
      return [];
    }
    return employees;
  }
  setEmployee(employee) {
    var employees = this.getEmployees();
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
   
  }
  getEmployeeById(id) {
    return this.getEmployees().find(emp =>
      emp.id == id
    );
  }
  getOffices() {
    return offices;
  }
   
  getJobTitles() {
    return jobTitles;
  }
   
  getDepartments() {
    return departments;
  }
   
  updateEmployees(id, employee) {
    var employees = this.getEmployees();
    var updatedEmployee = employees.find(emp => 
       emp.id === id
     );
    updatedEmployee.firstName = employee.firstName.value;
    updatedEmployee.lastName = employee.lastName.value;
    updatedEmployee.department = employee.department.value;
    updatedEmployee.jobTitle = employee.jobTitle.value;
    updatedEmployee.office = employee.office.value;
    updatedEmployee.phoneNumber = employee.phoneNumber.value;
    updatedEmployee.skypeId = employee.skypeId.value;
    updatedEmployee.email = employee.email.value;
    updatedEmployee.prefferedName = employee.firstName.value + " " + employee.lastName.value;
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  getEmployeesAfterCharacterSearch(parameter, valueToBeSearched) {
     
    var updatedEmployees = [];
    if (parameter === "prefferedName") {
      updatedEmployees = this.getEmployees().filter(employee => employee.prefferedName.toUpperCase().includes(valueToBeSearched.toUpperCase()));
    }
    else if (parameter === "department") {
      updatedEmployees = this.getEmployees().filter(employee => employee.department.toUpperCase().includes(valueToBeSearched.toUpperCase()));

    }
    else if (parameter === "jobTitle") {
      updatedEmployees = this.getEmployees().filter(employee => employee.jobTitle.toUpperCase().includes(valueToBeSearched.toUpperCase()));

    }
    else if (parameter === "office") {
      updatedEmployees = this.getEmployees().filter(employee => employee.office.toUpperCase().includes(valueToBeSearched.toUpperCase()));
    }
    else if (parameter === "firstLetter") {
      updatedEmployees = this.getEmployees().filter(employee => employee.firstName[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
    }
    else {
      updatedEmployees = this.getEmployees();
    }
    return updatedEmployees;
  }
  generateErrorList(control) {
     
    var errorlist = [];
    if (control.department.errors) {
      errorlist.push("department cannot be empty");
    }
    if (control.office.errors) {
      errorlist.push("\noffice cannot be empty");
    }
    if (control.email.errors) {
      errorlist.push("\nPlease enter a valid email");
    }
    if (control.firstName.errors) {
      errorlist.push("\nfirst Name cannot be empty");
    }
    if (control.lastName.errors) {
      errorlist.push("\nlast Name cannot be empty");
    }
    if (control.jobTitle.errors) {
      errorlist.push("\nJob Title cannot be empty");
    }
    if (control.phoneNumber.errors) {
      errorlist.push("\nPlease enter a valid phone number");
    }
    if (control.skypeId.errors) {
      errorlist.push("\nPlese enter a valid skype Id");
    }
    return errorlist;
  }
}

