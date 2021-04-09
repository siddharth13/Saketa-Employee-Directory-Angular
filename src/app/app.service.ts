import { Injectable } from '@angular/core';
import { employees } from './data/employees';
import { offices } from './data/offices';
import { departments } from './data/departments';
import { jobTitles } from './data/jobTitles';
@Injectable({
  providedIn: 'root'
})
export class Service {
  getEmployees() {
    return employees;
  }
  setEmployee(employee) {
    employees.push(employee);
    console.log(employees);
  }
  getOffices() {
    return offices;
  }
  setOffices(office) {
    offices.push(office);
  }
  getJobTitles() {
    return jobTitles;
  }
  setJobTitles(jobTitle) {
    jobTitles.push(jobTitle);
  }
  getDepartments() {
    return departments;
  }
  setDepartments(department) {
    departments.push(department);
  }
  updateEmployees(id, employee) {
    console.log(id + "&in&" + employee.firstName.value);
     var updatedEmployee=employees.find(emp => 
       emp.id == id
     );
    console.log(updatedEmployee);
    updatedEmployee.firstName = employee.firstName.value;
    updatedEmployee.lastName = employee.lastName.value;
    updatedEmployee.department = employee.department.value;
    updatedEmployee.jobTitle = employee.jobTitle.value;
    updatedEmployee.office = employee.office.value;
    updatedEmployee.phoneNumber = employee.phoneNumber.value;
    updatedEmployee.skypeId = employee.skypeId.value;
    updatedEmployee.prefferedName = employee.firstName.value + " " + employee.lastName.value;
  }
  getEmployeesAfterCharacterSearch(parameter, valueToBeSearched) {
     
    var updatedEmployees = [];
    if (parameter === "prefferedName") {
      updatedEmployees = employees.filter(employee => employee.prefferedName.toUpperCase().includes(valueToBeSearched.toUpperCase()));
    }
    else if (parameter === "department") {
      updatedEmployees = employees.filter(employee => employee.department.toUpperCase().includes(valueToBeSearched.toUpperCase()));

    }
    else if (parameter === "jobTitle") {
      updatedEmployees = employees.filter(employee => employee.jobTitle.toUpperCase().includes(valueToBeSearched.toUpperCase()));

    }
    else if (parameter === "office") {
      updatedEmployees = employees.filter(employee => employee.office.toUpperCase().includes(valueToBeSearched.toUpperCase()));
    }
    else if (parameter === "firstLetter") {
      updatedEmployees = employees.filter(employee => employee.firstName[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
    }
    else {
      updatedEmployees = employees;
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

