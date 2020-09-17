/*
* 1) No se puede cambiar el tipo de variable
* 2) Una vez definida un objeto no se le pueden agregar propiedades
* 3) No se puede cambiar la estructura de un objeto
*/
// Characters, number and boolean
// let character = 'mario';
// let age = 36;
// let isSome = true;
// console.log(character, age, isSome);
// Arrays
var names = ['Lawson', 'Cedrick', 'Eldora', 'Dewayne'];
names.push('Destini');
var mixed = ['Reilly', 'Karianne', 'Candido', 1, 2, 3];
mixed.push(10);
mixed.push('Kacey');
console.log('names', names);
console.log('mixed', mixed);
// Objects
var obj = {
    name: 'Rosella',
    color: 'maine_buckinghamshire.blb',
    age: 36
};
obj.name = 'Vella';
console.log('obj', obj);
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
