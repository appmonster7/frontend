import { Car } from "./car/carModel";

export class Customer
{
   public customerId! : string;
   public name! : string;
   public phoneNumber! : number;
   public city! : string;
   public email! : string;
   public password! : string;
   public car! : Car[];
}