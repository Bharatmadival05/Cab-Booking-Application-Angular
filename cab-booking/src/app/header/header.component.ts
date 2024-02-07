import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private cust:CustomerService){

  }
}
