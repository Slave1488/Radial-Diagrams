for (const list of document.getElementsByClassName('diagram-list')) {
    const create = list.getElementsByClassName('create')[0];
    if (!create) {
        throw new Error('create not found in list');
    }

    create.addEventListener('click', () => {
        document.location.href = './constructor';
    });

    for (const diagram of list.getElementsByClassName('diagram')) {
        diagram.addEventListener('click', () => {
            document.location.href = './reviewer';
        });
    }
}
