import Point from './point';
import Render2D from './api-render';
import BasicNGon from './n-gon';
import { RandNum } from './num';
import { Math } from 'core-js';

export default () => {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    ctx.scale(3, 3);

    ctx.arc(25, 25, 25, 0, Math.PI * 2);
    ctx.fill();
    
    let render = new Render2D(canvas);
    
    function renderNGon(radius, origin, n = 6) {
        let NGon = new BasicNGon(n).scale(radius).move(origin);
        render.strokePath(NGon.corners);
    }

    let center = new Point(100, 100);

    for (let i = 0; i < 10; ++i)
        renderNGon(i * 10, center);

    ctx.strokeStyle = 'white';
    renderNGon(new RandNum(1, 10).multiply(10), center);
}
