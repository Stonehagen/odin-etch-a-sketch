const divMain = document.querySelector('#main');

// genereate 15 rows
for (let i = 0 ; i < 16 ; i++) {

    let divRow = document.createElement('div');
    divRow.className = 'row';
    divRow.id = i;

    // genereate 15 columns
    for (let j = 0 ; j < 16 ; j++) {
        let divCol = document.createElement('div');
        divCol.className = 'col';
        divCol.id = j;
        divRow.appendChild(divCol);
    }

    divMain.appendChild(divRow);
};