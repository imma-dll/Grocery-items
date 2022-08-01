//Object Array
var dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "Jill"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//Calc recommended food
for (let i = 0; i < dogs.length; i++) {
  dogs[i].recommended = dogs[i].weight ** 0.75 * 28;
}

//LOOKING FOR SARAH
var loc = 0;
for (let i = 0; i < dogs.length; i++) {
  var currOwner = dogs[i].owners;
  for (let j = 0; j < currOwner.length; j++) {
    if (currOwner[j] == "Sarah") {
      loc = i;
      break;
    }
  }
}
check(dogs[loc]);
// console.log(loc);

function check(dog) {
  var weight = dog.weight;
  var recommended = dog.recommended;
  if (weight < recommended * 0.9) {
    console.log("TOO LITTLE");
  } else if (weight > recommended * 1.1) {
    console.log("TOO MUCh");
  } else {
    console.log("OKAY");
  }
}
