import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Car } from '../car/carModel';
import { Customer } from '../CustModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer!: Customer;
  constructor(private service: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomerDetails();
    if(sessionStorage.getItem("carId") !== null)
    sessionStorage.removeItem("carId");
  }

  getCustomerDetails() {
    this.service.getCustDetails().subscribe((response) => {
      this.customer = response;
    },(error:HttpErrorResponse) => {
      alert(error.message);
    });
  }
  carpage() {
    this.router.navigate(['car']);
  }

  insureNow(car : Car){
    sessionStorage.setItem("carId",car.carId.toString());
    this.router.navigate(['insurance']);
  }

  delete(carId : number) {
    this.service.deleteCar(carId).subscribe((response:void) => {
      this.getCustomerDetails();
      if(sessionStorage.getItem("carId") !== null)
    sessionStorage.removeItem("carId");
    }, (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }

  payment()
  {
    this.router.navigate(['payment']);
  }

}


