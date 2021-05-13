import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from '../../environments/environment.prod';
import { JobTitle } from '../models/job-title.model';
@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  
  private readonly route: string = environment.apiUrl +"/jobtitle";
  private jobTitles: JobTitle[];
  constructor(private httpService: HttpClient) {
    this.httpService.get(this.route).toPromise().then(jobTitle => { this.jobTitles = jobTitle as JobTitle[]; });
  }

  getJobTitles() {
    return this.jobTitles;
  }
  setJobTitle(jobTitle: any): void {
    this.httpService.post<JobTitle>(this.route, jobTitle).subscribe(_ => { }, (error) => {
      console.log({ jobTitle_service_post_error: error });
    }, () => { parent.window.location.reload(); });
  }

  updateJobTitle(id: string, jobTitle: any) {
    this.httpService.put<JobTitle>(this.route + "/" + id, jobTitle).subscribe(_ => { }, (error) => {
      console.log({ jobTitle_service_put_error: error });
    }, () => { parent.window.location.reload(); })
  }
  getJobTitleNameById(id: string) {
    return this.jobTitles.find(jobTitle => jobTitle.id === id).name;
  }
}
