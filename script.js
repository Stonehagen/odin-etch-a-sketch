const divMain = document.querySelector('#main');
const btnConfig = document.querySelector('#config');
let grid ;
let numberSquares = 16;

function genereteGrid(n) {
    divMain.innerHTML = '';

    // genereate 15 rows
    for (let i = 0 ; i < n ; i++) {

        let divRow = document.createElement('div');
        divRow.className = 'row';
        divRow.id = i;

        // genereate 15 columns
        for (let j = 0 ; j < n ; j++) {
            let divCol = document.createElement('div');
            divCol.className = 'col';
            divCol.id = j;
            divRow.appendChild(divCol);
        }

        divMain.appendChild(divRow);
    };
    grid = document.querySelectorAll('.col');
    listen();
};

function listen() {
    grid.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    })
}
    
btnConfig.addEventListener('click', (e) => {
    numberSquares = prompt('Number of squares!');
    genereteGrid(numberSquares);
})

genereteGrid(numberSquares);
listen();