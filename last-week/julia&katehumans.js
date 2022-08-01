ages = [5, 2, 4, 1, 15, 8, 3];

function calcAverageHumanAge(ages) {
  humans = [];
  avgHuman = 0;
  for (let i = 0; i < ages.length; i++) {
    var newAge = 0;
    if (ages[i] <= 2) {
      newAge = 2 * ages[i];
    } else {
      newAge = 16 + 4 * ages[i];
    }

    if (newAge < 18) {
      continue;
    }

    humans.push(newAge);
  }
  console.log(humans);
  console.log(calcAvg(humans));
}

function calcAvg(arr) {
  var sum = 0;
  var avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return avg;
}

calcAverageHumanAge(ages);
