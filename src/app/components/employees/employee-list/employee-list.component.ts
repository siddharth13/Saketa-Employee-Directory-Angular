 import { createOutput } from '@angular/compiler/src/core';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilterType } from '../../../enums/filter-type.enum';
import { CommonService } from '../../../services/common-service';
import { MatchType } from 'src/app/enums/match-type.enum'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() searchString;
  
  employees = '';
  value:any;
  isVisible = false;
  isUpdateButtonVisible = false;
  alphabets = [];
  searchValue: string = '';
   
  constructor(private commonService: CommonService) {
    this.value = this.searchString;
    for (var i = 0; i < 26; i++) {
      this.alphabets.push(String.fromCharCode(97 + i));
    }
     
  }
  ngOnInit(): void {
    
  }
  ngOnChanges() {
    this.value = this.searchString;
  }

  clearSearchbar() {
    this.searchValue = '';
    this.value = { matchType: MatchType.firstWord,parameter: "*", valueTobeSearched: " " };
  
  }
  searchByCharacter(parameter:string, valueTobeSearched:string) {
    this.value = { matchType: MatchType.full,parameter: this.commonService.getFilterType(parameter), valueTobeSearched: valueTobeSearched };
  }


  alphabetSearchBlock(parameter: string, valueToBeSearched: string) {

    this.value = { matchType: MatchType.firstWord, parameter: this.commonService.getFilterType(parameter), valueTobeSearched: valueToBeSearched };
     
  }
}