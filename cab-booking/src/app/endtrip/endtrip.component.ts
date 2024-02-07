import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'endtrip',
  templateUrl: './endtrip.component.html',
  styleUrls: ['./endtrip.component.css']
})
export class EndtripComponent {
  tripid: number;
  errorticket:boolean
  errorticket1:boolean
  userid:number

  constructor(private cust:CustomerService,private router:Router,
    private route:ActivatedRoute){
  }

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.userid = params['userid'];
      console.log('Received userid:', this.userid);
    });
  }

  endTrip(tripid:number){
    this.cust.endTrip(tripid).subscribe((data)=>{
      console.log('trip Cancelled',data)
      this.errorticket=true

    },
    (error)=>{
      console.log('No ticket exist ',error);
      this.errorticket1=true
    })
  }

  closeCard() {
    this.errorticket = false;
    this.errorticket1 = false;
  }

  Home(){
    console.log(this.userid)
    this.router.navigate(['/home',{userid:this.userid}])
  }
}
