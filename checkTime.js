var time = new Date().getHours();
// console.log(time);

if (time < 12) {
  console.log("Morning");
} else if (time >= 12 && time < 18) {
  console.log("Evening");
} else if (time > 18) {
  console.log("Night");
} else {
  ("No concept of time");
}
