export default () => {
    // localStorage.clear();
    if (!localStorage.getItem("diagram patterns")) {
        localStorage.setItem("diagram patterns", JSON.stringify([]));
    }
    if (!localStorage.getItem("environment")) {
        localStorage.setItem("environment", JSON.stringify({}));
    }
}
