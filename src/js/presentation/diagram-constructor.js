import close from './close.js';
import display from './diagram-display.js';

export default (element) => {
    for (const constructor of element.getElementsByClassName('diagram-constructor')) {
        close(constructor);
        display(constructor);
    }
}


// OLD CODE
/*import patterns from '../datasource/diagram-patterns';
import environment from './environment';

export default () => {
    let patternId = environment.get("loading pattern id");
    let loadedPattern = patterns.get(patternId);
    console.log(loadedPattern);

    for (let title of document.querySelectorAll('.diagramm-main__title-main>h1')) {
        title.textContent = loadedPattern.name;
        // let inputName = form["name"];
        // let inputScales = form["scale"];

        // savePattern.addEventListener('click', () => {
        //     let name = inputName.value;
        //     let scales = Array.from(inputScales).map(is => is.value);
        //     patterns.add(name, 10, scales);
        // });
    }

    for (let diagram of document.querySelectorAll('.diagramm-main__diagramm')) {
        diagram.insertAdjacentHTML("beforeend", `<canvas data-pattern-id="${patternId}">`);
    }

    for (let container of document.querySelectorAll('.diagramm-main__parameter-container')) {
        container.insertAdjacentHTML("beforeend",
            `<div class="diagramm-value">
                <label for="name">${loadedPattern.name}</label>
                <input type="text" id="name">
            </div>`);
        for (let scale of loadedPattern.scales) {
            container.insertAdjacentHTML("beforeend",
                `<div class="diagramm-value">
                    <label for="str">${scale}</label>
                    <input type="text" id="str">
                </div>`);
        }
    }
}
*/