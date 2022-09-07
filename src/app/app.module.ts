import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SavestudentComponent } from './components/savestudent/savestudent.component';
import { NavebarComponent } from './components/navebar/navebar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GetstudentsComponent } from './components/getstudents/getstudents.component';

@NgModule({
  declarations: [
    AppComponent,
    SavestudentComponent,
    NavebarComponent,
    GetstudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
