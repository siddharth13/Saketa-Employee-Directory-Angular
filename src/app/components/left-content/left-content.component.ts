import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Service } from 'src/app/app.service';
 
@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.css']
})
export class LeftContentComponent implements OnInit {
  @Output() newEvent = new EventEmitter<object>();
  
  constructor(private service: Service) {
     
  }
  loadDeartmentFrequency(){
    var frequency = [];
    var employees = this.service.getEmployees();
    this.service.getDepartments().forEach(function (department) {
      var count =  employees.filter(employee => employee.department.toUpperCase() === department.toUpperCase()).length;
      frequency.push({ department: department, count: count });
    });
    return frequency;
  }
  loadOfficeFrequency() {
    var frequency = [];
    var employees = this.service.getEmployees();
    this.service.getOffices().forEach(function (office) {
      var count =  employees.filter(employee => employee.office.toUpperCase() === office.toUpperCase()).length;
      frequency.push({ name: office, count: count });
    });
    return frequency;
  }
  loadJobTitleFrequency() {
    var frequency = [];
    var employees = this.service.getEmployees();
    this.service.getJobTitles().forEach(function (jobTitle) {
      frequency.push({ jobTitle: jobTitle, count:  employees.filter(employee => employee.jobTitle.toUpperCase() === jobTitle.toUpperCase()).length });
    });
    return frequency;
  }

  ngOnInit(): void {
   
  }
  onClick(parameter, valueToBeSearched): void {
    this.newEvent.emit({ parameter: parameter, valueTobeSearched: valueToBeSearched });
  }
}
