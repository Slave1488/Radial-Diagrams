import patterns from './diagram-patterns';

export default () => {
    let maker = document.forms["pattern maker"];
    let diagramName = maker["name"];
    let diagramScales = maker["scale"];
    console.log(diagramName);
    console.log(diagramScales);

    savePattern.addEventListener('click', () => {
        let name = diagramName.value;
        console.log(name);
        let scales = [];
        for (let scale of diagramScales) {
            scales.push(scale.value);
        }
        patterns.add(name, 10, scales);
        console.log("check");
    });
}
