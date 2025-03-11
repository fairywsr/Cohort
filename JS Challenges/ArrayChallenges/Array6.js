// You have a list of food items, but you want to keep only the healthy ones. Remove all items that
// contain "Burgern.
// Problem statement: Create a function that removes unhealthy food items (those containing
// "Burger") and returns the updated list.

function filterHealthy(foodList) {
     return foodList.filter( (item) => item !== "Burger")
}