let moulds = []
let count = 0

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  frameRate(24);
}

function mouseClicked() {
  moulds.push(new Mould())
  // moulds[count].show()
  moulds[count].populate(100)
  count ++

  // moulds.forEach((mould) => {
  //   mould.show()
  //   mould.populate(100)
  // })
}

function draw() {
  moulds.forEach((mould) => {
    mould.update() // Gradually create particles
    mould.show()   // Display the mould and its particles
  })
}
