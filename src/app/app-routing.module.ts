import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employees/employee-details/employee-details.component';

const routes: Routes =[
    { path: 'edit/:id', component: EmployeeDetailsComponent },
    { path: 'save', component: EmployeeDetailsComponent }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
}
