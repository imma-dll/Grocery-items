var toppings = ["Cheese", "Ham", "Bits", "Tomatoes"];

function makePizza(toppings) {
  str = "A tasty pizza with";
  for (let i = 0; i < toppings.length; i++) {
    str += ` and ${toppings[i]}`;
  }
  console.log(str);
}

makePizza(toppings);
