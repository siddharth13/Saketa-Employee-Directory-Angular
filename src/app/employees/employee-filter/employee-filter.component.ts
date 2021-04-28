import {  Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Service } from 'src/app/app.service';
 
@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilter implements OnInit {
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
  
   
  alphabetSearchBlock(valueToBeSearched: string) {
    this.newEvent.emit({ parameter: "firstLetter", valueTobeSearched: valueToBeSearched });
  }
}
