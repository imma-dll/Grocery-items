var dolphin = [44, 23, 71];
var koala = [65, 54, 49];

var avg_dolphin = 0;
var avg_koala = 0;

// for (let i = 0; i < dolphin.length; i++) {
//   avg_dolphin += dolphin[i];
// }

// for (let i = 0; i < koala.length; i++) {
//   avg_koala += koala[i];
// }

var calcAvg = (arr) => {
  var avg_arr = 0;
  for (let i = 0; i < arr.length; i++) {
    avg_arr += arr[i];
  }
  return Math.trunc(avg_arr / 3);
};

avg_dolphin = calcAvg(dolphin);
avg_koala = calcAvg(koala);

function checkWinner(avg_dolphin, avg_koala) {
  if (avg_dolphin >= 2 * avg_koala) {
    console.log(`Dolphin Wins ! (${avg_dolphin} vs ${avg_koala})`);
  } else if (avg_koala >= 2 * avg_dolphin) {
    console.log(`Koala Wins! (${avg_koala} vs ${avg_dolphin})`);
  } else {
    console.log("Nobody Wins!");
  }
}

// console.log(avg_dolphin);
// console.log(calcAvg(avg_dolphin));
