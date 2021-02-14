import Diagram from './datasource/diagram.js';
    
let render = new Render2D(canvas);
    
function renderNGon(radius, n = 6) {
    let NGon = new BasicNGon(n).scale(radius);
    render.strokePath(NGon.corners);
}


for (const constructor of document.getElementsByClassName('diagram-constructor')) {
    const close = constructor.getElementsByClassName('close')[0];
    if (!close) {
        throw new Error('close not found in constructor');
    }


    close.addEventListener('click', () => {
        document.location.href = './';
    });


    const display = constructor.getElementsByClassName('diagram-display')[0];
    if (!display) {
        throw new Error('display not found in constructor');
    }

    const canvas = display.getElementsByTagName('canvas')[0];
    if (!canvas) {
        throw new Error('canvas not found in display');
    }


    const diagramData = display.dataset.diagram
    if (diagramData) {
        const diagram = JSON.parse(diagramData);
    } else {
        const diagram = Diagram.default;
    }


    let grad = ctx.createLinearGradient(0, 0, 160, 120);
    grad.addColorStop(0, 'red');
    grad.addColorStop(0.5, 'cyan');
    grad.addColorStop(1, 'blue');
    ctx.strokeStyle = grad;
    renderNGon(new RandNum(1, 10).multiply(10), n);
}
