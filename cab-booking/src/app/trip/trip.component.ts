import { HttpErrorResponse } from '@angular/common/http';
import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Trip, TripResponse } from './trip';
import { MatDialog } from '@angular/material/dialog';
import { BookingAlertComponent } from '../bookingalert/bookingalert.component';



@Component({
  selector: 'trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {
  userid:number
  tripResponse:TripResponse;
  tripBookingSuccess:boolean;

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.userid = params['userid'];
      console.log('Received id:', this.userid);
    });
  }


constructor(private cust:CustomerService,private route:ActivatedRoute,private router:Router,
  private dialog:MatDialog){
}

tripObj:Trip = {
  customerId:0,
  km:0,
  fromdate_time:'',
    from_location:'',
    to_location:'',
    todate_time:''
}



  addTrip(){
    this.tripObj.customerId = this.userid;
    if(this.tripObj){
      this.cust.addTrip(this.tripObj).subscribe(
        (data2) =>{
          console.log("Trip Booked",data2)
          this.tripResponse=data2
          this.tripBookingSuccess = true;
          this.openBookingAlert(data2)
        },
        (error)=>{
          console.error('Booking failed',error);
          alert('Sorry Booking Failed')
        }
      )
    }
  }

  backHome(){
    this.router.navigate(['/home',{userid:this.userid}])
  }

  openBookingAlert(data: any): void {
    this.dialog.open(BookingAlertComponent, {
      width: '400px',
      data: data,
    });
  }
  
}
