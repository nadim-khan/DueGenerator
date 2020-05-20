import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getEvents().subscribe(
      res => {
        console.log(res);
        this.events = res;
    });
  }

}
