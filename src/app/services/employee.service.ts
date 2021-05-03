import { Injectable } from '@angular/core';
import { FilterType } from 'src/app/enums/filter-type.enum'
import { MatchType } from '../enums/match-type.enum';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees() {
    var employees = JSON.parse(localStorage.getItem("employees"));
    
    /*
    let route: string = "https://localhost:44326/api/values";
    this.httpService.get(route).subscribe((result) => {
      console.log(result);
    },
      (error) => {
        console.log(error);
      }
    );
    */
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
  getEmployeesAfterCharacterSearch(matchType,parameter, valueToBeSearched) {

    var updatedEmployees = [];
    if (valueToBeSearched === "*") {
      updatedEmployees = this.getEmployees();
    }
    else {
      if (matchType === MatchType.firstWord) {
        switch (parameter) {
          case FilterType.prefferedName:
            updatedEmployees = this.getEmployees().filter(employee => employee.firstName[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.department:
            updatedEmployees = this.getEmployees().filter(employee => employee.department[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.jobTitle:
            updatedEmployees = this.getEmployees().filter(employee => employee.jobTitle[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.office:
            updatedEmployees = this.getEmployees().filter(employee => employee.office[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          default:
            updatedEmployees = [];
            break;
        }
      }
      else {
        switch (parameter) {
          case FilterType.prefferedName:
            updatedEmployees = this.getEmployees().filter(employee => employee.prefferedName.toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.department:
            updatedEmployees = this.getEmployees().filter(employee => employee.department.toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.jobTitle:
             updatedEmployees = this.getEmployees().filter(employee => employee.jobTitle.toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.office:
            updatedEmployees = this.getEmployees().filter(employee => employee.office.toUpperCase().includes(valueToBeSearched.toUpperCase()));
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
