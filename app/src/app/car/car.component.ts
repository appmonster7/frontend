import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from '../CarModel';
import { AppService } from '../service.car/app.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

cardet! : CarModel;
car : CarModel[] = [];

  constructor(private router : Router,private service:AppService) {
    this.cardet = new CarModel();
   }

  

   RegQuote() {
    let user = this.service.validatereg(this.cardet);
    if(user == null) {
      localStorage.setItem("user", JSON.stringify(user));
      this.service.saveCar(this.cardet);
      this.router.navigate(['get-quote']);
    } else
      alert("Not Registered");
  }

  

  ngOnInit(): void {
    
  }

}
