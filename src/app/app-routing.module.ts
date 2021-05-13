import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employees/employee-details/employee-details.component';
import { FilterDetailsComponent } from './components/filter-details/filter-details.component';

const routes: Routes = [
  { path: 'edit-employee/:id',  component: EmployeeDetailsComponent },
  { path: 'save-employee', component: EmployeeDetailsComponent },
  { path: 'filter-details/:filterType', component: FilterDetailsComponent }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
}
