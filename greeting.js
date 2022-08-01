var greeting = "Hello";
var name = "World";
var newStr = "";
alert(`${greeting} ${name}`);

total = greeting + " " + name;

function reverseCoder(str) {
  newStr = "";
  //   console.log(str.length);
  for (i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
    // console.log(newStr);
  }
  console.log(newStr);
}

for (let i = 0; i < total.length; i++) {
  //   console.log(total[i]);
  if (total[i] == "l") {
    newStr += "1";
  } else if (total[i] == "o") {
    newStr += "o";
  } else {
    newStr += total[i];
  }
  //   console.log(newStr);
}

// console.log(reverseCoder(newStr));
reverseCoder(newStr);
