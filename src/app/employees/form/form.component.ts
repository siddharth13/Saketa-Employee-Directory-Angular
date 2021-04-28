import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Service } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';
import { Mode } from 'src/app/enums/mode.enum';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee:any;
  mode: Mode;
  departments: any;
  offices: any;
  jobTitles: any;
  constructor(private service: Service, private route: ActivatedRoute) {
    this.employee = { firstName: "", lastName: "", id: "", email: "", department: "", office: "", jobTitle: "", phoneNumber: "", skypeId:"" };
  }

  ngOnInit(): void {
    this.departments = this.service.getDepartments();
    this.offices = this.service.getOffices();
    this.jobTitles = this.service.getJobTitles();
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.employee = this.service.getEmployeeById(params.get('id'));
        this.mode = Mode.Update;
      }
      else {
        this.mode = Mode.Add;
      }
       
    });
  }
  onSubmit(submitForm: any) {
    console.log(submitForm.form);
    if (submitForm.form.status === "INVALID") {
      alert("The following entries were incorrect:-\n" + this.service.generateErrorList(submitForm.form.controls).toString());
    }
    else {
      if (this.mode === Mode.Add) {
        var currentTime = +new Date();
        this.service.setEmployee({
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
        this.service.updateEmployees(this.employee.id, submitForm.form.controls);
      }
      window.location.reload();
    }
  }
}
