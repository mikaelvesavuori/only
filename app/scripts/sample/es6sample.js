"use strict";

class Polygon {
	constructor(height, width) {
		this.name = "Polygon";
		this.height = height;
		this.width = width;
	}

	sayName() {
		ChromeSamples.log("Hi, I am a ", this.name + ".");
	}

	sayHistory() {
		ChromeSamples.log("'Polygon' is derived from the Greek polus (many) " +
		"and gonia (angle).");
	}

}

let p = new Polygon(300, 400);
p.sayName();
ChromeSamples.log("The width of this polygon is " + p.width);