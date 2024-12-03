class Particle {
  constructor(x, y, size) {
   this.x = x
   this.y = y
   this.size = size
  }

  update() {
   // smth
  }

  show() {
    fill(175, 219, 143)
    stroke(0,0,0)
    ellipse(this.x, this.y, this.size, this.size)
  }
}
