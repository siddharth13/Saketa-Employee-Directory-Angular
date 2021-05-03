import { Injectable } from '@angular/core';
import { offices } from 'src/app/data/offices';
@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor() { }
  getOffices() {
    return offices;
  }
}
