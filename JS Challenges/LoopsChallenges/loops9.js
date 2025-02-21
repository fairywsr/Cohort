// You've been tasked with designing the perfect shiny diamond rug cursh's room. They love
// stars, and you've decided to make a sparkling pattern using them. You need to help them
// create this rug, where the stars are arranged in the shape of a diamond!
// Problem Statement:
// Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars.
// The number n represents the size of the diamond, with the middle of the diamond having 2n
// - 1 stars.

function shinyDiamondRug(n) {
  let diamond = '';
  
  // Upper part of the diamond
  for (let i = 1; i <= n; i++) {
    // Add spaces
    for (let j = 1; j <= n - i; j++) {
      diamond += ' ';
    }
    // Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += '*';
    }
    diamond += '\n';
  }

  // Lower part of the diamond
  for (let i = n - 1; i >= 1; i--) {
    // Add spaces
    for (let j = 1; j <= n - i; j++) {
      diamond += ' ';
    }
    // Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += '*';
    }
    diamond += '\n';
  }

  return diamond;
}

// Example usage:
console.log(shinyDiamondRug(5));
