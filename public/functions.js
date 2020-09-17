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
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 3));
