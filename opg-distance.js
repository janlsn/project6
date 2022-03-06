"use strict";

class Point {
    constructor(x1, y1) {
        this.x1 = x1;
		this.y1 = y1;
    }

    distance(x2, y2) {
        return Math.sqrt(((x2 - this.x1)**2) + ((y2 - this.y1)**2)).toFixed(2);
    }
}


let c = new Point(0, 0);
console.log(c.distance(15, 17));