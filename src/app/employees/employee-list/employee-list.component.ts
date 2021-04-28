 
import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from 'src/app/app.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employees;
 
  constructor(private service: Service) {
    
  }
  ngOnInit(): void {
   
  }
  
  
  
}
