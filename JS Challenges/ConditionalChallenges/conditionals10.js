// Create a basic calculator that performs +, -, *, / based on user input.
// Problem Statement:
// Write a function that uses switch-case to perform arithmetic operations. Handle the edge case
// of "Cannot divide by zero".

function calculator(numl, num2, operator) {
    switch (operator) {
    case "+":
    return numl + num2;
    case "-":
    return numl - num2;
    case "*":
    return numl * num2;
    case "/":
    return num2 !== O ? numl / num2 : "Cannot divide by zero";
    default:
    return "Invalid Operator";}
}
console.log(calculator)
