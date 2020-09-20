console.log(`%c APP`,ColorsLog2);

const anchor = document.querySelector('a');
if (anchor) {
  console.log('anchor', anchor);
}

const form = document.querySelector('#new-item-form') as HTMLFontElement;
console.log('item-form', form.children);

const type    = document.querySelector('#type') as HTMLSelectElement;
const tofrom  = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount  = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
  e.preventDefault();
  console.log(`type: ${type.value} \ntofrom: ${tofrom.value} \ndetails: ${details.value} \namount: ${amount.valueAsNumber}`);  
  console.log(amount.valueAsNumber);
  
})

// Clases
import { Invoice } from './modules/invoice.js'
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