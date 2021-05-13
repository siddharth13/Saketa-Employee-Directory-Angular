 import { createOutput } from '@angular/compiler/src/core';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilterType } from '../../../enums/filter-type.enum';
import { CommonService } from '../../../services/common-service';
import { MatchType } from 'src/app/enums/match-type.enum'
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee-detail.model';
import { SearchQuery } from '../../../models/search-query.model';
import { OfficeService } from '../../../services/office.service';
import { JobTitleService } from '../../../services/job-title.service';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() searchString: SearchQuery;

  employees: Employee[]=[];
  value: SearchQuery;
  isVisible: boolean = false;
  isUpdateButtonVisible: boolean = false;
  alphabets:string[] = [];
  searchValue: string = '';

  constructor(private commonService: CommonService, private employeeService: EmployeeService,
    private officeService: OfficeService,
    private jobTitleService: JobTitleService,
    private departmentService: DepartmentService) {
    this.value = this.searchString;
    for (var i = 0; i < 26; i++) {
      this.alphabets.push(String.fromCharCode(97 + i));
    } 
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().then((employees) => {
      this.employees = employees as Employee[];
    });
  }
  ngOnChanges():void {
    this.value = this.searchString;
  }

  clearSearchbar():void  {
    this.searchValue = '';
    this.value = { matchType: MatchType.firstWord, parameter: this.commonService.getFilterType("*"), valueTobeSearched: " " };
  
  }
  searchByCharacter(parameter:string, valueTobeSearched:string):void {
    this.value = { matchType: MatchType.full,parameter: this.commonService.getFilterType(parameter), valueTobeSearched: valueTobeSearched };
  }


  alphabetSearchBlock(parameter: string, valueToBeSearched: string):void {

    this.value = { matchType: MatchType.firstWord, parameter: this.commonService.getFilterType(parameter), valueTobeSearched: valueToBeSearched };
     
  }
}
