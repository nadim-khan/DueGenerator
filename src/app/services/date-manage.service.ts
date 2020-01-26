import { Injectable } from '@angular/core';
import { DateFormatPipe } from '../services/pipes';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateManageService {
  startEndDates = [];
  fromDate;
  toDate;
  i;
  j;
  weekR1;
  weekR2;
  monthlyReport = [];
  randomWeek = [];
  randomMonth = [];
  monthlyData = [];
  currentDateMonth;
  weekRepoDate = [];
  weekOff = [];
  currentDate;
  currentMonth;
  currentDateWeek;
  currentDateRMonth;
  dateSet;
  resultShowSet = [];
  constructor() {}

  dateRange() {
    localStorage.setItem('object', JSON.stringify(this.startEndDates[0]));
    this.fromDate = moment(this.startEndDates[0].startDate).format('dddd, MMMM Do YYYY');
    if (this.startEndDates[0].occurences) {
      this.toDate = (moment(this.startEndDates[0].startDate).add(this.startEndDates[0].occurences, 'days').format('dddd, MMMM Do YYYY'));
      this.startEndDates[0].endDate = (moment(this.startEndDates[0].startDate).add(this.startEndDates[0].occurences, 'days'));
    } else {
      this.toDate = moment(this.startEndDates[0].endDate).format('dddd, MMMM Do YYYY');
    }
    console.log('Start : ' + this.fromDate + '\nEnd : ' + this.toDate);
  }

  generateDaily() {
    const dailyDate = [];
    this.currentDate = moment(this.startEndDates[0].startDate);
    while ( moment(this.currentDate) <= moment(this.startEndDates[0].endDate)) {
      if (moment(this.currentDate).isoWeekday() !== 6 && moment(this.currentDate).isoWeekday() !== 7) {
        dailyDate.push( moment(this.currentDate).format('dddd, MMMM Do YYYY'));
      }
      this.currentDate = moment(this.currentDate).add(1, 'days');
    }
    this.resultShowSet[0] = true;
    return dailyDate;

  }

  generateWeekly() {
    const weeklyDate = [];
    for (this.i = 0 ; this.i < this.weekRepoDate.length ; this.i ++ ) {
      if (this.weekRepoDate[this.i].val === true ) {
        this.currentDateWeek = moment(this.startEndDates[0].startDate);
        console.log( this.weekRepoDate[this.i].day);
        while ( moment(this.currentDateWeek) <= moment(this.startEndDates[0].endDate)) {
          weeklyDate.push(moment(this.currentDateWeek).day(this.weekRepoDate[this.i].id).format('dddd, MMMM Do YYYY'));
          this.currentDateWeek = moment(this.currentDateWeek).add(7, 'days');
        }
      }
    }
    this.resultShowSet[1] = true;
    return weeklyDate;
  }
  generateMonthly() {
    const monthlyDate = [];
    this.currentDateMonth = moment(this.startEndDates[0].startDate);
    for (this.i = 0 ; this.i < this.monthlyData.length ; this.i ++ ) {
      if (this.monthlyData[this.i].val === true ) {
        monthlyDate.push(moment(this.startEndDates[0].startDate).month(this.i).format('dddd, MMMM Do YYYY'));
        console.log('==>', moment(this.startEndDates[0].startDate).month(this.i).format('dddd, MMMM Do YYYY'));
      }
    }
    this.resultShowSet[2] = true;
    this.monthlyReport = monthlyDate;
    return monthlyDate;

  }

  generateRandomWeek() {
    this.randomWeek = [];
    this.weekOff.forEach(elements => {
      if (elements.val === false) {
        this.currentDate = moment(this.startEndDates[0].startDate).add(Math.floor(Math.random() * 6 + 1));
        if ( moment(this.currentDate).add(Math.floor(Math.random() * 6 + 1)) <= moment(this.startEndDates[0].endDate)) {
          for (this.i = 0; this.i <= 1; this.i++) {
            this.randomWeek[this.i] = moment(this.currentDate).add(6 + this.i, 'days').format('dddd, MMMM Do YYYY');
          }
        }
      }
    });
    this.resultShowSet[3] = true;
    return this.randomWeek;

  }

  generateRandomMonth() {
    this.randomMonth = [];
    this.weekOff.forEach(elements => {
      if (elements.val === false) {
        this.currentMonth = moment(this.startEndDates[0].startDate).month();
        this.currentDateRMonth =  moment(this.startEndDates[0].startDate).add(Math.floor(Math.random() * 9 + 1), 'days');
        for (this.i = 0; this.i <= 20; this.i++) {
          if ( this.currentDateRMonth <= moment(this.startEndDates[0].endDate
            || this.currentDateRMonth.month() === this.currentMonth
            || this.currentDateRMonth.isoWeekday() === 6
            || this.currentDateRMonth.isoWeekday() === 7 )) {
              for (this.j = 0; this.j < 5 ; this.j ++) {
                this.randomMonth[this.j] = moment(this.currentDateRMonth).format('dddd, MMMM Do YYYY');
                this.currentDateRMonth = moment(this.startEndDates[0].startDate).add(Math.floor(Math.random() * 6 + 2), 'days');
          }
        }
      }
    }
    });
    this.resultShowSet[4] = true;
    return this.randomMonth;
  }
}
