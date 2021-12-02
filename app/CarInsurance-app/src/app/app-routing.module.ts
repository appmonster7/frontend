import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CheckComponent } from './check/check.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'login', component:LoginComponent},
  {path:'customer',component:CustomerComponent},
  {path:'home',component:HomeComponent},
  {path:'car',component:CarComponent},
  {path: 'insurance',component:InsuranceComponent},
  {path:'payment',component:PaymentComponent},
  {path:'check',component:CheckComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
