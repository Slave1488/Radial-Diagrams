for (const reviewer of document.getElementsByClassName('diagram-reviewer')) {
    const canvas = reviewer.getElementsByTagName('canvas')[0];
    if (!canvas) {
        throw new Error('canvas not found in reviewer');
    }

    const close = reviewer.getElementsByClassName('close')[0];
    if (!close) {
        throw new Error('close not found in reviewer');
    }


    const w = canvas.width = canvas.offsetWidth;
    const h = canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext('2d');

    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, w, h);

    ctx.beginPath();
    ctx.arc(w / 2, h / 2, Math.min(w, h) / 2 - 10, 0, 2 * Math.PI);
    ctx.fill();


    close.addEventListener('click', () => {
        document.location.href = './';
    });
}
