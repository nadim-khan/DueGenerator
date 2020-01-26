import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { DateManageService } from '../services/date-manage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-weekly-off',
  templateUrl: './weekly-off.component.html',
  styleUrls: ['./weekly-off.component.css']
})
export class WeeklyOffComponent implements OnInit {
  whTax = false;
  url = 'frequency';
  data = [
    { day: 'Mon', id: 1 , val: false},
    { day: 'Tue', id: 2 , val: false },
    { day: 'Wed', id: 3 , val: false },
    { day: 'Thu', id: 4 , val: false },
    { day: 'Fri', id: 5 , val: false },
    { day: 'Sat', id: 6 , val: true },
    { day: 'Sun', id: 0 , val: true },
  ];
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;
  constructor( private dateService: DateManageService, private router: Router) { }

  ngOnInit() {
  }
  weekOffSet() {
    console.log('Week off Data : ', this.data);
    this.dateService.weekOff = this.data;
    this.router.navigateByUrl(this.url);
  }


}
