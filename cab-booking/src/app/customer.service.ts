import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http:HttpClient) {
   }
  private signupurl='http://localhost:9080/save/'
  private signinurl='http://localhost:9080/customer'
  private getcabsurl='http://localhost:9080/cab'
  private adddriver='http://localhost:9080/drivers'
  private addtrip='http://localhost:9080/trip'
  private endtrip='http://localhost:9080/tripend'

  signup(data: any): Observable<any> {
    return this.http.post(`${this.signupurl}`, data);
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.signinurl}/${email}/${password}`;
    return this.http.get(url);
  }

  cabs(): Observable<string>{
    return this.http.get<string>(this.getcabsurl)
  }

  addDriver(data1:any):Observable<any>{
    return this.http.post(`${this.adddriver}`,data1);
  }

  addTrip(data2:any):Observable<any>{
    return this.http.post(`${this.addtrip}`,data2)
  }

  endTrip(id: number): Observable<any> {
    return this.http.patch(`${this.endtrip}/${id}`, {});
  }
}
