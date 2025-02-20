// Given a temperature and a scale or "F"), convert it to the other scale.
// Problem Statement:
// Write a function that uses switch-case to convert temperature

function convertTemperature(value, scale) {
    switch (scale) {
    case "C":
    return (value * 9) / 5 + 32 + "OF";
    case "F":
    return ((value - 32) * 5)/ 9+ "C" ;
    default:
    return "Invalid Scale";
    }
}
