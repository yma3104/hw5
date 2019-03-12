function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	
  for (var x = 1; x <= 200; x = x + 10) {
    line(200 - x, x, 200 + x, x);
  }
}
