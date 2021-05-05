import { Injectable } from '@angular/core';
import { FilterType } from 'src/app/enums/filter-type.enum'
import { MatchType } from '../enums/match-type.enum';
import { HttpClient } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:any= [];
  constructor(private httpService: HttpClient) {
     this.getEmployees();
  }
  getEmployees() {
    this.employees = [];
    let route: string = "https://localhost:44315/api/employee";
    var employees;
    this.httpService.get(route).subscribe((result) =>{

      //  console.log(this.employees);
      employees= result;
       
    
    },
      (error) => {
        console.log(error);
      }, () => {
        this.employees = employees;
        console.log(this.employees);
      }
    );
    
     
  }
  setEmployee(employee) {
     
    this.employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(this.employees));

  }
  getEmployeeById(id) {
    return this.employees.find(emp =>
      emp.id == id
    );
  }
  updateEmployees(id, employee) {

     
    var updatedEmployee = this.employees.find(emp =>
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
    localStorage.setItem("employees", JSON.stringify(this.employees));
  }
  getEmployeesAfterCharacterSearch(matchType,parameter, valueToBeSearched) {

    var updatedEmployees = [];
    if (valueToBeSearched === "*") {
      updatedEmployees = this.employees;
    }
    else {
      if (matchType === MatchType.firstWord) {
        switch (parameter) {
          case FilterType.prefferedName:
            updatedEmployees = this.employees.filter(employee => employee.firstName[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.department:
            updatedEmployees = this.employees.filter(employee => employee.department[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.jobTitle:
            updatedEmployees = this.employees.filter(employee => employee.jobTitle[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.office:
            updatedEmployees = this.employees.filter(employee => employee.office[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          default:
            updatedEmployees = [];
            break;
        }
      }
      else {
        switch (parameter) {
          case FilterType.prefferedName:
            updatedEmployees = this.employees.filter(employee => employee.prefferedName.toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.department:
            updatedEmployees = this.employees.filter(employee => employee.department.toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.jobTitle:
            updatedEmployees = this.employees.filter(employee => employee.jobTitle.toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.office:
            updatedEmployees = this.employees.filter(employee => employee.office.toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          default:
            updatedEmployees = [];
            break;  
        }
      }
    }
    return updatedEmployees;
  }
}
