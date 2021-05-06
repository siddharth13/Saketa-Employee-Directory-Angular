import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../models/employee-detail.model';
 
@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  constructor(private service: EmployeeService) { }
  transform(employee: any, value: any): Employee[] {
    
    if (!value) {

      return this.service.getEmployees();
    } else {
       
      return this.service.getEmployeesAfterCharacterSearch(value.matchType,value.parameter, value.valueTobeSearched);
    }

   
  }
  
}
