import Render2D from './api-render';
import BasicNGon from './n-gon';
import { RandNum } from './num';

export default () => {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    
    let render = new Render2D(canvas);
    
    function renderNGon(radius, n = 6) {
        let NGon = new BasicNGon(n).scale(radius);
        render.strokePath(NGon.corners);
    }

    for (let i = 0; i < 10; ++i)
        renderNGon(i*10);

    ctx.strokeStyle = 'white';
    renderNGon(new RandNum(1, 10).multiply(10));
}
