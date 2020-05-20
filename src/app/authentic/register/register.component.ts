import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl, ValidationErrors} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  rehide = true;
  data;
   constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }
   registrationData = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3), this.cannotContainSpace]],
     email: ['', [Validators.required, Validators.email]],
     password: ['',  [Validators.required]],
     repeatPassword: ['',  [Validators.required, this.passwordMatch]],
   });

   get f() {
     return this.registrationData.controls;
   }

   cannotContainSpace(control: FormControl) {
     if ((control.value).indexOf(' ') >= 0) {
       return {
         cannotContainSpace: true
        };
   }
     return null;
   }

   passwordMatch(control: FormControl) {
     const password = control.root.get('password');
     return password && control.value !== password.value ? {
       passwordMatch : true
     } : null;
   }

  register() {
    this.authService.register(this.registrationData.value)
    .subscribe(
      res => {
        this.data = res;
        console.log('Registering User : ', res);
        localStorage.setItem('token', this.data.token);
        this.router.navigate(['/special']);
      },
      err => console.error('Error registering the User : ', err)
    );
    console.log('registered User : ', this.registrationData.value);
   }

   clearForm() {
     this.registrationData.reset();
   }

   ngOnInit(): void {
   }

}
