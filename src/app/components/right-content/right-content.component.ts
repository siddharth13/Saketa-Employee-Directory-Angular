import { Component, OnInit,Input } from '@angular/core';
import { Service } from '../../app.service';
 
@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.component.html',
  styleUrls: ['./right-content.component.css']
})
export class RightContentComponent implements OnInit {
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
