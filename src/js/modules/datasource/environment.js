class Environment {
    constructor() {
        this.environment = JSON.parse(localStorage.getItem("environment"));
    }

    set(key, value) {
        this.environment[key] = value;
        localStorage.setItem("environment", JSON.stringify(this.environment))
    }

    get(key) {
        return this.environment[key];
    }

    show() {
        for (let key in this.environment) {
            console.log(key, this.environment[key]);
        }  
    }
}

export default new Environment();
