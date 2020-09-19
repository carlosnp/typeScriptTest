"use strict";
console.log("%c APP", ColorsLog2);
var anchor = document.querySelector('a');
if (anchor) {
    console.log('anchor', anchor);
}
var form = document.querySelector('#new-item-form');
console.log('item-form', form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("type: " + type.value + " \ntofrom: " + tofrom.value + " \ndetails: " + details.value + " \namount: " + amount.valueAsNumber);
    console.log(amount.valueAsNumber);
});
