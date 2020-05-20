import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl, ValidationErrors} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  rehide = true;
  data;
   constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }
   loginData = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

   get f() {
     return this.loginData.controls;
   }

   login() {
     this.authService.login(this.loginData.value)
     .subscribe(
      res => {
        console.log( res);
        this.data = res;
        localStorage.setItem('token', this.data.token);
        this.router.navigate(['/special']);
       },
      err => { console.log('Error logging in the user : ', err); }
     );
   }

   clearForm() {
     this.loginData.reset();
   }

   ngOnInit(): void {
   }


}
