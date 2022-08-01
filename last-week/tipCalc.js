//--------------PROGRAM 4---------------------

var tip = 0;

var bill = [275, 40, 430];

function calcTip(bill) {
  var tip = 0;
  bill >= 50 && bill <= 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill);
  return tip;
}

for (let i = 0; i < bill.length; i++) {
  tip = calcTip(bill[i]);
  // console.log(tip);

  console.log(
    `The bill was ${bill[i]} , the tip was ${tip}, and the total value ${
      bill[i] + tip
    }`
  );
  console.log("\n");
}
