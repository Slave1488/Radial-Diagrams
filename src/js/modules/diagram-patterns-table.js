import canvas from './canvas';
import patterns from './diagram-patterns';

export default () => {
    
    patterns.add("Naruto", 10, ["strength", "intelligence", "agility"]);
    patterns.add("Boruto", 10, ["strength", "intelligence", "agility"]);
    patterns.add("Soruto", 10, ["strength", "intelligence", "agility"]);
    patterns.add("Seruto", 10, ["strength", "intelligence", "agility"]);
    document.addEventListener('DOMContentLoaded', () => {
        // e.preventDefault();
        let table = document.querySelector(".diag-homescreen__table-content");
        
        let tableItems = document.createElement('a');
        tableItems.classList.add('diag-homescreen__table-items');
        tableItems.setAttribute('href', 'diagramm.html');

        let tableDelete = document.createElement('div');
        tableDelete.classList.add('diag-homescreen__table-delete');
        tableItems.append(tableDelete);

        let imgDelete = document.createElement('img');
        imgDelete.setAttribute('src', 'img/delete.png');
        imgDelete.setAttribute('alt', 'delete');
        tableDelete.append(imgDelete);

        let tableImg = document.createElement('div');
        tableImg.classList.add('diag-homescreen__table-img');
        tableItems.append(tableImg);

        let imgCanvas = document.createElement('canvas');
        imgCanvas.width = 160;
        imgCanvas.height = 120;
        tableImg.append(imgCanvas);

        let tablTitle = document.createElement('div');
        tablTitle.classList.add('diag-homescreen__table-title');
        tableItems.append(tablTitle);

        let tablTitleH2 = document.createElement('h2');
        tablTitle.append(tablTitleH2);
        
        for (let pattern in patterns.patterns) {
            let item = tableItems.cloneNode(true);
            item.lastChild.firstChild.insertAdjacentText('beforeend', pattern);
            table.append(item);
        }
    });
    //addPattern("cryptocurrency ", 5, ["profitability", "scalability", "notoriety", "reliability"]);
}
