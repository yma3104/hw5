function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	noFill();
	
  for (var x = 50; x < width; x = x + 100) {
    for (var j = 10; j < 50; j = j + 10) {
			rect(x, 200, j, j);
		}
	}
}
