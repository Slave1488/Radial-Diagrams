export default (element) => {
    const close = element.getElementsByClassName('close')[0];
    if (!close) {
        throw new Error(`close not found in ${element.name}`);
    }


    close.addEventListener('click', () => {
        document.location.href = './';
    });
}
