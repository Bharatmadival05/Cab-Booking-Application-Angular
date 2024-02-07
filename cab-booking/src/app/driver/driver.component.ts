import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Driver } from './driver';

@Component({
  selector: 'driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {

  constructor(private cust:CustomerService,
    private router:Router){}
  driverObj: Driver = {
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
    licenceNo: 0,
    available: true,
    cab:{
      cabId:0,
      carType:'',
      ratePerKm:0
    }
  };

  addDriver() {
    if (this.driverObj) {
      this.cust.addDriver(this.driverObj).subscribe(
        (data1) => {
          console.log('Driver added successfully', data1);
        },
        (error) => {
          console.error('Signup failed', error);
        }
      );
    }
  }

  userLogin(){
    this.router.navigate(['/login'])
  }

}
