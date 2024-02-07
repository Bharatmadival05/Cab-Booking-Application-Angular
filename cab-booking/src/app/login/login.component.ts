import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userid:number

  constructor(private fb: FormBuilder, private authService: CustomerService,
    private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // Call AuthService to authenticate
      this.authService.login(email, password).subscribe(
        (response) => {
          // Handle successful login
          console.log('Login successful', response);
          const extractedUserId=response.userId
          
          this.router.navigate(['/home', { userid: extractedUserId }]);
          
        },
        (error) => {
          // Handle login error
          console.error('Login failed', error);
        }
      );
    }
  }

  driverSignup(){
    this.router.navigate(['/driver']);
  }
}
