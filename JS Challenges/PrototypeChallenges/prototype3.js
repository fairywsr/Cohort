// You need to create a Counter constructor function that initializes a count property to e. The
// counter should have two prototype methods:
// • increment() increases the count by 1.
// • decrement() decreases the count by 1.
// Challenge
// • Implement a constructor function Counter that initializes count to e
// • Attach increment() and decrement() methods to the prototype.

function Counter(){
    this.count = 0;
}

Counter.prototype.increment = function(){
    this.count += 1;
}

Counter.prototype.decrement = function(){
    this.count += 1;
}