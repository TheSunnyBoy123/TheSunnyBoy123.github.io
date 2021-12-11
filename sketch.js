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
	let reds = [255, 255, 255, 255, 255];
	let blues = [0, 87, 0, 133, 175];
	let greens = [0, 87, 123, 133, 150];
	let omegas = [0.20, 0.30, 0.50, 0.8, 1.0];
	let pointR = 1;
	for (let i = 1; i < 6; i++) {
		let r = startIndex + (i * spacer) + (((2 * i)) * radius); //radius for each circle at this iteration

		//horizontal circles
		stroke(reds[i - 1], blues[i - 1], greens[i - 1]);
		strokeWeight(2);
		noFill();
		ellipse(r, startIndex, (2 * radius));

		//revolving dot for horizontal circles
		stroke(255, 255, 255);
		strokeWeight(2);
		fill(255, 255, 255);
		ellipse(r + (radius * cos(omegas[i - 1] * time)), startIndex + (radius * sin(omegas[i - 1] * time)), 4);


		//line from horizontal circles
		strokeWeight(1);
		line(r + (radius * cos(omegas[i - 1] * time)), startIndex + (radius * sin(omegas[i - 1] * time)), r + (radius * cos(omegas[i - 1] * time)), startIndex + (5 * spacer) + (((2 * 5)) * radius) + (radius * sin(omegas[4] * time)))

		//vertical circles
		stroke(reds[i - 1], blues[i - 1], greens[i - 1]);
		strokeWeight(2);
		noFill();
		ellipse(startIndex, r, (2 * radius));

		//revolving dots for vertical circles
		stroke(255, 255, 255);
		strokeWeight(2);
		fill(reds[i - 1], blues[i - 1], greens[i - 1]);
		ellipse(startIndex + (radius * cos(omegas[i - 1] * time)), r + (radius * sin(omegas[i - 1] * time)), 4);

		//line from vertical circles
		strokeWeight(1);
		line(startIndex + (radius * cos(omegas[i - 1] * time)), r + (radius * sin(omegas[i - 1] * time)), startIndex + (5 * spacer) + (((2 * 5)) * radius) + (radius * cos(omegas[4] * time)), r + (radius * sin(omegas[i - 1] * time)))
	}
}

