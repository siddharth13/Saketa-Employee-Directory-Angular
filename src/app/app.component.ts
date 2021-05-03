import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Saketa-Employee-Directory';
  searchString;
  constructor( ) {
   
  }
  sendSearchStringToRight(searchObject: any) {
    this.searchString = searchObject;
  }
}
