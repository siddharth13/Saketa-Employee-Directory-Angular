import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
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
import { JobTitleComponent } from './components/job-title/job-title.component';
import { DepartmentComponent } from './components/department/department.component';
import { OfficeComponent } from './components/office/office.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { plus, pencil } from 'ngx-bootstrap-icons';
import { FilterDetailsComponent } from './components/filter-details/filter-details.component';
const icons = {
  plus,
  pencil
};
@NgModule({
  declarations: [
    AppComponent, 
    EmployeeListComponent,
    HeaderComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    JobTitleComponent,
    DepartmentComponent,
    OfficeComponent,
    FilterDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [CommonService, EmployeeService, OfficeService, JobTitleService, DepartmentService],
  bootstrap: [AppComponent]
})


export class AppModule { }
