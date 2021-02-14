export default class DiagramPattern {
    constructor(name, scaleRange, scaleNames) {
        this.name = name;
        this.size = {
            scalesNumber: scaleNames.length,
            range: scaleRange
        };
        this.scales = scaleNames;
    }
}
