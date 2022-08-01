function calcTip(bill) {
  var tip = 0;
  bill >= 50 && bill <= 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill);
  return tip;
}

var tips = [];
var bills = [125, 555, 44];
var total = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  total.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(total);
