import patterns from './diagram-patterns';

export default () => {
    let maker = document.forms["pattern maker"];
    let diagramName = maker["name"];
    let diagramScales = maker["scale"];

    savePattern.addEventListener('click', () => {
        let name = diagramName.value;
        let scales = [];
        for (let scale of diagramScales) {
            scales.push(scale.value);
        }
        patterns.add(name, 10, scales);
    });
}
