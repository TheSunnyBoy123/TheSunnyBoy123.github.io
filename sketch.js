function setup() {
	createCanvas(windowWidth, windowHeight);
	// put setup code here
}
let time = 0.0;
function draw() {
	background(00, 00, 00);
	// put drawing code here
	time += 0.1;
	let startIndex = 100;
	let spacer = 20;
	let radius = 50;
	let reds = [250, 255, 232, 250, 250];
	let blues = [90, 84, 12, 90, 90];
	let greens = [40, 13, 122, 40, 40];
	let omegas = [0.20, 0.30, 0.50, 0.8, 1.0];
	let pointR = 1;
	for (let i = 1; i < 6; i++) {
		let r = startIndex + (i * spacer) + (((2 * i)) * radius);
		stroke(reds[i - 1], blues[i - 1], greens[i - 1]);
		strokeWeight(2);
		noFill();
		ellipse(r, startIndex, (2 * radius));

		stroke(reds[i - 1], blues[i - 1], greens[i + 1]);
		strokeWeight(2);
		fill(reds[i - 1], blues[i - 1], greens[i - 1]);
		ellipse(r + (radius * cos(omegas[i - 1] * time)), startIndex + (radius * sin(omegas[i - 1] * time)), 4);


		// ellipse(startIndex, r, (2 * radius));



	}
}

