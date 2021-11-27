import { Injectable } from '@angular/core';
import { InsrModel } from './InsrModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {
insr : InsrModel[]=[];
  constructor() { }

  
  saveInsr(i:InsrModel){
    this.insr.push(i)
  }

  listCar(){
    return this.insr;
  }
}
