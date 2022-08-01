//BUTTON-VARIABLE
var btn = document.getElementById("poll-button");
// console.log(pollButton);

// OBJECT DECLARATION
var poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};

//FUNCTION TO PROMPT USER
function askUser() {
  var selection = prompt(`What is your favourite programming language?
  
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    `);
  // console.log(selection);
  return selection;
}

//METHOD DECLARATOIN

poll.registerNewAnswer = function () {
  var selection = askUser();

  if (selection === 0) {
    this.answers[0]++;
  } else if (selection == 1) {
    this.answers[1]++;
  } else if (selection == 2) {
    this.answers[2]++;
  } else if (selection == 3) {
    this.answers[3]++;
  } else {
    console.log("Not a correct ans");
  }

  this.displayResults("string");
};

poll.displayResults = function (type) {
  if (type == "string") {
    console.log(
      `Poll results are ${poll.answers[0]}, ${poll.answers[1]}, ${poll.answers[2]} and ${poll.answers[3]}`
    );
    return;
  }

  console.log(poll.answers);
};

//BUTTON-PRESS

btn.addEventListener("click", function () {
  poll.registerNewAnswer();
});
