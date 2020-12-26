const leftBtn = document.querySelector('#addRow');
const topBtn = document.querySelector('#addColumn');
const tableSelector = document.querySelector('.table');

leftBtn.addEventListener('click', () => {
    return addRow();
})

topBtn.addEventListener('click', () => {
    return addColumn();
})

const addColumn = () => {
    const row = document.querySelectorAll('.row');

   return  row.forEach(it => {
        const div = document.createElement('div');

        div.setAttribute('class', 'cell');
        it.append(div)}
    );
}



const addRow = () => {
    const rows = document.querySelectorAll('.row');

    const lastNode = rows[rows.length - 1];

    const div = document.createElement('div');
    div.setAttribute('class', 'row');

    const mutatedDiv = appendToRow(div, lastNode.childElementCount);

    return tableSelector.append(mutatedDiv);
};

const appendToRow = (element, childCount) => {
    for(let i = 0; i < childCount; i++ ){
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');

        element.append(cell);
    }

    return element;
}
