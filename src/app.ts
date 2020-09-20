import { Invoice } from './modules/Invoice.js'
import { Payments } from './modules/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

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

const IsNumber = (a:number):number => {
  if(isNaN(a)){
    return 0;
  } else {
    return a;
  }
};

form.addEventListener('submit',(e:Event)=>{
  e.preventDefault();
  let num = IsNumber(amount.valueAsNumber);
  let doc: HasFormatter;
  if (type.value == 'invoice') {
    doc = new Invoice(tofrom.value, details.value, num);
  } else {
    doc = new Payments(tofrom.value, details.value, num);
  }
  console.log('docs', doc);
  
})