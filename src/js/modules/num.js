"use strict";
class Num {
    multiply(factor) {
        return new MultNum(this, factor);
    }
}

class MultNum extends Num {
    constructor(multiplicable, factor) {
        super();
        this.multiplicable = multiplicable;
        this.factor = factor;
    }

    [Symbol.toPrimitive](hint) {
        return this.multiplicable * this.factor;
    }
}

export class RandNum extends Num {
    constructor(min, max) {
        super();
        this.min = min;
        this.range = max - min;
    }

    [Symbol.toPrimitive](hint) {
        return Math.floor(Math.random() * this.range) + this.min;
    }
}
