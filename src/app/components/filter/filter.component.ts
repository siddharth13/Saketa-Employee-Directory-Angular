import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { CommonService } from 'src/app/services/common-service';
import { OfficeService } from 'src/app/services/office.service';
import { JobTitleService } from 'src/app/services/job-title.service';
import { DepartmentService } from 'src/app/services/department.service';
import { Frequency } from '../../models/filter-frequency.model';
import { Employee } from '../../models/employee-detail.model';
import { Office } from '../../models/office.model';
 
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() newEvent = new EventEmitter<object>();
  employees: Employee[];
  constructor(private employeeService: EmployeeService,
    private commonService: CommonService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService,
    private departmentService: DepartmentService,) {
     
  }
  loadDeartmentFrequency(): Frequency[] {
    
    var frequency: Frequency[] = [];
    var employees = this.employeeService.getEmployees();
    this.departmentService.getDepartments().forEach(function (department) {
    var count = employees.filter(employee => employee.department.toUpperCase() === department.name.toUpperCase()).length;   
      frequency.push({ name: department.name, count: count });
    });
    return frequency; 
  }
  loadOfficeFrequency(): Frequency[]{
    var frequency: Frequency[] = [];
    var employees = this.employeeService.getEmployees();

    this.officeService.getOffices().forEach(function (office: Office) {
      var count = employees.filter(employee => employee.office.toUpperCase() === office.name.toUpperCase()).length;
      frequency.push({ name: office.name, count: count });
    });
    
    return frequency;
  }
  loadJobTitleFrequency(): Frequency[] {
    var frequency: Frequency[] = [];
    var employees = this.employeeService.getEmployees();
    this.jobTitleService.getJobTitles().forEach(function (jobTitle) {
      frequency.push({ name: jobTitle.name, count: employees.filter(employee => employee.jobTitle.toUpperCase() === jobTitle.name.toUpperCase()).length });
    });
    
    return frequency;
  }

  ngOnInit(): void {
  
  }
  onClick(parameter, valueToBeSearched): void {
    this.newEvent.emit({ parameter: this.commonService.getFilterType(parameter), valueTobeSearched: valueToBeSearched });
  }
}
