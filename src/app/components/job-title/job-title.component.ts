import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { CommonService } from 'src/app/services/common-service';
import { JobTitleService } from 'src/app/services/job-title.service';
import { Frequency } from '../../models/filter-frequency.model';
import { Employee } from '../../models/employee-detail.model';
@Component({
  selector: 'app-job-title',
  templateUrl: './job-title.component.html',
  styleUrls: ['./job-title.component.css']
})
export class JobTitleComponent implements OnInit {
  @Output() newEvent = new EventEmitter<object>();
  employees: Employee[];
  isAddJobTitleVisible = false;
  constructor(private employeeService: EmployeeService,
    private commonService: CommonService,
    private jobTitleService: JobTitleService,) { }
  loadJobTitleFrequency(): Frequency[] {
    var frequency: Frequency[] = [];
    var employees = this.employeeService.getEmployeesList();
    this.jobTitleService.getJobTitles().forEach(function (jobTitle) {
      frequency.push({ name: jobTitle.name, count: employees.filter(employee => employee.jobTitleId.toUpperCase() === jobTitle.id.toUpperCase()).length });
    });

    return frequency;
  }
  ngOnInit(): void {
  }
  makeAddJobTitleVisible(): void {
    this.isAddJobTitleVisible = true;
  }
  makeAddJobTitleInvisible(): void {
    this.isAddJobTitleVisible = false;
  }
  addJobTitle(jobTitle:string): void {
    if (jobTitle) {
      this.jobTitleService.setJobTitle({ name: jobTitle });
      
    }
    else {
      alert("Enter a valid name");
    }
  }
  onClick(parameter, valueToBeSearched): void {
    this.newEvent.emit({ parameter: this.commonService.getFilterType(parameter), valueTobeSearched: valueToBeSearched });
  }
}
