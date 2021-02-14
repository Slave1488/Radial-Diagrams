import Diagram from './datasource/diagram.js';
import Render2D from './domain/render-api.js';
import { ConceivedNum } from './datasource/num.js';
import BasicNGon from './datasource/n-gon.js';
    
function renderNGon(render, diagram) {
    let NGon = new BasicNGon(diagram.size.indicatorNumber).scale(new ConceivedNum(diagram.values).multiply(10));
    render.strokePath(NGon.corners);
}

for (const reviewer of document.getElementsByClassName('diagram-reviewer')) {
    const close = reviewer.getElementsByClassName('close')[0];
    if (!close) {
        throw new Error('close not found in reviewer');
    }


    close.addEventListener('click', () => {
        document.location.href = './';
    });


    const display = reviewer.getElementsByClassName('diagram-display')[0];
    if (!display) {
        throw new Error('display not found in reviewer');
    }

    const canvas = display.getElementsByTagName('canvas')[0];
    if (!canvas) {
        throw new Error('canvas not found in display');
    }


    let render = new Render2D(canvas);

    const diagramData = display.dataset.diagram;
    let diagram;
    if (diagramData) {
        diagram = JSON.parse(diagramData);
    } else {
        diagram = Diagram.default;
    }

    renderNGon(render, diagram);
}
