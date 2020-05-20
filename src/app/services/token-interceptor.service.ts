import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector) { }
  // tslint:disable-next-line: max-line-length
  intercept(req: import('@angular/common/http').HttpRequest<any>, next: import('@angular/common/http').HttpHandler): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedRequest);
  }
}
