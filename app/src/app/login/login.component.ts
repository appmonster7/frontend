import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../CustModel';
import { LoginModel } from '../LoginModel';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cust! : Customer;
  auth : LoginModel;
 userid : string = "";
 password : string = "";
 repassword: string = "";
   
  constructor(private router : Router,private service:AppService) { 
    this.auth = new LoginModel();
    this.cust = new Customer();
  
  }
  validate ()
  {
    this.service.login(this.userid,this.password).subscribe(data => {
    if(data === null)
    alert('Athentication failed') 
    else{
      sessionStorage.setItem("userId",data.customerId);
      this.router.navigate(['/customer']);
    }

      
    });
  }

  signUp()
   {
    if(this.cust.password==this.repassword)
    {
    this.service.signUp(this.cust).subscribe((response:void) => {
      alert('User Registered, Signin now')
    });
    
    }
    else{
      alert('Password doesnot match')
    }
   }


  ngOnInit(): void {
  }
  
  
}