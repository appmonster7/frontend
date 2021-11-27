import { Component, OnInit } from '@angular/core';
import { CarModel } from '../CarModel';
import { Customer } from '../CustModel';
import { AppService } from '../service.car/app.service';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {
car : CarModel[] = [];
cust : Customer[]=[];
  constructor(private service:AppService) { }

  ngOnInit(): void {
    
  }

}
