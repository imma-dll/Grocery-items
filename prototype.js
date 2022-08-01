function vehicle(x, y) {
  this.x = x;
  this.y = y;

  this.goNorth = function (val) {
    this.y = this.y + val;
    console.log(this.x, this.y);
  };

  this.goSouth = function (val) {
    this.y = this.y - val;
    console.log(this.x, this.y);
  };

  this.goEast = function (val) {
    this.x = this.x + val;
    console.log(this.x, this.y);
  };

  this.goWest = function (val) {
    this.x = this.x - val;
    console.log(this.x, this.y);
  };
}

const car = new vehicle(0, 0);
console.log(car.x, car.y);
car.goSouth(3);
car.goEast(2);
car.goWest(10);
car.goNorth(5);
