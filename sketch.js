let mould
let particle

function setup() {
  createCanvas(400, 400);
  mould = new Mould();
}

function draw() {
  background(220);
  mould.display();
}
