export class Address {
    id: number;
    city: string;
    state: string;
    pincode: string;
  
  }

export class Cab{
    cabId:number;
    carType:string;
    ratePerKm:number;
}
  
  export class Driver {
    userId: number;
    address: Address;
    password: string;
    email: string;
    mobile: string;
    username: string;
    licenceNo: number;
    available: boolean;
    cab:Cab;
  }
  