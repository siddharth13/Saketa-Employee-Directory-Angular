import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../../models/employee-detail.model';
import { Frequency } from '../../models/filter-frequency.model';
import { CommonService } from '../../services/common-service';
import { DepartmentService } from '../../services/department.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Output() newEvent = new EventEmitter<object>(); 
  employee: Employee[];
  constructor(private employeeService: EmployeeService, private departmentService: DepartmentService, private commonService: CommonService) { }
  isAddDepartmentVisible = false;
  ngOnInit(): void {
  }
  loadDeartmentFrequency(): Frequency[] {
    var frequency: Frequency[] = [];
    var employees = this.employeeService.getEmployeesList();
    this.departmentService.getDepartments().forEach(function (department) {
      var count = employees.filter(employee => employee.departmentId.toUpperCase() === department.id.toUpperCase()).length;
      frequency.push({ name: department.name, count: count });
    });
    return frequency;
  }
  onClick(parameter, valueToBeSearched): void {
    this.newEvent.emit({ parameter: this.commonService.getFilterType(parameter), valueTobeSearched: valueToBeSearched });
  }
  makeAddDepartmentVisible() {
    this.isAddDepartmentVisible = true;
  }
  makeAddDepartmentInvisible() {
    this.isAddDepartmentVisible = false;
  }
  addDepartment(department: string) {
    if (department) {
    this.departmentService.setDepartment({ name: department });
  }
    else {
  alert("Enter a valid name");
}
  }
}
