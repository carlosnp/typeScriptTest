const ColorsLog1 = [
  "background: #d8d7d7",
  "color: blue",
  "display: block",
  "text-align: center",
  "font-size:14px",
  "padding:10px",
].join(";");

console.log(`%c Types of VAR`,ColorsLog1);
/*
* 1) No se puede cambiar el tipo de variable
* 2) Una vez definida un objeto no se le pueden agregar propiedades
* 3) No se puede cambiar la estructura de un objeto
*/

// =======================================================
// Characters, number and boolean
// let character = 'mario';
// let age = 36;
// let isSome = true;
// console.log(character, age, isSome);

/* 
 const inputs = document.querySelectorAll('input');
 inputs.forEach(input => {
   console.log(input);
 });
 */ 

//  const circ = (diameter:number)=>{
//    return diameter * Math.PI;
//  }
//  console.log(`Circ= ${circ(3)}`);

// =======================================================
// Arrays
// let names =['Lawson','Cedrick','Eldora','Dewayne']
// names.push('Destini');

// let mixed = ['Reilly','Karianne','Candido',1,2,3];
// mixed.push(10);
// mixed.push('Kacey')

// console.log('names', names);
// console.log('mixed', mixed);

// Objects

// let obj ={
//   name:'Rosella',
//   color:'maine_buckinghamshire.blb',
//   age:36
// }
// obj.name = 'Vella';

// console.log('obj', obj);

// =======================================================
// Explicit Types

let char:string;
let age:number;
let isLogin:boolean;

char='Meghan Rodriguez';
age=654780865;
isLogin=false;

// Array of string
let objS: string[] = [] 
/*
 * Se iguala a [] para que por defecto sea un array vacio 
 * y se pueda pushear elementos en el array
 */ 
objS.push('MacGyver')
console.log('obj', objS);

// Many types
let mixed: (string|number|boolean)[]=[];
mixed.push('Malachi Collier Sr.')
mixed.push(3)
mixed.push(true)
console.log('mixed', mixed);

let uid:string|number;
uid = 123;
uid = 'Regional Web Producer' 
console.log('uid', uid);

// Object
let obj1:object;
obj1={name:'Ernser', age:9}
console.log('obj1', obj1);

let obj2:{
  name:string,
  age:number,
  color:string,
}

obj2={name:'Gillian Donnelly', age:93,color:'Research'}
console.log('obj2', obj2);

// any Type
let num:any;
num = 36;
console.log('num', num);
num='Associate'
console.log('num', num);

let mixedAny:any[]=[];
mixedAny.push('Zulauf')
mixedAny.push('429-968-6467')
mixedAny.push(3)
mixedAny.push(['Tom Bednar','Klein'])
mixedAny.push({name:'Lela Senger PhD'})
console.log('mixed all',mixedAny);

let objAny:{name:any,age:any}
objAny = {name:true, age:{name:'382-187-5004'}}
console.log('any obj', objAny);
