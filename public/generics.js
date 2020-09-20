"use strict";
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({
    name: 'Karlie Spinka',
    age: 748
});
console.log(docOne);
console.log(docOne.uid);
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTION"] = 3] = "DIRECTION";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 62397,
    resourseName: 'Wayne Goldner',
    ResourceType: ResourceType.BOOK,
    data: {
        name: 'Mr. Letitia Lockman',
        job: 'Internal Implementation Representative',
        age: 30356,
        uid: 'a9e7e3cb-48df-4608-afce-3851442cc692'
    }
};
console.log('docThree', docThree);
const docFour = {
    uid: 62398,
    resourseName: 'Wayne Goldner',
    ResourceType: ResourceType.FILM,
    data: [
        '375cea32-900f-4450-aeec-4fc807b6465a',
        'image',
        'dolores-sit-qui'
    ]
};
console.log('docFour', docFour);
// Tuplas
let arr = ['Home', 95552, true];
console.log('arr before', arr);
arr[0] = false;
arr[1] = 'eos';
arr[2] = 11760;
console.log('arr after', arr);
// Las tuplas no permiten cambiar el tipo de elemento de una posicion
let tupla = ['solid state', 58698, false];
console.log('tupla', tupla);
