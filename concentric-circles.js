function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	noFill();
	
  for (var x = 20; x < 390; x = x + 20) {
    ellipse(200, 200, x + 10);
  }
}
