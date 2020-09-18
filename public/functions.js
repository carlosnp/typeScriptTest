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
var logDetail = function (uid, item) {
    console.log(item + " tiene un uid de " + uid);
};
var greetAlias = function (user) {
    console.log(user.name + " tiene un uid de " + user.uid);
};
logDetail(3, 'hola');
greetAlias({ name: 'Anita', uid: 36 });
// Signatures
var calc;
calc = function (x, y, action) {
    if (action == 'add') {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log('calc', calc(1, 2, 'add'));
console.log('calc', calc(10, 2, ''));
//# sourceMappingURL=functions.js.map