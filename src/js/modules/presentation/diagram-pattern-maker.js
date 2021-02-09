import patterns from '../datasource/diagram-patterns';

export default () => {
    for (let form of document.querySelectorAll('form.diagramm-template__form')) {
        let inputName = form["name"];
        let inputScales = form["scale"];

        savePattern.addEventListener('click', () => {
            let name = inputName.value;
            let scales = Array.from(inputScales).map(is => is.value);
            console.log(scales);
            patterns.add(name, 10, scales);
        });
    }
}
