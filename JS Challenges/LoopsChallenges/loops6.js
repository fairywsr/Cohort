// You're planning a week's schedule and need to count the days you are working. You have an
// array where each element represents a day of the week. How can you calculate how many days
// you are working?
// Problem Statement:
// Create a function that takes an array of days (e.g., [ "Monday" ,
// "Friday"]) and
// "Tuesday" ,
// returns the number of days you're working. "Saturday" and "Sunday" are not working days.

// function workingDays(days) {
//     // your code here
//       let count = 0;
//       for(let i = 0; i < days.length; i++){
//         if(days[i] !== 'saturday' && days[i] !== 'Sunday'){
//           count++
//         }
//       }
//       return count;
//   }



// function workingDays(days) {
//     // your code here
//     let workingDays = 0;
//     for(let i = 0; i < days.length; i++){
//       days[i] += workingDays;
//       workingDays++;
//     }
//     return workingDays;
// }