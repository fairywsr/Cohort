// //  Datatypes
const str = 'Faria';
console.log(typeof str);
const num = 56;
console.log(typeof num);
const bol = true;
console.log(typeof bol);
const numVar = null;   //-------datatype === object  
console.log(typeof numVar);
const Undef = undefined;
console.log(typeof Undef);
const symbolVar = Symbol();
console.log(symbolVar);
const BigInt = 9007199254740991;
console.log(typeof BigInt); // ------------datatype === Number
 

// //  Operations 
let a = 3;
let b = 2;

let sum = a + b;
let product = a - b;
let multiplication = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

// // Campersion 
let x = 3;
let y = 4;

console.log(x == y); // equal to
console.log(x === y);  // equal to & type also check
console.log(n !== y); // Not equal to
console.log(x > y);  // greater than
console.log(x < y); // less than
console.log( x >= y); // greater than & equal to
console.log( x <= y);  // less than & equal to

// //  math & date type
console.log(Math.max(3, 5, 6, 8, 223, 45, 58))
console.log(Math.min(23, 5, 4, 7, 23, 22, 14))
console.log(Math.random() * 6)

// //  String
let fname = 'Faria';
let lname = 'Waseer';
console.log(fname.concat(lname))
console.log(lname.length)
console.log(lname.toUpperCase)
console.log(lname.toLowerCase)
console.log(fname.indexOf('r'))
console.log(fname.slice(0, 4))
console.log(`hello Miss: ${fname}`) // template literals 

//  array

let fruits = ['Apple', 'banana', 'kivi', 'stoberry', 'lechi']
let index = fruits.indexOf('Apple')
console.log(index)

if(index !== -1){
   fruits.splice(index, 1)
}

console.log(fruits)


let spliceFruit =  fruits.splice(index, 1)
console.log(spliceFruit)


// loops on Array 
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}: ${fruit}`)
})


// -----------------Objects----------------
let chaiRecepi = {
       name: "Masala Chai",
       ingredients :{
        teaLeaves: "Asam Tea",
        milk: "full Cream",
        sugar: "Brown Sugar",
        spices: ["DaalChini", "Ginger"],
       },
       instruction: 'Boil water add teaLeaves milk sugar & spices'
}
// console.log(chaiRecepi.ingredients.spices[1])

let updatedchaiRecipies = {
    ...chaiRecepi,
    instruction: "Boil water add teaLeaves milk sugar & spices with some love"
}
// console.log(chaiRecepi.instruction)
// console.log(updatedchaiRecipies.instruction)

let {name, ingredients} = chaiRecepi // object deStructuring 
let [firstChai, secondChai] = chaiTypes  // Array deStructuring 


