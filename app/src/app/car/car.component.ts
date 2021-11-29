import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../CarModel';
import { AppService } from '../service/app.service';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car! : Car;
  constructor(private appService: AppService, private router: Router) {
    this.car = new Car();
   }

  ngOnInit(): void {
  }

  submit(){
    
    this.appService.saveCar(this.car).subscribe((response:string) => {
        if(response === "Car added"){
        this.router.navigate(['/customer']);
        }else{
          alert('Car already exists');
        }
    },(error:HttpErrorResponse) => {
      alert(error.message);
    }); 
  }

 
 
}