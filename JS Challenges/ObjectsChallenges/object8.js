// Problem Statement
// In your web application, some objects contain unnecessary properties. To optimize
// performance, you need to remove all properties that have null or undefined values.
// Challenge
// Write a function that removes all properties with null or undefined values from an object.
// Constraints
// • The input should be a valid object.
// • If the object has no valid properties left, return O.

function cleanObject(obj){
    let clearedObj = {};

    for (let key in object) {
      if(obj[key] !== null && obj[key] !== undefined){
        clearedObj[key] = obj[key];
      }
    }
    return clearedObj;
}