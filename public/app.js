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
// Clases
var Invoice = /** @class */ (function () {
    // client:string;
    // details:string;
    // amount:number;
    function Invoice(
    // Solo lectura
    client, 
    // Solo se puede modificar o imprimir dentro de la funcion
    details, 
    // La misma de siempre(puede hacer lo que sea)
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " tiene " + this.amount + "$ para " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Devante Farrell', 'Non aut dolorem libero veritatis harum quo tempore aut.', 250);
var invTwo = new Invoice('Kacey Hagenes I', 'Dolor odio ut suscipit qui vel.', 350);
// console.log(invOne);
// console.log(invTwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client ='Kallie Dibbert'
// console.log(invOne);
// console.log('invoices',invoices);
invoices.forEach(function (element) {
    console.log(element.client + " \n" + element.amount + " \n " + element.format());
});
