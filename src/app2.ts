console.log(`%c APP2`,ColorsLog2);

// Clases
console.log(`%c Clases & Modulo`,ColorsLog2);
import { Invoice } from './modules/Invoice.js'
const invOne = new Invoice('Devante Farrell','Non aut dolorem libero veritatis harum quo tempore aut.',250)
const invTwo = new Invoice('Kacey Hagenes I','Dolor odio ut suscipit qui vel.',350)

// console.log(invOne);
// console.log(invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// invOne.client ='Kallie Dibbert'
// console.log(invOne);

// console.log('invoices',invoices);

invoices.forEach(element => {
  console.log(`${element.client} \n${element.amount} \n ${element.format()}`)
});

/**
 * Interfase 
 */ 
console.log(`%c Interfase`,ColorsLog2);
interface IsPerson {
  name:string;
  age:number;
  speak(a:string):void;
  spend(a:number):number;
}

const me:IsPerson = {
  name:'Miss Rae Daniel', 
  age:13,
  speak(text:string):void{
    console.log('text', text)
  },
  spend(amount:number): number {
    console.log('Send', amount)
    return amount;
  }
}
console.log('me',me);

const greetPerson = (person:IsPerson)=>{
  console.log('hola ', person.name);
}

greetPerson(me);

/**
 * Clases e interfaces 
 */
import { Payments } from './modules/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Mrs. Levi Schinner','Autem et quia aspernatur.',50);
docTwo = new Payments('Loma Welch','Sapiente harum enim harum culpa ipsam.',50);

let docs: HasFormatter[]=[];

docs.push(docOne);
docs.push(docTwo);

console.log('docs', docs);
