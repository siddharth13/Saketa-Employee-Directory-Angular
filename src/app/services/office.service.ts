import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { Office } from '../models/office.model';
@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private readonly route: string = "https://localhost:44315/api/office";
  private  offices: Office[];
  constructor(private httpService: HttpClient) {
    this.httpService.get(this.route).toPromise().then(offices => { this.offices = offices as Office[]; });
  }

  getOffices(): Office[] {
    return this.offices; 
  }
}
