import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CustomerComponent } from './customer/customer.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'customer',component:CustomerComponent},
  {path:'home', component:HomeComponent},
  {path:'car',component:CarComponent} ,
  {path:'insurance',component:InsuranceComponent},
  {path:'get-quote',component:GetQuoteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
