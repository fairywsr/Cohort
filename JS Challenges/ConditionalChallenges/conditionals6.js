// You need to determine what action to take based on traffic light colors:
// • "Red" -4 Stop
// • "Yellow" -+ Slow Down
// • "Green" -+ Go
// • "Blue" —+ Invalid Color
// Problem Statement:
// Write a function that uses switch-case to return the correct action.

function TrafficLightSignal(color){
    switch(color){
       case 'red':
        return 'stop'
       case 'yellow':
        return 'slow Down'
       case 'green':
        return 'go'
       default:
            return 'invalid Color'
    }
}

console.log(TrafficLightSignal())