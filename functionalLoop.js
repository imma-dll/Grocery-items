products = ["Cats", "Cheese", "Spanners", "Lemons", "Candyfloss"];

function displayArrary(products) {
  arr = products;
  if (arr.length == 1) {
    return arr;
  }
  console.log(arr[0]);
  arr.shift();
  displayArrary(arr);
}

displayArrary(products);
