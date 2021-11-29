import { insuranceModel } from "./insuranceModel";



export class Car{
    public carId! : number;
    public regNo! : string;
    public modelName! : string;
    public manufctYear! : number;
    public purchYear! : number;
    public price! : number;
    public insurance! : insuranceModel;
}