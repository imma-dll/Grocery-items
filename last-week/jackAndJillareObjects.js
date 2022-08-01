function Person(name, mass, height) {
  this.name = name;
  this.mass = mass;
  this.height = height;
  this.calcbmi = function () {
    var bmi = 0;
    bmi = this.mass / this.height ** 2;
    return Math.trunc(bmi);
  };
  this.bmi = this.calcbmi();
}

let jack = new Person("Jack Miller", 78, 1.69);
let jill = new Person("Jill Smith", 92, 1.95);

// console.log(jack);

// console.log(jack.bmi);
// console.log(jill.bmi);

if (jack.bmi > jill.bmi) {
  console.log(
    `${jack.name}'s bmi (${jack.bmi}) is higher than ${jill.name}'s bmi (${jill.bmi})`
  );
} else if (jill.bmi > jack.bmi) {
  console.log(
    `${jill.name}'s bmi (${jill.bmi}) is higher than ${jack.name}'s bmi (${jill.bmi})`
  );
} else {
  console.log("Both have same BMI");
}
