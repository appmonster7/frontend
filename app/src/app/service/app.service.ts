import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer/custModel';
@Injectable({
  providedIn: 'root'
})
export class AppService {

 customers:Customer[]=[];


  constructor() { }

  listCust(){
    return this.customers;
  }

  saveCust(c:Customer){
    this.customers.push(c)
  }

 
}



