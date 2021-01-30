"use strict";
import Point from './point';

export default class Render2D {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');
    }

    get center() {
        return new Point(this._canvas.width / 2, this._canvas.height / 2);
    }

    static fromLogicalToDrawing(point) {
        return point.reversY();
    }

    strokePath(logicalPoints) {
        let drowingPoints = logicalPoints.map(Render2D.fromLogicalToDrawing);
        this._context.beginPath();
        let point = drowingPoints.unshift();
        this._context.moveTo(point.x, point.y);
        for (let point of drowingPoints) {
            this._context.lineTo(point.x, point.y);
        }
        this._context.closePath();
        this._context.stroke();
    }
};
