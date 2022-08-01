dogsJuila = [3, 5, 2, 12, 7];
dogsKate = [4, 1, 15, 8, 3];
// console.log(dogsJuila);
// console.log(dogsKate);
totalArray = [];

function checkDogs(dogsJuila, dogsKate) {
  copyOfJulia = [];
  for (let i = 0; i < dogsJuila.length; i++) {
    if (i == 1 || i == 2) {
      copyOfJulia.push(dogsJuila[i]);
    }
  }
  //   console.log(copyOfJulia);
  totalArray = copyOfJulia.concat(dogsKate);
  //   console.log(totalArray);

  for (let i = 0; i < totalArray.length; i++) {
    console.log(totalArray[i]);
    if (totalArray[i] < 3) {
      console.log(`Dog number ${i + 1} is still a puppy\n`);
    } else {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${totalArray[i]} years old`
      );
    }
  }
}

checkDogs(dogsJuila, dogsKate);
