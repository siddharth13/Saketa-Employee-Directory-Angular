import { error } from '@angular/compiler/src/util';
import { SimpleChanges } from '@angular/core';
import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/app.service';

@Component({
  selector: 'app-right-content-body',
  templateUrl: './right-content-body.component.html',
  styleUrls: ['./right-content-body.component.css']
})
export class RightContentBodyComponent implements OnInit {
  @Input() employees;
  isViewDataVisible;
  isReadOnly = true;
  viewDataEmployee;
  isButtonVisible;
  constructor(private service: Service) {
    
  }
  ngOnInit(): void {
   
  }
  
  viewEmployee(employee) {
    this.viewDataEmployee = employee;
    this.isViewDataVisible = true;

  }
  enableEdit(){
    this.isReadOnly = false;
    this.isButtonVisible = true;
      
  }
  hideForm() {
    this.isViewDataVisible = false;
    this.isViewDataVisible = false;
    this.isReadOnly = true;
    this.isButtonVisible = false;
  }
  updateData(editForm: NgForm) {
    if (editForm.form.status === "INVALID") {
      alert("The following entries were incorrect:-\n" + this.service.generateErrorList(editForm.form.controls).toString())
    }
    else {
      if (!this.service.getJobTitles().map(jobTitle => jobTitle.toUpperCase()).includes(editForm.form.controls.jobTitle.value.toUpperCase())) {
        this.service.setJobTitles(editForm.form.controls.jobTitle.value);
      }

      if (!this.service.getOffices().map(office => office.toUpperCase()).includes(editForm.form.controls.office.value.toUpperCase())) {
        this.service.setOffices(editForm.form.controls.office.value);
      }

      if (!this.service.getDepartments().map(department => department.toUpperCase()).includes(editForm.form.controls.department.value.toUpperCase())) {
        this.service.setDepartments(editForm.form.controls.department.value);
      }
      console.log(this.viewDataEmployee.id + " " + editForm.form.controls.firstName.value);
      this.service.updateEmployees(this.viewDataEmployee.id, editForm.form.controls);
    }
  }
}
