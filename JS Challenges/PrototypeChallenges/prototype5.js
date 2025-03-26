// Problem statement
// Create a Shopping Cart system where items can be added with a price. Implement a method
// getTota1Price( ) that calculates the total price of all items in the cart.
// Challenge
// • Implement a constructor function Shoppingcart that initializes an empty items array.
// • Attach addltem(price) to the prototype to add items.
// • Attach getTota1Price() to calculate the total price of items.

function ShoppingCart(){
    this.items = []
}

ShoppingCart.prototype.addItem = function(price){
    this.items.push(price)
}

ShoppingCart.prototype.getTotalPrice = function(total){
    this.items.reduce( (item, price) => item + price, 0)
}