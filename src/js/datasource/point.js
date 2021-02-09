"use strict";
export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    multiply(factor) {
        factor = Number(factor);
        let x = this.x * factor;
        let y = this.y * factor;
        return new Point(x, y);
    }

    add(addendum) {
        let x = this.x + addendum.x;
        let y = this.y + addendum.y;
        return new Point(x, y);
    }

    reversX() {
        return new Point(-this.x, this.y);
    }

    reversY() {
        return new Point(this.x, -this.y);
    }
};
