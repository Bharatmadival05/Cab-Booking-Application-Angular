export class Address {
    id: number;
    city: string;
    state: string;
    pincode: string;
  
  }
  
  export class Customer {
    userId: number;
    address: Address;
    password: string;
    email: string;
    mobile: string;
    username: string;
  }
  