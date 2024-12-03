class Mould {
  constructor() {
    this.x = random(width)
    this.y = random(height)
    this.diameter = 10
    this.particles = []
    this.remainingParticles = 0
    this.lastX = this.x
    this.lastY = this.y
  }

  populate(length) {
    this.remainingParticles += length // Queuing particles for creation
  }

  update() {

    if (this.remainingParticles > 0) {
      let size = random(3, 6)
      // Spawn the new particle next to the last one
      this.lastX += random(-size, size)
      this.lastY += random(-size, size)
      this.particles.push(new Particle(this.lastX, this.lastY, size))
      this.remainingParticles--
    }
  }

  show() {
    noFill()
    stroke(255,0,0)
    ellipse(this.x, this.y, this.diameter)
    this.particles.forEach((particle) => particle.show())
  }
}
