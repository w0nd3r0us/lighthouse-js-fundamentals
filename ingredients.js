var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
//while:
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
//for:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
//any:
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
