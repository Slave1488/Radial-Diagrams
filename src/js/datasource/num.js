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

export class ConceivedNum extends Num {
    constructor(scheme) {
        super();
        if (scheme.length == 0) {
            throw Error('Empty scheme for ConceivedNum');
        }
        this.scheme = scheme;
        this.iterator = this.scheme[Symbol.iterator]();
    }

    [Symbol.toPrimitive](hint) {
        let result = this.iterator.next();
        if (result.done) {
            this.iterator = this.scheme[Symbol.iterator]();
            result = this.iterator.next();
        }
        return result.value;
    }
}
