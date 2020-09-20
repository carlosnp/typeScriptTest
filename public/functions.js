"use strict";
const ColorsLog2 = [
    "background: #d8d7d7",
    "color: blue",
    "display: block",
    "font-size:14px",
    "padding:10px",
].join(";");
console.log(`%c Functions`, ColorsLog2);
let greet;
greet = () => {
    console.log('hello word!');
};
const addPrint = (a, b) => {
    console.log('add void', a + b);
};
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
addPrint(100, 30);
console.log('add', add(1, 3));
console.log('subtract', subtract(10, 3));
const logDetail = (uid, item) => {
    console.log(`${item} tiene un uid de ${uid}`);
};
const greetAlias = (user) => {
    console.log(`${user.name} tiene un uid de ${user.uid}`);
};
logDetail(3, 'hola');
greetAlias({ name: 'Anita', uid: 36 });
// Signatures
let calc;
calc = (x, y, action) => {
    if (action == 'add') {
        return x + y;
    }
    else {
        return x - y;
    }
};
console.log('calc', calc(1, 2, 'add'));
console.log('calc', calc(10, 2, ''));
