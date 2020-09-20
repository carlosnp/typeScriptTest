import { Invoice } from './modules/Invoice.js'
import { Payments } from './modules/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './modules/ListTemplate.js';

const ColorsLog2 = [
  "background: #d8d7d7",
  "color: blue",
  "display: block",
  "font-size:14px",
  "padding:10px",
].join(";");

console.log(`%c APP`,ColorsLog2);

// const anchor = document.querySelector('a');
// if (anchor) {
//   console.log('anchor', anchor);
// }

const form = document.querySelector('#new-item-form') as HTMLFontElement;
// console.log('item-form', form.children);

const type    = document.querySelector('#type') as HTMLSelectElement;
const tofrom  = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount  = document.querySelector('#amount') as HTMLInputElement;
// instancia lista
const ul      = document.querySelector('ul')!;
const list    = new ListTemplate(ul);


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
  let values:[string,string, number]
  values = [
    tofrom.value,
    details.value,
    num
  ];
  if (type.value == 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payments(...values);
  }
  list.render(doc, type.value, 'end');

})
