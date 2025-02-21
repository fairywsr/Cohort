// You're on a camping trip with your friends, and you all want to set up a starry mountain as a
// symbol of your adventure. To make things more fun, you decide to use stars to draw an
// inverted mountain pattem. The challenge: print it so everyone can admire the majestic
// mountain shape!
// Problem Statement:
// Create a function invertedMountain(n) that prints an inverted mountain made of stars.
// The number n represents the number of stars at the top, and the pattern should reduce by
// one star each line until only one star is left at the bottom.
// For example:
// • For n
// = 4, the output will look like:

function invertedMountain(n) {
    let mountain = '';
  for (let i = n; i >= 1; i--){
    for(let j = 1; j <= i; j++){
      mountain += '*';
    }
    mountain += '\n';
  }
  return mountain;
}