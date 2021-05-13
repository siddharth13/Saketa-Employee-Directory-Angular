import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { environment } from '../../environments/environment.prod';
import { Office } from '../models/office.model';
@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  private readonly route: string = environment.apiUrl +"/office";
  private  offices: Office[];
  constructor(private httpService: HttpClient) {
    this.httpService.get(this.route).toPromise().then(offices => { this.offices = offices as Office[]; });
  }

  getOffices(): Office[] {
    return this.offices; 
  }
  setOffice(office: any): void {
    this.httpService.post<Office>(this.route, office).subscribe(_ => { }, (error) => {
      console.log({ office_service_post_error: error });
    }, () => { parent.window.location.reload();}); 
  }

  updateOffice(id, office) {
    this.httpService.put<Office>(this.route + "/" + id, office).subscribe(_ => { }, (error) => {
      console.log({ office_service_put_error: error });
    }, () => { parent.window.location.reload(); });
  }
  getOfficeNameById(id: string) {
    return this.offices.find(jobTitle => jobTitle.id === id).name;
  }
}
