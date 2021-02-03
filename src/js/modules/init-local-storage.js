export default () => {
    // localStorage.clear();
    if (localStorage.getItem("diagram patterns") == null) {
        localStorage.setItem("diagram patterns", JSON.stringify([]));
    }
}
