class DiagramPattern {
    constructor(name, scaleRange, scaleNames) {
        this.name = name;
        this.size = {
            axlesNumber: scaleNames.length,
            range: scaleRange
        };
        this.scales = scaleNames;
    }
}

class DiagramPatterns {
    constructor() {
        this.patterns = JSON.parse(localStorage.getItem("diagram patterns"));
    }

    add(name, scaleRange, scaleNames) {
        this.patterns.push(new DiagramPattern(name, scaleRange, scaleNames));
        localStorage.setItem("diagram patterns", JSON.stringify(this.patterns))
    }

    show() {
        for (let pattern in this.patterns) {
            console.log(pattern, this.patterns[pattern]);
        }  
    }
}

let diagramPatterns = new DiagramPatterns();
export default diagramPatterns;
