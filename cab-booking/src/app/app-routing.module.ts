import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { EndtripComponent } from './endtrip/endtrip.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TripComponent } from './trip/trip.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path: "", component: SignupComponent },
  {path:'login', component:LoginComponent},
  {path:'driver', component:DriverComponent},
  {path:'trips', component:TripComponent},
  {path:'endtrip', component:EndtripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
