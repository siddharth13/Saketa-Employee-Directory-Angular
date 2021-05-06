import { Injectable } from '@angular/core';
import { FilterType } from 'src/app/enums/filter-type.enum'
import { MatchType } from '../enums/match-type.enum';
import { HttpClient } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from '../models/employee-detail.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];
  private readonly route: string = "https://localhost:44315/api/employee";
  constructor(private httpService: HttpClient) {
   this.httpService.get(this.route).toPromise().then(employees => { this.employees = employees as Employee[]; });
  }
  getEmployees() {
    return this.employees; 
  }
  setEmployee(employee: any) {
    this.httpService.post<Employee>(this.route, employee).subscribe(() => { }, (error) => {
      console.log(error);
    });   
  }
  getEmployeeById(id) {
    return this.employees.find(employee => employee.id === id);
  }
  updateEmployees(id, employee) { 
    this.httpService.put<Employee>(this.route + "/" + id, employee).subscribe(() => { }, (error) => {
      console.log(error);
    });
  }
  getEmployeesAfterCharacterSearch(matchType: MatchType, parameter: FilterType, valueToBeSearched: string) {
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
