"use strict";
import Point from './point.js';

class NGon {
    constructor(position, corners, n=null) {
        this._position = position;
        this._corners = corners;
        if (n !== null)
            this._n = n;
        else
            this._n = corners.length;
    }

    get position() {
        return this._position;
    }

    get corners() {
        return this._corners.map(c => c.add(this.position));
    }

    get n() {
        return this._n;
    }

    move(displacement) {
        let position = this._position.add(displacement);
        return new NGon(position, this._corners, this._n);
    }

    scale(coefficient) {
        let corners = this._corners.map(c => c.multiply(coefficient));
        return new NGon(this._position, corners, this._n);
    }
}

export default class CenteredNormalizedNGon extends NGon {
    constructor(n) {
        super(new Point(0, 0), CenteredNormalizedNGon.genCorners(n), n);
    }

    static genCorners(n) {
        let res = [];
        for (let i = 0; i < n; ++i) {
            res.push(new Point(
                Math.cos(-Math.PI * 2 / n * i + Math.PI / 2),
                Math.sin(-Math.PI * 2 / n * i + Math.PI / 2)));
        }
        return res;
    }
}
