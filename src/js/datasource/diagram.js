export default class Diagram {
    static default = new Diagram("Великая диаграмма", 10, [5, 4, 3, 2, 1]);

    constructor(name, indicatorRange, indicatorValues) {
        this.name = name;
        this.size = {
            indicatorNumber: indicatorValues.length,
            indicatorRange: indicatorRange
        };
        this.values = indicatorValues;
    }

    [Symbol.iterator]() {
        return this.values.iterator();
    }
}
