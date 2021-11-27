import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer/custModel';
import { LoginModel } from '../LoginModel';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AppService {

 customers:Customer[]=[];
 user : LoginModel [] = [];


  constructor(private http : HttpClient, private router : Router) { 
    this.http.get<LoginModel[]>('../assets/user.json').subscribe(data => this.user = data);
  }

  listCust(){
    return this.customers;
  }

  saveCust(c:Customer){
    this.customers.push(c)
  }

  validate(login : LoginModel) {
    return this.user.find(x => x.userid == login.userid && x.password == login.password)
  }

 
}



