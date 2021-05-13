 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterType } from 'src/app/enums/filter-type.enum'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpService: HttpClient) { }

  generateErrorList(control) {
    var errorlist = [];
    
    if (control.email.errors) {
      errorlist.push("\nPlease enter a valid email");
    }
    if (control.firstName.errors) {
      errorlist.push("\nfirst Name cannot be empty");
    }
    if (control.lastName.errors) {
      errorlist.push("\nlast Name cannot be empty");
    }
     
    if (control.phoneNumber.errors) {
      errorlist.push("\nPlease enter a valid phone number");
    }
    if (control.skypeId.errors) {
      errorlist.push("\nPlese enter a valid skype Id");
    }
    return errorlist;
  }
  getFilterType(parameter) {
    switch (parameter) {
      case "office":
        return FilterType.office;
      case "department":
        return FilterType.department;
      case "jobTitle":
        return FilterType.jobTitle;
      case "prefferedName":
        return FilterType.prefferedName;
      default:
        return FilterType.none;
    }
  }
}

