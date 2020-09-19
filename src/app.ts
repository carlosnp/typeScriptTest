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

