// signup.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer, Address } from './customer';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  customerObj: Customer = {
    userId: 0, // You need to set the appropriate default values or obtain them from somewhere
    address: {
      id: 0, // Set the appropriate default value or obtain it from somewhere
      city: '',
      state: '',
      pincode: '',
    },
    password: '',
    email: '',
    mobile: '',
    username: '',
  };

  constructor(private customerService: CustomerService,private router:Router) {}

  signUp() {
    // Log the address data before submitting
    console.log('Address Data:', this.customerObj.address);

    if (this.customerObj) {
      this.customerService.signup(this.customerObj).subscribe(
        (data) => {
          console.log('Customer added successfully', data);
          this.router.navigate(['/login'])
        },
        (error) => {
          console.error('Signup failed', error);
        }
      );
    }
  }
}
