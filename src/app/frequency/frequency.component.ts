import { Component, OnInit } from '@angular/core';
import { DateManageService } from '../services/date-manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.css']
})
export class FrequencyComponent implements OnInit {
  url = 'results';
  urlDate = 'startEndSet';
  urlWeekOff = 'weekOff';
  startDate;
  endDate;
  randomChoice;
  weekRepo = [
    { day: 'Mon', id: 1 , val: false , data: 'Monday'},
    { day: 'Tue', id: 2 , val: false , data: 'Tuesday'},
    { day: 'Wed', id: 3 , val: false , data: 'Wednesday'},
    { day: 'Thu', id: 4 , val: false , data: 'Thursday'},
    { day: 'Fri', id: 5 , val: false , data: 'Friday'},
    { day: 'Sat', id: 6 , val: true , data: 'Saturday'},
    { day: 'Sun', id: 0 , val: true , data: 'Sunday'},
  ];
  months = [
    { month: 'Jan', id: 0 , val: true , data: 'January'},
    { month: 'FEB', id: 1 , val: false , data: 'February'},
    { month: 'MAR', id: 2 , val: false , data: 'March'},
    { month: 'APR', id: 3 , val: true , data: 'April'},
    { month: 'MAY', id: 4 , val: false , data: 'May'},
    { month: 'JUNE', id: 5 , val: false , data: 'June'},
    { month: 'JULY', id: 6 , val: true , data: 'July'},
    { month: 'AUG', id: 7 , val: false , data: 'August'},
    { month: 'SEPT', id: 8 , val: false , data: 'September'},
    { month: 'OCT', id: 9 , val: false , data: 'October'},
    { month: 'NOV', id: 10 , val: false , data: 'November'},
    { month: 'DEC', id: 11 , val: false , data: 'December'},
  ];


  constructor(private dateService: DateManageService, private router: Router) {
   }

  ngOnInit() {
    if (this.dateService.startEndDates[0] ) {
      this.startDate = this.dateService.fromDate;
      this.endDate = this.dateService.toDate;
    }

  }

  generateDaily() {
    if (this.dateService.fromDate && this.dateService.fromDate ) {
      console.log('Daily Due date data : ', this.dateService.generateDaily());
      this.router.navigateByUrl(this.url);
    } else {
      alert('Please set the Start and End date for Result');
      this.router.navigateByUrl(this.urlDate);
    }
  }

  generateWeekly() {
    this.dateService.weekRepoDate = this.weekRepo;
    console.log('Weekly report frequency : ', this.dateService.generateWeekly());
    this.router.navigateByUrl(this.url);
  }

  generateMonthly() {
    this.dateService.monthlyData = this.months;
    this.dateService.generateMonthly();
    this.router.navigateByUrl(this.url);
  }

  generateRandom() {
    if ( ! this.dateService.weekOff) {
      alert('Please set the weekoff !');
      this.router.navigateByUrl(this.urlWeekOff);
    } else {
      if (this.randomChoice === 'randomWeekly') {
        this.generateRandomWeek();
        this.router.navigateByUrl(this.url);
      } else if (this.randomChoice === 'randomMonthly') {
        this.generateRandomMonth();
        this.router.navigateByUrl(this.url);
      } else {
        alert('Please choose your Random report type !');
      }
    }
  }

  generateRandomWeek() {
    this.dateService.generateRandomWeek();
  }

  generateRandomMonth() {
    this.dateService.generateRandomMonth();
  }

}
