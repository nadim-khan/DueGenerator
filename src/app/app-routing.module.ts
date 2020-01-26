import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StartEndComponent } from './start-end/start-end.component';
import { WeeklyOffComponent } from './weekly-off/weekly-off.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  {path: '', component: StartEndComponent},
  {path: 'startEndSet', component: StartEndComponent},
  {path: 'weeklyOff', component: WeeklyOffComponent},
  {path: 'frequency', component: FrequencyComponent},
  {path: 'results', component: ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
