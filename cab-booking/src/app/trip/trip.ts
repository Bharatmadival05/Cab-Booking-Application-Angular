export class Trip{
    customerId:number
    km:number
    fromdate_time:string
    from_location:string
    to_location:string
    todate_time:string
}
export class Driver{
    username:string
    mobile:number
}

export class Cab{
    carType:string
}
export class TripResponse{
    tripBookingId:number
    driver:Driver
    cab:Cab
    fromdate_time:string
    from_location:string
    to_location:string
    todate_time:string
    km:number
    totalamount:number
}