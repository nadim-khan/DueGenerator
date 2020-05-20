import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  events;
  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.authService.getSpecialEvents()
    .subscribe(
      res => {
        console.log(res);
        this.events = res;
    },
    err => {
      if (err instanceof HttpErrorResponse ) {
        if (err.status === 401) {
          this.router.navigate(['/auth/login']);
        }
      }
    }
    );
  }

}
