import diagramPatterns from './diagram-patterns';

export default () => {
    let table = document.querySelector(".diag-homescreen__table-items");
    document.querySelector(".diag-homescreen").onclick = () => {
        diagramPatterns.add("Boruto", 10, ["strength", "intelligence", "agility"]);
        table.insertAdjacentHTML("afterend", "<div style=\"background: red; width: 100px\"></div>");
    };
    //addPattern("cryptocurrency ", 5, ["profitability", "scalability", "notoriety", "reliability"]);
}
