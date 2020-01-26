import { Component, OnInit } from '@angular/core';
import { DateManageService } from '../services/date-manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  url = 'frequency';
  dueStart;
  dueEnd;
  dailyDates;
  weeklyReport;
  MonthlyReport;
  randomWeek;
  randomMonth;
  weekOffs = [];
  showDaily = false;
  showMonthly = false;
  showWeekly = false;
  showRandomWeekly = false;
  showRandomMonthly = false;
  constructor(private dateService: DateManageService, private router: Router) { }

  ngOnInit() {
    console.log('showSet', this.dateService.resultShowSet);
    if (this.dateService.fromDate) {
      this.getDates();
    } else {
      alert('Please set the Start and End date for Result');
    }
  }
  routeToFrequency() {
    this.router.navigateByUrl(this.url);
  }

  getDates() {
    this.dueStart = this.dateService.fromDate;
    this.dueEnd = this.dateService.toDate;
    this.dailyDates = this.dateService.generateDaily();
    this.showDaily = this.dateService.resultShowSet[0];
    console.log('Result daily repo : ', this.dailyDates);
    this.weeklyReport = this.dateService.generateWeekly();
    this.showWeekly = this.dateService.resultShowSet[1];
    console.log('Result Weekly repo : ', this.weeklyReport);
    this.MonthlyReport = this.dateService.generateMonthly();
    this.showMonthly = this.dateService.resultShowSet[2];
    console.log('Result Monthly repo : ', this.MonthlyReport);
    this.randomWeek = this.dateService.generateRandomWeek();
    this.showRandomWeekly = this.dateService.resultShowSet[3];
    console.log('Result Weekly(Random) repo : ', this.randomWeek);
    this.randomMonth = this.dateService.generateRandomMonth();
    this.showRandomMonthly = this.dateService.resultShowSet[4];
    console.log('Result Monthly(Random) repo : ', this.randomMonth);
    this.dateService.weekOff.forEach(element => {
      if (element.val === true ) {
        this.weekOffs.push(element.day);
      }
    });
  }




}
