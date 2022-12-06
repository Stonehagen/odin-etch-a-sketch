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
            if (e.target.style.backgroundColor == "") {
                e.target.style.backgroundColor = `#${randomValue()}${randomValue()}${randomValue()}`;
            } else if (e.target.style.backgroundColor) {
                e.target.style.backgroundColor = reparseToDarkerValue(e.target.style.backgroundColor)
            }
            
        });
    });
};

function randomValue() {
    return Math.floor(Math.random() * 255).toString(16);
}

function reparseToDarkerValue(rgbStr) {
    let rgbString = rgbStr.replace('rgb', '').replace('(', '').replace(')', '');
    let r = Math.floor(rgbString.split(',')[0].replace(' ', ''));
    let g = Math.floor(rgbString.split(',')[1].replace(' ', ''));
    let b = Math.floor(rgbString.split(',')[2].replace(' ', ''));
    console.log(r)
    r -= 25;
    console.log(r)
    g -= 25;
    b -= 25;

    if (r < 0) {
        r = 0;
    }
    if (g < 0) {
        g = 0;
    }
    if (b < 0) {
        b = 0;
    }

    return `rgb(${r}, ${b}, ${g})`
}
    
btnConfig.addEventListener('click', (e) => {
    numberSquares = prompt('Number of squares!');
    genereteGrid(numberSquares);
})

genereteGrid(numberSquares);
listen();