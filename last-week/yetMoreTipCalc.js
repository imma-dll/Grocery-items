bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

function calcTip(bill) {
  var tip = 0;
  bill >= 50 && bill <= 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill);
  return tip;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}
