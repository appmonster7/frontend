import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../CarModel';
import { Customer } from '../CustModel';
import { insuranceModel } from '../insuranceModel';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private static baseurl: string = "http://localhost:8880";
  customers:Customer[]=[];

  constructor(private http : HttpClient) { }

  login(username:string, password:string){
    return this.http.get<Customer>(AppService.baseurl + "/login?username="+username+"&password="+password);
  }

  signUp(customer:Customer):Observable<void>{
    return this.http.post<void>(AppService.baseurl + "/customer",customer);

  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("userId");
    if((user === null))
      return false;
    else
      return true;
  }

  logout(){
    sessionStorage.removeItem("userId");
  }
  
  getCustDetails(){
    let userId: any =sessionStorage.getItem("userId");
    return this.http.get<Customer>(AppService.baseurl + "/customer/" + userId);
  }
  
  saveCar(c:Car):Observable<string>{
    let userId: any =sessionStorage.getItem("userId");
    return this.http.post(AppService.baseurl + "/car/"+ userId,c, {responseType: 'text'});
  }

  getCarDetails(carId : number){
    return this.http.get<Car>(AppService.baseurl + "/car/" + carId);
  }

  getQuote(regNo:string, coverageType:string):Observable<number> {
    return this.http.get<number>(AppService.baseurl + "/car/quote?regNo=" + regNo +"&coverageType=" + coverageType);
  }

  buyInsurance(i : insuranceModel){
    let carId: any =sessionStorage.getItem("carId");
    return this.http.post<void>(AppService.baseurl + "/insurance/"+ carId, i);
  }
}