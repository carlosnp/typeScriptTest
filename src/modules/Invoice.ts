import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
    // client:string;
    // details:string;
    // amount:number;
    constructor(
      // Solo lectura
      readonly client:string,
      // Solo se puede modificar o imprimir dentro de la funcion
      private details:string,
      // La misma de siempre(puede hacer lo que sea)
      public amount:number
    ) 
    {}
    format(){
      return `${this.client} tiene ${this.amount}$ para ${this.details}`
    }
  }