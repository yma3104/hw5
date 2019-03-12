function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
 
  var x = 0;
	while (x <= width) {
    ellipse(x, 200, 25, 25);
		x = x + 50;
  }
	
	for (var x = 0; x <= width; x = x + 50) {
		for (var y = 0; y <= height; y = y + 50) {
		  ellipse(x, y, 25, 25);
	  }
  }
}
