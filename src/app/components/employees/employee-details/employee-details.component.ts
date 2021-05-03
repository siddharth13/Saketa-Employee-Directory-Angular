import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { CommonService } from 'src/app/services/common-service';
import { OfficeService } from 'src/app/services/office.service';
import { JobTitleService } from 'src/app/services/job-title.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ActivatedRoute } from '@angular/router';
import { Mode } from 'src/app/enums/mode.enum';
@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:any;
  mode: Mode;
  departments: any;
  offices: any;
  jobTitles: any;
  constructor(private employeeService: EmployeeService,
    private commonService: CommonService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute) {
    this.employee = { firstName: "", lastName: "", id: "", email: "", department: "", office: "", jobTitle: "", phoneNumber: "", skypeId:"" };
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
      if (this.mode === Mode.Add) {
        var currentTime = +new Date();
        this.employeeService.setEmployee({
          id: submitForm.form.controls.firstName.value[0].toUpperCase() + submitForm.form.controls.lastName.value[0].toUpperCase() + currentTime,
          firstName: submitForm.form.controls.firstName.value,
          lastName: submitForm.form.controls.lastName.value,
          prefferedName: submitForm.form.controls.firstName.value + " " + submitForm.form.controls.lastName.value,
          email: submitForm.form.controls.email.value,
          office: submitForm.form.controls.office.value,
          phoneNumber: submitForm.form.controls.phoneNumber.value,
          skypeId: submitForm.form.controls.skypeId.value,
          img: "assets/image-assets/icons/person.png",
          jobTitle: submitForm.form.controls.jobTitle.value,
          department: submitForm.form.controls.department.value
        });
      }
      else {
        this.employeeService.updateEmployees(this.employee.id, submitForm.form.controls);
      }
      window.location.reload();
    }
  }
}
