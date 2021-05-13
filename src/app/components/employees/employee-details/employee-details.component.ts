import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { CommonService } from 'src/app/services/common-service';
import { OfficeService } from 'src/app/services/office.service';
import { JobTitleService } from 'src/app/services/job-title.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mode } from 'src/app/enums/mode.enum';
import { Employee } from '../../../models/employee-detail.model';
import { Department } from '../../../models/department.model';
import { JobTitle } from '../../../models/job-title.model';
import { Office } from '../../../models/office.model';
@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  mode: Mode;
  departments: Department[];
  offices: Office[];
  jobTitles: JobTitle[];
  constructor(private employeeService: EmployeeService,
    private commonService: CommonService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router:Router) {
    this.employee = { firstName: "", lastName: "", id: "", email: "", departmentId: "", officeId: "", jobTitleId: "", phoneNumber: "", prefferedName:"", skypeId: "" };
  }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
    this.offices = this.officeService.getOffices();
    this.jobTitles = this.jobTitleService.getJobTitles();
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.employee = this.employeeService.getEmployeeById(params.get('id'));
        this.mode = Mode.Update;
      }
      else {
        this.mode = Mode.Add;
      } 
    });
  }
  onSubmit(submitForm: any) {
    if (submitForm.form.status === "INVALID") {
      alert("The following entries were incorrect:-\n" + this.commonService.generateErrorList(submitForm.form.controls).toString());
    }
    else {
      var updatedEmployee = {
        firstName: submitForm.form.controls.firstName.value,
        lastName: submitForm.form.controls.lastName.value,
        departmentId: submitForm.form.controls.departmentId.value,
        jobTitleId: submitForm.form.controls.jobTitleId.value,
        officeId: submitForm.form.controls.officeId.value,
        phoneNumber: submitForm.form.controls.phoneNumber.value,
        skypeId: submitForm.form.controls.skypeId.value,
        email: submitForm.form.controls.email.value,
        prefferedName: submitForm.form.controls.firstName.value + " " + submitForm.form.controls.lastName.value,
        imageURL: "assets/image-assets/icons/person.png"
      };
      if (this.mode === Mode.Add) {
        this.employeeService.setEmployee(updatedEmployee);
      }
      else {
        this.employeeService.updateEmployees(this.employee.id, updatedEmployee); 
      }
      this.router.navigate(['/']);
      
    }
  }
}
