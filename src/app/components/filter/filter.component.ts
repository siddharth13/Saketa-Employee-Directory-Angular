import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { CommonService } from 'src/app/services/common-service';
import { OfficeService } from 'src/app/services/office.service';
import { JobTitleService } from 'src/app/services/job-title.service';
import { DepartmentService } from 'src/app/services/department.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() newEvent = new EventEmitter<object>();
  
  constructor(private employeeService: EmployeeService,
    private commonService: CommonService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService,
    private departmentService: DepartmentService,) {
     
  }
  loadDeartmentFrequency() {
    
    var frequency = [];
    var employees = this.employeeService.getEmployees();
    this.departmentService.getDepartments().forEach(function (department) {
      var count =  employees.filter(employee => employee.department.toUpperCase() === department.toUpperCase()).length;
      frequency.push({ department: department, count: count });
    });
    return frequency; 
  }
  loadOfficeFrequency() {
    
    var frequency = [];
    var employees = this.employeeService.getEmployees();
    this.officeService.getOffices().forEach(function (office) {
      var count =  employees.filter(employee => employee.office.toUpperCase() === office.toUpperCase()).length;
      frequency.push({ name: office, count: count });
    });
    return frequency;
  }
  loadJobTitleFrequency() {
    
    var frequency = [];
    var employees = this.employeeService.getEmployees();
    this.jobTitleService.getJobTitles().forEach(function (jobTitle) {
      frequency.push({ jobTitle: jobTitle, count:  employees.filter(employee => employee.jobTitle.toUpperCase() === jobTitle.toUpperCase()).length });
    });
    return frequency;
  }

  ngOnInit(): void {
   
  }
  onClick(parameter, valueToBeSearched): void {
    this.newEvent.emit({ parameter: this.commonService.getFilterType(parameter), valueTobeSearched: valueToBeSearched });
  }
}
