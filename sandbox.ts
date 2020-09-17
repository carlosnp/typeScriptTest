/*
* No se puede cambiar el tipo de variable
*/

let character = 'mario';
let age = 36;
let isSome = true;

console.log(character, age, isSome);

/* 
 const inputs = document.querySelectorAll('input');
 inputs.forEach(input => {
   console.log(input);
 });
 */ 

 const circ = (diameter:number)=>{
   return diameter * Math.PI;
 }
 console.log(`Circ= ${circ(3)}`);