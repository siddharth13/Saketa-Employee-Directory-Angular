import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterType } from '../../enums/filter-type.enum';
import { CommonService } from '../../services/common-service';
import { DepartmentService } from '../../services/department.service';
import { JobTitleService } from '../../services/job-title.service';
import { OfficeService } from '../../services/office.service';

@Component({
  selector: 'app-filter-details',
  templateUrl: './filter-details.component.html',
  styleUrls: ['./filter-details.component.css']
})
export class FilterDetailsComponent implements OnInit {
  filterType: FilterType;
  heading: string;
  list: any;
  constructor(private route: ActivatedRoute, private commonService: CommonService, private officeService: OfficeService,
    private departmentService: DepartmentService, private jobTitleService: JobTitleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.filterType = this.commonService.getFilterType(params.get('filterType'));
      this.heading = params.get('filterType');
      switch (this.filterType) {
        case FilterType.department:
          this.list = this.departmentService.getDepartments();
          break;
        case FilterType.jobTitle:
          this.list = this.jobTitleService.getJobTitles();
          break;
        case FilterType.office:
          this.list = this.officeService.getOffices();
          break;
       }
    });
  }
 
  update(form: any) {
    console.log(Object.entries(form.controls));
    Object.entries(form.controls).forEach((control) => {
      if (control[1]["dirty"]) {
        if (control[1]["status"] === "VALID") {
          switch (this.filterType) {
            case FilterType.department:
              this.departmentService.updateDepartment(control[0], { id: control[0], name: control[1]["value"] });
              break;
            case FilterType.jobTitle:
              this.jobTitleService.updateJobTitle(control[0], { id: control[0], name: control[1]["value"] });
              break;
            case FilterType.office:
              this.officeService.updateOffice(control[0], { id: control[0], name: control[1]["value"] });
              break;
          }
         
        }
        else {
          alert("Please Enter a Valid Value");
        }
      }
    });
     
  }
}
