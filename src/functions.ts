const ColorsLog2 = [
  "background: #d8d7d7",
  "color: blue",
  "display: block",
  "font-size:14px",
  "padding:10px",
].join(";");

console.log(`%c Functions`,ColorsLog2);

let greet:Function;

greet =()=>{
  console.log('hello word!');
}

const addPrint = (a:number,b:number):void=>{
  console.log('add void',a+b);
}

const add = (a:number,b:number):number=>{
  return a+b;
}
const subtract = (a:number,b:number):number => {
  return a - b;
};

addPrint(100,30)
console.log('add',add(1, 3));
console.log('subtract',subtract(10, 3));
