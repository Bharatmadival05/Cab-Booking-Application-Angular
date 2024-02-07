import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.css']
})
export class CabsComponent implements OnInit {
  cabsResponse:string
  userid:number

  constructor(private cust: CustomerService,
    private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.cabs();
    this.route.params.subscribe((params) => {
      this.userid = params['userid'];
      console.log('Received userid:', this.userid);
    });
  }

  cabs() {
    this.cust.cabs().subscribe(
      (res: string) => {
        console.log("Server Response:", res);
        this.cabsResponse = res;
      },
      (error) => {
        console.error("Error fetching cabs:", error);
      }
    );
  }  


getCabImage(cabType: string): string {
  
  const imageMap: { [key: string]: string } = {
    '4 wheeler': '../assets/bike.jpg',
    '2 wheeler': '../assets/bike.jpg',
  
  };

  return imageMap[cabType] || '../assets/bike.jpg';
}

addTrip(){
  this.router.navigate(['/trips',{userid:this.userid}])
}

endTrip(){
  this.router.navigate(['/endtrip',{userid:this.userid}]);
}

logOut(){
  this.router.navigate(['/login']);
}

}
