import { Injectable } from '@angular/core';
import { jobTitles } from 'src/app/data/jobTitles';
@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  constructor() { }
  getJobTitles() {
    return jobTitles;
  }
}
