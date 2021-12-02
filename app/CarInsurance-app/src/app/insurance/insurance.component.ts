import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { Car } from '../car/carModel';
import { insuranceModel } from '../insuranceModel';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  coverageType : string;
  duration : string;
  car : Car;
  carId : number;
  isQuote : boolean=false;
  ins : insuranceModel = new insuranceModel();

  constructor(private service : AppService, private router : Router) { }

  ngOnInit(): void {
    this.carId = Number(sessionStorage.getItem("carId"));
    this.getCarDetails(this.carId);
    this.isQuote=false;
  }

  getCarDetails(id : number){
    this.service.getCarDetails(id).subscribe((data : Car) => {
      this.car = data;
    });
  }
  quote:number;
  getQuote() {

    this.service.getQuote(this.car.regNo,this.coverageType).subscribe((data : number) => {
      this.isQuote=true;
      this.quote = data;
    });
  }

  buyInsurance(){
    let date = new Date(Date.now());
    this.ins.coverageType = this.coverageType;
    this.ins.dateIssued = date.toLocaleDateString();
    date.setFullYear(date.getFullYear()+Number(this.duration));
    this.ins.expiryDate = date.toLocaleDateString();
    this.ins.insuranceNo = Math.floor(56789 * 100)+this.carId;
    this.ins.duration = Number(this.duration);
    this.ins.amount = this.quote;
    this.service.buyInsurance(this.ins).subscribe((data : string) => {
      if(data === "Insurance added"){
        this.router.navigate(['/customer']);
        }else{
          alert('Insurance not yet expired');
        }
    });
  }


}
