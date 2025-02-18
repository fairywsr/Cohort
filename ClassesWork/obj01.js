// primitive variables in stack
let str = 'Hello'
let str2 = str;  // in case of string if we can made change on str2 that change may not reflect on str 

console.log(str);
console.log(str2);

str2 = 'Faria';
console.log(str2);
console.log(str)



//  Objects 
// non-primitive variables in heap but references in stack
const obj1 ={
    name: 'faria',
    age: 23,
    fColor: 'pink'
}
const obj2 = obj1;  // in case of objects if we can made change on obj2 that change reflect on obj1 
obj2.age = 45;
console.log(obj1);
console.log(obj2)

