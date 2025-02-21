// You're shopping for groceries and want to know the total cost of all the items in your cart. You
// have an array of item prices.
// Problem Statement:
// Create a function that takes an array of item prices and returns the total cost

function totalPrice(prices) {
    let total = 0;
  for(let i = 0; i < prices.length; i++){
    total += prices[i];
  }
  return total;
}