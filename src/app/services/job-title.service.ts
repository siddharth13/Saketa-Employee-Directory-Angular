import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { JobTitle } from '../models/job-title.model';
@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  
  private readonly route: string = "https://localhost:44315/api/jobtitle";
  private jobTitles: JobTitle[];
  constructor(private httpService: HttpClient) {
    this.httpService.get(this.route).toPromise().then(jobTitle => { this.jobTitles = jobTitle as JobTitle[]; });
  }

  getJobTitles() {
    return this.jobTitles;
  }

}
