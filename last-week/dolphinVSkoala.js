var dolphin = [96, 108, 89];
var koala = [88, 91, 110];

var avg_dolphin = 0;
var avg_koala = 0;

for (let i = 0; i < dolphin.length; i++) {
  avg_dolphin += dolphin[i];
  // console.log(dolphin[i]);
}
avg_dolphin = Math.trunc(avg_dolphin / 3);
// console.log(avg_dolphin);

for (let i = 0; i < koala.length; i++) {
  avg_koala += koala[i];
  // console.log(koala[i]);
}
avg_koala = Math.trunc(avg_koala / 3);

if (avg_dolphin > avg_koala && avg_dolphin >= 100) {
  console.log("Dolphin wins!");
} else if (avg_dolphin < avg_koala && avg_koala >= 100) {
  console.log("Koala wins!");
} else if (
  avg_dolphin == avg_koala &&
  (avg_dolphin >= 100 || avg_koala >= 100)
) {
  console.log("DRAW!");
} else {
  console.log("NOBODY WINS");
}
