function splitBill(bill, number, percent) {
  return Math.round((bill + bill * (percent / 100)) / number);
}
console.log(splitBill(430, 2, 2));
