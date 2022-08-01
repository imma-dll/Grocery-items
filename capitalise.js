arr = ["a", "b", "c", "d"];

function capital(arr) {
  newArr = [];

  newArr = arr.map(myFunc);
  console.log(newArr);
}

function myFunc(str) {
  return str.toUpperCase();
}

capital(arr);

// str = "something in the way";
// console.log(str.toUpperCase());
