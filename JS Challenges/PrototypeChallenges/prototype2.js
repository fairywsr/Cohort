// Problem statement
// You are designing a simple robot system. Each robot has a name and a batteryLeve1. The
// robot should have a method charge( ) that increases the battery level by 2e, but it cannot
// exceed lee.
// Challenge
// • Implement a constructor function Robot that initializes name and batteryLeve1.
// • Attach a method charge() to its prototype that increases batteryLeve1 by 2e,
// ensuring it does not go above lee.

function Robot(name, batterLevel){
    this.name = name;
    this.batterLevel = batterLevel
}

Robot.prototype.charge = function(){
    this.batterLevel = Math.min(this.batterLevel + 20, 100);
}