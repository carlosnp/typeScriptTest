"use strict";
var ColorsLog2 = [
    "background: #d8d7d7",
    "color: blue",
    "display: block",
    "font-size:14px",
    "padding:10px",
].join(";");
console.log("%c Functions", ColorsLog2);
var greet;
greet = function () {
    console.log('hello word!');
};
var addPrint = function (a, b) {
    console.log('add void', a + b);
};
var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
addPrint(100, 30);
console.log('add', add(1, 3));
console.log('subtract', subtract(10, 3));
