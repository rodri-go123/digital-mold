class Mould {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = 10;
  }

  update() {
   // smth
  }

  display() {
   ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
