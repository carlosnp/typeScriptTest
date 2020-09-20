/*
* Siempre se importa archivos js
*/ 
import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payments implements HasFormatter {
  constructor(
    readonly recipient:string,
    private details:string,
    public amount:number
  ) 
  {}
  format(){
    return `${this.recipient} tenia un monto de  ${this.amount}$ para ${this.details}`
  }
}