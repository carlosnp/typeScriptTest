// Generics
const addUID = <T extends object>(obj:T) =>{
  let uid = Math.floor(Math.random()*100);
  return {...obj,uid};
}

let docOne = addUID({
  name:'Karlie Spinka',
  age:748
})
console.log(docOne);
console.log(docOne.uid);

// Enums
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTION, PERSON}

interface Resourse <T> {
  uid:number,
  resourseName:string,
  ResourceType:ResourceType,
  data:T,
}

const docThree: Resourse<object>={
  uid:62397,
  resourseName: 'Wayne Goldner',
  ResourceType: ResourceType.BOOK,
  data:{
    name:'Mr. Letitia Lockman',
    job:'Internal Implementation Representative',
    age:30356,
    uid:'a9e7e3cb-48df-4608-afce-3851442cc692'
  }
}
console.log('docThree',docThree);
const docFour: Resourse<string[]>={
  uid:62398,
  resourseName: 'Wayne Goldner',
  ResourceType: ResourceType.FILM,
  data:[
    '375cea32-900f-4450-aeec-4fc807b6465a',
    'image',
    'dolores-sit-qui'
  ]
}
console.log('docFour', docFour);

// Tuplas
let arr = ['Home',95552,true];
console.log('arr before', arr);

arr[0]= false;
arr[1]= 'eos';
arr[2]=11760;
console.log('arr after', arr);

// Las tuplas no permiten cambiar el tipo de elemento de una posicion
let tupla:[string,number,boolean]=['solid state',58698, false];
console.log('tupla', tupla);

