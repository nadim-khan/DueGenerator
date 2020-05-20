import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { StartEndComponent } from './start-end/start-end.component';
import { WeeklyOffComponent } from './weekly-off/weekly-off.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { ResultsComponent } from './results/results.component';
import { DateManageService } from './services/date-manage.service';
import { AuthService } from './services/auth.service';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StartEndComponent,
    WeeklyOffComponent,
    FrequencyComponent,
    ResultsComponent,
    EventsComponent,
    SpecialEventsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DateManageService, AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
