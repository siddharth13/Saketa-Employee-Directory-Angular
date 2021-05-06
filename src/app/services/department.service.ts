import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Department } from '../models/department.model';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private readonly route: string = "https://localhost:44315/api/department";
  private  departments: Department[];
  constructor(private httpService: HttpClient) {
    this.httpService.get(this.route).toPromise().then(departments => { this.departments = departments as Department[]; });
  }
  
  getDepartments() {
    return this.departments;
  }

}
