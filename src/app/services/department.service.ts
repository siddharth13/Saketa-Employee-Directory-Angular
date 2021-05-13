import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from '../../environments/environment.prod';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private readonly route: string = environment.apiUrl+"/department";
  private  departments: Department[];
  constructor(private httpService: HttpClient) {
    this.httpService.get(this.route).toPromise().then(departments => { this.departments = departments as Department[]; });
  }
  
  getDepartments() {
    return this.departments;
  }
  setDepartment(department: any) {
    this.httpService.post<Department>(this.route, department).subscribe(_ => { }, (error) => {
      console.log(error);
    }, () => {
        parent.window.location.reload();
    });
    
  }
  updateDepartment(id, department) {
    this.httpService.put<Department>(this.route + "/" + id, department).subscribe(_ => { }, (error) => {
      console.log({ department_service_put_error: error });
    }, () => {
      parent.window.location.reload();
    });
  }
  getDepartmentNameById(id: string) {
    return this.departments.find(department => department.id === id).name;
  }
}
