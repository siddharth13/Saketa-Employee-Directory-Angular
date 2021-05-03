import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { EmployeeListComponent } from 'src/app/components/employees/employee-list/employee-list.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { CommonService } from 'src/app/services/common-service';
import { OfficeService } from 'src/app/services/office.service';
import { JobTitleService } from 'src/app/services/job-title.service';
import { DepartmentService } from 'src/app/services/department.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { EmployeeDetailsComponent } from 'src/app/components/employees/employee-details/employee-details.component';
import { EmployeeFilterPipe } from './pipes/employee-filter.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    EmployeeListComponent,
    HeaderComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [CommonService, EmployeeService, OfficeService, JobTitleService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
