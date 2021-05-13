import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';
import { Employee } from '../../models/employee-detail.model';
import { Frequency } from '../../models/filter-frequency.model';
import { Office } from '../../models/office.model';
import { CommonService } from '../../services/common-service';
 
import { EmployeeService } from '../../services/employee.service';
import { OfficeService } from '../../services/office.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  @Output() newEvent = new EventEmitter<object>();
  employee: Employee[];
  isAddOfficeVisible: boolean = false;
  constructor(private employeeService: EmployeeService, private officeService: OfficeService, private commonService: CommonService) { }

  ngOnInit(): void {
  }
  loadOfficeFrequency(): Frequency[] {
    var frequency: Frequency[] = [];
    var employees = this.employeeService.getEmployeesList();
    this.officeService.getOffices().forEach(function (office: Office) {
      var count = employees.filter(employee => employee.officeId.toUpperCase() === office.id.toUpperCase()).length;
      frequency.push({ name: office.name, count: count });
    });
    return frequency;
  }
  onClick(parameter, valueToBeSearched): void {
    this.newEvent.emit({ parameter: this.commonService.getFilterType(parameter), valueTobeSearched: valueToBeSearched });
  }
  addOffice(office: string): void{
    if (office) {
      this.officeService.setOffice({ name: office });
      window.location.reload();
    }
    else {
      alert("Enter a valid name");
    }
  }
  makeAddOfficeVisible(): void {
    this.isAddOfficeVisible = true;
  }
  makeAddOfficeInvisible(): void {
    this.isAddOfficeVisible = false;
  }
 
}
