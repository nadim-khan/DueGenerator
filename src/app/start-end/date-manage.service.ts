import { Injectable } from '@angular/core';
import { DateFormatPipe } from '../services/pipes';

@Injectable({
  providedIn: 'root'
})
export class DateManageService {
  startEndDates = [];
  weekOff = [];
  i;
  currentDate: any;
  newDate: any;
  dateFormatPipeFilter;
  constructor() {
    this.currentDate = new Date();
    this.dateFormatPipeFilter = new DateFormatPipe();
    this.newDate = this.dateFormatPipeFilter.transform(this.currentDate);
    console.log('=====>>>>', this.newDate);
}

  dateRange() {
    console.log('dataBound Rage set : ', this.startEndDates[0]);
    for ( this.i = 0; this.i < this.startEndDates.length; this.i++) {
      localStorage.setItem('object', JSON.stringify(this.startEndDates[this.i]));
      console.log('to work : ', this.startEndDates[this.i]);
    }
  }
  weekOffRange() {
    console.log('WeekOff data is : ', this.weekOff);
  }

  reportDaily() {
    console.log(this.startEndDates[this.i]);
  }
}
