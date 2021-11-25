import { Component, OnInit } from '@angular/core';
import { Car } from '../CarModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

cars! : Car;
  constructor() {
    this.cars = new Car();
   }

  ngOnInit(): void {
  }

}
