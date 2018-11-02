function Order (pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.sauce = 1;
  this.cheese = 1;
  this.toppings = toppings * 1.5;
  this.price = 0
}

Order.prototype.finalCost = function (){
  if(this.pizzaSize == "small"){
    this.price += 5;
  } else if (this.pizzaSize == "medium"){
    this.price += 8;
  } else if (this.pizzaSize == "large") {
  this.price += 10
  }
  this.price += this.sauce;
  this.price += this.cheese;
  this.price += this.toppings;
  return this.price
}




var pizzaSize = "small"
var toppings = 3

var newPizza = new Order (pizzaSize, toppings);





newPizza.finalCost();

console.log(newPizza.price)
