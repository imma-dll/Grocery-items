var car = {
  x: 0,
  y: 0,
  goNorth: function (val) {
    this.y = this.y + val;
    console.log(this.x, this.y);
  },
  goSouth: function (val) {
    this.y = this.y - val;
    console.log(this.x, this.y);
  },
  goEast: function (val) {
    this.x = this.x + val;
    console.log(this.x, this.y);
  },
  goWest: function (val) {
    this.x = this.x - val;
    console.log(this.x, this.y);
  },
};

var ferrari = Object.create(car);
console.log(ferrari.x, ferrari.y);
ferrari.goSouth(3);
ferrari.goEast(2);
ferrari.goWest(10);
ferrari.goNorth(5);
