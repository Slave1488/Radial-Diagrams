for (const diagram of document.getElementsByClassName('diagram')) {
    diagram.addEventListener('click', () => {
        document.location.href = './display.html';
    });
}