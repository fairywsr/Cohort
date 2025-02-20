// Given a student's marks, determine their grade based on this scale:
// . 90+-4 A
// • 80-89-4 B
// • 70-79 -+ c
// • 60-69 D
// • Below 60 F
// Problem Statement:
// Write a function that retums the corresponding grade using if-else.

function Grade(marks){
     if(marks >= 90){
        return 'A'
     } else if( marks >= 80){
        return 'B'
     } else if(marks >= 70){
         return 'C'
     } else if( marks >= 60){
        return 'D'
     } else {
        return 'F'
     }
}

console.log(Grade)