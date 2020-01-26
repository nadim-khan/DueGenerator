import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StartEndComponent } from './start-end/start-end.component';
import { WeeklyOffComponent } from './weekly-off/weekly-off.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { ResultsComponent } from './results/results.component';
import { DateManageService } from './services/date-manage.service';

@NgModule({
  declarations: [
    AppComponent,
    StartEndComponent,
    WeeklyOffComponent,
    FrequencyComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DateManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
