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

interface Resourse <T> {
  uid:number,
  resourseName:string,
  data:T,
}

const docThree: Resourse<object>={
  uid:62397,
  resourseName: 'Wayne Goldner',
  data:{
    name:'Mr. Letitia Lockman',
    job:'Internal Implementation Representative',
    age:30356,
    uid:'a9e7e3cb-48df-4608-afce-3851442cc692'
  }
}
console.log('docThree',docThree);
const docFour: Resourse<string[]>={
  uid:62397,
  resourseName: 'Wayne Goldner',
  data:[
    '375cea32-900f-4450-aeec-4fc807b6465a',
    'image',
    'dolores-sit-qui'
  ]
}
console.log('docFour', docFour);
