// Problem statement
// Create an Employee constructor that initializes name, position, and salary. Implement:
// • applyBonus (percent): Increases the salary by the given percentage.
// Challenge
// • Implement Employee constructor with name, position, and salary
// • Attach applyBonus(percent) to the prototype to increase salary.

function Employ(name, position, salary){
     this.name = name;
     this.position = position;
     this.salay = salary
}

Employ.prototype.applyBonus = function(percent){
      this.salary = Math.round(this.salary + this.salary *(parent / 100))
}