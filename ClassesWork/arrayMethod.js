//  Array.at()-----Take an index value as a parameter and return value of that index 

let MyArr = [2, 4, 6, 7, 9, 11, 13]
console.log(MyArr.at(5))  // Output 11
console.log(MyArr.at(-3))  // Output 9

// Array.concat()-----This method mege two arrays and more than two arrays and returns a new array
let arrOne = [2, 4, 6, 8]
let arrTwo = [1, 3, 5, 7, 9]
console.log(arrOne.concat(arrTwo)); // Output [2, 4, 6, 8, 1, 3, 5, 7, 9]


// Array.filter()-----Gives the updated array that satisfied the condition 
let age = [23, 56, 34, 13, 7, 24, 67]
let upAge = age.filter((age) => age >= 18)
console.log(upAge) // output [ 23, 56, 34, 24, 67 ]


// Array.find()----- Return the first value from the array that satisfied condition 
let fruit = ['apple', 'banana', 'kivi', 'orange']
let upFruit = fruit.find((e) => e.length = 'kivi')
console.log(upFruit); // output apple

// Array.findindex()-----The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
let fruitA = ['apple', 'banana', 'kivi', 'orange']
let fruitA1 = fruitA.findIndex( (e) => e.length >= 6 )
console.log(fruitA1); // output 1

// Array.findLast()-----The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
let fruitB = ['apple', 'banana', 'kivi', 'orange']
let fruitB1 = fruitB.findLast( (e) => e.length >= 6 )
console.log(fruitB1); // output orange

