function greaterThan(num) {
  var another = {
    original: num,
    new: 10,
  };
  return test(another);
}

function test(another) {
  if (another.new > another.original) {
    return "TRUE";
  } else {
    return "FALSE";
  }
}

console.log(greaterThan(10));
