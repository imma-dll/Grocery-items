var user = prompt(`Choose one from:
    1: rock
    2: paper
    3: scissor
`);

options = ["rock", "paper", "scissor"];
var bot = 0;
var temp = Math.floor(Math.random() * 3 + 1) - 1;
// console.log(temp);

bot = options[temp];
console.log(user);
console.log(bot);

if (user != bot) {
  if (user == "rock" && bot == "scissor") {
    console.log("YOU WIN!");
  } else if (user == "scissor" && bot == "paper") {
    console.log("YOU WIN!");
  } else if (user == "paper" && bot == "rock") {
    console.log("YOU WIN!");
  } else {
    console.log("YOU SUCK");
  }
} else {
  console.log("PLAY AGAIN");
}
// console.log(bot);
