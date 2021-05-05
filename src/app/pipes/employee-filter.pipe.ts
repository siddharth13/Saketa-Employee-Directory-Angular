import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
 
@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  constructor(private service: EmployeeService) {}
  transform(employee: any, value: any): any {
    
    if (!value) {
      return this.service.employees;
    } else {
      console.log("hereresrsr");
      return this.service.getEmployeesAfterCharacterSearch(value.matchType,value.parameter, value.valueTobeSearched);
    }

   
  }
  
}
