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

const add = (a:number,b:number)=>{
  return a+b;
}
console.log(add(1,3));
