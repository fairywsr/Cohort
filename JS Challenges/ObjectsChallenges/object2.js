// Problem Statement
// You are developing a car rental service. Each car has a brand and model, but some cars don't
// have a color assigned yet. You need to add a color property dynamically when a customer
// selects a car.
// Challenge
// Write a function that takes a car object and a color string, then adds the color property to the
// object.
// Constraints
// • car should be a valid object with at least brand and model properties.
// • color should be a non-empty string, otherwise return "Invalid color".


function carColor(car, color){
   if(typeof car !== "object" || typeof color !== "string" || color.length === 0){
    return "invalid color"
   }
   car.color = color;
   return car;
}