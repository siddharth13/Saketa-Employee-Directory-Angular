import { Component, OnInit,Input } from '@angular/core';
import { Service } from '../app.service';
 
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  updatedEmployees;
  @Input() updatedEmployeesFromLeftNavBar;
  
  constructor(private service: Service) {  
  }
  ngOnInit(): void {
    this.updatedEmployees = this.service.getEmployees();
  }
  updateEmployees(searchObject: any) {
    this.updatedEmployees = this.service.getEmployeesAfterCharacterSearch(searchObject.parameter, searchObject.valueTobeSearched);
  }
  ngOnChanges() {
    this.updatedEmployees = this.updatedEmployeesFromLeftNavBar;
  }  
}
