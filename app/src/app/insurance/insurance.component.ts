import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../service.insr/app.service';
import { InsrModel } from '../service.insr/InsrModel';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
insr! : InsrModel;
  constructor(private router : Router , private service:AppService) { }

  ngOnInit(): void {
  }


getQ()
{
  this.service.saveInsr(this.insr)
  this.router.navigate(['get-quote'])
}

}
