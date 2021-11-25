import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../service/app.service';
import { Customer } from './custModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[];
  constructor(private service:AppService,private router : Router) { }

  ngOnInit(): void {
    this.customers=this.service.listCust();
  }
  
  carpage()
  {
    this.router.navigate(['car']);
  }
}
