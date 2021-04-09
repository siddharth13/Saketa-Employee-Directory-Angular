import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { RightContentComponent } from './components/right-content/right-content.component';
import { LeftContentComponent } from './components/left-content/left-content.component';
import { RightContentHeaderComponent } from './components/right-content-header/right-content-header.component';
import { RightContentBodyComponent } from './components/right-content-body/right-content-body.component';
import { Service } from './app.service';
 
import { FormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    RightContentComponent,
    LeftContentComponent,
    RightContentHeaderComponent,
    RightContentBodyComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
