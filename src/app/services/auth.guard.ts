import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.loggedIn()) {
      console.log('Token', this.authService.loggedIn());
      return true;
    } else {
      if (confirm('User not logged In ' + '\n' + 'Press Ok to login.')) {
        this.router.navigate(['/auth/login']);
      } else {
        return false;
      }
    }
  }

}
