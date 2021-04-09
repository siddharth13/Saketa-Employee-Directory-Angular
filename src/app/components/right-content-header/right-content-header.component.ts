import { AfterViewInit, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Service } from 'src/app/app.service';
 
@Component({
  selector: 'app-right-content-header',
  templateUrl: './right-content-header.component.html',
  styleUrls: ['./right-content-header.component.css']
})
export class RightContentHeaderComponent implements OnInit {
  isVisible = false;
  isUpdateButtonVisible = false;
  alphabets = [];
  searchValue: string='';
  @Output() newEvent = new EventEmitter<object>();
  constructor(private service: Service) {
    for (var i = 0; i < 26; i++) {
      this.alphabets.push(String.fromCharCode(97 + i));
    }
  }

  ngOnInit(): void {

  }
  clearSearchbar() {
    this.searchValue = '';
    this.newEvent.emit({ parameter: " ", valueTobeSearched: " " });
  }
  searchByCharacter(parameter, valueTobeSearched) {
    this.newEvent.emit({ parameter: parameter, valueTobeSearched: valueTobeSearched });
  }
  HideAddEmployeeWindow() {
    this.isVisible = false;
  }
  ShowAddEmployeeWindow() {
    this.isVisible = true;
  }
  
  onSubmit(submitForm: any) {
     

    if (submitForm.form.status === "INVALID") {
      
      alert("The following entries were incorrect:-" + this.service.generateErrorList(submitForm.form.controls).toString());
    }
    else {
      console.log(submitForm.form);
      if (!this.service.getJobTitles().map(jobTitle => jobTitle.toUpperCase()).includes(submitForm.form.controls.jobTitle.value.toUpperCase())) {
        this.service.setJobTitles(submitForm.form.controls.jobTitle.value);
      }

      if (!this.service.getOffices().map(office => office.toUpperCase()).includes(submitForm.form.controls.office.value.toUpperCase())) {
        this.service.setOffices(submitForm.form.controls.office.value);
      }

      if (!this.service.getDepartments().map(department => department.toUpperCase()).includes(submitForm.form.controls.department.value.toUpperCase())) {
        this.service.setDepartments(submitForm.form.controls.department.value);
      }

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
      this.newEvent.emit({ parameter: " ", valueTobeSearched: " " });
    }
  }
  alphabetSearchBlock(valueToBeSearched: string) {
    this.newEvent.emit({ parameter: "firstLetter", valueTobeSearched: valueToBeSearched });
  }
}
