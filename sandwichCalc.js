function sandwich(bread, cheese) {
  var breadPair = Math.floor(bread / 2);
  if (breadPair > cheese) {
    return cheese;
  } else {
    return breadPair;
  }
}

console.log(sandwich(20, 5));
