import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormBuilder, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { DateManageService } from '../services/date-manage.service';
import { DateFormatPipe } from '../services/pipes';


declare var M: any;

@Component({
  selector: 'app-start-end',
  templateUrl: './start-end.component.html',
  styleUrls: ['./start-end.component.css']
})
export class StartEndComponent implements OnInit {
  date = new FormControl(new Date());
  url = 'weeklyOff';
  endDate = new FormControl(new Date());
  value = '10';
  startMinDate = new Date();
  endMinDate;
  startevents: string[] = [];
  endChoice;
  disableCal = true;
  disableOccur = true;
  formData;

  constructor(private fb: FormBuilder, private dateService: DateManageService, private router: Router) { }

  startEndForm = this.fb.group({
    startDate: [this.startMinDate, Validators.required],
    choice: [this.endChoice, Validators.required],
    endDate: [this.endMinDate],
    occurences: [''],
  });

  addStartEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.startevents.push(`${type}: ${event.value}`);
    this.endMinDate = this.startEndForm.value.startDate;
    this.endDate = new FormControl(this.startEndForm.value.startDate);
  }
  addEndEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.startevents.push(`${type}: ${event.value}`);
  }


  dateFilter = date => {
    const day = date.getDay();
    return day !==  0 && day !== 6;
  }
  calRadio() {
    this.disableCal = false;
    this.disableOccur = true;
  }
  occurRadio() {
    this.disableCal = true;
    this.disableOccur = false;
  }

  onSetDates() {
    this.formData = this.startEndForm.value;
    if (this.formData.choice === 'occur' && this.formData.occurence === '' ) {
      alert('Please fill the Occurence Value');
      location.reload();
    }
    if ( this.formData.choice === 'calender'   ) {
      if ( this.formData.endDate < this.formData.startDate) {
        alert('Please Select the appropriate date');
        location.reload();
      }
    }
    console.log('Form Value : ', this.startEndForm.value);
    this.dateService.startEndDates.push(this.startEndForm.value);
    this.dateService.dateRange();
    this.router.navigateByUrl(this.url);
  }

  ngOnInit() {
  }

}
