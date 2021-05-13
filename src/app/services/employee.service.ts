import { Injectable } from '@angular/core';
import { FilterType } from 'src/app/enums/filter-type.enum'
import { MatchType } from '../enums/match-type.enum';
import { HttpClient } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from '../models/employee-detail.model';
import { environment } from '../../environments/environment.prod';
import { DepartmentService } from './department.service';
import { CommonService } from './common-service';
import { OfficeService } from './office.service';
import { JobTitleService } from './job-title.service';
import { window } from 'ngx-bootstrap-icons';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];
   
  private readonly route: string = environment.apiUrl+"/employee";
  constructor(private httpService: HttpClient, private commonService: CommonService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService,
    private departmentService: DepartmentService) {
    
    httpService.get(this.route).toPromise().then(employees => { this.employees = employees as Employee[]; }); 
  }
  getEmployees() { 
    return this.httpService.get(this.route).toPromise();
  }
  setEmployee(employee: any) {
    this.httpService.post<Employee>(this.route, employee).subscribe(() => { }, (error) => {
      console.log(error);
    }, () => {
        parent.window.location.reload();
    });   
  }
  getEmployeesList() {
    return this.employees;
  }
  getEmployeeById(id){
    return this.employees.find(employee => employee.id == id);
  }
  updateEmployees(id, employee) { 
    this.httpService.put<Employee>(this.route + "/" + id, employee).subscribe(() => { }, (error) => {
      console.log(error);
    }, () => {
      parent.window.location.reload();
    });
    
        }
  getEmployeesAfterCharacterSearch(matchType: MatchType, parameter: FilterType, valueToBeSearched: string) {
    var updatedEmployees = [];
    if (parameter === FilterType.none) {
      updatedEmployees = this.employees;
    }
    else {
      if (matchType === MatchType.firstWord) {
        switch (parameter) {
          case FilterType.prefferedName:
            updatedEmployees = this.employees.filter(employee => employee.firstName[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.department:
            updatedEmployees = this.employees.filter(employee => this.departmentService.getDepartmentNameById(employee.departmentId)[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.jobTitle:
            updatedEmployees = this.employees.filter(employee => this.jobTitleService.getJobTitleNameById(employee.jobTitleId)[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.office:
            updatedEmployees = this.employees.filter(employee => this.officeService.getOfficeNameById(employee.officeId)[0].toUpperCase().includes(valueToBeSearched.toUpperCase()));
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
            updatedEmployees = this.employees.filter(employee => this.departmentService.getDepartmentNameById(employee.departmentId).toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.jobTitle:
            updatedEmployees = this.employees.filter(employee => this.jobTitleService.getJobTitleNameById(employee.jobTitleId).toUpperCase().includes(valueToBeSearched.toUpperCase()));
            break;
          case FilterType.office:
            updatedEmployees = this.employees.filter(employee => this.officeService.getOfficeNameById(employee.officeId).toUpperCase().includes(valueToBeSearched.toUpperCase()));
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
