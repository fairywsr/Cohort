// Problem Statement
// You are working on a web application where objects contain nested properties. JavaScript's
// built-in assignment (-) creates a shallow copy, meaning changes to the copied object will also
// affect the original. To prevent this, you need to create a deep copy of an object, ensuring that
// nested objects are also cloned properly.
// Challenge
// Write a function that takes an object and returns a deep copy of it.
// Constraints
// • The input should be a valid object.
// • The function should work with nested objects and arrays inside objects.
// • The function should not modify the original object

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
    return obj;
}
    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
    clone[key] = deepClone(obj[keyl]);
    return clone;
    }
}