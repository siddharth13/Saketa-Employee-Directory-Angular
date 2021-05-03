import { Injectable } from '@angular/core';
import { departments } from 'src/app/data/departments';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  getDepartments() {
    return departments;
  }

}
