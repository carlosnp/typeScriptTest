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
    console.log(`type: ${type.value} \ntofrom: ${tofrom.value} \ndetails: ${details.value} \namount: ${num}`);
    console.log(amount.valueAsNumber);
});
export {};
