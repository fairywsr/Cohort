// lexical scoping & closure 

let count = 0;

function increment(){
    count++;
    return count;
}

console.log(increment()) // 1
console.log(increment()) // 2
console.log(increment()) // 3
console.log(increment()) // 4

count = 500;

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

function increment(){
    let count = 0;
    return function(){
        count++
    }
}