import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from '../CarModel';
//import { CarModel } from '../CarModel';
import { AppService } from '../service.car/app.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cardet : CarModel ;

  constructor(private router : Router,private service:AppService) {
    this.cardet = new CarModel();
   }
  ngOnInit(): void {
    
  }

  

   RegQuote() {
    let user = this.service.validatereg(this.cardet);
    if(user == null) {
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(['login']);
    } else
      alert("Not Registered");
  }

  loginpage()
  {
    this.router.navigate(['login']);
  }
  custpage()
  {
    this.router.navigate(['customer']);
  }

  


}
