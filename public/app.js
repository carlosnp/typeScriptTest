import { Invoice } from './modules/Invoice.js';
import { Payments } from './modules/Payments.js';
const ColorsLog2 = [
    "background: #d8d7d7",
    "color: blue",
    "display: block",
    "font-size:14px",
    "padding:10px",
].join(";");
console.log(`%c APP`, ColorsLog2);
const anchor = document.querySelector('a');
if (anchor) {
    console.log('anchor', anchor);
}
const form = document.querySelector('#new-item-form');
console.log('item-form', form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const IsNumber = (a) => {
    if (isNaN(a)) {
        return 0;
    }
    else {
        return a;
    }
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let num = IsNumber(amount.valueAsNumber);
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(tofrom.value, details.value, num);
    }
    else {
        doc = new Payments(tofrom.value, details.value, num);
    }
    console.log('docs', doc);
});
