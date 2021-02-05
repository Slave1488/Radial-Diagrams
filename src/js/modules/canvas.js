import Render2D from './api-render';
import BasicNGon from './n-gon';
import { RandNum } from './num';
import patterns from './diagram-patterns';

export default () => {
    document.addEventListener('DOMContentLoaded', () => {
        for (let canvas of document.querySelectorAll('canvas')) {
            let ctx = canvas.getContext('2d');

            // canvas.width = window.innerWidth;
            // canvas.height = window.innerHeight;
            
            let render = new Render2D(canvas);
            
            function renderNGon(radius, n = 6) {
                let NGon = new BasicNGon(n).scale(radius);
                render.strokePath(NGon.corners);
            }

            let id;
            let n = (id = canvas.dataset.patternId) != undefined ? patterns.get(id).size.axlesNumber : 6;

            let grad = ctx.createLinearGradient(0, 0, 160, 120);
            grad.addColorStop(0, 'red');
            grad.addColorStop(0.5, 'cyan');
            grad.addColorStop(1, 'blue');
            ctx.strokeStyle = grad;
            for (let i = 0; i < 10; ++i) {
                renderNGon(i*10, n);
            }

            grad = ctx.createLinearGradient(0, 0, 160, 120);
            grad.addColorStop(0, 'cyan');
            grad.addColorStop(0.5, 'blue');
            grad.addColorStop(1, 'red');
            ctx.strokeStyle = grad;
            renderNGon(new RandNum(1, 10).multiply(10), n);
        }
    });
}
