import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from '../CarModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  car : CarModel[] = [];

  constructor(private http : HttpClient, private router : Router) { 
    this.http.get<CarModel[]>('../assets/car.json').subscribe(data => this.car = data);
    
    
  }

  validatereg(qcars : CarModel) {
    return this.car.find(x => x.regNo == qcars.regNo)
  }

  saveCar(c:CarModel){
    this.car.push(c)
  }

  listCar(){
    return this.car;
  }
  }

