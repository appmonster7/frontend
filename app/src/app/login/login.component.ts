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
  
   
  constructor(private router : Router,private service:AppService) { 
    this.auth = new LoginModel();
    this.cust = new Customer();
  
  }
  loggedIn() {
    let user = this.service.validate(this.auth);
    if(user != null) {
      localStorage.setItem("user", JSON.stringify(user));
      this.service.saveCust(this.cust);
      this.router.navigate(['customer']);
    } else
      alert("Invalid User ID/Password");
  }
  enter2()
  {
    this.router.navigate(['home']);
  }

  enter()
  {
    if(this.cust.password==this.cust.repassword)
    {
    this.service.saveCust(this.cust);
    this.router.navigate(['/customer']);
    }
    else{
      alert('Password doesnot match')
    }

    
  }


  ngOnInit(): void {
  }

  
}

