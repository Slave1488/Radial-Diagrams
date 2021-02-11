import close from './close.js';
import display from './diagram-display.js';

export default (element) => {
    for (const reviewer of element.getElementsByClassName('diagram-reviewer')) {
        close(reviewer);
        display(reviewer);
    }
}
