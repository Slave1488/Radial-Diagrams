import patterns from '../datasource/diagram-patterns';
import environment from './environment';

export default () => {
    document.addEventListener('DOMContentLoaded', () => {
        // e.preventDefault();
        function getTableItem(title, patternId) {
            return `<a class="diag-homescreen__table-items" href="diagramm.html" data-pattern-id="${patternId}">
            <div class="diag-homescreen__table-delete">
                <img src="img/delete.png" alt="delete">
            </div>
            <div class="diag-homescreen__table-img">
                <canvas width="160" height="120" data-pattern-id="${patternId}"></canvas>
            </div>
            <div class="diag-homescreen__table-title">
              <h2>${title}</h2>
            </div>
            </a>`;
        }

        for (let table of document.querySelectorAll('.diag-homescreen__table-content')) {
            for (let patternId in patterns.patterns) {
                let pattern = patterns.patterns[patternId];
                let item = getTableItem(pattern.name, patternId);
                table.insertAdjacentHTML("beforeend", item);
                table.lastChild.addEventListener('click', () => {
                    environment.set("loading pattern id", patternId);
                });
            }
        }

        for (let tableDelete of document.querySelectorAll('.diag-homescreen__table-delete')) {
            tableDelete.addEventListener('click', () => {
                patterns.remove(tableDelete.parentElement.dataset.patternId);
                tableDelete.parentElement.remove();
            });
        }
    });
}
