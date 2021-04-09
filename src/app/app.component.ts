import { Component } from '@angular/core';
import { Service } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Saketa-Employee-Directory';
  updatedEmployeesLeft;
  constructor(private service: Service) {
   
  }
  sendSearchStringToRight(searchObject: any) {
    //console.log(this.service.getEmployeesAfterCharacterSearch(searchObject.parameter, searchObject.valueTobeSearched));
    this.updatedEmployeesLeft = this.service.getEmployeesAfterCharacterSearch(searchObject.parameter, searchObject.valueTobeSearched);
    
  }
}
