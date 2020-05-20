import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StartEndComponent } from './start-end/start-end.component';
import { WeeklyOffComponent } from './weekly-off/weekly-off.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { ResultsComponent } from './results/results.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: StartEndComponent},
  {path: 'home', component: HomeComponent},
  {path: 'auth', loadChildren: () => import('./authentic/authentic.module').then(m => m.AuthenticModule) },
  {path: 'startEndSet', component: StartEndComponent},
  {path: 'weeklyOff', component: WeeklyOffComponent},
  {path: 'frequency', component: FrequencyComponent},
  {path: 'results', component: ResultsComponent, canActivate: [AuthGuard]},
  {path: 'events', component: EventsComponent},
  {path: 'special', component: SpecialEventsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
