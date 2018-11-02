//Back End Code
function Order (pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  // this.sauce = 1;
  // this.cheese = 1;
  this.toppings = (toppings.length) * 2;
  this.price = 0
}

Order.prototype.finalCost = function (){
  if(this.pizzaSize == "small"){
    this.price += 5;
  } else if (this.pizzaSize == "medium"){
    this.price += 8;
  } else if (this.pizzaSize == "large") {
  this.price += 10
} else {
  alert("Please Pick a Pizza Size!")
  document.return()
}
  // this.price += this.sauce;
  // this.price += this.cheese;
  this.price += this.toppings;
  return this.price
}

//Front End Code

$(document).ready(function(event){
  $("#placeOrder").click(function(){
    $(".cost").show();

    var pizzaSize = $("input:radio[name=flavor]:checked").val();
    var toppings = [];
      $("input:checkbox[name=toppings]:checked").each(function(){
        if ($(this).is(':checked')) {
           var checked = ($(this).val());
           toppings.push(checked);
         }
      });

    var newPizza = new Order (pizzaSize, toppings);
    var cost = newPizza.finalCost();

    $("#cost").text(" $" + cost +".00");
  });
});
